---
task_id: "FJ-004"
title: "Create article page template"
category: "Technical"
priority: "P0"
status: "not-started"
created_date: "2025-11-20"
due_date: "2025-11-24"
estimated_hours: 5
actual_hours: 0
assigned_to: "Team"
tags: ["template", "article", "week-1", "content"]
---

# Task: Create article page template

## Overview

Build the article page template using all 8 components from component-specifications.md. This template will be used for
all money pages and content articles. Must be mobile-first, SEO-optimized, and conversion-focused.

## Goals

- [ ] Create comprehensive article template with all components
- [ ] Implement all 8 components from specs
- [ ] Mobile-first responsive layout
- [ ] SEO-optimized with Schema markup
- [ ] High conversion potential for affiliate links

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

- FJ-001: Astro setup
- FJ-002: Base layouts

**Blocks:**

- FJ-006: First money page (needs this template)
- FJ-007: Second money page

## Subtasks

### Phase 1: Template Structure (1 hour)

- [ ] 1.1 Create `src/layouts/ArticleLayout.astro`
    - Extends BaseLayout
    - Two-column desktop layout (content + sidebar)
    - Single column mobile
    - Props for article data (title, description, date, author)

- [ ] 1.2 Set up content area
    - Max width prose container
    - Proper typography spacing
    - Tailwind @tailwindcss/typography plugin

- [ ] 1.3 Create sidebar layout (desktop)
    - Sticky positioning
    - Table of Contents
    - Ad slots (placeholder)

### Phase 2: Implement 8 Required Components (2.5 hours)

- [ ] 2.1 Breadcrumbs component
    - Reference: `/docs/03-design/component-specifications.md` (lines 155-309)
    - Schema.org BreadcrumbList markup
    - Mobile: Show first and last only
    - Desktop: Show all levels

- [ ] 2.2 Article Metadata component
    - Reference: component-specifications.md (lines 1486-1646)
    - Author name, publish date, updated date
    - Reading time calculation
    - Clock icon for reading time

- [ ] 2.3 Affiliate Disclosure Box
    - Reference: component-specifications.md (lines 23-152)
    - FTC compliant wording
    - Ocean Deep styling
    - Placed after intro, before first affiliate link

- [ ] 2.4 Table of Contents (Desktop + Mobile)
    - Reference: component-specifications.md (lines 859-1253)
    - Desktop: Sticky sidebar
    - Mobile: Floating button + overlay
    - Active heading tracking with IntersectionObserver
    - Glassmorphic styling

- [ ] 2.5 FAQ Section component
    - Reference: component-specifications.md (lines 313-535)
    - Accordion with <details>/<summary>
    - FAQ Schema markup
    - Chevron animation
    - Responsive

- [ ] 2.6 Related Articles component
    - Reference: component-specifications.md (lines 539-856)
    - 3-column grid (responsive)
    - Card with image, title, excerpt
    - Hover effects
    - Links to other articles

- [ ] 2.7 CTA Buttons (Affiliate)
    - Reference: component-specifications.md (lines 1339-1483)
    - Primary, secondary, ghost variants
    - Better copy ("Try Notion Free" not "Visit Site")
    - Gradient background
    - nofollow, sponsored, noopener tags

- [ ] 2.8 Comparison Table (if applicable)
    - Reference: component-specifications.md (lines 1256-1336)
    - Horizontal scroll on mobile
    - Sticky header
    - Shadow hints for scrolling

### Phase 3: Article Schema Markup (0.5 hours)

- [ ] 3.1 Add Article schema
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "...",
    "author": {...},
    "datePublished": "...",
    "dateModified": "...",
    "image": "..."
  }
  ```

- [ ] 3.2 Add Review schema (for product reviews)
  ```json
  {
    "@type": "Review",
    "itemReviewed": {...},
    "reviewRating": {...}
  }
  ```

- [ ] 3.3 Validate all schema
    - Google Rich Results Test
    - Fix validation errors

### Phase 4: Testing & Optimization (1 hour)

- [ ] 4.1 Test with sample article
    - Create test MDX file
    - Populate all sections
    - Verify all components render

- [ ] 4.2 Mobile responsive testing
    - 375px: TOC as floating button
    - 768px: Verify layout
    - 1024px: Sidebar appears
    - 1280px: Full desktop layout

- [ ] 4.3 Lighthouse audit
    - Performance >95
    - Accessibility >95
    - Best Practices >90
    - SEO >95

- [ ] 4.4 Reading experience check
    - Font sizes readable on mobile
    - Line height comfortable
    - Contrast ratios pass WCAG AA
    - Images don't cause layout shift

- [ ] 4.5 Conversion optimization
    - Affiliate buttons prominent
    - CTA copy compelling
    - Disclosure doesn't hurt conversions
    - Links easy to click (44x44px targets)

## Resources

- Component Specifications: `/docs/03-design/component-specifications.md` (ALL 8 components)
- Article Mockup: `/docs/03-design/mockups/article_mockup.png`
- Content Guidelines: `/docs/02-content/content-guidelines.md`
- Accessibility Guidelines: `/docs/03-design/accessibility-guidelines.md`
- [Schema.org Article](https://schema.org/Article)
- [Schema.org Review](https://schema.org/Review)

## Acceptance Checklist

- [ ] All 8 components implemented
- [ ] Breadcrumbs working
- [ ] TOC functional (desktop sidebar + mobile overlay)
- [ ] Affiliate disclosure present and prominent
- [ ] FAQ section with schema
- [ ] Related articles rendering
- [ ] CTA buttons styled correctly
- [ ] Article metadata displaying
- [ ] Schema markup validates
- [ ] Mobile experience excellent
- [ ] Lighthouse all >90
- [ ] Test article renders perfectly

## Notes

**Critical Components:**

1. Affiliate Disclosure - Legal requirement
2. TOC - UX for long articles
3. Breadcrumbs - SEO
4. FAQ - Rich snippets
5. Related Articles - Internal linking
6. CTA Buttons - Conversions
7. Metadata - Trust signals
8. Comparison Table - Decision support

**Mobile-First Priority:**

- TOC floating button critical
- CTA buttons full-width on mobile
- Tables scroll horizontally
- Related articles stack vertically
- Touch targets 44x44px minimum

**SEO Requirements:**

- Article schema for all posts
- Review schema for product reviews
- FAQ schema for FAQs
- Proper heading hierarchy (H1 → H2 → H3)
- Internal links (5-10 per article)

## Progress Log

### 2025-11-20

- ⏳ Task created
- 📝 Waiting for FJ-002 completion
- 📋 Reviewed all 8 component specs

## Blockers

- ⏳ Waiting for FJ-001 and FJ-002

## Related Tasks

- FJ-002: Base layouts (dependency)
- FJ-006: First money page (will use this template)
- FJ-007: Second money page (will use this template)
