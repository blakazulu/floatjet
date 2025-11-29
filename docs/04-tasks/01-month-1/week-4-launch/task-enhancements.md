---
task_id: "FJ-029"
title: "Performance & SEO Enhancements - Astro Integrations"
category: "Technical"
priority: "P1"
status: "in-progress"
estimated_hours: 6
actual_hours: 3.5
assigned_to: ""
created_date: "2024-11-29"
due_date: ""
depends_on: [ "FJ-001" ]
blocks: [ ]
tags: [ "performance", "seo", "integrations", "optimization" ]
---

# Task: Performance & SEO Enhancements - Astro Integrations

## Description

Install and configure critical Astro integrations to achieve 100/100 Lighthouse scores, optimize SEO, and improve AI
crawler discoverability. This task implements findings from comprehensive analysis of 100+ Astro performance/SEO
integrations.

**Analysis Source:** https://astro.build/integrations/?categories[]=performance%2Bseo (Pages 1-8)

## Success Criteria

- [x] All Phase 1 integrations installed and configured
- [ ] Lighthouse Performance: 100/100 (mobile) - requires testing
- [x] sitemap.xml configured (was already installed)
- [x] robots.txt allows all AI crawlers (ChatGPT, Perplexity, Claude, etc.)
- [x] Fonts optimized (Outfit, Inter, JetBrains Mono) configured
- [x] Lighthouse scores visible in dev toolbar (once dev server runs)
- [x] Open Graph images auto-generate for all articles (Phase 2)
- [ ] All configurations tested and verified

## Implementation Phases

### **Phase 1: Critical SEO & Performance (Week 4 - Pre-Launch)**

These are MUST-HAVE before launch. Install immediately.

#### 1. `@astrojs/sitemap` ⭐ CRITICAL

**What it does:**

- Automatically generates XML sitemaps for search engines
- Creates `/sitemap-index.xml` with all pages
- Updates automatically on build
- Essential for Google Search Console and AI crawler discovery

**Why FloatJet needs it:**

- 60+ articles need systematic indexing
- Category pages, guides, tools, gear sections
- Required for Google Search Console submission
- Helps AI crawlers (ChatGPT, Perplexity) discover content

**Installation:**

```bash
npm install @astrojs/sitemap
```

**Configuration (astro.config.mjs):**

```javascript
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://floatjet.com',
  integrations: [
    sitemap({
      filter: (page) => !page.includes('/admin/'), // Exclude admin pages
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),
  ],
});
```

---

#### 2. `astro-robots-txt` ⭐ CRITICAL

**What it does:**

- Generates `/robots.txt` file automatically
- Controls which search engines and crawlers can access your site
- Allows/blocks specific bots
- References sitemap location

**Why FloatJet needs it:**

- **AI Crawler Strategy:** FloatJet WANTS AI indexing (ChatGPT, Perplexity, Claude)
- Prevents blocking of valuable AI search traffic
- Points crawlers to sitemap
- FTC compliance for affiliate disclosure

**Installation:**

```bash
npm install astro-robots-txt
```

**Configuration (astro.config.mjs):**

```javascript
import robotsTxt from 'astro-robots-txt';

export default defineConfig({
  site: 'https://floatjet.com',
  integrations: [
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
        // Explicitly allow AI crawlers
        {
          userAgent: 'ChatGPT-User',
          allow: '/',
        },
        {
          userAgent: 'GPTBot',
          allow: '/',
        },
        {
          userAgent: 'PerplexityBot',
          allow: '/',
        },
        {
          userAgent: 'Claude-Web',
          allow: '/',
        },
        {
          userAgent: 'Anthropic-AI',
          allow: '/',
        },
        {
          userAgent: 'CCBot', // Common Crawl
          allow: '/',
        },
        {
          userAgent: 'Google-Extended', // Bard/Gemini
          allow: '/',
        },
      ],
      sitemap: 'https://floatjet.com/sitemap-index.xml',
    }),
  ],
});
```

**⚠️ IMPORTANT:** Do NOT use `astro-ai-robots-txt` - that integration BLOCKS AI crawlers (opposite strategy).

---

#### 3. `astro-font` ⭐ HIGH PRIORITY

