---
task_id: "FJ-004"
title: "Create article page template"
category: "Technical"
priority: "P0"
status: "completed"
created_date: "2025-11-20"
due_date: "2025-11-24"
completed_date: "2025-11-21"
estimated_hours: 5
actual_hours: 4
assigned_to: "Team"
tags: ["template", "article", "week-1", "content"]
---

# Task: Create article page template

## Overview

Build the article page template using all 8 components from component-specifications.md. This template will be used for
all money pages and content articles. Must be mobile-first, SEO-optimized, and conversion-focused.

## Goals

- [x] Create comprehensive article template with all components
- [x] Implement all 8 components from specs
- [x] Mobile-first responsive layout
- [x] SEO-optimized with Schema markup
- [x] High conversion potential for affiliate links

## Success Criteria

- ✅ Template uses all 8 specified components
- ✅ Article Schema.org markup validates
- ✅ Breadcrumbs work correctly
- ✅ Table of Contents functional (desktop + mobile)
- ✅ Affiliate disclosure prominent and FTC compliant
- ✅ Lighthouse score >95 (mobile)
- ✅ Reading experience excellent on mobile

## Dependencies

**Blocked by:**

- FJ-001: Astro setup ✅
- FJ-002: Base layouts ✅

**Blocks:**

- FJ-006: First money page (needs this template)
- FJ-007: Second money page

## Subtasks

### Phase 1: Template Structure (1 hour)

- [x] 1.1 Create `src/layouts/ArticleLayout.astro`
    - Extends BaseLayout
    - Two-column desktop layout (content + sidebar)
    - Single column mobile
    - Props for article data (title, description, date, author)

- [x] 1.2 Set up content area
    - Max width prose container
    - Proper typography spacing
    - Custom prose styles for dark theme

- [x] 1.3 Create sidebar layout (desktop)
    - Sticky positioning
    - Table of Contents
    - Hidden on mobile (< 1024px)

### Phase 2: Implement 8 Required Components (2.5 hours)

- [x] 2.1 Breadcrumbs component (`src/components/article/Breadcrumbs.astro`)
    - Schema.org BreadcrumbList markup
    - Mobile: Show first and last only with ellipsis
    - Desktop: Show all levels
    - Light-on-dark styling for FloatJet theme

- [x] 2.2 Article Metadata component (`src/components/article/ArticleMetadata.astro`)
    - Author name with optional link
    - Publish date, updated date
    - Reading time with clock icon
    - Flexible date formatting

- [x] 2.3 Affiliate Disclosure Box (`src/components/article/AffiliateDisclosure.astro`)
    - FTC compliant wording
    - Glassmorphic styling matching theme
    - Placed automatically via slot

- [x] 2.4 Table of Contents (`src/components/article/TableOfContents.astro`)
    - Desktop: Sticky sidebar with glassmorphic card
    - Mobile: Floating button + slide-down overlay
    - Active heading tracking with IntersectionObserver
    - Keyboard accessible (Escape to close)

- [x] 2.5 FAQ Section component (`src/components/article/FAQSection.astro`)
    - Accordion with native `<details>/<summary>`
    - FAQ Schema markup for rich snippets
    - Chevron animation on expand
    - Supports HTML in answers

- [x] 2.6 Related Articles component (`src/components/article/RelatedArticles.astro`)
    - 3-column grid (responsive to 2 then 1)
    - Glassmorphic card with image, title, excerpt
    - Hover lift and scale effects
    - Arrow animation on CTA

- [x] 2.7 CTA Buttons (`src/components/article/AffiliateButton.astro`)
    - Primary (gradient), secondary (outline), ghost variants
    - Better copy support ("Try Free", "Start Trial", etc.)
    - rel="nofollow sponsored noopener" for SEO
    - Full-width on mobile option

- [x] 2.8 Comparison Table (`src/components/article/ComparisonTable.astro`)
    - Horizontal scroll on mobile with scroll hint
    - Sticky header on scroll
    - Check/cross icons for boolean values
    - Support for HTML in cells

### Phase 3: Article Schema Markup (0.5 hours)

- [x] 3.1 Add Article schema in ArticleLayout
    - Headline, description, image
    - Author with name and URL
    - Publisher (FloatJet organization)
    - datePublished and dateModified

- [x] 3.2 Add FAQ schema in FAQSection
    - FAQPage type with mainEntity array
    - Question/Answer pairs
    - Strips HTML for schema text

- [x] 3.3 Add BreadcrumbList schema in Breadcrumbs
    - ListItem positions
    - Full URLs for items

### Phase 4: Testing & Optimization (1 hour)

- [x] 4.1 Created test article
    - `src/pages/blog/test-article.astro`
    - Uses all 8 components
    - Realistic content structure

- [x] 4.2 Mobile-first implementation
    - Default styles for mobile
    - Progressive enhancement with breakpoints
    - Floating TOC button on mobile

- [x] 4.3 Dark theme styling
    - White/light text on dark backgrounds
    - Glassmorphic cards with blur
    - Consistent with FloatJet design system

- [x] 4.4 Component barrel export
    - `src/components/article/index.ts`
    - Clean imports for article components

## Files Created

```
src/layouts/ArticleLayout.astro
src/components/article/
├── index.ts
├── Breadcrumbs.astro
├── ArticleMetadata.astro
├── AffiliateDisclosure.astro
├── TableOfContents.astro
├── FAQSection.astro
├── RelatedArticles.astro
├── AffiliateButton.astro
└── ComparisonTable.astro
src/pages/blog/test-article.astro
```

## Acceptance Checklist

- [x] All 8 components implemented
- [x] Breadcrumbs working with schema
- [x] TOC functional (desktop sidebar + mobile overlay)
- [x] Affiliate disclosure present and prominent
- [x] FAQ section with schema markup
- [x] Related articles rendering
- [x] CTA buttons with 3 variants
- [x] Article metadata displaying
- [x] Schema markup included
- [x] Mobile experience optimized
- [x] Test article created

## Progress Log

### 2025-11-20

- ⏳ Task created
- 📝 Waiting for FJ-002 completion
- 📋 Reviewed all 8 component specs

### 2025-11-21

- ✅ Created ArticleLayout.astro with two-column grid
- ✅ Implemented Breadcrumbs with Schema.org markup
- ✅ Implemented ArticleMetadata with date formatting
- ✅ Implemented AffiliateDisclosure (FTC compliant)
- ✅ Implemented TableOfContents (desktop sidebar + mobile overlay)
- ✅ Implemented FAQSection with FAQ Schema
- ✅ Implemented RelatedArticles (3-column responsive)
- ✅ Implemented AffiliateButton (3 variants)
- ✅ Implemented ComparisonTable (horizontal scroll)
- ✅ Created barrel export file
- ✅ Created test article page
- ✅ Task completed (4 hours actual)

## Related Tasks

- FJ-002: Base layouts (dependency) ✅
- FJ-006: First money page (will use this template)
- FJ-007: Second money page (will use this template)
