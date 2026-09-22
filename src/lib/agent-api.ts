// Machine-readable views of the site for AI agents and developers:
// the read-only JSON content API (/api/*), its OpenAPI spec (/openapi.json),
// structured JSON errors, and the Markdown version of the homepage (/index.md).
//
// Everything is built from src/data at build time, so it never drifts from the HTML site.
// Imports use explicit .ts extensions so tests can load this module with plain Node.
import { allArticles, getArticleLastModified, getArticlePath, type Article, type Section } from "../data/articles.ts";
import { drawers, editorsPicks, homeMeta, latestReviews, startHereGuides } from "../data/home.ts";
import { sections } from "../data/sections.ts";

export const SITE = "https://floatjet.com";
export const API_VERSION = "1.0.0";
export const DOCS_URL = `${SITE}/developers/`;
export const SECTION_ORDER: Section[] = ["tools", "gear", "guides", "blog"];

const absolute = (path: string) => new URL(path, SITE).href;

// -----------------------------------------------------------------------------
// Resources
// -----------------------------------------------------------------------------

export interface ArticleResource {
  slug: string;
  section: Section;
  category: string;
  title: string;
  description: string;
  url: string;
  published: string;
  updated: string;
  readingTimeMinutes: number;
  image: string;
  imageAlt: string;
  featured: boolean;
  apiUrl: string;
}

export function toArticleResource(article: Article): ArticleResource {
  return {
    slug: article.slug,
    section: article.section,
    category: article.category,
    title: article.title,
    description: article.description,
    url: absolute(getArticlePath(article)),
    published: article.pubDate,
    updated: getArticleLastModified(article),
    readingTimeMinutes: article.readingTime,
    image: absolute(article.image),
    imageAlt: article.imageAlt,
    featured: article.featured ?? false,
    apiUrl: absolute(`/api/articles/${article.slug}.json`),
  };
}

const lastUpdated = () => allArticles.map(getArticleLastModified).sort().at(-1) ?? "";

export function buildArticleList() {
  const articles = [...allArticles]
    .sort((a, b) => getArticleLastModified(b).localeCompare(getArticleLastModified(a)) || a.slug.localeCompare(b.slug))
    .map(toArticleResource);
  return { count: articles.length, updated: lastUpdated(), articles };
}

export function buildArticleDetail(slug: string) {
  const article = allArticles.find((candidate) => candidate.slug === slug);
  return article ? { article: toArticleResource(article) } : undefined;
}

export function buildSectionList() {
  return {
    sections: SECTION_ORDER.map((section) => {
      const config = sections[section];
      const inSection = allArticles.filter((article) => article.section === section);
      return {
        section,
        name: config.label,
        heading: config.heading,
        description: config.metaDescription,
        url: absolute(`/${section}/`),
        articleCount: inSection.length,
        categories: config.categories.map((category) => ({
          slug: category.slug,
          name: category.name,
          description: category.description,
          url: absolute(`/${section}/${category.slug}/`),
          articleCount: inSection.filter((article) => article.category === category.slug).length,
        })),
      };
    }),
  };
}

// -----------------------------------------------------------------------------
// Errors
// -----------------------------------------------------------------------------

export interface ApiError {
  error: { status: number; code: string; message: string; hint: string; documentation: string };
}

export function buildApiError(status: number, code: string, message: string, hint: string): ApiError {
  return { error: { status, code, message, hint, documentation: `${DOCS_URL}#errors` } };
}

// Served for any unknown /api/* path (see the /api/* rewrite in netlify.toml)
export const notFoundError = buildApiError(
  404,
  "not_found",
  "No API resource exists at this path.",
  `List every article at ${SITE}/api/articles.json, then request /api/articles/{slug}.json with a slug from that list. The full API surface is described at ${SITE}/openapi.json.`,
);

// -----------------------------------------------------------------------------
// API index + OpenAPI
// -----------------------------------------------------------------------------

export function buildApiIndex() {
  return {
    name: "FloatJet Content API",
    description:
      "Read-only JSON API for FloatJet articles and sections. No authentication; responses are static files served from a CDN.",
    version: API_VERSION,
    openapi: `${SITE}/openapi.json`,
    documentation: DOCS_URL,
    endpoints: [
      { method: "GET", path: "/api/articles.json", description: "List every article" },
      { method: "GET", path: "/api/articles/{slug}.json", description: "Get one article by slug" },
      { method: "GET", path: "/api/sections.json", description: "List sections and categories with article counts" },
      { method: "GET", path: "/index.md", description: "Homepage as Markdown (also served at / for Accept: text/markdown)" },
      { method: "GET", path: "/llms.txt", description: "llms.txt index of the site" },
    ],
  };
}

const errorResponse = (description: string) => ({
  description,
  content: { "application/json": { schema: { $ref: "#/components/schemas/Error" } } },
});

