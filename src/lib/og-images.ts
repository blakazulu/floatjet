/**
 * Open Graph image generation (replaces astro-opengraph-images' build hook).
 *
 * The upstream hook renders every page at once (Promise.all over all pages, one jsdom per page), which runs the
 * Netlify build out of memory (exit 137). This version renders a few pages at a time and reads the meta tags with a
 * small parser instead of jsdom. Output paths match `getImagePath()` from astro-opengraph-images, which Head.astro
 * still uses to build the og:image URL.
 */
import { existsSync } from "node:fs";
import { readFile, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import type { AstroIntegration } from "astro";
import satori from "satori";
import { Resvg } from "@resvg/resvg-js";

export interface OgPageDetails {
  title: string;
  description?: string;
  url: string;
  type: string;
  image: string;
}

export interface OgImageOptions {
  width?: number;
  height?: number;
  fonts: Array<{ name: string; data: Buffer | ArrayBuffer; weight?: number; style?: "normal" | "italic" }>;
  /** Pages rendered in parallel. Keep low: each render holds a satori tree and a resvg canvas. */
  concurrency?: number;
}

type RenderFn = (input: OgPageDetails & { pathname: string }) => Promise<unknown> | unknown;

const ENTITIES: Record<string, string> = { amp: "&", lt: "<", gt: ">", quot: '"', apos: "'", nbsp: " " };

export function decodeEntities(value: string): string {
  return value.replace(/&(#x[0-9a-f]+|#\d+|[a-z]+);/gi, (match, code: string) => {
    if (code[0] === "#") {
      const n = code[1].toLowerCase() === "x" ? parseInt(code.slice(2), 16) : parseInt(code.slice(1), 10);
      return Number.isFinite(n) ? String.fromCodePoint(n) : match;
    }
    return ENTITIES[code.toLowerCase()] ?? match;
  });
}

/** Reads og:* meta tags from HTML, whatever the attribute order or quoting. */
export function extractOgMeta(html: string): OgPageDetails {
  const head = html.slice(0, html.search(/<\/head>/i) + 1 || html.length);
  const props: Record<string, string> = {};
  for (const tag of head.match(/<meta\b[^>]*>/gi) ?? []) {
    const attrs: Record<string, string> = {};
    for (const m of tag.matchAll(/([a-z:-]+)\s*=\s*("([^"]*)"|'([^']*)'|([^\s"'>]+))/gi)) {
      attrs[m[1].toLowerCase()] = m[3] ?? m[4] ?? m[5] ?? "";
    }
    const key = attrs.property ?? attrs.name;
    if (key && key.startsWith("og:") && attrs.content !== undefined && !(key in props)) {
      props[key] = decodeEntities(attrs.content);
    }
  }
  const missing = ["og:title", "og:url", "og:type", "og:image"].filter((k) => !props[k]);
  if (missing.length) throw new Error(`Missing required meta tags: ${missing.join(", ")}`);
  const details: OgPageDetails = {
    title: props["og:title"],
    url: props["og:url"],
    type: props["og:type"],
    image: props["og:image"],
  };
  if (props["og:description"] && props["og:description"] !== details.title) {
    details.description = props["og:description"];
  }
  return details;
}

/** Same rule as astro-opengraph-images: /blog/ -> dist/blog/index.html, /404/ -> dist/404.html */
export function htmlFileFor(dir: string, pathname: string): string {
  const inFolder = path.join(dir, pathname, "index.html");
  return existsSync(inFolder) ? inFolder : path.join(dir, pathname.slice(0, -1) + ".html");
}

/** Runs `worker` over `items` with at most `limit` in flight. */
export async function mapLimit<T>(items: T[], limit: number, worker: (item: T) => Promise<void>): Promise<void> {
  let next = 0;
  const runners = Array.from({ length: Math.max(1, Math.min(limit, items.length)) }, async () => {
    while (next < items.length) {
      const item = items[next++];
      await worker(item);
    }
  });
  await Promise.all(runners);
}

export async function generateOgImages({
  dir,
  pathnames,
  render,
  options,
  log = () => {},
}: {
  dir: string;
  pathnames: string[];
  render: RenderFn;
  options: OgImageOptions;
  log?: (message: string) => void;
}): Promise<number> {
  const width = options.width ?? 1200;
  const height = options.height ?? 630;
  let count = 0;

  await mapLimit(pathnames, options.concurrency ?? 4, async (pathname) => {
    const htmlFile = htmlFileFor(dir, pathname);
    if (!existsSync(htmlFile)) return; // non-HTML routes (JSON, Markdown, txt endpoints)
    const html = await readFile(htmlFile, "utf-8");
    if (!/property=["']?og:image/i.test(html)) return; // pages without Open Graph tags (e.g. redirects)

    const details = extractOgMeta(html);
    const pngFile = htmlFile.replace(/\.html$/, ".png");
    const expected = path.relative(dir, pngFile).replace(/\\/g, "/");
    const actual = new URL(details.image).pathname.slice(1);
    if (actual !== expected) {
      throw new Error(`og:image in ${htmlFile} (${actual}) does not match the generated image (${expected}).`);
    }

    const node = await render({ ...details, pathname });
    const svg = await satori(node as Parameters<typeof satori>[0], { width, height, fonts: options.fonts as never });
    const png = new Resvg(svg, { font: { loadSystemFonts: false }, fitTo: { mode: "width", value: width } })
      .render()
      .asPng();
    await writeFile(pngFile, png);
    count++;
  });

  log(`Generated ${count} Open Graph images`);
  return count;
}

export default function ogImages({ options, render }: { options: OgImageOptions; render: RenderFn }): AstroIntegration {
  return {
    name: "floatjet-og-images",
    hooks: {
      "astro:build:done": async ({ dir, pages, logger }) => {
        logger.info("Generating Open Graph images");
        await generateOgImages({
          dir: fileURLToPath(dir),
          pathnames: pages.map((page) => "/" + page.pathname),
          render,
          options,
          log: (message) => logger.info(message),
        });
      },
    },
  };
}
