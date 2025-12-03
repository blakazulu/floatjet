# FloatJet Affiliate Programs Master Guide

**Last Updated:** 2025-11-28
**Purpose:** Complete reference for all affiliate programs, registration guides, and tracking

---

## Table of Contents

1. [Application Status Tracker](#application-status-tracker)
2. [Priority Programs Overview](#priority-programs-overview)
3. [Registration Step-by-Step Guides](#registration-step-by-step-guides)
4. [Program Details by Category](#program-details-by-category)
5. [Alternative/Backup Programs](#alternativebackup-programs)
6. [Netlify Redirect Configuration](#netlify-redirect-configuration)
7. [Revenue Projections](#revenue-projections)
8. [Application Checklist](#application-checklist)

---

## Application Status Tracker

### Applied Programs

| Program              | Network       | Applied Date | Status            | Affiliate ID | Notes                                |
|----------------------|---------------|--------------|-------------------|--------------|--------------------------------------|
| Amazon Associates    | Direct        | 2025-11-28   | ✅ Approved        | floatjet-20  | Store ID, 180-day 3-sale requirement |
| NordVPN + NordPass   | Direct        | 2025-11-22   | ✅ Approved        | 135757       | B2C bundle                           |
| Impact Radius        | Impact Radius | 2025-11-22   | ❌ Declined        | 6717334      | Reapply after Month 2 with traffic   |
| Notion               | Impact Radius | 2025-11-22   | ⏸️ Deferred       | -            | Pending Impact approval              |
| ClickUp              | PartnerStack  | 2025-11-22   | ❌ Declined        | -            | Reapply after site launch            |
| PartnerStack Network | PartnerStack  | 2025-11-24   | ⚠️ Limited Access | -            | Marketplace access limited           |

### Declined/Deferred Programs

| Program              | Network       | Decline Date | Reason                                | Reapply Date                  | Action Required                                     |
|----------------------|---------------|--------------|---------------------------------------|-------------------------------|-----------------------------------------------------|
| Impact Radius        | Impact Radius | 2025-11-28   | Site not live, no traffic             | End of Month 2 (Jan 2026)     | Launch site, publish 20+ articles, generate traffic |
| PartnerStack Network | PartnerStack  | 2025-11-30   | Profile not a fit (network expansion) | Month 2-3 (After site launch) | Reapply with live site and content                  |
| ClickUp              | PartnerStack  | 2025-12-01   | Application declined by brand         | Month 2-3 (After site launch) | Reapply with live site, traffic, and published PM content |
| ExpressVPN           | Impact Radius | 2025-12-03   | Low reach (traffic, followers)        | Month 2-3 (After site launch) | Build traffic, reapply via Impact once approved     |

**Impact Note:** Application declined on 2025-11-28 (Account ID: 6717334). Impact requires established sites with
published content and actual traffic. Will reapply in Month 2-3 once FloatJet has:

- ✅ Live website with 20+ published articles
- ✅ Privacy Policy, Terms, Affiliate Disclosure pages
- ✅ Real traffic data (50-500 visitors/month minimum)
- ✅ 4-6 weeks of content history

**PartnerStack Note:** Network Profile access limited on 2025-11-30. Reason: "Profile is not a great fit, but may be in
the future." This limits access to new programs via the PartnerStack Marketplace. Existing partnerships (ClickUp
application) are not impacted. Will reapply after FloatJet has:

- ✅ Live website with published content
- ✅ Established traffic and engagement metrics
- ✅ Demonstrated affiliate marketing track record
- ℹ️ Can reapply through dashboard once site is established

**ClickUp Note:** Application declined on 2025-12-01. ClickUp (via PartnerStack) declined the application after review. This is independent of the PartnerStack Network Profile limitation. Will reapply in Month 2-3 once FloatJet has:

- ✅ Live website with published project management content
- ✅ Best PM Software article live with traffic
- ✅ Demonstrated engagement and conversions
- ✅ 4-6 weeks of content history
- ℹ️ Can re-apply directly through PartnerStack dashboard

### Pending Applications

| Program    | Network       | Priority | Target Date                         | Required For      |
|------------|---------------|----------|-------------------------------------|-------------------|
| ConvertKit | Direct        | **HIGH** | Week 2 (after launch)               | Email Marketing   |
| Beehiiv    | Direct        | **HIGH** | Week 2 (after launch)               | Email Marketing   |
| FlexiSpot  | Direct        | **HIGH** | Week 3                              | Standing Desks    |
| 1Password  | Impact Radius | **HIGH** | Month 2-3 (after Impact reapproval) | Password Managers |

### Configured Redirects (Placeholder URLs)

All redirects configured in `netlify.toml`. Update with actual affiliate URLs once approved.

---

## Priority Programs Overview

### Tier 1: Critical (Apply Immediately)

| Program               | Commission                  | Cookie  | Best For                 |
|-----------------------|-----------------------------|---------|--------------------------|
| **Amazon Associates** | 3-6%                        | 24h     | Laptops, Desks, Hardware |
| **NordVPN/NordPass**  | 30-40%                      | 30 days | VPNs, Password Managers  |
| **ConvertKit**        | $100 + 40% recurring (24mo) | 60 days | Email Marketing          |

### Tier 2: High Priority

| Program       | Commission              | Cookie  | Best For                  |
|---------------|-------------------------|---------|---------------------------|
| **1Password** | 25%                     | 30 days | Password Managers (Teams) |
| **Beehiiv**   | 50% recurring (12mo)    | 60 days | Newsletter creators       |
| **FlexiSpot** | 8-10%                   | 30 days | Standing Desks            |
| **Notion**    | $100-500/sale           | 30 days | PM Software               |
| **ClickUp**   | $50-200 + 20% recurring | 90 days | PM Software               |

### Tier 3: Medium Priority

| Program        | Commission           | Cookie  | Best For            |
|----------------|----------------------|---------|---------------------|
| ActiveCampaign | 20-30% recurring     | 90 days | Email automation    |
| Mailchimp      | 20-30% first payment | 30 days | Beginner email      |
| Autonomous     | 10%                  | 30 days | Budget desks        |
| Dashlane       | $3-5/signup          | 30 days | Password managers   |
| Keeper         | 25-40%               | 45 days | Enterprise security |

---

## Registration Step-by-Step Guides

### Before You Apply (All Programs)

Ensure your site has:

- [x] Published content (5+ pages minimum)
- [x] Privacy policy page
- [x] About page
- [x] Contact page
- [x] Affiliate disclosure in footer
- [ ] W-9 (US) or W-8BEN (International) ready

---

### 1. Amazon Associates (✅ APPROVED)

**URL:** <https://affiliate-program.amazon.com>

**Status:** ✅ Approved 2025-11-28 | Store ID: floatjet-20

**Commission:** 3-6% (varies by category)

- Electronics: 2.5-4%
- Furniture: 8%
- PC Components: 2.5%

**Cookie Duration:** 24 hours (very short!)

**Critical Requirement:** Must make **3 qualifying sales within 180 days** to stay active

**Link Format:**

```
https://amazon.com/dp/{ASIN}?tag=floatjet-20
```

**Current Product ASINs:** See `/mnt/c/My Stuff/floatjet/docs/amazon-products-asins.md` for complete list

**Active Redirects in netlify.toml:**

- 25 product redirects configured (laptops, desks, chairs, webcams, headphones, keyboards)
- Format: `/go/amazon/{product-name}` → Amazon with tag

**Important Notes:**

- 24-hour cookie is SHORT - optimize for immediate purchases
- Commission paid 60 days after month-end
- Minimum payout: $10
- Payment methods: Direct deposit, gift card, check

**Step-by-Step Application:**

1. Go to <https://affiliate-program.amazon.com>
2. Click "Sign Up"
3. Log in with your Amazon account (or create one)
4. Enter account information:
    - Name, address, phone
    - Website: floatjet.com
5. Enter website details:
    - Primary topic: "Technology & Computing"
    - Content types: Reviews, Comparisons
    - Traffic sources: Organic search, Social media
6. Choose your Associate Store ID (e.g., "floatjet-20")
7. Explain how you drive traffic (be honest about being new)
8. Enter payment and tax information
9. Submit application

**If Rejected:**

- Wait 30 days, add more content, reapply
- Alternative: Best Buy, Dell, HP, Lenovo direct programs

---

### 2. NordVPN + NordPass (✅ APPROVED)

**URL:** <https://nordvpn.com/affiliate/>

**Step-by-Step:**

1. Go to <https://nordvpn.com/affiliate/>
2. Click "Become an Affiliate"
3. Fill out application form:
    - Website URL: floatjet.com
    - Select: "NordVPN + NordPass B2C"
    - Traffic estimate
    - Promotion methods
4. Submit and wait for approval (3-7 days)

**Status:** ✅ Approved 2025-11-24 | Affiliate ID: 135757

**Commission:** 30-40% on both NordVPN and NordPass sales

**Tracking Links:**

- NordVPN: `https://go.nordvpn.net/aff_c?offer_id=15&aff_id=135757&url_id=902`
- NordPass: `https://go.nordpass.io/aff_c?offer_id=488&aff_id=135757&url_id=9356`

**Account Manager:** Tomas (Partners Relationship Team)

**Additional Products Available:**

- Saily (eSIM provider) - request tracking link if interested
- NordProtect (identity theft protection, US only) - request tracking link if interested

**PPC Restrictions:** No branded keywords (NordVPN, NordPass, "Nord", variations) on Google Ads, Bing Ads.

---

### 3. Impact Radius (Notion, 1Password, Mailchimp)

**URL:** <https://impact.com>

**Step-by-Step:**

1. Go to <https://impact.com>
2. Click "Sign Up" � "Partner" (not Advertiser)
3. Create account with email
4. Complete profile:
    - Website: floatjet.com
    - Category: Technology/Software
    - Traffic: Organic search
5. Add verification meta tag to site (already done)
6. Search marketplace for programs:
    - Search "Notion" � Apply
    - Search "1Password" � Apply
    - Search "Mailchimp" � Apply
7. Each brand approves separately (1-7 days each)

**Status:** ❌ **DECLINED - Reapply Month 2-3**

- ❌ Application declined 2025-11-28 (Account ID: 6717334)
- **Reason:** Site not live, no published content, no traffic
- **Reapply:** End of Month 2 (January 2026) after:
  - ✅ Site launched with 20+ published articles
  - ✅ Legal pages live (Privacy, Terms, Disclosure)
  - ✅ Real traffic data (50-500+ visitors/month)
  - ✅ 4-6 weeks of content history

**Programs Affected:**

- ⏸️ Notion - $100-500/sale (deferred until Impact approval)
- ⏸️ 1Password - 25% commission (deferred until Impact approval)
- ⏸️ Mailchimp - 20-30% first payment (deferred until Impact approval)
- ⏸️ HubSpot - 30% recurring (deferred until Impact approval)

**Alternative:** Apply to direct programs and other networks (ShareASale, CJ Affiliate, Amazon) now. Circle back to
Impact in Month 2-3.

---

### 4. PartnerStack (Multiple Programs)

**URL:** <https://dash.partnerstack.com/marketplace>

**Status:** ⚠️ **MARKETPLACE ACCESS LIMITED** - ClickUp application still in review (not affected)

**Network Profile Status:** Limited access to new marketplace programs as of 2025-11-30. Can reapply once site is
established with traffic and content.

**How It Works:** One PartnerStack account = access to entire marketplace. Apply to each brand separately. **NOTE:**
Marketplace access currently restricted - focus on direct program applications and other networks (Impact, ShareASale,
CJ) for now.

**Programs to Apply For (in your existing articles):**

⚠️ **IMPORTANT:** These marketplace programs are currently unavailable due to limited Network Profile access. Will be
accessible after reapplication once site is launched. ClickUp application already submitted is not affected.

| Program        | Category          | Commission          | Your Article                     |
|----------------|-------------------|---------------------|----------------------------------|
| ClickUp        | PM Software       | $50-200 + 20% rec.  | best-project-management-software |
| Monday.com     | PM Software / CRM | 100% first year     | best-project-management-software |
| Teamwork       | PM Software       | 20% recurring       | best-project-management-software |
| Pipedrive      | CRM               | 20-30% recurring    | best-crm-software-small-business |
| Close          | CRM               | 20% recurring       | best-crm-software-small-business |
| Freshsales     | CRM               | 15-20%              | best-crm-software-small-business |
| Toggl Track    | Time Tracking     | 20% recurring       | best-time-tracking-software      |
| Harvest        | Time Tracking     | 15% recurring       | best-time-tracking-software      |
| Clockify       | Time Tracking     | 20%                 | best-time-tracking-software      |
| Calendly       | Productivity      | 15-20%              | best-productivity-apps           |
| Teachable      | Course Platform   | 30% recurring (1yr) | best-online-course-platforms     |
| Thinkific      | Course Platform   | 20% recurring       | best-online-course-platforms     |
| Podia          | Course Platform   | 30% recurring       | best-online-course-platforms     |
| Loom           | Communication     | 20%                 | best-team-communication-tools    |
| Intercom       | Communication     | 15-20%              | best-team-communication-tools    |
| ActiveCampaign | Email Marketing   | 20-30% recurring    | best-email-marketing-tools       |
| Drip           | Email Marketing   | 20% recurring       | best-email-marketing-tools       |

**Step-by-Step:**

1. Log into <https://dash.partnerstack.com/marketplace>
2. Search for each program above
3. Click "Apply" for each one
4. Most approve within 3-7 days since you're already a partner

---

### 5. ConvertKit (Kit)

**URL:** <https://convertkit.com/affiliates>

**Step-by-Step:**

1. Go to <https://convertkit.com/affiliates>
2. Click "Apply Now"
3. Fill out application:
    - Website: floatjet.com
    - Are you a ConvertKit user? (Yes is preferred)
    - How will you promote?
    - Estimated monthly referrals
4. Submit application
5. Wait for approval (1-3 days - they're fast)

**Commission:** $100 signup bonus + **40% recurring for 24 months**

**Example:** $59/mo Creator plan = $23.60/mo x 24 months = **$566 per referral!**

**Tip:** Sign up for ConvertKit free plan first. Being a user increases approval chances.

---

### 6. Beehiiv

**URL:** <https://www.beehiiv.com/partners>

**Step-by-Step:**

1. Go to <https://www.beehiiv.com/partners>
2. Click "Become a Partner"
3. Fill out form:
    - Name, email, website
    - How you'll promote
    - Audience size
4. Submit and wait (1-3 days)

**Commission:** **50% recurring for 12 months**

**Tip:** Fast-growing platform, eager for affiliates. High approval rate.

---

### 7. FlexiSpot

**URL:** <https://www.flexispot.com/affiliate>

**Step-by-Step:**

1. Go to <https://www.flexispot.com/affiliate>
2. Click "Apply Now"
3. Fill out application:
    - Website URL
    - Traffic sources
    - How you'll promote
4. Submit and wait (3-5 days)

**Commission:** 8-10% on all sales

**Note:** Popular brand with frequent sales/promotions. Good conversion rates.

---

### 8. CJ Affiliate (Dashlane, LastPass)

**URL:** <https://www.cj.com>

**Step-by-Step:**

1. Go to <https://www.cj.com>
2. Click "Publishers" � "Sign Up"
3. Create account
4. Complete profile with website details
5. Search for programs:
    - Search "Dashlane" � Apply
    - Search "LastPass" � Apply
6. Wait for brand approvals (3-7 days each)

**Tip:** Apply to multiple programs while you're there.

---

### 9. ShareASale (Fully, Uplift)

**URL:** <https://www.shareasale.com>

**Step-by-Step:**

1. Go to <https://www.shareasale.com>
2. Click "Affiliate Sign Up"
3. Create account
4. Verify email and complete profile
5. Search for:
    - "Fully" � Apply
    - "Uplift Desk" � Apply
6. Wait for approvals

**Commission:** 5-8% (lower but premium products)

---

## Program Details by Category

### Project Management Software

| Program    | Commission              | Cookie  | Network       | Status                      |
|------------|-------------------------|---------|---------------|-----------------------------|
| Notion     | $100-500/sale           | 30 days | Impact Radius | Deferred                    |
| ClickUp    | $50-200 + 20% recurring | 90 days | PartnerStack  | ❌ Declined (Reapply M2-3)  |
| Monday.com | 100% first year         | 90 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Teamwork   | 20% recurring           | 90 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Asana      | Unknown                 | Unknown | Direct        | Not Applied                 |

**Used in:** FJ-006 (PM Software article)

---

### VPNs (Consumer)

| Program    | Commission | Cookie  | Network | Status      |
|------------|------------|---------|---------|-------------|
| NordVPN    | 30-40%     | 30 days | Direct  | ✅ Approved  |
| ExpressVPN | 35-50%     | 90 days | Impact  | ❌ Declined (Low traffic)       |
| Surfshark  | 40%        | 30 days | Direct  | ⏳ Pending (Applied 2025-12-02) |
| CyberGhost | 45%        | 45 days | Direct  | ⏳ Pending (Applied 2025-12-02) |
| ProtonVPN  | 30%        | 30 days | Direct  | ⏳ Pending (Applied 2025-12-02) |
| IPVanish   | 100% (1st) | 45 days | Direct  | ⏳ Pending (Applied 2025-12-02) |

**Used in:** FJ-007 (VPN article), best-vpn-streaming-travel, free-vpn-vs-paid-vpn, vpn-kill-switch-explained,
how-to-setup-vpn-all-devices

---

### VPNs (Business/Enterprise)

| Program      | Commission   | Cookie  | Network | Status      |
|--------------|--------------|---------|---------|-------------|
| NordLayer    | B2B rates    | 30 days | Direct  | Not Applied |
| Perimeter 81 | $50-200/lead | 30 days | Direct  | Not Applied |
| Twingate     | Contact      | 30 days | Direct  | Not Applied |
| GoodAccess   | Contact      | 30 days | Direct  | Not Applied |
| OpenVPN      | Partner prog | 30 days | Direct  | Not Applied |

**Used in:** best-business-vpn-remote-teams

---

### Password Managers

| Program   | Commission  | Cookie  | Network        | Status      |
|-----------|-------------|---------|----------------|-------------|
| NordPass  | 30-40%      | 30 days | NordVPN Direct | ✅ Approved  |
| 1Password | 25%         | 30 days | Impact Radius  | Not Applied |
| Bitwarden | Unknown     | Unknown | Direct         | Not Applied |
| Dashlane  | $3-5/signup | 30 days | CJ Affiliate   | Not Applied |
| Keeper    | 25-40%      | 45 days | Direct         | Not Applied |
| LastPass  | 25%         | 30 days | CJ Affiliate   | Not Applied |

**Used in:** FJ-011 (Password Manager article)

---

### Email Marketing

| Program        | Commission                  | Cookie  | Network       | Status                      |
|----------------|-----------------------------|---------|---------------|-----------------------------|
| ConvertKit     | $100 + 40% recurring (24mo) | 60 days | Direct        | Not Applied                 |
| Beehiiv        | 50% recurring (12mo)        | 60 days | Direct        | Not Applied                 |
| ActiveCampaign | 20-30% recurring            | 90 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Drip           | 20% recurring               | 90 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Klaviyo        | 15-20%                      | 30 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Mailchimp      | 20-30% first payment        | 30 days | Impact Radius | Deferred                    |
| MailerLite     | 30% recurring               | 30 days | Direct        | Not Applied                 |

**Used in:** FJ-013 (Email Marketing article)

---

### Standing Desks & Furniture

| Program        | Commission | Cookie  | Network    | Status      |
|----------------|------------|---------|------------|-------------|
| FlexiSpot      | 8-10%      | 30 days | Direct     | Not Applied |
| Autonomous     | 10%        | 30 days | Direct     | Not Applied |
| Fully          | 5-8%       | 30 days | ShareASale | Not Applied |
| Uplift         | 5-8%       | 30 days | ShareASale | Not Applied |
| Branch         | 8%         | 30 days | Direct     | Not Applied |
| Amazon (desks) | 4-6%       | 24h     | Amazon     | Not Applied |

**Used in:** FJ-014 (Standing Desks article), best-desk-converters, best-compact-desks-small-office,
ergonomic-desk-setup-guide, standing-desk-cost-guide articles

---

### Ergonomic Chairs

| Program         | Commission | Cookie  | Network | Status      |
|-----------------|------------|---------|---------|-------------|
| Herman Miller   | 2-4%       | 30 days | Direct  | Not Applied |
| Steelcase       | 2-4%       | 30 days | Direct  | Not Applied |
| Secretlab       | 5-10%      | 30 days | Direct  | Not Applied |
| HON             | 3-5%       | 30 days | Direct  | Not Applied |
| Humanscale      | 3-5%       | 30 days | Direct  | Not Applied |
| IKEA            | 3-7%       | 30 days | Direct  | Not Applied |
| Sihoo           | 5-8%       | 30 days | Direct  | Not Applied |
| Amazon (chairs) | 4-6%       | 24h     | Amazon  | Not Applied |

**Used in:** best-ergonomic-chairs article

---

### Desk Converters & Compact Desks

| Program       | Commission | Cookie  | Network | Status      |
|---------------|------------|---------|---------|-------------|
| VIVO          | 5-8%       | 30 days | Direct  | Not Applied |
| Varidesk      | 5-10%      | 30 days | Direct  | Not Applied |
| FEZIBO        | 8-10%      | 30 days | Direct  | Not Applied |
| Mount-It      | 5-8%       | 30 days | Direct  | Not Applied |
| Ergotron      | 5-8%       | 30 days | Direct  | Not Applied |
| Zinus         | 5-8%       | 30 days | Direct  | Not Applied |
| Walker Edison | 5%         | 30 days | Direct  | Not Applied |
| ApexDesk      | 5-8%       | 30 days | Direct  | Not Applied |
| Prepac        | 5%         | 30 days | Direct  | Not Applied |
| Amazon        | 4-6%       | 24h     | Amazon  | Not Applied |

**Used in:** best-desk-converters, best-compact-desks-small-office articles

---

### Laptops & Hardware

| Program          | Commission | Cookie  | Network | Status      |
|------------------|------------|---------|---------|-------------|
| Amazon (laptops) | 3%         | 24h     | Amazon  | Not Applied |
| Best Buy         | 0.5-1%     | 24h     | Direct  | Not Applied |
| Dell             | 2-4%       | Unknown | Direct  | Not Applied |
| HP               | 4-6%       | Unknown | Direct  | Not Applied |
| Lenovo           | 2-4%       | Unknown | Direct  | Not Applied |
| B&H Photo        | 2-8%       | Unknown | Direct  | Not Applied |

**Used in:** FJ-012 (Laptops article), best-budget-laptops-remote-work, macbook-vs-windows-remote-work,
how-much-ram-remote-work articles

---

### Monitors & Displays

| Program         | Commission | Cookie  | Network | Status      |
|-----------------|------------|---------|---------|-------------|
| Dell (monitors) | 2-4%       | 30 days | Direct  | Not Applied |
| LG              | 2-4%       | 30 days | Direct  | Not Applied |
| Samsung         | 2-4%       | 30 days | Direct  | Not Applied |
| BenQ            | 3-5%       | 30 days | Direct  | Not Applied |
| ASUS            | 3-5%       | 30 days | Direct  | Not Applied |
| ViewSonic       | 3-5%       | 30 days | Direct  | Not Applied |
| HP (monitors)   | 4-6%       | 30 days | Direct  | Not Applied |
| Philips         | 3-5%       | 30 days | Direct  | Not Applied |
| Amazon          | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-monitors-remote-work, best-portable-monitors articles

---

### Web Hosting

| Program    | Commission             | Cookie   | Network    | Status      |
|------------|------------------------|----------|------------|-------------|
| WPEngine   | $200 + $50/mo lifetime | 180 days | ShareASale | Not Applied |
| Cloudways  | $50-125/signup         | 90 days  | Direct     | Not Applied |
| SiteGround | $50-100/signup         | 60 days  | Direct     | Not Applied |
| Kinsta     | $50-500/signup         | 60 days  | Direct     | Not Applied |

**Used in:** Hosting articles

---

### CRM Software

| Program    | Commission       | Cookie  | Network       | Status                      |
|------------|------------------|---------|---------------|-----------------------------|
| HubSpot    | 30% recurring    | 90 days | Impact Radius | Deferred                    |
| Pipedrive  | 20-30% recurring | 60 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Close      | 20% recurring    | 90 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Freshsales | 15-20%           | 30 days | PartnerStack  | ⚠️ Unavailable (PS Network) |
| Zoho CRM   | 15-20%           | 45 days | Direct        | Not Applied                 |
| Monday.com | 100% first year  | 90 days | PartnerStack  | ⚠️ Unavailable (PS Network) |

**Used in:** best-crm-software-small-business article

---

### Team Communication Tools

| Program         | Commission | Cookie  | Network      | Status                      |
|-----------------|------------|---------|--------------|-----------------------------|
| Intercom        | 15-20%     | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Drift           | 20%        | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Loom            | 20%        | 30 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Slack           | Varies     | 30 days | Direct       | Not Applied                 |
| Zoom            | 10-15%     | 30 days | Direct       | Not Applied                 |
| Microsoft Teams | Varies     | 30 days | Direct       | Not Applied                 |
| Discord Nitro   | N/A        | N/A     | N/A          | No program                  |

**Used in:** best-team-communication-tools, slack-vs-teams-vs-discord articles

---

### Meeting Productivity Tools

| Program   | Commission | Cookie  | Network      | Status                      |
|-----------|------------|---------|--------------|-----------------------------|
| Calendly  | 15-20%     | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Otter.ai  | 20-25%     | 30 days | Direct       | Not Applied                 |
| Grain     | 20%        | 30 days | Direct       | Not Applied                 |
| Fireflies | 20%        | 30 days | Direct       | Not Applied                 |

**Used in:** how-to-run-effective-remote-meetings article

---

### Time Tracking Software

| Program     | Commission    | Cookie  | Network      | Status                      |
|-------------|---------------|---------|--------------|-----------------------------|
| Toggl Track | 20% recurring | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Harvest     | 15% recurring | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Clockify    | 20%           | 30 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| RescueTime  | 15-20%        | 30 days | Direct       | Not Applied                 |

**Used in:** best-time-tracking-software article

---

### Online Course Platforms

| Program     | Commission          | Cookie  | Network      | Status                      |
|-------------|---------------------|---------|--------------|-----------------------------|
| Teachable   | 30% recurring (1yr) | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Thinkific   | 20% recurring       | 90 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Podia       | 30% recurring       | 30 days | PartnerStack | ⚠️ Unavailable (PS Network) |
| Kajabi      | 30% recurring       | 30 days | Direct       | Not Applied                 |
| LearnWorlds | 20%                 | 30 days | Direct       | Not Applied                 |
| Gumroad     | 10%                 | 30 days | Direct       | Not Applied                 |

**Used in:** best-online-course-platforms article

---

### Visual Collaboration Tools

| Program | Commission | Cookie  | Network | Status      |
|---------|------------|---------|---------|-------------|
| Miro    | 20-25%     | 30 days | Direct  | Not Applied |
| FigJam  | Varies     | 30 days | Direct  | Not Applied |
| Figma   | Varies     | 30 days | Direct  | Not Applied |

**Used in:** remote-team-collaboration-best-practices article

---

### Writing & Productivity Tools

| Program    | Commission | Cookie  | Network | Status      |
|------------|------------|---------|---------|-------------|
| Grammarly  | 20-25%     | 90 days | Direct  | Not Applied |
| Superhuman | $5/signup  | 30 days | Direct  | Not Applied |

**Used in:** email-etiquette-remote-teams article

---

### Travel Insurance

| Program        | Commission | Cookie  | Network | Status      |
|----------------|------------|---------|---------|-------------|
| SafetyWing     | 10%        | 30 days | Direct  | Not Applied |
| World Nomads   | 10-15%     | 30 days | Direct  | Not Applied |
| Genki          | Unknown    | Unknown | Direct  | Not Applied |
| Passport Card  | Unknown    | Unknown | Direct  | Not Applied |
| Insured Nomads | 10-15%     | 30 days | Direct  | Not Applied |

**Used in:** best-travel-insurance-remote-workers article

---

### Digital Banking / Finance

| Program  | Commission       | Cookie  | Network | Status      |
|----------|------------------|---------|---------|-------------|
| Wise     | £15-50/referral  | 30 days | Direct  | Not Applied |
| Revolut  | Varies by region | 30 days | Direct  | Not Applied |
| Mercury  | Unknown          | Unknown | Direct  | Not Applied |
| Payoneer | $25/referral     | 30 days | Direct  | Not Applied |
| N26      | €15/referral     | 30 days | Direct  | Not Applied |

**Used in:** best-banking-digital-nomads, crypto-friendly-banks, multi-currency-banking-nomads articles

---

### Accounting & Tax Software

| Program             | Commission      | Cookie   | Network      | Status      |
|---------------------|-----------------|----------|--------------|-------------|
| QuickBooks          | $25-100/signup  | 45 days  | CJ Affiliate | Not Applied |
| FreshBooks          | $55-200/signup  | 120 days | ShareASale   | Not Applied |
| Xero                | $100-150/signup | 90 days  | Direct       | Not Applied |
| Wave                | Free product    | N/A      | N/A          | No program  |
| TurboTax            | $10-50/signup   | 45 days  | CJ Affiliate | Not Applied |
| Expensify           | $25/signup      | 30 days  | Direct       | Not Applied |
| Dext (Receipt Bank) | 15-20%          | 30 days  | Direct       | Not Applied |

**Used in:** freelancer-tax-deductions-guide, expense-home-office-furniture, tax-tips-remote-workers articles

---

### Investment & Retirement Platforms

| Program     | Commission     | Cookie  | Network | Status      |
|-------------|----------------|---------|---------|-------------|
| Fidelity    | Varies         | 30 days | Direct  | Not Applied |
| Vanguard    | N/A            | N/A     | N/A     | No program  |
| Schwab      | Varies         | 30 days | Direct  | Not Applied |
| Betterment  | $50-75/signup  | 30 days | Direct  | Not Applied |
| Wealthfront | $50/signup     | 30 days | Direct  | Not Applied |
| M1 Finance  | $50-100/signup | 30 days | Direct  | Not Applied |

**Used in:** retirement-savings-freelancer article

---

### Laptop Bags & Backpacks

| Program     | Commission | Cookie  | Network | Status      |
|-------------|------------|---------|---------|-------------|
| Nomatic     | 10%        | 30 days | Direct  | Not Applied |
| Peak Design | 8%         | 30 days | Direct  | Not Applied |
| Aer         | 8-10%      | 30 days | Direct  | Not Applied |
| Thule       | 5-8%       | 30 days | Direct  | Not Applied |
| Tortuga     | 10%        | 30 days | Direct  | Not Applied |
| WANDRD      | 8-10%      | 30 days | Direct  | Not Applied |
| Bellroy     | 8%         | 30 days | Direct  | Not Applied |
| Amazon      | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-laptop-bags-backpacks article

---

### Webcams

| Program        | Commission | Cookie  | Network | Status      |
|----------------|------------|---------|---------|-------------|
| Logitech       | 4-6%       | 30 days | Direct  | Not Applied |
| Razer          | 3-5%       | 30 days | Direct  | Not Applied |
| Elgato/Corsair | 5-8%       | 30 days | Direct  | Not Applied |
| Amazon         | 3-4%       | 24h     | Amazon  | Not Applied |
| B&H Photo      | 2-8%       | Unknown | Direct  | Not Applied |

**Used in:** best-webcams-video-calls article

---

### Portable Chargers & Power Banks

| Program | Commission | Cookie  | Network | Status      |
|---------|------------|---------|---------|-------------|
| Anker   | Up to 4%   | 30 days | Amazon  | Not Applied |
| Zendure | 5-8%       | 30 days | Direct  | Not Applied |
| Baseus  | 5%         | 30 days | Direct  | Not Applied |
| UGREEN  | 4-6%       | 30 days | Direct  | Not Applied |
| Mophie  | 5%         | 30 days | Direct  | Not Applied |
| Amazon  | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-portable-chargers-power-banks article

---

### Mechanical Keyboards

| Program      | Commission | Cookie  | Network | Status      |
|--------------|------------|---------|---------|-------------|
| Keychron     | 5%         | 30 days | Direct  | Not Applied |
| Das Keyboard | 10%        | 30 days | Direct  | Not Applied |
| Logitech     | 4-6%       | 30 days | Direct  | Not Applied |
| NuPhy        | 8%         | 30 days | Direct  | Not Applied |
| Drop         | 5-10%      | 30 days | Direct  | Not Applied |
| Amazon       | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-mechanical-keyboards article

---

### Travel Adapters & Chargers

| Program   | Commission | Cookie  | Network | Status      |
|-----------|------------|---------|---------|-------------|
| Anker     | Up to 4%   | 30 days | Amazon  | Not Applied |
| Satechi   | 5-8%       | 30 days | Direct  | Not Applied |
| HyperX    | 5%         | 30 days | Direct  | Not Applied |
| Amazon    | 3-4%       | 24h     | Amazon  | Not Applied |
| B&H Photo | 2-8%       | Unknown | Direct  | Not Applied |

**Used in:** best-travel-adapters article

---

### Microphones

| Program         | Commission | Cookie  | Network | Status      |
|-----------------|------------|---------|---------|-------------|
| Shure           | 5-8%       | 30 days | Direct  | Not Applied |
| Blue (Logitech) | 4-6%       | 30 days | Direct  | Not Applied |
| Rode            | 5%         | 30 days | Direct  | Not Applied |
| Audio-Technica  | 3-5%       | 30 days | Direct  | Not Applied |
| Elgato          | 5-8%       | 30 days | Direct  | Not Applied |
| HyperX          | 5%         | 30 days | Direct  | Not Applied |
| Samson          | 4%         | 30 days | Amazon  | Not Applied |
| Amazon          | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-microphones-remote-meetings, usb-vs-xlr-microphones articles

---

### Speakers

| Program     | Commission | Cookie  | Network | Status      |
|-------------|------------|---------|---------|-------------|
| Audioengine | 5-10%      | 30 days | Direct  | Not Applied |
| Edifier     | 5%         | 30 days | Direct  | Not Applied |
| Creative    | 4-6%       | 30 days | Direct  | Not Applied |
| Logitech    | 4-6%       | 30 days | Direct  | Not Applied |
| Bose        | 4%         | 30 days | Direct  | Not Applied |
| Klipsch     | 5%         | 30 days | Direct  | Not Applied |
| Razer       | 5-10%      | 30 days | Direct  | Not Applied |
| Amazon      | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-speakers-home-office article

---

### Earbuds

| Program   | Commission | Cookie  | Network | Status      |
|-----------|------------|---------|---------|-------------|
| Apple     | 2-4%       | 30 days | Apple   | Not Applied |
| Sony      | 4-6%       | 30 days | Direct  | Not Applied |
| Samsung   | 3-5%       | 30 days | Direct  | Not Applied |
| Jabra     | 5-8%       | 30 days | Direct  | Not Applied |
| Soundcore | 5%         | 30 days | Direct  | Not Applied |
| Bose      | 4%         | 30 days | Direct  | Not Applied |
| Amazon    | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** best-wireless-earbuds-remote-work article

---

### Audio Software & Accessories

| Program   | Commission | Cookie  | Network | Status      |
|-----------|------------|---------|---------|-------------|
| Krisp     | 20-30%     | 30 days | Direct  | Not Applied |
| Focusrite | 5-8%       | 30 days | Direct  | Not Applied |
| Amazon    | 3-4%       | 24h     | Amazon  | Not Applied |

**Used in:** reduce-background-noise-calls, usb-vs-xlr-microphones articles

---

## Alternative/Backup Programs

If primary programs reject your application:

### Password Managers

- Dashlane (CJ Affiliate) - $3-5/signup
- Keeper (Direct) - 25-40%
- LastPass (CJ Affiliate) - 25%
- RoboForm (Direct) - 30%

### Laptops

- Best Buy - 0.5-1%
- Dell Direct - 2-4%
- HP Direct - 4-6%
- Lenovo Direct - 2-4%
- B&H Photo - 2-8%

### Email Marketing

- MailerLite - 30% recurring
- Flodesk - 50% first payment
- Buttondown - Unknown

### Standing Desks

- Branch Furniture - 8%
- Vari - Unknown

### VPNs

- Surfshark - 40%
- ExpressVPN - 35-50%
- CyberGhost - Unknown

---

## Netlify Redirect Configuration

All redirects are configured in `netlify.toml`. Current status: **Placeholder URLs active**.

Once approved, update the URLs with actual affiliate links.

### Project Management

```toml
[[redirects]]
from = "/go/notion"
to = "https://notion.so/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/clickup"
to = "https://clickup.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### VPNs

```toml
[[redirects]]
from = "/go/nordvpn"
to = "https://nordvpn.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/expressvpn"
to = "https://expressvpn.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/surfshark"
to = "https://surfshark.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Password Managers

```toml
[[redirects]]
from = "/go/nordpass"
to = "https://nordpass.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/1password"
to = "https://1password.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/bitwarden"
to = "https://bitwarden.com/?ref=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/dashlane"
to = "https://dashlane.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/lastpass"
to = "https://lastpass.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/keeper"
to = "https://keepersecurity.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Email Marketing

```toml
[[redirects]]
from = "/go/convertkit"
to = "https://convertkit.com/?lmref=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/beehiiv"
to = "https://beehiiv.com/?via=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/mailchimp"
to = "https://mailchimp.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/activecampaign"
to = "https://activecampaign.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Standing Desks

```toml
[[redirects]]
from = "/go/flexispot"
to = "https://flexispot.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/autonomous"
to = "https://autonomous.ai/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/uplift"
to = "https://upliftdesk.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Amazon Products

```toml
[[redirects]]
from = "/go/amazon/macbook-air-m3"
to = "https://amazon.com/dp/[ASIN]?tag=floatjet-20"
status = 301
force = true

[[redirects]]
from = "/go/amazon/thinkpad-x1"
to = "https://amazon.com/dp/[ASIN]?tag=floatjet-20"
status = 301
force = true

[[redirects]]
from = "/go/amazon/flexispot-e7"
to = "https://amazon.com/dp/[ASIN]?tag=floatjet-20"
status = 301
force = true
```

### CRM Software

```toml
[[redirects]]
from = "/go/hubspot"
to = "https://hubspot.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/pipedrive"
to = "https://pipedrive.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/zoho-crm"
to = "https://zoho.com/crm/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Team Communication

```toml
[[redirects]]
from = "/go/slack"
to = "https://slack.com/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/zoom"
to = "https://zoom.us/?affiliate=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/loom"
to = "https://loom.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Travel Insurance

```toml
[[redirects]]
from = "/go/safetywing"
to = "https://safetywing.com/?referral=[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/world-nomads"
to = "https://worldnomads.com/?affiliate=[YOUR_ID]"
status = 301
force = true
```

### Digital Banking

```toml
[[redirects]]
from = "/go/wise"
to = "https://wise.com/invite/[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/revolut"
to = "https://revolut.com/referral/[YOUR_ID]"
status = 301
force = true

[[redirects]]
from = "/go/mercury"
to = "https://mercury.com/?ref=[YOUR_ID]"
status = 301
force = true
```

---

## Revenue Projections

### Month 1 Estimates (Conservative)

Assuming modest traffic and 1% conversion:

| Category    | Program    | Est. Referrals | Avg Commission | Monthly    |
|-------------|------------|----------------|----------------|------------|
| VPN         | NordVPN    | 5              | $40            | $200       |
| Password    | NordPass   | 3              | $20            | $60        |
| Password    | 1Password  | 2              | $12            | $24        |
| PM Software | Notion     | 2              | $150           | $300       |
| PM Software | ClickUp    | 2              | $75            | $150       |
| Email       | ConvertKit | 2              | $100           | $200       |
| Desks       | FlexiSpot  | 2              | $50            | $100       |
| Laptops     | Amazon     | 5              | $30            | $150       |
| **Total**   |            |                |                | **$1,184** |

### Month 6 Projections (With Growth)

| Category          | Monthly Revenue  |
|-------------------|------------------|
| VPNs              | $400             |
| Password Managers | $150             |
| PM Software       | $600             |
| Email Marketing   | $500 + recurring |
| Standing Desks    | $200             |
| Laptops           | $300             |
| **Total**         | **$2,150+**      |

*Note: Recurring commissions (ConvertKit, ClickUp, Beehiiv) compound over time!*

---

## Application Checklist

### Immediate Priority (This Week)

- [ ] Amazon Associates - Required for laptops/desks articles
- [ ] ConvertKit - Best recurring commission
- [ ] 1Password (via Impact Radius) - Already have account
- [ ] Beehiiv - Fast approval, good commissions
- [ ] SafetyWing - Travel insurance, nomad-focused
- [ ] Wise - Banking, high priority for nomad content

### Next Week

- [ ] FlexiSpot - Standing desk coverage
- [ ] ActiveCampaign - Email marketing segment
- [ ] Autonomous - Budget desk segment
- [ ] HubSpot - CRM coverage
- [ ] Revolut - Banking/finance content
- [ ] World Nomads - Travel insurance alternative

### When Approved

- [ ] Update netlify.toml with actual affiliate URLs
- [ ] Test all redirect links
- [ ] Update this tracker with affiliate IDs
- [ ] Set up commission tracking spreadsheet

---

## Quick Reference Links

| Program           | Application URL                        |
|-------------------|----------------------------------------|
| Amazon Associates | <https://affiliate-program.amazon.com>   |
| NordVPN/NordPass  | <https://nordvpn.com/affiliate/>         |
| Impact Radius     | <https://impact.com>                     |
| PartnerStack      | <https://partnerstack.com>               |
| ConvertKit        | <https://convertkit.com/affiliates>      |
| Beehiiv           | <https://www.beehiiv.com/partners>       |
| FlexiSpot         | <https://www.flexispot.com/affiliate>    |
| ActiveCampaign    | <https://www.activecampaign.com/partner> |
| Autonomous        | <https://www.autonomous.ai/affiliate>    |
| CJ Affiliate      | <https://www.cj.com>                     |
| ShareASale        | <https://www.shareasale.com>             |

---

## Notes & Tips

### Application Tips

- **Be honest about traffic** - New sites get approved all the time
- **Mention your niche** - "Remote work and productivity tools"
- **Highlight quality** - "In-depth reviews and comparisons"
- **Show published content** - Apply after you have articles live

### If Rejected

- Wait 30 days before reapplying
- Add more quality content
- Try alternative programs in same category
- Consider direct outreach to brand marketing teams

### Managing Multiple Networks

You'll end up with accounts on:

- Amazon Associates
- Impact Radius (Notion, 1Password, Mailchimp)
- PartnerStack (ClickUp)
- CJ Affiliate (Dashlane, LastPass)
- ShareASale (Fully, Uplift)
- Direct programs (NordVPN, ConvertKit, etc.)

**Tip:** Use a password manager (1Password/NordPass) to store all logins!

---

**Last Action:** 2025-12-03 - ExpressVPN application DECLINED via Impact Radius. Reason: "Low reach (traffic, followers)".
This was expected since Impact Radius network access was declined earlier. Will reapply in Month 2-3 once site has
established traffic. NordVPN remains our primary VPN affiliate (already approved with 30-40% commission).

**Previous Action:** 2025-11-30 - Amazon Associates APPROVED! Store ID: floatjet-20. Automatically discovered 25 product
ASINs from published articles (laptops, desks, chairs, webcams, headphones, keyboards). Created amazon-products-asins.md
reference document. Added 25 affiliate redirects to netlify.toml. Critical: Must make 3 qualifying sales within 180 days
to stay active. Updated Applied Programs table and registration guide.

**Previous Actions:**

- 2025-11-30: PartnerStack Network Profile access limited. Marketplace access to new programs
  restricted. Reason: "Profile not a great fit, but may be in the future." ClickUp application (already submitted) not
  affected. Updated all PartnerStack program statuses to "⚠️ Unavailable (PS Network)" throughout affiliate-programs.md.
  Can reapply once site is launched with content and traffic.
- 2025-11-28: Impact Radius application declined (Account ID: 6717334). Reason: Site not live, no published content, no
  traffic. Updated affiliate-programs.md with decline details and deferral of Notion, 1Password, Mailchimp, HubSpot
  programs until Month 2-3 reapplication.
- 2025-11-24: Added new affiliate program categories: Accounting & Tax Software (QuickBooks, FreshBooks, Xero, TurboTax,
  Expensify, Dext), Investment & Retirement Platforms (Fidelity, Schwab, Betterment, Wealthfront, M1 Finance). Updated
  Digital Banking with N26. Five new finance guide articles written: freelancer-tax-deductions-guide,
  retirement-savings-freelancer, invoice-payment-terms-guide, multi-currency-banking-nomads,
  expense-home-office-furniture.

**Next Action:** Focus on site launch (Week 2-4). **Priority: Apply to direct programs and other networks first** -
Amazon Associates, ConvertKit, Beehiiv, FlexiSpot, Wise, Revolut, ShareASale, CJ Affiliate. Reapply to Impact Radius AND
PartnerStack Network in Month 2-3 (January 2026) once site has 20+ articles and traffic.
