# FloatJet Product Requirements Document (PRD)

## Affiliate Content Site - Technical Specifications

**Version:** 1.0
**Last Updated:** November 20, 2025
**Product:** FloatJet - Remote Work & Productivity Tools Affiliate Site
**Target Launch:** December 17, 2025 (4 weeks)

---

## Infrastructure Status ✅

**Already Configured:**

- ✅ **Domain:** floatjet.com (owned and configured)
- ✅ **Hosting:** Netlify (connected to domain)
- ✅ **Version Control:** GitHub repository
- ✅ **CI/CD Pipeline:** GitHub → Netlify auto-deploy on push
- ✅ **MCP Integration:** Netlify MCP server available for deployments
- ✅ **SSL/HTTPS:** Automatic via Netlify
- ✅ **CDN:** Global distribution via Netlify Edge

**What This Means:**

- No hosting setup needed - can deploy immediately
- Every git push automatically deploys to production
- Can use Netlify MCP for deployment management
- Professional infrastructure from day one

---

## Mobile-First & Performance Philosophy

### Mobile-First Development Strategy

**Core Principle:** Design and build for mobile FIRST, then progressively enhance for larger screens.

**Why Mobile-First:**

- 📱 60%+ of web traffic is mobile
- 🔍 Google uses mobile-first indexing exclusively
- ⚡ Forces performance optimization from the start
- 🎯 Simpler, more focused user experience
- 💰 Higher mobile conversion rates when optimized

**Mobile-First Workflow:**

1. Design mobile layouts (375px viewport) first
2. Write mobile-first CSS (default styles = mobile)
3. Test on real mobile devices (iPhone, Android)
4. Add `sm:`, `md:`, `lg:` breakpoints for larger screens
5. Never use `max-width` media queries (desktop-first anti-pattern)

**Mobile Performance Targets:**

- ⚡ Lighthouse Performance: **100/100** (mobile)
- 🎨 First Contentful Paint: **<1.5s**
- 🖼️ Largest Contentful Paint: **<2.5s**
- 📊 Cumulative Layout Shift: **<0.1**
- ⌨️ First Input Delay: **<100ms**
- 🚀 Time to Interactive: **<3.0s**
- 📦 Total Page Weight: **<500KB** (including images)
- 📱 Works perfectly on 3G networks

**Testing Devices (Minimum):**

- iPhone SE (375px - smallest modern device)
- iPhone 13/14 (390px - common size)
- Samsung Galaxy S21 (360px - common Android)
- iPad (768px - tablet)
- Desktop (1280px+)

### AI Crawler Optimization Strategy

**Goal:** Get indexed and cited by AI search engines (ChatGPT, Perplexity, Claude, etc.)

**Why This Matters:**

- AI search is growing rapidly (Perplexity, ChatGPT Search, etc.)
- AI citations drive high-quality, targeted traffic
- Early adoption = competitive advantage
- AI search engines prioritize well-structured, fast content

**Supported AI Crawlers:**

- **ChatGPT-User** (OpenAI search) - User-facing search
- **GPTBot** (OpenAI training) - AI model training
- **PerplexityBot** (Perplexity AI) - AI search engine
- **Claude-Web** (Anthropic) - AI assistant browsing
- **anthropic-ai** (Anthropic training) - AI model training
- **Google-Extended** (Gemini/Bard) - Google AI
- **Applebot-Extended** (Apple Intelligence) - Apple AI
- **cohere-ai** (Cohere) - Enterprise AI
- **CCBot** (Common Crawl) - Dataset for AI training

**Why Astro SSG = Perfect for AI:**

- ✅ Zero JavaScript by default = all content in HTML
- ✅ Clean, semantic HTML = easy for AI to parse
- ✅ Fast loading = AI crawlers prioritize speed
- ✅ No hydration needed = content immediately accessible
- ✅ Static files = reliable, always available
- ✅ Perfect Core Web Vitals = signals quality to AI

**AI Optimization Techniques:**

1. **robots.txt** - Explicitly allow all AI bots
2. **Schema.org markup** - Article, Review, FAQ, HowTo, BreadcrumbList
3. **Semantic HTML** - Proper `<article>`, `<section>`, `<header>`, `<nav>`
4. **Clean structure** - Logical heading hierarchy (H1 → H2 → H3)
5. **Metadata** - Accurate title, description, author, publish date
6. **Canonical URLs** - Avoid duplicate content confusion
7. **Fast loading** - AI crawlers have crawl budgets
8. **Accessible** - AI can navigate like screen readers

**Success Metrics:**

- Citations in ChatGPT/Perplexity responses (manual tracking)
- Traffic from AI search engines (new referral sources)
- Featured in AI-generated summaries
- Backlinks from AI-generated content

---

## Product Overview

FloatJet is a static, content-focused affiliate website targeting remote workers and digital professionals. Built on
Astro with Netlify hosting, the site prioritizes performance, SEO, and automated affiliate revenue generation.

