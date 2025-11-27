---
task_id: "FJ-022"
title: "Implement Image Lazy Loading"
category: "Technical"
priority: "P0"
status: "not-started"
created_date: "2025-11-28"
due_date: "2025-12-20"
estimated_hours: 2
actual_hours: 0
assigned_to: "Team"
tags: ["performance", "optimization", "lighthouse", "images"]
---

# Task: Implement Image Lazy Loading

## Overview

Configure Astro's built-in Image component to implement native lazy loading across all images. This is critical for
achieving Lighthouse Performance 100/100 on mobile and reducing initial page load times.

## Goals

- [ ] Replace all `<img>` tags with Astro's `<Image>` component
- [ ] Configure automatic lazy loading for below-the-fold images
- [ ] Ensure hero/above-fold images load eagerly
- [ ] Optimize image sizing and responsive breakpoints

## Success Criteria

- ✅ All article images use `<Image>` component with lazy loading
- ✅ Hero images use `loading="eager"` for immediate display
- ✅ Lighthouse Performance score maintained at 100/100
- ✅ Images serve correct sizes for mobile/desktop viewports
- ✅ No layout shift (CLS score remains optimal)

## Dependencies

**Blocked by:**

- FJ-004: Article template (must exist to add images)
- FJ-003: Homepage template (must exist to add hero images)

**Blocks:**

- FJ-026: Optimize image formats (builds on this implementation)

**Related:**

- See: `/docs/04-tasks/00-backlog/optimization-ideas.md` (P0 item #1)

## Subtasks

### Phase 1: Configure Astro Image Integration (0.5 hours)

- [ ] 1.1 Verify `@astrojs/image` integration in `astro.config.mjs`
    - Check if already installed
    - Add if missing: `npx astro add image`

- [ ] 1.2 Configure image optimization settings
    - Set default quality (80-85)
    - Configure format conversion (WebP with fallbacks)

### Phase 2: Update Components (1 hour)

- [ ] 2.1 Update ArticleLayout.astro to use `<Image>` component
    - Import from `astro:assets`
    - Replace any existing `<img>` tags

- [ ] 2.2 Update Hero component for homepage
    - Use `loading="eager"` for above-fold images
    - Maintain aspect ratio to prevent CLS

- [ ] 2.3 Create reusable ArticleImage component if needed
    - Wrapper with consistent styling
    - Automatic lazy loading for article body images

### Phase 3: Testing & Validation (0.5 hours)

- [ ] 3.1 Test on sample article page
    - Verify lazy loading works (check Network tab)
    - Ensure images load when scrolled into view
    - Check mobile viewport behavior

- [ ] 3.2 Run Lighthouse audit
    - Verify Performance score 100/100
    - Check CLS score (should be < 0.1)
    - Validate LCP (should be < 2.5s)

- [ ] 3.3 Test on slow 3G connection
    - Use Chrome DevTools throttling
    - Verify progressive loading UX

## Resources

- [Astro Images Documentation](https://docs.astro.build/en/guides/images/)
- [Native Lazy Loading](https://web.dev/browser-level-image-lazy-loading/)
- Internal: `/docs/01-planning/prd.md` (Performance requirements)
- Internal: `/docs/CLAUDE.md` (Always use Astro Image component)

## Acceptance Checklist

Before marking this task complete:

- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] Lighthouse Performance 100/100 maintained
- [ ] No console errors or warnings
- [ ] Images load correctly on mobile and desktop
- [ ] Documentation updated in component files

## Progress Log

### 2025-11-28 - 0 hours

- ⏳ Task created from optimization backlog (P0 item #1)
- 📝 Subtasks defined
- 🎯 Target: Lighthouse Performance 100/100

## Notes

- **Above-fold images:** Use `loading="eager"` to prevent delayed hero image load
- **Below-fold images:** Default `loading="lazy"` is automatic with Astro Image
- **Aspect ratio:** Always set width/height to prevent CLS during load
- **Mobile-first:** Test lazy loading on mobile viewport (375px) first

## Blockers

_None currently_

## Related Tasks

- FJ-004: Article template must exist first
- FJ-026: Image format optimization builds on this
- FJ-024: Critical CSS verification (ensures no blocking resources)
