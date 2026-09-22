import type { APIRoute } from "astro";
import { notFoundError } from "../../../lib/agent-api";

// Body for unknown /api/* paths - netlify.toml rewrites them here with a 404 status
export const GET: APIRoute = () => Response.json(notFoundError);
