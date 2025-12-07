---
task_id: "FJ-A049"
title: "Write Article: The Gig Economy Tax Problem No One Talks About"
category: "Content"
priority: "P2"
status: "not-started"
created_date: "2025-12-07"
due_date: ""
estimated_hours: 3
actual_hours: 0
assigned_to: "daniel-brooks"
tags: ["blog", "finance", "seo-traffic-builder"]
---

# Task: Write Article - The Gig Economy Tax Problem No One Talks About

## Overview

Write a seo traffic builder article about freelancer tax challenges for the Blog section (finance subcategory).

**Article Type:** SEO Traffic Builder
**Section:** Blog
**Category:** Finance
**Assigned Writer:** daniel-brooks
**Target Slug:** `the-gig-economy-tax-problem-no-one-talks-about`

## Important References

> **CRITICAL:** Before starting, read the complete article creation process:
> - `docs/new-article-guide.md` - Step-by-step article creation workflow
> - `docs/writing/writers-summery.md` - Writer style guides
> - `docs/writing/writing-style-guide.md` - General writing rules

> **AI Detection:** After writing, always run AI detection and update the style guide:
> - Run: `node scripts/zerogpt-detect.js --file article.txt`
> - Update `docs/writing/writing-style-guide.md` with any new patterns discovered

## Goals

- [ ] Write compelling seo traffic builder that ranks for "the gig economy tax problem no one talks about" keywords
- [ ] Follow daniel-brooks's writing style and voice
- [ ] Pass AI detection (<4% AI-generated)
- [ ] Include affiliate links where relevant

## Success Criteria

- ✅ Article passes AI detection (<4%)
- ✅ SEO/AEO/GEO requirements met
- ✅ Unique hero image downloaded and optimized
- ✅ Article added to `src/data/articles.ts`
- ✅ Build passes without errors

## Subtasks

### Phase 1: Research & Planning (1 hour)

- [ ] 1.1 Review writer style guide for daniel-brooks
    - Read `docs/writing/writers-summery.md`
    - Note signature phrases and tone

- [ ] 1.2 Research competing articles
    - Search for similar content
    - Identify gaps to fill

- [ ] 1.3 Outline article structure
    - Hook, body sections, conclusion
    - Plan comparison tables and FAQs

### Phase 2: Writing (2-3 hours)

- [ ] 2.1 Write first draft
    - Use first person ("I")
    - Include specific numbers and examples
    - Add personal anecdotes

- [ ] 2.2 Run AI detection
    - `node scripts/zerogpt-detect.js --file draft.txt`
    - Target: <4% AI-generated

- [ ] 2.3 Revise until passing
    - Remove flagged patterns
    - Add more human touches
    - Update `docs/writing/writing-style-guide.md` with findings

### Phase 3: Media & SEO (1 hour)

- [ ] 3.1 Find unique hero image
    - Search Unsplash for relevant image
    - Verify not used in `src/data/articles.ts`

- [ ] 3.2 Download and optimize image
    - Add to `scripts/download-unsplash-images.cjs`
    - Run download script
    - Run `node scripts/optimize-images.cjs`
    - Remove ID from download script

- [ ] 3.3 Complete SEO checklist
    - Title with primary keyword
    - Meta description (150-160 chars)
    - Alt text for images

### Phase 4: Implementation (1 hour)

- [ ] 4.1 Create article page
    - Copy similar article as template
    - `src/pages/blog/the-gig-economy-tax-problem-no-one-talks-about.astro`

- [ ] 4.2 Add article metadata
    - Update `src/data/articles.ts`
    - Verify category matches section

- [ ] 4.3 Final verification
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

- [ ] Article passes AI detection (<4%)
- [ ] Writer style matches daniel-brooks
- [ ] Hero image is unique and optimized
- [ ] Article added to articles.ts
- [ ] Article summary regenerated
- [ ] Build passes
- [ ] Preview looks correct
- [ ] `docs/writing/writing-style-guide.md` updated with new patterns

## Progress Log

### 2025-12-07

- ⏳ Task created from backlog
- 📝 Added to articles task queue

## Notes

- **Description:** freelancer tax challenges
- Always update `scripts/zerogpt-detect.js` patterns after testing
- Check `docs/affiliates/` for relevant affiliate links to include
