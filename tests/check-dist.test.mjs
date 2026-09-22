// Runs scripts/check-dist.cjs against a fixture dist/ written from the real builders
import assert from "node:assert/strict";
import { spawnSync } from "node:child_process";
import { mkdirSync, mkdtempSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { after, describe, it } from "node:test";
import {
  buildApiIndex,
  buildArticleDetail,
  buildArticleList,
  buildHomepageMarkdown,
  buildOpenApiSpec,
  buildSectionList,
  notFoundError,
} from "../src/lib/agent-api.ts";

const fixtures = [];
after(() => fixtures.forEach((dir) => rmSync(dir, { recursive: true, force: true })));

function makeDist(overrides = {}) {
  const dist = mkdtempSync(join(tmpdir(), "floatjet-dist-"));
  fixtures.push(dist);
  const write = (relPath, content) => {
    const file = join(dist, relPath);
    mkdirSync(dirname(file), { recursive: true });
    writeFileSync(file, typeof content === "string" ? content : JSON.stringify(content));
  };
  const page = (urlPath) =>
    `<html><head><title>t</title><meta name="description" content="d"><link rel="canonical" href="https://floatjet.com${urlPath}"></head><body></body></html>`;

  const list = buildArticleList();
  const files = {
    "index.html": page("/"),
    "index.md": buildHomepageMarkdown(),
    "llms.txt": "# FloatJet\n",
    "openapi.json": buildOpenApiSpec(),
    "api/index.json": buildApiIndex(),
    "api/articles.json": list,
    "api/sections.json": buildSectionList(),
    "api/errors/404.json": notFoundError,
  };
  for (const article of list.articles) {
    const urlPath = new URL(article.url).pathname;
    files[`${urlPath.slice(1)}index.html`] = page(urlPath);
    files[`api/articles/${article.slug}.json`] = buildArticleDetail(article.slug);
  }
  for (const [relPath, content] of Object.entries({ ...files, ...overrides })) {
    if (content !== null) write(relPath, content);
  }
  return dist;
}

const check = (dist) => spawnSync(process.execPath, ["scripts/check-dist.cjs", dist], { encoding: "utf-8" });

describe("check-dist machine-readable files", () => {
  it("passes on a complete build", () => {
    const result = check(makeDist());
    assert.equal(result.status, 0, result.stderr);
  });

  it("fails when the JSON 404 body loses its hint", () => {
    const result = check(makeDist({ "api/errors/404.json": { error: { code: "not_found", message: "x" } } }));
    assert.equal(result.status, 1);
    assert.match(result.stderr, /api\/errors\/404\.json: error body needs code, message and hint/);
  });

  it("fails when a documented endpoint or article file is missing", () => {
    const result = check(makeDist({ "api/sections.json": null, "api/articles/best-vpn-digital-nomads.json": null }));
    assert.equal(result.status, 1);
    assert.match(result.stderr, /documents \/api\/sections\.json but no file was built/);
    assert.match(result.stderr, /no detail file for best-vpn-digital-nomads/);
  });

  it("fails when the homepage Markdown is empty or the spec is not JSON", () => {
    const result = check(makeDist({ "index.md": "", "openapi.json": "{not json" }));
    assert.equal(result.status, 1);
    assert.match(result.stderr, /index\.md: homepage Markdown is missing/);
    assert.match(result.stderr, /openapi\.json: is not valid JSON/);
  });
});