**Core Value Proposition:**
Help remote workers and digital professionals discover the best tools, software, and resources to work efficiently from
anywhere.

**Business Model:**
Affiliate commissions from SaaS tools, VPNs, web hosting, courses, and hardware recommendations.

---

## Goals & Objectives

### Primary Goals

1. **Launch MVP:** Deploy functional site with 10 money pages by Dec 17, 2025
2. **SEO Performance:** Achieve page speed score >90, Core Web Vitals passing
3. **Conversion Optimization:** 3-5% affiliate link click-through rate
4. **Scalability:** Support 100+ articles without performance degradation
5. **Automation:** Minimal manual intervention post-launch (<5 hours/week)

### Success Metrics

**Technical:**

- Lighthouse score: >90 (all categories)
- First Contentful Paint: <1.5s
- Time to Interactive: <3.0s
- Zero accessibility errors
- Mobile responsive (100% compatibility)

**Business:**

- 3-5% affiliate link CTR
- 2-4% conversion rate
- RPM: $80-150
- Uptime: >99.9%

---

## Target Audience

### Primary Personas

**Persona 1: Remote Employee (Sarah)**

- Age: 28-38
- Role: Marketing Manager, Product Designer, Software Engineer
- Income: $60k-120k
- Pain: Finding reliable tools for remote collaboration
- Tech Savvy: High
- Buying Intent: Medium-High (employer might pay)

**Persona 2: Freelancer/Solopreneur (Marcus)**

- Age: 25-45
- Role: Consultant, Designer, Writer, Developer
- Income: $40k-100k
- Pain: Building efficient solo workflow on budget
- Tech Savvy: High
- Buying Intent: High (direct purchase decision maker)

**Persona 3: Digital Nomad (Elena)**

- Age: 24-35
- Role: Various (remote-first professionals)
- Income: $50k-90k
- Pain: Working efficiently while traveling
- Tech Savvy: Very High
- Buying Intent: High (needs reliable tools on the go)

### User Intent

**Informational Queries (60% of traffic):**

- "How to set up home office"
- "What is the best project management software"
- "VPN comparison guide"

**Commercial Investigation (25% of traffic):**

- "Notion vs Asana"
- "Best standing desk under $500"
- "ConvertKit review"

**Transactional Queries (15% of traffic - highest value):**

- "Buy standing desk"
- "NordVPN discount code"
- "Notion pricing"

---

## User Stories

### Content Consumption

**As a remote worker,**

- I want to quickly compare productivity tools
- So that I can make informed purchasing decisions
- **Acceptance Criteria:** Comparison tables, clear pros/cons, pricing info

**As a digital nomad,**

- I want to read VPN reviews with real test data
- So that I can stay secure while traveling
- **Acceptance Criteria:** Speed tests, server locations, personal experience

**As a freelancer,**

- I want to discover tools I haven't heard of
- So that I can improve my workflow
- **Acceptance Criteria:** Category pages, "Related Tools" sections

### Navigation & Discovery

**As a first-time visitor,**

- I want to find relevant content quickly
- So that I don't bounce
- **Acceptance Criteria:** Clear navigation, search, popular posts

**As a returning reader,**

- I want to see new content
- So that I stay engaged
- **Acceptance Criteria:** "Recently Updated" section, newsletter signup

### Conversion

**As a buyer,**

- I want clear, honest recommendations
- So that I trust the site and click affiliate links
- **Acceptance Criteria:** Transparent disclosure, genuine reviews, multiple options

---

## Technical Requirements

### Framework & Architecture

**Primary Framework: Astro 4.x**

**Why Astro:**

- Zero JS by default (perfect for content sites)
- Island architecture for interactive components
- Built-in MDX support
- Excellent SEO capabilities
- Fast build times
- Static site generation (SSG)

**Architecture:**

```
astro-app/
   src/
      components/          # Reusable UI components
         Header.astro
         Footer.astro
         ArticleCard.astro
         AffiliateButton.astro
         ComparisonTable.astro
         TOC.astro (Table of Contents)
         Schema.astro (Structured data)
      layouts/
         BaseLayout.astro
         ArticleLayout.astro
         CategoryLayout.astro
      pages/
         index.astro       # Homepage
         tools/
            index.astro   # Tools category
            [slug].astro  # Individual tool reviews
         gear/
            index.astro
            [slug].astro
         guides/
            [slug].astro
         blog/
            [slug].astro
         about.astro
         404.astro
      content/
         config.ts         # Content collections config
         tools/            # MDX articles for tools
         gear/             # MDX articles for gear
         guides/           # MDX articles for guides
         blog/             # MDX articles for blog
      styles/
         global.css        # Tailwind + custom styles
      utils/
          slugify.ts
          formatDate.ts
          analytics.ts
   public/
      images/
      favicon.ico
      robots.txt
   astro.config.mjs
   tailwind.config.cjs
   tsconfig.json
   package.json
```

