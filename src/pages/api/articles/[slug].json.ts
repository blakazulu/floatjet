import type { APIRoute, GetStaticPaths } from "astro";
import { allArticles } from "@data/articles";
import { buildArticleDetail } from "../../../lib/agent-api";

export const getStaticPaths: GetStaticPaths = () => allArticles.map((article) => ({ params: { slug: article.slug } }));

export const GET: APIRoute = ({ params }) => Response.json(buildArticleDetail(params.slug as string));
