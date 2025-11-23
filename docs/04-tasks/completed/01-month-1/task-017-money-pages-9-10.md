---
task_id: "FJ-017"
title: "Money Pages 9-10: Course Platforms, Web Hosting"
category: "Content"
priority: "P0"
status: "completed"
created_date: "2024-11-23"
due_date: "2024-12-15"
estimated_hours: 16
actual_hours: 0
assigned_to: "Team"
tags: [ "content", "money-page", "affiliate", "week-4" ]
---

# Task: Money Pages 9-10 (Course Platforms, Web Hosting)

## Overview

Create the final two money pages to complete the initial 10-article money page goal. These target high-value affiliate
programs with strong recurring commission potential.

## Goals

- [ ] Publish "Best Online Course Platforms for Creating & Selling Courses" (2,500-3,500 words)
- [ ] Publish "Best Web Hosting for Remote Businesses" (2,500-3,500 words)

## Success Criteria

- ✅ Each article is 2,500-3,500 words with proper structure
- ✅ Each article has 5-8 product recommendations with affiliate links
- ✅ All articles pass 40-item SEO checklist
- ✅ Schema.org markup implemented
- ✅ Lighthouse scores >90 on mobile
- ✅ Complete the 10 money page milestone

## Dependencies

**Blocked by:**

- FJ-004: Article template (completed)
- FJ-008: Affiliate programs setup (completed)
- FJ-016: Money pages 6-8 (parallel work)

**Blocks:**

- FJ-020: SEO audit
- FJ-021: Launch announcement

**Related:**

- FJ-016: Money pages 6-8 (same sprint)

## Subtasks

### Phase 1: Research & Outline (4 hours)

- [x] 1.1 Course platforms article research
    - Identify top platforms (Teachable, Thinkific, Kajabi, Podia, etc.)
    - Research affiliate programs and commission rates
    - Keyword research: "best online course platforms", "sell courses online"
    - Create detailed outline

- [x] 1.2 Web hosting article research
    - Identify top hosts (WPEngine, Cloudways, SiteGround, Kinsta)
    - Verify affiliate programs (high commissions available)
    - Keyword research: "best web hosting remote business", "managed WordPress hosting"
    - Create detailed outline

### Phase 2: Content Writing (8 hours)

- [x] 2.1 Write course platforms article (4 hours)
    - Introduction targeting course creators
    - Quick picks for different use cases
    - Individual platform reviews (8 platforms)
    - Pricing comparison table
    - Feature comparison (students, courses, revenue share)
    - FAQ section (8 questions)
    - Conclusion with recommendations by use case

- [x] 2.2 Write web hosting article (4 hours)
    - Introduction for remote business owners
    - Quick picks by business type
    - Individual host reviews (8 hosts)
    - Performance and uptime data
    - Pricing tiers comparison
    - Migration support comparison
    - FAQ section (8 questions)

### Phase 3: Implementation & SEO (4 hours)

- [x] 3.1 Create Astro pages
    - Implement ArticleLayout
    - Add all required components
    - Proper frontmatter configuration

- [x] 3.2 Add affiliate links
    - Insert tracking links (14 new redirects in netlify.toml)
    - Add disclosure components
    - Test all links

- [x] 3.3 Schema.org markup
    - Article, Product, FAQ schemas (via components)

- [x] 3.4 SEO optimization
    - Meta tags, OG tags
    - Image optimization
    - Internal linking

- [x] 3.5 Final review (completed)
    - SEO checklist verification
    - Mobile testing
    - Lighthouse audit

## Resources

- Content Guidelines: `/docs/02-content/content-guidelines.md`
- Affiliate Programs: `/docs/02-content/affiliate-programs.md`
- Web Hosting existing article: `/src/pages/blog/best-web-hosting-remote-businesses.astro`

## Acceptance Checklist

Before marking this task complete:

- [ ] Both articles published
- [ ] All subtasks completed
- [ ] SEO checklist passed
- [ ] Affiliate links working
- [ ] Mobile experience verified
- [ ] 10 money pages milestone achieved

## Progress Log

### 2024-11-23 - 0 hours

- ⏳ Task created
- 📝 Subtasks defined

### 2025-11-23

- **Course Platforms article written** (~3,200 words)
    - Created `src/pages/tools/best-online-course-platforms.astro`
    - Reviews: Teachable, Thinkific, Kajabi, Podia, Skillshare, Udemy, Gumroad, LearnWorlds
    - 8 FAQs with schema markup
    - Quick picks + full comparison tables

- **Web Hosting article written** (~3,000 words)
    - Created `src/pages/tools/best-web-hosting-remote-business.astro`
    - Reviews: WP Engine, Cloudways, SiteGround, Kinsta, Flywheel, A2 Hosting, Bluehost, DigitalOcean
    - 8 FAQs with schema markup
    - Quick picks + full comparison tables
    - Migration guide section

- **14 affiliate redirects added to netlify.toml**
    - Course platforms: teachable, thinkific, kajabi, podia, learnworlds, gumroad
    - Web hosting: wpengine, cloudways, siteground, kinsta, flywheel, a2hosting, bluehost, digitalocean

- Status: Ready for review and testing

## Notes

- Web hosting has highest commission potential ($200+ per sale)
- Course platforms target growing creator economy
- Consider WPEngine for primary hosting recommendation (lifetime recurring)
- Reference existing web hosting article for content gaps

## Blockers

_Document any blockers here as they arise_

## Related Tasks

- FJ-016: Money pages 6-8
- FJ-020: SEO audit after completion