**Alternative Framework: Next.js 14 (App Router)**

- If we need server-side features later
- Can start with static export
- Easier to add dynamic features

**Decision: Start with Astro** (better for pure content sites)

### Technology Stack

**Frontend:**

- **Astro 4.x** - Static site generator
- **TypeScript** - Type safety
- **Tailwind CSS 3.x** - Styling
- **MDX** - Content with components

**Components:**

- **React 18** (for interactive islands only)
- **shadcn/ui** or **DaisyUI** - Component library

**Hosting & Infrastructure:**

- **Netlify** - Hosting, CDN, CI/CD
- **GitHub** - Version control, repo
- **Cloudflare** (optional) - Additional CDN if needed

**Analytics & Tracking:**

- **PostHog** - Product analytics, event tracking
- **Google Analytics 4** - Backup analytics
- **Google Search Console** - SEO monitoring

**Affiliate Link Management:**

- **Custom URL shortener** (built-in)
- **PostHog events** - Click tracking

**Email (Future):**

- **Resend** - Transactional emails
- **ConvertKit** - Newsletter (when list grows)

**Image Optimization:**

- **Astro Image** (built-in optimization)
- **Cloudinary** (if needed for heavy image sites)

### Performance Requirements

**Page Speed Targets:**

- **Lighthouse Performance:** >90
- **First Contentful Paint (FCP):** <1.5s
- **Largest Contentful Paint (LCP):** <2.5s
- **Time to Interactive (TTI):** <3.0s
- **Cumulative Layout Shift (CLS):** <0.1
- **First Input Delay (FID):** <100ms

**Bundle Size:**

- **Initial JS bundle:** <50KB gzipped
- **CSS bundle:** <30KB gzipped
- **Images:** WebP format, lazy loaded
- **Fonts:** Preloaded, subset

**Optimization Strategies:**

- Static generation (no server-side rendering)
- Code splitting by route
- Image optimization (WebP, AVIF)
- Font subsetting (only Latin characters needed)
- Lazy loading images below fold
- Preload critical resources
- Minify HTML, CSS, JS
- Brotli compression (Netlify default)

### SEO Requirements

#### On-Page SEO

**Meta Tags (Every Page):**

```html
<title>Primary Keyword - Secondary Keyword | FloatJet</title>
<meta name="description" content="150-155 char description with keyword and CTA">
<meta name="robots" content="index, follow">
<link rel="canonical" href="https://floatjet.com/page-url">

<!-- Open Graph -->
<meta property="og:title" content="Article Title">
<meta property="og:description" content="Description">
<meta property="og:image" content="https://floatjet.com/images/og-image.jpg">
<meta property="og:url" content="https://floatjet.com/page-url">
<meta property="og:type" content="article">

<!-- Twitter Card -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="Article Title">
<meta name="twitter:description" content="Description">
<meta name="twitter:image" content="https://floatjet.com/images/twitter-image.jpg">
```

**Structured Data (Schema.org):**

**Article Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Best Project Management Software for Remote Teams 2025",
  "author": {
    "@type": "Person",
    "name": "FloatJet Team"
  },
  "datePublished": "2025-12-01",
  "dateModified": "2025-12-01",
  "image": "https://floatjet.com/images/article-image.jpg",
  "publisher": {
    "@type": "Organization",
    "name": "FloatJet",
    "logo": {
      "@type": "ImageObject",
      "url": "https://floatjet.com/logo.png"
    }
  }
}
```

**Review Schema (for tool reviews):**

```json
{
  "@context": "https://schema.org",
  "@type": "Review",
  "itemReviewed": {
    "@type": "SoftwareApplication",
    "name": "Notion",
    "operatingSystem": "Web, iOS, Android",
    "applicationCategory": "ProductivityApplication"
  },
  "reviewRating": {
    "@type": "Rating",
    "ratingValue": "4.5",
    "bestRating": "5"
  },
  "author": {
    "@type": "Person",
    "name": "FloatJet Team"
  }
}
```

**FAQ Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "What is the best project management software?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "The best project management software depends on..."
    }
  }]
}
```

**Breadcrumb Schema:**

```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://floatjet.com"
  }, {
    "@type": "ListItem",
    "position": 2,
    "name": "Tools",
    "item": "https://floatjet.com/tools"
  }]
}
```

**URL Structure:**

- **Homepage:** `https://floatjet.com/`
- **Category:** `https://floatjet.com/tools/`
- **Article:** `https://floatjet.com/tools/best-project-management-software/`
- **Subcategory:** `https://floatjet.com/tools/project-management/`

**Best Practices:**

- Descriptive URLs (keywords, hyphens)
- Max 3-4 levels deep
- Lowercase only
- No special characters
- No trailing slashes (consistency)

**Sitemap.xml:**

- Auto-generated by Astro
- Submitted to Google Search Console
- Updated on every deploy
- Priority values set (homepage: 1.0, categories: 0.8, articles: 0.6)

