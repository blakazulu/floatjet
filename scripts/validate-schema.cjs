const fs = require("fs");
const path = require("path");

// Schema validation for all article types
const schemaIssues = [];
const schemaStats = {
  totalArticles: 0,
  hasArticleSchema: 0,
  hasFAQSchema: 0,
  hasBreadcrumbSchema: 0,
  missingImage: 0,
  issues: [],
};

function validateArticleSchema(filePath, content) {
  const issues = [];

  // Check for basic article metadata required for Article schema
  const titleMatch = content.match(/const\s+title\s*=\s*['"`](.+?)['"`];/s);
  const descriptionMatch = content.match(/const\s+description\s*=\s*['"`](.+?)['"`];/s);
  const authorMatch = content.match(/const\s+author\s*=\s*['"`](.+?)['"`];/s);
  const pubDateMatch = content.match(/const\s+pubDate\s*=\s*new\s+Date\(['"]([\d-]+)['"]\);/);
  const imageMatch = content.match(/const\s+image\s*=\s*['"`](.+?)['"`];/);

  if (!titleMatch) issues.push("Missing title");
  if (!descriptionMatch) issues.push("Missing description");
  if (!authorMatch) issues.push("Missing author");
  if (!pubDateMatch) issues.push("Missing pubDate");
  if (!imageMatch) {
    issues.push("Missing image (recommended for Article schema)");
    schemaStats.missingImage++;
  }

  // Check if using ArticleLayout (has Article schema)
  const hasArticleLayout = content.includes("ArticleLayout");
  if (hasArticleLayout) {
    schemaStats.hasArticleSchema++;
  } else {
    issues.push("Not using ArticleLayout (missing Article schema)");
  }

  // Check for FAQ schema
  if (content.includes("FAQSection")) {
    schemaStats.hasFAQSchema++;
  }

  // Check for Breadcrumbs (has BreadcrumbList schema)
  if (content.includes("Breadcrumbs") || hasArticleLayout) {
    schemaStats.hasBreadcrumbSchema++;
  }

  return issues;
}

function scanArticles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });

  for (const entry of entries) {
    const fullPath = path.join(dir, entry.name);

    if (entry.isDirectory()) {
      scanArticles(fullPath);
    } else if (entry.name.endsWith(".astro") && !entry.name.startsWith("index")) {
      schemaStats.totalArticles++;

      const content = fs.readFileSync(fullPath, "utf-8");
      const issues = validateArticleSchema(fullPath, content);

      if (issues.length > 0) {
        const relativePath = fullPath.replace(/.*src\/pages\//, "/").replace(".astro", "");
        schemaIssues.push({
          path: relativePath,
          issues,
        });

        schemaStats.issues.push(
          ...issues.map((i) => ({
            path: relativePath,
            issue: i,
          }))
        );
      }
    }
  }
}

console.log("🔍 Validating Schema.org markup across all articles...\n");

// Scan all article directories
const articleDirs = ["src/pages/blog", "src/pages/gear", "src/pages/guides", "src/pages/tools"];

for (const dir of articleDirs) {
  if (fs.existsSync(dir)) {
    scanArticles(dir);
  }
}

console.log("📊 SCHEMA VALIDATION SUMMARY\n");
console.log(`Total articles scanned: ${schemaStats.totalArticles}`);
console.log(
  `Articles with Article schema: ${schemaStats.hasArticleSchema}/${schemaStats.totalArticles}`
);
console.log(`Articles with FAQ schema: ${schemaStats.hasFAQSchema}/${schemaStats.totalArticles}`);
console.log(
  `Articles with Breadcrumb schema: ${schemaStats.hasBreadcrumbSchema}/${schemaStats.totalArticles}`
);
console.log(
  `Articles missing featured image: ${schemaStats.missingImage}/${schemaStats.totalArticles}\n`
);

if (schemaIssues.length > 0) {
  console.log(`⚠️  ISSUES FOUND: ${schemaIssues.length} articles with schema problems\n`);

  schemaIssues.forEach(({ path, issues }) => {
    console.log(`❌ ${path}`);
    issues.forEach((issue) => console.log(`   - ${issue}`));
    console.log("");
  });
} else {
  console.log("✅ No critical schema issues found!\n");
}

// Schema best practices check
console.log("💡 SCHEMA BEST PRACTICES\n");

const recommendations = [];

if (schemaStats.hasArticleSchema < schemaStats.totalArticles) {
  const missing = schemaStats.totalArticles - schemaStats.hasArticleSchema;
  recommendations.push(`${missing} articles not using ArticleLayout (missing Article schema)`);
}

if (schemaStats.hasFAQSchema < schemaStats.totalArticles * 0.5) {
  const pct = Math.round((schemaStats.hasFAQSchema / schemaStats.totalArticles) * 100);
  recommendations.push(
    `Only ${pct}% of articles have FAQ sections (consider adding more for rich snippets)`
  );
}

if (schemaStats.missingImage > 0) {
  recommendations.push(
    `${schemaStats.missingImage} articles missing featured images (reduces Article schema quality)`
  );
}

if (recommendations.length > 0) {
  recommendations.forEach((rec) => console.log(`⚡ ${rec}`));
} else {
  console.log("✅ All schema best practices followed!");
}

// Save detailed report
const report = {
  summary: schemaStats,
  issues: schemaIssues,
  recommendations,
  timestamp: new Date().toISOString(),
};

fs.writeFileSync("docs/SCHEMA-VALIDATION-REPORT.json", JSON.stringify(report, null, 2), "utf-8");

console.log("\n✅ Detailed report saved to: docs/SCHEMA-VALIDATION-REPORT.json");

// Exit code
process.exit(schemaIssues.length > 0 ? 1 : 0);
