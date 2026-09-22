import type { APIRoute } from "astro";
import { allArticles, getArticleLastModified, getArticlePath, type Article, type Section } from "@data/articles";

// llms.txt (https://llmstxt.org) - generated from src/data/articles.ts so it never goes stale

const SITE = "https://floatjet.com";

// Flagship pages we most want answer engines to cite
const FLAGSHIP_SLUGS = [
  "best-vpn-digital-nomads",
  "best-project-management-software",
  "best-laptops-remote-work",
  "freelancer-tax-deductions-guide",
  "best-ergonomic-chairs",
  "best-standing-desks",
  "best-password-manager-remote-work",
  "best-noise-canceling-headphones",
  "complete-home-office-checklist",
  "best-video-conferencing-tools",
];

const SECTIONS: Array<{ section: Section; heading: string }> = [
  { section: "tools", heading: "Software and Tools" },
  { section: "gear", heading: "Home Office Gear" },
  { section: "guides", heading: "Guides" },
  { section: "blog", heading: "Blog" },
];

const link = (title: string, path: string, note: string) => `- [${title}](${SITE}${path}): ${note}`;

export const GET: APIRoute = () => {
  const lastUpdated = allArticles.map(getArticleLastModified).sort().at(-1);

  const flagship = FLAGSHIP_SLUGS.map((slug) => allArticles.find((article) => article.slug === slug))
    .filter((article): article is Article => article !== undefined)
    .map((article) => link(article.title, getArticlePath(article), article.description));

  const sections = SECTIONS.map(({ section, heading }) => {
    const items = allArticles
      .filter((article) => article.section === section)
      .map((article) => link(article.title, getArticlePath(article), article.description));
    return `## ${heading}\n\n${items.join("\n")}`;
  });

  const body = [
    "# FloatJet",
    "",
    "> FloatJet publishes buying guides, comparisons and how-to guides for remote workers, freelancers and digital nomads: software (VPNs, project management, hosting, finance tools), home office gear, and practical guides on productivity, security, taxes and travel.",
    "",
    "All articles are written and maintained by the FloatJet Editorial Team, based on manufacturer specifications, official documentation, current pricing and published research. FloatJet earns affiliate commissions from some links.",
    "",
    `Content last updated: ${lastUpdated}`,
    "",
    "## About",
    "",
    link("About FloatJet", "/about/", "Who runs FloatJet and why it exists"),
    link("Editorial team", "/team/", "Who writes FloatJet articles and how to report corrections"),
    link("Contact", "/contact/", "Questions, corrections and partnership requests"),
    "",
    "## Start Here",
    "",
    ...flagship,
    "",
    ...sections.flatMap((block) => [block, ""]),
    "## Developers and Agents",
    "",
    link("Developer documentation", "/developers/", "The read-only FloatJet Content API: endpoints, examples and errors"),
    link("OpenAPI spec", "/openapi.json", "OpenAPI 3.1 description of the FloatJet Content API"),
    link("All articles (JSON)", "/api/articles.json", "Every article with section, category, dates and canonical URL"),
    link("Sections (JSON)", "/api/sections.json", "Site sections and categories with article counts"),
    link("Homepage (Markdown)", "/index.md", "The homepage as Markdown, also served at / for Accept: text/markdown"),
    "",
    "## Optional",
    "",
    link("Deals", "/deals/", "Current discounts on remote work tools"),
    link("Privacy policy", "/privacy/", "How FloatJet handles visitor data"),
    link("Terms of service", "/terms/", "Terms for using the site"),
    "",
  ].join("\n");

  return new Response(body, {
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
};