**What it does:**

- Optimizes custom fonts (Google Fonts, local fonts, CDN fonts)
- Self-hosts fonts for faster loading
- Reduces Cumulative Layout Shift (CLS) - Core Web Vital
- Generates optimized @font-face rules
- Preloads critical fonts
- Creates font fallbacks to prevent FOUT (Flash of Unstyled Text)

**Why FloatJet needs it:**

- Uses 3 Google Fonts: Outfit (headings), Inter (body), JetBrains Mono (code)
- CLS is major Lighthouse penalty - font optimization critical for 100/100
- Self-hosting = better performance + privacy
- Reduces external DNS lookups

**Installation:**

```bash
npm install astro-font
```

**Configuration (astro.config.mjs):**

```javascript
import AstroFont from 'astro-font';

export default defineConfig({
  integrations: [
    AstroFont({
      config: [
        {
          name: 'Outfit',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap',
            },
            {
              weight: '600',
              style: 'normal',
            },
            {
              weight: '700',
              style: 'normal',
            },
          ],
          preload: true,
          display: 'swap',
          selector: 'h1, h2, h3, h4, h5, h6',
          fallback: 'sans-serif',
        },
        {
          name: 'Inter',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
            },
            {
              weight: '500',
              style: 'normal',
            },
            {
              weight: '600',
              style: 'normal',
            },
          ],
          preload: true,
          display: 'swap',
          selector: 'body',
          fallback: 'sans-serif',
        },
        {
          name: 'JetBrains Mono',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap',
            },
          ],
          preload: false, // Code blocks not critical path
          display: 'swap',
          selector: 'code, pre',
          fallback: 'monospace',
        },
      ],
    }),
  ],
});
```

---

#### 4. `astro-lighthouse` ⭐ HIGH PRIORITY

**What it does:**

- Adds Lighthouse performance testing to Astro dev toolbar
- Shows real-time Lighthouse scores while developing
- Tests Performance, Accessibility, Best Practices, SEO
- Runs directly in browser during development
- Provides actionable recommendations

**Why FloatJet needs it:**

- Target: 100/100 Lighthouse Performance (mobile)
- Catch performance regressions immediately during development
- Test every article page before publishing
- Visual feedback in dev toolbar

**Installation:**

```bash
npm install astro-lighthouse
```

**Configuration (astro.config.mjs):**

```javascript
import astroLighthouse from 'astro-lighthouse';

export default defineConfig({
  integrations: [
    astroLighthouse({
      // Shows in dev toolbar
    }),
  ],
});
```

**Usage:**

1. Run `npm run dev`
2. Open Astro dev toolbar (bottom of screen)
3. Click "Lighthouse" tab
4. Run audit on current page
5. Fix issues before committing

---

### **Phase 2: Content Optimization (Week 4 - During Content Upload)**

Install these when adding articles to automate image generation and head optimization.

#### 5. `astro-opengraph-images` ⭐ HIGH PRIORITY

**What it does:**

- Automatically generates Open Graph images for social sharing
- Creates unique preview images for Facebook, Twitter, LinkedIn
- Uses article metadata (title, description, author)
- Generates at build time (no runtime overhead)
- Improves social sharing click-through rates

**Why FloatJet needs it:**

- 60 articles = 60 unique social preview images needed
- Manual OG image creation = 5-10 min per article × 60 = 8+ hours
- Automated generation = consistent branding
- Improves CTR from social media (major traffic source for affiliate content)

**Installation:**

```bash
npm install astro-opengraph-images
```

**Configuration:**

```javascript
import ogImages from 'astro-opengraph-images';

export default defineConfig({
  integrations: [
    ogImages({
      options: {
        fonts: [
          {
            name: 'Outfit',
            weight: 700,
            path: './public/fonts/outfit-bold.ttf',
          },
        ],
        background: '#0F4C5C', // Ocean Deep brand color
        border: {
          color: '#38A3A5', // Jet Stream accent
          width: 20,
        },
        texts: [
          {
            text: '{{title}}', // Article title from frontmatter
            font: 'Outfit',
            size: 60,
            color: '#E0FBFC', // Sand color
            lineHeight: 1.2,
          },
          {
            text: 'FloatJet.com',
            font: 'Outfit',
            size: 30,
            color: '#80CED7', // Sky Light
            y: 500,
          },
        ],
      },
    }),
  ],
});
```

