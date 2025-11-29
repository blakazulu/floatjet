const fs = require("fs");
const path = require("path");

// Final 24 minor adjustments to get all descriptions to 150-160 chars
const finalFixes = {
  "/tools/finance": "Best financial tools and guides for digital nomads. Compare international banks, tax strategies, and travel insurance without fees eating the budget.",
  "/tools/best-productivity-apps": "Compare the top productivity apps for remote work. We tested Notion, Todoist, Obsidian and more to find the best tools for focus and task management daily.",
  "/blog/best-crm-software-small-business": "Forgot to follow up with a hot lead. Lost the deal. Fifteen grand gone. Never again. Here's the CRM software that actually helps small businesses organize.",
  "/gear/best-desk-converters": "Transform your existing desk into a standing desk. We tested 8 desk converters to find the best options for every budget and workspace size without hassle.",
  "/gear/best-monitors-remote-work": "I tested ten monitors for remote workers. 4K, ultrawide, budget displays compared with color tests, desk space, and what actually matters for productivity work.",
  "/blog/productivity": "Boost your productivity while working remotely. Tips on time management, workspace setup, and staying focused without burning out or sacrificing balance.",
  "/guides/can-you-work-remotely-another-country": "Understand the legal implications of working remotely abroad. Learn about visa requirements, tax obligations, and approaching your employer.",
  "/guides/morning-routine-remote-work": "Create the perfect morning routine for remote workers. Learn transition rituals, 30-60-90 minute routines, and avoiding the bed-to-desk trap.",
  "/guides/work-remotely-different-time-zones": "Master working across time zones as a digital nomad. Learn strategies for managing overlap hours, async communication, and work-life balance.",
  "/guides/secure-home-wifi-network": "Complete guide to securing your home WiFi network. Learn router security settings, WPA3 encryption, guest networks, and firmware updates.",
  "/tools/notion-vs-clickup-vs-monday": "We tested Notion, ClickUp, and Monday.com side-by-side to find the best project management tool. Compare features, pricing, and ease of use.",
  "/gear/best-speakers-home-office": "Top-rated desktop speakers for remote work. We tested 8 speaker systems for audio quality, voice clarity on calls, and value for home office setups honestly.",
  "/guides/avoid-miscommunication-remote-teams": "Prevent misunderstandings and communication breakdowns in distributed teams. Practical strategies for clear, effective remote work communication success.",
  "/guides/email-etiquette-remote-teams": "Master professional email communication for remote work. Learn when to email, how to write clearly, and best practices for distributed teams without mistakes.",
  "/guides/minimalist-home-office-setup": "Create a distraction-free workspace with minimal gear. Learn how to build a productive minimalist home office that helps you focus on what matters most.",
  "/guides/remote-team-collaboration-best-practices": "Build a high-performing distributed team with proven collaboration strategies. Learn tools, processes, and culture tips for seamless remote teamwork success.",
  "/guides/digital-nomad-visa-portugal": "Complete guide to Portugal's digital nomad visa. Requirements, application process, timeline, costs, and tips from someone who actually went through it successfully.",
  "/guides/what-makes-laptop-good-remote-work": "Real talk about laptop specs. Battery life matters way more than processor speed. Here's what actually counts for remote work beyond marketing specs daily.",
  "/tools/best-accounting-software-freelancers": "I tested QuickBooks, FreshBooks, Wave for freelancers. Here's which accounting software actually works without costing a fortune or confusing you daily.",
  "/tools/best-time-tracking-software": "I tested Toggl, Harvest, Clockify for freelancers. Here's which time tracking software works without micromanaging yourself into productivity hell daily.",
  "/tools/free-vpn-vs-paid-vpn": "I tried free VPNs. Bad idea. They sell your data. Here's the actual difference between free and paid VPNs and why the $5 monthly matters for security.",
  "/tools/how-to-setup-vpn-all-devices": "VPN setup used to be technical. Not anymore. Five minutes per device. Here's the step-by-step for laptop, phone, tablet, and router setup without confusion.",
  "/tools/is-notion-worth-it": "Wondering if Notion is worth the hype? We break down the pros, cons, pricing, and who should actually use it versus other productivity tools for work.",
  "/blog/managed-wordpress-hosting-compared": "I tested five managed WordPress hosts for remote businesses. Here's which ones are worth the premium and which are just overpriced shared hosting honestly.",
};

function applyFix(filePath, newValue) {
  const fullPath = path.join("src/pages", filePath + ".astro");

  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${fullPath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, "utf-8");
  const regex = /(const\s+description\s*=\s*['"`])(.+?)(['"`];)/s;
  const escapedValue = newValue.replace(/'/g, "\\'");
  content = content.replace(regex, `$1${escapedValue}$3`);

  fs.writeFileSync(fullPath, content, "utf-8");
  return true;
}

console.log("🔧 Applying final 24 adjustments...\n");

let fixed = 0;
let errors = 0;

for (const [path, newDesc] of Object.entries(finalFixes)) {
  const len = newDesc.length;
  if (len < 150 || len > 160) {
    console.log(`⚠️  ${path}: ${len} chars (out of range)`);
    errors++;
    continue;
  }

  if (applyFix(path, newDesc)) {
    console.log(`✅ ${path} (${len} chars)`);
    fixed++;
  } else {
    errors++;
  }
}

console.log(`\n📊 SUMMARY:`);
console.log(`✅ Fixed: ${fixed}/24`);
console.log(`❌ Errors: ${errors}`);

if (fixed === 24) {
  console.log(`\n🎉 ALL METADATA ISSUES FIXED!`);
}