**Robots.txt:**

```
User-agent: *
Allow: /
Disallow: /admin/
Disallow: /api/

Sitemap: https://floatjet.com/sitemap.xml
```

**Internal Linking Strategy:**

- 5-10 internal links per article
- Contextual anchor text (not "click here")
- Link to related articles
- Link from new to old (authority flow)
- Link to category pages

**Image SEO:**

- Descriptive file names (`best-standing-desk-for-home-office.jpg`)
- Alt text on all images (descriptive, keyword when relevant)
- Image sitemaps (if >50 images)
- WebP format with fallback
- Responsive images (srcset)

#### Technical SEO

**Core Web Vitals:**

- All pages pass Core Web Vitals
- Monitor via Google Search Console
- Monthly audits

**Mobile-First:**

- Responsive design (Tailwind utilities)
- Touch-friendly tap targets (min 48x48px)
- No horizontal scroll
- Fast mobile load times

**HTTPS:**

- SSL via Netlify (included)
- HTTPS only, no HTTP

**Canonical Tags:**

- Self-referencing canonical on every page
- Prevent duplicate content issues

**Pagination:**

- `rel="next"` and `rel="prev"` if needed
- Canonical to page 1 for category listings

---

## Feature Requirements

### 1. Homepage

**Purpose:** Introduce FloatJet, showcase top content, drive to money pages

**Layout:**

```
                                     
          Header / Nav               
                                     $
                                     
         Hero Section                
   Tools & Resources for             
   Remote Professionals              
                                     
         [Browse Tools]              
                                     $
                                     
      Featured Articles (3)          
   [Card] [Card] [Card]              
                                     
                                     $
                                     
      Popular Categories             
   [SaaS] [VPN] [Gear] [Guides]      
                                     
                                     $
                                     
      Latest Articles (6)            
   [Card] [Card] [Card]              
   [Card] [Card] [Card]              
                                     
                                     $
         Footer                      
                                     
```

**Components:**

- Header with navigation (sticky)
- Hero section with CTA
- Featured articles grid (3-4 top performers)
- Category cards (4-6 main categories)
- Latest articles feed (6-9 most recent)
- Newsletter signup (optional, phase 2)
- Footer with links, disclosure, copyright

**Technical:**

- Static generation
- Preload hero image
- Lazy load article images below fold

### 2. Category Pages

**Example:** `/tools/`, `/gear/`, `/guides/`

**Layout:**

```
                                     
          Header / Nav               
                                     $
   Category: Productivity Tools      
   Brief description of category     
                                     $
                                     
      Article Grid                   
   [Card] [Card] [Card]              
   [Card] [Card] [Card]              
   [Card] [Card] [Card]              
                                     
      [Load More] or Pagination      
                                     $
         Footer                      
                                     
```

**Components:**

- Category header (H1, description)
- Article grid (responsive: 1 col mobile, 2 col tablet, 3 col desktop)
- Pagination (if >12 articles)
- Breadcrumbs

**Technical:**

- Generate from content collections
- Filter by category tag
- Sort by date (newest first) or custom order

### 3. Article Pages (Money Pages)

**Example:** `/tools/best-project-management-software/`

**Layout:**

```
                                     
          Header / Nav               
                                     $
   Breadcrumbs: Home > Tools > ...   
                                     $
                                     
     Article Title (H1)              
     By FloatJet Team | Dec 1, 2025  
     Last Updated: Dec 1, 2025       
                                     
   [Featured Image]                  
                                     
   Affiliate Disclosure Box          
                                     
                                     $
  [TOC - Table of Contents]          
   (Sticky sidebar on desktop)       
                                     $
                                     
   Article Content (MDX)             
                                     
   - Intro paragraph                 
   - Quick picks (top 3)             
   - Detailed reviews                
   - Comparison table                
   - How to choose                   
   - FAQ section                     
   - Conclusion                      
                                     
   [Affiliate CTAs throughout]       
                                     
                                     $
   Related Articles (3)              
                                     $
         Footer                      
                                     
```

**Components:**

- Breadcrumb navigation
- Article header (title, author, dates)
- Featured image
- Affiliate disclosure box (required FTC compliance)
- Table of contents (auto-generated from H2/H3)
- Article content (MDX rendering)
- Affiliate button component
- Comparison table component
- FAQ accordion (optional)
- Related articles
- Social share buttons (optional)

**Technical:**

- MDX content rendering
- Syntax highlighting (if code snippets)
- Auto-generate TOC from headings
- Lazy load images
- Schema markup (Article, Review, FAQ)
- Affiliate link tracking (PostHog events)

### 4. Affiliate Link Management

**Requirements:**

- Track all affiliate link clicks
- Pretty URLs (`/go/notion/`, `/go/nordvpn/`)
- UTM parameters for tracking
- `rel="nofollow sponsored"` on all affiliate links
- `target="_blank"` for external links

**Implementation:**

