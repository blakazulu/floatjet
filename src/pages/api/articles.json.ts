import type { APIRoute } from "astro";
import { buildArticleList } from "../../lib/agent-api";

export const GET: APIRoute = () => Response.json(buildArticleList());
