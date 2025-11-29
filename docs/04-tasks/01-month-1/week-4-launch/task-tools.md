# Task: Astro Integration Tools Evaluation

## Overview

Analysis of the Astro ecosystem integrations catalog (59 pages, ~1,000+ integrations) to identify tools that will
optimize FloatJet for performance, SEO, analytics, and accessibility.

**Scope:** Pages 1-6, 10, 15, 20, 25, 30, 40, 50, 59 analyzed (~200 integrations sampled)

**Focus Areas:** Performance, SEO, Analytics, Accessibility, Images, Developer Experience

**Excluded:** PWA tools (per user preference), framework integrations (React/Vue/Svelte), deployment adapters (already
on Netlify)

---

## Critical Priority

### 1. PostHog Analytics

**Tool:** `astro-posthog`

**What it does:** Integrates PostHog analytics platform into Astro sites, providing product analytics, session
recording, and feature flag capabilities.

**Why we need it:** FloatJet requires PostHog for user behavior tracking and conversion optimization.

**Weekly Downloads:** ~1,100

**Installation:**

```bash
npm install astro-posthog
```

**Basic Configuration:**

```js
// astro.config.mjs
import {defineConfig} from 'astro/config';
import posthog from 'astro-posthog';

export default defineConfig({
  integrations: [
    posthog({
      apiKey: 'YOUR_POSTHOG_KEY',
      host: 'https://app.posthog.com'
    })
  ]
});
```

**Priority:** P0 - Required for launch

---

### 2. Google Analytics 4

**Tool:** `@digi4care/astro-google-tagmanager` OR `@astrolib/analytics`

**What it does:** Injects Google Tag Manager/GA4 tracking scripts into your Astro site.

**Why we need it:** FloatJet requires GA4 for traffic analysis and affiliate conversion tracking.

**Weekly Downloads:**

- `@digi4care/astro-google-tagmanager`: ~4,600
- `@astrolib/analytics`: Unknown (supports multiple platforms)

**Installation:**

```bash
# Option 1: GTM-specific
npm install @digi4care/astro-google-tagmanager

# Option 2: Multi-analytics (supports PostHog + GA4 + more)
npm install @astrolib/analytics
```

**Basic Configuration:**

```js
// Option 1: GTM
import googleTagManager from '@digi4care/astro-google-tagmanager';

export default defineConfig({
  integrations: [
    googleTagManager({
      id: 'GTM-XXXXXXX'
    })
  ]
});

// Option 2: @astrolib/analytics (supports both PostHog + GA4)
import analytics from '@astrolib/analytics';

export default defineConfig({
  integrations: [
    analytics({
      googleAnalytics: {id: 'G-XXXXXXXXXX'},
      posthog: {apiKey: 'YOUR_KEY', host: 'https://app.posthog.com'}
    })
  ]
});
```

**Recommendation:** Research both options - GTM if you need Tag Manager features, @astrolib/analytics if you want
unified config for PostHog + GA4.

**Priority:** P0 - Required for launch

---

### 3. Schema.org JSON-LD Generator

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

### 4. Compression (Brotli/Gzip)

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

### 5. Critical CSS Inlining

**Tool:** `astro-critters`

**What it does:** Inlines critical CSS and lazy-loads non-critical CSS to improve First Contentful Paint.

**Why we need it:** Performance target requires FCP <1.5s. Critical CSS inlining is key to achieving this.

**Weekly Downloads:** ~7,100

**Installation:**

```bash
npm install astro-critters
```

**Configuration:**

```js
import critters from 'astro-critters';

export default defineConfig({
  integrations: [critters()]
});
```

**Priority:** P0 - Critical for mobile performance

---

### 6. SEO Meta Tags Helper

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

### 7. Accessible UI Components

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

### 8. High-Performance Image Optimization

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

### 9. Google Fonts Optimizer

**Tool:** `astro-google-fonts-optimizer` OR `astro-font`

**What it does:** Optimizes Google Fonts loading by self-hosting, subsetting, and adding proper preload/prefetch hints.

**Why we need it:** FloatJet uses 3 Google Fonts (Outfit, Inter, JetBrains Mono). Font loading impacts FCP/LCP
significantly.

**Weekly Downloads:**

- `astro-google-fonts-optimizer`: ~5,100
- `astro-font`: ~27,000 (more popular, supports custom fonts too)

**Installation:**

```bash
npm install astro-font
```

**Configuration:**

```js
import AstroFont from 'astro-font';

export default defineConfig({
  integrations: [
    AstroFont({
      config: [
        {
          name: 'Outfit',
          src: [],
          preload: true,
          display: 'swap',
          selector: 'h1, h2, h3, h4, h5, h6'
        },
        {
          name: 'Inter',
          src: [],
          preload: true,
          display: 'swap',
          selector: 'body'
        }
      ]
    })
  ]
});
```

**Priority:** P1 - High impact on performance

---

### 10. PurgeCSS (Remove Unused CSS)

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

### 11. Head Element Optimizer

**Tool:** `astro-capo`

**What it does:** Automatically sorts `<head>` elements in optimal order using capo.js for better performance.

