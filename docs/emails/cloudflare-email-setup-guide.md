# Cloudflare Email Setup Guide

Complete guide to moving DNS from Netlify to Cloudflare and setting up free unlimited email forwarding for floatjet.com.

---

## What You'll Get

✅ **Unlimited free email addresses** (hello@, support@, sales@, etc.)
✅ **Free email forwarding** to your personal email
✅ **Faster website performance** (Cloudflare CDN)
✅ **Better security** (DDoS protection, SSL)
✅ **Send emails FROM floatjet.com** via Gmail

**Cost:** $0 forever (Cloudflare Free plan)

**Time Required:** 30 minutes setup + 2-24 hours DNS propagation

---

## Overview: What We're Doing

1. ✅ **Currently:** DNS at Netlify → Hosting at Netlify
2. 🔄 **After:** DNS at Cloudflare → Hosting still at Netlify
3. 📧 **Bonus:** Free unlimited email addresses

Your website continues working normally throughout this process.

---

## Prerequisites

- [x] Domain: floatjet.com (registered at GoDaddy)
- [x] Hosting: Netlify (floatjet.netlify.app)
- [x] Current DNS: Netlify DNS (will be moved to Cloudflare)
- [x] Personal email to forward to (Gmail recommended)

---

# Part 1: Move DNS to Cloudflare

## Step 1: Create Cloudflare Account

**Time:** 3 minutes

1. Open browser → Go to: https://dash.cloudflare.com/sign-up
2. Fill out signup form:
    - Email: (your email)
    - Password: (create strong password)
    - Click **"Sign Up"**
3. Check your email inbox
4. Click verification link in Cloudflare email
5. You'll be redirected to Cloudflare Dashboard

✅ **You should now see:** Cloudflare Dashboard with "Add a Site" button

---

## Step 2: Add Your Domain to Cloudflare

**Time:** 2 minutes

