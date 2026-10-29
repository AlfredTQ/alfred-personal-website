# Alfred Tackie-Quaye — Next.js portfolio

A responsive personal portfolio built with Next.js App Router, React, TypeScript, and CSS custom properties. It deliberately uses no UI component library.

`app/` is now the canonical application. The original `index.html`, `styles.css`, `script.js`, and `focus.css` remain as a legacy static reference and are not used by Next.js.

## Assumptions and design direction

- **Purpose:** introduce Alfred’s design, digital strategy, and data-storytelling practice, then move prospective clients, employers, or collaborators toward a conversation.
- **Tone:** editorial, intelligent, and approachable—not overly corporate or decorative.
- **Visual identity:** deep navy (`#14233A`) provides trust and depth; electric blue (`#215DFF`) creates a clear action signal; lime (`#D8FF5D`) is a sparing creative accent; warm paper (`#FBFAF7`) keeps the work approachable.
- **Type:** an editorial system-serif stack gives key statements a creative voice; the native UI sans-serif stack keeps interface content compact and readable. This avoids remote font requests, so builds work reliably in restricted production environments. To self-host brand fonts later, add licensed files under `public/fonts` and use `next/font/local`.
- **Layout:** a 1180px reading frame, generous vertical rhythm, strong type scale, modular cards, and mobile-first breakpoints create a polished yet practical system.
- **Imagery:** the hero uses original CSS composition rather than an invented portrait. Work tiles are explicitly labelled placeholders until approved case studies are supplied.

## Site structure and journey

The current build is a complete home page. Its narrative moves from an immediate value proposition to point of view, capabilities, future work, credentials, and a low-friction contact action.

Future routes can use the same structure:

- `/about` — background, process, and principles.
- `/work` — approved case studies, each using the work-card and section patterns.
- `/services` — detailed engagement offerings and outcomes.
- `/contact` — a dedicated enquiry page when a true form backend is selected.

## Setup

Use Node.js 20.9 or later.

```bash
npm install
npm run dev
```

Then visit `http://localhost:3000`.

Before deploying, set `NEXT_PUBLIC_SITE_URL` to the final canonical URL (for example, `https://your-domain.com`). It is used for canonical metadata, `robots.txt`, and `sitemap.xml`; it contains no secret.

## Production and tests

```bash
npm run build
npm start
npm test
```

Vitest and Testing Library cover home-page rendering, its primary conversion route, labelled work placeholders, and missing-image fallback behavior. Add interaction tests for the mobile menu and contact form if those flows become more complex.

## Replace placeholder content

- Edit services and credentials in `lib/content.ts`.
- Replace work tile placeholders in `app/page.tsx` with approved assets from `public/`, then supply each image’s accurate `alt` text.
- The interim work section is intentionally framed as a portfolio in preparation. Replace it with case studies only when real project facts and approved visuals are available.
- Update contact and social URLs in `app/page.tsx` and `lib/content.ts`.
- Add credential verification URLs only after official links are provided.

The contact form deliberately opens the visitor’s email application; it does not send data to a server. Before changing it to a direct submission form, select a trusted provider and add server-side validation, rate limiting/spam protection, a privacy notice, and delivery testing.

## Extending the system

Use the tokens defined at the top of `app/globals.css` for colors, typography, spacing, borders, and interaction states. Reuse `SiteHeader`, `Logo`, `RevealImage`, `ContactPanel`, `.section`, `.section-label`, `.button`, and the card patterns instead of creating parallel styles. Route-level `error.tsx` and `not-found.tsx` provide graceful errors and a 404 experience; add nested equivalents for independently risky routes.
