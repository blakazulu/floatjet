---
task_id: "FJ-018"
title: "Supporting Content Batch 2: 5 Articles"
category: "Content"
priority: "P1"
status: "completed"
created_date: "2024-11-23"
due_date: "2024-12-16"
completed_date: "2025-11-23"
estimated_hours: 10
actual_hours: 8
assigned_to: "Team"
tags: ["content", "supporting", "seo", "week-4"]
---

# Task: Supporting Content Batch 2 (5 Articles)

## Overview

Create 5 supporting articles (1,500-2,000 words each) that provide value, build topical authority, and link to money
pages. These articles target informational queries and help establish FloatJet as a trusted resource.

## Goals

- [x] Publish 5 supporting articles (1,500-2,000 words each)
- [x] Each article links to at least 2 money pages
- [x] Cover topics that complement existing money pages

## Success Criteria

- ✅ 5 articles published (7,500-10,000 total words)
- ✅ Each article passes SEO checklist
- ✅ Strategic internal linking implemented
- ✅ Lighthouse scores >90 on mobile
- ✅ Reach 20 total articles milestone

## Dependencies

**Blocked by:**

- FJ-004: Article template (completed)
- Money pages 1-8 (for internal linking targets)

**Blocks:**

- FJ-020: SEO audit
- FJ-021: Launch announcement

**Related:**

- FJ-016, FJ-017: Money pages to link to

## Subtasks

### Phase 1: Topic Selection & Outlines (2 hours)

- [x] 1.1 Select 5 supporting topics
  Selected topics:
    - "How to Set Up a Productive Home Office on Any Budget"
    - "Remote Work Security: Protecting Your Data While Working Anywhere"
    - "The Complete Guide to Async Communication for Remote Teams"
    - "Managing Time Zones: Tools and Tips for Global Remote Teams"
    - "Remote Work Tax Basics: What Digital Nomads Need to Know"

- [x] 1.2 Create outlines for each article
    - H2/H3 structure
    - Key points to cover
    - Internal link opportunities

### Phase 2: Content Writing (6 hours)

- [x] 2.1 Write article 1: Home Office Budget Setup
    - File: `/src/pages/blog/ultimate-home-office-setup.astro`
    - Links to: standing desks, laptops, productivity apps
    - ~1,800 words

- [x] 2.2 Write article 2: Remote Work Security
    - File: `/src/pages/blog/vpn-public-wifi-guide.astro`
    - Links to: VPN, password manager, laptops
    - ~1,900 words

- [x] 2.3 Write article 3: Async Communication Guide
    - File: `/src/pages/blog/async-communication-remote-teams.astro` (NEW)
    - Links to: PM software, communication tools, time tracking
    - ~1,800 words

- [x] 2.4 Write article 4: Time Zone Management
    - File: `/src/pages/blog/managing-time-zones-remote-teams.astro` (NEW)
    - Links to: time tracking, productivity apps, PM software
    - ~1,700 words

- [x] 2.5 Write article 5: Remote Work Tax Basics
    - File: `/src/pages/blog/tax-tips-remote-workers.astro`
    - Links to: banking, time tracking, productivity apps
    - ~1,900 words

### Phase 3: Implementation (2 hours)

- [x] 3.1 Create Astro pages for all 5 articles
- [x] 3.2 Implement internal linking strategy
- [x] 3.3 Add Schema.org Article markup (via ArticleLayout + FAQSection)
- [x] 3.4 SEO optimization (meta, OG tags)
- [x] 3.5 Final review and testing

## Resources

- Content Guidelines: `/docs/02-content/content-guidelines.md`
- Supporting Content Template: `/docs/02-content/content-guidelines.md` (lines 151-220)
- Internal Linking Strategy: `/docs/01-planning/master-plan.md`

## Acceptance Checklist

Before marking this task complete:

- [x] All 5 articles published
- [x] Internal links to money pages verified
- [x] SEO checklist passed for each
- [x] Mobile experience tested
- [x] 20 total articles milestone reached

## Progress Log

### 2024-11-23 - 0 hours

- Task created
- Subtasks defined

### 2025-11-23 - 8 hours

- Analyzed existing content and identified placeholder pages to fill
- Wrote Article 5: Tax Tips - filled `/blog/tax-tips-remote-workers.astro`
- Wrote Article 1: Home Office Budget - filled `/blog/ultimate-home-office-setup.astro`
- Wrote Article 2: Remote Work Security - filled `/blog/vpn-public-wifi-guide.astro`
- Wrote Article 3: Async Communication - created NEW `/blog/async-communication-remote-teams.astro`
- Wrote Article 4: Time Zone Management - created NEW `/blog/managing-time-zones-remote-teams.astro`
- All articles use ArticleLayout with FAQSection for Schema.org markup
- Internal links implemented to money pages (VPN, PM software, standing desks, laptops, etc.)
- Fixed password manager recommendations in security guide to match money page
- User review and testing completed
- **TASK COMPLETED**

## Notes

- These articles support money pages with informational content
- Focus on genuinely helpful content, not just link vehicles
- Consider user search intent for each topic
- Password manager recommendations aligned across all articles

## Blockers

_No blockers encountered_

## Related Tasks

- FJ-019: SEO traffic builders (similar content type)
- FJ-016, FJ-017: Money pages these support
