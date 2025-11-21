---
task_id: "FJ-009"
title: "Set up Google Search Console"
category: "SEO"
priority: "P1"
status: "not-started"
created_date: "2025-11-22"
due_date: "2025-11-28"
estimated_hours: 1
actual_hours: 0
assigned_to: "Team"
tags: ["seo", "analytics", "week-2", "setup", "google"]
---

# Task: Set up Google Search Console

## Overview

Configure Google Search Console (GSC) for floatjet.com to monitor search performance, submit sitemaps, and identify indexing issues. Essential for SEO tracking and optimization.

## Goals

- [ ] Verify domain ownership in GSC
- [ ] Submit XML sitemap
- [ ] Configure basic settings
- [ ] Verify indexing is working

## Success Criteria

- ✅ Domain verified in Google Search Console
- ✅ Sitemap submitted and processed
- ✅ No critical indexing errors
- ✅ Search performance data collecting

## Dependencies

**Blocked by:**

- FJ-001: Astro setup (site must be live) ✅

**Blocks:**

- None

**Related:**

- FJ-010: PostHog analytics (complementary tracking)

## Subtasks

### Phase 1: Domain Verification (15 minutes)

- [ ] 1.1 Access Google Search Console
    - Go to https://search.google.com/search-console
    - Sign in with Google account (use business email if available)

- [ ] 1.2 Add property
    - Click "Add property"
    - Choose "Domain" type
    - Enter: floatjet.com

- [ ] 1.3 Verify ownership
    - **Option A: DNS verification** (recommended)
      - Copy TXT record provided by Google
      - Add to Netlify DNS settings
      - Wait for propagation (up to 24 hours)
      - Click "Verify"
    - **Option B: HTML file** (alternative)
      - Download verification file
      - Add to `public/` folder
      - Deploy
      - Click "Verify"

### Phase 2: Submit Sitemap (15 minutes)

- [ ] 2.1 Verify sitemap exists
    - Astro should auto-generate sitemap
    - Check: floatjet.com/sitemap.xml
    - If missing, add `@astrojs/sitemap` integration

- [ ] 2.2 Submit sitemap in GSC
    - Go to "Sitemaps" in left sidebar
    - Enter: sitemap.xml
    - Click "Submit"
    - Verify status shows "Success"

- [ ] 2.3 Submit additional sitemaps (if applicable)
    - sitemap-index.xml (if using sitemap index)

### Phase 3: Configure Settings (15 minutes)

- [ ] 3.1 Set preferred domain
    - Ensure both www and non-www are handled
    - Netlify should handle redirects

- [ ] 3.2 Review initial data
    - Check "Coverage" report
    - Note any errors or warnings
    - Check "Enhancements" for structured data status

- [ ] 3.3 Request indexing for key pages
    - Go to URL Inspection tool
    - Enter homepage URL
    - Click "Request Indexing"
    - Repeat for any live articles

### Phase 4: Set Up Monitoring (15 minutes)

- [ ] 4.1 Enable email notifications
    - Settings → Email preferences
    - Enable notifications for:
      - Critical issues
      - New messages
      - Coverage issues

- [ ] 4.2 Create bookmark
    - Add GSC dashboard to browser bookmarks
    - Schedule weekly check-in

- [ ] 4.3 Document setup
    - Note which Google account is connected
    - Save verification method used
    - Document any issues encountered

## Resources

- Google Search Console: https://search.google.com/search-console
- GSC Help: https://support.google.com/webmasters

## Acceptance Checklist

Before marking this task complete:

- [ ] Domain verified
- [ ] Sitemap submitted
- [ ] No critical errors in Coverage report
- [ ] Email notifications enabled
- [ ] Ready for user review

## Progress Log

### 2025-11-22

- ⏳ Task created
- 📝 Subtasks defined

## Notes

**What GSC Provides:**

- Search queries driving traffic
- Click-through rates (CTR)
- Average position for keywords
- Indexing status
- Mobile usability issues
- Core Web Vitals
- Structured data validation

**Common Issues:**

- **DNS verification delay**: Can take 24-48 hours
- **Sitemap not found**: Check Astro sitemap config
- **Indexing slow**: Normal for new sites, be patient
- **Soft 404s**: Check for empty pages

**Weekly GSC Tasks (Future):**

1. Check Coverage report for errors
2. Review top queries and pages
3. Submit new content for indexing
4. Monitor Core Web Vitals
5. Check for manual actions

## Related Tasks

- FJ-010: PostHog analytics
- SEO optimization tasks (future)
