// Open Graph image generation (src/lib/og-images.ts)
import assert from "node:assert/strict";
import { existsSync, mkdirSync, mkdtempSync, readFileSync, rmSync, writeFileSync } from "node:fs";
import { tmpdir } from "node:os";
import { dirname, join } from "node:path";
import { after, describe, it } from "node:test";
import { decodeEntities, extractOgMeta, generateOgImages, mapLimit } from "../src/lib/og-images.ts";

const fixtures = [];
after(() => fixtures.forEach((dir) => rmSync(dir, { recursive: true, force: true })));

const head = (tags) => `<!DOCTYPE html><html><head>${tags}</head><body><p>body</p></body></html>`;

describe("extractOgMeta", () => {
  it("reads quoted tags in any attribute order", () => {
    const meta = extractOgMeta(
      head(
        `<meta property="og:title" content="Best VPNs &amp; more"><meta content="https://floatjet.com/tools/x/" property="og:url">` +
          `<meta property="og:type" content="article"><meta property="og:image" content="https://floatjet.com/tools/x/index.png">` +
          `<meta property="og:description" content="Tested on hotel wifi">`
      )
    );
    assert.equal(meta.title, "Best VPNs & more");
    assert.equal(meta.url, "https://floatjet.com/tools/x/");
    assert.equal(meta.image, "https://floatjet.com/tools/x/index.png");
    assert.equal(meta.description, "Tested on hotel wifi");
  });

  it("reads minified, unquoted tags", () => {
    const meta = extractOgMeta(
      head(
        `<meta content="FloatJet | Tools &#38; Resources" property=og:title><meta content=https://floatjet.com/ property=og:url>` +
          `<meta content=website property=og:type><meta content=https://floatjet.com/index.png property=og:image>`
      )
    );
    assert.equal(meta.title, "FloatJet | Tools & Resources");
    assert.equal(meta.image, "https://floatjet.com/index.png");
    assert.equal(meta.description, undefined);
  });

  it("reports missing required tags", () => {
    assert.throws(() => extractOgMeta(head(`<meta property="og:title" content="x">`)), /og:url, og:type, og:image/);
  });

  it("decodes numeric and named entities", () => {
    assert.equal(decodeEntities("a &#x26; b &#39;c&#39; &quot;d&quot;"), "a & b 'c' \"d\"");
  });
});

describe("mapLimit", () => {
  it("never runs more than the limit at once and processes every item", async () => {
    let inFlight = 0;
    let peak = 0;
    const done = [];
    await mapLimit([...Array(25).keys()], 4, async (n) => {
      inFlight++;
      peak = Math.max(peak, inFlight);
      await new Promise((r) => setTimeout(r, 2));
      done.push(n);
      inFlight--;
    });
    assert.equal(peak, 4);
    assert.equal(done.length, 25);
  });
});

describe("generateOgImages", () => {
  it("writes a PNG next to each page and skips non-HTML routes", async () => {
    const dist = mkdtempSync(join(tmpdir(), "floatjet-og-"));
    fixtures.push(dist);
    const write = (rel, content) => {
      mkdirSync(dirname(join(dist, rel)), { recursive: true });
      writeFileSync(join(dist, rel), content);
    };
    const page = (url, image) =>
      head(
        `<meta property="og:title" content="Title ${url}"><meta property="og:url" content="https://floatjet.com${url}">` +
          `<meta property="og:type" content="website"><meta property="og:image" content="https://floatjet.com/${image}">`
      );
    write("index.html", page("/", "index.png"));
    write("tools/best-vpn/index.html", page("/tools/best-vpn/", "tools/best-vpn/index.png"));
    write("404.html", page("/404/", "404.png"));
    write("api/articles.json", "{}");

    const font = readFileSync("node_modules/@fontsource/figtree/files/figtree-latin-700-normal.woff");
    const rendered = [];
    const count = await generateOgImages({
      dir: dist,
      pathnames: ["/", "/tools/best-vpn/", "/404/", "/api/articles.json"],
      options: { width: 120, height: 63, concurrency: 2, fonts: [{ name: "Figtree", data: font, weight: 700 }] },
      render: ({ title }) => {
        rendered.push(title);
        return { type: "div", props: { style: { display: "flex", fontFamily: "Figtree" }, children: title } };
      },
    });

    assert.equal(count, 3);
    for (const png of ["index.png", "tools/best-vpn/index.png", "404.png"]) {
      const bytes = readFileSync(join(dist, png));
      assert.equal(bytes.subarray(1, 4).toString(), "PNG", png);
    }
    assert.ok(!existsSync(join(dist, "api/articles.png")));
    assert.deepEqual(rendered.sort(), ["Title /", "Title /404/", "Title /tools/best-vpn/"]);
  });

  it("fails loudly when og:image does not match the generated file", async () => {
    const dist = mkdtempSync(join(tmpdir(), "floatjet-og-"));
    fixtures.push(dist);
    writeFileSync(
      join(dist, "index.html"),
      head(
        `<meta property="og:title" content="t"><meta property="og:url" content="https://floatjet.com/">` +
          `<meta property="og:type" content="website"><meta property="og:image" content="https://floatjet.com/wrong.png">`
      )
    );
    await assert.rejects(
      generateOgImages({ dir: dist, pathnames: ["/"], options: { fonts: [] }, render: () => ({}) }),
      /does not match/
    );
  });
});
