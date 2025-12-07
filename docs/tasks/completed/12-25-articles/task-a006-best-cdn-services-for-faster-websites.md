---
task_id: "FJ-A006"
title: "Write Article: Best CDN Services for Faster Websites"
category: "Content"
priority: "P2"
status: "completed"
created_date: "2025-12-07"
due_date: ""
estimated_hours: 6
actual_hours: 3
assigned_to: "marcus-chen"
tags: ["tools", "hosting", "money-page"]
---

# Task: Write Article - Best CDN Services for Faster Websites

## Overview

Write a money page article about Cloudflare vs Fastly vs BunnyCDN for the Tools section (hosting subcategory).

**Article Type:** Money Page
**Section:** Tools
**Category:** Hosting
**Assigned Writer:** marcus-chen
**Target Slug:** `best-cdn-services-for-faster-websites`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [x] Write compelling money page that ranks for "best cdn services for faster websites" keywords
- [x] Follow marcus-chen's writing style and voice
- [x] Pass AI detection (<4% AI-generated)
- [x] Include affiliate links where relevant

## Success Criteria

- [x] SEO/AEO/GEO requirements met
- [x] Unique hero image downloaded and optimized
- [x] Article added to `src/data/articles.ts`
- [x] Build passes without errors

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

- [x] 2.2 Article follows humanization guidelines
    - Used natural transitions
    - Varied sentence structure
    - Casual tone with specifics

- [x] 2.3 Incorporated Marcus Chen style elements
    - "It just... works?" uncertainty
    - Specific numbers (4.2 seconds, 1.1 seconds)
    - "Cannot stress this enough"
    - "What I Like" / "The Tradeoffs" headers

### Phase 3: Media & SEO (1 hour)

- [x] 3.1 Find unique hero image
    - Photo ID: photo-1639322537228-f710d846310a
    - Verified not used in `src/data/articles.ts`

- [x] 3.2 Download and optimize image
    - Added to `scripts/download-unsplash-images.cjs`
    - Downloaded 1200w and 800w versions
    - Optimized to WebP
    - Removed ID from download script

- [x] 3.3 Complete SEO checklist
    - Title with primary keyword: "Best CDN Services for Faster Websites (2025)"
    - Meta description: 160 chars
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [x] 4.1 Create article page
    - Used best-static-site-hosting-for-developers.astro as template
    - Created `src/pages/tools/best-cdn-services-for-faster-websites.astro`

- [x] 4.2 Add article metadata
    - Updated `src/data/articles.ts`
    - Category: hosting
    - Author: marcus-chen

- [x] 4.3 Final verification
    - Ran `npm run docs:articles`
    - [x] User verified article renders correctly

## Resources

- [New Article Guide](docs/new-article-guide.md) - Complete workflow
- [Writers Summary](docs/writing/writers-summery.md) - Writer styles
- [Writing Style Guide](docs/writing/writing-style-guide.md) - Patterns to use/avoid
- [AI Detection Script](scripts/zerogpt-detect.js) - Check AI percentage

## Acceptance Checklist

Before marking this task complete:

- [x] Writer style matches marcus-chen
- [x] Hero image is unique and optimized
- [x] Article added to articles.ts
- [x] Article summary regenerated
- [x] Preview looks correct
- [x] Build passes


## Affiliate Opportunities

**Status:** Has affiliate programs

| Program | Status | Network | Commission |
|---------|--------|---------|------------|
| Cloudflare | Added to article | Direct | Referral |
| BunnyCDN | Added to article | Direct | - |
| Fastly | Added to article | Direct | - |

**Notes:** Added affiliate buttons for Cloudflare, BunnyCDN, and Fastly throughout the article.

**Reference:** `docs/affiliates/affiliate-programs.md`

---

## Progress Log

### 2025-12-07

- Task created from backlog
- Added to articles task queue
- Reviewed marcus-chen writing style guide
- Researched CDN services (Cloudflare, Fastly, BunnyCDN, KeyCDN, CloudFront)
- Created detailed article with:
  - Personal hook about site loading from Australia
  - Quick picks comparison table
  - Detailed reviews of Cloudflare, Fastly, BunnyCDN
  - Additional coverage of KeyCDN and CloudFront
  - Speed test results table
  - Pricing breakdown section
  - "How to Choose" decision guide
  - 6 FAQ items
  - Strong conclusion with recommendation
- Downloaded unique hero image (photo-1639322537228-f710d846310a)
- Optimized image to WebP format
- Added article to articles.ts
- Regenerated article summary
- Task ready for user review and testing

### 2025-12-08

- Task marked as completed
- Moved to completed folder

## Notes

- **Description:** Cloudflare vs Fastly vs BunnyCDN comparison
- Article is approximately 3,500 words (money page format)
- Includes 3 comparison tables
- Hero image: Global network visualization
- Related articles linked to website speed optimization and hosting guides
