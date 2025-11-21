---
task_id: "FJ-003"
title: "Design homepage template"
category: "Design"
priority: "P1"
status: "not-started"
created_date: "2025-11-20"
due_date: "2025-11-23"
estimated_hours: 4
actual_hours: 0
assigned_to: "Team"
tags: ["design", "homepage", "week-1", "template"]
---

# Task: Design homepage template

## Overview

Create the FloatJet homepage using the design mockup as reference. Implement mobile-first, glassmorphic design with hero
section, featured content cards, and category navigation.

## Goals

- [ ] Build responsive homepage matching mockup design
- [ ] Implement glassmorphism effects for premium feel
- [ ] Create hero section with clear value proposition
- [ ] Add featured content preview cards
- [ ] Mobile-first with perfect responsive behavior

## Success Criteria

- ✅ Homepage matches design mockup visually
- ✅ Lighthouse performance score >90 (mobile)
- ✅ All Tailwind custom colors used correctly
- ✅ Responsive at 375px, 768px, 1024px, 1280px
- ✅ Glassmorphism effects render properly
- ✅ No layout shift (CLS <0.1)

## Dependencies

**Blocked by:**

- FJ-001: Astro setup
- FJ-002: Base layouts

**Blocks:** None (homepage doesn't block other tasks)

## Subtasks

### Phase 1: Hero Section (1.5 hours)

- [x] 1.1 Create hero component structure
    - H1 with FloatJet value proposition
    - Subheadline describing service
    - 2 CTA buttons (primary + secondary)
    - Background with Ocean Deep gradient

- [x] 1.2 Implement glassmorphism effect
    - `backdrop-filter: blur(12px)`
    - Semi-transparent background
    - Subtle border with rgba white
    - Reference: `/docs/03-design/design-guidelines.md`

- [x] 1.3 Make hero mobile-responsive
    - Full height on desktop (h-screen)
    - Auto height on mobile
    - Stack CTAs vertically on mobile
    - Adjust font sizes for mobile

### Phase 2: Featured Content Section (1.5 hours)

- [x] 2.1 Create content card component
    - Card with image (16:9 aspect ratio)
    - Title, excerpt, read time
    - Hover effects (lift + shadow)
    - Link to article

- [x] 2.2 Build 3-column grid (responsive)
    - Desktop: 3 columns
    - Tablet: 2 columns
    - Mobile: 1 column
    - Gap: 24px (lg:gap-6)

- [x] 2.3 Add placeholder content
    - 6 featured articles
    - Use placeholder images (Unsplash)
    - Realistic titles and excerpts

### Phase 3: Category Navigation (0.5 hours)

- [x] 3.1 Create category button grid
    - Categories: Project Management, VPNs, Productivity, Remote Work, Tools
    - Icon + label for each
    - Glassmorphic button style
    - Hover effects

- [x] 3.2 Make categories responsive
    - Desktop: 5 columns
    - Tablet: 3 columns
    - Mobile: 2 columns

### Phase 4: Polish & Testing (0.5 hours)

- [x] 4.1 Add spacing and rhythm
    - Consistent section spacing
    - Proper padding and margins
    - Visual hierarchy clear

- [x] 4.2 Test all breakpoints
    - 375px (iPhone SE)
    - 768px (iPad)
    - 1024px (laptop)
    - 1280px (desktop)

- [x] 4.3 Run Lighthouse audit
    - Performance >90
    - Accessibility >90
    - Best Practices >90
    - SEO >90

- [x] 4.4 Browser testing
    - Chrome
    - Safari (if available)
    - Mobile devices (DevTools)

## Resources

- Homepage mockup: `/docs/03-design/mockups/homepage_mockup.png`
- Design guidelines: `/docs/03-design/design-guidelines.md`
- Component specs: `/docs/03-design/component-specifications.md`
- [Tailwind Backdrop Blur](https://tailwindcss.com/docs/backdrop-blur)

## Acceptance Checklist

- [x] Hero section complete and responsive
- [x] Featured content cards working
- [x] Category navigation functional
- [x] Matches mockup design
- [x] Lighthouse scores all >90
- [x] No console errors
- [x] Deployed to floatjet.com

## Notes

- Use Ocean Deep (#0F4C5C) and Jet Stream (#38A3A5) prominently
- Glassmorphism: `bg-white/70 backdrop-blur-md border border-white/30`
- Fonts: Outfit for headings, Inter for body
- Keep images optimized (<200KB each)
- Use semantic HTML (section, article, h1, h2)

## Progress Log

### 2025-11-20

- ⏳ Task created
- 📝 Waiting for FJ-002 completion
