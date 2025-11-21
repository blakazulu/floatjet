---
task_id: "FJ-010"
title: "Configure PostHog analytics"
category: "Analytics"
priority: "P1"
status: "not-started"
created_date: "2025-11-22"
due_date: "2025-11-30"
estimated_hours: 2
actual_hours: 0
assigned_to: "Team"
tags: ["analytics", "week-2", "setup", "posthog", "tracking"]
---

# Task: Configure PostHog Analytics

## Overview

Set up PostHog analytics for comprehensive user behavior tracking. PostHog provides event tracking, session recordings, and feature flags - essential for understanding how users interact with content and affiliate links.

## Goals

- [ ] Create PostHog account and project
- [ ] Install PostHog SDK in Astro
- [ ] Configure essential events
- [ ] Set up affiliate link click tracking
- [ ] Verify data is collecting

## Success Criteria

- ✅ PostHog project created
- ✅ SDK installed and initialized
- ✅ Page views tracking automatically
- ✅ Affiliate click events configured
- ✅ Session recordings enabled
- ✅ Data visible in PostHog dashboard

## Dependencies

**Blocked by:**

- FJ-001: Astro setup ✅

**Blocks:**

- None

**Related:**

- FJ-009: Google Search Console (complementary)
- FJ-008: Affiliate programs (track link clicks)

## Subtasks

### Phase 1: Account Setup (15 minutes)

- [ ] 1.1 Create PostHog account
    - Go to https://posthog.com
    - Sign up (free tier: 1M events/month)
    - Create organization: FloatJet

- [ ] 1.2 Create project
    - Project name: FloatJet Production
    - Region: US (or closest)
    - Note project API key

- [ ] 1.3 Note credentials
    - API Key (public, for frontend)
    - Project ID
    - Save securely

### Phase 2: Install SDK (30 minutes)

- [ ] 2.1 Install PostHog package
    ```bash
    npm install posthog-js
    ```

- [ ] 2.2 Create PostHog initialization script
    - Create `src/scripts/analytics.ts`
    ```typescript
    import posthog from 'posthog-js';

    const POSTHOG_KEY = import.meta.env.PUBLIC_POSTHOG_KEY;
    const POSTHOG_HOST = 'https://app.posthog.com';

    export function initAnalytics() {
      if (typeof window !== 'undefined' && POSTHOG_KEY) {
        posthog.init(POSTHOG_KEY, {
          api_host: POSTHOG_HOST,
          capture_pageview: true,
          capture_pageleave: true,
          autocapture: true,
        });
      }
    }

    export function trackEvent(event: string, properties?: Record<string, any>) {
      if (typeof window !== 'undefined') {
        posthog.capture(event, properties);
      }
    }
    ```

- [ ] 2.3 Add to BaseLayout
    - Import and call `initAnalytics()` in BaseLayout.astro
    - Use client-side script tag

- [ ] 2.4 Add environment variable
    - Add to `.env`: `PUBLIC_POSTHOG_KEY=phc_xxxxx`
    - Add to Netlify environment variables

### Phase 3: Configure Events (45 minutes)

- [ ] 3.1 Set up affiliate click tracking
    ```typescript
    // In affiliate button/link components
    function trackAffiliateClick(program: string, article: string) {
      trackEvent('affiliate_click', {
        program,
        article,
        position: 'cta-button', // or 'comparison-table', 'inline-link'
      });
    }
    ```

- [ ] 3.2 Add tracking to AffiliateButton component
    - Import trackEvent
    - Call on click before navigation

- [ ] 3.3 Set up article engagement tracking
    ```typescript
    // Track scroll depth
    trackEvent('article_scroll', {
      depth: '25%', // or '50%', '75%', '100%'
      article: '/tools/best-project-management-software',
    });

    // Track time on page
    trackEvent('article_read_time', {
      duration: 120, // seconds
      article: '/tools/best-project-management-software',
    });
    ```

- [ ] 3.4 Set up conversion tracking
    ```typescript
    // Track TOC clicks
    trackEvent('toc_click', {
      heading: 'notion-review',
      article: window.location.pathname,
    });

    // Track FAQ expansion
    trackEvent('faq_expand', {
      question: 'What is the best free PM software?',
    });
    ```

### Phase 4: Enable Features (15 minutes)

- [ ] 4.1 Enable session recordings
    - In PostHog dashboard → Settings → Session Recording
    - Enable for all users (or sample %)
    - Set retention period

- [ ] 4.2 Create key dashboards
    - Dashboard 1: Traffic Overview
      - Page views over time
      - Unique visitors
      - Top pages
    - Dashboard 2: Affiliate Performance
      - Affiliate clicks by program
      - Click-through rate by article
      - Conversion funnel

- [ ] 4.3 Set up alerts (optional)
    - Alert if traffic drops significantly
    - Alert on high error rates

### Phase 5: Verify & Test (15 minutes)

- [ ] 5.1 Test in development
    - Run dev server
    - Navigate through site
    - Check PostHog Live Events

- [ ] 5.2 Verify in production
    - Deploy to Netlify
    - Visit live site
    - Confirm events in PostHog

- [ ] 5.3 Test affiliate tracking
    - Click an affiliate link
    - Verify event captured
    - Check properties are correct

## Resources

- PostHog Docs: https://posthog.com/docs
- PostHog JS SDK: https://posthog.com/docs/libraries/js
- Astro Integration Guide: https://posthog.com/docs/libraries/astro

## Acceptance Checklist

Before marking this task complete:

- [ ] PostHog account created
- [ ] SDK installed and initialized
- [ ] Page views tracking
- [ ] Affiliate click tracking working
- [ ] Session recordings enabled
- [ ] Test events visible in dashboard
- [ ] Ready for user review

## Progress Log

### 2025-11-22

- ⏳ Task created
- 📝 Subtasks defined

## Notes

**PostHog Free Tier:**

- 1 million events/month
- 15,000 session recordings/month
- Unlimited team members
- 90-day data retention

**Key Events to Track:**

| Event | Description | Properties |
|-------|-------------|------------|
| `page_view` | Auto-captured | url, referrer |
| `affiliate_click` | Link clicked | program, article, position |
| `toc_click` | TOC navigation | heading, article |
| `faq_expand` | FAQ opened | question |
| `article_scroll` | Scroll milestone | depth, article |
| `search` | Site search | query |

**Privacy Considerations:**

- PostHog is privacy-friendly (can self-host)
- No PII collected by default
- Respects Do Not Track
- GDPR compliant

**Alternative: Plausible/Fathom**

If PostHog is too complex, consider:
- Plausible ($9/mo) - Simple, privacy-focused
- Fathom ($14/mo) - Simple analytics

## Related Tasks

- FJ-009: Google Search Console
- All content tasks (tracking performance)
