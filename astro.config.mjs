// @ts-check
import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
// import AstroFont from 'astro-font'; // TEMP DISABLED - incompatible with Astro 5.x
import tailwindcss from "@tailwindcss/vite";
import ogImages from "./src/lib/og-images.ts";
import {floatjetRenderer} from "./src/lib/og-image-renderer";
import partytown from "@astrojs/partytown";
import compress from "astro-compress";
import pagefind from "astro-pagefind";
import * as fs from "fs";

// Real last-modified dates per article URL, read from src/data/articles.ts
// (updatedDate when an article was re-reviewed, otherwise pubDate)
function readArticleLastmods() {
  const source = fs.readFileSync("src/data/articles.ts", "utf-8");
  const lastmods = new Map();
  for (const block of source.split(/\n\s*\{\s*\n/).slice(1)) {
    const field = (name) => block.match(new RegExp(`\\b${name}:\\s*"([^"]+)"`))?.[1];
    const slug = field("slug");
    const section = field("section");
    const date = field("updatedDate") ?? field("pubDate");
    if (slug && section && date) lastmods.set(`https://floatjet.com/${section}/${slug}/`, date);
  }
  return lastmods;
}
const articleLastmods = readArticleLastmods();

// AI and search crawlers we explicitly welcome. Named groups don't inherit the "*" rules,
// so each one repeats the /go/ disallow.
const welcomedBots = [
  "GPTBot",
  "OAI-SearchBot",
  "ChatGPT-User",
  "ClaudeBot",
  "Claude-SearchBot",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "CCBot",
];

// https://astro.build/config
export default defineConfig({
  site: 'https://floatjet.com',
  trailingSlash: "always",
  integrations: [
    mdx(),

    // 1. Sitemap for search engines - lastmod only where we know the real date
    sitemap({
      filter: (page) => !page.includes("/admin/") && !page.includes("/sitemap-visual"),
      serialize(item) {
        const lastmod = articleLastmods.get(item.url);
        return lastmod ? {...item, lastmod: new Date(lastmod).toISOString()} : item;
      },
    }),

    // 2. Robots.txt - ALLOW AI crawlers (ChatGPT, Perplexity, Claude, etc.); keep affiliate redirects out
    robotsTxt({
      policy: [
        {userAgent: "*", allow: "/", disallow: ["/go/"]},
        ...welcomedBots.map((userAgent) => ({userAgent, allow: "/", disallow: ["/go/"]})),
      ],
      sitemap: "https://floatjet.com/sitemap-index.xml",
    }),

    // 3. Font optimization - Using @fontsource (imported in BaseLayout.astro)

    // 4. Open Graph image generation - Auto-generates social preview images.
    //    In-repo replacement for astro-opengraph-images' build hook, which rendered every page at once and ran the
    //    Netlify build out of memory. Renders a few pages at a time (see src/lib/og-images.ts).
    ogImages({
      options: {
        concurrency: 4,
        fonts: [
          {
            name: "Bricolage Grotesque",
            weight: 700,
            style: "normal",
            data: fs.readFileSync("node_modules/@fontsource/bricolage-grotesque/files/bricolage-grotesque-latin-700-normal.woff"),
          },
          {
            name: "Figtree",
            weight: 700,
            style: "normal",
            data: fs.readFileSync("node_modules/@fontsource/figtree/files/figtree-latin-700-normal.woff"),
          },
        ],
      },
      render: floatjetRenderer,
    }),

    // 5. Partytown - Moves analytics scripts to Web Workers (keeps Lighthouse 100/100)
    partytown({
      config: {
        forward: ["dataLayer.push"], // Forward GA4 dataLayer calls
      },
    }),

    // 6. Compress - Gzip/Brotli compression for HTML, CSS, JS, images, SVG
    compress({
      CSS: true,
      // Keep attribute quotes and order: some link-preview scrapers (WhatsApp) misread
      // unquoted/reordered <meta content=... property=og:image> tags
      HTML: {
        "html-minifier-terser": {
          removeAttributeQuotes: false,
          sortAttributes: false,
        },
      },
      JavaScript: true,
      Image: false, // OG PNGs are already encoded by resvg; recompressing them exhausts build memory.
      SVG: true,
    }),

    // 7. Pagefind - Static site search (indexes content at build time)
    pagefind(),
  ],
  vite: {
    // @ts-ignore - Vite version mismatch between @tailwindcss/vite and Astro's internal Vite
    plugins: [tailwindcss()]
  },
  image: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com'
      }
    ]
  }
});