**Option A: Static Redirects (Netlify)**

```toml
# netlify.toml
[[redirects]]
  from = "/go/notion"
  to = "https://affiliate.notion.so?ref=floatjet&utm_source=floatjet&utm_medium=affiliate"
  status = 301
  force = true
```

**Option B: Netlify Functions**

```typescript
// netlify/functions/affiliate-redirect.ts
export async function handler(event: any) {
  const program = event.path.split('/go/')[1];

  // Track click event (PostHog)
  await trackClick(program);

  // Redirect
  const affiliateUrl = getAffiliateUrl(program);
  return {
    statusCode: 301,
    headers: { Location: affiliateUrl }
  };
}
```

**Decision: Option A (static redirects)** for simplicity, add Option B if we need click tracking

**Affiliate Button Component:**

```astro
---
// src/components/AffiliateButton.astro
interface Props {
  href: string;
  text: string;
  program: string;
}
const { href, text, program } = Astro.props;
---

<a
  href={href}
  class="affiliate-button"
  rel="nofollow sponsored noopener"
  target="_blank"
  data-program={program}
  onclick="trackAffiliateClick(this)"
>
  {text}
</a>
```

### 5. Comparison Tables

**Requirement:**

- Sortable columns
- Responsive (scroll on mobile)
- Affiliate links in each row
- Visual ratings/badges

**Component:**

```astro
---
// src/components/ComparisonTable.astro
interface Tool {
  name: string;
  price: string;
  rating: number;
  pros: string[];
  cons: string[];
  affiliateLink: string;
}

interface Props {
  tools: Tool[];
}
---

<div class="overflow-x-auto">
  <table class="comparison-table">
    <thead>
      <tr>
        <th>Tool</th>
        <th>Price</th>
        <th>Rating</th>
        <th>Best For</th>
        <th></th>
      </tr>
    </thead>
    <tbody>
      {tools.map(tool => (
        <tr>
          <td>{tool.name}</td>
          <td>{tool.price}</td>
          <td>P {tool.rating}/5</td>
          <td>{tool.bestFor}</td>
          <td>
            <a href={tool.affiliateLink}>View Deal</a>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
```

### 6. Search (Optional - Phase 2)

**Requirement:**

- Client-side search (no backend)
- Search articles by title, description, tags
- Fast (<100ms)

**Implementation:**

- **Pagefind** (Astro integration)
- **Fuse.js** (lightweight fuzzy search)

**Decision: Skip for MVP**, add in Month 3-4 if traffic justifies

### 7. Newsletter Signup (Optional - Phase 2)

**Requirement:**

- Embed form on homepage and article footers
- Integration with ConvertKit or Resend
- GDPR-compliant
- Double opt-in

**Implementation:**

```astro
---
// src/components/NewsletterForm.astro
---

<form action="https://app.convertkit.com/forms/..." method="post">
  <input
    type="email"
    name="email"
    placeholder="Enter your email"
    required
  />
  <button type="submit">Subscribe</button>
</form>
```

**Decision: Add in Month 3** when we have consistent traffic

---

## Content Management

### MDX Content Structure

**Frontmatter Schema:**

```yaml
---
title: "Best Project Management Software for Remote Teams 2025"
description: "Compare the top 10 project management tools for remote teams..."
pubDate: 2025-12-01
updatedDate: 2025-12-01
author: "FloatJet Team"
category: "tools"
subcategory: "project-management"
tags: ["project-management", "remote-work", "saas"]
featured: true
featuredImage: "/images/best-project-management-software.jpg"
featuredImageAlt: "Screenshot of project management software comparison"
---
```

**Content Collections Config:**

```typescript
// src/content/config.ts
import { defineCollection, z } from 'astro:content';

const toolsCollection = defineCollection({
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    author: z.string().default('FloatJet Team'),
    category: z.enum(['tools', 'gear', 'guides', 'blog']),
    subcategory: z.string().optional(),
    tags: z.array(z.string()),
    featured: z.boolean().default(false),
    featuredImage: z.string(),
    featuredImageAlt: z.string(),
  }),
});

export const collections = {
  'tools': toolsCollection,
  'gear': toolsCollection,
  'guides': toolsCollection,
  'blog': toolsCollection,
};
```

### Article Template

**File:** `src/content/tools/best-project-management-software.mdx`

```mdx
---
title: "Best Project Management Software for Remote Teams 2025"
description: "..."
pubDate: 2025-12-01
category: "tools"
tags: ["project-management", "remote-work"]
featuredImage: "/images/pm-software.jpg"
featuredImageAlt: "Project management software comparison"
---

## Quick Picks

<ComparisonTable tools={quickPicks} />

## Best Project Management Software

### 1. Notion - Best for Flexibility

[Content here...]

<AffiliateButton
  href="/go/notion"
  text="Try Notion Free"
  program="notion"
/>

### 2. ClickUp - Best for Features

[Content here...]

## Comparison Table

<ComparisonTable tools={allTools} />

## How to Choose

[Content here...]

## FAQs

<details>
  <summary>What is the best free project management software?</summary>
  <p>For free options, we recommend...</p>
</details>
```

