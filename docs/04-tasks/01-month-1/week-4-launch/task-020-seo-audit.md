---
task_id: "FJ-020"
title: "Comprehensive SEO Audit"
category: "SEO"
priority: "P0"
status: "not-started"
created_date: "2024-11-23"
due_date: "2024-12-16"
estimated_hours: 3
actual_hours: 0
assigned_to: "Team"
tags: ["seo", "audit", "launch", "week-4"]
---

# Task: Comprehensive SEO Audit

## Overview

Conduct a thorough SEO audit of all 20 articles and site infrastructure before official launch. Identify and fix any issues that could impact search rankings, user experience, or conversion rates.

## Goals

- [ ] Audit all 20 articles against SEO checklist
- [ ] Verify technical SEO implementation
- [ ] Fix all critical issues before launch
- [ ] Document any non-critical issues for future improvement

## Success Criteria

- ✅ 100% pass rate on critical SEO checklist items
- ✅ All pages achieve Lighthouse SEO score >95
- ✅ No broken links or images
- ✅ Schema.org markup validated
- ✅ XML sitemap accurate and submitted
- ✅ robots.txt properly configured

## Dependencies

**Blocked by:**

- FJ-016: Money pages 6-8
- FJ-017: Money pages 9-10
- FJ-018: Supporting content batch 2
- FJ-019: SEO traffic builders

**Blocks:**

- FJ-021: Launch announcement (cannot launch with SEO issues)

**Related:**

- FJ-009: Google Search Console (verification)
- FJ-010: Analytics setup

## Subtasks

### Phase 1: Content SEO Audit (1.5 hours)

- [ ] 1.1 Audit all money pages (10 articles)
    For each article verify:
    - [ ] Title tag (50-60 chars, includes keyword)
    - [ ] Meta description (150-160 chars, compelling)
    - [ ] H1 tag (one per page, includes keyword)
    - [ ] Heading hierarchy (H1 → H2 → H3)
    - [ ] Keyword usage (natural, not stuffed)
    - [ ] Internal links (2-5 per article)
    - [ ] External links (authoritative sources)
    - [ ] Image alt text (descriptive, keyword where relevant)
    - [ ] Affiliate disclosure present
    - [ ] Schema markup implemented

- [ ] 1.2 Audit all supporting content (10 articles)
    Same checklist as money pages

- [ ] 1.3 Document all issues found
    Create spreadsheet or list of fixes needed

### Phase 2: Technical SEO Audit (1 hour)

- [ ] 2.1 Site-wide technical checks
    - [ ] XML sitemap exists and is accurate
    - [ ] robots.txt allows important pages
    - [ ] robots.txt allows AI crawlers
    - [ ] Canonical URLs set correctly
    - [ ] No duplicate content issues
    - [ ] HTTPS working on all pages
    - [ ] Mobile-friendly (responsive)
    - [ ] Page speed acceptable (<3s load)

- [ ] 2.2 Run Lighthouse audits
    - [ ] Run on homepage
    - [ ] Run on 3 money pages (sample)
    - [ ] Run on 2 supporting articles (sample)
    - [ ] Document scores and issues

- [ ] 2.3 Check Google Search Console
    - [ ] Verify no crawl errors
    - [ ] Check coverage report
    - [ ] Review any manual actions
    - [ ] Verify sitemap submitted

- [ ] 2.4 Validate Schema markup
    - [ ] Test with Google Rich Results Test
    - [ ] Test with Schema.org validator
    - [ ] Fix any validation errors

### Phase 3: Link & Asset Audit (0.5 hours)

- [ ] 3.1 Check all internal links
    - [ ] No broken internal links
    - [ ] Orphan pages identified
    - [ ] Link structure makes sense

- [ ] 3.2 Check all external links
    - [ ] No broken external links
    - [ ] Links open in new tab where appropriate
    - [ ] Affiliate links working

- [ ] 3.3 Check all images
    - [ ] No broken images
    - [ ] All images have alt text
    - [ ] Images properly optimized

- [ ] 3.4 Fix all critical issues
    - [ ] Broken links fixed
    - [ ] Missing meta tags added
    - [ ] Schema errors resolved

## Resources

- SEO Checklist: `/docs/02-content/content-guidelines.md` (lines 299-365)
- Technical SEO: `/docs/01-planning/prd.md`
- Google Search Console: https://search.google.com/search-console
- Lighthouse: Chrome DevTools
- Schema Validator: https://validator.schema.org/
- Rich Results Test: https://search.google.com/test/rich-results

## Acceptance Checklist

Before marking this task complete:

- [ ] All 20 articles pass SEO checklist
- [ ] No critical technical issues
- [ ] Lighthouse scores documented
- [ ] Schema markup validated
- [ ] All broken links fixed
- [ ] Sitemap submitted to Google
- [ ] Audit report documented

## Progress Log

### 2024-11-23 - 0 hours

- ⏳ Task created
- 📝 Subtasks defined

## Notes

- Prioritize fixing critical issues over minor improvements
- Document non-critical issues for future sprints
- Consider creating SEO audit template for ongoing use
- This is a launch blocker - must be complete before FJ-021

## Blockers

_Document any blockers here as they arise_

## Related Tasks

- FJ-009: Google Search Console setup
- FJ-021: Launch announcement (blocked by this)
