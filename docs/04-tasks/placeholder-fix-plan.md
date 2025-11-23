# Placeholder Pages Fix Plan

**Created:** 2025-11-23
**Status:** Planning
**Total Placeholders:** 28 pages

---

## Executive Summary

The site currently has 28 pages displaying "Coming soon..." placeholders. This document outlines a prioritized remediation plan to ensure all pages have proper content before launch.

### Current State
- **Complete pages:** 18 (39%)
- **Placeholder pages:** 28 (61%)
- **Total pages:** 46

---

## Priority 1: Legal & Trust Pages (Critical)

**Must complete before launch.** These pages affect legal compliance and user trust.

| Page | URL | Action | Est. Hours | Status |
|------|-----|--------|------------|--------|
| Privacy Policy | `/privacy` | Write GDPR/CCPA compliant privacy policy | 2h | [ ] Not Started |
| Terms of Service | `/terms` | Write terms of service | 2h | [ ] Not Started |
| About Us | `/about` | Write about page with mission, team story | 1h | [ ] Not Started |
| Contact | `/contact` | Add contact form or email address | 1h | [ ] Not Started |

**Total estimated:** 6 hours

### Content Requirements

#### Privacy Policy (`/privacy`)
- Data collection practices
- Cookie usage
- Third-party services (analytics, affiliate tracking)
- User rights (GDPR: access, deletion, portability)
- Contact information for privacy inquiries

#### Terms of Service (`/terms`)
- Affiliate disclosure
- Limitation of liability
- Intellectual property
- User conduct
- Dispute resolution

#### About Us (`/about`)
- Mission statement
- Who we help (remote workers, digital nomads)
- Editorial standards
- Affiliate relationship transparency
- Team/founder story (optional)

#### Contact (`/contact`)
- Contact email
- Response time expectations
- Social media links
- Optional: contact form

---

## Priority 2: Hub/Landing Pages (High)

**Convert placeholders to functional category landing pages.** These pages should showcase existing content.

| Page | URL | Action | Est. Hours | Status |
|------|-----|--------|------------|--------|
| Tools Hub | `/tools` | Create grid linking to 10 tool articles | 2h | [ ] Not Started |
| Gear Hub | `/gear` | Create grid linking to 2 gear articles | 1h | [ ] Not Started |
| Guides Hub | `/guides` | Create grid linking to 5 guide articles | 1.5h | [ ] Not Started |
| Deals | `/deals` | Create deals page or remove from navigation | 1h | [ ] Not Started |

**Total estimated:** 5.5 hours

### Implementation Notes

#### Tools Hub (`/tools`)
Link to existing articles:
- Best Project Management Software
- Best VPN for Digital Nomads
- Best Email Marketing Tools
- Best Password Manager
- Best Laptops for Remote Work
- Best Web Hosting
- Best Time Tracking Software
- Best Online Course Platforms
- Best Productivity Apps

#### Gear Hub (`/gear`)
Link to existing articles:
- Best Standing Desks
- Best Noise-Canceling Headphones

#### Guides Hub (`/guides`)
Link to existing articles:
- Async Communication Guide
- Managing Time Zones
- VPN Public WiFi Security Guide
- Ultimate Home Office Setup
- Tax Tips for Remote Workers

#### Deals (`/deals`)
Options:
1. Create curated deals page with current promotions
2. Remove from navigation until content is ready
3. Redirect to homepage

---

## Priority 3: Category Sub-pages (Medium)

**Create filtered category views** linking to relevant content.

| Page | URL | Action | Est. Hours | Status |
|------|-----|--------|------------|--------|
| VPN Tools | `/tools/vpn` | Link to VPN article, add VPN comparison | 1h | [ ] Not Started |
| SaaS Tools | `/tools/saas` | Link to PM, email, time tracking articles | 1h | [ ] Not Started |
| Hosting | `/tools/hosting` | Link to web hosting article | 0.5h | [ ] Not Started |
| Finance | `/tools/finance` | Create placeholder with future plans or remove | 0.5h | [ ] Not Started |
| Travel Guides | `/guides/travel` | Link to travel-related content | 0.5h | [ ] Not Started |

**Total estimated:** 3.5 hours

---

## Priority 4: Blog Article Placeholders (Lower)

### 4A: Duplicate Stubs (Delete or Redirect)

These blog placeholders have equivalent content in `/tools/`. **Recommended: Delete these files.**

| Placeholder | Equivalent Exists | Action |
|-------------|-------------------|--------|
| `/blog/best-laptops-remote-work` | `/tools/best-laptops-remote-work` | DELETE |
| `/blog/best-vpns-digital-nomads` | `/tools/best-vpn-digital-nomads` | DELETE |
| `/blog/best-web-hosting-remote-businesses` | `/tools/best-web-hosting-remote-business` | DELETE |
| `/blog/best-project-management-tools` | `/tools/best-project-management-software` | DELETE |

**Files to delete:**
```
src/pages/blog/best-laptops-remote-work.astro
src/pages/blog/best-vpns-digital-nomads.astro
src/pages/blog/best-web-hosting-remote-businesses.astro
src/pages/blog/best-project-management-tools.astro
```

### 4B: Unique Blog Stubs (Write Content or Delete)

These have no equivalent. Decide: write content or delete.

| Placeholder | URL | Recommendation |
|-------------|-----|----------------|
| Best Team Communication Tools | `/blog/best-team-communication-tools` | Write (money page potential) |
| Best CRM Software | `/blog/best-crm-software-small-business` | Write (money page potential) |
| Best Travel Insurance | `/blog/best-travel-insurance-remote-workers` | Write (money page potential) |
| Best Banking Digital Nomads | `/blog/best-banking-digital-nomads` | Write (money page potential) |
| Crypto-Friendly Banks | `/blog/crypto-friendly-banks` | Delete (niche, low priority) |
| VPN Speed Comparison | `/blog/vpn-speed-comparison` | Write (supports VPN article) |
| Cloud vs Traditional Hosting | `/blog/cloud-vs-traditional-hosting` | Write (supports hosting article) |
| Managed WordPress Hosting | `/blog/managed-wordpress-hosting-compared` | Write (supports hosting article) |
| Find Reliable WiFi | `/blog/find-reliable-wifi-anywhere` | Write (practical guide) |
| Essential Travel Tech | `/blog/essential-travel-tech-nomads` | Write (gear roundup) |
| Top Destinations Digital Nomads | `/blog/top-destinations-digital-nomads` | Write (traffic builder) |

**Recommended deletions (low priority topics):**
- `crypto-friendly-banks.astro`

**Recommended to write (11 articles):**
All others - these support the content strategy.

---

## Recommended Action Plan

### Phase 1: Pre-Launch Critical (Week 1)
1. [ ] Write Privacy Policy
2. [ ] Write Terms of Service
3. [ ] Write About Us page
4. [ ] Create Contact page
5. [ ] Delete 4 duplicate blog stubs

**Estimated time:** 7 hours

### Phase 2: Hub Pages (Week 2)
1. [ ] Build Tools Hub with article grid
2. [ ] Build Gear Hub with article grid
3. [ ] Build Guides Hub with article grid
4. [ ] Decide on Deals page (build or remove)

**Estimated time:** 5.5 hours

### Phase 3: Category Pages (Week 2-3)
1. [ ] Build VPN category page
2. [ ] Build SaaS category page
3. [ ] Build Hosting category page
4. [ ] Build Finance category page (or remove)
5. [ ] Build Travel Guides page

**Estimated time:** 3.5 hours

### Phase 4: Blog Content (Ongoing)
Write remaining 11 blog articles as part of content calendar.

**Estimated time:** 20-40 hours (depending on article depth)

---

## Files Reference

### Placeholder Files (28 total)

**Main Pages (8):**
```
src/pages/about.astro
src/pages/contact.astro
src/pages/privacy.astro
src/pages/terms.astro
src/pages/tools.astro
src/pages/gear.astro
src/pages/guides.astro
src/pages/deals.astro
```

**Category Pages (5):**
```
src/pages/tools/vpn.astro
src/pages/tools/saas.astro
src/pages/tools/hosting.astro
src/pages/tools/finance.astro
src/pages/guides/travel.astro
```

**Blog Placeholders (15):**
```
src/pages/blog/best-project-management-tools.astro
src/pages/blog/best-laptops-remote-work.astro
src/pages/blog/best-vpns-digital-nomads.astro
src/pages/blog/best-web-hosting-remote-businesses.astro
src/pages/blog/best-team-communication-tools.astro
src/pages/blog/best-crm-software-small-business.astro
src/pages/blog/best-travel-insurance-remote-workers.astro
src/pages/blog/best-banking-digital-nomads.astro
src/pages/blog/crypto-friendly-banks.astro
src/pages/blog/vpn-speed-comparison.astro
src/pages/blog/cloud-vs-traditional-hosting.astro
src/pages/blog/managed-wordpress-hosting-compared.astro
src/pages/blog/find-reliable-wifi-anywhere.astro
src/pages/blog/essential-travel-tech-nomads.astro
src/pages/blog/top-destinations-digital-nomads.astro
```

---

## Progress Log

| Date | Action | Notes |
|------|--------|-------|
| 2025-11-23 | Created fix plan | Identified 28 placeholder pages |

---

## Notes

- All hub pages should use consistent card grid layout
- Consider adding "More coming soon" sections for future content
- Ensure all pages have proper meta descriptions
- Internal linking strategy: hub pages should link to articles, articles should link back to hubs
