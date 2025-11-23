# Week 3 Affiliate Programs Guide

**Articles Covered:**
- FJ-012: Best Laptops for Remote Work
- FJ-013: Best Email Marketing Tools for Creators
- FJ-014: Best Standing Desks for Home Office

---

## Summary Table

| Program | Article(s) | Commission | Cookie | Priority | Network |
|---------|-----------|------------|--------|----------|---------|
| Amazon Associates | Laptops, Desks | 3-6% | 24h | **CRITICAL** | Direct |
| ConvertKit | Email Marketing | $100 + 40% recurring (24mo) | 60 days | **HIGH** | Direct |
| Beehiiv | Email Marketing | 50% recurring (12mo) | 60 days | **HIGH** | Direct |
| FlexiSpot | Standing Desks | 8-10% | 30 days | **HIGH** | Direct |
| ActiveCampaign | Email Marketing | 20-30% recurring | 90 days | MEDIUM | Direct |
| Mailchimp | Email Marketing | 20-30% first payment | 30 days | MEDIUM | Impact Radius |
| Autonomous | Standing Desks | 10% | 30 days | MEDIUM | Direct |
| Fully/Uplift | Standing Desks | 5-8% | 30 days | LOW | ShareASale |

---

## Critical Priority Programs

### 1. Amazon Associates
**URL:** https://affiliate-program.amazon.com

**Required For:**
- FJ-012: Best Laptops (MacBook, ThinkPad, Dell XPS, etc.)
- FJ-014: Best Standing Desks (FlexiSpot E7, Fezibo, etc.)

**Commission Structure:**
- Electronics (laptops): 3%
- Furniture (desks): 4-6%
- Bonus: Cart additions also earn commission

**Important Notes:**
- Approval takes 24-48 hours
- Must make **3 qualifying sales within 180 days** to remain active
- 24-hour cookie is SHORT - optimize for immediate purchases
- If rejected, can reapply after adding more content

**Application Tips:**
- Apply early (before articles go live)
- Ensure site has privacy policy and about page
- Describe affiliate disclosure process in application

---

## High Priority Programs

### 2. ConvertKit (Best Commission!)
**URL:** https://convertkit.com/affiliates

**Required For:**
- FJ-013: Best Email Marketing Tools (TOP recommendation)

**Commission Structure:**
- $100 signup bonus
- **40% recurring for 24 months** (exceptional!)
- Example: $59/mo plan = $23.60/mo for 2 years = ~$566 per referral

**Application Tips:**
- They prefer affiliates who actually use ConvertKit
- Mention creator/blogger focus in application
- Highlight remote work/productivity niche

**Note:** ConvertKit rebranded to "Kit" - same affiliate program

---

### 3. Beehiiv
**URL:** https://www.beehiiv.com/partners

**Required For:**
- FJ-013: Best Email Marketing Tools (newsletter-focused)

**Commission Structure:**
- **50% recurring for 12 months**
- Growing platform, high conversions for newsletter creators

**Application Tips:**
- Fast-growing platform, eager for affiliates
- Good for creator/newsletter audience

---

### 4. FlexiSpot
**URL:** https://www.flexispot.com/affiliate

**Required For:**
- FJ-014: Best Standing Desks (FlexiSpot E7, E5)

**Commission Structure:**
- 8-10% commission
- Popular brand with frequent sales
- 30-day cookie

**Application Tips:**
- Popular standing desk brand
- Mention home office/remote work angle

---

## Medium Priority Programs

### 5. ActiveCampaign
**URL:** https://www.activecampaign.com/partner

**Commission:** 20-30% recurring | **Cookie:** 90 days

For advanced automation users. Higher-priced plans mean larger commissions.

---

### 6. Mailchimp
**URL:** Via Impact Radius marketplace

**Commission:** 20-30% first payment | **Cookie:** 30 days

Most recognized email brand. High conversions for beginners.

---

### 7. Autonomous
**URL:** https://www.autonomous.ai/affiliate

**Commission:** 10% | **Cookie:** 30 days

Budget standing desk segment (SmartDesk Pro ~$400).

---

## Lower Priority Programs

### 8. Fully/Uplift
**URL:** https://www.fully.com/affiliate-program

**Commission:** 5-8% | **Cookie:** 30 days | **Network:** ShareASale

Premium segment. Lower commission but higher price points.

---

## Alternative Programs (Backup)

If primary programs reject the application:

### Laptops Alternatives
| Program | Commission | Notes |
|---------|------------|-------|
| Best Buy Affiliate | 0.5-1% | Lower commission but good inventory |
| Dell Affiliate | 2-4% | Direct brand program |
| HP Affiliate | 4-6% | Direct brand program |
| Lenovo Affiliate | 2-4% | Good for ThinkPads |
| B&H Photo | 2-8% | Tech products |

### Email Marketing Alternatives
| Program | Commission | Notes |
|---------|------------|-------|
| MailerLite | 30% recurring | Good free tier |
| Flodesk | 50% first payment | Flat $38/mo pricing |
| Buttondown | Unknown | Simple newsletter tool |

### Standing Desk Alternatives
| Program | Commission | Notes |
|---------|------------|-------|
| Branch Furniture | 8% | Premium design focus |
| Vari | Unknown | Well-known brand |

---

## Application Checklist

### Before Applying
- [ ] Site has published content (at least 5+ pages)
- [ ] Privacy policy page exists
- [ ] About page exists
- [ ] Affiliate disclosure statement ready
- [ ] Contact information visible

### Application Order (Priority)

**Week Before Week 3:**
1. [ ] Amazon Associates - Required for 2 articles
2. [ ] ConvertKit - Best recurring commission
3. [ ] FlexiSpot - Standing desk coverage
4. [ ] Beehiiv - Newsletter platform

**During Week 3:**
5. [ ] ActiveCampaign - Automation segment
6. [ ] Mailchimp (via Impact Radius) - Beginner segment
7. [ ] Autonomous - Budget desk segment

---

## Netlify Redirect Templates

Add to `netlify.toml` after approvals:

```toml
# Amazon Laptops
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

# Amazon Desks
[[redirects]]
  from = "/go/amazon/flexispot-e7"
  to = "https://amazon.com/dp/[ASIN]?tag=floatjet-20"
  status = 301
  force = true

[[redirects]]
  from = "/go/amazon/fezibo-desk"
  to = "https://amazon.com/dp/[ASIN]?tag=floatjet-20"
  status = 301
  force = true

# Email Marketing
[[redirects]]
  from = "/go/convertkit"
  to = "https://convertkit.com?lmref=[YOUR_ID]"
  status = 301
  force = true

[[redirects]]
  from = "/go/beehiiv"
  to = "https://beehiiv.com?via=[YOUR_ID]"
  status = 301
  force = true

[[redirects]]
  from = "/go/mailchimp"
  to = "https://mailchimp.com?affiliate=[YOUR_ID]"
  status = 301
  force = true

[[redirects]]
  from = "/go/activecampaign"
  to = "https://activecampaign.com?affiliate=[YOUR_ID]"
  status = 301
  force = true

# Standing Desks (Direct)
[[redirects]]
  from = "/go/flexispot"
  to = "https://flexispot.com?affiliate=[YOUR_ID]"
  status = 301
  force = true

[[redirects]]
  from = "/go/autonomous"
  to = "https://autonomous.ai?affiliate=[YOUR_ID]"
  status = 301
  force = true

[[redirects]]
  from = "/go/uplift"
  to = "https://upliftdesk.com?affiliate=[YOUR_ID]"
  status = 301
  force = true
```

---

## Revenue Potential (Month 1 Estimates)

Assuming modest traffic and 1% conversion:

| Program | Est. Referrals | Commission | Monthly |
|---------|----------------|------------|---------|
| Amazon Laptops | 5 | $30 avg | $150 |
| Amazon Desks | 3 | $25 avg | $75 |
| ConvertKit | 2 | $100 + recurring | $200+ |
| FlexiSpot | 2 | $50 avg | $100 |
| **Total** | | | **$525+** |

*Recurring commissions (ConvertKit, Beehiiv) compound over time!*

---

## Quick Links

| Program | Application URL |
|---------|-----------------|
| Amazon Associates | https://affiliate-program.amazon.com |
| ConvertKit | https://convertkit.com/affiliates |
| Beehiiv | https://www.beehiiv.com/partners |
| FlexiSpot | https://www.flexispot.com/affiliate |
| ActiveCampaign | https://www.activecampaign.com/partner |
| Autonomous | https://www.autonomous.ai/affiliate |
| Fully | https://www.fully.com/affiliate-program |

---

**Next Step:** Apply to Amazon Associates and ConvertKit immediately (24-48 hour approval time).
