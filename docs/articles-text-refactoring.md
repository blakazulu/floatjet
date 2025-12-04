# Article Voice Rewriting Project

**Goal:** Rewrite all 102 articles to match each writer's distinct voice style

## Scope

1. **All 102 articles:** Voice-matched intro paragraphs
2. **Top 15 money articles:** Full voice rewrite

## Process

### For Each Article:

1. Read article content
2. Identify assigned writer (from `authorSlug`)
3. Apply writer's voice from `docs/writers/writers-summery.md`
4. Follow humanization rules from `docs/writing_style_guide.md`
5. Run through ZeroGPT API (`scripts/zerogpt-detect.js`) - target ≤8%
6. Update article file
7. Update `docs/writing_style_guide.md` with learnings
8. Mark article as complete in tracking table below

---

## Writer Voice Quick Reference

### Marcus Chen (43 articles) - Technical/Data-Driven

- Short sentences (12-18 words avg)
- Specific numbers: "47 browser tabs", "8.2 hours"
- Dry humor: "It just... works?"
- "This is what's on my desk right now"
- "The specs claim X, but in practice..."

### Sarah Mitchell (28 articles) - Warm/Empathetic

- Medium sentences (15-22 words)
- Personal failure stories
- Anti-hustle messaging
- "I've seen teams try this. Here's what actually worked..."
- "After my back injury..."

### Daniel Brooks (31 articles) - Story-Driven/Location-Specific

- Story openings: "So there I was in [city]..."
- Specific dollar amounts: "$4,200 mistake"
- Location-dropping: Bali, Lisbon, Chiang Mai
- "I learned this the expensive way"
- CPA disclaimer on tax/legal content

---

## Top 15 Money Articles (Full Rewrite)

| #   | Article                                                         | Writer         | Category            | Status      |
| --- | --------------------------------------------------------------- | -------------- | ------------------- | ----------- |
| 039 | Best Standing Desks for Home Office (2025)                      | Sarah Mitchell | Gear/Furniture      | not started |
| 086 | Best Productivity Apps for Remote Workers (2025)                | Marcus Chen    | Tools/SaaS          | not started |
| 087 | Best Project Management Software for Remote Teams (2025)        | Marcus Chen    | Tools/SaaS          | not started |
| 082 | Best Email Marketing Tools for Creators & Small Business (2025) | Marcus Chen    | Tools/SaaS          | not started |
| 084 | Best Online Course Platforms for Creators (2025)                | Marcus Chen    | Tools/SaaS          | not started |
| 078 | Best VPS Hosting for Remote Businesses (2025)                   | Marcus Chen    | Tools/Hosting       | not started |
| 080 | Best E-commerce Hosting for Remote Entrepreneurs (2025)         | Marcus Chen    | Tools/Hosting       | not started |
| 089 | Best Video Conferencing Tools for Remote Teams (2025)           | Marcus Chen    | Tools/SaaS          | not started |
| 019 | Best Portable Chargers & Power Banks for Travel (2025)          | Marcus Chen    | Gear/Accessories    | not started |
| 036 | Best Ergonomic Chairs for Home Office (2025)                    | Sarah Mitchell | Gear/Furniture      | not started |
| 092 | Best VPNs for Digital Nomads & Remote Workers (2025)            | Daniel Brooks  | Tools/VPN           | not started |
| 102 | How Many Monitors Do You Actually Need? Honest Answer (2025)    | Marcus Chen    | Guides/Setup        | not started |
| 073 | Best Accounting Software for Freelancers in 2025                | Daniel Brooks  | Tools/Finance       | not started |
| 054 | Pomodoro Technique for Remote Workers: Complete Guide (2025)    | Sarah Mitchell | Guides/Productivity | not started |
| 046 | How to Set Up Retirement Savings as a Freelancer (2025)         | Daniel Brooks  | Guides/Finance      | not started |

---

## All Articles Tracking

### Daniel Brooks Articles (31)

