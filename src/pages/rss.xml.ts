import type { APIRoute } from "astro";
import { allArticles, getArticleLastModified, getArticlePath } from "@data/articles";

// RSS 2.0 feed of all articles, newest first - built without extra dependencies

const SITE = "https://floatjet.com";

const escapeXml = (value: string) =>
  value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;");

export const GET: APIRoute = () => {
  const articles = [...allArticles].sort((a, b) => getArticleLastModified(b).localeCompare(getArticleLastModified(a)));
  const lastBuild = articles[0] ? new Date(getArticleLastModified(articles[0])).toUTCString() : new Date().toUTCString();

  const items = articles
    .map((article) => {
      const url = `${SITE}${getArticlePath(article)}`;
      return `    <item>
      <title>${escapeXml(article.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${escapeXml(article.description)}</description>
      <pubDate>${new Date(article.pubDate).toUTCString()}</pubDate>
      <category>${escapeXml(article.category)}</category>
    </item>`;
    })
    .join("\n");

  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>FloatJet</title>
    <link>${SITE}/</link>
    <description>Tools, gear and guides for remote workers, freelancers and digital nomads.</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
    <atom:link href="${SITE}/rss.xml" rel="self" type="application/rss+xml"/>
${items}
  </channel>
</rss>
`;

  return new Response(body, {
    headers: { "Content-Type": "application/rss+xml; charset=utf-8" },
  });
};
