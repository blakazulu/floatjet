// @ts-check
import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
// import AstroFont from 'astro-font'; // TEMP DISABLED - incompatible with Astro 5.x
import tailwindcss from "@tailwindcss/vite";
import opengraphImages from "astro-opengraph-images";
import {floatjetRenderer} from "./src/lib/og-image-renderer";
import partytown from "@astrojs/partytown";
import * as fs from "fs";

// https://astro.build/config
export default defineConfig({
  site: 'https://floatjet.com',
  integrations: [
    mdx(),

    // 1. Sitemap for search engines (already installed)
    sitemap({
      filter: (page) => !page.includes("/admin/"),
      changefreq: "weekly",
      priority: 0.7,
      lastmod: new Date(),
    }),

    // 2. Robots.txt - ALLOW AI crawlers (ChatGPT, Perplexity, Claude, etc.)
    robotsTxt({
      policy: [
        {
          userAgent: "*",
          allow: "/",
          crawlDelay: 10,
        },
        {userAgent: "ChatGPT-User", allow: "/"},
        {userAgent: "GPTBot", allow: "/"},
        {userAgent: "PerplexityBot", allow: "/"},
        {userAgent: "Claude-Web", allow: "/"},
        {userAgent: "Anthropic-AI", allow: "/"},
        {userAgent: "CCBot", allow: "/"},
        {userAgent: "Google-Extended", allow: "/"},
      ],
      sitemap: "https://floatjet.com/sitemap-index.xml",
    }),

    // 3. Font optimization - Using @fontsource (imported in BaseLayout.astro)

    // 4. Open Graph image generation - Auto-generates social preview images
    opengraphImages({
      options: {
        fonts: [
          {
            name: "Outfit",
            weight: 700,
            style: "normal",
            data: fs.readFileSync("node_modules/@fontsource/outfit/files/outfit-latin-700-normal.woff"),
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