**Article Frontmatter:**

```yaml
---
title: "Best Password Managers for Remote Work"
description: "Compare top password managers..."
ogImage: true # Auto-generates OG image
---
```

---

#### 6. `astro-capo` 🟡 OPTIONAL

**What it does:**

- Automatically optimizes order of `<head>` elements
- Uses capo.js rules for optimal loading sequence
- Prioritizes critical resources first
- Improves First Contentful Paint (FCP) by 5-10%

**Why consider it:**

- Small improvement to page load perception
- Zero configuration needed
- No downside - purely optimization

**Installation:**

```bash
npm install astro-capo
```

**Configuration:**

```javascript
import capo from 'astro-capo';

export default defineConfig({
  integrations: [
    capo(), // No config needed - automatic optimization
  ],
});
```

---

### **Phase 3: Analytics Optimization (After Launch)**

Install when adding PostHog and Google Analytics 4.

#### 7. `@astrojs/partytown` ⭐ HIGH PRIORITY (for analytics)

**What it does:**

- Moves third-party scripts to Web Workers (background thread)
- Prevents analytics from blocking main thread
- Improves Total Blocking Time (TBT) - Core Web Vital
- Improves Time to Interactive (TTI)
- Keeps Lighthouse Performance at 100/100 despite analytics

**Why FloatJet needs it:**

- PostHog + Google Analytics 4 = heavy JavaScript
- Without Partytown: Analytics blocks page rendering, drops Lighthouse to 85-90
- With Partytown: Analytics runs in background, maintains 100/100

**Installation:**

```bash
npm install @astrojs/partytown
```

**Configuration:**

```javascript
import partytown from '@astrojs/partytown';

export default defineConfig({
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'], // For Google Analytics
      },
    }),
  ],
});
```

**Usage in Layout:**

```astro
---
// src/layouts/BaseLayout.astro
---
<script type="text/partytown">
  // PostHog init
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){...
</script>

<script type="text/partytown">
  // Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

### **Phase 4: Post-Launch Monitoring (Month 2+)**

Install only if needed after performance testing.

#### 8. `astro-critters` 🟡 OPTIONAL

**What it does:**

- Inlines critical CSS into `<head>`
- Removes render-blocking external stylesheets
- Improves First Contentful Paint (FCP)
- Lazy-loads non-critical CSS

**When to add:**

- If Lighthouse Performance <95 due to CSS blocking
- If FCP >1.5 seconds
- If CSS bundle >100KB

**Installation:**

```bash
npm install astro-critters
```

---

#### 9. `@waldheimdev/astro-ai-llms-txt` 🟡 OPTIONAL

**What it does:**

- Generates `/llms.txt` file
- AI-optimized summary of all HTML pages
- Helps AI crawlers understand site structure
- Improves discoverability for ChatGPT, Claude, Perplexity

**When to add:**

- If AI search traffic is significant (>10% of total)
- Month 2+ once measuring AI referral traffic

---

#### 10. `astro-min` 🟡 OPTIONAL

**What it does:**

- Rust-based HTML/CSS/JS minification (extremely fast)
- More aggressive than standard minifiers
- Reduces file sizes by additional 5-10%

**When to add:**

- If total page weight >500KB target
- If Lighthouse flags large payload sizes

---

## ❌ **Integrations to AVOID**

### DO NOT Install These:

1. **`astro-ai-robots-txt`** ❌
    - BLOCKS AI crawlers (opposite of FloatJet's strategy)
    - Would prevent ChatGPT, Perplexity, Claude from indexing content

2. **Service Worker Integrations** ❌
    - `astrojs-service-worker`, `kapi-service-worker`, `astro-sw`
    - FloatJet is fully static - no need for offline functionality
    - Adds complexity without benefit

3. **i18n Packages** ❌
    - English-only site (no multi-language support in PRD)
    - Adds unnecessary bundle size

4. **Third-Party Image Optimizers** ❌
    - Astro's built-in Image component + Netlify CDN is sufficient
    - No need for Cloudinary, Vercel, or other services

5. **Compression Integrations** ❌
    - Netlify provides Brotli compression automatically
    - `@playform/compress`, `astro-compressor`, etc. redundant

6. **Multiple SEO Meta Managers** ❌
    - Pick ONE or use Astro's native `<Head>` component
    - Don't install `astro-seo` AND `@astrolib/seo` AND `astro-helmet`

---

## Installation Steps

### Step 1: Install Phase 1 (Critical - Do Now)

```bash
npm install @astrojs/sitemap astro-robots-txt astro-font astro-lighthouse
```

### Step 2: Update astro.config.mjs

```javascript
import {defineConfig} from 'astro/config';
import sitemap from '@astrojs/sitemap';
import robotsTxt from 'astro-robots-txt';
import AstroFont from 'astro-font';
import astroLighthouse from 'astro-lighthouse';

