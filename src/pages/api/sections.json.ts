import type { APIRoute } from "astro";
import { buildSectionList } from "../../lib/agent-api";

export const GET: APIRoute = () => Response.json(buildSectionList());
