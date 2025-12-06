# FloatJet Design Guidelines

## 1. Core Philosophy

**"Float" (Freedom) & "Jet" (Speed)**

* **Mobile-First:** Every design decision starts with the mobile viewport (375px). If it doesn't work on mobile, it
  doesn't work.
* **Premium & Trustworthy:** The aesthetic should feel established and high-quality, not like a generic affiliate spam
  site.
* **Clean & Efficient:** White space is a feature. Content should be easy to scan.
* **Modern Tech:** Use glassmorphism, subtle gradients, and smooth micro-interactions to signal a modern tech stack.

## 2. Color Palette

### Primary Colors

* **Ocean Deep:** `#0F4C5C` (Brand anchor, headers, primary text)
* **Jet Stream:** `#38A3A5` (Primary buttons, active states, links)

### Secondary & Accents

* **Sky Light:** `#80CED7` (Secondary buttons, highlights)
* **Sand:** `#E0FBFC` (Backgrounds, subtle sections)
* **Alert/Action:** `#EE6C4D` (Urgent CTAs, sale badges)

### Neutrals

* **White:** `#FFFFFF` (Card backgrounds, main content)
* **Off-White:** `#F8FAFC` (Page backgrounds)
* **Slate:** `#1E293B` (Body text)
* **Gray:** `#64748B` (Secondary text, metadata)

## 3. Typography

We use a "Modern Geometric" pairing that balances high-tech aesthetics with superior readability.

### Headings: **Outfit**

* **Why:** A beautiful geometric sans-serif inspired by the "Outfit" brand typeface. It features unique character
  shapes (like the open 'R' and friendly 'a') that give FloatJet a distinct, premium brand voice. It feels "
  aerodynamic" — perfect for the "Jet" theme.
* **Source:** [Google Fonts - Outfit](https://fonts.google.com/specimen/Outfit)
* **Weights:**
    * **Bold (700):** For primary headlines (H1, H2).
    * **SemiBold (600):** For card titles and section headers (H3).

### Body: **Inter**

* **Why:** The gold standard for UI legibility. Inter is designed specifically for computer screens, featuring a tall
  x-height to aid readability of mixed-case and lower-case text. It is invisible to the reader, allowing the content to
  shine.
* **Source:** [Google Fonts - Inter](https://fonts.google.com/specimen/Inter)
* **Weights:**
    * **Regular (400):** Main body text.
    * **Medium (500):** UI labels, buttons, and emphasized text.

### Code: **JetBrains Mono**

* **Why:** A typeface for developers. Its increased height and specific ligatures make code snippets easier to read and
  scan. Fits the "Jet" theme perfectly.
* **Source:** [Google Fonts - JetBrains Mono](https://fonts.google.com/specimen/JetBrains+Mono)

### Type Scale (Mobile / Desktop)

* **Display (Hero):** 40px / 64px (Tight leading: 1.1)
* **H1:** 32px / 48px
* **H2:** 24px / 36px
* **H3:** 20px / 24px
* **Body:** 16px / 18px (Relaxed leading: 1.6 for readability)
* **Small:** 14px / 14px

## 4. UI Components

### Glassmorphism

Used for overlay cards, sticky headers, and floating elements.

* **Background:** `rgba(255, 255, 255, 0.7)`
* **Blur:** `backdrop-filter: blur(12px)`
* **Border:** `1px solid rgba(255, 255, 255, 0.3)`

### Buttons

* **Primary:** Pill-shaped, gradient background (Ocean Deep to Jet Stream), white text, subtle shadow.
* **Secondary:** Transparent background, 2px colored border, colored text.
* **Ghost:** Text only, hover effect.

### Cards

* **Style:** White background, `rounded-2xl` (16px), subtle shadow (`shadow-sm` to `shadow-md` on hover).
* **Interaction:** Slight lift (`translate-y-1`) on hover.

## 5. Layout & Spacing

### Grid System

* **Mobile:** 4 columns, 16px margin, 16px gutter.
* **Tablet:** 8 columns, 32px margin, 24px gutter.
* **Desktop:** 12 columns, max-width 1280px, 24px gutter.

### Spacing (Tailwind Scale)

* **Section Padding:** `py-12` (mobile) / `py-20` (desktop)
* **Component Gap:** `gap-4` (mobile) / `gap-8` (desktop)

## 6. Accessibility

We strictly adhere to **WCAG 2.2 Level AA** standards.

* **Guidelines:** See full [Accessibility Guidelines](./accessibility-guidelines.md).
* **Contrast:** All text must meet WCAG AA standards (4.5:1 ratio).
* **Touch Targets:** All interactive elements must be at least 48x48px (exceeding the WCAG 24px minimum).
* **Focus States:** Visible focus rings for keyboard navigation.
* **Alt Text:** Mandatory for all images.
