---
task_id: "FJ-030"
title: "Desk Party redesign (site-wide)"
category: "Design"
priority: "P1"
status: "review"
created_date: "2026-09-21"
due_date: "2026-09-28"
estimated_hours: 16
actual_hours: 0
assigned_to: "Team"
tags: ["design", "redesign", "ui", "accessibility"]
---

# Task: Desk Party Redesign (Site-Wide)

## Overview

Replace the dark glassmorphism theme with the "Desk Party" direction chosen from the design exploration canvas
(F "The Desk" + E "Loud and Clear" personality, warm paper background). The homepage becomes a desk you can explore,
and every page, component and doc moves to the new light theme.

Design exploration: claude.ai artifact "FloatJet Design Directions" (page "Chosen - Desk Party").

## Goals

- [x] New design tokens, fonts and shared classes
- [x] New homepage with the interactive desk hero
- [x] Shared hub/category listing that shows every article
- [x] Article layout and all article components restyled
- [x] Every content page converted from the dark theme
- [x] Docs updated so future pages follow the new system
- [x] Visual QA on real pages (desktop 1440px + 375px mobile)

## Success Criteria

- Warm paper background on every page, no leftover white-on-dark text outside the sitemap graph panel
- Text contrast pairs meet WCAG 2.2 AA (verified: ink 12.6:1, ink-soft 5.8:1, teal-ink 6.1:1 on paper)
- Interactive elements at least 48px tall
- No new runtime JavaScript on the homepage (desk is HTML/CSS/SVG)

## Subtasks

### Phase 1: Foundations

- [x] 1.1 Tokens in `src/styles/global.css` (paper, card, ink, ink-soft, teal-ink, sun, coral + brand teals)
- [x] 1.2 Shared classes: `sticker`, `sticker-hover`, `btn-pill` (`btn-ink`, `btn-sun`, `btn-outline`), `tag-pill`,
  `hand`, `mat-grid`, `legal-page`
- [x] 1.3 Fonts: Unbounded, Figtree, Caveat (Latin subsets via @fontsource); removed Outfit and Inter packages
- [x] 1.4 BaseLayout: removed photo background + dark overlay + grain, added skip link and `#main-content`

### Phase 2: Shell

- [x] 2.1 Header: wordmark, ink pill nav with sun active state, Search + Deals
- [x] 2.2 Footer: ink panel, affiliate disclosure as a sun sticky note, "Suggest a tool" CTA
- [x] 2.3 Mobile menu: sticker links with handwritten notes; fixed duplicate click listeners on the persisted header
- [x] 2.4 Search modal (Pagefind theme), loading overlay, image loader, OG image renderer

### Phase 3: Pages

- [x] 3.1 Homepage: `DeskScene` (laptop, notebook, sticky note, headphones, keyboard, coupon, postcard), tool strip,
  start here, editor's picks polaroids, section drawers, latest reviews, final CTA
- [x] 3.2 `HubPage` + `src/data/sections.ts` powering `/tools/`, `/gear/`, `/guides/`, `/blog/` and all category pages
  (now lists every article instead of a random subset)
- [x] 3.3 About, Contact, Deals, Privacy, Terms, Team, Author pages, Sitemap page

### Phase 4: Articles

- [x] 4.1 `ArticleLayout`: category sticker, big display title, sticker hero image, new typography (sun tape bar on H2)
- [x] 4.2 Breadcrumbs, metadata, TOC (sticky note + mobile bottom sheet), FAQ, comparison table, affiliate button
  (+ `subtext` support), disclosure, related articles, social share
- [x] 4.3 Class codemod across 70+ article/content pages (dark utilities to light tokens, 3,000+ tokens)
- [x] 4.4 Fixed empty TOC on 4 gear articles (headings without `depth`)

### Phase 5: Docs

- [x] 5.1 `docs/design/design-guidelines.md` rewritten
- [x] 5.2 `docs/design/article-card-guide.md` rewritten for `ArticleCard`
- [x] 5.3 `docs/design/new-page-creation.md`, `docs/new-article-guide.md`, `CLAUDE.md`, `README.md` updated

### Phase 6: QA

- [x] 6.1 Visual pass of home, hub, category, 2 article types, about, deals, team, author, privacy, sitemap
- [x] 6.2 Mobile (375px): desk layout, menu (incl. after navigation), share bar, contents button, category page
- [ ] 6.3 Lighthouse run on the Netlify deploy preview

## Progress Log

### 2026-09-21

- Explored 7 directions on the design canvas, owner chose "Desk Party" on warm paper
- Implemented phases 1-5 (see subtasks)
- `astro check`: no new errors introduced; remaining errors pre-date this task (mostly `getArticleBySlug` called with 2
  arguments in article pages)
- Visual QA on the owner-run dev server; fixed during QA:
  - Horizontal page overflow from the rotated tool strip (strip now contained, `html` clips overflow-x)
  - Sticky table of contents broken by `overflow-x-hidden` on body (removed)
  - TOC active-section tracking now follows the elements TOC links point to (sections or headings); anchor targets
    get a header offset
  - Duplicate FAQ heading on 60 articles (component heading hidden visually when the article provides its own H2)
  - Table CTA links no longer inherit the article link underline
  - "Saas" label casing, mobile hub count sticker and filter-row scrollbar, 48px author/team social links
