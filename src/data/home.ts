// Homepage copy and curated lists - shared by src/pages/index.astro (HTML)
// and src/lib/agent-api.ts (the Markdown version served to agents), so both stay in sync

export const homeMeta = {
  title: "FloatJet | Tools & Resources for Remote Professionals",
  description:
    "Discover the best software, gear, and strategies to work efficiently from anywhere. Expert reviews on VPNs, project management tools, and home office setups.",
  headline: "Build a desk you actually want to work at.",
};

// The laptop screen on the desk: the lead review
export const featured = {
  title: "Notion vs ClickUp vs Monday",
  href: "/tools/notion-vs-clickup-vs-monday/",
  blurb: "Which project tool actually fits a remote team.",
};

// Tool names shown in the moving strip (all reviewed on the site)
export const toolStrip = ["Notion", "ClickUp", "NordVPN", "Monday.com", "Surfshark", "Kit", "WP Engine", "1Password", "Wise", "ExpressVPN"];

// Start Here guides for new visitors
export const startHereGuides = [
  {
    title: "Complete Home Office Checklist",
    description: "Everything you need to set up the perfect workspace, in the order to buy it.",
    href: "/guides/complete-home-office-checklist/",
  },
  {
    title: "Best VPNs for Remote Workers",
    description: "Secure your connection on hotel, airport and cafe networks.",
    href: "/tools/best-vpn-digital-nomads/",
  },
  {
    title: "Budget Office Setup Under $500",
    description: "A professional workspace without breaking the bank.",
    href: "/guides/budget-home-office-setup-500/",
  },
];

// On our desk this month - curated money pages
export const editorsPicks = [
  {
    title: "Best Project Management Software",
    image: "/images/unsplash/photo-1454165804606-c3d57bc86b40-1200w.webp",
    imageAlt: "Laptop showing a project board on a desk",
    href: "/tools/best-project-management-software/",
    category: "Software",
    readTime: 14,
    note: "the tools that run our week",
  },
  {
    title: "Best Ergonomic Chairs for Home Office",
    image: "/images/unsplash/photo-1580480055273-228ff5388ef8-1200w.webp",
    imageAlt: "Ergonomic office chair at a home desk",
    href: "/gear/best-ergonomic-chairs/",
    category: "Gear",
    readTime: 18,
    note: "our backs say thanks",
  },
  {
    title: "Best Password Managers",
    image: "/images/unsplash/photo-1633265486064-086b219458ec-1200w.webp",
    imageAlt: "Padlock icon on a laptop screen",
    href: "/tools/best-password-manager-remote-work/",
    category: "Security",
    readTime: 14,
    note: "one password to remember",
  },
  {
    title: "Best VPNs for Digital Nomads",
    image: "/images/unsplash/photo-1526374965328-7f61d4dc18c5-1200w.webp",
    imageAlt: "Code on a dark screen suggesting a secure connection",
    href: "/tools/best-vpn-digital-nomads/",
    category: "VPN",
    readTime: 15,
    note: "safe on airport wifi",
  },
];

// Latest reviews - distinct from the picks above
export const latestReviews = [
  {
    title: "Best Audio Interfaces for Remote Work",
    description: "Professional audio quality for meetings and podcasts.",
    image: "/images/unsplash/photo-j4T_qK7Eumc-1200w.webp",
    imageAlt: "Audio interface and microphone on a desk",
    href: "/gear/best-audio-interfaces-for-remote-work/",
    category: "Audio",
    readTime: 14,
  },
  {
    title: "Best Footrests for Desk Workers",
    description: "Improve posture and circulation with these ergonomic picks.",
    image: "/images/unsplash/photo-1598818432717-29f81b9224fd-1200w.webp",
    imageAlt: "Home office desk setup",
    href: "/gear/best-footrests-for-desk-workers/",
    category: "Furniture",
    readTime: 14,
  },
  {
    title: "Best External SSDs for Remote Workers",
    description: "Fast, portable storage for digital nomads.",
    image: "/images/unsplash/photo-1597852074816-d933c7d2b988-1200w.webp",
    imageAlt: "Portable external SSD next to a laptop",
    href: "/gear/best-external-ssds-for-remote-workers/",
    category: "Computers",
    readTime: 14,
  },
  {
    title: "Best DNS Services for Privacy",
    description: "Faster browsing and better privacy in minutes.",
    image: "/images/unsplash/photo-1606765962248-7ff407b51667-1200w.webp",
    imageAlt: "Network cables plugged into a router",
    href: "/tools/best-dns-services-for-privacy-and-speed/",
    category: "Security",
    readTime: 13,
  },
];

// "Pick a drawer" blocks (names and blurbs; visual classes live in index.astro)
export const drawers = [
  { section: "tools", name: "Software", unit: "reviews", blurb: "VPNs, project management, cloud storage", href: "/tools/" },
  { section: "gear", name: "Gear", unit: "reviews", blurb: "Laptops, chairs, audio, desks", href: "/gear/" },
  { section: "guides", name: "Guides", unit: "guides", blurb: "Setup, productivity, security", href: "/guides/" },
  { section: "blog", name: "Blog", unit: "posts", blurb: "Trends, comparisons, nomad life", href: "/blog/" },
] as const;
