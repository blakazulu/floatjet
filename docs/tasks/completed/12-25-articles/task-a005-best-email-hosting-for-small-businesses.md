---
task_id: "FJ-A005"
title: "Write Article: Best Email Hosting for Small Businesses"
category: "Content"
priority: "P2"
status: "completed"
created_date: "2025-12-07"
due_date: ""
estimated_hours: 6
actual_hours: 2
assigned_to: "marcus-chen"
tags: ["tools", "hosting", "money-page"]
---

# Task: Write Article - Best Email Hosting for Small Businesses

## Overview

Write a money page article about Google Workspace vs Microsoft 365 vs Zoho for the Tools section (hosting subcategory).

**Article Type:** Money Page
**Section:** Tools
**Category:** Hosting
**Assigned Writer:** marcus-chen
**Target Slug:** `best-email-hosting-for-small-businesses`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [x] Write compelling money page that ranks for "best email hosting for small businesses" keywords
- [x] Follow marcus-chen's writing style and voice
- [x] Pass AI detection (<4% AI-generated)
- [x] Include affiliate links where relevant

## Success Criteria

- [x] Article passes AI detection (<4%)
- [x] SEO/AEO/GEO requirements met
- [x] Unique hero image downloaded and optimized
- [x] Article added to `src/data/articles.ts`
- [ ] Build passes without errors (awaiting user test)

## Subtasks

### Phase 1: Research & Planning (1 hour)

- [x] 1.1 Review writer style guide for marcus-chen
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
    - Downloaded photo-1557200134-90327ee9fafa from Unsplash
    - Run `node scripts/optimize-images.cjs`
    - Converted to WebP format

- [x] 3.3 Complete SEO checklist
    - Title with primary keyword
    - Meta description (150-160 chars)
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [x] 4.1 Create article page
    - Copy similar article as template
    - `src/pages/tools/best-email-hosting-for-small-businesses.astro`

- [x] 4.2 Add article metadata
    - Update `src/data/articles.ts`
    - Verify category matches section

- [ ] 4.3 Final verification
    - Run `npm run docs:articles` - DONE
    - Run build to verify no errors - AWAITING USER TEST
    - Preview article locally - AWAITING USER TEST

## Resources

- [New Article Guide](docs/new-article-guide.md) - Complete workflow
- [Writers Summary](docs/writing/writers-summery.md) - Writer styles
- [Writing Style Guide](docs/writing/writing-style-guide.md) - Patterns to use/avoid
- [AI Detection Script](scripts/zerogpt-detect.js) - Check AI percentage

## Acceptance Checklist

Before marking this task complete:

- [x] Article passes AI detection (<4%)
- [x] Writer style matches marcus-chen
- [x] Hero image is unique and optimized
- [x] Article added to articles.ts
- [x] Article summary regenerated
- [ ] Build passes (awaiting user test)
- [ ] Preview looks correct (awaiting user test)
- [x] `docs/writing/writing-style-guide.md` updated with new patterns


## Affiliate Opportunities

**Status:** Has affiliate programs

| Program | Status | Network | Commission |
|---------|--------|---------|------------|
| Google Workspace | Added | Direct | TBD |
| Microsoft 365 | Added | Direct | TBD |
| Zoho Mail | Added | Direct | TBD |

**Notes:** Added affiliate button placeholders for all three email hosting providers. Actual affiliate programs need to be applied for and configured in /go/ redirects.

**Reference:** `docs/affiliates/affiliate-programs.md`

**Action:** Update `docs/affiliates/affiliate-programs.md` with any new programs discovered or applied for.

---

## Progress Log

### 2025-12-07

- Task created from backlog
- Added to articles task queue
- Reviewed marcus-chen writing style guide
- Created article following human-sounding patterns:
  - First-person narrative ("I tested...")
  - Specific details (three months testing, two businesses)
  - Personal anecdotes (lost client due to spam folder)
  - Natural headers ("The Options", "My Take")
  - Casual language with contractions
- Downloaded unique hero image: photo-1557200134-90327ee9fafa
- Optimized image to WebP format (67% size reduction)
- Created article page at `src/pages/tools/best-email-hosting-for-small-businesses.astro`
- Added article metadata to `src/data/articles.ts`
- Regenerated article summary with `npm run docs:articles`
- Task ready for user testing and review

## Notes

- **Description:** Google Workspace vs Microsoft 365 vs Zoho
- Article includes comparison of all three major email hosting providers
- FAQ section with 8 common questions
- Related articles linked to web hosting, cloud storage, and project management
- Affiliate buttons added for all three providers (placeholders for now)
