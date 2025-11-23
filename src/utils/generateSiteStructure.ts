/**
 * Site Structure Generator
 * Dynamically generates a tree structure from Astro pages
 * Used by the interactive sitemap visualization
 */

export interface SiteNode {
  id: string;
  name: string;
  path: string;
  type: 'hub' | 'category' | 'article' | 'page' | 'root';
  category?: string;
  children?: SiteNode[];
}

export interface SiteLink {
  source: string;
  target: string;
  type: 'parent-child' | 'related';
}

export interface SiteGraph {
  nodes: SiteNode[];
  links: SiteLink[];
}

// Page metadata extracted from file names and paths
const PAGE_METADATA: Record<string, { name: string; type: SiteNode['type']; category?: string }> = {
  '/': { name: 'Home', type: 'root' },
  '/tools': { name: 'Tools Hub', type: 'hub' },
  '/gear': { name: 'Gear Hub', type: 'hub' },
  '/guides': { name: 'Guides Hub', type: 'hub' },
  '/deals': { name: 'Deals', type: 'hub' },
  '/blog': { name: 'Blog', type: 'hub' },
  '/tools/vpn': { name: 'VPN & Security', type: 'category', category: 'security' },
  '/tools/saas': { name: 'SaaS Tools', type: 'category', category: 'saas' },
  '/tools/hosting': { name: 'Web Hosting', type: 'category', category: 'hosting' },
  '/tools/finance': { name: 'Finance', type: 'category', category: 'finance' },
  '/guides/travel': { name: 'Travel Guides', type: 'category', category: 'travel' },
  '/about': { name: 'About', type: 'page' },
  '/contact': { name: 'Contact', type: 'page' },
  '/privacy': { name: 'Privacy Policy', type: 'page' },
  '/terms': { name: 'Terms of Service', type: 'page' },
};

// Convert file path to route and extract metadata
function pathToRoute(filePath: string): string {
  return filePath
    .replace(/^src\/pages/, '')
    .replace(/\.astro$/, '')
    .replace(/\/index$/, '') || '/';
}

// Convert route to readable name
function routeToName(route: string): string {
  if (PAGE_METADATA[route]) {
    return PAGE_METADATA[route].name;
  }

  // Extract filename and convert to title case
  const filename = route.split('/').pop() || '';
  return filename
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ');
}

// Determine node type from route
function getNodeType(route: string): SiteNode['type'] {
  if (PAGE_METADATA[route]) {
    return PAGE_METADATA[route].type;
  }
  return 'article';
}

// Determine category from route
function getCategory(route: string): string | undefined {
  if (PAGE_METADATA[route]?.category) {
    return PAGE_METADATA[route].category;
  }

  // Infer category from path
  if (route.startsWith('/tools/')) return 'tools';
  if (route.startsWith('/gear/')) return 'gear';
  if (route.startsWith('/guides/')) return 'guides';
  if (route.startsWith('/blog/')) return 'blog';

  return undefined;
}

// Get parent route
function getParentRoute(route: string): string {
  if (route === '/') return '';
  const parts = route.split('/').filter(Boolean);
  if (parts.length <= 1) return '/';
  parts.pop();
  return '/' + parts.join('/');
}

// Generate site structure from glob import results
export function generateSiteStructure(pageModules: Record<string, unknown>): SiteGraph {
  const nodes: SiteNode[] = [];
  const links: SiteLink[] = [];
  const routeSet = new Set<string>();

  // Extract routes from page modules
  const routes = Object.keys(pageModules).map(pathToRoute).sort();

  // Create nodes for each route
  routes.forEach(route => {
    routeSet.add(route);

    nodes.push({
      id: route || '/',
      name: routeToName(route),
      path: route || '/',
      type: getNodeType(route),
      category: getCategory(route),
    });
  });

  // Create parent-child links
  routes.forEach(route => {
    const parent = getParentRoute(route);
    if (parent && routeSet.has(parent)) {
      links.push({
        source: parent,
        target: route,
        type: 'parent-child',
      });
    }
  });

  return { nodes, links };
}

