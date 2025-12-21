# Zoho Social Bulk Upload Guide

How to format CSV files for Zoho Social's bulk scheduler.

---

## Column Format (In Order)

| Column | Name | Required | Description |
|--------|------|----------|-------------|
| A | Schedule Time | Yes | `MM/DD/YYYY HH:MM` format |
| B | Post Content | Yes | Text in double quotes |
| C | Link | No | Full URL (https://...) |
| D | Media | No | Public image URLs, comma-separated |
| E | GMB Button Name | No | Google Business only |
| F | GMB Link | No | Google Business only |

---

## Critical Rules

### 1. NO HEADER ROW
Start directly with data. Do NOT include column names.

**Wrong:**
```
Schedule Time,Post Content,Link,Media,GMB Button Name,GMB Link
12/21/2025 15:00,"Tweet content here",https://example.com,,,
```

**Correct:**
```
12/21/2025 15:00,"Tweet content here",https://example.com
```

### 2. LINE BREAKS USE `\n`
Use literal `\n` for line breaks. Do NOT use actual newlines (Zoho treats each line as a separate post).

**Wrong (actual newlines):**
```
12/21/2025 15:00,"First paragraph.

Second paragraph.

#Hashtag",,,,,
```

**Correct (literal \n):**
```
12/21/2025 15:00,"First paragraph.\n\nSecond paragraph.\n\n#Hashtag"
```

### 2a. HASHTAG FORMATTING
Hashtags must start on a new line. Add `\n\n` before hashtags.

```
12/21/2025 15:00,"Post content here.\n\n#RemoteWork #Productivity"
```

### 3. CONTENT IN DOUBLE QUOTES
Always wrap post content in double quotes.

```
12/21/2025 15:00,"This is the tweet content.\n\n#RemoteWork"
```

### 4. USE SINGLE QUOTES INSIDE CONTENT
If content contains quotes, use single quotes—not double quotes. This avoids escaping issues with Zoho.

**Wrong (escaped double quotes):**
```
12/21/2025 15:00,"He said ""hello"" to everyone.\n\n#Quote"
```

**Correct (single quotes):**
```
12/21/2025 15:00,"He said 'hello' to everyone.\n\n#Quote"
```

### 5. NO TRAILING COMMAS FOR POSTS WITHOUT LINKS
Posts without links should end after the closing quote. Do NOT add trailing commas.

**Wrong (causes "something wrong with link" error):**
```
12/21/2025 15:00,"Tweet without link",,,,
```

**Correct:**
```
12/21/2025 15:00,"Tweet without link"
```

**Posts WITH links:**
```
12/21/2025 15:00,"Tweet with link",https://example.com
```

### 6. TIME FORMAT
Use 24-hour time format: `HH:MM`
- 3:00 PM = `15:00`
- 7:00 PM = `19:00`
- 4:00 PM = `16:00`

### 7. SCHEDULE 1+ HOUR AHEAD
All posts must be scheduled at least 1 hour in the future from upload time.

---

## Example: Twitter CSV

```csv
12/21/2025 15:00,"Switched password managers last month. Migration was annoying but worth it. The old one kept logging me out randomly.\n\n#Cybersecurity",https://floatjet.com/tools/best-password-manager-remote-work/
12/21/2025 19:00,"Remote work tip: backup your files before traveling.\n\n#DigitalNomad"
12/22/2025 15:00,"Two-factor authentication is annoying until you get hacked.\n\n#Cybersecurity",https://floatjet.com/guides/two-factor-authentication-guide/
```

---

## Example: LinkedIn CSV

Same format, but:
- LinkedIn suppresses posts with links in body
- Put "Link in comments." in content
- Leave Link column empty
- Manually add comment with link after posting

```csv
12/21/2025 16:00,"Physical notebooks in 2024. Hear me out.\n\nYeah I've got Notion but paper still wins for complex thinking.\n\nLink in comments.\n\n#Productivity #RemoteWork"
12/22/2025 16:00,"VPN testing update: ran speed tests from 8 different locations. The differences are wild.\n\nLink in comments.\n\n#Cybersecurity"
```

## Example: LinkedIn CSV with Link

For LinkedIn posts that include a direct link (not "link in comments"):

```csv
12/21/2025 16:00,"Password manager update: still the single best security investment.\n\nThis week it saved me twice.\n\n#Cybersecurity #Productivity",https://floatjet.com/tools/best-password-manager-remote-work/
```

---

## Upload Steps

1. Go to **Zoho Social → Publishing → Bulk Scheduler**
2. Click **Upload**
3. Set Date Format: `MM/DD/YYYY HH:MM`
4. Upload your `.csv` file
5. Select channel (Twitter/LinkedIn)
6. Review preview
7. Click **Schedule**

---

## Common Errors & Fixes

| Error | Cause | Fix |
|-------|-------|-----|
| "Date not in selected format" | Header row included | Remove header row |
| "Date not in selected format" | Newlines in content | Put all content on one line, use `\n` |
| "Forgot to type content" | Newlines split the row | Single line per post, use `\n` for breaks |
| "Past date" | Schedule time already passed | Use future dates |
| "Something wrong with link" | Trailing commas on posts without links | Remove trailing commas (e.g., `,,,,`) |
| "Something wrong with link" | Content not in double quotes | Wrap content in `"double quotes"` |
| Multiple posts detected | Actual newlines in content | Use literal `\n` instead of real newlines |

---

## Pinterest CSV Format

Pinterest uses the same Zoho format as Twitter/LinkedIn, but pins **require images** in Column D.

### Pinterest Column Format (Same as Twitter/LinkedIn)

| Column | Name | Required | Description |
|--------|------|----------|-------------|
| A | Schedule Time | Yes | `MM/DD/YYYY HH:MM` format |
| B | Post Content | Yes | Pin description in double quotes |
| C | Link | Yes | Destination URL (where clicks go) |
| D | Media | Yes | Image URL (the pin image) |

### Pinterest CSV Rules

1. **Same format as Twitter/LinkedIn** - no header row
2. **Image URL required** in Column D (Media)
3. **No hashtags** - Pinterest deprecated hashtags in 2024
4. **Use Zoho-formatted CSVs** - `dec-2025-zoho.csv` files (not the raw `dec-2025-pins.csv`)

### Example: Pinterest CSV (Zoho Format)

Same format as Twitter/LinkedIn - no headers, 4 columns:

```csv
12/21/2025 13:00,"Tested 7 VPNs from airports and cafes. Here's which ones work for remote workers.",https://floatjet.com/tools/best-vpn-digital-nomads,https://floatjet.com/images/pins/vpns-digital-nomads/best-vpn-digital-nomads-1.webp
12/21/2025 18:00,"Best standing desks under $500. Tested for stability and motor quality.",https://floatjet.com/gear/best-standing-desks,https://floatjet.com/images/pins/home-office-setup/best-standing-desks-2.webp
```

### Pinterest Upload Steps

1. Go to **Zoho Social → Publishing → Bulk Scheduler**
2. Click **Upload**
3. Set Date Format: `MM/DD/YYYY HH:MM`
4. Upload the board's `dec-2025-zoho.csv` file
5. Select **Pinterest** channel
6. **Select the target board** (you choose board in Zoho UI, not CSV)
7. Review preview
8. Click **Schedule**

**Note:** Upload one board at a time. Each board has its own `dec-2025-zoho.csv` file.

---

## File Locations

- **Twitter Dec 2025:** `docs/social/content/twitter/dec-2025-twitter-bulk-upload.csv`
- **Twitter Jan 2026:** `docs/social/content/twitter/jan-2026-twitter-bulk-upload.csv`
- **LinkedIn Dec 2025:** `docs/social/content/linkedin/dec-2025-linkedin-bulk-upload.csv`
- **LinkedIn Jan 2026:** `docs/social/content/linkedin/jan-2026-linkedin-bulk-upload.csv`
- **Pinterest boards:** `docs/social/content/pinterest/boards/[board-name]/dec-2025-pins.csv`

---

*Last updated: December 21, 2025*
