# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

## [1.0.0] - 2025-12-02

### Added

- Google Analytics 4 and Microsoft Clarity that load only after consent, with privacy consent controls (October 2026).
- Shayach accessibility widget, matched to the site, as a draggable floating button (October 2026).
- Scrollbars in the brand colors.

- About 25 new articles, including secure email providers, budgeting apps, time tracking for billing, retirement planning apps, static site hosting, email hosting, CDN services, CRM for freelancers, AI writing assistants, scheduling tools, privacy browser extensions, encrypted messaging, DNS services, podcast starter kits, soundproofing, audio interfaces, laptops for video editing, external SSDs, monitor arms, footrests and kneeling chairs.
- New affiliate partners and links: Proton (Mail, Pass and Drive), Surfshark, and Amazon links for monitors, laptops and bags. Product CTAs in articles now use the shared `AffiliateButton` component.
- GA4 tracking of affiliate button clicks.
- Bento grid layouts with category images and icons for the Tools, Gear, Guides and Blog pages.
- One source of truth for article metadata (`src/data/articles.ts`), with a script that generates the article summary table.
- Optional `updatedDate` per article, which drives the byline, the Article `dateModified` and the sitemap `lastmod`.
- RSS feed and `llms.txt`, both generated from the article data.
- Agent-ready content: a read-only JSON API (`/api/*`) with an OpenAPI 3.1 spec at `/openapi.json`, a Markdown version of the homepage (`Accept: text/markdown` or `/index.md`), and a `/developers/` page.
- New app icon (sun "f" sticker) and web manifest.
- Intros and "New here? Start with" links on all 21 category pages.
- Social media assets: cover image generators, content queues for December 2025 and January 2026, and bulk upload CSVs and pin images for Zoho Social.
- Post-build checks on the generated site and a `node:test` suite (`npm test`).

### Changed

- Homepage redesign based on a UX review, with a grain overlay and a darker background (December 2025).
- "Desk Party" redesign of the whole site (September 2026): warm paper background, ink text, sticker cards and pill buttons, a homepage built around an explorable desk where every object links into the site, and shared hub pages that list every article. It was then toned down: Bricolage Grotesque headings, a floating pill header with a round search button, and a postcard-style footer.
- All articles are now published under the "FloatJet Editorial Team" byline. Old author pages redirect to `/team/`.
- SEO and structured data: trailing slashes on all internal links, canonical URLs built from the path, a WebSite and Organization schema graph, CollectionPage and ItemList on hub pages, an updated `robots.txt` (blocks `/go/`, lists current AI crawlers), and `/go/` affiliate redirects now use 302 instead of 301.
- 2026 refresh of nearly every article: current prices and plans, renamed or discontinued products (for example Tutanota to Tuta, ConvertKit to Kit, QuickBooks Self-Employed to Solopreneur, Around and Clockwise shut down), new FAQs, more internal links and updated dates.
- Expanded guides on VPN kill switches, laptop RAM, managed WordPress hosting, async communication, CRM costs and background noise.
- Three overlapping articles merged into stronger ones, with 301 redirects from the old URLs (VPN speed comparison, cloud vs traditional hosting, managing time zones).
- Article intros and conclusions rewritten to read more naturally, and em-dashes removed from all articles.
- Netlify builds now run on Node 22.

### Removed

- Fictional author profiles, photos and Person schema.
- The `astro-purgecss`, Biome and `@spotlightjs/astro` dependencies.

### Fixed

- JavaScript, URLs and CSS selectors broken by the em-dash cleanup script.
- Google Search Console 404 and redirect errors, broken internal links, a misspelled affiliate redirect, and missing breadcrumbs on Guides and Blog articles.
- The homepage carousel overlay gradient being stripped from the build.
- Category page lists and card images that did not match the actual articles, and duplicate hero images.
- Mobile menu no longer opening after navigation, empty tables of contents on 4 articles, table of contents tracking, duplicate FAQ headings, horizontal overflow, and content hidden behind the floating header.
- Social share image generation running out of memory during the build, share previews in WhatsApp, and share images being compressed twice.
- Missing logo and Apple touch icon files, and missing `h4` styling in articles.

## [0.0.1] - 2025-11-21

### Added

- Astro 5 and Tailwind CSS 4 site with a custom FloatJet theme, deployed to Netlify with security headers and caching.
- Base layout with SEO built in: Open Graph and Twitter Card tags and Schema.org markup.
- Homepage with a category selector, an article carousel and a featured content grid.
- Article template with breadcrumbs, metadata, an FTC affiliate disclosure, a table of contents, an FAQ section with FAQ schema, related articles, affiliate buttons and comparison tables.
- Slide-out mobile menu and a site-wide affiliate disclosure in the footer.
- Around 100 articles across Tools, Gear, Guides and Blog, starting with the money pages (project management software, VPNs for digital nomads, password managers, laptops, standing desks, email marketing).
- Affiliate redirects under `/go/`, including the approved NordVPN program.
- Google Search Console and GA4 tracking.
- About, Contact, Deals, Privacy and Terms pages, category and sub-category pages, and a visual sitemap page.
- Site search with suggestions and recent searches, a page loading overlay, and social share buttons on articles.
- Generated social share (OG) images for every page.
- Self-hosted article images.

### Changed

- Articles rewritten in a more human voice.
- Faster pages: compression and CSS optimization, `fetchpriority` and blur placeholders for the main images, and inline SVG icons instead of an icon library.

### Fixed

- Content Security Policy violations and loading overlay issues.
- Memory leaks from duplicate event listeners after page transitions.
- Related articles squeezed into the narrow article column on 44 articles.
- Footer social links, an error on the contact page, and affiliate button labels.
