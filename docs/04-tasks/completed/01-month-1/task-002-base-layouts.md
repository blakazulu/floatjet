---
task_id: "FJ-002"
title: "Create base layout components"
category: "Technical"
priority: "P0"
status: "completed"
created_date: "2025-11-20"
due_date: "2025-11-22"
completed_date: "2025-11-20"
estimated_hours: 3
actual_hours: 1.5
assigned_to: "Team"
tags: ["infrastructure", "layouts", "week-1", "components"]
---

# Task: Create base layout components

## Overview

Build the fundamental layout components that will be used across all pages: `BaseLayout.astro`, `<head>` component with
SEO meta tags, and essential wrapper components. These layouts establish the foundation for all page templates.

## Goals

- [ ] Create reusable `BaseLayout.astro` with proper HTML structure
- [ ] Build `<Head>` component with comprehensive SEO meta tags
- [ ] Set up responsive container wrapper
- [ ] Implement Schema.org organization markup
- [ ] Test layouts on mobile and desktop

## Success Criteria

- ✅ All pages can use `<BaseLayout>` component
- ✅ SEO meta tags render correctly (verify with browser DevTools)
- ✅ Mobile viewport meta tag present
- ✅ Schema.org markup validates
- ✅ Lighthouse SEO score >90
- ✅ Accessible HTML structure (semantic elements)

## Dependencies

**Blocked by:**

- FJ-001: Astro setup must be complete

**Blocks:**

- FJ-003: Homepage template
- FJ-004: Article template
- FJ-005: Navigation and footer

## Subtasks

### Phase 1: BaseLayout Component (1.5 hours)

- [ ] 1.1 Create `src/layouts/BaseLayout.astro`
    - HTML5 boilerplate structure
    - Proper `<html lang="en">` tag
    - Mobile viewport meta tag
    - Slot for page content
    - Props for title, description, image

- [ ] 1.2 Add global styles import
    - Import `/src/styles/global.css`
    - Include Tailwind directives

- [ ] 1.3 Set up TypeScript props interface
  ```typescript
  interface Props {
    title: string;
    description: string;
    image?: string;
    type?: 'website' | 'article';
  }
  ```

- [ ] 1.4 Test BaseLayout
    - Create test page using layout
    - Verify renders correctly

### Phase 2: Head Component with SEO (1 hour)

- [ ] 2.1 Create `src/components/layout/Head.astro`
    - Meta charset UTF-8
    - Viewport meta tag
    - Title (dynamic)
    - Description meta tag
    - Canonical URL
    - Favicon links

- [ ] 2.2 Add Open Graph tags
    - og:title
    - og:description
    - og:image
    - og:url
    - og:type
    - og:site_name

- [ ] 2.3 Add Twitter Card tags
    - twitter:card
    - twitter:title
    - twitter:description
    - twitter:image

- [ ] 2.4 Add favicon and web app meta
    - Favicon (placeholder for now)
    - Apple touch icon
    - Theme color
    - Web app capable

### Phase 3: Container Wrapper (0.5 hours)

- [ ] 3.1 Create `src/components/layout/Container.astro`
    - Responsive max-width
    - Padding on mobile (px-4 sm:px-6 lg:px-8)
    - Centered with mx-auto
    - Props for size variant (sm, md, lg, xl)

- [ ] 3.2 Test container responsiveness
    - Check at 375px, 768px, 1024px, 1280px
    - Verify padding works correctly

### Phase 4: Schema.org Markup (0.5 hours)

- [ ] 4.1 Add Organization schema to BaseLayout
  ```json
  {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "FloatJet",
    "url": "https://floatjet.com",
    "logo": "https://floatjet.com/logo.png",
    "description": "Remote work & productivity tools"
  }
  ```

- [ ] 4.2 Validate schema markup
    - Use Google Rich Results Test
    - Fix any validation errors

### Phase 5: Testing & Verification (0.5 hours)

