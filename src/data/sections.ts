// Section hub + category page configuration (used by src/components/hub/HubPage.astro)
import type { Section } from "./articles";

export interface CategoryConfig {
  slug: string;
  /** Filter pill + breadcrumb label */
  name: string;
  /** Visible H1 */
  title: string;
  subtitle: string;
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
        description:
          "Find the best VPN for secure remote work. Compare top VPNs for speed, security, and reliability when working from anywhere.",
      },
      {
        slug: "saas",
        name: "SaaS",
        title: "SaaS Tools",
        subtitle: "Software to power your workflow",
        description:
          "Discover the best SaaS tools for remote workers. Project management, productivity, collaboration and more.",
      },
      {
        slug: "hosting",
        name: "Hosting",
        title: "Web Hosting",
        subtitle: "Reliable hosting for remote businesses",
        description:
          "Compare the best web hosting providers for remote businesses. VPS, cloud, and managed hosting solutions.",
      },
      {
        slug: "finance",
        name: "Finance",
        title: "Finance Tools",
        subtitle: "Manage your money remotely",
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
        description:
          "Find the best laptops, monitors, and computer equipment for remote work. In-depth reviews and buying guides.",
      },
      {
        slug: "furniture",
        name: "Furniture",
        title: "Office Furniture",
        subtitle: "Desks, chairs & ergonomics",
        description: "Best standing desks, ergonomic chairs, and office furniture for comfortable remote work.",
      },
      {
        slug: "audio",
        name: "Audio",
        title: "Audio Equipment",
        subtitle: "Headphones, mics & speakers",
        description: "Top noise-canceling headphones, microphones, and audio gear for remote meetings and focus.",
      },
      {
        slug: "accessories",
        name: "Accessories",
        title: "Accessories",
        subtitle: "Keyboards, bags & more",
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
        description:
          "Essential travel guides for digital nomads. Best destinations, WiFi tips, travel insurance, and more.",
      },
      {
        slug: "communication",
        name: "Communication",
        title: "Communication Guides",
        subtitle: "Connect with your remote team",
        description:
          "Master remote team communication. Async collaboration, video calls, and team messaging best practices.",
      },
      {
        slug: "productivity",
        name: "Productivity",
        title: "Productivity Guides",
        subtitle: "Get more done remotely",
        description:
          "Boost your remote work productivity. Time management, focus techniques, and workflow optimization.",
      },
      {
        slug: "security",
        name: "Security",
        title: "Security Guides",
        subtitle: "Protect your digital life",
        description:
          "Stay secure while working remotely. VPN guides, public WiFi safety, and cybersecurity best practices.",
      },
      {
        slug: "setup",
        name: "Setup",
        title: "Setup Guides",
        subtitle: "Build your perfect workspace",
        description:
          "Create the ideal remote work setup. Home office design, ergonomics, and equipment guides.",
      },
      {
        slug: "finance",
        name: "Finance",
        title: "Finance Guides",
        subtitle: "Manage money as a remote worker",
        description:
          "Financial guides for remote workers and digital nomads. Banking, taxes, and money management tips.",
      },
      {
        slug: "gear",
        name: "Gear",
        title: "Gear Guides",
        subtitle: "Reviews and recommendations",
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
        description:
          "Articles on remote team communication. Async collaboration, video calls, messaging tools, and best practices.",
      },
      {
        slug: "finance",
        name: "Finance",
        title: "Finance Articles",
        subtitle: "Manage money as a remote worker",
        description:
          "Financial articles for remote workers and digital nomads. Banking, taxes, invoicing, and money management.",
      },
      {
        slug: "hosting",
        name: "Hosting",
        title: "Hosting Articles",
        subtitle: "Host your remote business online",
        description:
          "Web hosting articles for remote businesses. Cloud hosting, VPS, and managed hosting comparisons.",
      },
      {
        slug: "productivity",
        name: "Productivity",
        title: "Productivity Articles",
        subtitle: "Get more done remotely",
        description:
          "Boost your remote work productivity. Time management, focus techniques, tools, and workflow tips.",
      },
      {
        slug: "security",
        name: "Security",
        title: "Security Articles",
        subtitle: "Protect your digital life",
        description: "Stay secure while working remotely. VPN guides, public WiFi safety, and cybersecurity tips.",
      },
      {
        slug: "travel",
        name: "Travel",
        title: "Travel Articles",
        subtitle: "Work from anywhere in the world",
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
