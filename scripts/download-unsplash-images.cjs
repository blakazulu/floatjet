#!/usr/bin/env node
/**
 * Script to download all Unsplash images and save them locally
 * This eliminates external dependencies and prevents build failures from network issues
 */

const https = require("https");
const fs = require("fs");
const path = require("path");

// All unique Unsplash photo IDs from the codebase
const photoIds = [
  "photo-1434626881859-194d67b2b86f",
  "photo-1436491865332-7a61a109cc05",
  "photo-1450101499163-c8848c66ca85",
  "photo-1451187580459-43490279c0fa",
  "photo-1454165804606-c3d57bc86b40",
  "photo-1460925895917-afdab827c52f",
  "photo-1484480974693-6ca0a78fb36b",
  "photo-1486312338219-ce68d2c6f44d",
  "photo-1488085061387-422e29b40080",
  "photo-1488190211105-8b0e65b80b4e",
  "photo-1488590528505-98d2b5aba04b",
  "photo-1488646953014-85cb44e25828",
  "photo-1493934558415-9d19f0b2b4d2",
  "photo-1496181133206-80ce9b88a853",
  "photo-1497366216548-37526070297c",
  "photo-1498050108023-c5249f4df085",
  "photo-1499750310107-5fef28a66643",
  "photo-1501504905252-473c47e087f8",
  "photo-1502920917128-1aa500764cbd",
  "photo-1504639725590-34d0984388bd",
  "photo-1505740420928-5e560c06d30e",
  "photo-1506784983877-45594efa4cbe",
  "photo-1507525428034-b723cf961d3e",
  "photo-1507925921958-8a62f3d1a50d",
  "photo-1508672019048-805c876b67e2",
  "photo-1508962914676-134849a727f0",
  "photo-1510915228340-29c85a43dcfe",
  "photo-1516321318423-f06f85e504b3",
  "photo-1516738901171-8eb4fc13bd20",
  "photo-1517336714731-489689fd1ca8",
  "photo-1517842645767-c639042777db",
  "photo-1518455027359-f3f8164ba6bd",
  "photo-1518546305927-5a555bb7020d",
  "photo-1518770660439-4636190af475",
  "photo-1519389950473-47ba0277781c",
  "photo-1521017432531-fbd92d768814",
  "photo-1521295121783-8a321d551ad2",
  "photo-1521791136064-7986c2920216",
  "photo-1522071820081-009f0129c71c",
  "photo-1522199755839-a2bacb67c546",
  "photo-1524522173746-f628baad3644",
  "photo-1525547719571-a2d4ac8945e2",
  "photo-1526304640581-d334cdbbf45e",
  "photo-1526374965328-7f61d4dc18c5",
  "photo-1527443224154-c4a3942d3acf",
  "photo-1528181304800-259b08848526",
  "photo-1539037116277-4db20889f2d4",
  "photo-1544197150-b99a580bb7a8",
  "photo-1545454675-3531b543be5d",
  "photo-1550751827-4bd374c3f58b",
  "photo-1551288049-bebda4e38f71",
  "photo-1551434678-e076c223a692",
  "photo-1552581234-26160f608093",
  "photo-1552664730-d307ca884978",
  "photo-1553062407-98eeb64c6a62",
  "photo-1554224154-26032ffc0d07",
  "photo-1554224155-6726b3ff858f",
  "photo-1555881400-74d7acaacd8b",
  "photo-1555949963-ff9fe0c870eb",
  "photo-1556742049-0cfed4f6a45d",
  "photo-1557804506-669a67965ba0",
  "photo-1558494949-ef010cbdcc31",
  "photo-1558618666-fcd25c85cd64",
  "photo-1563013544-824ae1b704d3",
  "photo-1563986768494-4dee2763ff3f",
  "photo-1579621970563-ebec7560ff3e",
  "photo-1580480055273-228ff5388ef8",
  "photo-1580519542036-c47de6196ba5",
  "photo-1585338107529-13afc5f02586",
  "photo-1586486855514-8c633cc6fd38",
  "photo-1587560699334-cc4ff634909a",
  "photo-1587825140708-dfaf72ae4b04",
  "photo-1587826080692-f439cd0b70da",
  "photo-1587829741301-dc798b83add3",
  "photo-1588196749597-9ff075ee6b5b",
  "photo-1590602847861-f357a9332bbc",
  "photo-1590658268037-6bf12165a8df",
  "photo-1593062096033-9a26b09da705",
  "photo-1593642632559-0c6d3fc62b89",
  "photo-1593642702821-c8da6771f0c6",
  "photo-1595225476474-87563907a212",
  "photo-1596526131083-e8c633c948d2",
  "photo-1598653222000-6b7b7a552625",
  "photo-1600880292203-757bb62b4baf",
  "photo-1601597111158-2fceff292cdc",
  "photo-1609091839311-d5365f9ff1c5",
  "photo-1609619385002-f40f1df9b7eb",
  "photo-1611224923853-80b023f02d71",
  "photo-1611269154421-4e27233ac5c7",
  "photo-1611532736597-de2d4265fba3",
  "photo-1611746872915-64382b5c76da",
  "photo-1614064641938-3bbee52942c7",
  "photo-1621761191319-c6fb62004040",
  "photo-1633265486064-086b219458ec",
];

