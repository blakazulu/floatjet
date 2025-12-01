#!/usr/bin/env node

/**
 * Batch fix meta descriptions to be 150-160 chars
 * Focuses on too-short descriptions first
 */

const fs = require("fs");
const path = require("path");

const fixes = [
  // Category pages (too short)
  {
    file: "src/pages/blog/communication.astro",
    old: `const description = 'Master remote team communication with articles on async workflows, collaboration tools, and effective messaging strategies.';`,
    new: `const description = 'Master remote team communication with guides on async workflows, collaboration tools, and messaging strategies that actually work for distributed teams.';`,
  },
  {
    file: "src/pages/blog/finance.astro",
    old: `const description = 'Financial guides for remote workers and digital nomads. Banking, taxes, invoicing, and managing money across borders.';`,
    new: `const description = 'Financial guides for remote workers and digital nomads. Banking, taxes, invoicing, and managing money across borders without losing your mind or your cash.';`,
  },
  {
    file: "src/pages/blog/hosting.astro",
    old: `const description = 'Web hosting guides for remote businesses. Compare hosting types, optimize performance, and choose the right provider.';`,
    new: `const description = 'Web hosting guides for remote businesses. Compare hosting types, optimize performance, and choose the right provider without overpaying for features you don\\'t need.';`,
  },
  {
    file: "src/pages/blog/productivity.astro",
    old: `const description = 'Boost your remote work productivity with proven strategies, tools, and workflows that help you get more done in less time.';`,
    new: `const description = 'Boost your remote work productivity with proven strategies, tools, and workflows that help you get more done without burning out or working weekends constantly.';`,
  },
  {
    file: "src/pages/blog/security.astro",
    old: `const description = 'Protect your remote work setup with security guides on VPNs, password management, 2FA, and staying safe online.';`,
    new: `const description = 'Protect your remote work setup with security guides on VPNs, password management, 2FA, and staying safe online without becoming a paranoid security expert.';`,
  },
  {
    file: "src/pages/blog/travel.astro",
    old: `const description = 'Digital nomad travel guides covering destinations, visas, coworking spaces, and tips for working remotely abroad.';`,
    new: `const description = 'Digital nomad travel guides covering destinations, visas, coworking spaces, and tips for working remotely abroad without visa headaches or connectivity issues.';`,
  },
  {
    file: "src/pages/gear/accessories.astro",
    old: `const description = 'Essential accessories for your remote work setup. Laptop bags, power banks, adapters, and gear that makes working from anywhere easier.';`,
    new: `const description = 'Essential accessories for your remote work setup. Laptop bags, power banks, travel adapters, and gear that makes working from anywhere actually easier and less stressful.';`,
  },
  {
    file: "src/pages/gear/audio.astro",
    old: `const description = 'Audio equipment for remote workers. Headphones, microphones, speakers, and earbuds tested for video calls and productivity.';`,
    new: `const description = 'Audio equipment for remote workers. Headphones, microphones, speakers, and earbuds tested for video calls and productivity without breaking the bank or your ears.';`,
  },
  {
    file: "src/pages/gear/computers.astro",
    old: `const description = 'Laptop buying guides for remote work. Compare specs, performance, portability, and value to find the perfect machine for your needs.';`,
    new: `const description = 'Laptop buying guides for remote work. Compare specs, performance, portability, and value to find the perfect machine for your needs without overspending on overkill features.';`,
  },
  {
    file: "src/pages/gear/furniture.astro",
    old: `const description = 'Desk and chair guides for remote workers. Standing desks, ergonomic chairs, and furniture that supports long productive workdays.';`,
    new: `const description = 'Desk and chair guides for remote workers. Standing desks, ergonomic chairs, and furniture that supports long productive workdays without destroying your back or wallet.';`,
  },
  {
    file: "src/pages/guides/communication.astro",
    old: `const description = 'Communication guides for remote teams. Email etiquette, meeting best practices, and collaboration strategies for distributed work.';`,
    new: `const description = 'Communication guides for remote teams. Email etiquette, meeting best practices, and collaboration strategies for distributed work that actually keeps everyone on the same page.';`,
  },
  {
    file: "src/pages/guides/finance.astro",
    old: `const description = 'Financial management guides for freelancers and remote workers. Invoicing, taxes, banking, and smart money management strategies.';`,
    new: `const description = 'Financial management guides for freelancers and remote workers. Invoicing, taxes, banking, and smart money management strategies that won\\'t require hiring an accountant yet.';`,
  },
  {
    file: "src/pages/guides/productivity.astro",
    old: `const description = 'Productivity guides for remote workers. Time management, focus strategies, and workflows that help you work smarter, not harder.';`,
    new: `const description = 'Productivity guides for remote workers. Time management, focus strategies, and workflows that help you work smarter, not harder, and actually finish your work on time.';`,
  },
  {
    file: "src/pages/guides/security.astro",
    old: `const description = 'Security guides for remote workers. VPN setup, password management, 2FA, and protecting your data while working from anywhere.';`,
    new: `const description = 'Security guides for remote workers. VPN setup, password management, 2FA, and protecting your data while working from anywhere without getting hacked or paranoid constantly.';`,
  },
  {
    file: "src/pages/guides/setup.astro",
    old: `const description = 'Home office setup guides for remote workers. Ergonomics, equipment, organization, and creating a productive workspace at home.';`,
    new: `const description = 'Home office setup guides for remote workers. Ergonomics, equipment, organization, and creating a productive workspace at home without spending thousands on fancy gear.';`,
  },
  {
    file: "src/pages/guides/travel.astro",
    old: `const description = 'Travel guides for digital nomads. Visa requirements, coworking spaces, internet reliability, and tips for working remotely abroad.';`,
    new: `const description = 'Travel guides for digital nomads. Visa requirements, coworking spaces, internet reliability, and tips for working remotely abroad without constant visa stress or connectivity issues.';`,
  },
  {
    file: "src/pages/tools/finance.astro",
    old: `const description = 'Financial tools for freelancers and remote workers. Accounting software, invoicing platforms, expense tracking, and payment processors.';`,
    new: `const description = 'Financial tools for freelancers and remote workers. Accounting software, invoicing platforms, expense tracking, and payment processors that won\\'t make tax season a nightmare.';`,
  },
  {
    file: "src/pages/tools/hosting.astro",
    old: `const description = 'Web hosting comparisons for remote businesses. Shared, VPS, dedicated hosting, and platforms to run your online business.';`,
    new: `const description = 'Web hosting comparisons for remote businesses. Shared, VPS, dedicated hosting, and platforms to run your online business without overpaying for resources you don\\'t need yet.';`,
  },
  {
    file: "src/pages/tools/saas.astro",
    old: `const description = 'SaaS tools for remote teams. Project management, time tracking, collaboration software, and productivity apps for distributed work.';`,
    new: `const description = 'SaaS tools for remote teams. Project management, time tracking, collaboration software, and productivity apps for distributed work without subscription fatigue or tool sprawl.';`,
  },
  {
    file: "src/pages/tools/vpn.astro",
    old: `const description = 'VPN guides for remote workers. Compare providers, learn setup, understand security features, and protect your connection anywhere.';`,
    new: `const description = 'VPN guides for remote workers. Compare providers, learn setup, understand security features, and protect your connection anywhere without slowing down your internet to a crawl.';`,
  },
];

let fixedCount = 0;
let errorCount = 0;

fixes.forEach((fix) => {
  const filePath = path.join(__dirname, "..", fix.file);

  try {
    if (!fs.existsSync(filePath)) {
      console.log(`⚠️  File not found: ${fix.file}`);
      errorCount++;
      return;
    }

    let content = fs.readFileSync(filePath, "utf-8");

    if (!content.includes(fix.old)) {
      console.log(`⚠️  Old description not found in: ${fix.file}`);
      errorCount++;
      return;
    }

    content = content.replace(fix.old, fix.new);
    fs.writeFileSync(filePath, content, "utf-8");

    fixedCount++;
    console.log(`✅ Fixed: ${fix.file}`);
  } catch (error) {
    console.log(`❌ Error fixing ${fix.file}: ${error.message}`);
    errorCount++;
  }
});

console.log("");
console.log("=".repeat(60));
console.log(`✅ Successfully fixed: ${fixedCount} files`);
console.log(`❌ Errors: ${errorCount} files`);
console.log("=".repeat(60));

process.exit(errorCount > 0 ? 1 : 0);
