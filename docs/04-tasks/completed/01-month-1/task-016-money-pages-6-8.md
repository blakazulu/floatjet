---
task_id: "FJ-016"
title: "Money Pages 6-8: Headphones, Productivity Apps, Time Tracking"
category: "Content"
priority: "P0"
status: "completed"
created_date: "2024-11-23"
due_date: "2024-12-14"
estimated_hours: 24
actual_hours: 0
assigned_to: "Team"
tags: [ "content", "money-page", "affiliate", "week-4" ]
---

# Task: Money Pages 6-8 (Headphones, Productivity Apps, Time Tracking)

## Overview

Create three high-converting money pages targeting profitable affiliate niches. These are core revenue-generating
content pieces with deep product comparisons, affiliate links, and SEO optimization for commercial intent keywords.

## Goals

- [ ] Publish "Best Noise-Canceling Headphones for Remote Work" (2,500-3,500 words)
- [ ] Publish "Best Productivity Apps for Remote Workers" (2,500-3,500 words)
- [ ] Publish "Best Time Tracking Software for Freelancers" (2,500-3,500 words)

## Success Criteria

- ✅ Each article is 2,500-3,500 words with proper structure
- ✅ Each article has 5-8 product recommendations with affiliate links
- ✅ All articles pass 40-item SEO checklist
- ✅ Schema.org markup (Article, Product, FAQ) implemented
- ✅ Lighthouse scores >90 on mobile for all pages
- ✅ Internal links to supporting content included

## Dependencies

**Blocked by:**

- FJ-004: Article template (completed)
- FJ-008: Affiliate programs setup (completed)

**Blocks:**

- FJ-020: SEO audit (needs all content published)
- FJ-021: Launch announcement

**Related:**

- FJ-006: PM Software article (reference for format)
- FJ-007: VPN article (reference for format)

## Subtasks

### Phase 1: Research & Outline (6 hours)

- [ ] 1.1 Headphones article research
    - Identify top 8 noise-canceling headphones for remote work
    - Research affiliate programs (Amazon Associates, manufacturer programs)
    - Keyword research: "best headphones remote work", "noise canceling headphones home office"
    - Create detailed outline with H2/H3 structure

- [ ] 1.2 Productivity apps article research
    - Identify top 8 productivity apps (Notion, Todoist, Evernote, etc.)
    - Verify affiliate program availability
    - Keyword research: "best productivity apps", "remote work tools"
    - Create detailed outline

- [ ] 1.3 Time tracking software research
    - Identify top 8 time trackers (Toggl, Harvest, Clockify, etc.)
    - Verify affiliate programs
    - Keyword research: "best time tracking software freelancers"
    - Create detailed outline

### Phase 2: Content Writing (12 hours)

- [ ] 2.1 Write headphones article (4 hours)
    - Introduction with hook and value proposition
    - Quick picks section (top 3 summary)
    - Individual product reviews (8 products)
    - Comparison table
    - Buying guide section
    - FAQ section (5-8 questions)
    - Conclusion with final recommendations

- [ ] 2.2 Write productivity apps article (4 hours)
    - Follow same structure as headphones
    - Focus on features, pricing, integrations
    - Include use case recommendations
    - Add comparison table

- [ ] 2.3 Write time tracking article (4 hours)
    - Follow established money page structure
    - Highlight freelancer-specific features
    - Include free vs paid comparisons
    - Add integration capabilities

### Phase 3: Implementation & SEO (6 hours)

- [ ] 3.1 Create Astro pages for all three articles
    - Use ArticleLayout component
    - Add proper frontmatter
    - Implement all article components

- [ ] 3.2 Add affiliate links and disclosures
    - Insert affiliate links with proper tracking
    - Add affiliate disclosure component
    - Verify all links work correctly

- [ ] 3.3 Implement Schema.org markup
    - Article schema
    - Product schema for each recommendation
    - FAQ schema for question sections

- [ ] 3.4 SEO optimization
    - Meta titles and descriptions
    - Open Graph tags
    - Image optimization with alt text
    - Internal linking strategy

- [ ] 3.5 Final review and testing
    - Run through 40-item SEO checklist
    - Test on mobile devices
    - Verify Lighthouse scores
    - Proofread all content

## Resources

- Content Guidelines: `/docs/02-content/content-guidelines.md`
- Money Page Template: `/docs/02-content/content-guidelines.md` (lines 45-150)
- SEO Checklist: `/docs/02-content/content-guidelines.md` (lines 299-365)
- Affiliate Programs: `/docs/02-content/affiliate-programs.md`
- Component Specs: `/docs/03-design/component-specifications.md`

## Acceptance Checklist

Before marking this task complete:

- [ ] All three articles published and accessible
- [ ] All subtasks completed
- [ ] All success criteria met
- [ ] Articles pass SEO checklist
- [ ] Affiliate links verified working
- [ ] Mobile experience tested
- [ ] No broken links or images

## Progress Log

### 2024-11-23 - 0 hours

- ⏳ Task created
- 📝 Subtasks defined

### 2024-11-23 - 6 hours

- ✅ Created Article 1: Best Noise-Canceling Headphones (`/src/pages/gear/best-noise-canceling-headphones.astro`)
    - 7 products reviewed (Sony XM5, Bose QC Ultra, AirPods Max, Sony XM4, Bose 700, Sennheiser Momentum 4, Jabra
      Evolve2 85)
    - ~3,200 words with full comparison tables, FAQ section, related articles
- ✅ Created Article 2: Best Productivity Apps (`/src/pages/tools/best-productivity-apps.astro`)
    - 7 apps reviewed (Notion, Todoist, Obsidian, Things 3, TickTick, Evernote, Any.do)
    - ~3,000 words with comparison tables, FAQ section, related articles
- ✅ Created Article 3: Best Time Tracking Software (`/src/pages/tools/best-time-tracking-software.astro`)
    - 7 apps reviewed (Toggl, Harvest, Clockify, Timely, RescueTime, Paymo, Hours)
    - ~2,800 words with comparison tables, FAQ section, related articles
- 📊 Progress: All 3 articles created, pending review and testing

### 2025-11-23 - Task Completed

- ✅ All 3 articles tested and approved
- ✅ Affiliate programs doc updated with 9 new programs
- ✅ Task marked complete

## Notes

- Prioritize headphones first (highest affiliate potential)
- Use existing money page articles as reference for format
- Ensure consistent voice and style across all three
- Consider seasonal timing for headphones (holiday shopping)

## Blockers

_Document any blockers here as they arise_

## Related Tasks

- FJ-017: Money pages 9-10 (same sprint)
- FJ-018: Supporting content that links to these pages
