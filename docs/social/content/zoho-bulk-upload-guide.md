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
12/21/2025 15:00,"Tweet content here",https://example.com,,,
```

### 2. NO LINE BREAKS IN CONTENT
All content must be on a single line. Replace paragraph breaks with spaces.

**Wrong:**
```
12/21/2025 15:00,"First paragraph.

Second paragraph.

#Hashtag",,,,,
```

**Correct:**
```
12/21/2025 15:00,"First paragraph. Second paragraph. #Hashtag",,,,,
```

### 3. CONTENT IN DOUBLE QUOTES
Always wrap post content in double quotes.

```
12/21/2025 15:00,"This is the tweet content. #RemoteWork",,,,,
```

### 4. ESCAPE QUOTES INSIDE CONTENT
If content contains double quotes, escape them with double-double quotes.

```
12/21/2025 15:00,"He said ""hello"" to everyone. #Quote",,,,,
```

### 5. EMPTY COLUMNS NEED COMMAS
Even empty columns need comma placeholders.

```
12/21/2025 15:00,"Tweet without link",,,,
```
(Note: 4 trailing commas for empty Link, Media, GMB Button, GMB Link)

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
12/21/2025 15:00,"Switched password managers last month. Migration was annoying but worth it. The old one kept logging me out randomly. #Cybersecurity",https://floatjet.com/tools/best-password-manager-remote-work/,,,
12/21/2025 19:00,"Remote work tip: backup your files before traveling. #DigitalNomad",,,,
12/22/2025 15:00,"Two-factor authentication is annoying until you get hacked. #Cybersecurity",https://floatjet.com/guides/two-factor-authentication-guide/,,,
```

---

## Example: LinkedIn CSV

Same format, but:
- LinkedIn suppresses posts with links in body
- Put "Link in comments." in content
- Leave Link column empty
- Manually add comment with link after posting

```csv
12/21/2025 16:00,"Physical notebooks in 2024. Hear me out. Yeah I've got Notion but paper still wins for complex thinking. Link in comments. #Productivity #RemoteWork",,,,
12/22/2025 16:00,"VPN testing update: ran speed tests from 8 different locations. The differences are wild. Link in comments. #Cybersecurity",,,,
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
| "Date not in selected format" | Newlines in content | Put all content on one line |
| "Forgot to type content" | Newlines split the row | Single line per post |
| "Past date" | Schedule time already passed | Use future dates |
| "Something wrong with link" | Comma in content parsed as column | Ensure content is in double quotes |

---

## File Locations

- **Twitter CSV:** `docs/social/content/twitter/twitter-bulk-upload.csv`
- **LinkedIn CSV:** `docs/social/content/linkedin/linkedin-bulk-upload.csv`
- **Twitter Queue:** `docs/social/content/twitter/2025-12-december-twitter-queue.md`
- **LinkedIn Queue:** `docs/social/content/linkedin/2025-12-december-linkedin-queue.md`

---

*Last updated: December 20, 2025*
