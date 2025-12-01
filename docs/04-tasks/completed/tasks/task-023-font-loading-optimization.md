---
task_id: "FJ-023"
title: "Optimize Font Loading Strategy"
category: "Technical"
priority: "P0"
status: "not-started"
created_date: "2025-11-28"
due_date: "2025-12-20"
estimated_hours: 1.5
actual_hours: 0
assigned_to: "Team"
tags: ["performance", "optimization", "lighthouse", "fonts", "typography"]
---

# Task: Optimize Font Loading Strategy

## Overview

Implement `font-display: swap` and optimize Google Fonts loading to eliminate render-blocking resources and achieve
Lighthouse Performance 100/100. Prevent invisible text flash (FOIT) and reduce First Contentful Paint (FCP).

## Goals

- [ ] Add `font-display: swap` to all font declarations
- [ ] Optimize Google Fonts loading with preconnect hints
- [ ] Eliminate render-blocking font resources
- [ ] Ensure text remains visible during font load

## Success Criteria

- ✅ Lighthouse shows no "Ensure text remains visible during webfont load" warning
- ✅ FCP improved (target: < 1.5s on mobile)
- ✅ No FOIT (Flash of Invisible Text)
- ✅ All three fonts load efficiently: Outfit, Inter, JetBrains Mono
- ✅ Performance score maintained at 100/100

## Dependencies

**Blocked by:**

- FJ-002: Base layouts (must exist to add font declarations)

**Blocks:**

- None (independent optimization)

**Related:**

- See: `/docs/04-tasks/00-backlog/optimization-ideas.md` (P0 item #2)
- See: `/docs/03-design/design-guidelines.md` (Typography section)

## Subtasks

### Phase 1: Configure Tailwind Font Display (0.5 hours)

- [ ] 1.1 Update `tailwind.config.mjs` with font-display
    - Add `fontDisplay: 'swap'` to font configurations
    - Verify applies to Outfit, Inter, JetBrains Mono

- [ ] 1.2 Review current Google Fonts implementation
    - Check how fonts are loaded in BaseLayout
    - Note current loading method

### Phase 2: Add Resource Hints (0.5 hours)

- [ ] 2.1 Add preconnect to Google Fonts in BaseLayout `<head>`
    - `<link rel="preconnect" href="https://fonts.googleapis.com">`
    - `<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>`

- [ ] 2.2 Optimize Google Fonts URL parameters
    - Add `&display=swap` to font URL
    - Minimize font weights loaded (only what's needed)
    - Example: `family=Outfit:wght@400;600;700&display=swap`

### Phase 3: Testing & Validation (0.5 hours)

- [ ] 3.1 Test font loading behavior
    - Use Chrome DevTools Network throttling (Slow 3G)
    - Verify text visible immediately (system font fallback)
    - Confirm swap to custom fonts when loaded

- [ ] 3.2 Run Lighthouse audit
    - Check Performance score (target: 100/100)
    - Verify FCP < 1.5s
    - Ensure no font-related warnings

- [ ] 3.3 Validate on mobile viewport
    - Test on 375px width (iPhone SE)
    - Check typography rendering
    - Confirm no layout shift during font swap

## Resources

- [Font Display Strategy](https://web.dev/font-display/)
- [Optimize Google Fonts](https://csswizardry.com/2020/05/the-fastest-google-fonts/)
- [Tailwind Font Display](https://tailwindcss.com/docs/font-family#font-display)
- Internal: `/docs/03-design/design-guidelines.md` (Typography: Outfit, Inter, JetBrains Mono)

## Acceptance Checklist

Before marking this task complete:

- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] Lighthouse audit shows no font warnings
- [ ] FCP < 1.5s on mobile
- [ ] Text visible immediately on slow connections
- [ ] No layout shift during font swap

## Progress Log

### 2025-11-28 - 0 hours

- ⏳ Task created from optimization backlog (P0 item #2)
- 📝 Subtasks defined
- 🎯 Target: Eliminate render-blocking fonts

## Notes

- **font-display: swap** shows fallback font immediately, then swaps to custom font
- **Preconnect** establishes early connection to Google Fonts CDN
- **Font weights:** Only load 400 (regular), 600 (semibold), 700 (bold) - don't load full range
- **CLS prevention:** Ensure fallback fonts have similar metrics to custom fonts

**Current fonts:**

- Headings: Outfit (Google Fonts)
- Body: Inter (Google Fonts)
- Code: JetBrains Mono (Google Fonts)

## Blockers

_None currently_

## Related Tasks

- FJ-002: Base layouts must exist
- FJ-025: Resource hints task (complementary)
- FJ-024: Critical CSS verification
