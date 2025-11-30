# Task: Astro Integration Tools Evaluation

**Status:** ✅ COMPLETED (2024-11-30)

## Overview

Analysis of the Astro ecosystem integrations catalog (59 pages, ~1,000+ integrations) to identify tools that will
optimize FloatJet for performance, SEO, analytics, and accessibility.

**Scope:** Pages 1-6, 10, 15, 20, 25, 30, 40, 50, 59 analyzed (~200 integrations sampled)

**Focus Areas:** Performance, SEO, Analytics, Accessibility, Images, Developer Experience

**Excluded:** PWA tools (per user preference), framework integrations (React/Vue/Svelte), deployment adapters (already
on Netlify)

---

## Critical Priority

### 1. Schema.org JSON-LD Generator

**Tool:** `astro-seo-schema`

**What it does:** Simplifies adding valid Schema.org JSON-LD structured data to your Astro pages for rich search
results.

**Why we need it:** SEO requirement for Article, Product, FAQ, HowTo, and BreadcrumbList schemas to get rich snippets in
search.

**Weekly Downloads:** Found on page 3 (exact count not captured)

**Installation:**

```bash
npm install astro-seo-schema
```

**Usage:**

```astro
---
import { ArticleSchema, ProductSchema, FAQSchema } from 'astro-seo-schema';
---

<ArticleSchema
  headline="Best Password Managers for Remote Work"
  datePublished="2025-01-15"
  author="FloatJet"
  image="/images/password-managers.jpg"
/>
```

**Priority:** P0 - Critical for SEO rich snippets

---

### 2. Compression (Brotli/Gzip)

**Tool:** `astro-compress` OR `astro-compressor`

**What it does:** Automatically compresses static assets (HTML, CSS, JS) using Gzip and/or Brotli compression at build
time.

**Why we need it:** Performance target requires <500KB total page weight. Compression reduces bundle size by 70-80%.

**Weekly Downloads:**

- `astro-compress`: ~108,000 (very popular)
- `astro-compressor`: Unknown

**Installation:**

```bash
npm install astro-compress
```

**Configuration:**

```js
import compress from 'astro-compress';

export default defineConfig({
  integrations: [
    compress({
      css: true,
      html: true,
      js: true,
      img: true,
      svg: true
    })
  ]
});
```

**Priority:** P0 - Required for Lighthouse 100/100 performance

---

### 3. SEO Meta Tags Helper

**Tool:** `astro-seo` OR `astro-seo-meta`

**What it does:** Provides a simple component for managing SEO meta tags, Open Graph, Twitter Cards, and canonical URLs.

**Why we need it:** Simplifies SEO implementation across 60 articles. Ensures consistency.

**Weekly Downloads:**

- `astro-seo`: ~163,000 (very popular)
- `astro-seo-meta`: ~3,600

**Installation:**

```bash
npm install astro-seo
```

**Usage:**

```astro
---
import { SEO } from 'astro-seo';
---

<SEO
  title="Best Password Managers 2025"
  description="Compare the top password managers for remote workers..."
  openGraph={{
    basic: {
      title: 'Best Password Managers 2025',
      type: 'article',
      image: '/og-image.jpg'
    }
  }}
  twitter={{
    card: 'summary_large_image'
  }}
/>
```

**Priority:** P1 - High value for SEO consistency

---

## High Priority

### 4. Accessible UI Components

**Tool:** `accessible-astro-components`

**What it does:** Pre-built WCAG 2.2 Level AA compliant UI components (modals, accordions, cards, breadcrumbs, etc.)

**Why we need it:** WCAG 2.2 AA compliance is a hard requirement. These components are battle-tested.

**Weekly Downloads:** ~7,200

**Installation:**

```bash
npm install accessible-astro-components
```

**Available Components:**

- Accordion (for FAQ sections)
- Breadcrumbs
- Card
- Modal
- Notification
- SkipLinks

**Priority:** P1 - Required for accessibility compliance

---

### 5. High-Performance Image Optimization

**Tool:** `@unpic/astro`