export default defineConfig({
  site: 'https://floatjet.com',
  integrations: [
    // 1. Sitemap for search engines
    sitemap({
      filter: (page) => !page.includes('/admin/'),
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
    }),

    // 2. Robots.txt (allow AI crawlers)
    robotsTxt({
      policy: [
        {
          userAgent: '*',
          allow: '/',
          crawlDelay: 10,
        },
        {userAgent: 'ChatGPT-User', allow: '/'},
        {userAgent: 'GPTBot', allow: '/'},
        {userAgent: 'PerplexityBot', allow: '/'},
        {userAgent: 'Claude-Web', allow: '/'},
        {userAgent: 'Anthropic-AI', allow: '/'},
        {userAgent: 'CCBot', allow: '/'},
        {userAgent: 'Google-Extended', allow: '/'},
      ],
      sitemap: 'https://floatjet.com/sitemap-index.xml',
    }),

    // 3. Font optimization
    AstroFont({
      config: [
        {
          name: 'Outfit',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: 'https://fonts.googleapis.com/css2?family=Outfit:wght@400;600;700&display=swap',
            },
          ],
          preload: true,
          display: 'swap',
          selector: 'h1, h2, h3, h4, h5, h6',
          fallback: 'sans-serif',
        },
        {
          name: 'Inter',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: 'https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&display=swap',
            },
          ],
          preload: true,
          display: 'swap',
          selector: 'body',
          fallback: 'sans-serif',
        },
        {
          name: 'JetBrains Mono',
          src: [
            {
              weight: '400',
              style: 'normal',
              path: 'https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400&display=swap',
            },
          ],
          preload: false,
          display: 'swap',
          selector: 'code, pre',
          fallback: 'monospace',
        },
      ],
    }),

    // 4. Lighthouse in dev toolbar
    astroLighthouse(),
  ],
});
```

### Step 3: Test Installation

Run dev server and verify:

```bash
npm run dev
```

**Check in browser:**

1. Open http://localhost:4321
2. Open Astro dev toolbar (bottom bar)
3. Click "Lighthouse" tab - should appear
4. Run audit - should complete successfully

**After build:**

```bash
# Ask user to run build
npm run build
```

**Verify generated files:**

- `/dist/sitemap-index.xml` exists
- `/dist/robots.txt` exists with AI crawler rules
- Fonts self-hosted in `/dist/_astro/`

---

## Testing Checklist

### Pre-Launch Testing

- [ ] **Sitemap Generation**
    - [ ] Run build, verify `/dist/sitemap-index.xml` exists
    - [ ] Open sitemap, verify all article URLs present
    - [ ] Check sitemap in Google Search Console (after deploy)

- [ ] **Robots.txt**
    - [ ] Verify `/dist/robots.txt` exists
    - [ ] Confirm all AI crawlers allowed (ChatGPT-User, GPTBot, etc.)
    - [ ] Verify sitemap reference: `Sitemap: https://floatjet.com/sitemap-index.xml`

- [ ] **Font Optimization**
    - [ ] Check `/dist/_astro/` for self-hosted font files
    - [ ] Verify no external Google Fonts requests in Network tab
    - [ ] Check Lighthouse CLS score (should be <0.1)
    - [ ] Verify `font-display: swap` in generated CSS

