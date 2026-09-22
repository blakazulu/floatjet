import assert from "node:assert/strict";
import { readFileSync } from "node:fs";
import { describe, it } from "node:test";
import { allArticles } from "../src/data/articles.ts";
import {
  buildApiIndex,
  buildArticleDetail,
  buildArticleList,
  buildHomepageMarkdown,
  buildOpenApiSpec,
  buildSectionList,
  notFoundError,
} from "../src/lib/agent-api.ts";

const spec = buildOpenApiSpec();
const operations = Object.entries(spec.paths).flatMap(([path, methods]) =>
  Object.entries(methods).map(([method, operation]) => ({ path, method, operation })),
);

// Resolve a local $ref like "#/components/schemas/Article"
const resolveRef = (ref) => ref.replace(/^#\//, "").split("/").reduce((node, key) => node?.[key], spec);

function collectRefs(node, refs = []) {
  if (Array.isArray(node)) node.forEach((child) => collectRefs(child, refs));
  else if (node && typeof node === "object") {
    if (typeof node.$ref === "string") refs.push(node.$ref);
    Object.values(node).forEach((child) => collectRefs(child, refs));
  }
  return refs;
}

// Minimal JSON Schema check against the spec's component schemas (types, required, enums)
function validate(value, schema, where = "$") {
  if (schema.$ref) return validate(value, resolveRef(schema.$ref), where);
  if (schema.enum) assert.ok(schema.enum.includes(value), `${where}: ${value} not in enum`);
  switch (schema.type) {
    case "object":
      assert.equal(typeof value, "object", `${where} should be an object`);
      for (const key of schema.required ?? []) assert.ok(key in value, `${where}.${key} is required`);
      for (const [key, child] of Object.entries(schema.properties ?? {})) {
        if (key in value) validate(value[key], child, `${where}.${key}`);
      }
      break;
    case "array":
      assert.ok(Array.isArray(value), `${where} should be an array`);
      value.forEach((item, index) => validate(item, schema.items, `${where}[${index}]`));
      break;
    case "integer":
      assert.ok(Number.isInteger(value), `${where} should be an integer`);
      break;
    case "string":
      assert.equal(typeof value, "string", `${where} should be a string`);
      if (schema.format === "date") assert.match(value, /^\d{4}-\d{2}-\d{2}$/, `${where} should be a date`);
      if (schema.format === "uri") assert.doesNotThrow(() => new URL(value), `${where} should be a URI`);
      if (schema.pattern) assert.match(value, new RegExp(schema.pattern), where);
      break;
    case "boolean":
      assert.equal(typeof value, "boolean", `${where} should be a boolean`);
      break;
  }
}

const responseSchema = (path, status = "200") =>
  spec.paths[path].get.responses[status].content["application/json"].schema;

describe("OpenAPI spec", () => {
  it("is OpenAPI 3.1 with info, server and docs", () => {
    assert.equal(spec.openapi, "3.1.0");
    assert.ok(spec.info.title && spec.info.version && spec.info.description);
    assert.equal(spec.servers[0].url, "https://floatjet.com");
    assert.equal(spec.externalDocs.url, "https://floatjet.com/developers/");
  });

  it("gives every operation a unique operationId, summary, description and 200 response", () => {
    const ids = operations.map(({ operation }) => operation.operationId);
    assert.equal(new Set(ids).size, ids.length, "operationIds must be unique");
    for (const { path, operation } of operations) {
      assert.match(operation.operationId, /^[a-zA-Z][a-zA-Z0-9]*$/, `${path} operationId is function-call safe`);
      assert.ok(operation.summary, `${path} has a summary`);
      assert.ok(operation.description?.length > 20, `${path} has a description`);
      assert.ok(operation.responses["200"]?.content, `${path} documents its 200 response`);
    }
  });

  it("types every path parameter", () => {
    for (const { path, operation } of operations) {
      const templated = [...path.matchAll(/\{(\w+)\}/g)].map((match) => match[1]);
      for (const name of templated) {
        const param = operation.parameters?.find((candidate) => candidate.name === name);
        assert.ok(param, `${path} declares {${name}}`);
        assert.equal(param.in, "path");
        assert.equal(param.required, true);
        assert.ok(param.schema?.type && param.description);
      }
    }
  });

  it("only references schemas that exist", () => {
    for (const ref of collectRefs(spec)) assert.ok(resolveRef(ref), `${ref} resolves`);
  });

  it("documents a route file for every API path", () => {
    const routeFiles = {
      "/api/index.json": "src/pages/api/index.json.ts",
      "/api/articles.json": "src/pages/api/articles.json.ts",
      "/api/articles/{slug}.json": "src/pages/api/articles/[slug].json.ts",
      "/api/sections.json": "src/pages/api/sections.json.ts",
      "/index.md": "src/pages/index.md.ts",
      "/llms.txt": "src/pages/llms.txt.ts",
    };
    assert.deepEqual(Object.keys(spec.paths).sort(), Object.keys(routeFiles).sort());
    for (const file of Object.values(routeFiles)) assert.doesNotThrow(() => readFileSync(file), `${file} exists`);
  });
});

describe("API responses match the spec", () => {
  it("article list covers every article", () => {
    const list = buildArticleList();
    validate(list, responseSchema("/api/articles.json"));
    assert.equal(list.count, allArticles.length);
    assert.equal(new Set(list.articles.map((article) => article.slug)).size, allArticles.length);
  });

  it("article detail matches the list entry and is undefined for unknown slugs", () => {
    const detail = buildArticleDetail("best-vpn-digital-nomads");
    validate(detail, responseSchema("/api/articles/{slug}.json"));
    assert.equal(detail.article.url, "https://floatjet.com/tools/best-vpn-digital-nomads/");
    assert.equal(detail.article.apiUrl, "https://floatjet.com/api/articles/best-vpn-digital-nomads.json");
    assert.equal(buildArticleDetail("no-such-article"), undefined);
  });

  it("section list counts add up to the article total", () => {
    const list = buildSectionList();
    validate(list, responseSchema("/api/sections.json"));
    const total = list.sections.reduce((sum, section) => sum + section.articleCount, 0);
    assert.equal(total, allArticles.length);
  });

  it("API index lists every documented path", () => {
    const index = buildApiIndex();
    validate(index, responseSchema("/api/index.json"));
    const documented = Object.keys(buildOpenApiSpec().paths).filter((path) => path !== "/api/index.json");
    assert.deepEqual(index.endpoints.map((endpoint) => endpoint.path).sort(), documented.sort());
  });

  it("not-found error has a code, message and hint", () => {
    validate(notFoundError, responseSchema("/api/articles/{slug}.json", "404"));
    assert.equal(notFoundError.error.status, 404);
    assert.equal(notFoundError.error.code, "not_found");
    assert.ok(notFoundError.error.hint.includes("/api/articles.json"));
  });
});

describe("homepage Markdown", () => {
  const markdown = buildHomepageMarkdown();

  it("starts with a single H1 and a summary", () => {
    assert.match(markdown, /^# FloatJet: /);
    assert.equal(markdown.match(/^# /gm).length, 1);
    assert.match(markdown, /^> /m);
  });

  it("links every article by its canonical URL", () => {
    for (const article of allArticles) {
      assert.ok(markdown.includes(`(https://floatjet.com/${article.section}/${article.slug}/)`), article.slug);
    }
  });

  it("contains no HTML", () => {
    assert.doesNotMatch(markdown, /<[a-z][^>]*>/i);
  });
});