1. Click **"Add a Site"** (big blue button)
2. Enter your domain:
    - Type: `floatjet.com` (no www, no https://)
    - Click **"Add site"**
3. **Select plan:**
    - Scroll down to find **"Free"** plan ($0/month)
    - Click **"Continue"** under Free plan
4. Wait 30-60 seconds while Cloudflare scans your DNS

✅ **You should now see:** "Review your DNS records" page

---

## Step 3: Review DNS Records

**Time:** 2 minutes

Cloudflare automatically scanned your existing Netlify DNS. Verify these records are present:

**Should see these 3 records:**

| Type       | Name         | Content/Target               | Status                   |
|------------|--------------|------------------------------|--------------------------|
| A or CNAME | floatjet.com | floatjet.netlify.app         | ✅ Proxied (orange cloud) |
| CNAME      | www          | floatjet.netlify.app         | ✅ Proxied (orange cloud) |
| TXT        | floatjet.com | google-site-verification=... | (gray cloud)             |

**What to do:**

1. **Check all 3 records are there**
    - If missing, click "Add record" and add them manually
    - For Netlify: Type "A", Name "@", Content "75.2.60.5" (Netlify's IP)
    - Or Type "CNAME", Name "@", Content "floatjet.netlify.app"

2. **Orange cloud = Proxied (recommended)**
    - This means Cloudflare speeds up your site
    - Leave as orange cloud ✅

3. Click **"Continue"** at the bottom

✅ **You should now see:** "Change your nameservers" page

---

## Step 4: Get Your Cloudflare Nameservers

**Time:** 1 minute

You'll see a page with 2 nameservers. They look like:

```
dana.ns.cloudflare.com
greg.ns.cloudflare.com
```

**IMPORTANT:** Your nameservers will be **different names** (different cities/names)

**What to do:**

1. **COPY both nameservers** (highlight and Ctrl+C / Cmd+C)
2. **Keep this browser tab open** (don't close it)
3. **Write them down** or paste in a note (you'll need them in next step)

Example of what yours might look like:

- `amir.ns.cloudflare.com`
- `norah.ns.cloudflare.com`

OR

- `ns1.cloudflare.com`
- `ns2.cloudflare.com`

✅ **You should have:** Both nameservers copied/saved

---

## Step 5: Update Nameservers at GoDaddy

**Time:** 5 minutes

Now we tell GoDaddy to use Cloudflare's DNS instead of Netlify's.

### 5.1: Open GoDaddy Domains

1. **Open new browser tab**
2. Go to: https://dcc.godaddy.com/domains
3. Login if prompted
4. Find **floatjet.com** in your domains list

### 5.2: Access DNS Settings

1. Click **floatjet.com** row (or "DNS" button next to it)
2. OR click the three dots "⋮" → "Manage DNS"
3. Scroll down to **"Nameservers"** section (near bottom of page)

### 5.3: View Current Nameservers

You should currently see Netlify's nameservers (something like):

```
dns1.p08.nsone.net
dns2.p08.nsone.net
dns3.p08.nsone.net
dns4.p08.nsone.net
```

### 5.4: Change to Cloudflare Nameservers

1. Click **"Change Nameservers"** button
2. Select **"I'll use my own nameservers"** (radio button)
3. You'll see input fields for nameservers

4. **Delete the old Netlify nameservers:**
    - Remove all 4 NSOne entries
    - Click the "X" or trash icon next to each

5. **Add Cloudflare nameservers:**
    - Nameserver 1: (paste first Cloudflare nameserver)
        - Example: `dana.ns.cloudflare.com`
    - Nameserver 2: (paste second Cloudflare nameserver)
        - Example: `greg.ns.cloudflare.com`

6. Click **"Save"**

### 5.5: Confirm the Warning

GoDaddy shows a scary warning: "Changing nameservers will affect your site..."

**Don't worry!** This is normal. Click:

- **"Yes, I'm sure"** or
- **"Continue"** or
- **"OK"**

✅ **You should see:** "Nameservers updated successfully" message

---

## Step 6: Verify Nameservers in Cloudflare

**Time:** 1 minute

1. **Go back to the Cloudflare tab** (the one you kept open)
2. Click **"Done, check nameservers"** button
3. Cloudflare starts checking (you'll see a loading animation)

**What happens now:**

- Cloudflare checks every 5-10 minutes if nameservers updated
- This can take **2-24 hours** (usually 2-6 hours)
- You'll get an email: **"Cloudflare is now protecting floatjet.com"**

**Current status page shows:**

- ⏳ "Pending Nameserver Update"
- Or "We're waiting for your nameservers to update"

**You can:**

- ✅ Close the browser (you'll get email when ready)
- ✅ Click "Re-check now" to manually check
- ✅ Continue to next step (prep Netlify while waiting)

✅ **Expected:** Waiting for DNS propagation (2-24 hours)

---

## Step 7: Update Netlify Settings

**Time:** 2 minutes

Since DNS is moving to Cloudflare, tell Netlify you're using external DNS.

### 7.1: Open Netlify Domain Settings

1. Go to: https://app.netlify.com/sites/floatjet/configuration/domain
2. Scroll to **"Custom domains"** section
3. Find **floatjet.com** in the list

### 7.2: Switch to External DNS

1. Click **"Options"** button (next to floatjet.com)
2. Select **"Set up external DNS"** or **"Use external DNS"**
3. Confirm the action

**What this does:**

- Tells Netlify you're managing DNS elsewhere (Cloudflare)
- Your site keeps working normally
- Netlify no longer tries to manage DNS

✅ **You should see:** floatjet.com marked as "External DNS" or similar label

---

## Step 8: Wait for DNS Propagation

**Time:** 2-24 hours (mostly automated)

### What's Happening:

When you changed nameservers at GoDaddy, it started a process:

1. **GoDaddy updates** its records (instant)
2. **DNS servers worldwide** learn about the change (2-24 hours)
3. **Cloudflare confirms** it's receiving DNS queries (sends email)

### How to Check Progress:

**Option A: Wait for Cloudflare Email**

- Subject: "Cloudflare is now protecting floatjet.com"
- Once you get this → proceed to Part 2 (Email Setup)

**Option B: Check Manually**

1. Cloudflare Dashboard → Sites → floatjet.com
2. Look at top banner:
    - ⏳ Orange banner = Still waiting
    - ✅ Green/Active = Ready!

**Option C: Command Line Check**

```bash
nslookup floatjet.com
```

Look for Cloudflare nameservers in the output.

### Your Site During This Time:

- ✅ Website continues working normally
- ✅ Some visitors use old DNS (Netlify)
- ✅ Some visitors use new DNS (Cloudflare)
- ✅ Both point to same Netlify hosting
- ✅ No downtime, no issues

**When ready, you'll receive email from Cloudflare. Then proceed to Part 2 below.**

---

# Part 2: Setup Email Routing

**⚠️ WAIT FOR CLOUDFLARE EMAIL BEFORE STARTING THIS SECTION**

Once you receive "Cloudflare is now protecting floatjet.com" email, continue here.

---

## Step 9: Enable Email Routing

**Time:** 3 minutes

### 9.1: Access Email Settings

1. Go to: https://dash.cloudflare.com
2. Click **floatjet.com** (your site)
3. Left sidebar → Click **"Email"** → **"Email Routing"**

### 9.2: Start Email Routing Setup

1. Click **"Get Started"** button
2. Or **"Enable Email Routing"** if you see that instead

### 9.3: Add Destination Email

This is where forwarded emails will go (your personal email).

1. Click **"Add destination address"** or **"Destination addresses"** → **"Add"**
2. Enter **your personal email**:
    - Example: `yourname@gmail.com`
    - This is where floatjet.com emails will forward to
3. Click **"Send verification email"**

### 9.4: Verify Destination Email

1. **Check your personal email inbox** (the one you just entered)
2. Email subject: "Verify your email address for Cloudflare Email Routing"
3. Click **"Verify email address"** link in email
4. Browser opens → Shows "Email verified" message

### 9.5: Back to Cloudflare

1. Return to Cloudflare Email Routing tab
2. Refresh page if needed
3. Your email should now show **green checkmark** ✅ "Verified"
4. Click **"Continue"** or **"Next"**

✅ **You should see:** Your email listed as verified destination

---

## Step 10: Create Email Addresses

**Time:** 5 minutes

Now create the actual floatjet.com email addresses.

### 10.1: Create First Email Address

1. Click **"Create address"** or **"Routing rules"** → **"Create"**

2. **Fill out the form:**
    - **Custom address:** `hello`
        - (This creates hello@floatjet.com)
    - **Action:** Select "Send to an email"
    - **Destination:** Select your verified email from dropdown

3. Click **"Save"** or **"Create"**

✅ **Created:** `hello@floatjet.com` → forwards to your email

### 10.2: Create Second Email Address

1. Click **"Create address"** again
2. **Fill out:**
    - **Custom address:** `support`
    - **Action:** Send to an email
    - **Destination:** (your verified email)
3. Click **"Save"**

✅ **Created:** `support@floatjet.com` → forwards to your email

### 10.3: Create Third Email Address

1. Click **"Create address"** again
2. **Fill out:**
    - **Custom address:** `affiliates`
    - **Action:** Send to an email
    - **Destination:** (your verified email)
3. Click **"Save"**

✅ **Created:** `affiliates@floatjet.com` → forwards to your email

### 10.4: Create More (Optional)

You can create unlimited addresses:

- `sales@floatjet.com`
- `info@floatjet.com`
- `contact@floatjet.com`
- `yourname@floatjet.com`

All free, all forwarding to your personal email!

---

## Step 11: Test Email Receiving

**Time:** 2 minutes

### 11.1: Send Test Email

1. From **another email account** (not the destination email)
2. Send email TO: `hello@floatjet.com`
3. Subject: "Test"
4. Body: "Testing floatjet email"
5. Send it

### 11.2: Check Delivery

1. **Check your personal email** (destination email)
2. Within **30 seconds to 2 minutes**, you should receive:
    - From: (the sender)
    - To: hello@floatjet.com
    - Forwarded to your email

**If you got the email: ✅ Email receiving works!**

**If NOT received after 5 minutes:**

- Check spam/junk folder
- Check Cloudflare Email Routing dashboard for errors
- See Troubleshooting section below

---

# Part 3: Send Emails FROM floatjet.com

Now set up Gmail to send emails using your hello@floatjet.com address.

---

## Step 12: Configure Gmail Sending

**Time:** 5 minutes

### 12.1: Open Gmail Settings

1. Go to: https://mail.google.com
2. Login to your Gmail
3. Click **⚙️ Settings icon** (top right)
4. Click **"See all settings"**
5. Click **"Accounts and Import"** tab

### 12.2: Add floatjet.com Email

1. Find section: **"Send mail as"**
2. Click **"Add another email address"**
3. A popup window opens

### 12.3: Enter Email Information

In the popup:

1. **Name:**
    - Enter: `FloatJet` or your actual name
    - This is what recipients see as sender name

2. **Email address:**
    - Enter: `hello@floatjet.com`

3. **Checkbox:** ✅ "Treat as an alias"
    - **MUST check this box!**

4. Click **"Next Step"**

### 12.4: Configure SMTP Settings

New popup appears with SMTP settings:

**Fill in these EXACT values:**

- **SMTP Server:** `smtp.gmail.com`
- **Port:** `587`
- **Username:** `your_actual_gmail@gmail.com`
    - (Your full Gmail address)
- **Password:**
    - If 2FA enabled: Use App Password (see Step 12.5)
    - If no 2FA: Your regular Gmail password
- **Checkbox:** ✅ "Secured connection using TLS (recommended)"
    - **MUST check this!**

Click **"Add Account"**

### 12.5: Gmail App Password (If Using 2FA)

**Skip this if you don't have 2-Factor Authentication enabled**

If Gmail rejects your password:

1. Go to: https://myaccount.google.com/security
2. Click **"2-Step Verification"**
3. Scroll to bottom → Click **"App passwords"**
4. **Select app:** Mail
5. **Select device:** Other (Custom name)
6. Type: "FloatJet Email"
7. Click **"Generate"**
8. Copy the **16-character password** (looks like: `abcd efgh ijkl mnop`)
9. Use THIS password in Step 12.4 (not your regular Gmail password)

### 12.6: Verify Email Address

1. Gmail sends confirmation email to `hello@floatjet.com`
2. **Check your personal email** (it's forwarded there via Cloudflare)
3. Email subject: "Gmail Confirmation - Send Mail as hello@floatjet.com"
4. **Click the verification link** in the email
5. Browser shows: "Confirmation Success"

**Alternatively:**

- Copy the confirmation code from email
- Paste in Gmail popup window
- Click "Verify"

✅ **You should see:** hello@floatjet.com listed in "Send mail as" section

---

## Step 13: Set Default Sender

**Time:** 1 minute

**Optional but recommended:**

1. Still in Gmail → Settings → Accounts and Import
2. Find **"Send mail as"** section
3. You should see:
    - Your Gmail address
    - hello@floatjet.com ✅ (newly added)
4. Next to `hello@floatjet.com`, click **"make default"**

Now all new emails will send FROM hello@floatjet.com by default!

You can still switch between addresses when composing.

---

## Step 14: Test Sending Email

**Time:** 2 minutes

### 14.1: Compose New Email

1. Gmail → Click **"Compose"**
2. **From field:** Should show `hello@floatjet.com`
    - If not, click "From" dropdown → Select `hello@floatjet.com`

### 14.2: Send Test Email

1. **To:** (another email address you own, or friend)
2. **Subject:** "Test from FloatJet"
3. **Body:** "Testing my new professional email!"
4. Click **"Send"**

### 14.3: Verify Receipt

1. Check the recipient's inbox
2. Email should show:
    - **From:** FloatJet <hello@floatjet.com>
    - NOT from your Gmail address

**If it worked: ✅ Email sending works!**

---

# ✅ Setup Complete!

## What You Now Have:

✅ **DNS:** Managed by Cloudflare (faster, more secure)
✅ **Hosting:** Still at Netlify (unchanged)
✅ **Receiving emails:** Unlimited addresses forwarding to your inbox
✅ **Sending emails:** Can send FROM hello@floatjet.com via Gmail

## Your Email Addresses:

- 📧 `hello@floatjet.com` → your email
- 📧 `support@floatjet.com` → your email
- 📧 `affiliates@floatjet.com` → your email
- ➕ Create unlimited more anytime

## How to Use:

**Receiving:**

- Anyone emails hello@floatjet.com
- Automatically forwards to your personal email
- Reply normally (will show your Gmail address)
- OR reply from hello@floatjet.com (see below)

**Sending:**

- Gmail → Compose → From: hello@floatjet.com
- Send as normal
- Recipient sees: hello@floatjet.com (professional!)

---

# Managing Your Email

## Add More Email Addresses

Anytime you want:

1. Cloudflare Dashboard → floatjet.com → Email → Email Routing
2. Click "Create address"
3. Enter custom address (e.g., `sales`)
4. Select destination → Save
5. Done! sales@floatjet.com now works

## Forward to Multiple Emails

1. Cloudflare Email Routing → Create address
2. Custom address: `team`
3. Action: "Send to multiple emails"
4. Add multiple destinations:
    - youremail@gmail.com
    - cofounder@email.com
5. Save

Now team@floatjet.com → both receive it!

## Change Where Emails Forward

1. Cloudflare Email Routing
2. Find the address (e.g., hello@floatjet.com)
3. Click "Edit"
4. Change destination email
5. Verify new destination if needed
6. Save

## Delete an Email Address

1. Cloudflare Email Routing
2. Find address to delete
3. Click "Delete" or trash icon
4. Confirm deletion

That address stops working immediately.

---

# Troubleshooting

## Issue: Nameservers Not Updating After 48 Hours

**Symptoms:**

- Cloudflare still shows "Pending nameserver update"
- Been more than 48 hours

**Solutions:**

1. **Verify nameservers at GoDaddy:**
    - GoDaddy → Domains → floatjet.com → DNS
    - Check nameservers section
    - Should show Cloudflare nameservers (not NSOne)

2. **Check nameserver propagation:**
    - Go to: https://www.whatsmydns.net/
    - Enter: floatjet.com
    - Type: NS
    - Should show Cloudflare nameservers globally
    - If still showing old ones → wait more

3. **Manually re-check in Cloudflare:**
    - Cloudflare → floatjet.com
    - Click "Re-check now" button

4. **Contact GoDaddy support:**
    - If still not working after 72 hours
    - Ask them to verify nameserver update processed

---

## Issue: Website Down After Nameserver Change

**Symptoms:**

- floatjet.com not loading
- Shows error page

**Solutions:**

1. **Check Cloudflare DNS records:**
    - Cloudflare Dashboard → floatjet.com → DNS → Records
    - Verify these exist:
        - A or CNAME: @ → floatjet.netlify.app
        - CNAME: www → floatjet.netlify.app

2. **Add missing DNS record:**
    - Click "Add record"
    - Type: CNAME
    - Name: @
    - Target: floatjet.netlify.app
    - Proxy: ON (orange cloud)
    - Save

3. **Check SSL/TLS mode:**
    - Cloudflare → SSL/TLS
    - Should be: "Flexible" or "Full"
    - Change if needed → Wait 5 minutes

4. **Disable Universal SSL (temporary test):**
    - SSL/TLS → Edge Certificates
    - Disable Universal SSL
    - Wait 5 minutes → Re-enable
    - This forces SSL reset

---

## Issue: Not Receiving Forwarded Emails

**Symptoms:**

- Sending to hello@floatjet.com
- Never arrives at destination email

**Solutions:**

1. **Check spam/junk folder:**
    - Search for emails FROM Cloudflare
    - Mark as "Not Spam" if found

2. **Verify destination email:**
    - Cloudflare Email Routing → Destination addresses
    - Should show green checkmark ✅
    - If not verified → Click resend verification

3. **Check email routing rules:**
    - Email Routing → Routing rules
    - Verify hello@ exists and is enabled
    - Should show destination email correctly

4. **Test with Cloudflare's checker:**
    - Email Routing → Send test email
    - Enter your destination email
    - Click send → Check if received

5. **Check DNS MX records:**
    - Cloudflare → DNS → Records
    - Should see MX records (auto-created):
        - Type: MX, Priority: varies
    - If missing → Disable/re-enable Email Routing

6. **Wait 15 minutes:**
    - Email routing just enabled?
    - Can take up to 15 minutes to activate

---

## Issue: Gmail Won't Send FROM floatjet.com

**Symptoms:**

- Added email to Gmail "Send mail as"
- Can't send emails, errors appear

**Solutions:**

1. **Verify email confirmed:**
    - Gmail Settings → Accounts → Send mail as
    - Should show: hello@floatjet.com (default)
    - If shows "confirmation pending" → Check email again

2. **Check SMTP settings:**
    - Click "Edit info" next to hello@floatjet.com
    - Verify:
        - SMTP: smtp.gmail.com
        - Port: 587
        - Username: your full Gmail
        - TLS: ✅ Enabled

3. **Use App Password:**
    - If using 2FA → MUST use App Password
    - Cannot use regular Gmail password
    - See Step 12.5 to create App Password

4. **Remove and re-add:**
    - Delete hello@floatjet.com from "Send mail as"
    - Re-add from scratch following Step 12

5. **Try different SMTP port:**
    - Port 465 with SSL (instead of 587)
    - Some networks block port 587

---

## Issue: Emails Going to Spam

**Symptoms:**

- Sending emails from hello@floatjet.com
- Recipients receive in spam folder

**Solutions:**

1. **Add SPF record:**
    - Cloudflare → DNS → Records → Add record
    - Type: TXT
    - Name: @
    - Content: `v=spf1 include:_spf.google.com ~all`
    - Save

2. **Add DKIM (Google Workspace required):**
    - Free Gmail doesn't support custom DKIM
    - Recipients may mark as spam
    - Ask them to mark as "Not Spam"

3. **Build sender reputation:**
    - Send emails gradually (not mass emails)
    - Recipients should add you to contacts
    - Over time, spam rate improves

4. **Avoid spam triggers:**
    - Don't use ALL CAPS in subject
    - Don't use excessive exclamation marks!!!
    - Don't use spam words: FREE, WIN, CLICK HERE

---

## Issue: Cloudflare Shows "Too Many Redirects"

**Symptoms:**

- Website shows redirect error
- Infinite redirect loop

**Solutions:**

1. **Change SSL/TLS mode:**
    - Cloudflare → SSL/TLS
    - Change from "Flexible" → "Full"
    - Wait 5 minutes
    - Try again

2. **Check Netlify HTTPS:**
    - Netlify should force HTTPS
    - Cloudflare should be "Full SSL"
    - Match SSL settings

3. **Disable Cloudflare proxy temporarily:**
    - DNS → Records
    - Click orange cloud → Gray cloud
    - Wait 5 minutes
    - If works → SSL issue confirmed

---

## Getting Help

### Cloudflare Community

- https://community.cloudflare.com/
- Very active, helpful community
- Search first, then ask

### Cloudflare Support

- Free plan: Community forum only
- Paid plans: Email/chat support

### Check Status

- https://www.cloudflarestatus.com/
- See if Cloudflare services are down

---

# Common Questions (FAQ)

## Will my website go down during DNS change?

**No.** Your website continues working throughout:

- Old DNS (Netlify) points to floatjet.netlify.app
- New DNS (Cloudflare) points to floatjet.netlify.app
- Both work, no downtime

## Can I still use Netlify?

**Yes!** Hosting stays at Netlify:

- Netlify still hosts your site
- Cloudflare just handles DNS
- Everything works together

## Can I move DNS back to Netlify?

**Yes**, anytime:

1. Netlify → Domain settings → Use Netlify DNS
2. GoDaddy → Change nameservers back to Netlify
3. Wait for propagation
4. Email stops working (loses Cloudflare Email Routing)

## How many email addresses can I create?

**Unlimited** on Cloudflare free plan:

- Create as many as you want
- All forward to your destination email
- No limits

## Can I have multiple destination emails?

**Yes:**

1. Verify multiple destination emails
2. Create routing rule
3. Action: "Send to multiple emails"
4. Select all destinations

## Does this work with any email provider?

**Yes**, destination can be:

- ✅ Gmail
- ✅ Outlook/Hotmail
- ✅ Yahoo
- ✅ ProtonMail
- ✅ Any email address

## Can I use this for business email?

**Yes**, for receiving:

- Professional email addresses
- Unlimited forwarding
- Free forever

**For sending:**

- Limited by Gmail's sending limits
- Not ideal for high-volume
- Consider Google Workspace for that

## What are Gmail's sending limits?

**Free Gmail:**

- 500 emails/day
- 100 recipients/email

**Google Workspace:**

- 2,000 emails/day
- More professional features

## Can I receive attachments?

**Yes:**

- Attachments up to 25MB
- Forwarded to your email
- No size restrictions from Cloudflare

## What if I send large emails?

Gmail limits:

- 25MB per email (including attachments)
- Larger files → Use Google Drive links

## Can I create catch-all email?

**Yes:**

1. Cloudflare Email Routing → Create address
2. Custom address: Use wildcard `*`
3. Destination: your email
4. Now ANY@floatjet.com forwards to you

**Warning:** You'll get spam to random addresses.

## How do I stop receiving spam?

1. **Don't use catch-all** (wildcard *)
2. **Only create addresses you need**
3. **Delete unused addresses** if spam comes
4. **Create new address** if one gets spam
5. **Use Gmail filters** to auto-delete

## Can I auto-reply to emails?

**Not with Cloudflare Email Routing.**

Would need:

- Gmail filters/auto-reply (limited)
- Or full email hosting (Zoho, Google Workspace)

## What happens if Cloudflare goes down?

**Rare, but:**

- Website still works (hosted on Netlify)
- Email receiving stops temporarily
- Emails bounce back to sender
- Resume when Cloudflare back up
- Cloudflare 99.99% uptime

## Can I use multiple domains?

**Yes:**

- Free plan: Unlimited domains
- Repeat this process for each domain
- Each domain gets its own email addresses

## Do I need to verify each email address?

**No:**

- Only verify **destination** emails (where forwards go)
- Don't need to verify floatjet.com addresses
- Can create unlimited floatjet.com addresses instantly

## Can I forward different addresses to different emails?

**Yes:**

1. Verify multiple destination emails
2. Create routing rule:
    - hello@floatjet.com → yourwork@gmail.com
    - support@floatjet.com → support@company.com
    - sales@floatjet.com → sales@company.com

## Will emails show floatjet.com when forwarded?

**Depends on setting:**

- Default: Shows original sender
- Recipient sees: From sender, To: hello@floatjet.com
- They can reply to floatjet.com address
- Reply goes to your destination email

## How do I reply from floatjet.com?

**Option 1: Gmail "Send as"** (this guide)

- Reply manually
- Change From: to hello@floatjet.com
- Send

**Option 2: Gmail filters** (advanced)

- Auto-select floatjet.com based on To: field
- More complex setup

## Can I use with iPhone Mail?

**Receiving:** Yes

- Emails forward to your email
- Read in any mail app

**Sending:** Harder

- Gmail app: Works perfectly
- Apple Mail: Need SMTP setup (complex)
- Recommend: Use Gmail app

## Can teammates send from same address?

**No**, each person needs:

- Their own Gmail account
- Add hello@floatjet.com to their Gmail
- Each sends independently
- Or use shared Gmail account (not recommended)

## Can I see email analytics?

**Basic:**

- Cloudflare shows count of forwarded emails
- No detail on opens, clicks, etc.

**For analytics:**

- Need email marketing tool (Mailchimp, etc.)
- Or Google Workspace

## What about email signatures?

**Gmail:**

- Settings → General → Signature
- Create signature for hello@floatjet.com
- Shows when sending from that address

**Include:**

- Name
- Title
- floatjet.com
- Social links

## Can I schedule emails?

**Yes, in Gmail:**

- Compose email
- Click arrow next to Send
- Choose "Schedule send"
- Pick date/time
- Works with floatjet.com address

## Do I need Google Workspace?

**No**, unless you need:

- More professional features
- Higher sending limits
- Multiple users with individual inboxes
- Calendar integration
- Admin controls

**Free Gmail + Cloudflare works great for:**

- Solo entrepreneurs
- Small businesses
- Personal brands
- Limited email volume

---

# Maintenance

## Monthly Checks (Recommended)

**Check DNS health:**

1. Visit: floatjet.com
2. Should load quickly
3. SSL padlock shows ✅

**Check email forwarding:**

1. Send test to hello@floatjet.com
2. Should receive in 1-2 minutes

**Review email addresses:**

1. Cloudflare Email Routing
2. Delete unused addresses
3. Update destinations if changed

## Annual Review

**Security:**

- Rotate Gmail App Password
- Review Cloudflare security settings
- Check for suspicious email activity

**Optimization:**

- Review which addresses get spam
- Delete and recreate spammy addresses
- Update email signature

---

# What's Next?

## Optional Enhancements

### 1. Add More Email Features

**SPF Record** (improves deliverability):

```
Cloudflare DNS → Add TXT record
Name: @
Content: v=spf1 include:_spf.google.com ~all
```

**DMARC Record** (prevents spoofing):

```
Type: TXT
Name: _dmarc
Content: v=DMARC1; p=none; rua=mailto:dmarc@floatjet.com
```

### 2. Performance Optimizations

**Cloudflare → Speed:**

- Enable Auto Minify (JS, CSS, HTML)
- Enable Brotli compression
- Configure caching rules

**Cloudflare → Caching:**

- Browser Cache TTL: 4 hours
- Always Online: ON
- Development Mode: OFF (unless testing)

### 3. Security Enhancements

**Cloudflare → Security:**

- Enable "Under Attack Mode" if needed
- Configure WAF rules
- Enable Bot Fight Mode

**Cloudflare → SSL/TLS:**

- Enable "Always Use HTTPS"
- Enable "Automatic HTTPS Rewrites"
- HSTS: Consider enabling (advanced)

### 4. Advanced Email

**Email Routing → Catch-All:**

- Forward any@floatjet.com to your email
- Useful but attracts spam

**Email Routing → Multiple Destinations:**

- Forward one address to multiple people
- Good for team@, support@

**Gmail → Filters:**

- Auto-label emails from floatjet.com
- Auto-archive, auto-reply, etc.

---

# Resources

## Official Documentation

- **Cloudflare Email Routing:** https://developers.cloudflare.com/email-routing/
- **Cloudflare DNS:** https://developers.cloudflare.com/dns/
- **Netlify DNS:** https://docs.netlify.com/domains-https/custom-domains/

## Helpful Tools

- **DNS Checker:** https://www.whatsmydns.net/
- **Email Tester:** https://www.mail-tester.com/
- **SSL Checker:** https://www.ssllabs.com/ssltest/

## Community Support

- **Cloudflare Community:** https://community.cloudflare.com/
- **Netlify Community:** https://answers.netlify.com/

---

# Summary Checklist

Use this to verify everything is set up:

## DNS Migration

- [x] Created Cloudflare account
- [x] Added floatjet.com to Cloudflare
- [x] Reviewed DNS records (3 records present)
- [x] Got Cloudflare nameservers
- [x] Updated GoDaddy nameservers
- [x] Verified in Cloudflare (received email)
- [x] Updated Netlify to External DNS
- [x] Website still working

## Email Receiving

- [x] Enabled Email Routing
- [x] Added destination email
- [x] Verified destination email
- [x] Created hello@floatjet.com
- [x] Created support@floatjet.com
- [x] Created affiliates@floatjet.com
- [x] Tested receiving (got test email)

## Email Sending

- [x] Added floatjet.com to Gmail
- [x] Configured SMTP settings
- [x] Verified email in Gmail
- [x] Set as default sender
- [x] Tested sending (recipient got email)

## ✅ All Done!

You now have:

- Professional email addresses
- Free unlimited forwarding
- Ability to send from floatjet.com
- Faster website (Cloudflare CDN)
- Better security

---

**Need help?** Re-read relevant section above or check Troubleshooting.

**Everything working?** You're all set! 🎉

---

*Last updated: 2025-12-01*
*For: floatjet.com*
*Guide version: 1.0*