/**
 * Convert flat structure to hierarchical tree for D3 tree layouts
 */
export function buildHierarchy(graph: SiteGraph): SiteNode {
  const nodeMap = new Map<string, SiteNode>();

  // Create a copy of each node with empty children array
  graph.nodes.forEach(node => {
    nodeMap.set(node.id, { ...node, children: [] });
  });

  // Find root
  const root = nodeMap.get('/');
  if (!root) {
    throw new Error('No root node found');
  }

  // Build tree from links
  graph.links.forEach(link => {
    if (link.type === 'parent-child') {
      const parent = nodeMap.get(link.source);
      const child = nodeMap.get(link.target);
      if (parent && child) {
        parent.children = parent.children || [];
        parent.children.push(child);
      }
    }
  });

  return root;
}

// Pre-defined complete site structure for static generation
// This matches the actual site pages
export const SITE_STRUCTURE: SiteGraph = {
  nodes: [
    // Root
    { id: '/', name: 'FloatJet', path: '/', type: 'root' },

    // Hubs
    { id: '/tools', name: 'Tools', path: '/tools', type: 'hub', category: 'tools' },
    { id: '/gear', name: 'Gear', path: '/gear', type: 'hub', category: 'gear' },
    { id: '/guides', name: 'Guides', path: '/guides', type: 'hub', category: 'guides' },
    { id: '/deals', name: 'Deals', path: '/deals', type: 'hub', category: 'deals' },

    // Category Pages
    { id: '/tools/vpn', name: 'VPN & Security', path: '/tools/vpn', type: 'category', category: 'security' },
    { id: '/tools/saas', name: 'SaaS Tools', path: '/tools/saas', type: 'category', category: 'saas' },
    { id: '/tools/hosting', name: 'Web Hosting', path: '/tools/hosting', type: 'category', category: 'hosting' },
    { id: '/tools/finance', name: 'Finance', path: '/tools/finance', type: 'category', category: 'finance' },
    { id: '/guides/travel', name: 'Travel', path: '/guides/travel', type: 'category', category: 'travel' },

    // Tool Articles
    { id: '/tools/best-project-management-software', name: 'Project Management', path: '/tools/best-project-management-software', type: 'article', category: 'saas' },
    { id: '/tools/best-vpn-digital-nomads', name: 'VPN Guide', path: '/tools/best-vpn-digital-nomads', type: 'article', category: 'security' },
    { id: '/tools/best-email-marketing-tools', name: 'Email Marketing', path: '/tools/best-email-marketing-tools', type: 'article', category: 'saas' },
    { id: '/tools/best-password-manager-remote-work', name: 'Password Managers', path: '/tools/best-password-manager-remote-work', type: 'article', category: 'security' },
    { id: '/tools/best-web-hosting-remote-business', name: 'Web Hosting', path: '/tools/best-web-hosting-remote-business', type: 'article', category: 'hosting' },
    { id: '/tools/best-time-tracking-software', name: 'Time Tracking', path: '/tools/best-time-tracking-software', type: 'article', category: 'saas' },
    { id: '/tools/best-online-course-platforms', name: 'Course Platforms', path: '/tools/best-online-course-platforms', type: 'article', category: 'saas' },
    { id: '/tools/best-productivity-apps', name: 'Productivity Apps', path: '/tools/best-productivity-apps', type: 'article', category: 'saas' },

    // Gear Articles
    { id: '/gear/best-laptops-remote-work', name: 'Laptops', path: '/gear/best-laptops-remote-work', type: 'article', category: 'gear' },
    { id: '/gear/best-standing-desks', name: 'Standing Desks', path: '/gear/best-standing-desks', type: 'article', category: 'gear' },
    { id: '/gear/best-noise-canceling-headphones', name: 'Headphones', path: '/gear/best-noise-canceling-headphones', type: 'article', category: 'gear' },

    // Blog Articles - Finance
    { id: '/blog/best-banking-digital-nomads', name: 'Digital Nomad Banking', path: '/blog/best-banking-digital-nomads', type: 'article', category: 'finance' },
    { id: '/blog/crypto-friendly-banks', name: 'Crypto Banks', path: '/blog/crypto-friendly-banks', type: 'article', category: 'finance' },
    { id: '/blog/tax-tips-remote-workers', name: 'Tax Tips', path: '/blog/tax-tips-remote-workers', type: 'article', category: 'finance' },

    // Blog Articles - Travel
    { id: '/blog/top-destinations-digital-nomads', name: 'Top Destinations', path: '/blog/top-destinations-digital-nomads', type: 'article', category: 'travel' },
    { id: '/blog/best-travel-insurance-remote-workers', name: 'Travel Insurance', path: '/blog/best-travel-insurance-remote-workers', type: 'article', category: 'travel' },
    { id: '/blog/essential-travel-tech-nomads', name: 'Travel Tech', path: '/blog/essential-travel-tech-nomads', type: 'article', category: 'travel' },
    { id: '/blog/find-reliable-wifi-anywhere', name: 'Find WiFi', path: '/blog/find-reliable-wifi-anywhere', type: 'article', category: 'travel' },

    // Blog Articles - Hosting
    { id: '/blog/cloud-vs-traditional-hosting', name: 'Cloud vs Traditional', path: '/blog/cloud-vs-traditional-hosting', type: 'article', category: 'hosting' },
    { id: '/blog/managed-wordpress-hosting-compared', name: 'WordPress Hosting', path: '/blog/managed-wordpress-hosting-compared', type: 'article', category: 'hosting' },

    // Blog Articles - Communication
    { id: '/blog/best-team-communication-tools', name: 'Team Communication', path: '/blog/best-team-communication-tools', type: 'article', category: 'saas' },
    { id: '/blog/best-crm-software-small-business', name: 'CRM Software', path: '/blog/best-crm-software-small-business', type: 'article', category: 'saas' },
    { id: '/blog/async-communication-remote-teams', name: 'Async Communication', path: '/blog/async-communication-remote-teams', type: 'article', category: 'guides' },
    { id: '/blog/managing-time-zones-remote-teams', name: 'Time Zones', path: '/blog/managing-time-zones-remote-teams', type: 'article', category: 'guides' },

    // Blog Articles - Security
    { id: '/blog/vpn-public-wifi-guide', name: 'VPN & WiFi Security', path: '/blog/vpn-public-wifi-guide', type: 'article', category: 'security' },
    { id: '/blog/vpn-speed-comparison', name: 'VPN Speed Test', path: '/blog/vpn-speed-comparison', type: 'article', category: 'security' },

    // Blog Articles - Setup
    { id: '/blog/ultimate-home-office-setup', name: 'Home Office Setup', path: '/blog/ultimate-home-office-setup', type: 'article', category: 'guides' },

    // Legal/Info Pages
    { id: '/about', name: 'About', path: '/about', type: 'page' },
    { id: '/contact', name: 'Contact', path: '/contact', type: 'page' },
    { id: '/privacy', name: 'Privacy', path: '/privacy', type: 'page' },
    { id: '/terms', name: 'Terms', path: '/terms', type: 'page' },
  ],
  links: [
    // Hub links from root
    { source: '/', target: '/tools', type: 'parent-child' },
    { source: '/', target: '/gear', type: 'parent-child' },
    { source: '/', target: '/guides', type: 'parent-child' },
    { source: '/', target: '/deals', type: 'parent-child' },
    { source: '/', target: '/about', type: 'parent-child' },
    { source: '/', target: '/contact', type: 'parent-child' },
    { source: '/', target: '/privacy', type: 'parent-child' },
    { source: '/', target: '/terms', type: 'parent-child' },

    // Category links from Tools hub
    { source: '/tools', target: '/tools/vpn', type: 'parent-child' },
    { source: '/tools', target: '/tools/saas', type: 'parent-child' },
    { source: '/tools', target: '/tools/hosting', type: 'parent-child' },
    { source: '/tools', target: '/tools/finance', type: 'parent-child' },

    // Category links from Guides hub
    { source: '/guides', target: '/guides/travel', type: 'parent-child' },

    // Tool articles under Tools hub
    { source: '/tools', target: '/tools/best-project-management-software', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-vpn-digital-nomads', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-email-marketing-tools', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-password-manager-remote-work', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-web-hosting-remote-business', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-time-tracking-software', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-online-course-platforms', type: 'parent-child' },
    { source: '/tools', target: '/tools/best-productivity-apps', type: 'parent-child' },

    // Gear articles
    { source: '/gear', target: '/gear/best-laptops-remote-work', type: 'parent-child' },
    { source: '/gear', target: '/gear/best-standing-desks', type: 'parent-child' },
    { source: '/gear', target: '/gear/best-noise-canceling-headphones', type: 'parent-child' },

    // Blog articles organized by logical parent
    // Finance articles -> finance category
    { source: '/tools/finance', target: '/blog/best-banking-digital-nomads', type: 'parent-child' },
    { source: '/tools/finance', target: '/blog/crypto-friendly-banks', type: 'parent-child' },
    { source: '/tools/finance', target: '/blog/tax-tips-remote-workers', type: 'parent-child' },

    // Travel articles -> travel category
    { source: '/guides/travel', target: '/blog/top-destinations-digital-nomads', type: 'parent-child' },
    { source: '/guides/travel', target: '/blog/best-travel-insurance-remote-workers', type: 'parent-child' },
    { source: '/guides/travel', target: '/blog/essential-travel-tech-nomads', type: 'parent-child' },
    { source: '/guides/travel', target: '/blog/find-reliable-wifi-anywhere', type: 'parent-child' },

    // Hosting articles -> hosting category
    { source: '/tools/hosting', target: '/blog/cloud-vs-traditional-hosting', type: 'parent-child' },
    { source: '/tools/hosting', target: '/blog/managed-wordpress-hosting-compared', type: 'parent-child' },

    // SaaS articles -> saas category
    { source: '/tools/saas', target: '/blog/best-team-communication-tools', type: 'parent-child' },
    { source: '/tools/saas', target: '/blog/best-crm-software-small-business', type: 'parent-child' },

    // Security articles -> vpn category
    { source: '/tools/vpn', target: '/blog/vpn-public-wifi-guide', type: 'parent-child' },
    { source: '/tools/vpn', target: '/blog/vpn-speed-comparison', type: 'parent-child' },

    // Guides articles -> guides hub
    { source: '/guides', target: '/blog/async-communication-remote-teams', type: 'parent-child' },
    { source: '/guides', target: '/blog/managing-time-zones-remote-teams', type: 'parent-child' },
    { source: '/guides', target: '/blog/ultimate-home-office-setup', type: 'parent-child' },
  ]
};

// Category color mapping for visualization
export const CATEGORY_COLORS: Record<string, string> = {
  root: '#0F4C5C',      // Ocean Deep
  hub: '#38A3A5',       // Jet Stream
  category: '#80CED7',  // Sky Light
  tools: '#38A3A5',     // Jet Stream
  gear: '#EE6C4D',      // Alert/Action (Orange)
  guides: '#9333EA',    // Purple
  deals: '#F59E0B',     // Amber
  security: '#10B981',  // Emerald
  saas: '#3B82F6',      // Blue
  hosting: '#8B5CF6',   // Violet
  finance: '#F59E0B',   // Amber
  travel: '#EC4899',    // Pink
  page: '#64748B',      // Gray
  article: '#38A3A5',   // Jet Stream
};
