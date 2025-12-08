---
task_id: "FJ-A013"
title: "Write Article: Best Podcast Equipment Starter Kits"
category: "Content"
priority: "P2"
status: "completed"
created_date: "2025-12-07"
completed_date: "2025-12-08"
due_date: ""
estimated_hours: 6
actual_hours: 5
assigned_to: "marcus-chen"
tags: ["gear", "audio", "money-page"]
---

# Task: Write Article - Best Podcast Equipment Starter Kits

## Overview

Write a money page article about microphone + interface bundles under $300 for the Gear section (audio subcategory).

**Article Type:** Money Page
**Section:** Gear
**Category:** Audio
**Assigned Writer:** marcus-chen
**Target Slug:** `best-podcast-equipment-starter-kits`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [x] Write compelling money page that ranks for "best podcast equipment starter kits" keywords
- [x] Follow marcus-chen's writing style and voice
- [x] Pass AI detection (<4% AI-generated)
- [x] Include affiliate links where relevant

## Success Criteria

- ✅ Article passes AI detection (1.97%)
- ✅ SEO/AEO/GEO requirements met
- ✅ Unique hero image downloaded and optimized
- ✅ Article added to `src/data/articles.ts`
- ✅ Build passes without errors (153 pages)

## Subtasks

### Phase 1: Research & Planning (1 hour)

- [x] 1.1 Review writer style guide for marcus-chen
    - Read `docs/writing/writers-summery.md`
    - Note signature phrases and tone

- [x] 1.2 Research competing articles
    - Searched for similar content
    - Identified gaps to fill

- [x] 1.3 Outline article structure
    - Hook, body sections, conclusion
    - Plan comparison tables and FAQs

### Phase 2: Writing (2-3 hours)

- [x] 2.1 Write first draft
    - Use first person ("I")
    - Include specific numbers and examples
    - Add personal anecdotes (friend's soup can mic)

- [x] 2.2 Run AI detection
    - First draft: 20.35% AI
    - Final: 1.97% AI

- [x] 2.3 Revise until passing
    - Remove flagged patterns
    - Add more human touches

### Phase 3: Media & SEO (1 hour)

- [x] 3.1 Find unique hero image
    - Unsplash ID: photo-1598488035139-bdbb2231ce04
    - Verified not used elsewhere

- [x] 3.2 Download and optimize image
    - Downloaded 1200w and 800w versions
    - Optimized to WebP format

- [x] 3.3 Complete SEO checklist
    - Title with primary keyword
    - Meta description (150-160 chars)
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [x] 4.1 Create article page
    - `src/pages/gear/best-podcast-equipment-starter-kits.astro`
    - Added enhanced design elements (info cards, colored sections)

- [x] 4.2 Add article metadata
    - Updated `src/data/articles.ts`
    - Category: audio

- [x] 4.3 Final verification
    - Ran `npm run docs:articles` (116 articles)
    - Build passed (153 pages)

## Resources

- [New Article Guide](docs/new-article-guide.md) - Complete workflow
- [Writers Summary](docs/writing/writers-summery.md) - Writer styles
- [Writing Style Guide](docs/writing/writing-style-guide.md) - Patterns to use/avoid
- [AI Detection Script](scripts/zerogpt-detect.js) - Check AI percentage

## Acceptance Checklist

Before marking this task complete:

- [x] Article passes AI detection (1.97%)
- [x] Writer style matches marcus-chen
- [x] Hero image is unique and optimized
- [x] Article added to articles.ts
- [x] Article summary regenerated
- [x] Build passes

## Affiliate Opportunities

**Status:** ✅ Has affiliate programs

| Program | Status | Network | Commission |
|---------|--------|---------|------------|
| Amazon | ✅ Approved | Amazon | 3-4% |
| Shure | Not Applied | Direct | 5-8% |
| Rode | Not Applied | Direct | 5% |
| Focusrite | Not Applied | Direct | 5-8% |

**Notes:** Amazon affiliate links included for Samson Q2U, Focusrite Scarlett Solo, MOVO PodPak, Audio-Technica AT2020.

**Reference:** `docs/affiliates/affiliate-programs.md`

---

## Progress Log

### 2025-12-07

- ⏳ Task created from backlog
- 📝 Added to articles task queue

### 2025-12-08

- ✅ Reviewed Marcus Chen writer style guide
- ✅ Researched competing podcast equipment articles
- ✅ Wrote article draft in Marcus Chen style
- ✅ AI detection: 20.35% → 1.97% after revisions
- ✅ Found unique hero image (photo-1598488035139-bdbb2231ce04)
- ✅ Downloaded and optimized images
- ✅ Created article page with enhanced design elements
- ✅ Added to articles.ts
- ✅ Build passed (153 pages)
- ✅ Task completed

## Notes

- **Description:** Samson Q2U vs Focusrite Scarlett Solo + Rode PodMic vs MOVO PodPak-2 vs AT2020
- Article covers 4 starter kit options with budget breakdown
- Enhanced design with colored info cards, setup guide cards, warning section
- Top picks: Q2U (budget), Scarlett+PodMic (serious), PodPak-2 (two hosts), AT2020 (quiet rooms)
- Includes warning against cheap Amazon bundles
- 8 FAQs covering common beginner questions
- 14 minute read, Gear/Audio section
