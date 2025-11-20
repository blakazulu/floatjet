---
task_id: "FJ-005"
title: "Set up navigation and footer"
category: "Design"
priority: "P1"
status: "not-started"
created_date: "2025-11-20"
due_date: "2025-11-24"
estimated_hours: 3
actual_hours: 0
assigned_to: "Team"
tags: ["navigation", "footer", "week-1", "components"]
---

# Task: Set up navigation and footer

## Overview

Create responsive navigation header and footer components that will be used across all pages. Navigation should be
mobile-friendly with hamburger menu, footer should include affiliate disclosure and essential links.

## Goals

- [ ] Build responsive navigation with mobile menu
- [ ] Create comprehensive footer with site-wide affiliate disclosure
- [ ] Implement glassmorphism for premium feel
- [ ] Ensure accessibility (keyboard navigation, ARIA labels)
- [ ] Mobile-first approach

## Success Criteria

- ✅ Navigation works on mobile (hamburger menu)
- ✅ Navigation sticky on scroll (desktop)
- ✅ Footer includes site-wide affiliate disclosure
- ✅ All links accessible via keyboard
- ✅ ARIA labels present for screen readers
- ✅ Lighthouse accessibility score >95

## Dependencies

**Blocked by:**

- FJ-001: Astro setup
- FJ-002: Base layouts

**Blocks:** None

## Subtasks

### Phase 1: Navigation Header (1.5 hours)

- [ ] 1.1 Create `src/components/layout/Navigation.astro`
    - Logo (FloatJet text + icon)
    - Main navigation links
    - Mobile: Hamburger button
    - Desktop: Horizontal nav

- [ ] 1.2 Design navigation links structure
    - Home
    - Tools (dropdown: Project Mgmt, VPNs, Productivity)
    - Guides
    - Blog
    - About

- [ ] 1.3 Implement mobile menu
    - Hamburger icon (☰)
    - Slide-in menu from right
    - Overlay backdrop
    - Close button (×)
    - Smooth animation

- [ ] 1.4 Add glassmorphism styling
    - `backdrop-filter: blur(12px)`
    - Semi-transparent background
    - Subtle border
    - Sticky positioning on scroll

- [ ] 1.5 Desktop navigation styling
    - Horizontal menu items
    - Hover effects
    - Active state highlighting
    - Dropdown on hover (if submenus)

### Phase 2: Mobile Menu Functionality (0.5 hours)

- [ ] 2.1 Add menu toggle JavaScript
    - Open/close state management
    - Prevent body scroll when menu open
    - Close on escape key
    - Close when clicking outside

- [ ] 2.2 Accessibility for mobile menu
    - `aria-expanded` on button
    - `aria-label` descriptive labels
    - Focus management
    - Keyboard navigation (Tab, Escape)

### Phase 3: Footer Component (0.75 hours)

- [ ] 3.1 Create `src/components/layout/Footer.astro`
    - 3-column layout (desktop)
    - Single column (mobile)
    - Site-wide affiliate disclosure
    - Navigation links
    - Social links
    - Copyright

- [ ] 3.2 Structure footer sections
    - Column 1: About + Affiliate Disclosure
    - Column 2: Quick Links (Tools, Guides, Blog)
    - Column 3: Legal (Privacy, Terms, Contact)

- [ ] 3.3 Add site-wide affiliate disclosure
  ```
  "FloatJet participates in affiliate programs. We may earn
  commissions from qualifying purchases made through links
  on this site at no additional cost to you. We only
  recommend tools we've tested and genuinely believe in."
  ```

- [ ] 3.4 Style footer
    - Background: Ocean Deep (#0F4C5C)
    - Text: White/Sky Light
    - Padding and spacing
    - Links hover effects
    - Responsive grid

### Phase 4: Testing & Polish (0.25 hours)

- [ ] 4.1 Test navigation on all breakpoints
    - 375px: Hamburger menu
    - 768px: Transition point
    - 1024px: Full desktop nav
    - 1280px: Wide desktop

- [ ] 4.2 Test keyboard accessibility
    - Tab through all links
    - Enter activates links
    - Escape closes mobile menu
    - Focus visible
    - Logical tab order

- [ ] 4.3 Test screen reader
    - Navigation announces correctly
    - Landmarks present (nav, footer)
    - ARIA labels work
    - Menu state announced

- [ ] 4.4 Test mobile menu
    - Opens smoothly
    - Closes when clicking outside
    - Closes on link click
    - Body scroll disabled when open

## Resources

- Design Guidelines: `/docs/03-design/design-guidelines.md`
- Accessibility Guidelines: `/docs/03-design/accessibility-guidelines.md`
- [Tailwind Navbar Examples](https://tailwindui.com/components/application-ui/navigation/navbars)
- [ARIA Navigation Patterns](https://www.w3.org/WAI/ARIA/apg/patterns/disclosure/examples/disclosure-navigation/)

## Acceptance Checklist

- [ ] Navigation component exists and works
- [ ] Mobile menu functional
- [ ] Desktop navigation functional
- [ ] Footer component exists
- [ ] Site-wide affiliate disclosure in footer
- [ ] All links work
- [ ] Keyboard accessible
- [ ] Screen reader friendly
- [ ] ARIA labels present
- [ ] Responsive at all breakpoints
- [ ] Lighthouse accessibility >95
- [ ] No console errors

## Notes

**Navigation Structure:**

```
Home | Tools ▼ | Guides | Blog | About
  Tools submenu:
  - Project Management
  - VPNs & Security
  - Productivity Apps
  - Remote Work Tools
```

**Footer Structure:**

```
[About FloatJet]              [Quick Links]           [Legal]
Affiliate Disclosure          - All Tools             - Privacy Policy
                             - Guides                - Terms of Service
                             - Blog                  - Contact Us

[Social Links: Twitter, LinkedIn, GitHub]
© 2025 FloatJet. All rights reserved.
```

**Glassmorphism Effect:**

```css
.nav-glass {
  background: rgba(255, 255, 255, 0.7);
  backdrop-filter: blur(12px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.3);
}
```

**Accessibility Requirements:**

- Logo has alt text
- Nav landmark with `<nav>` tag
- Footer landmark with `<footer>` tag
- Mobile menu button has aria-label
- aria-expanded state on menu button
- Focus visible on all interactive elements
- Minimum touch target: 44x44px

**Mobile Menu Best Practices:**

- Prevent body scroll when menu open
- Close on outside click
- Close on Escape key
- Smooth transitions
- Z-index higher than other content

## Progress Log

### 2025-11-20

- ⏳ Task created
- 📝 Waiting for FJ-002 completion

## Blockers

- ⏳ Waiting for FJ-001 and FJ-002

## Related Tasks

- FJ-002: Base layouts (dependency)
- FJ-003: Homepage (will include this navigation)
- FJ-004: Article template (will include this navigation)
