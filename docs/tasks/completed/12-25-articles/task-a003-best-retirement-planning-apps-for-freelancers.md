---
task_id: "FJ-A003"
title: "Write Article: Best Retirement Planning Apps for Freelancers"
category: "Content"
priority: "P2"
status: "completed"
created_date: "2025-12-07"
due_date: ""
estimated_hours: 6
actual_hours: 2
assigned_to: "daniel-brooks"
tags: ["tools", "finance", "money-page"]
---

# Task: Write Article - Best Retirement Planning Apps for Freelancers

## Overview

Write a money page article about Betterment, Wealthfront, Acorns for the Tools section (finance subcategory).

**Article Type:** Money Page
**Section:** Tools
**Category:** Finance
**Assigned Writer:** daniel-brooks
**Target Slug:** `best-retirement-planning-apps-for-freelancers`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [x] Write compelling money page that ranks for "best retirement planning apps for freelancers" keywords
- [x] Follow daniel-brooks's writing style and voice
- [x] Pass AI detection (<4% AI-generated)
- [x] Include affiliate links where relevant

## Success Criteria

- [x] Article passes AI detection (<4%) - **2.39% achieved**
- [x] SEO/AEO/GEO requirements met
- [x] Unique hero image downloaded and optimized
- [x] Article added to `src/data/articles.ts`
- [x] Build passes without errors

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
    - **Result: 2.39% AI-generated**

- [x] 2.3 Revise until passing
    - Remove flagged patterns
    - Add more human touches
    - Update `docs/writing/writing-style-guide.md` with findings

### Phase 3: Media & SEO (1 hour)

- [x] 3.1 Find unique hero image
    - Search Unsplash for relevant image
    - Verify not used in `src/data/articles.ts`
    - **Image: photo-1607863680198-23d4b2565df0 (piggy bank savings)**

- [x] 3.2 Download and optimize image
    - Downloaded via curl
    - Run `node scripts/optimize-images.cjs`
    - Images converted to WebP

- [x] 3.3 Complete SEO checklist
    - Title with primary keyword
    - Meta description (150-160 chars)
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [x] 4.1 Create article page
    - Copy similar article as template
    - `src/pages/tools/best-retirement-planning-apps-for-freelancers.astro`

- [x] 4.2 Add article metadata
    - Update `src/data/articles.ts`
    - Verify category matches section

- [x] 4.3 Final verification
    - Run `npm run docs:articles`
    - Run build to verify no errors
    - **Build passed: 143 pages built**

## Resources

- [New Article Guide](docs/new-article-guide.md) - Complete workflow
- [Writers Summary](docs/writing/writers-summery.md) - Writer styles
- [Writing Style Guide](docs/writing/writing-style-guide.md) - Patterns to use/avoid
- [AI Detection Script](scripts/zerogpt-detect.js) - Check AI percentage

## Acceptance Checklist

Before marking this task complete:

- [x] Article passes AI detection (<4%) - **2.39%**
- [x] Writer style matches daniel-brooks
- [x] Hero image is unique and optimized
- [x] Article added to articles.ts
- [x] Article summary regenerated
- [x] Build passes
- [ ] Preview looks correct (pending user review)
- [x] `docs/writing/writing-style-guide.md` updated with new patterns


## Affiliate Opportunities

**Status:** Affiliate programs available (Betterment, Wealthfront)

| Program | Status | Network | Commission |
|---------|--------|---------|------------|
| Betterment | Not Applied | Direct | Varies |
| Wealthfront | Not Applied | Direct | Varies |
| Acorns | Not Applied | Direct | Varies |

**Notes:** These are robo-advisor platforms with affiliate programs. Consider applying to Betterment and Wealthfront affiliate programs.

**Reference:** `docs/affiliates/affiliate-programs.md`

**Action:** Update `docs/affiliates/affiliate-programs.md` with any new programs discovered or applied for.

---

## Progress Log

### 2025-12-07

- ⏳ Task created from backlog
- 📝 Added to articles task queue
- ✅ Reviewed Daniel Brooks writer style guide
- ✅ Researched competing articles (NerdWallet, Tokenist, etc.)
- ✅ Wrote article draft in Daniel Brooks style
- ✅ AI detection passed: 2.39% (well under 4% threshold)
- ✅ Downloaded unique hero image: photo-1607863680198-23d4b2565df0
- ✅ Optimized images to WebP format
- ✅ Created article page: `src/pages/tools/best-retirement-planning-apps-for-freelancers.astro`
- ✅ Added to `src/data/articles.ts`
- ✅ Regenerated article summary (106 articles total)
- ✅ Build passed: 143 pages built in 93.31s

## Notes

- **Description:** Betterment, Wealthfront, Acorns
- Always update `scripts/zerogpt-detect.js` patterns after testing
- Check `docs/affiliates/` for relevant affiliate links to include
- Article covers SEP IRA, Roth IRA, and Solo 401(k) options for freelancers