---

## Design Requirements

### Visual Design

**Brand Colors:**

```css
/* Primary (Teal) */
--color-primary: #06B6D4;
--color-primary-dark: #0891B2;
--color-primary-light: #22D3EE;

/* Neutral */
--color-neutral-50: #F9FAFB;
--color-neutral-100: #F3F4F6;
--color-neutral-900: #111827;

/* Accent */
--color-accent: #3B82F6; /* Blue */
--color-success: #10B981; /* Green */
--color-warning: #F59E0B; /* Orange */
```

**Typography:**

```css
/* Headings */
font-family: 'Inter', -apple-system, sans-serif;
font-weight: 700;

/* Body */
font-family: 'Inter', -apple-system, sans-serif;
font-weight: 400;
font-size: 16px;
line-height: 1.6;

/* Code */
font-family: 'Fira Code', monospace;
```

**Spacing:**

- Tailwind default spacing scale (4px base)
- Consistent padding/margin

**Components:**

- Rounded corners (8px default)
- Subtle shadows
- Hover states on links/buttons
- Focus states for accessibility

### Mobile Responsiveness

**Breakpoints (Tailwind default):**

- `sm`: 640px
- `md`: 768px
- `lg`: 1024px
- `xl`: 1280px
- `2xl`: 1536px

**Mobile-First Approach:**

- Default styles for mobile
- Add complexity for larger screens
- Touch-friendly (min 48x48px tap targets)
- Readable font sizes (16px minimum)

### Accessibility

**Requirements:**

- WCAG 2.1 AA compliance
- Semantic HTML
- ARIA labels where needed
- Keyboard navigation
- Focus indicators
- Alt text on all images
- Sufficient color contrast (4.5:1 text, 3:1 UI)
- Skip to main content link

**Testing:**

- Lighthouse accessibility audit
- axe DevTools
- Keyboard-only navigation test
- Screen reader test (NVDA/JAWS)

---

## Integration Requirements

### Analytics & Tracking

**PostHog Setup:**

```typescript
// src/utils/analytics.ts
import posthog from 'posthog-js';

// Initialize PostHog
posthog.init('phc_...', {
  api_host: 'https://app.posthog.com',
  capture_pageview: true,
  capture_pageleave: true,
});

// Track affiliate clicks
export function trackAffiliateClick(program: string, url: string) {
  posthog.capture('affiliate_click', {
    program,
    url,
    page: window.location.pathname,
  });
}

// Track page views
export function trackPageView(page: string) {
  posthog.capture('$pageview', { page });
}
```

**Google Analytics 4:**

```html
<!-- In <head> -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

**Events to Track:**

- Page views
- Affiliate link clicks (by program)
- Article scroll depth
- Time on page
- Outbound links
- Newsletter signups (future)
- Search queries (future)

### Affiliate Network Integrations

**No server-side integrations needed** - all tracking via:

- UTM parameters in affiliate URLs
- Affiliate network cookies
- PostHog for our own click tracking

**Affiliate Disclosure:**

```html
<!-- Required on every page with affiliate links -->
<div class="affiliate-disclosure">
  <p>
    <strong>Disclosure:</strong> Some links on this page are affiliate links,
    which means we may earn a commission if you make a purchase. This comes at
    no additional cost to you and helps us keep FloatJet running. We only
    recommend tools we've personally tested or genuinely believe in.
  </p>
</div>
```

### Social Media Integration

**Open Graph Tags:** (See SEO Requirements)

**Social Share Buttons (Optional):**

- Twitter/X
- LinkedIn
- Facebook (lower priority)
- Copy link

**Implementation:**

```astro
---
// src/components/SocialShare.astro
const { title, url } = Astro.props;
const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`;
const linkedinUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`;
---

<div class="social-share">
  <a href={twitterUrl} target="_blank">Share on Twitter</a>
  <a href={linkedinUrl} target="_blank">Share on LinkedIn</a>