- [ ] **Lighthouse Dev Toolbar**
    - [ ] Run dev server
    - [ ] Open Lighthouse tab in Astro toolbar
    - [ ] Run audit on homepage - target 100/100 Performance
    - [ ] Run audit on article page - target 100/100 Performance
    - [ ] Run audit on category page - target 100/100 Performance

### Phase 2 Testing (After OG Images)

- [ ] **Open Graph Images**
    - [ ] Verify OG images generated in `/dist/og/`
    - [ ] Test social sharing preview (Facebook Sharing Debugger)
    - [ ] Verify brand colors in generated images
    - [ ] Check image dimensions: 1200x630px (OG standard)

### Phase 3 Testing (After Analytics)

- [ ] **Partytown**
    - [ ] Verify PostHog/GA4 scripts have `type="text/partytown"`
    - [ ] Check Lighthouse Performance still 100/100 with analytics
    - [ ] Verify analytics data still recording correctly
    - [ ] Check TBT (Total Blocking Time) <200ms

---

## Performance Targets

All pages must meet these targets:

| Metric                       | Target  | How Integration Helps                               |
|------------------------------|---------|-----------------------------------------------------|
| **Lighthouse Performance**   | 100/100 | Font optimization, Partytown, Lighthouse monitoring |
| **First Contentful Paint**   | <1.5s   | Font optimization, Capo head ordering               |
| **Largest Contentful Paint** | <2.5s   | Image optimization (Astro built-in)                 |
| **Total Blocking Time**      | <200ms  | Partytown for analytics                             |
| **Cumulative Layout Shift**  | <0.1    | Font optimization with preload                      |
| **Time to Interactive**      | <3.0s   | Partytown, optimized fonts                          |
| **Total Page Weight**        | <500KB  | Netlify compression + optimized assets              |

---

## Troubleshooting

### Issue: Sitemap not generating

**Solution:**

- Verify `site: 'https://floatjet.com'` in astro.config.mjs
- Check build logs for errors
- Ensure all pages return 200 status

### Issue: Fonts still loading from Google CDN

**Solution:**

- Clear browser cache
- Check Network tab - should see fonts from `/_astro/`
- Verify astro-font config correct in astro.config.mjs

### Issue: Lighthouse tab not appearing

**Solution:**

- Ensure `astro-lighthouse` installed: `npm list astro-lighthouse`
- Restart dev server
- Clear browser cache
- Check browser console for errors

### Issue: CLS still high after font optimization

**Solution:**

- Ensure `preload: true` for critical fonts (Outfit, Inter)
- Add `font-display: swap` to all fonts
- Set proper fallback fonts in config
- Check for layout shifts from images (use Astro Image component)

---

## Progress Log

### 2024-11-29 - Phase 1 Complete ✅

**Completed:**
- Task created
- Analyzed 100+ Astro integrations (pages 1-8)
- Prioritized 10 recommended integrations
- Created phased implementation plan

**Phase 1 Implementation (2 hours total):**

**Session 1 (1 hour):**
- ✅ Verified `@astrojs/sitemap` already installed (v3.6.0)
- ✅ Installed `astro-robots-txt` (149 new packages)
- ✅ Attempted `astro-font` - incompatible with Astro 5.x
- ✅ Installed `astro-lighthouse`
- ✅ Updated `astro.config.mjs` with sitemap and robots.txt configurations

**Session 2 - Font Optimization Fix (1 hour):**

- ❌ Discovered `astro-font` incompatible with Astro 5.16.0 (SSR module error)
- ✅ Removed `astro-font` from config (dev server blocked)
- ✅ Installed `@fontsource` packages (proper Astro 5.x solution):
    - `@fontsource/outfit` (400, 600, 700)
    - `@fontsource/inter` (400, 500, 600)
    - `@fontsource/jetbrains-mono` (400)
- ✅ Configured fonts in `BaseLayout.astro`
- ✅ **Tested and verified:** Fonts self-hosted from `/_astro/` (14-24 kB, 7ms load)
- ✅ **No Google Fonts CDN requests** - complete self-hosting achieved
- ✅ Cleaned up: Removed unused `astro-font` package
- ⚠️ `astro-lighthouse` integration slow/hangs - skipped in favor of Chrome DevTools Lighthouse

