/**
 * Site Structure Generator
 * Dynamically generates a tree structure from Astro pages
 * Used by the interactive sitemap visualization
 */

export interface SiteNode {
  id: string;
  name: string;
  path: string;
  type: "hub" | "category" | "article" | "page" | "root";
  category?: string;
  children?: SiteNode[];
}

export interface SiteLink {
  source: string;
  target: string;
  type: "parent-child" | "related";
}

export interface SiteGraph {
  nodes: SiteNode[];
  links: SiteLink[];
}

// Page metadata for special pages (hubs, categories, static pages)
const PAGE_METADATA: Record<string, { name: string; type: SiteNode["type"]; category?: string }> = {
  "/": { name: "FloatJet", type: "root" },
  // Hubs
  "/tools": { name: "Tools", type: "hub", category: "tools" },
  "/gear": { name: "Gear", type: "hub", category: "gear" },
  "/guides": { name: "Guides", type: "hub", category: "guides" },
  "/deals": { name: "Deals", type: "hub", category: "deals" },
  "/blog": { name: "Blog", type: "hub", category: "blog" },
  // Tools categories
  "/tools/vpn": { name: "VPN & Security", type: "category", category: "vpn" },
  "/tools/saas": { name: "SaaS Tools", type: "category", category: "saas" },
  "/tools/hosting": { name: "Web Hosting", type: "category", category: "hosting" },
  "/tools/finance": { name: "Finance Tools", type: "category", category: "finance" },
  // Guides categories
  "/guides/travel": { name: "Travel", type: "category", category: "travel" },
  "/guides/communication": { name: "Communication", type: "category", category: "communication" },
  "/guides/productivity": { name: "Productivity", type: "category", category: "productivity" },
  "/guides/security": { name: "Security", type: "category", category: "security" },
  "/guides/setup": { name: "Setup", type: "category", category: "setup" },
  "/guides/finance": { name: "Finance Guides", type: "category", category: "finance" },
  // Gear categories
  "/gear/computers": { name: "Computers", type: "category", category: "computers" },
  "/gear/furniture": { name: "Furniture", type: "category", category: "furniture" },
  "/gear/audio": { name: "Audio", type: "category", category: "audio" },
  "/gear/accessories": { name: "Accessories", type: "category", category: "accessories" },
  // Blog categories
  "/blog/communication": { name: "Communication", type: "category", category: "communication" },
  "/blog/finance": { name: "Finance", type: "category", category: "finance" },
  "/blog/hosting": { name: "Hosting", type: "category", category: "hosting" },
  "/blog/productivity": { name: "Productivity", type: "category", category: "productivity" },
  "/blog/security": { name: "Security", type: "category", category: "security" },
  "/blog/travel": { name: "Travel", type: "category", category: "travel" },
  // Static pages
  "/about": { name: "About", type: "page" },
  "/contact": { name: "Contact", type: "page" },
  "/privacy": { name: "Privacy Policy", type: "page" },
  "/terms": { name: "Terms of Service", type: "page" },
  "/sitemap-visual": { name: "Site Map", type: "page" },
};

// Convert file path to route
function pathToRoute(filePath: string): string {
  return (
    filePath
      .replace(/^.*\/pages/, "")
      .replace(/\.astro$/, "")
      .replace(/\/index$/, "") || "/"
  );
}

// Check if route is a dynamic route pattern (contains [param])
function isDynamicRoute(route: string): boolean {
  return route.includes("[") && route.includes("]");
}

// Convert route to readable name
function routeToName(route: string): string {
  if (PAGE_METADATA[route]) {
    return PAGE_METADATA[route].name;
  }

  // Extract filename and convert to title case
  const filename = route.split("/").pop() || "";
  return filename
    .split("-")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

// Determine node type from route
function getNodeType(route: string): SiteNode["type"] {
  if (PAGE_METADATA[route]) {
    return PAGE_METADATA[route].type;
  }
  return "article";
}

// Determine category from route
function getCategory(route: string): string | undefined {
  if (PAGE_METADATA[route]?.category) {
    return PAGE_METADATA[route].category;
  }

  // Infer category from path
  if (route.startsWith("/tools/")) return "tools";
  if (route.startsWith("/gear/")) return "gear";
  if (route.startsWith("/guides/")) return "guides";
  if (route.startsWith("/blog/")) return "blog";

  return undefined;
}

// Get parent route
function getParentRoute(route: string): string {
  if (route === "/") return "";
  const parts = route.split("/").filter(Boolean);
  if (parts.length <= 1) return "/";
  parts.pop();
  return "/" + parts.join("/");
}

// Generate site structure from glob import results
export function generateSiteStructure(pageModules: Record<string, unknown>): SiteGraph {
  const nodes: SiteNode[] = [];
  const links: SiteLink[] = [];
  const routeSet = new Set<string>();

  // Extract routes from page modules, filtering out dynamic route patterns
  const routes = Object.keys(pageModules)
    .map(pathToRoute)
    .filter((route) => !isDynamicRoute(route))
    .sort();

  // Create nodes for each route
  routes.forEach((route) => {
    routeSet.add(route);

    nodes.push({
      id: route || "/",
      name: routeToName(route),
      path: route || "/",
      type: getNodeType(route),
      category: getCategory(route),
    });
  });

  // Create parent-child links
  routes.forEach((route) => {
    const parent = getParentRoute(route);
    if (parent && routeSet.has(parent)) {
      links.push({
        source: parent,
        target: route,
        type: "parent-child",
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
  graph.nodes.forEach((node) => {
    nodeMap.set(node.id, { ...node, children: [] });
  });

  // Find root
  const root = nodeMap.get("/");
  if (!root) {
    throw new Error("No root node found");
  }

  // Build tree from links
  graph.links.forEach((link) => {
    if (link.type === "parent-child") {
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

// Category color mapping for visualization
export const CATEGORY_COLORS: Record<string, string> = {
  root: "#0F4C5C", // Ocean Deep
  hub: "#38A3A5", // Jet Stream
  category: "#80CED7", // Sky Light
  tools: "#38A3A5", // Jet Stream
  gear: "#EE6C4D", // Alert/Action (Orange)
  guides: "#9333EA", // Purple
  deals: "#F59E0B", // Amber
  blog: "#06B6D4", // Cyan
  security: "#10B981", // Emerald
  vpn: "#10B981", // Emerald
  saas: "#3B82F6", // Blue
  hosting: "#8B5CF6", // Violet
  finance: "#F59E0B", // Amber
  travel: "#EC4899", // Pink
  communication: "#06B6D4", // Cyan
  productivity: "#F97316", // Orange
  setup: "#84CC16", // Lime
  computers: "#3B82F6", // Blue
  furniture: "#A855F7", // Purple
  audio: "#F43F5E", // Rose
  accessories: "#14B8A6", // Teal
  page: "#64748B", // Gray
  article: "#38A3A5", // Jet Stream
};