</div>
```

---

## Launch Criteria

### Must-Haves for Launch (MVP)

**Technical:**

- [ ] Site deployed to Netlify
- [ ] Custom domain (floatjet.com) connected
- [ ] SSL certificate active
- [ ] Lighthouse score >85 (all categories)
- [ ] Mobile responsive (tested on 3+ devices)
- [ ] No broken links
- [ ] Sitemap.xml generated and submitted
- [ ] Google Search Console verified
- [ ] PostHog analytics tracking
- [ ] Google Analytics 4 tracking
- [ ] Robots.txt configured

**Content:**

- [ ] Homepage complete
- [ ] 4 category pages live
- [ ] 10 money pages published
- [ ] About page with affiliate disclosure
- [ ] 404 page designed
- [ ] All images optimized (WebP)
- [ ] All articles have meta descriptions
- [ ] All articles have schema markup
- [ ] Affiliate links working and tracked

**SEO:**

- [ ] Meta tags on all pages
- [ ] Open Graph tags on all pages
- [ ] Canonical tags set
- [ ] Alt text on all images
- [ ] Internal linking implemented
- [ ] Breadcrumbs on article pages
- [ ] Schema markup validated

**Legal:**

- [ ] Affiliate disclosure on all pages with links
- [ ] Privacy policy (if collecting emails)
- [ ] Cookie notice (if needed for GDPR)

### Nice-to-Haves (Post-Launch)

- [ ] Newsletter signup form
- [ ] Search functionality
- [ ] Dark mode toggle
- [ ] Related articles algorithm
- [ ] Reading time estimates
- [ ] Social share counts
- [ ] Comments (likely won't add)

---

## Success Metrics (Technical)

### Performance Metrics

**Target (3 months post-launch):**

- **Lighthouse Performance (Mobile): 100/100** ⭐
- **Lighthouse Performance (Desktop): 100/100** ⭐
- Lighthouse Accessibility: 100
- Lighthouse Best Practices: 100
- Lighthouse SEO: 100
- **Mobile Core Web Vitals: All passing**
    - FCP: <1.5s
    - LCP: <2.5s
    - CLS: <0.1
    - FID: <100ms
    - TTI: <3.0s
- Uptime: >99.9%
- **Mobile page load time: <2s**
- Desktop page load time: <1.5s
- **Total page weight: <500KB** (mobile)

### User Experience Metrics

**Target (3 months post-launch):**

- Bounce rate: <60% overall, **<55% mobile**
- Average session duration: >2 minutes
- Pages per session: >1.5
- Affiliate CTR: 3-5%
- **Mobile traffic: 50-60%** (majority)
- **Mobile conversion rate: ≥ desktop** (well-optimized mobile = same or better conversions)

### SEO Metrics

**Target (6 months post-launch):**

- Indexed pages: 50+
- Page 1 rankings: 10+
- Page 2 rankings: 20+
- Organic traffic: 10,000+/month
- Domain Rating (Ahrefs): 20+
- Backlinks: 100+
- **Mobile-friendly test: Passing** (Google Search Console)
- **AI Search Engine presence:**
    - Citations in ChatGPT responses (track manually)
    - Indexed by Perplexity (verify manually)
    - Crawled by AI bots (check server logs)
    - Featured in AI-generated summaries

---

## Development Timeline

### Week 1: Setup (Nov 20-26)

- [x] Repository created
- [x] Domain purchased and configured (floatjet.com)
- [x] Netlify hosting connected
- [x] GitHub → Netlify CI/CD pipeline configured
- [x] SSL certificate (automatic)
- [ ] Astro project initialized
- [ ] Tailwind CSS configured
- [ ] Component library chosen (shadcn/ui)
- [ ] Base layouts created
- [ ] Homepage template designed
- [ ] Article template designed
- [ ] Initial deploy to Netlify

### Week 2: Core Features (Nov 27 - Dec 3)

- [ ] Article page functionality
- [ ] MDX content rendering
- [ ] Affiliate button component
- [ ] Comparison table component
- [ ] Schema markup component
- [ ] Table of contents component
- [ ] Category pages
- [ ] 404 page

### Week 3: Content & SEO (Dec 4-10)

- [ ] Write 2 money pages (publish to staging)
- [ ] Implement all meta tags
- [ ] Add schema markup
- [ ] Set up PostHog
- [ ] Set up Google Analytics
- [ ] Set up Google Search Console (domain verification)
- [ ] Optimize images
- [ ] Performance audit and fixes

### Week 4: Launch (Dec 11-17)

- [ ] Write 8 more money pages (total: 10)
- [ ] Final QA (cross-browser, cross-device)
- [ ] Performance optimization
- [ ] Deploy to production (floatjet.com)
- [ ] Submit sitemap
- [ ] Launch announcement

---

## Technical Specifications

### Browser Support

**Target:**

- Chrome/Edge (last 2 versions)
- Firefox (last 2 versions)
- Safari (last 2 versions)
- Mobile Safari (iOS 14+)
- Chrome Mobile (Android)

**Progressive Enhancement:**

- Core content accessible without JS
- Enhanced features with JS
- Graceful degradation for older browsers

### Hosting Configuration (Netlify)

**Build Settings:**

```toml
# netlify.toml
[build]
  command = "npm run build"
  publish = "dist"

[build.environment]
  NODE_VERSION = "20"

[[headers]]
  for = "/*"
  [headers.values]
    X-Frame-Options = "DENY"
    X-XSS-Protection = "1; mode=block"
    X-Content-Type-Options = "nosniff"
    Referrer-Policy = "strict-origin-when-cross-origin"

[[headers]]
  for = "/images/*"
  [headers.values]
    Cache-Control = "public, max-age=31536000, immutable"

