// Static checks on config and markup that the agent-readiness features depend on
import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";

const netlifyToml = readFileSync("netlify.toml", "utf-8");
const redirects = netlifyToml
  .split("[[redirects]]")
  .slice(1)
  .map((block) => ({
    from: block.match(/from = "([^"]+)"/)?.[1],
    to: block.match(/to = "([^"]+)"/)?.[1],
    status: Number(block.match(/status = (\d+)/)?.[1]),
    force: /force = true/.test(block.split("[[")[0]),
  }));

describe("netlify.toml", () => {
  it("rewrites unknown /api/* paths to the JSON 404 without shadowing real files", () => {
    const rule = redirects.find((candidate) => candidate.from === "/api/*");
    assert.deepEqual(rule, { from: "/api/*", to: "/api/errors/404.json", status: 404, force: false });
  });

  it("serves the API index at /api and /api/ before the catch-all", () => {
    const order = redirects.map((rule) => rule.from);
    for (const from of ["/api", "/api/"]) {
      const rule = redirects.find((candidate) => candidate.from === from);
      assert.deepEqual(rule, { from, to: "/api/index.json", status: 200, force: true });
      assert.ok(order.indexOf(from) < order.indexOf("/api/*"));
    }
  });

  it("sets JSON and Markdown content types", () => {
    assert.match(netlifyToml, /for = "\/api\/\*"\s+\[headers\.values\]\s+Content-Type = "application\/json; charset=utf-8"/);
    assert.match(netlifyToml, /for = "\/openapi\.json"\s+\[headers\.values\]\s+Content-Type = "application\/json; charset=utf-8"/);
    assert.match(netlifyToml, /for = "\/index\.md"\s+\[headers\.values\]\s+Content-Type = "text\/markdown; charset=utf-8"/);
  });
});

describe("site markup", () => {
  const layout = readFileSync("src/layouts/BaseLayout.astro", "utf-8");

  it("Organization schema has contact points and footer-matching profiles", () => {
    assert.match(layout, /"@type": "ContactPoint",\s+contactType: "customer support",\s+email: "hello@floatjet\.com"/);
    const footer = readFileSync("src/components/Footer.astro", "utf-8");
    for (const profile of ["https://x.com/FloatJetWebsite", "https://www.linkedin.com/company/110340950"]) {
      assert.ok(footer.includes(profile) && layout.includes(profile), profile);
    }
  });

  it("footer (on the homepage) links to the developer docs", () => {
    assert.match(readFileSync("src/components/Footer.astro", "utf-8"), /href: "\/developers\/"/);
  });

  it("llms.txt links the developer resources", () => {
    const llms = readFileSync("src/pages/llms.txt.ts", "utf-8");
    for (const path of ["/developers/", "/openapi.json", "/api/articles.json", "/index.md"]) {
      assert.ok(llms.includes(`"${path}"`), path);
    }
  });
});
