import assert from "node:assert/strict";
import { afterEach, describe, it } from "node:test";
import handler, {
  config,
  markdownHeaders,
  mergeVary,
  parseAccept,
  prefersMarkdown,
} from "../netlify/edge-functions/markdown-negotiation.js";

const MARKDOWN = "# FloatJet\n\nHello agents.\n";
const HTML = "<!doctype html><html><body>FloatJet</body></html>";
const realFetch = globalThis.fetch;

// Stand-ins for the Netlify runtime: fetch serves /index.md, context.next() serves the HTML page
function stubSite({ markdownStatus = 200, markdownBody = MARKDOWN } = {}) {
  const fetched = [];
  globalThis.fetch = async (url) => {
    fetched.push(String(url));
    return new Response(markdownBody, { status: markdownStatus });
  };
  const context = {
    next: async () =>
      new Response(HTML, { headers: { "Content-Type": "text/html; charset=utf-8", Vary: "Accept-Encoding" } }),
  };
  return { context, fetched };
}

const request = (accept, method = "GET") =>
  new Request("https://floatjet.com/", { method, headers: accept ? { Accept: accept } : {} });

afterEach(() => {
  globalThis.fetch = realFetch;
});

describe("parseAccept", () => {
  it("reads media ranges and q-values", () => {
    assert.deepEqual(parseAccept("text/markdown;q=0.9, text/html"), [
      { type: "text/markdown", q: 0.9 },
      { type: "text/html", q: 1 },
    ]);
  });

  it("ignores garbage and clamps q", () => {
    assert.deepEqual(parseAccept("nonsense, text/plain;q=7, text/html;q=abc"), [
      { type: "text/plain", q: 1 },
      { type: "text/html", q: 0 },
    ]);
    assert.deepEqual(parseAccept(null), []);
  });
});

describe("prefersMarkdown", () => {
  const cases = [
    ["text/markdown", true],
    ["TEXT/MARKDOWN", true],
    ["text/markdown, text/html", true],
    ["text/markdown;q=1, text/html;q=0.5", true],
    ["text/html;q=0.8, text/markdown", true],
    ["text/html, text/markdown;q=0.5", false],
    ["text/markdown;q=0", false],
    ["text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8", false],
    ["*/*", false],
    ["text/*", false],
    ["", false],
    [null, false],
  ];
  for (const [accept, expected] of cases) {
    it(`${JSON.stringify(accept)} -> ${expected ? "markdown" : "html"}`, () => {
      assert.equal(prefersMarkdown(accept), expected);
    });
  }
});

describe("mergeVary", () => {
  it("appends Accept and keeps existing values", () => {
    assert.equal(mergeVary("Accept-Encoding"), "Accept-Encoding, Accept");
    assert.equal(mergeVary(null), "Accept");
    assert.equal(mergeVary("accept, Accept-Encoding"), "accept, Accept-Encoding");
    assert.equal(mergeVary("*"), "*");
  });
});

describe("edge function", () => {
  it("runs on the homepage", () => {
    assert.equal(config.path, "/");
  });

  it("serves Markdown with text/markdown and Vary: Accept", async () => {
    const { context, fetched } = stubSite();
    const response = await handler(request("text/markdown"), context);
    assert.equal(response.status, 200);
    assert.equal(response.headers.get("Content-Type"), "text/markdown; charset=utf-8");
    assert.equal(response.headers.get("Vary"), "Accept");
    assert.equal(await response.text(), MARKDOWN);
    assert.deepEqual(fetched, ["https://floatjet.com/index.md"]);
  });

  it("serves HTML to browsers, with Accept added to Vary", async () => {
    const { context, fetched } = stubSite();
    const response = await handler(request("text/html,application/xhtml+xml,*/*;q=0.8"), context);
    assert.equal(response.headers.get("Content-Type"), "text/html; charset=utf-8");
    assert.equal(response.headers.get("Vary"), "Accept-Encoding, Accept");
    assert.equal(await response.text(), HTML);
    assert.deepEqual(fetched, []);
  });

  it("serves HTML when no Accept header is sent", async () => {
    const { context } = stubSite();
    const response = await handler(request(null), context);
    assert.equal(await response.text(), HTML);
    assert.match(response.headers.get("Vary"), /Accept$/);
  });

  it("answers HEAD with Markdown headers and no body", async () => {
    const { context } = stubSite();
    const response = await handler(request("text/markdown", "HEAD"), context);
    assert.equal(response.headers.get("Content-Type"), "text/markdown; charset=utf-8");
    assert.equal(await response.text(), "");
  });

  it("falls back to HTML if the Markdown file is missing or empty", async () => {
    for (const site of [{ markdownStatus: 404 }, { markdownBody: "  \n" }]) {
      const { context } = stubSite(site);
      const response = await handler(request("text/markdown"), context);
      assert.equal(await response.text(), HTML);
      assert.match(response.headers.get("Vary"), /Accept$/);
    }
  });

  it("leaves non-GET methods to the normal pipeline", async () => {
    const { context, fetched } = stubSite();
    const response = await handler(request("text/markdown", "POST"), context);
    assert.equal(await response.text(), HTML);
    assert.deepEqual(fetched, []);
  });

  it("declares a Markdown content type in its headers", () => {
    assert.match(markdownHeaders()["Content-Type"], /^text\/markdown/);
  });
});
