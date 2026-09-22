// Markdown content negotiation for the homepage (https://acceptmarkdown.com).
//
// GET / with an Accept header that prefers text/markdown gets the Markdown version
// (built at /index.md from src/lib/agent-api.ts) with Content-Type: text/markdown.
// Every other request gets the normal HTML page. Both carry Vary: Accept so caches
// keep the two representations apart.
//
// Plain JavaScript with no Netlify/Deno imports, so tests/markdown-negotiation.test.mjs
// can exercise it with Node.

export const MARKDOWN_PATH = "/index.md";

/** Parse an Accept header into media ranges with their q-values. */
export function parseAccept(header) {
  if (!header) return [];
  return header
    .split(",")
    .map((part) => {
      const [range, ...params] = part.trim().split(";");
      let q = 1;
      for (const param of params) {
        const [key, value] = param.trim().split("=");
        if (key?.trim().toLowerCase() === "q") {
          const parsed = Number.parseFloat(value);
          q = Number.isFinite(parsed) ? Math.min(Math.max(parsed, 0), 1) : 0;
        }
      }
      return { type: range.trim().toLowerCase(), q };
    })
    .filter((entry) => entry.type.includes("/"));
}

/**
 * Quality the client assigns to a media type, taken from the most specific matching range
 * (exact, then type wildcard, then full wildcard). Returns { q, explicit } where explicit means an exact match.
 */
function qualityFor(ranges, mediaType) {
  const [type] = mediaType.split("/");
  const match =
    ranges.find((range) => range.type === mediaType) ??
    ranges.find((range) => range.type === `${type}/*`) ??
    ranges.find((range) => range.type === "*/*");
  return { q: match ? match.q : 0, explicit: match?.type === mediaType };
}

/**
 * True when the client asks for Markdown by name and ranks it at least as high as HTML.
 * Browsers only reach text/markdown through wildcard ranges, so they keep getting HTML.
 */
export function prefersMarkdown(acceptHeader) {
  const ranges = parseAccept(acceptHeader);
  const markdown = qualityFor(ranges, "text/markdown");
  const html = qualityFor(ranges, "text/html");
  return markdown.explicit && markdown.q > 0 && markdown.q >= html.q;
}

/** Add Accept to a Vary header value without dropping what is already there. */
export function mergeVary(existing) {
  const values = (existing ?? "")
    .split(",")
    .map((value) => value.trim())
    .filter(Boolean);
  if (values.includes("*")) return "*";
  if (!values.some((value) => value.toLowerCase() === "accept")) values.push("Accept");
  return values.join(", ");
}

export function markdownHeaders() {
  return {
    "Content-Type": "text/markdown; charset=utf-8",
    Vary: "Accept",
    "Cache-Control": "public, max-age=0, must-revalidate",
    "X-Content-Type-Options": "nosniff",
    Link: '<https://floatjet.com/>; rel="canonical"',
  };
}

export default async function handler(request, context) {
  const method = request.method.toUpperCase();

  if ((method === "GET" || method === "HEAD") && prefersMarkdown(request.headers.get("accept"))) {
    const source = await fetch(new URL(MARKDOWN_PATH, request.url));
    const body = source.ok ? await source.text() : "";
    if (body.trim()) {
      return new Response(method === "HEAD" ? null : body, { status: 200, headers: markdownHeaders() });
    }
  }

  const response = await context.next();
  response.headers.set("Vary", mergeVary(response.headers.get("Vary")));
  return response;
}

export const config = { path: "/" };
