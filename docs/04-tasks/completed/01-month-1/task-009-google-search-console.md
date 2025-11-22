---
task_id: "FJ-009"
title: "Set up Google Search Console"
category: "SEO"
priority: "P1"
status: "completed"
created_date: "2025-11-22"
due_date: "2025-11-28"
completed_date: "2025-11-22"
estimated_hours: 1
actual_hours: 0.5
assigned_to: "Team"
tags: ["seo", "analytics", "week-2", "setup", "google"]
---

# Task: Set up Google Search Console

## Overview

Configure Google Search Console (GSC) for floatjet.com to monitor search performance, submit sitemaps, and identify indexing issues. Essential for SEO tracking and optimization.

## Goals

- [x] Verify domain ownership in GSC
- [x] Submit XML sitemap
- [x] Configure basic settings
- [x] Verify indexing is working

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

- [x] 1.1 Access Google Search Console
    - Go to https://search.google.com/search-console
    - Sign in with Google account (use business email if available)

- [x] 1.2 Add property
    - Click "Add property"
    - Choose "Domain" type
    - Enter: floatjet.com

- [x] 1.3 Verify ownership
    - **Option A: DNS verification** (recommended)
      - Copy TXT record provided by Google
      - Add to Netlify DNS settings
      - Wait for propagation (up to 24 hours)
      - Click "Verify"

### Phase 2: Submit Sitemap (15 minutes)

- [x] 2.1 Verify sitemap exists
    - Astro auto-generates sitemap via @astrojs/sitemap
    - Verified: floatjet.com/sitemap-index.xml (35 URLs)

- [x] 2.2 Submit sitemap in GSC
    - Submitted sitemap-index.xml
    - Also submitted sitemap-0.xml directly
    - Note: Initial "Couldn't fetch" resolved after removing SPA fallback from netlify.toml

- [x] 2.3 Submit additional sitemaps (if applicable)
    - sitemap-index.xml submitted (points to sitemap-0.xml)

### Phase 3: Configure Settings (15 minutes)

- [x] 3.1 Set preferred domain
    - Netlify handles www/non-www redirects

- [x] 3.2 Review initial data
    - Homepage already indexed ("URL is on Google")
    - No critical errors

- [x] 3.3 Request indexing for key pages
    - Requested indexing for:
      - https://floatjet.com/tools/best-project-management-software/
      - https://floatjet.com/tools/best-vpn-digital-nomads/

### Phase 4: Set Up Monitoring (15 minutes)

- [x] 4.1 Enable email notifications
    - Enabled critical issues and coverage issues notifications

- [x] 4.2 Create bookmark
    - User to bookmark GSC dashboard

- [x] 4.3 Document setup
    - DNS verification method used
    - Sitemap submitted successfully

## Resources

- Google Search Console: https://search.google.com/search-console
- GSC Help: https://support.google.com/webmasters

## Acceptance Checklist

Before marking this task complete:

- [x] Domain verified
- [x] Sitemap submitted
- [x] No critical errors in Coverage report
- [x] Email notifications enabled
- [x] Ready for user review

## Progress Log

### 2025-11-22

- ⏳ Task created
- 📝 Subtasks defined
- ✅ Domain verified via DNS TXT record
- ✅ Sitemap submitted (sitemap-index.xml)
- ✅ Fixed: Removed unnecessary SPA fallback from netlify.toml
- ✅ Requested indexing for money pages
- ✅ Email notifications enabled
- ✅ Task completed

## Notes

**What GSC Provides:**

- Search queries driving traffic
- Click-through rates (CTR)
- Average position for keywords
- Indexing status
- Mobile usability issues
- Core Web Vitals
- Structured data validation

**Issue Encountered:**

- Sitemap initially showed "Couldn't fetch"
- Root cause: SPA fallback redirect in netlify.toml was unnecessary for Astro SSG
- Resolution: Removed SPA fallback, sitemap accessible

**Weekly GSC Tasks (Future):**

1. Check Coverage report for errors
2. Review top queries and pages
3. Submit new content for indexing
4. Monitor Core Web Vitals
5. Check for manual actions

## Related Tasks

- FJ-010: PostHog analytics
- SEO optimization tasks (future)
