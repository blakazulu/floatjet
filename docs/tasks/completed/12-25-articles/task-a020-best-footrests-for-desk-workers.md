---
task_id: "FJ-A020"
title: "Write Article: Best Footrests for Desk Workers"
category: "Content"
priority: "P2"
status: "completed"
created_date: "2025-12-07"
due_date: ""
estimated_hours: 6
actual_hours: 5
assigned_to: "sarah-mitchell"
tags: ["gear", "furniture", "money-page"]
---

# Task: Write Article - Best Footrests for Desk Workers

## Overview

Write a money page article about under-desk ergonomic foot support for the Gear section (furniture subcategory).

**Article Type:** Money Page
**Section:** Gear
**Category:** Furniture
**Assigned Writer:** sarah-mitchell
**Target Slug:** `best-footrests-for-desk-workers`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [x] Write compelling money page that ranks for "best footrests for desk workers" keywords
- [x] Follow sarah-mitchell's writing style and voice
- [x] Pass AI detection (<4% AI-generated) - **1.74%**
- [x] Include affiliate links where relevant

## Success Criteria

- ✅ Article passes AI detection (<4%)
- ✅ SEO/AEO/GEO requirements met
- ✅ Unique hero image downloaded and optimized
- ✅ Article added to `src/data/articles.ts`
- ✅ Build passes without errors

## Subtasks

### Phase 1: Research & Planning (1 hour)

- [x] 1.1 Review writer style guide for sarah-mitchell
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

- [x] 2.3 Revise until passing
    - Remove flagged patterns
    - Add more human touches
    - Update `docs/writing/writing-style-guide.md` with findings

### Phase 3: Media & SEO (1 hour)

- [x] 3.1 Find unique hero image
    - Search Unsplash for relevant image
    - Verify not used in `src/data/articles.ts`

- [x] 3.2 Download and optimize image
    - Add to `scripts/download-unsplash-images.cjs`
    - Run download script
    - Run `node scripts/optimize-images.cjs`
    - Remove ID from download script

- [x] 3.3 Complete SEO checklist
    - Title with primary keyword
    - Meta description (150-160 chars)
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [x] 4.1 Create article page
    - Copy similar article as template
    - `src/pages/gear/best-footrests-for-desk-workers.astro`

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

- [x] Article passes AI detection (<4%) - **1.74%**
- [x] Writer style matches sarah-mitchell
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
| Amazon | ✅ Approved | Amazon | 4-6% |

**Notes:** Use Amazon Associates for ergonomic footrests.

**Reference:** `docs/affiliates/affiliate-programs.md`

**Action:** Update `docs/affiliates/affiliate-programs.md` with any new programs discovered or applied for.

---

## Progress Log

### 2025-12-13

- ✅ Task completed
- 📝 Article written in Sarah Mitchell's style (warm, direct, personal anecdotes)
- 🔍 AI detection: 1.74% (passed <4% threshold)
- 🖼️ Hero image: photo-1598818432717-29f81b9224fd (feet on wooden floor)
- 🔗 Added 5 Amazon affiliate redirects (ErgoFoam, StrongTek, HUANUO, ComfiLife, CasaZenith)
- ✅ Build verification passed

### 2025-12-07

- ⏳ Task created from backlog
- 📝 Added to articles task queue

## Notes

- **Description:** under-desk ergonomic foot support
- Always update `scripts/zerogpt-detect.js` patterns after testing
- Check `docs/affiliates/` for relevant affiliate links to include
