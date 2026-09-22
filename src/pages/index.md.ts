import type { APIRoute } from "astro";
import { buildHomepageMarkdown } from "../lib/agent-api";

// Markdown version of the homepage. Also served at / for Accept: text/markdown
// by netlify/edge-functions/markdown-negotiation.js
export const GET: APIRoute = () =>
  new Response(buildHomepageMarkdown(), {
    headers: { "Content-Type": "text/markdown; charset=utf-8" },
  });
