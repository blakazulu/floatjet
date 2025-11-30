---
task_id: "FJ-024"
title: "Verify Critical CSS Inlining"
category: "Technical"
priority: "P0"
status: "not-started"
created_date: "2025-11-28"
due_date: "2025-12-20"
estimated_hours: 1
actual_hours: 0
assigned_to: "Team"
tags: ["performance", "optimization", "lighthouse", "css"]
---

# Task: Verify Critical CSS Inlining

## Overview

Verify that Astro is correctly inlining critical CSS and deferring non-critical styles. Ensure no render-blocking CSS
and optimal First Contentful Paint (FCP). Astro handles this automatically, but we need to validate the configuration.

## Goals

- [ ] Verify Astro build output includes inlined critical CSS
- [ ] Confirm no render-blocking external stylesheets
- [ ] Validate CSS delivery strategy
- [ ] Ensure optimal FCP and LCP timing

## Success Criteria

- ✅ Lighthouse shows no "Eliminate render-blocking resources" for CSS
- ✅ Critical CSS inlined in `<head>` (above-the-fold styles)
- ✅ Non-critical CSS loaded asynchronously or deferred
- ✅ FCP < 1.5s on mobile
- ✅ Performance score maintained at 100/100

## Dependencies

**Blocked by:**

- FJ-001: Astro setup (must be configured)
- FJ-002: Base layouts (must have CSS to test)

**Blocks:**

- None (verification task)

**Related:**

- See: `/docs/04-tasks/00-backlog/optimization-ideas.md` (P0 item #3)

## Subtasks

### Phase 1: Review Astro Configuration (0.25 hours)

- [ ] 1.1 Check `astro.config.mjs` for CSS settings
    - Verify build optimization enabled
    - Check if `inlineStylesheets` is configured
    - Note default Astro CSS handling

- [ ] 1.2 Review Tailwind configuration
    - Check `tailwind.config.mjs`
    - Verify purge/content paths are correct
    - Ensure production builds remove unused CSS

### Phase 2: Test Build Output (0.5 hours)

- [ ] 2.1 Run production build (ask user to run: `npm run build`)
    - Note: Cannot run build per user constraints
    - User will provide build output

- [ ] 2.2 Inspect generated HTML in `dist/`
    - Check `<head>` for inlined `<style>` tags
    - Verify critical CSS is present
    - Confirm external stylesheets have proper loading strategy

- [ ] 2.3 Analyze CSS file sizes
    - Check `dist/_astro/` folder for CSS files
    - Verify reasonable file sizes (< 50KB per file)
    - Check for unused CSS (should be purged)

### Phase 3: Lighthouse Validation (0.25 hours)

- [ ] 3.1 Run Lighthouse audit on built site
    - Check Performance score
    - Look for CSS-related warnings
    - Verify FCP timing

- [ ] 3.2 Validate with PageSpeed Insights
    - Test on actual URL (once deployed)
    - Check mobile and desktop scores
    - Confirm no render-blocking CSS

## Resources

- [Astro CSS & Styling](https://docs.astro.build/en/guides/styling/)
- [Critical CSS](https://web.dev/extract-critical-css/)
- [Eliminate Render-Blocking Resources](https://web.dev/render-blocking-resources/)
- Internal: `/docs/01-planning/prd.md` (Performance requirements)

## Acceptance Checklist

Before marking this task complete:

- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] Lighthouse audit passes with 100/100
- [ ] No render-blocking CSS detected
- [ ] Build output reviewed and optimized
- [ ] Documentation notes added if config changes made

## Progress Log

### 2025-11-28 - 0 hours

- ⏳ Task created from optimization backlog (P0 item #3)
- 📝 Subtasks defined
- 🎯 Target: Verify Astro handles critical CSS correctly

## Notes

- **Astro's default behavior:** Automatically inlines small CSS and creates hashed external files for larger styles
- **Critical CSS:** Above-the-fold styles inlined in `<head>`
- **Non-critical CSS:** Loaded via `<link rel="stylesheet">` with cache-busting hashes
- **Tailwind purge:** Production builds automatically remove unused utility classes

**Expected outcome:**

```html
<head>
  <!-- Inlined critical CSS -->
  <style>/* Critical above-fold styles */</style>

  <!-- Non-critical CSS with cache-busting -->
  <link rel="stylesheet" href="/_astro/main.abc123.css">
</head>
```

## Blockers

- ⚠️ Cannot run `npm run build` per user constraints
- Status: User will run builds and provide output
- Workaround: User provides build output for inspection

## Related Tasks

- FJ-001: Astro setup (must be complete)
- FJ-002: Base layouts (need CSS to verify)
- FJ-022: Image lazy loading (complementary performance task)
- FJ-023: Font optimization (complementary performance task)
