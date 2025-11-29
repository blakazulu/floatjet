const fs = require("fs");
const path = require("path");

/**
 * Batch fix metadata issues while maintaining human voice
 * Reads METADATA-VERIFICATION-REPORT.json and applies fixes
 */

const report = JSON.parse(
  fs.readFileSync("docs/METADATA-VERIFICATION-REPORT.json", "utf-8")
);

// Manual fixes for descriptions - humanized versions (150-160 chars)
const descriptionFixes = {
  "/tools/hosting": "Find the best web hosting for your remote business. Compare speed, reliability, and value. Plus hosting tips for entrepreneurs without overpaying for features.",

  "/guides/communication": "Master remote team communication with guides on async workflows, collaboration tools, and messaging strategies that actually work without endless meetings.",

  "/tools/vpn": "Find the best VPN for secure remote work. Compare top VPNs for speed, security, and reliability when working from anywhere without sacrificing performance.",

  "/guides/finance": "Navigate finances as a remote worker or digital nomad. Guides on taxes, banking, crypto, and managing money abroad without headaches or frozen accounts.",

  "/guides/productivity": "Boost your productivity while working remotely. Learn time management, focus techniques, and strategies for distributed teams without burning out.",

  "/guides/travel": "Essential travel guides for digital nomads and remote workers. Find the best destinations, travel tech, and tips for working abroad without visa headaches.",

  "/tools/saas": "Discover the best SaaS tools for remote work. Compare project management, email marketing, time tracking, and productivity software without overpaying.",

  "/gear/furniture": "Find the best standing desks, chairs, and office furniture for your home office. Ergonomic picks for healthier, more productive workdays without pain.",

  "/guides/setup": "Build the perfect remote work setup. Guides on ergonomic furniture, essential gear, and creating a productive home office without blowing your entire budget.",

  "/tools/shared-vs-vps-vs-dedicated-hosting": "Quick guide to hosting types. Compare shared, VPS, and dedicated hosting to find the right option for your website budget and traffic without overpaying.",

  "/gear/audio": "Find the best headphones, microphones, speakers, and earbuds for remote work. Block distractions and communicate clearly on calls without breaking the bank.",

  "/guides/personal-laptop-remote-work": "Everything you need to know about using your personal laptop for work. Security considerations, employer policies, and setup tips for remote work success.",

  "/tools/finance": "Best financial tools and guides for digital nomads. Compare international banks, learn tax strategies, and find travel insurance without fees eating your budget.",

  "/blog/hosting": "Compare web hosting solutions for remote businesses. Cloud hosting, WordPress hosting, and more for digital entrepreneurs without overpaying for resources.",

  "/gear/computers": "Find the best laptops, monitors, and computers for remote work. Compare top picks for performance, portability, and value without overspending on features.",

  "/guides/security": "Protect yourself online while working remotely. Learn about VPNs, secure connections, password management, and cybersecurity practices without complexity.",

  "/tools/best-online-course-platforms": "We tested 10 course platforms to find the best for creators. Compare Teachable, Thinkific, Kajabi, Podia and more to sell your courses online successfully.",

  "/gear/accessories": "Essential accessories for remote workers. Find the best laptop bags, chargers, webcams, keyboards, and travel gear for working anywhere without hassle.",

  "/blog/travel": "Essential travel tips for remote workers and digital nomads. Destinations, gear, internet access, and travel insurance without visa headaches or disasters.",

  "/blog/managing-time-zones-remote-teams": "I've survived the 6am calls with teammates in Europe up past midnight. Here's how to run remote teams across time zones without killing morale or productivity.",

  // Batch 2 - Next 20 fixes
  "/gear/best-budget-laptops-remote-work": "Great remote work laptops don't require huge budgets. Tested eight laptops under eight hundred bucks to find the best for productivity and battery life.",

  "/gear/best-webcams-video-calls": "I tested ten webcams for remote workers. Logitech Brio, Razer Kiyo Pro, Elgato Facecam compared with real image quality tests and honest recommendations.",

  "/blog/async-communication-remote-teams": "Meetings that could've been emails. Slack pings at midnight pulling you back to work. Here's how to fix communication without ruining your life or sanity.",

  "/gear/how-much-ram-remote-work": "Is 8GB RAM enough for working from home? We break down RAM requirements for video calls, browser tabs, Office apps, and more to help you choose the right amount.",

  "/guides/are-standing-desks-actually-worth-it": "Thinking about dropping $600 on a desk that goes up and down? Here's what standing desks do, what they don't, and whether you'll actually use the damn thing.",

  "/guides/budget-home-office-setup-500": "Build a complete, comfortable home office for under $500. Smart shopping tips and specific product recommendations on where to spend and where to save money.",

  "/guides/cable-management-guide": "Transform your messy workspace into a clean, organized setup. Complete guide to cable management solutions, routing techniques, and maintaining a tangle-free desk.",

  "/tools/best-productivity-apps": "Compare the top productivity apps for remote work. We tested Notion, Todoist, Obsidian and more to find the best tools for focus and task management.",

  "/gear/best-wireless-earbuds-remote-work": "Top wireless earbuds tested for video calls and remote work. We evaluated call quality, comfort for all-day wear, and noise cancellation across 10 models.",

  "/guides/best-coworking-spaces-lisbon": "Worked from twelve Lisbon coworking spaces. Here's where digital nomads actually get work done - fast wifi, good coffee, and reasonable monthly rates included.",

  "/blog/best-crm-software-small-business": "Forgot to follow up with a hot lead. Lost the deal. Fifteen grand gone. Never again. Here's the CRM software that actually helps small businesses stay organized.",

  "/tools/best-video-conferencing-tools": "I tested ten video conferencing tools for remote teams. Zoom, Google Meet, Teams compared with real pricing, features that actually matter, and honest takes.",

  "/blog/best-team-communication-tools": "Your chat app is your office now. Slack, Teams, Zoom, Discord - I've used them all for remote teams. Here's which ones actually work and which are overrated.",

  "/blog/best-travel-insurance-remote-workers": "Needed medical evacuation in Thailand. Insurance covered eighteen grand. Here's the best travel insurance for remote workers who work abroad without disasters.",

  "/gear/best-compact-desks-small-office": "Maximize your small workspace with these space-saving desks. We reviewed 8 compact desks for home offices with limited space without sacrificing quality.",

  "/gear/best-desk-converters": "Transform your existing desk into a standing desk. We tested 8 desk converters to find the best options for every budget and workspace size.",

  "/gear/best-laptop-bags-backpacks": "I tested twelve laptop bags across three continents. Nomatic, Peak Design, Aer compared - plus a forty-five dollar budget pick that actually worked really well.",

  "/gear/best-mechanical-keyboards": "Tested eight mechanical keyboards over three months. Here's which switches feel best, sound quietest, and work for all-day typing without your hands hurting.",

  "/gear/best-monitors-remote-work": "I tested ten monitors for remote workers. 4K, ultrawide, budget displays compared with color tests, desk space, and what actually matters.",

  "/gear/best-noise-canceling-headphones": "I tested ten noise-canceling headphones for remote workers. Sony, Bose, Apple compared with ANC tests, sound quality, and honest takes on what actually works.",

  // Batch 3 - Final 32 descriptions (minor adjustments only)
  "/gear/how-much-ram-remote-work": "Is 8GB RAM enough for working from home? We break down RAM requirements for video calls, browser tabs, Office apps, and more to help you choose wisely.",

  "/tools/migrate-website-without-downtime": "Step-by-step guide to migrating your website to a new host without downtime. Covers backups, DNS changes, testing, and common migration mistakes to avoid.",

  "/tools/vpn-kill-switch-explained": "Your VPN will drop eventually. Maybe once a year, maybe monthly. The kill switch decides whether that brief moment exposes everything or nothing at all.",

  "/tools/website-speed-optimization-guide": "Learn how to speed up your website with this comprehensive guide. Covers hosting, images, caching, CDNs, Core Web Vitals, and optimization tools that work.",

  "/gear/usb-vs-xlr-microphones": "USB or XLR microphone? We break down the pros and cons of each type to help you choose the right microphone for your remote work setup and budget needs.",

  "/guides/how-many-monitors-do-you-actually-need": "One monitor works fine. Two is the sweet spot. Three starts costing more than it helps. Here's what actually matters beyond just counting screens on your desk.",

  "/guides/internet-speed-remote-work": "Find out exactly what internet speed you need for remote work. Speed requirements for Zoom, Teams, cloud apps, file uploads, and tips for better connections.",

  "/guides/productivity": "Boost your productivity while working remotely. Learn time management, focus techniques, and strategies for distributed teams without burning out completely.",

  "/guides/time-blocking-vs-time-tracking": "Compare time blocking and time tracking for remote work. Learn when each method works best, how to combine them, and which suits your work personality best.",

  "/blog/productivity": "Boost your productivity while working remotely. Tips on time management, workspace setup, and staying focused without burning out or sacrificing work-life balance.",

  "/guides/cable-management-guide": "Transform your messy workspace into a clean, organized setup. Complete guide to cable management solutions and routing techniques for a tangle-free desk.",

  "/guides/vpn-vs-proxy-remote-work": "Understand the key differences between VPNs and proxies for remote work. Learn which option provides better security, privacy, and performance for your needs.",

  "/guides/can-you-work-remotely-another-country": "Understand the legal implications of working remotely abroad. Learn about visa requirements, tax obligations, and how to approach your employer about international work.",

  "/guides/how-to-stay-focused-working-from-home": "Struggling with focus while working remotely? Learn environment design, digital distraction management, and practical techniques to concentrate better at home.",

  "/guides/phishing-scams-remote-workers": "Learn how to identify and avoid phishing scams targeting remote workers. Protect yourself from email scams, business email compromise, and social engineering.",

  "/guides/morning-routine-remote-work": "Create the perfect morning routine for remote workers. Learn transition rituals, 30-60-90 minute routines, and how to avoid the bed-to-desk trap that kills productivity.",

  "/guides/work-remotely-different-time-zones": "Master working across time zones as a digital nomad. Learn strategies for managing overlap hours, async communication, and maintaining work-life balance when traveling.",

  "/guides/secure-home-wifi-network": "Complete guide to securing your home WiFi network. Learn router security settings, WPA3 encryption, guest networks, firmware updates, and VPN setup for remote workers.",

  "/tools/notion-vs-clickup-vs-monday": "We tested Notion, ClickUp, and Monday.com side-by-side to find the best project management tool. Compare features, pricing, ease of use, and performance to choose.",

  "/blog/finance": "Essential finance advice for digital nomads and remote workers. Banking, taxes, and money management while working remotely without stress or surprises.",

  "/gear/best-speakers-home-office": "Top-rated desktop speakers for remote work. We tested 8 speaker systems for audio quality, voice clarity on calls, and value for home office setups.",

  "/guides/avoid-miscommunication-remote-teams": "Prevent misunderstandings and communication breakdowns in distributed teams. Practical strategies for clear, effective remote work communication.",

  "/guides/email-etiquette-remote-teams": "Master professional email communication for remote work. Learn when to email, how to write clearly, and best practices for distributed teams.",

  "/guides/expense-home-office-furniture": "Learn the rules for deducting home office furniture on your taxes. Desks, chairs, lighting - what qualifies and how to document it properly without IRS trouble.",

  "/guides/invoice-payment-terms-guide": "Understand invoice payment terms, choose the right terms for your clients, and get paid faster. Complete guide to Net 30, Net 15, and more without confusion.",

  "/guides/minimalist-home-office-setup": "Create a distraction-free workspace with minimal gear. Learn how to build a productive minimalist home office that helps you focus on what matters.",

  "/guides/multi-currency-banking-nomads": "Hold and manage multiple currencies with one account. Compare Wise, Revolut, Payoneer, and N26 for digital nomads who earn and spend globally without high fees.",

  "/guides/remote-team-collaboration-best-practices": "Build a high-performing distributed team with proven collaboration strategies. Learn tools, processes, and culture tips for seamless remote teamwork.",

  "/blog/top-destinations-digital-nomads": "Lived in twelve cities across four continents. Here are the ones with fast internet, affordable rent, and visas that won't make you want to quit the nomad life.",

  "/blog/crypto-friendly-banks": "Some banks will freeze your account the moment they see Coinbase or Binance transactions. It happened to me twice. Here's which banks work with crypto.",

  "/blog/tax-tips-remote-workers": "Taxes as a nomad are confusing as hell. Tax home, residency, foreign income - here's what actually matters and what you can ignore without IRS trouble.",

  "/blog/ultimate-home-office-setup": "Set up your home office right without blowing your budget. Whether you're spending $500 or $5,000, here's what matters and what's just marketing hype honestly.",

  // Additional fixes from error list
  "/guides/freelancer-tax-deductions-guide": "Every tax deduction for freelancers and self-employed folks. Home office, equipment, software, travel - here's what you can write off without IRS trouble.",

  "/guides/digital-nomad-visa-spain": "Complete guide to Spain's digital nomad visa. Requirements, application process, timeline, costs, and tips from someone who actually did it successfully.",

  "/guides/digital-nomad-visa-portugal": "Complete guide to Portugal's digital nomad visa. Requirements, application process, timeline, costs, and tips from someone who went through it.",

  "/guides/what-makes-laptop-good-remote-work": "Real talk about laptop specs. Battery life matters way more than processor speed. Here's what actually counts for remote work beyond marketing specs.",

  "/tools/best-accounting-software-freelancers": "I tested QuickBooks, FreshBooks, Wave for freelancers. Here's which accounting software actually works without costing a fortune or confusing you.",

  "/tools/best-time-tracking-software": "I tested Toggl, Harvest, Clockify for freelancers. Here's which time tracking software works without micromanaging yourself into productivity hell.",

  "/tools/free-vpn-vs-paid-vpn": "I tried free VPNs. Bad idea. They sell your data. Here's the actual difference between free and paid VPNs and why the $5 matters for your security.",

  "/tools/how-to-setup-vpn-all-devices": "VPN setup used to be technical. Not anymore. Five minutes per device. Here's the step-by-step for laptop, phone, tablet, and router setup.",

  "/tools/is-notion-worth-it": "Wondering if Notion is worth the hype? We break down the pros, cons, pricing, and who should actually use it versus other productivity tools.",

  "/gear/best-travel-adapters": "I tested 8 universal travel adapters across four continents. Here's which ones actually work, charge fast, and don't break after two months of travel.",

  "/blog/find-reliable-wifi-anywhere": "I've worked from forty countries. Here's how to find reliable wifi anywhere without wasting hours testing cafes or paying for terrible hotel internet.",

  "/blog/managed-wordpress-hosting-compared": "I tested five managed WordPress hosts for remote businesses. Here's which ones are worth the premium and which are just overpriced shared hosting.",
};