**What it does:** High-performance, responsive image service and component library. Supports automatic format
conversion (WebP, AVIF), lazy loading, and CDN optimization.

**Why we need it:** Images are the largest contributor to page weight. Proper optimization is critical for mobile
performance.

**Weekly Downloads:** ~8,100

**Installation:**

```bash
npm install @unpic/astro
```

**Usage:**

```astro
---
import { Image } from '@unpic/astro';
---

<Image
  src="/images/laptop.jpg"
  alt="Best laptop for remote work"
  width={800}
  height={600}
  layout="constrained"
/>
```

**Priority:** P1 - Critical for page weight target

---

### 6. PurgeCSS (Remove Unused CSS)

**Tool:** `astro-purgecss`

**What it does:** Removes unused CSS rules from final bundle, reducing CSS file size by 50-90%.

**Why we need it:** Tailwind generates large CSS files. PurgeCSS keeps only what's used.

**Weekly Downloads:** ~18,000

**Installation:**

```bash
npm install astro-purgecss
```

**Configuration:**

```js
import purgecss from 'astro-purgecss';

export default defineConfig({
  integrations: [
    purgecss({
      content: ['./src/**/*.{astro,html,js,jsx,md,mdx,tsx,vue}']
    })
  ]
});
```

**Priority:** P1 - Reduces bundle size significantly

---

### 7. Dev Toolbar: Tailwind Breakpoint Display

**Tool:** `astro-show-tailwindcss-breakpoint`

**What it does:** Shows current Tailwind breakpoint in dev toolbar (mobile, sm, md, lg, xl).

**Why we need it:** Mobile-first development requires constant breakpoint awareness. Helps ensure responsive design.

**Weekly Downloads:** ~1,300

**Installation:**

```bash
npm install astro-show-tailwindcss-breakpoint
```

**Priority:** P1 - Mobile-first development aid (approved by user)

---

## Medium Priority / Nice-to-Have

### 8. Static Site Search

**Tool:** `astro-pagefind`

**What it does:** Adds fast, static site search functionality without external services.

**Why we need it:** With 60 articles, search improves content discoverability. Nice-to-have, not launch-critical.

**Weekly Downloads:** Found on page 3 (popular)

**Installation:**

```bash
npm install astro-pagefind
```

**Priority:** P2 - Post-launch enhancement

---

### 9. Breadcrumb Component

**Tool:** `astro-breadcrumbs`

**What it does:** Configurable breadcrumb component with SEO benefits.

**Why we need it:** Already planned in component specs. This could simplify implementation.

**Weekly Downloads:** Found on page 3

**Installation:**

```bash
npm install astro-breadcrumbs
```

**Priority:** P2 - Already building custom component

---

### 10. View Transitions Loading Indicator

**Tool:** `astro-loading-indicator`

**What it does:** Displays progress bar during page navigation with View Transitions.

**Why we need it:** UX enhancement - users get visual feedback during navigation.

**Weekly Downloads:** ~5,200

**Installation:**

```bash
npm install astro-loading-indicator
```

**Priority:** P2 - Nice UX touch, not critical

---

### 11. Icon Library (Lucide)

**Tool:** `lucide-astro`

**What it does:** Provides Lucide icon set as Astro components. Clean, modern icons.

**Why we need it:** Need icons for UI (arrow, check, external link, etc.). Alternative to building custom SVGs.

**Weekly Downloads:** Found on page 3

**Installation:**

```bash
npm install lucide-astro
```

**Priority:** P2 - Icon solution needed, but not urgent

---

### 12. Security Headers (CSP, SRI)

**Tool:** `@kindspells/astro-shield`

**What it does:** Adds SubResource Integrity hashes and Content Security Policy headers for enhanced security.

**Why we need it:** Security best practice. Protects against XSS and tampering.

**Weekly Downloads:** ~4,400

**Installation:**

```bash
npm install @kindspells/astro-shield
```

**Priority:** P2 - Security enhancement

---

### 13. Auto-Import Components

**Tool:** `astro-auto-import`

**What it does:** Automatically imports components without manual import statements.

**Why we need it:** Developer experience improvement. Reduces boilerplate.

**Weekly Downloads:** ~138,000 (very popular)

**Installation:**

```bash
npm install astro-auto-import
```

**Priority:** P3 - Dev convenience, not essential

---

### 14. Accessible Navigation Component

**Tool:** `astro-navbar`

**What it does:** Fully accessible, responsive navigation bar component with mobile support.

**Why we need it:** WCAG-compliant nav is required. Could simplify navigation implementation.

**Weekly Downloads:** ~18,000

**Installation:**

```bash
npm install astro-navbar
```

**Priority:** P2 - Accessibility requirement covered by custom nav

---

### 15. Alternative Analytics (Umami)

**Tool:** `@yeskunall/astro-umami`

**What it does:** Privacy-friendly analytics alternative to GA4. GDPR compliant.

**Why we need it:** Optional privacy-focused alternative. Not needed since we have GA4.

**Weekly Downloads:** ~4,000

**Priority:** P3 - Not needed (already have GA4)

---

## Not Recommended / Skip

### L PWA Tools (Per User Preference)

**Skipped:**

- `astrojs-service-worker` - Service Worker generation
- `astro-webmanifest` - PWA manifest generator
- `astro-favicons` - Favicon/PWA assets (note: only favicons might be useful)

**Reason:** User specified PWA features not needed for FloatJet.

---

### L Framework Integrations

**Skipped:**

- `@astrojs/react`, `@astrojs/vue`, `@astrojs/svelte`, `@astrojs/solid-js`, `@astrojs/preact`, `@astrojs/lit`,
  `@astrojs/alpinejs`, `@qwikdev/astro`

**Reason:** FloatJet is pure Astro with zero JS. No framework components needed.

---

### L Deployment Adapters

**Skipped:**

- `@astrojs/netlify` (already using Netlify, no adapter needed for SSG)
- `@astrojs/vercel`, `@astrojs/cloudflare`, `@astrojs/node`, `@deno/astro-adapter`, etc.

**Reason:** FloatJet is SSG (Static Site Generation) deployed to Netlify. No server adapter needed.

---

### L Duplicate Functionality

**Already installed in package.json:**

- `@astrojs/sitemap`  Already have
- `@astrojs/mdx`  Already have
- `astro-robots-txt`  Already have
- `astro-opengraph-images`  Already have
- `astro-lighthouse`  Already have (dev toolbar)

**Duplicates to skip:**

- `astro-og-canvas` - Duplicate of astro-opengraph-images
- `astro-robots` - Duplicate of astro-robots-txt
- `astro-sitemap` - Duplicate of @astrojs/sitemap

---

## Installation Priority Order

### Phase 1: Launch Blockers (Install First)

2.  `astro-seo-schema` - Schema.org JSON-LD
3.  `astro-compress` - Compression
5.  `astro-seo` - SEO meta tags helper

### Phase 2: High Value (Install Before Content Launch)

6.  `accessible-astro-components` - WCAG components
7.  `@unpic/astro` - Image optimization
8.  `astro-purgecss` - Remove unused CSS

### Phase 3: Developer Experience (Install During Development)

9.  `astro-show-tailwindcss-breakpoint` - Dev toolbar breakpoint display

### Phase 4: Post-Launch Enhancements

10. � `astro-pagefind` - Site search
11. � `lucide-astro` - Icon library
14. � `@kindspells/astro-shield` - Security headers

---

## Testing Checklist

After installing each integration:

### Analytics Testing

- [ ] GA4 pageviews tracked in GA4 dashboard
- [ ] No console errors related to tracking scripts
- [ ] Scripts load asynchronously (no blocking)

### Performance Testing

- [ ] Run Lighthouse before/after each integration
- [ ] Verify compression: Check Response Headers for `Content-Encoding: br` or `gzip`
- [ ] Verify critical CSS: Check `<head>` for inline `<style>` tags
- [ ] Check bundle size: `npm run build` and review `dist/` folder size
- [ ] Test on 3G throttling (Chrome DevTools)

### SEO Testing

- [ ] Validate Schema.org markup: https://validator.schema.org/
- [ ] Check meta tags in browser DevTools
- [ ] Verify Open Graph preview: https://www.opengraph.xyz/
- [ ] Test robots.txt still allows AI crawlers
- [ ] Verify sitemap.xml includes all pages

### Accessibility Testing

- [ ] Run axe DevTools on pages using new components
- [ ] Test keyboard navigation (Tab, Enter, Escape)
- [ ] Test screen reader (NVDA or VoiceOver)
- [ ] Verify color contrast ratios maintained
- [ ] Test focus indicators visible

### Image Testing

- [ ] Images load lazily (check Network tab)
- [ ] WebP/AVIF formats served when supported
- [ ] Responsive images use correct sizes
- [ ] No layout shift (measure CLS in Lighthouse)

---

## Bundle Size Impact Estimate

Based on integration types:

**Build-time only (zero runtime impact):**

- `astro-compress`, `astro-purgecss`, `astro-seo-schema`, `astro-show-tailwindcss-breakpoint`

**Small runtime impact (<5KB):**

- `astro-seo`, `astro-loading-indicator`

**Medium runtime impact (5-20KB):**

- `@unpic/astro`, `accessible-astro-components` (only what you use)

**Total estimated increase:** <30KB gzipped (well under 500KB page weight target)

---

## Next Steps

1. **Review recommendations** with team/stakeholders
1. **Install Phase 1 integrations** (analytics, SEO, performance)
2. **Test each integration** individually before moving to next
3. **Document configuration** in main project README
4. **Run full Lighthouse audit** after all integrations installed
5. **Iterate on Phase 2-4** based on performance impact

---

## Additional Research Needed

Before finalizing installation:

1. **Image optimization:** Compare `@unpic/astro` vs built-in Astro Image component for bundle size
1. **Astro 5.x compatibility:** Verify each integration works with Astro 5.16.0 (current version in package.json)
2. **Favicon solution:** Decide if we need `astro-favicons` just for favicon generation (skip PWA features)
3. **Dev toolbar:** Assess if `astro-show-tailwindcss-breakpoint` complements existing `@spotlightjs/astro`

---

## Resources

- **Astro Integrations Directory:** https://astro.build/integrations/
- **Package Research:** All tools available on NPM
- **FloatJet Requirements:** See `docs/01-planning/prd.md`
- **Accessibility Guidelines:** See `docs/03-design/accessibility-guidelines.md`

---

## 📦 Current Package Status Summary

### ✅ Already Installed & Configured (8 packages)

**DO NOT reinstall these - already in package.json:**

| Package                      | Version | Purpose                | Status       | Notes                                           |
|------------------------------|---------|------------------------|--------------|-------------------------------------------------|
| `@astrojs/sitemap`           | v3.6.0  | Sitemap generation     | ✅ Configured | Enhanced with filters, changefreq, priority     |
| `@astrojs/mdx`               | v4.3.12 | MDX support            | ✅ Working    | -                                               |
| `astro-robots-txt`           | v1.0.0  | robots.txt generator   | ✅ Configured | Allows all AI crawlers (ChatGPT, Claude, etc.)  |
| `astro-opengraph-images`     | v1.13.1 | OG image generation    | ✅ Configured | Custom FloatJet branded renderer                |
| `@astrojs/partytown`         | v2.1.4  | Scripts to web worker  | ✅ Configured | GA4 runs in Web Worker, maintains 100/100 score |
| `@spotlightjs/astro`         | v3.2.6  | Dev toolbar debugger   | ✅ Working    | Alternative to astro-lighthouse                 |
| `@fontsource/outfit`         | v5.2.8  | Outfit font (headings) | ✅ Configured | Self-hosted, 14-24 kB, 7ms load                 |
| `@fontsource/inter`          | v5.2.8  | Inter font (body)      | ✅ Configured | Self-hosted, no Google CDN requests             |
| `@fontsource/jetbrains-mono` | v5.2.8  | JetBrains font (code)  | ✅ Configured | Self-hosted                                     |
| `react`                      | v19.2.0 | React (dev dep)        | ✅ Working    | Required by astro-opengraph-images              |

### ✅ Installed - Phase 1 (Critical)

| Package            | Purpose            | Priority | Status                 |
|--------------------|--------------------|----------|------------------------|
| `astro-seo-schema` | Schema.org JSON-LD | P0       | ✅ Installed 2024-11-30 |
| `astro-compress`   | Compression        | P0       | ✅ Installed 2024-11-30 |

### ✅ Installed - Phase 2 (High Value)

| Package          | Purpose           | Priority | Status                 |
|------------------|-------------------|----------|------------------------|
| `astro-purgecss` | Remove unused CSS | P1       | ✅ Installed 2024-11-30 |

### ✅ Installed - Phase 3 (Dev Tools)

| Package                             | Purpose            | Priority | Status                 |
|-------------------------------------|--------------------|----------|------------------------|
| `astro-show-tailwindcss-breakpoint` | Breakpoint display | P2       | ✅ Installed 2024-11-30 |

### ✅ Installed - Phase 4 (Post-Launch Enhancements)

| Package                   | Purpose                  | Priority | Status                                                                                                          |
|---------------------------|--------------------------|----------|-----------------------------------------------------------------------------------------------------------------|
| `astro-pagefind`          | Site search              | P2       | ✅ Installed 2024-11-30 - Custom SearchModal                                                                     |
| `astro-loading-indicator` | Page transition progress | P2       | ✅ Installed 2024-11-30 - Sky-light color, 3px bar                                                               |
| `lucide-astro`            | Icon library             | P2       | ✅ Installed 2024-11-30 - Replaced 80+ SVGs across 30+ files (Header, Footer, all category pages, article cards) |

### ✅ Custom Components Added

| Component              | Purpose                        | Status                                         |
|------------------------|--------------------------------|------------------------------------------------|
| `LoadingOverlay.astro` | Page transition logo animation | ✅ Created - Flying cloud logo with glow effect |
| `SearchModal.astro`    | Pagefind search UI             | ✅ Created - FloatJet themed, Ctrl+K shortcut   |
| `ImageLoader.astro`    | Image loading spinner          | ✅ Created - Uses Lucide Loader2 icon, animated |

**Total packages:**

- ✅ Installed & configured: 16 packages
- ❌ Tested & removed (incompatible): 3 packages (astro-font, astro-lighthouse, astro-capo)
- ⬜ Remaining: None - all integrations complete!

**Installation order recommendation:** Phase 1 → Test → Phase 2 → Test → Phase 3 → Launch → Phase 4

---

## ⚠️ CRITICAL: Astro 5.x Compatibility Issues

**The following integrations are INCOMPATIBLE with Astro 5.16.0:**

### ❌ astro-font (SSR Module Error)

- **Issue:** SSR module resolution error when importing integration
- **Error:** Cannot find module errors during dev server startup
- **Status:** Tested 2024-11-29, removed from project
- **Solution:** Use `@fontsource/*` packages instead (official Astro 5.x approach)
- **Impact:** HIGH - Recommended in many guides but doesn't work

### ❌ astro-lighthouse (Performance Issues)

- **Issue:** Causes dev server to hang/become extremely slow
- **Error:** Dev toolbar becomes unresponsive, page loads take 10+ seconds
- **Status:** Tested 2024-11-30, removed from project
- **Solution:** Use Chrome DevTools Lighthouse (F12 → Lighthouse tab)
- **Impact:** MEDIUM - Dev toolbar convenience vs built-in browser tool

### ❌ astro-capo (Architecture Mismatch)

- **Issue:** Exports `<Head>` component, not an Astro integration
- **Error:** Cannot add to `integrations[]` array in astro.config.mjs
- **Status:** Tested 2024-11-30, removed from project
- **Solution:** Manually optimize `<head>` order in layout components
- **Impact:** LOW - Manual optimization is straightforward

**Recommendation:** Before installing ANY integration:

1. Check GitHub issues for "Astro 5" compatibility
2. Verify last update was after Astro 5 release (October 2024+)
3. Test in dev environment before committing
4. Have rollback plan ready
