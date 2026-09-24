// Section hub + category page configuration (used by src/components/hub/HubPage.astro)
import type { Section } from "./articles";

export interface CategoryConfig {
  slug: string;
  /** Filter pill + breadcrumb label */
  name: string;
  /** Visible H1 */
  title: string;
  subtitle: string;
  /** 2-3 sentence intro shown under the subtitle */
  intro?: string;
  /** "Start here" article link shown with the intro */
  startHere?: { href: string; label: string };
  /** Meta description */
  description: string;
}

export interface SectionConfig {
  section: Section;
  /** Breadcrumb label */
  label: string;
  metaTitle: string;
  metaDescription: string;
  heading: string;
  subtitle: string;
  note: string;
  countLabel: string;
  categories: CategoryConfig[];
}

export const sections: Record<Section, SectionConfig> = {
  tools: {
    section: "tools",
    label: "Tools",
    metaTitle: "Best Remote Work Tools & Software | FloatJet",
    metaDescription:
      "Discover the best tools and software for remote workers. In-depth reviews of project management, VPNs, productivity apps, and more.",
    heading: "Remote Work Tools",
    subtitle: "In-depth reviews and comparisons of the software remote teams actually run on.",
    note: "software worth paying for",
    countLabel: "reviews",
    categories: [
      {
        slug: "vpn",
        name: "VPN & Security",
        title: "VPN & Security Tools",
        subtitle: "Protect your remote work connection",
        intro: "A VPN is the first thing to sort out when you work from cafes, airports, or coworking spaces. These reviews cover the VPNs, password managers, encrypted email, and messaging apps that keep your work safe on any network. Every pick here is tested on real connections while traveling.",
        startHere: { href: "/tools/best-vpn-digital-nomads/", label: "Best VPNs for Digital Nomads" },
        description:
          "Find the best VPN for secure remote work. Compare top VPNs for speed, security, and reliability when working from anywhere.",
      },
      {
        slug: "saas",
        name: "SaaS",
        title: "SaaS Tools",
        subtitle: "Software to power your workflow",
        intro: "The software stack makes or breaks a remote workflow. These reviews cover project management, note-taking, scheduling, video calls, and the rest of the tools remote teams actually pay for. Each one is compared on real pricing and daily use, not feature checklists.",
        startHere: { href: "/tools/best-project-management-software/", label: "Best Project Management Software" },
        description:
          "Discover the best SaaS tools for remote workers. Project management, productivity, collaboration and more.",
      },
      {
        slug: "hosting",
        name: "Hosting",
        title: "Web Hosting",
        subtitle: "Reliable hosting for remote businesses",
        intro: "Your site needs to stay fast and online no matter where you work from. These reviews compare shared, VPS, managed WordPress, and static hosting on real prices and performance. Pick based on what your business actually needs, not the biggest discount banner.",
        startHere: { href: "/tools/best-web-hosting-remote-business/", label: "Best Web Hosting for Remote Businesses" },
        description:
          "Compare the best web hosting providers for remote businesses. VPS, cloud, and managed hosting solutions.",
      },
      {
        slug: "finance",
        name: "Finance",
        title: "Finance Tools",
        subtitle: "Manage your money remotely",
        intro: "Getting paid across borders means fees, exchange rates, and tax paperwork most guides skip. These reviews cover invoicing, accounting, expense tracking, and international payment tools built for freelancers. The goal is simple: keep more of what you earn.",
        startHere: { href: "/tools/best-invoicing-tools/", label: "Best Invoicing Tools for Freelancers" },
        description:
          "Best financial tools for freelancers and remote workers. Invoicing, accounting, and expense tracking.",
      },
    ],
  },
  gear: {
    section: "gear",
    label: "Gear",
    metaTitle: "Best Remote Work Gear & Equipment | FloatJet",
    metaDescription:
      "Find the best gear for your home office or mobile setup. Reviews of standing desks, headphones, monitors, and essential remote work equipment.",
    heading: "Remote Work Gear",
    subtitle: "In-depth reviews and buyer's guides for the desk, the bag and everything in between.",
    note: "desk upgrades",
    countLabel: "reviews",
    categories: [
      {
        slug: "computers",
        name: "Computers",
        title: "Computer Gear",
        subtitle: "Laptops, monitors & workstations",
        intro: "Your laptop and monitor are the two things you touch all day, every day. These reviews cover laptops, monitors, portable screens, and storage that hold up to real remote work. Buy once, buy right.",
        startHere: { href: "/gear/best-laptops-remote-work/", label: "Best Laptops for Remote Work" },
        description:
          "Find the best laptops, monitors, and computer equipment for remote work. In-depth reviews and buying guides.",
      },
      {
        slug: "furniture",
        name: "Furniture",
        title: "Office Furniture",
        subtitle: "Desks, chairs & ergonomics",
        intro: "A bad chair costs you more than its price tag in back pain and lost focus. These reviews cover standing desks, ergonomic chairs, and the small fixes that make long workdays sustainable. Tested over months, not unboxed for a photo.",
        startHere: { href: "/gear/best-standing-desks/", label: "Best Standing Desks" },
        description: "Best standing desks, ergonomic chairs, and office furniture for comfortable remote work.",
      },
      {
        slug: "audio",
        name: "Audio",
        title: "Audio Equipment",
        subtitle: "Headphones, mics & speakers",
        intro: "Clear audio matters more than sharp video on every call you take. These reviews cover noise-canceling headphones, microphones, and speakers for meetings and deep focus. Your clients hear the difference immediately.",
        startHere: { href: "/gear/best-noise-canceling-headphones/", label: "Best Noise-Canceling Headphones" },
        description: "Top noise-canceling headphones, microphones, and audio gear for remote meetings and focus.",
      },
      {
        slug: "accessories",
        name: "Accessories",
        title: "Accessories",
        subtitle: "Keyboards, bags & more",
        intro: "The small stuff adds up: keyboards, bags, chargers, and adapters that either disappear into your routine or annoy you daily. These reviews cover the accessories worth packing and the ones to skip. Everything here survives real travel.",
        startHere: { href: "/gear/best-laptop-bags-backpacks/", label: "Best Laptop Bags and Backpacks" },
        description:
          "Essential accessories for remote workers - keyboards, webcams, bags, and productivity gear.",
      },
    ],
  },
  guides: {
    section: "guides",
    label: "Guides",
    metaTitle: "Remote Work Guides & Tips | FloatJet",
    metaDescription:
      "Expert guides for remote workers and digital nomads. Learn best practices for async communication, time management, home office setup, and more.",
    heading: "Remote Work Guides",
    subtitle: "Practical tips and tutorials for setting up, staying secure and getting paid.",
    note: "how-tos, no fluff",
    countLabel: "guides",
    categories: [
      {
        slug: "travel",
        name: "Travel",
        title: "Travel Guides",
        subtitle: "Work from anywhere in the world",
        intro: "Working from another country means visas, taxes, insurance, and WiFi you can actually rely on. These guides cover the practical side of long-term travel as a remote worker. Written from the road, not from a research desk.",
        startHere: { href: "/guides/can-you-work-remotely-another-country/", label: "Can You Legally Work Remotely from Another Country?" },
        description:
          "Essential travel guides for digital nomads. Best destinations, WiFi tips, travel insurance, and more.",
      },
      {
        slug: "communication",
        name: "Communication",
        title: "Communication Guides",
        subtitle: "Connect with your remote team",
        intro: "Remote teams live or die on communication habits. These guides cover async work, better meetings, and the etiquette that keeps distributed teams sane. Small changes here pay off every single day.",
        startHere: { href: "/guides/remote-team-collaboration-best-practices/", label: "Remote Team Collaboration Best Practices" },
        description:
          "Master remote team communication. Async collaboration, video calls, and team messaging best practices.",
      },
      {
        slug: "productivity",
        name: "Productivity",
        title: "Productivity Guides",
        subtitle: "Get more done remotely",
        intro: "Working from home removes the structure an office gives you for free. These guides cover focus techniques, time management, and routines that replace it. Pick one system and actually stick with it.",
        startHere: { href: "/guides/how-to-stay-focused-working-from-home/", label: "How to Stay Focused Working from Home" },
        description:
          "Boost your remote work productivity. Time management, focus techniques, and workflow optimization.",
      },
      {
        slug: "security",
        name: "Security",
        title: "Security Guides",
        subtitle: "Protect your digital life",
        intro: "Remote work opens doors an office firewall used to close. These guides cover VPNs, two-factor authentication, phishing, and safe habits on public WiFi. None of it is hard once someone walks you through it.",
        startHere: { href: "/guides/two-factor-authentication-guide/", label: "Two-Factor Authentication Guide" },
        description:
          "Stay secure while working remotely. VPN guides, public WiFi safety, and cybersecurity best practices.",
      },
      {
        slug: "setup",
        name: "Setup",
        title: "Setup Guides",
        subtitle: "Build your perfect workspace",
        intro: "A good home office is a system, not a shopping spree. These guides cover checklists, budgets, cable management, and monitor setups for spaces big and small. Start with the essentials and upgrade what actually bothers you.",
        startHere: { href: "/guides/complete-home-office-checklist/", label: "Complete Home Office Checklist" },
        description:
          "Create the ideal remote work setup. Home office design, ergonomics, and equipment guides.",
      },
      {
        slug: "finance",
        name: "Finance",
        title: "Finance Guides",
        subtitle: "Manage money as a remote worker",
        intro: "Freelance money works differently: irregular income, quarterly taxes, and no employer retirement plan. These guides cover deductions, banking, invoicing terms, and saving when nobody does it for you. Boring topic, real money.",
        startHere: { href: "/guides/freelancer-tax-deductions-guide/", label: "Freelancer Tax Deductions Guide" },
        description:
          "Financial guides for remote workers and digital nomads. Banking, taxes, and money management tips.",
      },
      {
        slug: "gear",
        name: "Gear",
        title: "Gear Guides",
        subtitle: "Reviews and recommendations",
        intro: "Buying advice without the affiliate-bait rankings. These guides explain what actually matters in a laptop, desk, or chair for remote work, and what is marketing noise. Read these before spending anything.",
        startHere: { href: "/guides/what-makes-laptop-good-remote-work/", label: "What Makes a Laptop Good for Remote Work" },
        description: "In-depth guides on remote work gear. Desks, laptops, and equipment buying advice.",
      },
    ],
  },
  blog: {
    section: "blog",
    label: "Blog",
    metaTitle: "Remote Work Blog | FloatJet",
    metaDescription:
      "Insights, tips, and guides for remote workers, freelancers, and digital nomads. Expert advice on productivity, travel, security, and more.",
    heading: "Remote Work Blog",
    subtitle: "Insights, stories and comparisons from people who work from anywhere.",
    note: "notes from the road",
    countLabel: "posts",
    categories: [
      {
        slug: "communication",
        name: "Communication",
        title: "Communication Articles",
        subtitle: "Connect with your remote team",
        intro: "Notes and comparisons on how remote teams talk to each other. Async communication, team chat tools, and the habits that keep projects moving across time zones.",
        startHere: { href: "/blog/async-communication-remote-teams/", label: "Async Communication for Remote Teams" },
        description:
          "Articles on remote team communication. Async collaboration, video calls, messaging tools, and best practices.",
      },
      {
        slug: "finance",
        name: "Finance",
        title: "Finance Articles",
        subtitle: "Manage money as a remote worker",
        intro: "Money articles for people who earn online from anywhere. Banking for nomads, crypto-friendly options, and tax tips that apply when your office has no fixed address.",
        startHere: { href: "/blog/best-banking-digital-nomads/", label: "Best Banking for Digital Nomads" },
        description:
          "Financial articles for remote workers and digital nomads. Banking, taxes, invoicing, and money management.",
      },
      {
        slug: "hosting",
        name: "Hosting",
        title: "Hosting Articles",
        subtitle: "Host your remote business online",
        intro: "Hosting decisions follow your business as it grows. These articles compare managed WordPress, cloud, and VPS options so you upgrade when it makes sense, not when a salesperson says so.",
        startHere: { href: "/blog/managed-wordpress-hosting-compared/", label: "Managed WordPress Hosting Compared" },
        description:
          "Web hosting articles for remote businesses. Cloud hosting, VPS, and managed hosting comparisons.",
      },
      {
        slug: "productivity",
        name: "Productivity",
        title: "Productivity Articles",
        subtitle: "Get more done remotely",
        intro: "Articles on getting real work done outside an office. Focus, routines, and the tools that earn their place in a lean setup.",
        startHere: { href: "/blog/ultimate-home-office-setup/", label: "The Ultimate Home Office Setup" },
        description:
          "Boost your remote work productivity. Time management, focus techniques, tools, and workflow tips.",
      },
      {
        slug: "security",
        name: "Security",
        title: "Security Articles",
        subtitle: "Protect your digital life",
        intro: "Practical security for people who work from cafes and airports. Public WiFi risks, VPN use, and the habits that keep client data safe.",
        startHere: { href: "/blog/vpn-public-wifi-guide/", label: "VPN on Public WiFi: What You Need to Know" },
        description: "Stay secure while working remotely. VPN guides, public WiFi safety, and cybersecurity tips.",
      },
      {
        slug: "travel",
        name: "Travel",
        title: "Travel Articles",
        subtitle: "Work from anywhere in the world",
        intro: "Articles on the digital nomad life: destinations, travel tech, insurance, and finding reliable WiFi anywhere. Written from experience on the road.",
        startHere: { href: "/blog/top-destinations-digital-nomads/", label: "Top Destinations for Digital Nomads" },
        description:
          "Travel articles for digital nomads. Best destinations, WiFi tips, travel insurance, and remote work locations.",
      },
    ],
  },
};

/** Filter pills for a section: "All" plus one per category */
export function getSectionFilters(section: Section) {
  const config = sections[section];
  return [
    { name: "All", href: `/${section}/` },
    ...config.categories.map((category) => ({ name: category.name, href: `/${section}/${category.slug}/` })),
  ];
}
