---
task_id: "FJ-008"
title: "Join first 3 affiliate programs"
category: "Affiliates"
priority: "P1"
status: "not-started"
created_date: "2025-11-22"
due_date: "2025-12-01"
estimated_hours: 2
actual_hours: 0
assigned_to: "Team"
tags: ["affiliates", "week-2", "revenue", "setup"]
---

# Task: Join First 3 Affiliate Programs

## Overview

Apply to and get approved for the first 3 priority affiliate programs. These will provide the affiliate links needed for money pages. Focus on Tier 1 programs with recurring commissions.

## Goals

- [ ] Apply to 3 high-priority affiliate programs
- [ ] Get approved for at least 2 programs
- [ ] Set up affiliate link redirects
- [ ] Test all affiliate links

## Success Criteria

- ✅ Applied to Impact Radius (Notion)
- ✅ Applied to PartnerStack (ClickUp)
- ✅ Applied to NordVPN affiliate program
- ✅ At least 2 approvals received
- ✅ Affiliate links configured in Netlify redirects
- ✅ Links tested and working

## Dependencies

**Blocked by:**

- FJ-006 or FJ-007: Need live content for applications (soft dependency)

**Blocks:**

- None (can use placeholder links in articles until approved)

**Related:**

- FJ-006: PM Software article (uses Notion, ClickUp links)
- FJ-007: VPN article (uses NordVPN links)

## Subtasks

### Phase 1: Prepare Applications (0.5 hours)

- [ ] 1.1 Gather required information
    - Website URL: floatjet.com
    - Traffic estimates (if asked)
    - Content niche description
    - Promotion methods

- [ ] 1.2 Prepare tax documents
    - W-9 (US) or W-8BEN (International)
    - Have ready for upload

- [ ] 1.3 Ensure site is ready
    - Affiliate disclosure in footer ✅
    - About page exists
    - Contact information visible
    - Content published (or in progress)

### Phase 2: Apply to Programs (1 hour)

- [ ] 2.1 Apply to Impact Radius (Notion)
    - URL: https://impact.com/
    - Search for Notion affiliate program
    - Complete application form
    - Note application date
    - Expected approval: 3-7 days

- [ ] 2.2 Apply to PartnerStack (ClickUp)
    - URL: https://partnerstack.com/
    - Search for ClickUp partner program
    - Complete application form
    - Note application date
    - Expected approval: 2-5 days

- [ ] 2.3 Apply to NordVPN Affiliate Program
    - URL: https://nordvpn.com/affiliate/
    - Complete application form
    - Describe content plans
    - Note application date
    - Expected approval: 1-3 days

### Phase 3: Configure Redirects (0.5 hours)

- [ ] 3.1 Set up Netlify redirects
    - Add to `netlify.toml`:
    ```toml
    [[redirects]]
      from = "/go/notion"
      to = "https://notion.so" # Update with actual affiliate URL
      status = 301

    [[redirects]]
      from = "/go/clickup"
      to = "https://clickup.com" # Update with actual affiliate URL
      status = 301

    [[redirects]]
      from = "/go/nordvpn"
      to = "https://nordvpn.com" # Update with actual affiliate URL
      status = 301
    ```

- [ ] 3.2 Test redirect URLs
    - Visit floatjet.com/go/notion
    - Visit floatjet.com/go/clickup
    - Visit floatjet.com/go/nordvpn
    - Verify redirects work

- [ ] 3.3 Update redirects with actual affiliate links
    - Once approved, get unique affiliate URLs
    - Update netlify.toml with real links
    - Redeploy

### Phase 4: Track & Document (0 hours - ongoing)

- [ ] 4.1 Update affiliate tracker
    - Mark programs as "Applied" in `/docs/02-content/affiliate-programs.md`
    - Add application dates
    - Update status when approved

- [ ] 4.2 Save affiliate credentials
    - Store login info securely
    - Note affiliate IDs
    - Bookmark dashboards

## Resources

- Affiliate Programs: `/docs/02-content/affiliate-programs.md` (full details)
- Application requirements per program documented there

## Acceptance Checklist

Before marking this task complete:

- [ ] Applied to all 3 programs
- [ ] At least 2 programs approved
- [ ] Netlify redirects configured
- [ ] Affiliate links tested
- [ ] Affiliate tracker updated
- [ ] Ready for user review

## Progress Log

### 2025-11-22

- ⏳ Task created
- 📝 Subtasks defined

## Notes

**Priority Programs (Week 2):**

| Program | Network | Commission | Cookie |
|---------|---------|------------|--------|
| Notion | Impact Radius | $100-500/sale | 30 days |
| ClickUp | PartnerStack | $50-200 + 20% recurring | 90 days |
| NordVPN | Direct | 30-40% ($50-100) | 30 days |

**Application Tips:**

- Mention focus on remote work/productivity niche
- Highlight quality over quantity approach
- Note plans for comprehensive review content
- Be honest about traffic (new site is fine)

**If Rejected:**

- Wait 30 days and reapply
- Build more content first
- Try alternative programs:
  - Notion: Try direct outreach
  - ClickUp: Try Monday.com instead
  - NordVPN: Try Surfshark or ExpressVPN

**Placeholder Links:**

Until approved, articles can use:
- `/go/notion` → notion.so (non-affiliate)
- `/go/clickup` → clickup.com (non-affiliate)
- `/go/nordvpn` → nordvpn.com (non-affiliate)

Update to affiliate links once approved.

## Related Tasks

- FJ-006: PM Software article (needs Notion, ClickUp links)
- FJ-007: VPN article (needs NordVPN links)
