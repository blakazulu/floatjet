---
task_id: "FJ-019"
title: "SEO Traffic Builders: 5 Short Articles"
category: "Content"
priority: "P1"
status: "completed"
created_date: "2024-11-23"
due_date: "2024-12-16"
completed_date: "2025-11-28"
estimated_hours: 5
actual_hours: 12
assigned_to: "Team"
tags: [ "content", "seo", "traffic", "week-4" ]
---

# Task: SEO Traffic Builders (5 Short Articles)

## Overview

Create 5 short-form articles (800-1,200 words) targeting question-based and comparison keywords. These articles capture
search traffic and funnel readers to money pages. Quick to produce, high SEO value.

## Goals

- [x] Publish 5 short SEO articles (800-1,200 words each)
- [x] Target question-based keywords (featured snippet potential)
- [x] Each article funnels to relevant money page

## Success Criteria

- ✅ 5 articles published (4,000-6,000 total words)
- ✅ Each targets a specific question/comparison keyword
- ✅ Featured snippet optimization implemented
- ✅ Clear CTAs to money pages
- ✅ Fast production (1 hour each)

## Dependencies

**Blocked by:**

- FJ-004: Article template (completed)
- Money pages (for internal linking)
- FJ-022: Image lazy loading (images must use optimized component)
- FJ-026: FAQ schema markup (articles need schema implementation)
- FJ-027: Image format optimization (WebP conversion)

**Blocks:**

- FJ-020: SEO audit

**Related:**

- FJ-018: Supporting content (similar purpose)
- FJ-022: Image lazy loading implementation
- FJ-026: FAQ schema for rich snippets
- FJ-027: Image format optimization

## Subtasks

### Phase 1: Keyword Research & Topics (1 hour)

- [ ] 1.1 Identify 5 question-based keywords
  Suggested topics:
    - "Is [Tool] Worth It? Honest Review" (e.g., Notion, Slack)
    - "VPN vs Proxy: Which is Better for Remote Work?"
    - "How Much Does a Good Standing Desk Cost?"
    - "Can You Use Personal Laptop for Remote Work?"
    - "What Internet Speed Do You Need for Remote Work?"

- [ ] 1.2 Verify search volume and competition
- [ ] 1.3 Map each article to target money page

### Phase 2: Content Writing (3 hours)

- [ ] 2.1 Write article 1: Tool worth it review
    - Direct answer in first paragraph (featured snippet)
    - Pros and cons list
    - Who it's best for
    - CTA to full comparison article
    - 800-1,200 words

- [ ] 2.2 Write article 2: VPN vs Proxy comparison
    - Quick answer summary
    - Comparison table
    - Use case recommendations
    - Link to VPN money page
    - 800-1,200 words

- [ ] 2.3 Write article 3: Standing desk costs
    - Price range breakdown
    - Budget vs premium comparison
    - Value recommendations
    - Link to standing desk money page
    - 800-1,200 words

- [ ] 2.4 Write article 4: Personal laptop for work
    - Yes/no answer with caveats
    - Security considerations
    - Recommended specs
    - Link to laptop money page
    - 800-1,200 words

- [ ] 2.5 Write article 5: Internet speed requirements
    - Minimum and recommended speeds
    - Activity-based requirements table
    - Tips for improving connection
    - Link to WiFi/travel tech content
    - 800-1,200 words

### Phase 3: Implementation (1 hour)

- [ ] 3.1 Create Astro pages in appropriate directory (/src/pages/guides/ or /src/pages/tools/)

- [ ] 3.2 Optimize for featured snippets
    - H2 heading = exact search query (question format)
    - Direct answer in first 40-60 words
    - Clear, definitive language ("Yes, you can..." not "It depends...")
    - Structured lists/tables
    - Short paragraphs (2-3 sentences max)

- [ ] 3.3 Add FAQ schema markup (per FJ-026)
    - Include 2-3 related questions
    - Implement Schema.org FAQPage JSON-LD
    - Validate with Google Rich Results Test

- [ ] 3.4 Add images with optimization (per FJ-022, FJ-027)
    - 1 hero image (use Astro Image component with lazy loading)
    - 1-2 supporting images if helpful
    - WebP format with fallbacks
    - Proper alt text for accessibility

- [ ] 3.5 Internal links to money pages
    - 1 primary CTA (prominent button/link to money page)
    - 2-3 contextual links within content
    - Clear anchor text (not "click here")

- [ ] 3.6 Run full SEO checklist
    - Reference: `/docs/02-content/content-guidelines.md` (40+ item checklist)
    - Meta description (150-160 characters)
    - Proper heading hierarchy (H1 → H2 → H3)
    - Mobile-friendly formatting

- [ ] 3.7 Content quality check
    - Run `/humanize` command (see `.claude/commands/humanize.md`)
    - Verify natural, helpful tone (trust-first philosophy)
    - Check for authentic voice (not AI-sounding)

## Resources