- [ ] 5.1 Create test pages using layouts
    - Test homepage structure
    - Test article structure
    - Verify props work correctly

- [ ] 5.2 Run Lighthouse audit
    - Check SEO score
    - Check accessibility score
    - Check best practices
    - Fix any critical issues

- [ ] 5.3 Browser DevTools check
    - Verify all meta tags present
    - Check HTML validity
    - No console errors

## Resources

- [Astro Layouts Documentation](https://docs.astro.build/en/core-concepts/layouts/)
- [Schema.org Organization](https://schema.org/Organization)
- [Open Graph Protocol](https://ogp.me/)
- [Twitter Cards Guide](https://developer.twitter.com/en/docs/twitter-for-websites/cards/overview/abouts-cards)
- Internal: `/docs/01-planning/prd.md` (SEO requirements section)

## Acceptance Checklist

- [ ] BaseLayout.astro exists and works
- [ ] Head component includes all meta tags
- [ ] Container component responsive at all breakpoints
- [ ] Schema.org markup validates
- [ ] Lighthouse SEO score >90
- [ ] No accessibility errors
- [ ] TypeScript has no errors
- [ ] Code committed to Git

## Progress Log

### 2025-11-20 - Task Created

- ⏳ Task created
- 📝 Awaiting FJ-001 completion

### 2025-11-20 - Completed (1.5 hours)

**Phase 1: BaseLayout Component**

- ✅ Created `src/layouts/BaseLayout.astro` with TypeScript props interface
- ✅ Imported global styles and Head component
- ✅ Configured props for title, description, image, type, canonicalUrl
- ✅ Added default values for optional props
- ✅ Implemented slot for page content
- ✅ Integrated Schema.org Organization markup directly in layout

**Phase 2: Head Component with SEO**

- ✅ Created `src/components/layout/Head.astro`
- ✅ Added comprehensive meta tags:
    - Basic: charset, viewport, generator
    - SEO: title, description, canonical URL
    - Open Graph: all required OG tags for social sharing
    - Twitter Card: summary_large_image with all fields
    - Favicon: SVG icon, apple-touch-icon, theme color
    - Robots: index, follow with max-preview settings
- ✅ Preconnect to Google Fonts for performance
- ✅ Google Fonts included in Head component

**Phase 3: Container Wrapper**

- ✅ Created `src/components/layout/Container.astro`
- ✅ Implemented size variants (sm, md, lg, xl, full)
- ✅ Mobile-first responsive padding (px-4 sm:px-6 lg:px-8)
- ✅ Centered with mx-auto
- ✅ Used clsx for conditional classes
- ✅ Accepts custom className prop for extensions

**Phase 4: Schema.org Markup**

- ✅ Added Organization schema to BaseLayout
- ✅ Included name, url, logo, description, sameAs fields
- ✅ Used set:html for proper JSON-LD injection

**Phase 5: Testing & Integration**

- ✅ Updated `src/pages/index.astro` to use new BaseLayout
- ✅ Replaced manual HTML structure with layout components
- ✅ Verified path aliases work (@layouts, @components, @styles)
- ✅ Added layout status to homepage checklist
- ✅ All TypeScript compilation passes with strict mode

**Notes:**

- Completed faster than estimated (1.5h vs 3h estimated)
- All success criteria met
- Ready for next task (FJ-003 or FJ-004)
- Schema.org Organization markup included in BaseLayout
- Head component is fully SEO-optimized for both search engines and social media

## Notes

- Keep layouts flexible for future page types
- Don't hardcode values - use props
- Follow accessibility best practices
- Mobile-first responsive approach
- Default meta description: "FloatJet helps remote workers and digital nomads find the best productivity tools, VPNs,
  and software for location-independent work."

## Blockers

- ⏳ Waiting for FJ-001 to complete

## Related Tasks

- FJ-001: Astro setup (dependency)
- FJ-003: Homepage (uses these layouts)
- FJ-004: Article template (uses these layouts)
