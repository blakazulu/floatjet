const fs = require("fs");
const path = require("path");

/**
 * Accurate metadata verification script
 * Extracts title and description from Astro frontmatter
 */

const DESCRIPTION_MIN = 150;
const DESCRIPTION_MAX = 160;
const TITLE_MIN = 30;
const TITLE_MAX = 60;

// Glob patterns for all article directories
const articleDirs = ["src/pages/blog", "src/pages/gear", "src/pages/guides", "src/pages/tools"];

function extractMetadata(content, filePath) {
  // Extract title - look for: const title = 'xxx';
  const titleMatch = content.match(/const\s+title\s*=\s*['"`](.+?)['"`];/s);
  const title = titleMatch ? titleMatch[1].replace(/\\'/g, "'") : null;

  // Extract description - look for: const description = 'xxx';
  const descMatch = content.match(/const\s+description\s*=\s*['"`](.+?)['"`];/s);
  const description = descMatch ? descMatch[1].replace(/\\'/g, "'") : null;

  return { title, description };
}

function analyzeArticle(filePath) {
  const content = fs.readFileSync(filePath, "utf-8");
  const relativePath = filePath.replace(/^.*src\/pages/, "").replace(/\.astro$/, "");

  const { title, description } = extractMetadata(content, filePath);

  const issues = [];

  // Check title
  if (!title) {
    issues.push({ type: "TITLE_MISSING", severity: "P0" });
  } else {
    const titleLen = title.length;
    if (titleLen < TITLE_MIN) {
      issues.push({
        type: "TITLE_TOO_SHORT",
        severity: "P1",
        current: titleLen,
        needed: TITLE_MIN - titleLen,
        value: title,
      });
    } else if (titleLen > TITLE_MAX) {
      issues.push({
        type: "TITLE_TOO_LONG",
        severity: "P1",
        current: titleLen,
        needed: titleLen - TITLE_MAX,
        value: title,
      });
    }
  }

  // Check description
  if (!description) {
    issues.push({ type: "DESCRIPTION_MISSING", severity: "P0" });
  } else {
    const descLen = description.length;
    if (descLen < DESCRIPTION_MIN) {
      issues.push({
        type: "DESCRIPTION_TOO_SHORT",
        severity: "P1",
        current: descLen,
        needed: DESCRIPTION_MIN - descLen,
        value: description,
      });
    } else if (descLen > DESCRIPTION_MAX) {
      issues.push({
        type: "DESCRIPTION_TOO_LONG",
        severity: "P1",
        current: descLen,
        needed: descLen - DESCRIPTION_MAX,
        value: description,
      });
    }
  }

  return {
    path: relativePath,
    title: title || "MISSING",
    titleLength: title ? title.length : 0,
    description: description || "MISSING",
    descriptionLength: description ? description.length : 0,
    issues,
    status:
      issues.length === 0
        ? "PERFECT"
        : issues.some((i) => i.severity === "P0")
          ? "BROKEN"
          : "NEEDS_FIX",
  };
}

function findArticles(dir) {
  const articles = [];

  function scan(currentDir) {
    const entries = fs.readdirSync(currentDir, { withFileTypes: true });

    for (const entry of entries) {
      const fullPath = path.join(currentDir, entry.name);

      if (entry.isDirectory()) {
        scan(fullPath);
      } else if (
        entry.isFile() &&
        entry.name.endsWith(".astro") &&
        !entry.name.startsWith("index")
      ) {
        articles.push(fullPath);
      }
    }
  }

  if (fs.existsSync(dir)) {
    scan(dir);
  }

  return articles;
}

// Main execution
console.log("🔍 Verifying metadata across all articles...\n");

let allArticles = [];
for (const dir of articleDirs) {
  allArticles = allArticles.concat(findArticles(dir));
}

const results = allArticles.map(analyzeArticle);

// Categorize results
const perfect = results.filter((r) => r.status === "PERFECT");
const broken = results.filter((r) => r.status === "BROKEN");
const needsFix = results.filter((r) => r.status === "NEEDS_FIX");

// Separate by issue type
const titleIssues = needsFix.filter((r) => r.issues.some((i) => i.type.startsWith("TITLE_")));
const descriptionIssues = needsFix.filter((r) =>
  r.issues.some((i) => i.type.startsWith("DESCRIPTION_"))
);

console.log("📊 SUMMARY\n");
console.log(`Total articles: ${results.length}`);
console.log(`✅ Perfect: ${perfect.length}`);
console.log(`❌ Broken: ${broken.length}`);
console.log(`⚠️  Needs fix: ${needsFix.length}`);
console.log(`   - Title issues: ${titleIssues.length}`);
console.log(`   - Description issues: ${descriptionIssues.length}\n`);

// Show description issues that need fixing
if (descriptionIssues.length > 0) {
  console.log("📝 DESCRIPTION FIXES NEEDED:\n");

  descriptionIssues.sort((a, b) => {
    const aIssue = a.issues.find((i) => i.type.startsWith("DESCRIPTION_"));
    const bIssue = b.issues.find((i) => i.type.startsWith("DESCRIPTION_"));
    return (bIssue?.needed || 0) - (aIssue?.needed || 0);
  });

  for (const article of descriptionIssues.slice(0, 20)) {
    const issue = article.issues.find((i) => i.type.startsWith("DESCRIPTION_"));
    const action = issue.type === "DESCRIPTION_TOO_SHORT" ? "ADD" : "REMOVE";

    console.log(`${article.path}`);
    console.log(`  Current: ${issue.current} chars | Need to ${action}: ${issue.needed} chars`);
    console.log(`  "${issue.value}"`);
    console.log();
  }

  if (descriptionIssues.length > 20) {
    console.log(`... and ${descriptionIssues.length - 20} more\n`);
  }
}

// Show title issues
if (titleIssues.length > 0) {
  console.log("\n📌 TITLE FIXES NEEDED:\n");

  for (const article of titleIssues) {
    const issue = article.issues.find((i) => i.type.startsWith("TITLE_"));
    const action = issue.type === "TITLE_TOO_SHORT" ? "ADD" : "REMOVE";

    console.log(`${article.path}`);
    console.log(`  Current: ${issue.current} chars | Need to ${action}: ${issue.needed} chars`);
    console.log(`  "${issue.value}"`);
    console.log();
  }
}

// Save detailed report
const report = {
  timestamp: new Date().toISOString(),
  summary: {
    total: results.length,
    perfect: perfect.length,
    broken: broken.length,
    needsFix: needsFix.length,
    titleIssues: titleIssues.length,
    descriptionIssues: descriptionIssues.length,
  },
  descriptionIssues: descriptionIssues.map((r) => ({
    path: r.path,
    current: r.descriptionLength,
    issue: r.issues.find((i) => i.type.startsWith("DESCRIPTION_")),
    description: r.description,
  })),
  titleIssues: titleIssues.map((r) => ({
    path: r.path,
    current: r.titleLength,
    issue: r.issues.find((i) => i.type.startsWith("TITLE_")),
    title: r.title,
  })),
  perfect: perfect.map((r) => ({
    path: r.path,
    titleLength: r.titleLength,
    descriptionLength: r.descriptionLength,
  })),
};

fs.writeFileSync("docs/METADATA-VERIFICATION-REPORT.json", JSON.stringify(report, null, 2));

console.log("\n✅ Detailed report saved to: docs/METADATA-VERIFICATION-REPORT.json");
