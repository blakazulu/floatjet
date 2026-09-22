import type { APIRoute } from "astro";
import { buildOpenApiSpec } from "../lib/agent-api";

// OpenAPI 3.1 description of the read-only content API (see src/lib/agent-api.ts)
export const GET: APIRoute = () => Response.json(buildOpenApiSpec());
