import type { APIRoute } from "astro";
import { buildApiIndex } from "../../lib/agent-api";

export const GET: APIRoute = () => Response.json(buildApiIndex());