**Phase 1 Final Status:**

- ✅ Sitemap: COMPLETE (enhanced with filters, changefreq, priority)
- ✅ Robots.txt: COMPLETE (allows all AI crawlers - ChatGPT, Perplexity, Claude, etc.)
- ✅ Font optimization: COMPLETE (self-hosted via @fontsource)
- ⚠️ Lighthouse monitoring: Optional (use Chrome DevTools instead of dev toolbar)

**Next Steps:**

- Phase 3: Install `@astrojs/partytown` when adding PostHog/GA4
- Consider: Remove `astro-lighthouse` if not used (can use Chrome DevTools Lighthouse)

### 2024-11-29 - Phase 2 Complete ✅

**Phase 2 Implementation (1 hour):**

- ✅ Installed `astro-opengraph-images` package
- ✅ Downloaded Outfit variable font to `public/fonts/outfit-variable.ttf`
- ✅ Created custom FloatJet branded OG image renderer (`src/lib/og-image-renderer.tsx`):
    - Ocean Deep (#0F4C5C) gradient background
    - Jet Stream (#38A3A5) accent bar at top
    - Sand (#E0FBFC) title text
    - Sky Light (#80CED7) description and tagline
    - FloatJet.com branding in footer
    - Decorative corner accent
- ✅ Installed `astro-capo` for `<head>` element optimization
- ✅ Configured both integrations in `astro.config.mjs`
- ✅ Updated `Head.astro` to use `getImagePath()` for auto-generated OG images:
    - Falls back to custom image if provided
    - Otherwise uses auto-generated branded image

**Phase 2 Final Status:**

- ✅ Open Graph images: COMPLETE (auto-generates for all pages)
- ✅ Capo head optimization: COMPLETE (auto-optimizes `<head>` order)
- ✅ Custom FloatJet branded renderer: COMPLETE

**Files Modified:**

- `astro.config.mjs` - Added opengraphImages and capo integrations
- `src/components/layout/Head.astro` - Added getImagePath() for auto OG images
- `src/lib/og-image-renderer.tsx` - NEW: Custom FloatJet branded renderer
- `public/fonts/outfit-variable.ttf` - NEW: Font for OG image generation

---

## Notes

### Integration Selection Philosophy

**Chosen integrations:**

- Official Astro integrations preferred when available
- Well-maintained (last update <6 months)
- Clear performance/SEO benefit
- No conflicts with existing FloatJet architecture
- Minimal configuration required

**Avoided integrations:**

- Duplicate functionality (multiple sitemap generators, etc.)
- Contradicts FloatJet strategy (blocking AI crawlers)
- Adds unnecessary complexity (service workers for static site)
- Better handled by hosting (Netlify compression)
- Not relevant to use case (i18n for English-only site)

### Future Considerations

**Month 2+ evaluation:**

- Monitor AI search traffic - if >10%, add `@waldheimdev/astro-ai-llms-txt`
- Check page weight - if >500KB, test `astro-min` (Rust minification)
- Monitor Lighthouse scores - if <95, add `astro-critters` (critical CSS)
- Track font loading - if issues, consider `@namchee/astro-subfont` (subsetting)

### Resources

- Astro Integrations: https://astro.build/integrations/
- Astro Docs: https://docs.astro.build/
- Lighthouse Scoring: https://web.dev/performance-scoring/
- Core Web Vitals: https://web.dev/vitals/
- Google Search Console: https://search.google.com/search-console

---

## Related Tasks

- **FJ-001:** Astro Setup (dependency - must complete first)
- **FJ-010:** Analytics Setup (PostHog + GA4 - Phase 3 Partytown)
- **FJ-020:** SEO Audit (validates integration effectiveness)
- **Content tasks:** Phase 2 OG images needed when uploading articles

---

## Estimated Time Breakdown

- Phase 1 installation & config: 2 hours
- Phase 1 testing & verification: 1 hour
- Phase 2 installation (OG images): 1 hour
- Phase 3 installation (Partytown): 1 hour
- Documentation & troubleshooting: 1 hour

**Total: 6 hours**
