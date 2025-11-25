#!/usr/bin/env node

/**
 * ZeroGPT AI Detection Script
 * Detects AI-generated content in text
 *
 * Usage:
 *   node scripts/zerogpt-detect.js "Your text to analyze here"
 *   node scripts/zerogpt-detect.js --file path/to/file.txt
 */

import fs from "fs";
import path from "path";
import {fileURLToPath} from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const API_KEY = "92b1ea33-ff35-42cc-a153-98146223b148";
const API_BASE = "https://api.zerogpt.com";

async function detectAI(text) {
  if (!text || text.trim().length === 0) {
    throw new Error("Text is required for detection");
  }

  const response = await fetch(`${API_BASE}/api/detect/detectText`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "ApiKey": API_KEY,
    },
    body: JSON.stringify({
      input_text: text,
    }),
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`API Error (${response.status}): ${errorText}`);
  }

  return response.json();
}

function formatResults(result) {
  console.log("\n" + "=".repeat(60));
  console.log("  ZEROGPT AI DETECTION RESULTS");
  console.log("=".repeat(60) + "\n");

  if (!result.success) {
    console.log(`Error: ${result.message || "Unknown error"}`);
    return;
  }

  const data = result.data || result;

  // Main metrics
  const fakePercent = data.fakePercentage ?? data.fake_percentage ?? "N/A";
  const aiWords = data.aiWords ?? data.ai_words ?? "N/A";
  const totalWords = data.textWords ?? data.text_words ?? "N/A";

  console.log(`  AI Content:     ${fakePercent}%`);
  console.log(`  AI Words:       ${aiWords} / ${totalWords} total`);
  console.log(`  Human Words:    ${totalWords - aiWords}`);

  // Verdict
  console.log("\n" + "-".repeat(60));
  if (fakePercent !== "N/A") {
    if (fakePercent < 10) {
      console.log("  VERDICT: Most likely HUMAN written");
    } else if (fakePercent < 50) {
      console.log("  VERDICT: Mixed content (human + AI)");
    } else {
      console.log("  VERDICT: Most likely AI generated");
    }
  }

  // AI-flagged sentences
  const sentences = data.h || data.highlighted_sentences || data.sentences || [];
  if (sentences.length > 0) {
    console.log("\n" + "-".repeat(60));
    console.log("  SENTENCES FLAGGED AS AI-GENERATED:\n");
    sentences.forEach((sentence, i) => {
      console.log(`  ${i + 1}. "${sentence}"`);
    });
  }

  console.log("\n" + "=".repeat(60) + "\n");
}

async function main() {
  const args = process.argv.slice(2);

  if (args.length === 0) {
    console.log(`
ZeroGPT AI Detection Script

Usage:
  node scripts/zerogpt-detect.js "Text to analyze"
  node scripts/zerogpt-detect.js --file path/to/file.txt

Examples:
  node scripts/zerogpt-detect.js "The quick brown fox jumps over the lazy dog."
  node scripts/zerogpt-detect.js --file article.txt
`);
    process.exit(1);
  }

  let textToAnalyze;

  // Check if reading from file
  if (args[0] === "--file" || args[0] === "-f") {
    const filePath = args[1];
    if (!filePath) {
      console.error("Error: Please provide a file path after --file");
      process.exit(1);
    }

    const resolvedPath = path.resolve(filePath);
    if (!fs.existsSync(resolvedPath)) {
      console.error(`Error: File not found: ${resolvedPath}`);
      process.exit(1);
    }

    textToAnalyze = fs.readFileSync(resolvedPath, "utf-8");
    console.log(`\nAnalyzing file: ${resolvedPath}`);
    console.log(`Characters: ${textToAnalyze.length}`);
  } else {
    // Text provided directly as argument
    textToAnalyze = args.join(" ");
  }

  try {
    console.log("\nSending request to ZeroGPT API...");
    const result = await detectAI(textToAnalyze);
    formatResults(result);

    // Also output raw JSON for debugging
    if (args.includes("--debug") || args.includes("-d")) {
      console.log("RAW API RESPONSE:");
      console.log(JSON.stringify(result, null, 2));
    }
  } catch (error) {
    console.error(`\nError: ${error.message}`);
    process.exit(1);
  }
}

main();
