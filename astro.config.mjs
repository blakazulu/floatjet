// @ts-check
import {defineConfig} from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";
// import AstroFont from 'astro-font'; // TEMP DISABLED - incompatible with Astro 5.x
import astroLighthouse from "astro-lighthouse";
import tailwindcss from "@tailwindcss/vite";

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

    // 3. Font optimization - TEMP DISABLED (astro-font incompatible with Astro 5.x)
    // Will replace with @fontsource or manual optimization

    // 4. Lighthouse in dev toolbar - Real-time performance monitoring
    astroLighthouse(),
  ],
  vite: {
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