[[redirects]]
  from = "/go/notion"
  to = "https://affiliate.notion.so?ref=floatjet"
  status = 301
  force = true
```

**Environment Variables:**

- `POSTHOG_API_KEY`
- `GA_TRACKING_ID`
- (Add more as needed)

### Security

**Headers:**

- X-Frame-Options: DENY
- X-Content-Type-Options: nosniff
- X-XSS-Protection: 1; mode=block
- Referrer-Policy: strict-origin-when-cross-origin
- Content-Security-Policy (if needed)

**Best Practices:**

- HTTPS only (Netlify default)
- No sensitive data in client-side code
- Sanitize any user input (if we add forms)
- Regular dependency updates
- Dependabot alerts enabled on GitHub

### robots.txt Configuration (AI Crawler Optimized)

**Location:** `public/robots.txt`

**Configuration:**

```txt
# FloatJet robots.txt - Optimized for traditional + AI search engines

# Allow all bots by default
User-agent: *
Allow: /
Disallow: /admin/

# Explicitly allow AI search engines and crawlers
# This ensures we get indexed and cited by AI tools

# OpenAI (ChatGPT Search & Training)
User-agent: ChatGPT-User
Allow: /

User-agent: GPTBot
Allow: /

# Perplexity AI Search
User-agent: PerplexityBot
Allow: /

# Anthropic (Claude)
User-agent: Claude-Web
Allow: /

User-agent: anthropic-ai
Allow: /

# Google AI (Gemini/Bard)
User-agent: Google-Extended
Allow: /

# Apple Intelligence
User-agent: Applebot-Extended
Allow: /

# Cohere AI
User-agent: cohere-ai
Allow: /

# Common Crawl (used for AI training datasets)
User-agent: CCBot
Allow: /

# Meta AI
User-agent: FacebookBot
Allow: /

# Sitemap
Sitemap: https://floatjet.com/sitemap.xml
```

**Why This Matters:**

- Many sites block AI crawlers (GPTBot, CCBot) to prevent AI training
- We WANT AI training on our content (increases citations)
- Explicitly allowing ensures we're not accidentally blocked
- AI search engines (ChatGPT, Perplexity) can cite our content
- Differentiates us from competitors who block AI

**Monitoring:**

- Check server logs for AI bot visits
- Track referrals from AI search engines in PostHog
- Monitor for ChatGPT/Perplexity citations (manual)

### Monitoring & Alerts

**Netlify:**

- Deploy notifications (Slack/email)
- Build failure alerts

**Google Search Console:**

- Coverage issues
- Core Web Vitals alerts
- Manual actions notifications

**Uptime Monitoring:**

- UptimeRobot (free tier: 50 monitors)
- Check homepage every 5 minutes
- Alert if down for >2 minutes

---

## Future Enhancements (Post-Launch)

### Phase 2 (Month 3-6)

- Newsletter integration (ConvertKit)
- Email capture lead magnets
- Site search (Pagefind)
- Reading progress bar
- Dark mode
- Better related articles algorithm

### Phase 3 (Month 6-12)

- Interactive tools (ROI calculators, etc.)
- Video embeds (YouTube)
- Podcast integration (if we start one)
- User accounts (if we go that route)
- Community features (unlikely, but possible)

### Phase 4 (Year 2+)

- Headless CMS (if content team grows)
- A/B testing platform
- Advanced personalization
- Conversion rate optimization tools
- Internationalization (other languages)

---

## Maintenance & Updates

### Regular Tasks

**Weekly:**

- Monitor Google Search Console for issues
- Check PostHog for anomalies
- Review affiliate commission dashboards

**Monthly:**

- Performance audit (Lighthouse)
- Security updates (dependencies)
- Content freshness check (update top 5 articles if needed)
- Backlink analysis
- Keyword rankings review

**Quarterly:**

- Comprehensive SEO audit
- Update all money pages
- Competitor analysis
- Tech stack review
- Analytics deep dive

**Annually:**

- Complete site redesign evaluation
- Hosting cost optimization
- Affiliate program review
- Content strategy pivot (if needed)

---

## Conclusion

This PRD defines the technical requirements for building FloatJet as a high-performance, SEO-optimized affiliate content
site. By following these specifications, we'll create a fast, accessible, and conversion-optimized site that supports
our business goal of $2,000+/month in passive affiliate revenue.

**Key Technical Principles:**

1. **Performance First** - Static generation, optimized assets, minimal JS
2. **SEO Obsessed** - Schema, meta tags, Core Web Vitals, internal linking
3. **User Focused** - Fast, accessible, mobile-friendly, helpful content
4. **Maintainable** - Simple stack, documented code, automated deployments
5. **Scalable** - Can grow to 100+ articles without performance issues

**Next Steps:**

1. Review and approve this PRD
2. Begin Week 1 implementation (Astro setup)
3. Design and build component library
4. Launch MVP by December 17, 2025

---

**Ready to build.** =�
