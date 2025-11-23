# Placeholder Pages Fix Plan

**Created:** 2025-11-23
**Last Updated:** 2025-11-23
**Status:** In Progress
**Total Placeholders:** 20 pages (was 28)

---

## Executive Summary

This document tracks placeholder pages and their resolution. Phase 1 (Legal/Trust pages) is complete.

### Current State
- **Complete pages:** 26 (57%)
- **Placeholder pages:** 20 (43%)
- **Total pages:** 46

---

## Phase 1: Legal & Trust Pages - COMPLETED

| Page | URL | Status |
|------|-----|--------|
| Privacy Policy | `/privacy` | [x] Complete |
| Terms of Service | `/terms` | [x] Complete |
| About Us | `/about` | [x] Complete |
| Contact | `/contact` | [x] Complete |
| Delete 4 duplicate blog stubs | - | [x] Complete |

---

## Phase 2: Hub/Landing Pages (Next Up)

**Convert placeholders to functional category landing pages.**

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

## Phase 3: Category Sub-pages

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

## Phase 4: Blog Article Placeholders

### Remaining Blog Stubs (11 articles)

| Placeholder | URL | Recommendation | Status |
|-------------|-----|----------------|--------|
| Best Team Communication Tools | `/blog/best-team-communication-tools` | Write (money page) | [ ] |
| Best CRM Software | `/blog/best-crm-software-small-business` | Write (money page) | [ ] |
| Best Travel Insurance | `/blog/best-travel-insurance-remote-workers` | Write (money page) | [ ] |
| Best Banking Digital Nomads | `/blog/best-banking-digital-nomads` | Write (money page) | [ ] |
| Crypto-Friendly Banks | `/blog/crypto-friendly-banks` | Delete (low priority) | [ ] |
| VPN Speed Comparison | `/blog/vpn-speed-comparison` | Write (supports VPN) | [ ] |
| Cloud vs Traditional Hosting | `/blog/cloud-vs-traditional-hosting` | Write (supports hosting) | [ ] |
| Managed WordPress Hosting | `/blog/managed-wordpress-hosting-compared` | Write (supports hosting) | [ ] |
| Find Reliable WiFi | `/blog/find-reliable-wifi-anywhere` | Write (practical guide) | [ ] |
| Essential Travel Tech | `/blog/essential-travel-tech-nomads` | Write (gear roundup) | [ ] |
| Top Destinations Digital Nomads | `/blog/top-destinations-digital-nomads` | Write (traffic builder) | [ ] |

**Estimated time:** 20-40 hours (depending on article depth)

---

## Remaining Placeholder Files (20 total)

### Hub Pages (4):
```
src/pages/tools.astro
src/pages/gear.astro
src/pages/guides.astro
src/pages/deals.astro
```

### Category Pages (5):
```
src/pages/tools/vpn.astro
src/pages/tools/saas.astro
src/pages/tools/hosting.astro
src/pages/tools/finance.astro
src/pages/guides/travel.astro
```

### Blog Placeholders (11):
```
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
| 2025-11-23 | Completed Phase 1 | Privacy, Terms, About, Contact pages done. Deleted 4 duplicate blog stubs. Reduced to 20 placeholders. |

---

## Notes

- All hub pages should use consistent card grid layout
- Consider adding "More coming soon" sections for future content
- Ensure all pages have proper meta descriptions
- Internal linking strategy: hub pages should link to articles, articles should link back to hubs
- Use `pt-24 md:pt-28` for top padding to account for fixed navbar