| #   | Name                                                                 | Sub-Category | Category | Link                                            | Word Count | Voice Intro | Status      |
| --- | -------------------------------------------------------------------- | ------------ | -------- | ----------------------------------------------- | ---------- | ----------- | ----------- |
| 003 | Best Banking for Digital Nomads: Multi-Currency Accounts (2025)      | Finance      | Blog     | /blog/best-banking-digital-nomads               | 700        | false       | not started |
| 004 | Crypto-Friendly Banks for Remote Workers (2025)                      | Finance      | Blog     | /blog/crypto-friendly-banks                     | 600        | false       | not started |
| 005 | Remote Work Taxes: The No-BS Guide (2025)                            | Finance      | Blog     | /blog/tax-tips-remote-workers                   | 800        | false       | not started |
| 010 | 500 Speed Tests Later, Here's What Actually Happened                 | Security     | Blog     | /blog/vpn-speed-comparison                      | 600        | false       | not started |
| 011 | Someone's Watching You Work Right Now (Probably)                     | Security     | Blog     | /blog/vpn-public-wifi-guide                     | 800        | false       | not started |
| 014 | Essential Travel Tech for Digital Nomads (2025)                      | Travel       | Blog     | /blog/essential-travel-tech-nomads              | 1450       | false       | not started |
| 015 | Best Travel Insurance for Remote Workers & Digital Nomads (2025)     | Travel       | Blog     | /blog/best-travel-insurance-remote-workers      | 1420       | false       | not started |
| 016 | Top 10 Destinations for Digital Nomads (2025)                        | Travel       | Blog     | /blog/top-destinations-digital-nomads           | 2100       | false       | not started |
| 017 | Best Laptop Bags & Backpacks for Digital Nomads (2025)               | Accessories  | Gear     | /gear/best-laptop-bags-backpacks                | 1850       | false       | not started |
| 021 | Best Travel Adapters for International Nomads (2025)                 | Accessories  | Gear     | /gear/best-travel-adapters                      | 1542       | false       | not started |
| 045 | Invoice Payment Terms: Net 30 vs Net 15 vs Due on Receipt (2025)     | Finance      | Guides   | /guides/invoice-payment-terms-guide             | 1620       | false       | not started |
| 046 | How to Set Up Retirement Savings as a Freelancer (2025)              | Finance      | Guides   | /guides/retirement-savings-freelancer           | 2551       | false       | not started |
| 047 | Freelancer Tax Deductions: Complete Guide (2025)                     | Finance      | Guides   | /guides/freelancer-tax-deductions-guide         | 2238       | false       | not started |
| 048 | Multi-Currency Banking for Digital Nomads (2025)                     | Finance      | Guides   | /guides/multi-currency-banking-nomads           | 2038       | false       | not started |
| 055 | Phishing Scams: How Remote Workers Can Stay Safe                     | Security     | Guides   | /guides/phishing-scams-remote-workers           | 1481       | false       | not started |
| 056 | Two-Factor Authentication Setup Guide for Remote Workers (2025)      | Security     | Guides   | /guides/two-factor-authentication-guide         | 1431       | false       | not started |
| 057 | Do I Need a VPN When Working from Cafes?                             | Security     | Guides   | /guides/do-i-need-vpn-cafes                     | 1548       | false       | not started |
| 058 | How to Secure Your Home WiFi Network for Remote Work (2025)          | Security     | Guides   | /guides/secure-home-wifi-network                | 1889       | false       | not started |
| 059 | VPN vs Proxy: Which is Better for Remote Work?                       | Security     | Guides   | /guides/vpn-vs-proxy-remote-work                | 1623       | false       | not started |
| 065 | Can You Work Remotely from Another Country? A Legal Guide            | Travel       | Guides   | /guides/can-you-work-remotely-another-country   | 1300       | false       | not started |
| 067 | Best Coworking Spaces in Lisbon 2025: A Digital Nomad's Guide        | Travel       | Guides   | /guides/best-coworking-spaces-lisbon            | 1712       | false       | not started |
| 068 | Spain Digital Nomad Visa Guide 2025: Requirements & Application      | Travel       | Guides   | /guides/digital-nomad-visa-spain                | 1746       | false       | not started |
| 069 | Portugal Digital Nomad Visa Guide 2025: Requirements & Application   | Travel       | Guides   | /guides/digital-nomad-visa-portugal             | 1813       | false       | not started |
| 070 | Best Expense Tracking Apps for Digital Nomads in 2025                | Finance      | Tools    | /tools/best-expense-tracking-apps               | 1775       | false       | not started |
| 071 | Wise vs PayPal vs Payoneer: Which Is Best for Remote Workers? (2025) | Finance      | Tools    | /tools/wise-vs-paypal-vs-payoneer               | 850        | false       | not started |
| 072 | How to Accept International Payments (Without Losing 5% to Fees)     | Finance      | Tools    | /tools/accept-international-payments-freelancer | 939        | false       | not started |
| 073 | Best Accounting Software for Freelancers in 2025: Complete Guide     | Finance      | Tools    | /tools/best-accounting-software-freelancers     | 2327       | false       | not started |
| 074 | Best Invoicing Tools for Remote Professionals in 2025                | Finance      | Tools    | /tools/best-invoicing-tools                     | 1530       | false       | not started |
| 092 | Best VPNs for Digital Nomads & Remote Workers (2025)                 | VPN          | Tools    | /tools/best-vpn-digital-nomads                  | 1743       | false       | not started |
| 093 | Best VPN for Streaming While Traveling (2025)                        | VPN          | Tools    | /tools/best-vpn-streaming-travel                | 1450       | false       | not started |
| 094 | Best Business VPN Solutions for Remote Teams (2025)                  | VPN          | Tools    | /tools/best-business-vpn-remote-teams           | 1550       | false       | not started |
| 095 | Free VPN vs Paid VPN: What Remote Workers Need to Know (2025)        | VPN          | Tools    | /tools/free-vpn-vs-paid-vpn                     | 1400       | false       | not started |
| 096 | How to Set Up a VPN on All Your Devices (2025)                       | VPN          | Tools    | /tools/how-to-setup-vpn-all-devices             | 1200       | false       | not started |
| 097 | VPN Kill Switch Explained: Why Remote Workers Need It (2025)         | VPN          | Tools    | /tools/vpn-kill-switch-explained                | 600        | false       | not started |
| 098 | Can You Write Off Home Office Equipment? Tax Deduction Guide (2025)  | Finance      | Guides   | /guides/can-you-write-off-home-office-equipment | 2200       | false       | not started |
| 099 | Do I Really Need a Password Manager? Honest Answer (2025)            | Security     | Guides   | /guides/do-i-really-need-password-manager       | 2000       | false       | not started |