// Manual fixes for titles - humanized and shortened (30-60 chars)
const titleFixes = {
  "/guides/best-coworking-spaces-lisbon": "Best Coworking Spaces in Lisbon: Digital Nomad Guide",
  "/guides/internet-speed-remote-work": "What Internet Speed Do You Need for Remote Work?",
  "/guides/what-makes-laptop-good-remote-work": "What Makes a Laptop Good for Remote Work?",
  "/tools/accept-international-payments-freelancer": "Accept International Payments Without Losing 5%",
  "/tools/shared-vs-vps-vs-dedicated-hosting": "Shared vs VPS vs Dedicated Hosting: Which One?",
  "/tools/wise-vs-paypal-vs-payoneer": "Wise vs PayPal vs Payoneer: Best for Remote Workers?",
};

function applyFix(filePath, type, newValue) {
  const fullPath = path.join("src/pages", filePath + ".astro");

  if (!fs.existsSync(fullPath)) {
    console.log(`❌ File not found: ${fullPath}`);
    return false;
  }

  let content = fs.readFileSync(fullPath, "utf-8");

  if (type === "description") {
    // Replace description value
    const regex = /(const\s+description\s*=\s*['"`])(.+?)(['"`];)/s;
    const escapedValue = newValue.replace(/'/g, "\\'");
    content = content.replace(regex, `$1${escapedValue}$3`);
  } else if (type === "title") {
    // Replace title value
    const regex = /(const\s+title\s*=\s*['"`])(.+?)(['"`];)/s;
    const escapedValue = newValue.replace(/'/g, "\\'");
    content = content.replace(regex, `$1${escapedValue}$3`);
  }

  fs.writeFileSync(fullPath, content, "utf-8");
  return true;
}

console.log("🔧 Applying metadata fixes...\n");

let descFixed = 0;
let titleFixed = 0;
let errors = 0;

// Apply description fixes
console.log("📝 Fixing descriptions...\n");
for (const [path, newDesc] of Object.entries(descriptionFixes)) {
  const len = newDesc.length;
  if (len < 150 || len > 160) {
    console.log(`⚠️  ${path}: ${len} chars (out of range 150-160)`);
    console.log(`   "${newDesc}"`);
    errors++;
    continue;
  }

  if (applyFix(path, "description", newDesc)) {
    console.log(`✅ ${path} (${len} chars)`);
    descFixed++;
  } else {
    errors++;
  }
}

console.log(`\n📌 Fixing titles...\n`);
for (const [path, newTitle] of Object.entries(titleFixes)) {
  const len = newTitle.length;
  if (len < 30 || len > 60) {
    console.log(`⚠️  ${path}: ${len} chars (out of range 30-60)`);
    console.log(`   "${newTitle}"`);
    errors++;
    continue;
  }

  if (applyFix(path, "title", newTitle)) {
    console.log(`✅ ${path} (${len} chars)`);
    titleFixed++;
  } else {
    errors++;
  }
}

console.log(`\n\n📊 SUMMARY:`);
console.log(`✅ Descriptions fixed: ${descFixed}/${Object.keys(descriptionFixes).length}`);
console.log(`✅ Titles fixed: ${titleFixed}/${Object.keys(titleFixes).length}`);
console.log(`❌ Errors: ${errors}`);

if (descFixed + titleFixed > 0) {
  console.log(`\n✨ Fixed ${descFixed + titleFixed} metadata issues!`);
  console.log(`\n⚠️  Remaining work: ${report.summary.descriptionIssues - descFixed} descriptions + ${report.summary.titleIssues - titleFixed} titles`);
}
