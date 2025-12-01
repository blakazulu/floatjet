#!/usr/bin/env node
/**
 * Convert JPG images to optimized WebP format
 * Uses Sharp for fast, high-quality conversion
 */

const sharp = require("sharp");
const fs = require("fs");
const path = require("path");

const IMAGES_DIR = path.join(__dirname, "..", "public", "images", "unsplash");

async function convertToWebP() {
  console.log("\nConverting images to WebP...\n");

  const files = fs.readdirSync(IMAGES_DIR).filter((f) => f.endsWith(".jpg"));
  let converted = 0;
  let savedBytes = 0;

  for (const file of files) {
    const inputPath = path.join(IMAGES_DIR, file);
    const outputPath = path.join(IMAGES_DIR, file.replace(".jpg", ".webp"));

    // Skip if WebP already exists
    if (fs.existsSync(outputPath)) {
      console.log(`[SKIP] ${file} (webp exists)`);
      continue;
    }

    try {
      const inputStats = fs.statSync(inputPath);

      await sharp(inputPath)
        .webp({
          quality: 80, // Good balance of quality/size
          effort: 6, // Higher = smaller file, slower conversion
        })
        .toFile(outputPath);

      const outputStats = fs.statSync(outputPath);
      const saved = inputStats.size - outputStats.size;
      savedBytes += saved;

      const percent = ((saved / inputStats.size) * 100).toFixed(1);
      console.log(`[OK] ${file} → ${file.replace(".jpg", ".webp")} (-${percent}%)`);
      converted++;
    } catch (err) {
      console.error(`[FAIL] ${file}: ${err.message}`);
    }
  }

  console.log("\n========================================");
  console.log(`Converted: ${converted} images`);
  console.log(`Space saved: ${(savedBytes / 1024 / 1024).toFixed(2)} MB`);
  console.log("========================================\n");
}

convertToWebP().catch(console.error);