### Marcus Chen Articles (43)

| #   | Name                                                                       | Sub-Category  | Category | Link                                           | Word Count | Voice Intro | Status      |
| --- | -------------------------------------------------------------------------- | ------------- | -------- | ---------------------------------------------- | ---------- | ----------- | ----------- |
| 001 | Best Team Communication Tools for Remote Work (2025)                       | Communication | Blog     | /blog/best-team-communication-tools            | 650        | false       | not started |
| 006 | Cloud vs Traditional Hosting: What Actually Matters (2025)                 | Hosting       | Blog     | /blog/cloud-vs-traditional-hosting             | 750        | false       | not started |
| 007 | Managed WordPress Hosting: Who's Actually Worth It (2025)                  | Hosting       | Blog     | /blog/managed-wordpress-hosting-compared       | 650        | false       | not started |
| 009 | I Lost a $15K Client Because of a Spreadsheet                              | SaaS          | Blog     | /blog/best-crm-software-small-business         | 650        | false       | not started |
| 013 | How to Find Reliable WiFi Anywhere in the World (2025)                     | Travel        | Blog     | /blog/find-reliable-wifi-anywhere              | 1087       | false       | not started |
| 018 | Best Mechanical Keyboards for Remote Work (2025)                           | Accessories   | Gear     | /gear/best-mechanical-keyboards                | 1763       | false       | not started |
| 019 | Best Portable Chargers & Power Banks for Travel (2025)                     | Accessories   | Gear     | /gear/best-portable-chargers-power-banks       | 3250       | false       | not started |
| 020 | Best Webcams for Professional Video Calls (2025)                           | Accessories   | Gear     | /gear/best-webcams-video-calls                 | 2266       | false       | not started |
| 022 | Best Microphones for Remote Meetings (2025)                                | Audio         | Gear     | /gear/best-microphones-remote-meetings         | 1168       | false       | not started |
| 023 | How to Reduce Background Noise on Video Calls (2025)                       | Audio         | Gear     | /gear/reduce-background-noise-calls            | 704        | false       | not started |
| 024 | Best Wireless Earbuds for Remote Work Calls (2025)                         | Audio         | Gear     | /gear/best-wireless-earbuds-remote-work        | 1680       | false       | not started |
| 026 | Best Noise-Canceling Headphones for Remote Work (2025)                     | Audio         | Gear     | /gear/best-noise-canceling-headphones          | 2046       | false       | not started |
| 027 | Best Speakers for Home Office (2025)                                       | Audio         | Gear     | /gear/best-speakers-home-office                | 1037       | false       | not started |
| 028 | Best Laptops for Remote Work & Digital Nomads (2025)                       | Computers     | Gear     | /gear/best-laptops-remote-work                 | 1756       | false       | not started |
| 029 | How Much RAM Do You Really Need for Remote Work? (2025)                    | Computers     | Gear     | /gear/how-much-ram-remote-work                 | 750        | false       | not started |
| 030 | MacBook vs Windows Laptop for Remote Work: Which Should You Choose? (2025) | Computers     | Gear     | /gear/macbook-vs-windows-remote-work           | 1100       | false       | not started |
| 031 | Best Portable Monitors for Digital Nomads (2025)                           | Computers     | Gear     | /gear/best-portable-monitors                   | 1463       | false       | not started |
| 032 | Best Budget Laptops Under $800 for Remote Work (2025)                      | Computers     | Gear     | /gear/best-budget-laptops-remote-work          | 1102       | false       | not started |
| 033 | Best Monitors for Remote Work (2025)                                       | Computers     | Gear     | /gear/best-monitors-remote-work                | 1054       | false       | not started |
| 051 | What Internet Speed Do You Need for Remote Work? (2025 Guide)              | Productivity  | Guides   | /guides/internet-speed-remote-work             | 1442       | false       | not started |
| 062 | Can You Use Your Personal Laptop for Remote Work?                          | Setup         | Guides   | /guides/personal-laptop-remote-work            | 1199       | false       | not started |
| 075 | Best Web Hosting for Remote Businesses (2025)                              | Hosting       | Tools    | /tools/best-web-hosting-remote-business        | 2480       | false       | not started |
| 076 | How to Migrate Your Website Without Downtime (2025)                        | Hosting       | Tools    | /tools/migrate-website-without-downtime        | 2347       | false       | not started |
| 077 | Website Speed Optimization: Complete Guide (2025)                          | Hosting       | Tools    | /tools/website-speed-optimization-guide        | 2560       | false       | not started |
| 078 | Best VPS Hosting for Remote Businesses (2025)                              | Hosting       | Tools    | /tools/best-vps-hosting-remote-business        | 3155       | false       | not started |
| 079 | Shared vs VPS vs Dedicated Hosting: Which Do You Need? (2025)              | Hosting       | Tools    | /tools/shared-vs-vps-vs-dedicated-hosting      | 1510       | false       | not started |
| 080 | Best E-commerce Hosting for Remote Entrepreneurs (2025)                    | Hosting       | Tools    | /tools/best-ecommerce-hosting                  | 3096       | false       | not started |
| 081 | Best Cloud Storage for Remote Work (2025)                                  | SaaS          | Tools    | /tools/best-cloud-storage-remote-work          | 2138       | false       | not started |
| 082 | Best Email Marketing Tools for Creators & Small Business (2025)            | SaaS          | Tools    | /tools/best-email-marketing-tools              | 3121       | false       | not started |
| 083 | Best Note-Taking Apps for Remote Professionals (2025)                      | SaaS          | Tools    | /tools/best-note-taking-apps                   | 1802       | false       | not started |
| 084 | Best Online Course Platforms for Creators (2025)                           | SaaS          | Tools    | /tools/best-online-course-platforms            | 3174       | false       | not started |
| 085 | Best Password Managers for Remote Workers (2025)                           | SaaS          | Tools    | /tools/best-password-manager-remote-work       | 2156       | false       | not started |
| 086 | Best Productivity Apps for Remote Workers (2025)                           | SaaS          | Tools    | /tools/best-productivity-apps                  | 4256       | false       | not started |
| 087 | Best Project Management Software for Remote Teams (2025)                   | SaaS          | Tools    | /tools/best-project-management-software        | 3600       | false       | not started |
| 088 | Best Time Tracking Software for Freelancers (2025)                         | SaaS          | Tools    | /tools/best-time-tracking-software             | 2032       | false       | not started |
| 089 | Best Video Conferencing Tools for Remote Teams (2025)                      | SaaS          | Tools    | /tools/best-video-conferencing-tools           | 3026       | false       | not started |
| 090 | Is Notion Worth It? Honest Review for Remote Workers (2025)                | SaaS          | Tools    | /tools/is-notion-worth-it                      | 1818       | false       | not started |
| 091 | Notion vs ClickUp vs Monday.com: Ultimate Comparison (2025)                | SaaS          | Tools    | /tools/notion-vs-clickup-vs-monday             | 1800       | false       | not started |
| 101 | What Makes a Laptop Good for Remote Work? (2025)                           | Setup         | Guides   | /guides/what-makes-laptop-good-remote-work     | 2400       | false       | not started |
| 102 | How Many Monitors Do You Actually Need? Honest Answer (2025)               | Setup         | Guides   | /guides/how-many-monitors-do-you-actually-need | 2600       | false       | not started |

