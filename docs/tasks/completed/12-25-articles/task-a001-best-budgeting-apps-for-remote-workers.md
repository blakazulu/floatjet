---
task_id: "FJ-A001"
title: "Write Article: Best Budgeting Apps for Remote Workers"
category: "Content"
priority: "P2"
status: "completed"
created_date: "2025-12-07"
completed_date: "2025-12-07"
due_date: ""
estimated_hours: 6
actual_hours: 4
assigned_to: "daniel-brooks"
tags: ["tools", "finance", "money-page"]
---

# Task: Write Article - Best Budgeting Apps for Remote Workers

## Overview

Write a money page article about YNAB, Mint, Rocket Money comparison for the Tools section (finance subcategory).

**Article Type:** Money Page
**Section:** Tools
**Category:** Finance
**Assigned Writer:** daniel-brooks
**Target Slug:** `best-budgeting-apps-for-remote-workers`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [x] Write compelling money page that ranks for "best budgeting apps for remote workers" keywords
- [x] Follow daniel-brooks's writing style and voice
- [x] Pass AI detection (<4% AI-generated)
- [x] Include affiliate links where relevant

## Success Criteria

- ✅ Article passes AI detection (<4%) - **3.9% achieved**
- ✅ SEO/AEO/GEO requirements met
- ✅ Unique hero image downloaded and optimized
- ✅ Article added to `src/data/articles.ts`
- ✅ Build passes without errors

## Subtasks

### Phase 1: Research & Planning (1 hour)

- [x] 1.1 Review writer style guide for daniel-brooks
    - Read `docs/writing/writers-summery.md`
    - Note signature phrases and tone

- [x] 1.2 Research competing articles
    - Search for similar content
    - Identify gaps to fill

- [x] 1.3 Outline article structure
    - Hook, body sections, conclusion
    - Plan comparison tables and FAQs

### Phase 2: Writing (2-3 hours)

- [x] 2.1 Write first draft
    - Use first person ("I")
    - Include specific numbers and examples
    - Add personal anecdotes

- [x] 2.2 Run AI detection
    - `node scripts/zerogpt-detect.js --file draft.txt`
    - Target: <4% AI-generated
    - **Result: 3.9% - PASSED**

- [x] 2.3 Revise until passing
    - Remove flagged patterns
    - Add more human touches
    - Update `docs/writing/writing-style-guide.md` with findings

### Phase 3: Media & SEO (1 hour)

- [x] 3.1 Find unique hero image
    - Search Unsplash for relevant image
    - Verify not used in `src/data/articles.ts`
    - **Used: photo-1633158829875-e5316a358c6f**

- [x] 3.2 Download and optimize image
    - Downloaded via curl (script had issues with short IDs)
    - Run `node scripts/optimize-images.cjs`
    - Added documentation to download script about ID formats

- [x] 3.3 Complete SEO checklist
    - Title with primary keyword
    - Meta description (150-160 chars)
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [x] 4.1 Create article page
    - Copy similar article as template
    - `src/pages/tools/best-budgeting-apps-for-remote-workers.astro`

- [x] 4.2 Add article metadata
    - Update `src/data/articles.ts`
    - Verify category matches section

- [x] 4.3 Final verification
    - Run `npm run docs:articles`
    - Run build to verify no errors
    - Preview article locally

## Resources

- [New Article Guide](docs/new-article-guide.md) - Complete workflow
- [Writers Summary](docs/writing/writers-summery.md) - Writer styles
- [Writing Style Guide](docs/writing/writing-style-guide.md) - Patterns to use/avoid
- [AI Detection Script](scripts/zerogpt-detect.js) - Check AI percentage

## Acceptance Checklist

Before marking this task complete:

- [x] Article passes AI detection (<4%) - **3.9%**
- [x] Writer style matches daniel-brooks
- [x] Hero image is unique and optimized
- [x] Article added to articles.ts
- [x] Article summary regenerated
- [x] Build passes
- [x] Preview looks correct
- [x] `docs/writing/writing-style-guide.md` updated with new patterns


## Affiliate Opportunities

**Status:** ✅ Has affiliate programs

| Program | Status | Network | Commission |
|---------|--------|---------|------------|
| YNAB | Not Applied | Direct | $8/signup |
| Mint | Discontinued | N/A | - |
| Rocket Money | Not Applied | Direct | Unknown |

**Notes:** YNAB has affiliate program ($8/signup). Mint discontinued in early 2024. Research Rocket Money partnership when applying.

**Reference:** `docs/affiliates/affiliate-programs.md` - Already updated with these programs.

---

## Progress Log

### 2025-12-07

- ⏳ Task created from backlog
- 📝 Added to articles task queue
- ✅ Researched Daniel Brooks' writing style
- ✅ Wrote article in Daniel Brooks' voice (Chiang Mai hostel opener, nomad perspective)
- ✅ AI detection: 3.9% (under 4% threshold)
- ✅ Downloaded hero image via curl (photo-1633158829875-e5316a358c6f)
- ✅ Optimized images to WebP
- ✅ Created article page at `src/pages/tools/best-budgeting-apps-for-remote-workers.astro`
- ✅ Added to `src/data/articles.ts` (104 total articles)
- ✅ Regenerated article summary
- ✅ Build passed successfully
- ✅ Added documentation to download-unsplash-images.cjs about Unsplash ID formats
- ✅ **TASK COMPLETED**

## Notes

- **Description:** YNAB, Mint (RIP), Rocket Money, Credit Karma comparison
- Article covers multi-currency handling for nomads
- Includes personal setup section (YNAB + Wise workflow)
- Hero image: Person budgeting with smartphone
- Mint discontinued note included since many readers may still search for it

## Files Created/Modified

- `src/pages/tools/best-budgeting-apps-for-remote-workers.astro` (NEW)
- `src/data/articles.ts` (added article entry)
- `public/images/unsplash/photo-1633158829875-e5316a358c6f-1200w.webp` (NEW)
- `public/images/unsplash/photo-1633158829875-e5316a358c6f-800w.webp` (NEW)
- `scripts/download-unsplash-images.cjs` (added documentation)
- `docs/article-summey.md` (regenerated)