const OUTPUT_DIR = path.join(__dirname, "..", "public", "images", "unsplash");

// Download image with size parameter
function downloadImage(photoId, width) {
  return new Promise((resolve, reject) => {
    const url = `https://images.unsplash.com/${photoId}?auto=format&fit=crop&w=${width}&q=80`;
    const filename = `${photoId}-${width}w.jpg`;
    const filepath = path.join(OUTPUT_DIR, filename);

    // Skip if file already exists
    if (fs.existsSync(filepath)) {
      console.log(`  [SKIP] ${filename} (already exists)`);
      resolve(filepath);
      return;
    }

    const file = fs.createWriteStream(filepath);

    https.get(url, (response) => {
      if (response.statusCode === 301 || response.statusCode === 302) {
        // Follow redirect
        https.get(response.headers.location, (redirectResponse) => {
          redirectResponse.pipe(file);
          file.on("finish", () => {
            file.close();
            console.log(`  [OK] ${filename}`);
            resolve(filepath);
          });
        }).on("error", (err) => {
          fs.unlink(filepath, () => {
          });
          reject(err);
        });
      } else if (response.statusCode === 200) {
        response.pipe(file);
        file.on("finish", () => {
          file.close();
          console.log(`  [OK] ${filename}`);
          resolve(filepath);
        });
      } else {
        fs.unlink(filepath, () => {
        });
        reject(new Error(`HTTP ${response.statusCode} for ${photoId}`));
      }
    }).on("error", (err) => {
      fs.unlink(filepath, () => {
      });
      reject(err);
    });
  });
}

// Download all images at multiple sizes
async function downloadAllImages() {
  console.log(`\nDownloading ${photoIds.length} images to ${OUTPUT_DIR}\n`);

  // Ensure output directory exists
  if (!fs.existsSync(OUTPUT_DIR)) {
    fs.mkdirSync(OUTPUT_DIR, {recursive: true});
  }

  const sizes = [1200, 800]; // Hero images, thumbnails
  let downloaded = 0;
  let failed = 0;

  for (const photoId of photoIds) {
    console.log(`[${downloaded + failed + 1}/${photoIds.length}] ${photoId}`);

    for (const width of sizes) {
      try {
        await downloadImage(photoId, width);
        // Small delay to avoid rate limiting
        await new Promise(r => setTimeout(r, 100));
      } catch (err) {
        console.error(`  [FAIL] ${photoId}-${width}w: ${err.message}`);
        failed++;
      }
    }
    downloaded++;
  }

  console.log(`\n========================================`);
  console.log(`Downloaded: ${downloaded} images`);
  console.log(`Failed: ${failed}`);
  console.log(`Output: ${OUTPUT_DIR}`);
  console.log(`========================================\n`);
}

downloadAllImages().catch(console.error);