### Sarah Mitchell Articles (28)

| #   | Name                                                                      | Sub-Category  | Category | Link                                             | Word Count | Voice Intro | Status      |
| --- | ------------------------------------------------------------------------- | ------------- | -------- | ------------------------------------------------ | ---------- | ----------- | ----------- |
| 002 | The Complete Guide to Async Communication for Remote Teams (2025)         | Communication | Blog     | /blog/async-communication-remote-teams           | 700        | false       | not started |
| 008 | Time Zones Are Killing Your Remote Team (Here's the Fix)                  | Productivity  | Blog     | /blog/managing-time-zones-remote-teams           | 750        | false       | not started |
| 012 | How to Set Up a Productive Home Office on Any Budget (2025)               | Setup         | Blog     | /blog/ultimate-home-office-setup                 | 1069       | false       | not started |
| 022 | Best Microphones for Remote Meetings (2025)                               | Audio         | Gear     | /gear/best-microphones-remote-meetings           | 1168       | false       | not started |
| 025 | USB vs XLR Microphones: Which Is Better for Remote Work?                  | Audio         | Gear     | /gear/usb-vs-xlr-microphones                     | 1085       | false       | not started |
| 034 | Ergonomic Desk Setup: Complete Guide (2025)                               | Furniture     | Gear     | /gear/ergonomic-desk-setup-guide                 | 1110       | false       | not started |
| 035 | Best Standing Desk Converters (2025)                                      | Furniture     | Gear     | /gear/best-desk-converters                       | 904        | false       | not started |
| 036 | Best Ergonomic Chairs for Home Office (2025)                              | Furniture     | Gear     | /gear/best-ergonomic-chairs                      | 2478       | false       | not started |
| 037 | How Much Does a Standing Desk Really Cost? (2025 Guide)                   | Furniture     | Gear     | /gear/standing-desk-cost-guide                   | 1693       | false       | not started |
| 038 | Best Compact Desks for Small Home Offices (2025)                          | Furniture     | Gear     | /gear/best-compact-desks-small-office            | 1965       | false       | not started |
| 039 | Best Standing Desks for Home Office (2025)                                | Furniture     | Gear     | /gear/best-standing-desks                        | 5095       | false       | not started |
| 040 | How to Avoid Miscommunication in Remote Teams (2025)                      | Communication | Guides   | /guides/avoid-miscommunication-remote-teams      | 1805       | false       | not started |
| 041 | Slack vs Teams vs Discord for Remote Work: Complete Comparison (2025)     | Communication | Guides   | /guides/slack-vs-teams-vs-discord                | 1782       | false       | not started |
| 042 | How to Run Effective Remote Meetings: A Complete Guide (2025)             | Communication | Guides   | /guides/how-to-run-effective-remote-meetings     | 1829       | false       | not started |
| 043 | Email Etiquette for Remote Teams: Professional Communication Guide (2025) | Communication | Guides   | /guides/email-etiquette-remote-teams             | 1786       | false       | not started |
| 044 | Remote Team Collaboration Best Practices: The Complete Guide (2025)       | Communication | Guides   | /guides/remote-team-collaboration-best-practices | 1873       | false       | not started |
| 049 | How to Expense Home Office Furniture: Complete Guide (2025)               | Finance       | Guides   | /guides/expense-home-office-furniture            | 1923       | false       | not started |
| 050 | Time Blocking vs Time Tracking: Which Method Works Better? (2025)         | Productivity  | Guides   | /guides/time-blocking-vs-time-tracking           | 2353       | false       | not started |
| 052 | How to Stay Focused Working from Home: Proven Strategies (2025)           | Productivity  | Guides   | /guides/how-to-stay-focused-working-from-home    | 2327       | false       | not started |
| 053 | Building a Morning Routine for Remote Work: Complete Guide (2025)         | Productivity  | Guides   | /guides/morning-routine-remote-work              | 2166       | false       | not started |
| 054 | Pomodoro Technique for Remote Workers: Complete Guide (2025)              | Productivity  | Guides   | /guides/pomodoro-technique-remote-workers        | 2547       | false       | not started |
| 060 | Minimalist Home Office Setup: Less Stuff, More Focus                      | Setup         | Guides   | /guides/minimalist-home-office-setup             | 1602       | false       | not started |
| 061 | Home Office Cable Management: Tame the Wire Chaos                         | Setup         | Guides   | /guides/cable-management-guide                   | 1507       | false       | not started |
| 063 | Budget Home Office Setup Under $500: Everything You Need                  | Setup         | Guides   | /guides/budget-home-office-setup-500             | 1668       | false       | not started |
| 064 | Complete Home Office Checklist: Everything You Need                       | Setup         | Guides   | /guides/complete-home-office-checklist           | 1281       | false       | not started |
| 066 | How to Work Remotely from Different Time Zones: A Complete Guide          | Travel        | Guides   | /guides/work-remotely-different-time-zones       | 1772       | false       | not started |
| 100 | Are Standing Desks Actually Worth It? (2025)                              | Setup         | Guides   | /guides/are-standing-desks-actually-worth-it     | 2300       | false       | not started |

---

## Reference Files

- **Writer Voices:** `docs/writers/writers-summery.md`
- **Style Guide:** `docs/writing_style_guide.md`
- **Humanize Command:** `.claude/commands/humanize.md`
- **ZeroGPT Script:** `scripts/zerogpt-detect.js`
- **Article Summary:** `docs/article-summey.md`

---

## Progress Summary

| Writer          | Total         | Intro Done  | Full Rewrite   | Completed    |
| --------------- | ------------- | ----------- | -------------- | ------------ |
| Daniel Brooks   | 31            | 0           | 0/5            | 0%           |
| Marcus Chen     | 43            | 0           | 0/7            | 0%           |
| Sarah Mitchell  | 28            | 0           | 0/3            | 0%           |
| **Total** | **102** | **0** | **0/15** | **0%** |

---

*Last updated: 2025-12-04*