const jsonResponse = (description: string, schema: string) => ({
  description,
  content: { "application/json": { schema: { $ref: `#/components/schemas/${schema}` } } },
});

export function buildOpenApiSpec() {
  return {
    openapi: "3.1.0",
    info: {
      title: "FloatJet Content API",
      version: API_VERSION,
      summary: "Read-only JSON access to FloatJet reviews, comparisons and guides for remote workers.",
      description:
        "FloatJet publishes buying guides and how-to guides for remote workers, freelancers and digital nomads. " +
        "This API exposes the article catalog as static JSON regenerated on every deploy. " +
        "No authentication is required and there are no API keys. All endpoints are GET only. " +
        "Unknown /api/* paths return a JSON error with a code, message and resolution hint.",
      termsOfService: `${SITE}/terms/`,
      contact: { name: "FloatJet", url: `${SITE}/contact/`, email: "hello@floatjet.com" },
    },
    externalDocs: { description: "Developer documentation", url: DOCS_URL },
    servers: [{ url: SITE, description: "Production" }],
    security: [],
    tags: [
      { name: "Articles", description: "Reviews, comparisons and guides" },
      { name: "Sections", description: "Site sections and categories" },
      { name: "Discovery", description: "Entry points for agents" },
    ],
    paths: {
      "/api/index.json": {
        get: {
          operationId: "getApiIndex",
          summary: "Get the API index",
          description: "Returns the API name, version, and links to the OpenAPI spec, documentation and every endpoint.",
          tags: ["Discovery"],
          responses: { "200": jsonResponse("API index", "ApiIndex") },
        },
      },
      "/api/articles.json": {
        get: {
          operationId: "listArticles",
          summary: "List all articles",
          description:
            "Returns every published article with its section, category, dates, reading time and canonical URL, newest update first. Filter client-side by section or category.",
          tags: ["Articles"],
          responses: { "200": jsonResponse("All articles", "ArticleList") },
        },
      },
      "/api/articles/{slug}.json": {
        get: {
          operationId: "getArticle",
          summary: "Get one article",
          description: "Returns metadata for a single article. Slugs come from listArticles.",
          tags: ["Articles"],
          parameters: [
            {
              name: "slug",
              in: "path",
              required: true,
              description: "Article slug, for example best-vpn-digital-nomads",
              schema: { type: "string", pattern: "^[a-z0-9-]+$" },
            },
          ],
          responses: {
            "200": jsonResponse("The article", "ArticleDetail"),
            "404": errorResponse("No article with this slug"),
          },
        },
      },
      "/api/sections.json": {
        get: {
          operationId: "listSections",
          summary: "List sections and categories",
          description: "Returns the four site sections (tools, gear, guides, blog) with their categories and article counts.",
          tags: ["Sections"],
          responses: { "200": jsonResponse("All sections", "SectionList") },
        },
      },
      "/index.md": {
        get: {
          operationId: "getHomepageMarkdown",
          summary: "Get the homepage as Markdown",
          description:
            "Returns the homepage content as Markdown, including every article grouped by section. The same body is served at / when the request sends Accept: text/markdown.",
          tags: ["Discovery"],
          responses: {
            "200": { description: "Homepage Markdown", content: { "text/markdown": { schema: { type: "string" } } } },
          },
        },
      },
      "/llms.txt": {
        get: {
          operationId: "getLlmsTxt",
          summary: "Get llms.txt",
          description: "Returns the llms.txt index (https://llmstxt.org) with the most important pages and every article.",
          tags: ["Discovery"],
          responses: {
            "200": { description: "llms.txt file", content: { "text/plain": { schema: { type: "string" } } } },
          },
        },
      },
    },
    components: {
      schemas: {
        Article: {
          type: "object",
          description: "One FloatJet article",
          required: [
            "slug",
            "section",
            "category",
            "title",
            "description",
            "url",
            "published",
            "updated",
            "readingTimeMinutes",
            "image",
            "imageAlt",
            "featured",
            "apiUrl",
          ],
          properties: {
            slug: { type: "string", description: "Unique article identifier", examples: ["best-vpn-digital-nomads"] },
            section: { type: "string", enum: SECTION_ORDER, description: "Site section" },
            category: { type: "string", description: "Category slug within the section", examples: ["vpn"] },
            title: { type: "string" },
            description: { type: "string", description: "One or two sentence summary" },
            url: { type: "string", format: "uri", description: "Canonical HTML page" },
            published: { type: "string", format: "date" },
            updated: { type: "string", format: "date", description: "Last substantive review, or the publish date" },
            readingTimeMinutes: { type: "integer", minimum: 1 },
            image: { type: "string", format: "uri" },
            imageAlt: { type: "string" },
            featured: { type: "boolean" },
            apiUrl: { type: "string", format: "uri", description: "This resource in the API" },
          },
        },
        ArticleList: {
          type: "object",
          required: ["count", "updated", "articles"],
          properties: {
            count: { type: "integer", minimum: 0 },
            updated: { type: "string", format: "date", description: "Most recent article update" },
            articles: { type: "array", items: { $ref: "#/components/schemas/Article" } },
          },
        },
        ArticleDetail: {
          type: "object",
          required: ["article"],
          properties: { article: { $ref: "#/components/schemas/Article" } },
        },
        Category: {
          type: "object",
          required: ["slug", "name", "description", "url", "articleCount"],
          properties: {
            slug: { type: "string" },
            name: { type: "string" },
            description: { type: "string" },
            url: { type: "string", format: "uri" },
            articleCount: { type: "integer", minimum: 0 },
          },
        },
        Section: {
          type: "object",
          required: ["section", "name", "heading", "description", "url", "articleCount", "categories"],
          properties: {
            section: { type: "string", enum: SECTION_ORDER },
            name: { type: "string" },
            heading: { type: "string" },
            description: { type: "string" },
            url: { type: "string", format: "uri" },
            articleCount: { type: "integer", minimum: 0 },
            categories: { type: "array", items: { $ref: "#/components/schemas/Category" } },
          },
        },
        SectionList: {
          type: "object",
          required: ["sections"],
          properties: { sections: { type: "array", items: { $ref: "#/components/schemas/Section" } } },
        },
        ApiIndex: {
          type: "object",
          required: ["name", "description", "version", "openapi", "documentation", "endpoints"],
          properties: {
            name: { type: "string" },
            description: { type: "string" },
            version: { type: "string" },
            openapi: { type: "string", format: "uri" },
            documentation: { type: "string", format: "uri" },
            endpoints: {
              type: "array",
              items: {
                type: "object",
                required: ["method", "path", "description"],
                properties: { method: { type: "string" }, path: { type: "string" }, description: { type: "string" } },
              },
            },
          },
        },
        Error: {
          type: "object",
          required: ["error"],
          properties: {
            error: {
              type: "object",
              required: ["status", "code", "message", "hint", "documentation"],
              properties: {
                status: { type: "integer", description: "HTTP status code" },
                code: { type: "string", description: "Stable machine-readable error code", examples: ["not_found"] },
                message: { type: "string", description: "What went wrong" },
                hint: { type: "string", description: "How to resolve it" },
                documentation: { type: "string", format: "uri" },
              },
            },
          },
        },
      },
    },
  };
}