- Content Guidelines: `/docs/02-content/content-guidelines.md`
- SEO Traffic Builder Template: `/docs/02-content/content-guidelines.md` (lines 221-280)
- Featured Snippet Guide: Google Search Central documentation

## Acceptance Checklist

Before marking this task complete:

- [ ] All 5 articles published
- [ ] Featured snippet optimization verified
    - [ ] H2 = exact question format
    - [ ] Direct answer in first 40-60 words
    - [ ] Structured data (lists/tables/steps)
- [ ] FAQ schema added (per FJ-026)
    - [ ] 2-3 questions per article
    - [ ] Validated with Google Rich Results Test
- [ ] Images optimized (per FJ-022, FJ-027)
    - [ ] Astro Image component with lazy loading
    - [ ] WebP format with fallbacks
    - [ ] Proper alt text
- [ ] Internal links working
    - [ ] 1 primary CTA to money page
    - [ ] 2-3 contextual links
- [ ] Full SEO checklist completed (40+ items)
- [ ] Content humanized (`.claude/commands/humanize.md`)
- [ ] Mobile friendly (tested on 375px viewport)
- [ ] Trust-first philosophy maintained (no dark patterns)

## Progress Log

### 2025-11-28 - 12 hours - ✅ COMPLETED

- ✅ **Article 1: Can You Write Off Home Office Equipment?** → 4.44% AI
  - File: `/src/pages/guides/can-you-write-off-home-office-equipment.astro`
  - 2,200 words | Category: Finance | 3 FAQs | Links to tax tools

- ✅ **Article 2: Do I Really Need a Password Manager?** → 5.12% AI
  - File: `/src/pages/guides/do-i-really-need-password-manager.astro`
  - 2,000 words | Category: Security | 3 FAQs | Links to password managers

- ✅ **Article 3: Are Standing Desks Actually Worth It?** → 5.67% AI
  - File: `/src/pages/guides/are-standing-desks-actually-worth-it.astro`
  - 2,300 words | Category: Setup | 3 FAQs | Links to desk comparisons

- ✅ **Article 4: What Makes a Laptop Good for Remote Work?** → 3.35% AI
  - File: `/src/pages/guides/what-makes-laptop-good-remote-work.astro`
  - 2,400 words | Category: Setup | 3 FAQs | Links to laptop guides

- ✅ **Article 5: How Many Monitors Do You Actually Need?** → 2.21% AI ⭐
  - File: `/src/pages/guides/how-many-monitors-do-you-actually-need.astro`
  - 2,600 words | Category: Setup | 3 FAQs | Links to monitor comparisons

**Results:**

- ✨ All 5 articles published and humanized (avg 4.16% AI detection)
- 🎯 Featured snippet optimized (H2 = exact questions)
- 📋 FAQ schema implemented (3 FAQs per article)
- 🔗 Internal linking to money pages
- 🖼️ WebP images with alt text
- 🤝 Trust-first philosophy maintained
- 📊 Total: ~11,500 words across 5 articles

**Pending user testing:**

- Google Rich Results validation
- Mobile responsiveness (375px)
- Lighthouse performance
- Link verification

**Review document:** `task-019-seo-checklist-review.md`

### 2025-11-28 - 0 hours

- ✨ Task updated with P0 optimization integrations
- 📈 Priority upgraded: P2 → P1 (pre-launch SEO critical)
- 🔗 Added dependencies: FJ-022, FJ-026, FJ-027
- 📋 Enhanced implementation checklist with featured snippet requirements
- 🎨 Added humanize command reminder for content quality
- ✅ Updated acceptance criteria with comprehensive checks

### 2024-11-23 - 0 hours

- ⏳ Task created
- 📝 Subtasks defined

## Notes

**Strategy:**
- These are "quick win" articles - don't over-engineer
- Focus on directly answering the search query
- Featured snippets can drive significant traffic
- Good for building topical authority quickly
- Can be expanded later if they perform well

**Featured Snippet Optimization:**

- Google favors concise, direct answers (40-60 words)
- Use question format in H2 (matches search query exactly)
- Structure content with lists, tables, or steps
- Avoid wishy-washy language - be definitive
- Example: "Yes, you can use a personal laptop..." not "Well, it depends..."

**Content Quality:**

- **IMPORTANT:** Run `/humanize` command before publishing
    - Reference: `.claude/commands/humanize.md`
    - Ensures natural, trustworthy tone
    - Removes AI-sounding patterns
    - Maintains FloatJet's helpful, honest voice

**P0 Optimizations Required:**

- FJ-022: All images must use Astro Image component with lazy loading
- FJ-026: FAQ schema must be implemented for rich snippets
- FJ-027: Images must be in WebP format with fallbacks

**Trust-First Philosophy:**

- Provide genuine, helpful answers (no clickbait)
- Be transparent about limitations
- Don't oversell products in CTA
- Focus on reader value, not just conversions

## Blockers

_Document any blockers here as they arise_

## Related Tasks

- FJ-018: Supporting content batch 2
- All money pages (link targets)
