/**
 * Post-build SEO checks on the built site in dist/.
 *
 * Fails (exit 1) on:
 * - internal links that don't resolve to a built page or file
 * - pages without exactly one <title>, meta description and canonical
 * - JSON-LD blocks that don't parse
 * - floatjet.com assets referenced from JSON-LD that don't exist (logo, images)
 * - sitemap URLs with no built page
 * - openapi.json, api/*.json, api/errors/404.json or index.md missing, malformed or out of sync
 * Warns on internal links missing the trailing slash (each costs a 301).
 *
 * Usage: node scripts/check-dist.cjs [distDir]
 */
const fs = require("fs");
const path = require("path");

const DIST = path.resolve(process.argv[2] || "dist");
const SITE = "https://floatjet.com";

if (!fs.existsSync(DIST)) {
  console.error(`No build output at ${DIST} - run the build first.`);
  process.exit(1);
}

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const full = path.join(dir, entry.name);
    return entry.isDirectory() ? walk(full) : [full];
  });
}

const files = walk(DIST);
const htmlFiles = files.filter((file) => file.endsWith(".html"));

// URL path -> does a built file serve it?
function resolves(urlPath) {
  const clean = decodeURIComponent(urlPath.split("#")[0].split("?")[0]);
  if (clean === "" || clean === "/") return fs.existsSync(path.join(DIST, "index.html"));
  const target = path.join(DIST, clean);
  if (clean.endsWith("/")) return fs.existsSync(path.join(target, "index.html"));
  return fs.existsSync(target) || fs.existsSync(path.join(target, "index.html")) || fs.existsSync(`${target}.html`);
}

// Minified HTML may drop attribute quotes, so accept quoted and unquoted values
const attr = (tag, name) => {
  const match = tag.match(new RegExp(`\\s${name}=(?:"([^"]*)"|'([^']*)'|([^\\s>]+))`, "i"));
  return match ? (match[1] ?? match[2] ?? match[3]) : undefined;
};

const errors = [];
const warnings = [];
const add = (list, page, message) => list.push(`${page}: ${message}`);

for (const file of htmlFiles) {
  const page = "/" + path.relative(DIST, file).split(path.sep).join("/").replace(/index\.html$/, "");
  const html = fs.readFileSync(file, "utf-8");
  const head = html.split(/<\/head>/i)[0];

  // Skip redirect stubs and the 404 page
  if (/http-equiv=["']?refresh/i.test(head) || page === "/404.html") continue;

  const titles = (head.match(/<title>/gi) || []).length;
  const descriptions = (head.match(/<meta[^>]*name=["']?description["'\s>][^>]*>/gi) || []).length;
  const canonicals = (head.match(/<link[^>]*rel=["']?canonical["'\s>][^>]*>/gi) || []).length;
  if (titles !== 1) add(errors, page, `${titles} <title> tags`);
  if (descriptions !== 1) add(errors, page, `${descriptions} meta descriptions`);
  if (canonicals !== 1) add(errors, page, `${canonicals} canonical links`);

  // JSON-LD must parse, and floatjet.com assets it references must exist
  const jsonLd = [...html.matchAll(/<script[^>]*type=["']?application\/ld\+json["']?[^>]*>([\s\S]*?)<\/script>/gi)];
  for (const [, raw] of jsonLd) {
    try {
      JSON.parse(raw);
    } catch {
      add(errors, page, "JSON-LD does not parse");
      continue;
    }
    for (const [, assetPath] of raw.matchAll(/https:\/\/floatjet\.com(\/[^"]+\.(?:png|jpe?g|webp|svg))/gi)) {
      if (!resolves(assetPath)) add(errors, page, `JSON-LD references missing asset ${assetPath}`);
    }
  }

  // Internal links (the body only - share buttons etc. are absolute external URLs)
  const body = html.slice(head.length);
  for (const [tag] of body.matchAll(/<a\s[^>]*>/gi)) {
    let href = attr(tag, "href");
    if (!href) continue;
    if (href.startsWith(SITE)) href = href.slice(SITE.length) || "/";
    if (!href.startsWith("/") || href.startsWith("//") || href.startsWith("/go/") || href.startsWith("/cdn-cgi/")) continue;
    const pathOnly = href.split("#")[0].split("?")[0];
    if (!resolves(pathOnly)) {
      add(errors, page, `broken internal link ${href}`);
    } else if (!pathOnly.endsWith("/") && !path.extname(pathOnly)) {
      add(warnings, page, `link without trailing slash ${href}`);
    }
  }
}

// Machine-readable files for agents: OpenAPI spec, API JSON, JSON 404 body, homepage Markdown
function readJson(relPath) {
  const file = path.join(DIST, relPath);
  if (!fs.existsSync(file)) {
    add(errors, relPath, "missing");
    return undefined;
  }
  try {
    return JSON.parse(fs.readFileSync(file, "utf-8"));
  } catch {
    add(errors, relPath, "is not valid JSON");
    return undefined;
  }
}

const spec = readJson("openapi.json");
if (spec) {
  if (spec.openapi !== "3.1.0") add(errors, "openapi.json", `unexpected openapi version ${spec.openapi}`);
  for (const specPath of Object.keys(spec.paths || {})) {
    if (specPath.includes("{")) continue;
    if (!fs.existsSync(path.join(DIST, specPath))) add(errors, "openapi.json", `documents ${specPath} but no file was built`);
  }
}

const articleList = readJson("api/articles.json");
if (articleList) {
  if (!Array.isArray(articleList.articles) || articleList.articles.length === 0 || articleList.count !== articleList.articles.length) {
    add(errors, "api/articles.json", "article list is empty or count does not match");
  } else {
    for (const article of articleList.articles) {
      if (!readJson(`api/articles/${article.slug}.json`)?.article) add(errors, "api/articles.json", `no detail file for ${article.slug}`);
      if (!resolves(new URL(article.url).pathname)) add(errors, "api/articles.json", `url has no page: ${article.url}`);
    }
  }
}

readJson("api/index.json");
readJson("api/sections.json");
const notFound = readJson("api/errors/404.json");
if (notFound && !(notFound.error && notFound.error.code && notFound.error.message && notFound.error.hint)) {
  add(errors, "api/errors/404.json", "error body needs code, message and hint");
}

const markdownFile = path.join(DIST, "index.md");
if (!fs.existsSync(markdownFile) || !fs.readFileSync(markdownFile, "utf-8").startsWith("# ")) {
  add(errors, "index.md", "homepage Markdown is missing or does not start with an H1");
}

// Every sitemap URL must have a built page
for (const file of files.filter((f) => /sitemap-\d+\.xml$/.test(f))) {
  const xml = fs.readFileSync(file, "utf-8");
  for (const [, loc] of xml.matchAll(/<loc>([^<]+)<\/loc>/g)) {
    const urlPath = loc.replace(SITE, "") || "/";
    if (!resolves(urlPath)) add(errors, path.basename(file), `sitemap URL has no page: ${loc}`);
  }
}

const unique = (list) => [...new Set(list)];
for (const warning of unique(warnings).slice(0, 50)) console.warn(`WARN  ${warning}`);
if (warnings.length > 50) console.warn(`WARN  ...and ${warnings.length - 50} more`);
for (const error of unique(errors)) console.error(`ERROR ${error}`);

console.log(`\nChecked ${htmlFiles.length} pages: ${unique(errors).length} errors, ${unique(warnings).length} warnings`);
process.exit(errors.length ? 1 : 0);
