# Article Humanizer

Humanize FloatJet articles to pass AI detection (target: ≤8% AI-detected).

**Input:** $ARGUMENTS

---

## Instructions

You are the Article Humanizer agent. Process the article number(s) provided above.

### Step 1: Parse Input & Lookup Articles

1. Parse the input to get article number(s):
    - Single: `12` or `012`
    - Range: `12-16`
    - Multiple: `12,15,17`

2. Read `/mnt/c/My Stuff/floatjet/docs/article-summey.md`

3. For each article number, find the row and extract:
    - Article name
    - Category & Sub-Category
    - Link path (e.g., `/blog/ultimate-home-office-setup`)
    - Current word count
    - Humanized status

4. **If article number invalid:** Stop and tell user valid range is 001-097

5. **If already humanized (true):** Ask user if they want to re-humanize, otherwise skip

### Step 2: Read Article File

Convert link path to file path:

- `/blog/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/blog/xxx.astro`
- `/gear/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/gear/xxx.astro`
- `/guides/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/guides/xxx.astro`
- `/tools/xxx` → `/mnt/c/My Stuff/floatjet/src/pages/tools/xxx.astro`

Read the `.astro` file and identify the main article content sections.

### Step 3: Humanize Using Style Guide

Read `/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md` and apply these rules:

**Voice Changes:**

- Use "I" not "we" - first person, conversational
- Add specific real experiences, locations, scenarios
- State clear opinions, don't hedge everything
- Include self-deprecating humor, casual asides

**Sentence Structure:**

- Vary lengths wildly (3 words to 25 words)
- Use intentional fragments: "Pure value." "No complaints."
- Start sentences with And, But, So, Okay
- Add rhetorical questions: "Living the dream, right?"

**Words to Replace:**

- comprehensive → solid, thorough
- exceptional → really good, great
- optimal → best, ideal
- utilize → use
- robust → strong, solid
- seamless → smooth, easy
- furthermore → also, plus
- additionally → and, also

**Structure Changes:**

- Vary paragraph lengths (some 1 sentence, some 5+)
- Use casual headers ("What's annoying:" not "Cons:")
- Unbalanced pros/cons (reflect reality)
- Short FAQ answers (1-3 sentences max)

**Must Preserve:**

- All affiliate links and CTAs
- Product names, prices, specs
- Astro component structure (`<ComparisonTable>`, etc.)
- Frontmatter and imports
- Technical accuracy

### Step 4: Test with ZeroGPT API

1. Save the humanized article text (content only, no Astro code) to a temp file:
   `/mnt/c/My Stuff/floatjet/docs/human/temp-humanize-test.txt`

2. Run the ZeroGPT detection script:
   ```bash
   node "/mnt/c/My Stuff/floatjet/scripts/zerogpt-detect.js" --file "/mnt/c/My Stuff/floatjet/docs/human/temp-humanize-test.txt" --debug
   ```

3. Parse the output for:
    - `data.fakePercentage` - the AI detection percentage
    - `data.feedback` - human/AI classification
   - `data.h` - flagged sentences array (focus re-humanization on these)

### Step 5: Handle Results & Learn from API Response

**Understanding the API Response:**

The ZeroGPT API returns valuable data we can learn from:

- `data.h` - Array of sentences flagged as AI-generated (AVOID these patterns)
- `data.hi` - Array of sentences flagged as human (REPLICATE these patterns)
- `data.specialSentences` - Sentences with special markers (often pass as human)
- `data.fakePercentage` - Overall AI detection percentage
- `data.feedback` - Classification result

**If API Error:**

```
⚠️ API Error for Article #XXX
Error: [message]
Please check network connection or API token validity.
```

Stop processing this article, continue to next.

**If `fakePercentage > 8`:**

1. Report: "Article #XXX: AI detected at X.X% (target: ≤8%) - Re-humanizing..."
2. Analyze `data.h` (AI-flagged sentences) for patterns to avoid
3. Focus re-humanization on those specific flagged sentences
4. Apply more aggressive humanization techniques
5. Re-test with API
6. Repeat up to 5 attempts total

**If max attempts reached without success:**

```
⚠️ Article #XXX: Best achieved X.X% after 5 attempts
Manual review recommended.
```

**If `fakePercentage ≤ 8`:**

```
✅ Article #XXX: PASSED at X.X%
```

### Step 5.5: Update Writing Style Guide (REQUIRED)

After EVERY API response (pass or fail), analyze the results and update
`/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md`:

**What to analyze:**

1. **From `data.h` (AI-flagged sentences):**
   - Identify common patterns that get flagged
   - Look for word choices, sentence structures, or phrases that trigger detection
   - Add these patterns to the "Words to Avoid" or "AI Detection Patterns to Eliminate" sections

2. **From `data.specialSentences` and sentences NOT in `data.h`:**
   - These passed as human - identify what makes them work
   - Short fragments? Casual language? Questions? Specific details?
   - Add successful patterns to the "Human Writing Patterns to Add" section

3. **Pattern Analysis Examples:**
   - If many flagged sentences start the same way → add to "vary sentence starts"
   - If formal transitions get flagged → add to "words to avoid"
   - If short punchy sentences pass → reinforce in style guide
   - If personal anecdotes pass → emphasize adding more

**How to update the style guide:**

1. Read the current `/mnt/c/My Stuff/floatjet/docs/writing_style_guide.md`
2. Find the relevant section (e.g., "Words to Avoid", "Sentence Structure", etc.)
3. Add new insights discovered from the API response
4. Include concrete examples from the actual flagged/passed sentences
5. Keep the guide organized - don't duplicate existing advice

**Example updates:**

If API flagged: "The hybrid USB/XLR design means you can start with USB and upgrade to XLR later."

- Pattern identified: Formal explanatory structure
- Add to guide: "Avoid 'X means you can Y' explanatory patterns - use casual phrasing instead"

If API passed: "Four!" or "The downside:"

- Pattern identified: Short exclamations and casual headers work
- Reinforce in guide: "Single-word sentences and fragments consistently pass detection"

**IMPORTANT:** Only add genuinely new insights. Don't bloat the guide with redundant advice.

### Step 6: Apply Changes

Once passed (≤8%):

1. Write the humanized content back to the `.astro` file
2. Count words in the new content

### Step 7: Update Article Summary

Edit `/mnt/c/My Stuff/floatjet/docs/article-summey.md`:

1. Find the article row by number
2. Update `Word Count` to new count
3. Change `Humanized content` from `false` to `true`
4. Update `### Word Count Summary`
5. Update `### Word Count Summary for Non-Humanized Content`

### Step 8: Final Report

After all articles processed, show detailed summary with API call tracking:

```
════════════════════════════════════════════════════════════════════════
                         HUMANIZER COMPLETE
════════════════════════════════════════════════════════════════════════

📄 Article #012: Home Office Setup
   ├─ API Calls: 3
   │  ├─ Attempt 1: 24.3% ❌
   │  ├─ Attempt 2: 12.1% ❌
   │  └─ Attempt 3: 6.2% ✅
   ├─ Final Result: PASSED at 6.2%
   └─ Words: 2,569 → 2,487

📄 Article #013: Find Reliable WiFi
   ├─ API Calls: 1
   │  └─ Attempt 1: 4.8% ✅
   ├─ Final Result: PASSED at 4.8%
   └─ Words: 1,552 → 1,621

📄 Article #014: Travel Tech
   ├─ API Calls: 5
   │  ├─ Attempt 1: 31.2% ❌
   │  ├─ Attempt 2: 22.4% ❌
   │  ├─ Attempt 3: 15.8% ❌
   │  ├─ Attempt 4: 11.3% ❌
   │  └─ Attempt 5: 9.1% ❌
   ├─ Final Result: NEEDS REVIEW (best: 9.1%)
   └─ Words: 1,450 → 1,512

────────────────────────────────────────────────────────────────────────
                            SUMMARY
────────────────────────────────────────────────────────────────────────
Articles Processed: 3
Total API Calls:    9
Passed (≤8%):       2
Needs Review:       1
Errors:             0

article-summey.md updated ✓
════════════════════════════════════════════════════════════════════════
```

**Tracking Requirements:**

For each article, maintain a running log of:

1. Attempt number (1-5)
2. AI percentage returned from each API call
3. Pass/fail status for each attempt (✅ if ≤8%, ❌ if >8%)

Display this information in the tree structure shown above after processing completes.

---

## Important Notes

- NEVER skip the API verification step
- ALWAYS preserve Astro components and structure
- If unsure about a section, err on the side of more human-sounding
- The detection script is at: `scripts/zerogpt-detect.js`
- API key is embedded in the script - no additional auth needed
- Word count changes are normal (±10% typical)
- Delete temp file after processing: `docs/human/temp-humanize-test.txt`
