# FloatJet Component Specifications

## Missing Components - Design & Implementation Guide

**Version:** 1.0
**Last Updated:** November 20, 2025
**Purpose:** Specifications for missing SEO, conversion, and UX components

---

## Table of Contents

1. [Affiliate Disclosure Box](#1-affiliate-disclosure-box)
2. [Breadcrumbs](#2-breadcrumbs)
3. [FAQ Section](#3-faq-section)
4. [Related Articles](#4-related-articles)
5. [Mobile Table of Contents](#5-mobile-table-of-contents)
6. [Comparison Table (Enhanced)](#6-comparison-table-enhanced)
7. [CTA Buttons (Affiliate)](#7-cta-buttons-affiliate)
8. [Article Metadata](#8-article-metadata)

---

## 1. Affiliate Disclosure Box

### Purpose

- FTC compliance (required by law)
- Build trust with readers
- Legal protection

### Placement

- **Primary:** Top of article, after introduction, before first affiliate link
- **Secondary:** Footer (site-wide)

### Visual Design

**Desktop & Mobile (same):**

```
┌─────────────────────────────────────────────────┐
│  ℹ️  Disclosure                                  │
│                                                 │
│  Some links on this page are affiliate links,  │
│  which means we may earn a commission if you   │
│  make a purchase. This comes at no additional  │
│  cost to you and helps us keep FloatJet       │
│  running. We only recommend tools we've        │
│  personally tested or genuinely believe will   │
│  help you work more efficiently.               │
└─────────────────────────────────────────────────┘
```

### Specifications

**Container:**

- Background: `#E0FBFC` (Sand - lightest teal)
- Border: `2px solid #80CED7` (Sky Light)
- Border radius: `12px` (rounded-xl)
- Padding: `16px` (mobile) / `20px` (desktop)
- Margin: `32px 0` (top and bottom)

**Icon:**

- Info icon (ℹ️) or alert icon
- Color: `#38A3A5` (Jet Stream)
- Size: `20px`
- Position: Inline with "Disclosure" text

**Typography:**

- Heading "Disclosure":
    - Font: Inter Medium (500)
    - Size: `16px`
    - Color: `#0F4C5C` (Ocean Deep)
    - Weight: 600

- Body text:
    - Font: Inter Regular (400)
    - Size: `14px`
    - Color: `#1E293B` (Slate)
    - Line height: `1.6`

**Accessibility:**

- `role="note"`
- `aria-label="Affiliate Disclosure"`
- Minimum contrast: 4.5:1 (text on background)

### Code Example

```astro
---
// src/components/AffiliateDisclosure.astro
---

<aside
  class="affiliate-disclosure"
  role="note"
  aria-label="Affiliate Disclosure"
>
  <div class="disclosure-header">
    <svg class="disclosure-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clip-rule="evenodd" />
    </svg>
    <strong>Disclosure</strong>
  </div>
  <p>
    Some links on this page are affiliate links, which means we may earn a
    commission if you make a purchase. This comes at no additional cost to you
    and helps us keep FloatJet running. We only recommend tools we've personally
    tested or genuinely believe will help you work more efficiently.
  </p>
</aside>

<style>
  .affiliate-disclosure {
    background: #E0FBFC;
    border: 2px solid #80CED7;
    border-radius: 12px;
    padding: 20px;
    margin: 32px 0;
  }

  .disclosure-header {
    display: flex;
    align-items: center;
    gap: 8px;
    margin-bottom: 8px;
    font-family: 'Inter', sans-serif;
    font-weight: 600;
    font-size: 16px;
    color: #0F4C5C;
  }

  .disclosure-icon {
    width: 20px;
    height: 20px;
    color: #38A3A5;
    flex-shrink: 0;
  }

  .affiliate-disclosure p {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    line-height: 1.6;
    color: #1E293B;
    margin: 0;
  }

  @media (max-width: 640px) {
    .affiliate-disclosure {
      padding: 16px;
    }
  }
</style>
```

---

## 2. Breadcrumbs

### Purpose

- SEO (helps Google understand site structure)
- User navigation (shows location in hierarchy)
- Reduces bounce rate (easy to navigate back)

### Placement

- Top of every page (below header, above H1)
- Desktop: Full width
- Mobile: Horizontal scroll if needed

### Visual Design

**Desktop:**

```
Home > Tools > Project Management > Best Project Management Software
```

**Mobile:**

```
Home > ... > Best Project Management Software
(with horizontal scroll)
```

### Specifications

**Container:**

- Margin: `16px 0`
- Display: `flex`
- Gap: `8px`
- Font size: `14px`
- Color: `#64748B` (Gray)

**Links:**

- Color: `#38A3A5` (Jet Stream)
- Hover: `#0F4C5C` (Ocean Deep)
- Underline: None (underline on hover)
- Current page: Not a link, `#1E293B` (Slate), font weight: 500

**Separator:**

- Icon: `>` or `/` or `›`
- Color: `#64748B` (Gray)
- Opacity: 0.5

**Accessibility:**

- `<nav aria-label="Breadcrumb">`
- `<ol>` list for structure
- `aria-current="page"` on current page

### Code Example

```astro
---
// src/components/Breadcrumbs.astro
interface Props {
  items: Array<{
    label: string;
    href?: string; // undefined for current page
  }>;
}

const { items } = Astro.props;
---

<nav aria-label="Breadcrumb" class="breadcrumbs">
  <ol>
    {items.map((item, index) => (
      <li>
        {item.href ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
        {index < items.length - 1 && (
          <span class="separator" aria-hidden="true">›</span>
        )}
      </li>
    ))}
  </ol>
</nav>

<style>
  .breadcrumbs {
    margin: 16px 0;
  }

  .breadcrumbs ol {
    display: flex;
    flex-wrap: wrap;
    gap: 8px;
    list-style: none;
    padding: 0;
    margin: 0;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
  }

  .breadcrumbs li {
    display: flex;
    align-items: center;
    gap: 8px;
  }

  .breadcrumbs a {
    color: #38A3A5;
    text-decoration: none;
    transition: color 0.2s;
  }

  .breadcrumbs a:hover {
    color: #0F4C5C;
    text-decoration: underline;
  }

  .breadcrumbs span[aria-current="page"] {
    color: #1E293B;
    font-weight: 500;
  }

  .breadcrumbs .separator {
    color: #64748B;
    opacity: 0.5;
    user-select: none;
  }

  /* Mobile: Show only first and last */
  @media (max-width: 640px) {
    .breadcrumbs li:not(:first-child):not(:last-child):not(.separator) {
      display: none;
    }

    /* Show ellipsis */
    .breadcrumbs li:nth-child(2)::after {
      content: '...';
      color: #64748B;
      margin: 0 4px;
    }
  }
</style>
```

### Usage Example

```astro
<Breadcrumbs
  items={[
    { label: 'Home', href: '/' },
    { label: 'Tools', href: '/tools' },
    { label: 'Project Management', href: '/tools/project-management' },
    { label: 'Best Project Management Software' } // current page
  ]}
/>
```

---

## 3. FAQ Section

### Purpose

- SEO (rich snippets in Google)
- AI crawler optimization (ChatGPT, Perplexity love FAQs)
- User value (answer common questions)

### Placement

- Bottom of article (before conclusion)
- After main content, before related articles

### Visual Design

**Desktop & Mobile:**

```
┌─────────────────────────────────────────────┐
│  Frequently Asked Questions                 │
│                                             │
│  ▼ What is the best free project...?       │
│     [Answer text appears when expanded]     │
│                                             │
│  ▶ Do I need project management software?  │
│                                             │
│  ▶ How much does it cost?                  │
└─────────────────────────────────────────────┘
```

### Specifications

**Section:**

- Margin: `64px 0 32px` (top and bottom)
- Max width: Article content width

**Heading:**

- Text: "Frequently Asked Questions"
- Font: Outfit Bold (700)
- Size: `32px` (mobile) / `36px` (desktop)
- Color: `#0F4C5C` (Ocean Deep)
- Margin bottom: `24px`

**FAQ Item (Accordion):**

- Border: `1px solid #E0FBFC`
- Border radius: `8px`
- Margin: `8px 0`
- Padding: `16px`
- Background: `#FFFFFF`
- Hover: Background `#F8FAFC` (Off-White)

**Question (Button):**

- Font: Inter Medium (500)
- Size: `18px`
- Color: `#1E293B` (Slate)
- Display: Flex with icon
- Icon: Chevron (▶ or ▼)
- Icon color: `#38A3A5` (Jet Stream)
- Cursor: Pointer
- Full width, text-align left

**Answer:**

- Font: Inter Regular (400)
- Size: `16px`
- Color: `#1E293B` (Slate)
- Line height: `1.6`
- Padding: `16px 0 0 32px` (indent from icon)
- Transition: Smooth expand/collapse

**Accessibility:**

- `<details>` and `<summary>` elements (native HTML)
- Or ARIA: `aria-expanded`, `aria-controls`
- Keyboard navigable (Enter/Space to toggle)

### Code Example

```astro
---
// src/components/FAQSection.astro
interface FAQ {
  question: string;
  answer: string;
}

interface Props {
  faqs: FAQ[];
}

const { faqs } = Astro.props;
---

<section class="faq-section">
  <h2>Frequently Asked Questions</h2>

  <div class="faq-list">
    {faqs.map((faq, index) => (
      <details class="faq-item">
        <summary class="faq-question">
          <svg class="faq-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd" />
          </svg>
          <span>{faq.question}</span>
        </summary>
        <div class="faq-answer" set:html={faq.answer} />
      </details>
    ))}
  </div>
</section>

<!-- FAQ Schema Markup for SEO -->
<script type="application/ld+json" set:html={JSON.stringify({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.answer
    }
  }))
})} />

<style>
  .faq-section {
    margin: 64px 0 32px;
  }

  .faq-section h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: #0F4C5C;
    margin-bottom: 24px;
  }

  .faq-list {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .faq-item {
    border: 1px solid #E0FBFC;
    border-radius: 8px;
    padding: 16px;
    background: #FFFFFF;
    transition: background 0.2s;
  }

  .faq-item:hover {
    background: #F8FAFC;
  }

  .faq-question {
    display: flex;
    align-items: center;
    gap: 12px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 18px;
    color: #1E293B;
    cursor: pointer;
    list-style: none;
    user-select: none;
  }

  .faq-question::-webkit-details-marker {
    display: none;
  }

  .faq-icon {
    width: 20px;
    height: 20px;
    color: #38A3A5;
    flex-shrink: 0;
    transition: transform 0.2s;
  }

  .faq-item[open] .faq-icon {
    transform: rotate(90deg);
  }

  .faq-answer {
    font-family: 'Inter', sans-serif;
    font-size: 16px;
    line-height: 1.6;
    color: #1E293B;
    margin-top: 12px;
    padding-left: 32px;
  }

  @media (max-width: 640px) {
    .faq-section h2 {
      font-size: 32px;
    }

    .faq-question {
      font-size: 16px;
    }

    .faq-answer {
      font-size: 15px;
      padding-left: 32px;
    }
  }
</style>
```

### Usage Example

```astro
<FAQSection
  faqs={[
    {
      question: "What is the best free project management software?",
      answer: "Notion is the best free option for small teams (up to 10 people). You get unlimited pages, databases, and blocks. Asana is also excellent for up to 15 users with basic project management features."
    },
    {
      question: "Can project management software replace email?",
      answer: "Not entirely, but it can significantly reduce email volume. Tools like Notion, ClickUp, and Asana include comments, @mentions, and notifications that replace many status update emails."
    },
    // ... more FAQs
  ]}
/>
```

---

## 4. Related Articles

### Purpose

- SEO (internal linking)
- Reduce bounce rate
- Increase pageviews
- Guide users to money pages

### Placement

- Bottom of article (after FAQ, before footer)
- Desktop: 3 columns
- Mobile: Single column or 2 columns

### Visual Design

**Desktop (3 columns):**

```
┌─────────────────────────────────────────────────────────┐
│  Related Articles                                        │
│                                                          │
│  ┌─────────┐  ┌─────────┐  ┌─────────┐                │
│  │ [Image] │  │ [Image] │  │ [Image] │                │
│  │         │  │         │  │         │                │
│  │ Title   │  │ Title   │  │ Title   │                │
│  │ Excerpt │  │ Excerpt │  │ Excerpt │                │
│  │ →       │  │ →       │  │ →       │                │
│  └─────────┘  └─────────┘  └─────────┘                │
└─────────────────────────────────────────────────────────┘
```

### Specifications

**Section:**

- Margin: `64px 0`
- Background: `#F8FAFC` (Off-White) - full width
- Padding: `48px 0`

**Heading:**

- Text: "Related Articles"
- Font: Outfit Bold (700)
- Size: `32px` (mobile) / `36px` (desktop)
- Color: `#0F4C5C` (Ocean Deep)
- Margin bottom: `32px`

**Card:**

- Background: `#FFFFFF`
- Border radius: `16px` (rounded-2xl)
- Shadow: `0 1px 3px rgba(0,0,0,0.1)`
- Hover: `translateY(-4px)`, shadow `0 4px 12px rgba(0,0,0,0.15)`
- Transition: `0.2s`
- Overflow: hidden

**Image:**

- Aspect ratio: `16:9`
- Width: 100%
- Object fit: cover
- Background: `#E0FBFC` (placeholder)

**Title:**

- Font: Outfit SemiBold (600)
- Size: `20px`
- Color: `#0F4C5C` (Ocean Deep)
- Margin: `16px 16px 8px`
- Line clamp: 2 lines max

**Excerpt:**

- Font: Inter Regular (400)
- Size: `14px`
- Color: `#64748B` (Gray)
- Margin: `0 16px 16px`
- Line clamp: 3 lines max

**Read More Link:**

- Font: Inter Medium (500)
- Size: `14px`
- Color: `#38A3A5` (Jet Stream)
- Icon: Arrow → (20px)
- Hover: Underline

**Grid:**

- Desktop: 3 columns, gap `24px`
- Tablet: 2 columns, gap `20px`
- Mobile: 1 column, gap `16px`

### Code Example

```astro
---
// src/components/RelatedArticles.astro
interface Article {
  title: string;
  excerpt: string;
  href: string;
  image: string;
  imageAlt: string;
}

interface Props {
  articles: Article[];
}

const { articles } = Astro.props;
---

<section class="related-articles">
  <div class="container">
    <h2>Related Articles</h2>

    <div class="articles-grid">
      {articles.map(article => (
        <a href={article.href} class="article-card">
          <div class="article-image">
            <img
              src={article.image}
              alt={article.imageAlt}
              loading="lazy"
              width="400"
              height="225"
            />
          </div>
          <div class="article-content">
            <h3 class="article-title">{article.title}</h3>
            <p class="article-excerpt">{article.excerpt}</p>
            <span class="article-link">
              Read More
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
              </svg>
            </span>
          </div>
        </a>
      ))}
    </div>
  </div>
</section>

<style>
  .related-articles {
    background: #F8FAFC;
    padding: 48px 0;
    margin: 64px 0 0;
  }

  .container {
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
  }

  .related-articles h2 {
    font-family: 'Outfit', sans-serif;
    font-weight: 700;
    font-size: 36px;
    color: #0F4C5C;
    margin-bottom: 32px;
  }

  .articles-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 24px;
  }

  .article-card {
    background: #FFFFFF;
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 1px 3px rgba(0,0,0,0.1);
    transition: all 0.2s;
    text-decoration: none;
    display: block;
  }

  .article-card:hover {
    transform: translateY(-4px);
    box-shadow: 0 4px 12px rgba(0,0,0,0.15);
  }

  .article-image {
    width: 100%;
    aspect-ratio: 16 / 9;
    background: #E0FBFC;
    overflow: hidden;
  }

  .article-image img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.2s;
  }

  .article-card:hover .article-image img {
    transform: scale(1.05);
  }

  .article-content {
    padding: 16px;
  }

  .article-title {
    font-family: 'Outfit', sans-serif;
    font-weight: 600;
    font-size: 20px;
    color: #0F4C5C;
    margin: 0 0 8px;

    /* Line clamp */
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-excerpt {
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748B;
    margin: 0 0 12px;
    line-height: 1.5;

    /* Line clamp */
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }

  .article-link {
    display: inline-flex;
    align-items: center;
    gap: 6px;
    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 14px;
    color: #38A3A5;
    transition: text-decoration 0.2s;
  }

  .article-link svg {
    width: 16px;
    height: 16px;
    transition: transform 0.2s;
  }

  .article-card:hover .article-link {
    text-decoration: underline;
  }

  .article-card:hover .article-link svg {
    transform: translateX(4px);
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .articles-grid {
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }
  }

  /* Mobile */
  @media (max-width: 640px) {
    .related-articles {
      padding: 32px 0;
      margin-top: 48px;
    }

    .container {
      padding: 0 16px;
    }

    .related-articles h2 {
      font-size: 32px;
      margin-bottom: 24px;
    }

    .articles-grid {
      grid-template-columns: 1fr;
      gap: 16px;
    }

    .article-title {
      font-size: 18px;
    }
  }
</style>
```

### Usage Example

```astro
<RelatedArticles
  articles={[
    {
      title: "Best VPNs for Digital Nomads",
      excerpt: "Secure your connection anywhere with our top picks for privacy and speed.",
      href: "/tools/best-vpn-digital-nomads",
      image: "/images/vpn-hero.webp",
      imageAlt: "VPN shield and globe illustration"
    },
    {
      title: "How to Set Up a Home Office on a Budget",
      excerpt: "Create a productive workspace without breaking the bank with these tips.",
      href: "/guides/home-office-budget",
      image: "/images/home-office.webp",
      imageAlt: "Modern home office setup"
    },
    {
      title: "15 Chrome Extensions for Remote Workers",
      excerpt: "Boost your productivity with these essential browser extensions.",
      href: "/blog/chrome-extensions-productivity",
      image: "/images/chrome-ext.webp",
      imageAlt: "Chrome browser with extensions"
    }
  ]}
/>
```

---

## 5. Mobile Table of Contents

### Purpose

- Mobile navigation (long articles)
- Better UX on small screens
- Reduce scroll fatigue

### Solution

Desktop: Sticky sidebar (as shown in mockup)
Mobile: Floating button + overlay

### Visual Design

**Mobile Closed State:**

```
                    ┌──────────┐
                    │ TOC [▼] │  ← Floating button
                    └──────────┘
```

**Mobile Open State:**

```
┌─────────────────────────────────┐
│  Table of Contents        [ × ] │
│                                 │
│  • Introduction                 │
│  • Why Project Management?     │
│  • Top 5 Tools                  │
│  • Comparison Table             │
│  • Conclusion                   │
└─────────────────────────────────┘
      ↑ Glassmorphic overlay
```

### Specifications

**Floating Button (Mobile):**

- Position: Fixed, bottom `24px`, right `24px`
- Background: `#38A3A5` (Jet Stream) with glassmorphism
- Border radius: `24px` (pill shape)
- Padding: `12px 20px`
- Shadow: `0 4px 12px rgba(0,0,0,0.15)`
- Icon: List icon + chevron
- Text: "TOC" or "Contents"
- Z-index: 40

**Overlay (Mobile):**

- Position: Fixed, top `0`, left `0`, right `0`
- Max height: `70vh`
- Background: `rgba(255, 255, 255, 0.95)`
- Backdrop filter: `blur(12px)`
- Border: `1px solid rgba(255, 255, 255, 0.3)`
- Border radius: `0 0 24px 24px` (top-left, top-right sharp)
- Shadow: `0 8px 32px rgba(0,0,0,0.2)`
- Padding: `24px`
- Z-index: 50
- Animation: Slide down from top

**TOC Links (Mobile):**

- Font: Inter Medium (500)
- Size: `16px`
- Color: `#1E293B` (Slate)
- Active: `#38A3A5` (Jet Stream), bold
- Padding: `12px 0`
- Border bottom: `1px solid #E0FBFC`

**Desktop (Sidebar):**

- Keep existing glassmorphic sidebar design
- Position: Sticky, top `100px`
- Show on screens `1024px+`

### Code Example

```astro
---
// src/components/TableOfContents.astro
interface Heading {
  text: string;
  slug: string;
  depth: number;
}

interface Props {
  headings: Heading[];
}

const { headings } = Astro.props;
---

<!-- Desktop Sidebar (1024px+) -->
<aside class="toc-sidebar">
  <div class="toc-content">
    <h2 class="toc-title">Table of Contents</h2>
    <nav>
      <ul class="toc-list">
        {headings.map(heading => (
          <li class={`toc-item depth-${heading.depth}`}>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</aside>

<!-- Mobile Floating Button + Overlay (< 1024px) -->
<div class="toc-mobile">
  <button class="toc-toggle" aria-label="Toggle table of contents">
    <svg class="toc-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
      <path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd" />
    </svg>
    <span>TOC</span>
  </button>

  <div class="toc-overlay" hidden>
    <div class="toc-overlay-header">
      <h2>Table of Contents</h2>
      <button class="toc-close" aria-label="Close table of contents">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd" />
        </svg>
      </button>
    </div>
    <nav class="toc-overlay-nav">
      <ul>
        {headings.map(heading => (
          <li class={`depth-${heading.depth}`}>
            <a href={`#${heading.slug}`}>{heading.text}</a>
          </li>
        ))}
      </ul>
    </nav>
  </div>
</div>

<script>
  // Mobile TOC toggle
  const toggleBtn = document.querySelector('.toc-toggle');
  const closeBtn = document.querySelector('.toc-close');
  const overlay = document.querySelector('.toc-overlay');
  const links = overlay?.querySelectorAll('a');

  toggleBtn?.addEventListener('click', () => {
    overlay?.removeAttribute('hidden');
  });

  closeBtn?.addEventListener('click', () => {
    overlay?.setAttribute('hidden', '');
  });

  // Close when clicking a link
  links?.forEach(link => {
    link.addEventListener('click', () => {
      overlay?.setAttribute('hidden', '');
    });
  });

  // Active link tracking (desktop & mobile)
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach(entry => {
        const id = entry.target.getAttribute('id');
        const link = document.querySelector(`a[href="#${id}"]`);

        if (entry.isIntersecting) {
          document.querySelectorAll('.toc-list a, .toc-overlay-nav a').forEach(l => {
            l.classList.remove('active');
          });
          link?.classList.add('active');
        }
      });
    },
    { rootMargin: '-100px 0px -66%' }
  );

  // Observe all headings
  headings.forEach(heading => {
    const el = document.getElementById(heading.slug);
    if (el) observer.observe(el);
  });
</script>

<style>
  /* Desktop Sidebar */
  .toc-sidebar {
    display: none;
  }

  @media (min-width: 1024px) {
    .toc-sidebar {
      display: block;
      position: sticky;
      top: 100px;
      width: 280px;
      max-height: calc(100vh - 120px);
      overflow-y: auto;
    }

    .toc-content {
      background: rgba(255, 255, 255, 0.7);
      backdrop-filter: blur(12px);
      border: 1px solid rgba(255, 255, 255, 0.3);
      border-radius: 16px;
      padding: 24px;
      box-shadow: 0 2px 8px rgba(0,0,0,0.08);
    }

    .toc-title {
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      font-size: 20px;
      color: #0F4C5C;
      margin: 0 0 16px;
    }

    .toc-list {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc-item {
      margin: 8px 0;
    }

    .toc-item.depth-3 {
      padding-left: 16px;
    }

    .toc-list a {
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #64748B;
      text-decoration: none;
      transition: color 0.2s;
      display: block;
      padding: 4px 0;
    }

    .toc-list a:hover,
    .toc-list a.active {
      color: #38A3A5;
      font-weight: 500;
    }

    .toc-mobile {
      display: none;
    }
  }

  /* Mobile TOC */
  @media (max-width: 1023px) {
    .toc-mobile {
      display: block;
    }

    .toc-toggle {
      position: fixed;
      bottom: 24px;
      right: 24px;
      z-index: 40;

      display: flex;
      align-items: center;
      gap: 8px;

      background: rgba(56, 163, 165, 0.9);
      backdrop-filter: blur(8px);
      color: white;
      border: none;
      border-radius: 24px;
      padding: 12px 20px;

      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 14px;

      box-shadow: 0 4px 12px rgba(0,0,0,0.15);
      cursor: pointer;
      transition: all 0.2s;
    }

    .toc-toggle:hover {
      background: rgba(15, 76, 92, 0.9);
      transform: translateY(-2px);
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }

    .toc-icon {
      width: 20px;
      height: 20px;
    }

    .toc-overlay {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      max-height: 70vh;
      z-index: 50;

      background: rgba(255, 255, 255, 0.95);
      backdrop-filter: blur(12px);
      border-radius: 0 0 24px 24px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.2);

      overflow-y: auto;

      animation: slideDown 0.3s ease-out;
    }

    .toc-overlay[hidden] {
      display: none;
    }

    @keyframes slideDown {
      from {
        transform: translateY(-100%);
        opacity: 0;
      }
      to {
        transform: translateY(0);
        opacity: 1;
      }
    }

    .toc-overlay-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 24px 24px 16px;
      border-bottom: 1px solid #E0FBFC;
    }

    .toc-overlay-header h2 {
      font-family: 'Outfit', sans-serif;
      font-weight: 600;
      font-size: 20px;
      color: #0F4C5C;
      margin: 0;
    }

    .toc-close {
      background: none;
      border: none;
      color: #64748B;
      cursor: pointer;
      padding: 4px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .toc-close svg {
      width: 24px;
      height: 24px;
    }

    .toc-overlay-nav {
      padding: 8px 24px 24px;
    }

    .toc-overlay-nav ul {
      list-style: none;
      padding: 0;
      margin: 0;
    }

    .toc-overlay-nav li {
      border-bottom: 1px solid #E0FBFC;
    }

    .toc-overlay-nav li.depth-3 {
      padding-left: 16px;
    }

    .toc-overlay-nav a {
      font-family: 'Inter', sans-serif;
      font-weight: 500;
      font-size: 16px;
      color: #1E293B;
      text-decoration: none;
      display: block;
      padding: 12px 0;
      transition: color 0.2s;
    }

    .toc-overlay-nav a:hover,
    .toc-overlay-nav a.active {
      color: #38A3A5;
    }
  }
</style>
```

---

## 6. Comparison Table (Enhanced)

### Improvements to Existing Design

**Add to the comparison table from mockup:**

1. **Sortable columns** (optional, for advanced tables)
2. **Filter by price range** (optional)
3. **Sticky header** on scroll
4. **Mobile: Horizontal scroll** with shadow hints

### Enhanced Specifications

**Mobile Optimization:**

- Horizontal scroll (display first 3 columns)
- Shadow on right edge to indicate more content
- Swipe gesture friendly
- Minimum column width: `120px`

**Sticky Header:**

- Position: Sticky on scroll
- Background: White with slight opacity
- Shadow appears when scrolling

### Code Example (Mobile Scroll Enhancement)

```astro
<div class="table-wrapper">
  <div class="scroll-shadow scroll-shadow-right"></div>
  <table class="comparison-table">
    <!-- Table content -->
  </table>
</div>

<style>
  .table-wrapper {
    position: relative;
    overflow-x: auto;
    -webkit-overflow-scrolling: touch; /* Smooth scroll on iOS */
  }

  .scroll-shadow {
    position: absolute;
    top: 0;
    bottom: 0;
    width: 20px;
    pointer-events: none;
    z-index: 10;
    opacity: 0;
    transition: opacity 0.2s;
  }

  .scroll-shadow-right {
    right: 0;
    background: linear-gradient(to left, rgba(0,0,0,0.1), transparent);
  }

  .table-wrapper:not(:hover) .scroll-shadow-right {
    opacity: 1;
  }

  /* Sticky header */
  .comparison-table thead th {
    position: sticky;
    top: 0;
    background: white;
    z-index: 5;
  }

  .comparison-table thead th::after {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    bottom: 0;
    height: 1px;
    background: #E0FBFC;
  }
</style>
```

---

## 7. CTA Buttons (Affiliate)

### Improved Button Copy

**Instead of generic "Visit Site":**

```
Try Notion Free          (if free trial)
See Pricing →            (if paid)
Get Started →            (generic)
View Deal →              (if discount)
Try Risk-Free →          (if money-back guarantee)
Start Free Trial →       (if trial)
Check Price →            (for physical products)
```

### Button Variants

**Primary (Main CTA):**

- Background: Gradient `linear-gradient(135deg, #0F4C5C, #38A3A5)`
- Text: White
- Padding: `14px 28px`
- Border radius: `24px` (pill)
- Font: Inter Medium (500), 16px
- Shadow: `0 2px 8px rgba(15, 76, 92, 0.2)`
- Hover: Lift `translateY(-2px)`, shadow increase

**Secondary (Alternative):**

- Background: Transparent
- Border: `2px solid #38A3A5`
- Text: `#38A3A5`
- Hover: Background `#E0FBFC`

**Ghost (Text link):**

- Text: `#38A3A5`
- Underline on hover
- Arrow icon →

### Code Example

```astro
---
// src/components/AffiliateButton.astro
interface Props {
  href: string;
  text: string;
  variant?: 'primary' | 'secondary' | 'ghost';
  program?: string; // for tracking
}

const {
  href,
  text,
  variant = 'primary',
  program
} = Astro.props;
---

<a
  href={href}
  class={`cta-button cta-${variant}`}
  rel="nofollow sponsored noopener"
  target="_blank"
  data-program={program}
  onclick="trackAffiliateClick(this)"
>
  <span>{text}</span>
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
    <path fill-rule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clip-rule="evenodd" />
  </svg>
</a>

<style>
  .cta-button {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;

    font-family: 'Inter', sans-serif;
    font-weight: 500;
    font-size: 16px;
    text-decoration: none;

    padding: 14px 28px;
    border-radius: 24px;

    transition: all 0.2s;
    cursor: pointer;
  }

  .cta-button svg {
    width: 20px;
    height: 20px;
    transition: transform 0.2s;
  }

  .cta-button:hover svg {
    transform: translateX(4px);
  }

  /* Primary */
  .cta-primary {
    background: linear-gradient(135deg, #0F4C5C, #38A3A5);
    color: white;
    box-shadow: 0 2px 8px rgba(15, 76, 92, 0.2);
  }

  .cta-primary:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(15, 76, 92, 0.3);
  }

  /* Secondary */
  .cta-secondary {
    background: transparent;
    color: #38A3A5;
    border: 2px solid #38A3A5;
  }

  .cta-secondary:hover {
    background: #E0FBFC;
  }

  /* Ghost */
  .cta-ghost {
    background: none;
    padding: 0;
    color: #38A3A5;
  }

  .cta-ghost:hover {
    text-decoration: underline;
  }

  /* Mobile */
  @media (max-width: 640px) {
    .cta-button {
      width: 100%;
      padding: 16px 24px;
    }
  }
</style>
```

---

## 8. Article Metadata

### Purpose

- Show author, publish date, update date
- Build trust
- SEO (freshness signals)

### Placement

- Below H1 title, above content
- Desktop & mobile: Same

### Visual Design

```
By Sarah Chen • Published Dec 1, 2025 • Updated Dec 15, 2025
```

### Specifications

**Container:**

- Margin: `16px 0 32px`
- Font: Inter Regular (400)
- Size: `14px`
- Color: `#64748B` (Gray)

**Author:**

- Color: `#1E293B` (Slate)
- Optional: Link to author page

**Dates:**

- Color: `#64748B` (Gray)
- Format: "MMM D, YYYY"

**Separator:**

- Bullet: `•`
- Margin: `0 8px`

**Optional: Reading time**

- Icon: Clock ⏱️
- Text: "12 min read"

### Code Example

```astro
---
// src/components/ArticleMetadata.astro
interface Props {
  author: string;
  authorUrl?: string;
  pubDate: Date;
  updatedDate?: Date;
  readingTime?: number; // minutes
}

const {
  author,
  authorUrl,
  pubDate,
  updatedDate,
  readingTime
} = Astro.props;

const formatDate = (date: Date) => {
  return new Intl.DateFormat('en-US', {
    month: 'short',
    day: 'numeric',
    year: 'numeric'
  }).format(date);
};
---

<div class="article-metadata">
  <span class="metadata-item">
    By
    {authorUrl ? (
      <a href={authorUrl} class="author-link">{author}</a>
    ) : (
      <strong>{author}</strong>
    )}
  </span>

  <span class="separator">•</span>

  <time class="metadata-item" datetime={pubDate.toISOString()}>
    Published {formatDate(pubDate)}
  </time>

  {updatedDate && (
    <>
      <span class="separator">•</span>
      <time class="metadata-item" datetime={updatedDate.toISOString()}>
        Updated {formatDate(updatedDate)}
      </time>
    </>
  )}

  {readingTime && (
    <>
      <span class="separator">•</span>
      <span class="metadata-item">
        <svg class="clock-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
          <path fill-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clip-rule="evenodd" />
        </svg>
        {readingTime} min read
      </span>
    </>
  )}
</div>

<style>
  .article-metadata {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 4px;
    margin: 16px 0 32px;
    font-family: 'Inter', sans-serif;
    font-size: 14px;
    color: #64748B;
  }

  .metadata-item {
    display: inline-flex;
    align-items: center;
    gap: 4px;
  }

  .author-link,
  .metadata-item strong {
    color: #1E293B;
    text-decoration: none;
  }

  .author-link:hover {
    color: #38A3A5;
    text-decoration: underline;
  }

  .separator {
    margin: 0 8px;
    user-select: none;
  }

  .clock-icon {
    width: 16px;
    height: 16px;
    color: #64748B;
  }

  @media (max-width: 640px) {
    .article-metadata {
      font-size: 13px;
    }

    .separator {
      margin: 0 6px;
    }
  }
</style>
```

---

## Summary of Components Created

✅ **1. Affiliate Disclosure Box** - FTC compliant, prominent placement
✅ **2. Breadcrumbs** - SEO-friendly navigation with schema
✅ **3. FAQ Section** - Accordion with FAQ schema markup
✅ **4. Related Articles** - 3-column grid with hover effects
✅ **5. Mobile Table of Contents** - Floating button + overlay
✅ **6. Comparison Table Enhancements** - Mobile scroll with shadows
✅ **7. CTA Buttons** - Multiple variants with better copy
✅ **8. Article Metadata** - Author, dates, reading time

---

## Next Steps

1. **Review components** - Ensure they match FloatJet brand
2. **Create Astro components** - Implement in code
3. **Test mobile responsiveness** - All components
4. **Validate accessibility** - Lighthouse audits
5. **Add to design system** - Document in Figma/Storybook

---

**All missing components are now fully specified and ready for implementation!** 🎨✨