**Why we need it:** Proper `<head>` ordering improves page load speed. Script/style order matters.

**Weekly Downloads:** ~9,500

**Installation:**

```bash
npm install astro-capo
```

**Priority:** P1 - Performance optimization

---

### 12. Dev Toolbar: Meta Tags Debugger

**Tool:** `astro-meta-tags`

**What it does:** Dev toolbar extension that shows all meta tags on the current page for easy debugging.

**Why we need it:** With 60 articles, debugging SEO meta tags manually is tedious. This speeds up QA.

**Weekly Downloads:** ~6,300

**Installation:**

```bash
npm install astro-meta-tags
```

**Priority:** P1 - Improves dev experience (already approved)

---

### 13. Dev Toolbar: Tailwind Breakpoint Display

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

### 14. AI Crawler Optimization (llms.txt)

**Tool:** `@4hse/astro-llms-txt` OR `starlight-llms-txt`

**What it does:** Generates `llms.txt` file for AI training and indexing by LLMs (ChatGPT, Claude, Perplexity, etc.)

**Why we need it:** FloatJet's strategy includes AI search optimization. This helps AI crawlers understand site
structure.

**Weekly Downloads:**

- `@4hse/astro-llms-txt`: Found on page 20
- `starlight-llms-txt`: ~19,000 (more popular, but Starlight-focused)

**Installation:**

```bash
npm install @4hse/astro-llms-txt
```

**Priority:** P2 - AI optimization is part of strategy

---

## Medium Priority / Nice-to-Have

### 15. Static Site Search

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

### 16. Breadcrumb Component

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

### 17. View Transitions Loading Indicator

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

### 18. Icon Library (Lucide)

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

### 19. Security Headers (CSP, SRI)

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

### 20. Auto-Import Components

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

### 21. Accessible Navigation Component

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

### 22. Alternative Analytics (Umami)

**Tool:** `@yeskunall/astro-umami`

**What it does:** Privacy-friendly analytics alternative to GA4. GDPR compliant.

**Why we need it:** Optional privacy-focused alternative. Not needed with PostHog + GA4.

**Weekly Downloads:** ~4,000

**Priority:** P3 - Not needed (already have PostHog + GA4)

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

1.  `astro-posthog` - Analytics (PostHog)
2.  `@digi4care/astro-google-tagmanager` OR `@astrolib/analytics` - Analytics (GA4)
3.  `astro-seo-schema` - Schema.org JSON-LD
4.  `astro-compress` - Compression
5.  `astro-critters` - Critical CSS
6.  `astro-seo` - SEO meta tags helper

### Phase 2: High Value (Install Before Content Launch)

7.  `accessible-astro-components` - WCAG components
8.  `@unpic/astro` - Image optimization
9.  `astro-font` - Google Fonts optimization
10.  `astro-purgecss` - Remove unused CSS
11.  `astro-capo` - Head element optimization

### Phase 3: Developer Experience (Install During Development)

12.  `astro-meta-tags` - Dev toolbar meta debugger
13.  `astro-show-tailwindcss-breakpoint` - Dev toolbar breakpoint display

### Phase 4: Post-Launch Enhancements

14. � `@4hse/astro-llms-txt` - AI crawler optimization
15. � `astro-pagefind` - Site search
16. � `lucide-astro` - Icon library
17. � `@kindspells/astro-shield` - Security headers

---

## Testing Checklist

After installing each integration:

### Analytics Testing

- [ ] PostHog events firing correctly in browser console
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

- `astro-compress`, `astro-critters`, `astro-purgecss`, `astro-capo`, `astro-seo-schema`, `astro-font`,
  `astro-meta-tags`, `astro-show-tailwindcss-breakpoint`

**Small runtime impact (<5KB):**

- `astro-posthog`, `@digi4care/astro-google-tagmanager`, `astro-seo`, `astro-loading-indicator`

**Medium runtime impact (5-20KB):**

- `@unpic/astro`, `accessible-astro-components` (only what you use)

**Total estimated increase:** <30KB gzipped (well under 500KB page weight target)

---

## Next Steps

1. **Review recommendations** with team/stakeholders
2. **Install Phase 1 integrations** (analytics, SEO, performance)
3. **Test each integration** individually before moving to next
4. **Document configuration** in main project README
5. **Run full Lighthouse audit** after all integrations installed
6. **Iterate on Phase 2-4** based on performance impact

---

## Additional Research Needed

Before finalizing installation:

1. **Analytics choice:** Test both `@digi4care/astro-google-tagmanager` and `@astrolib/analytics` to see which better
   fits FloatJet workflow
2. **Image optimization:** Compare `@unpic/astro` vs built-in Astro Image component for bundle size
3. **Astro 5.x compatibility:** Verify each integration works with Astro 5.16.0 (current version)
4. **Favicon solution:** Decide if we need `astro-favicons` just for favicon generation (skip PWA features)

---

## Resources

- **Astro Integrations Directory:** https://astro.build/integrations/
- **Package Research:** All tools available on NPM
- **FloatJet Requirements:** See `docs/01-planning/prd.md`
- **Accessibility Guidelines:** See `docs/03-design/accessibility-guidelines.md`