// -----------------------------------------------------------------------------
// Homepage as Markdown
// -----------------------------------------------------------------------------

const mdLink = (title: string, path: string) => `[${title}](${absolute(path)})`;

export function buildHomepageMarkdown(): string {
  const counts = Object.fromEntries(
    SECTION_ORDER.map((section) => [section, allArticles.filter((article) => article.section === section).length]),
  ) as Record<Section, number>;

  const bySection = SECTION_ORDER.flatMap((section) => [
    `### ${sections[section].heading}`,
    "",
    ...allArticles
      .filter((article) => article.section === section)
      .map((article) => `- ${mdLink(article.title, getArticlePath(article))}: ${article.description}`),
    "",
  ]);

  return [
    `# FloatJet: ${homeMeta.headline}`,
    "",
    `> ${homeMeta.description}`,
    "",
    `${allArticles.length} honest reviews of the software, gear and setups behind a good remote workday, written by the FloatJet Editorial Team. Content last updated: ${lastUpdated()}.`,
    "",
    "## Start with these three",
    "",
    ...startHereGuides.map((guide, index) => `${index + 1}. ${mdLink(guide.title, guide.href)}: ${guide.description}`),
    "",
    "## On our desk this month",
    "",
    ...editorsPicks.map((pick) => `- ${mdLink(pick.title, pick.href)} (${pick.category}, ${pick.readTime} min read)`),
    "",
    "## Pick a drawer",
    "",
    ...drawers.map((drawer) => `- ${mdLink(drawer.name, drawer.href)}: ${counts[drawer.section]} ${drawer.unit}. ${drawer.blurb}`),
    "",
    "## Latest reviews",
    "",
    ...latestReviews.map((review) => `- ${mdLink(review.title, review.href)}: ${review.description}`),
    "",
    "## All articles",
    "",
    ...bySection,
    "## About FloatJet",
    "",
    `- ${mdLink("About", "/about/")}`,
    `- ${mdLink("Editorial team", "/team/")}`,
    `- ${mdLink("Contact", "/contact/")}`,
    "",
    "## For developers and agents",
    "",
    `- ${mdLink("Developer documentation", "/developers/")}`,
    `- ${mdLink("OpenAPI spec", "/openapi.json")}`,
    `- ${mdLink("All articles as JSON", "/api/articles.json")}`,
    `- ${mdLink("llms.txt", "/llms.txt")}`,
    "",
    "Affiliate disclosure: FloatJet earns commissions from some links, at no extra cost to readers.",
    "",
  ].join("\n");
}
