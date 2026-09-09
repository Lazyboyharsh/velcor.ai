# Velcor.ai — fixes applied

## How to run / deploy
- Local dev (unchanged): `npm install` then `npm run dev`
- Production build (now includes prerender): `npm run build`
  - Runs: client build → SSR build → `scripts/prerender.mjs` (writes static HTML per route + sitemap.xml)
- SPA-only build (no prerender, fallback): `npm run build:spa`
- Deploy: Vercel, output dir `dist` (unchanged). Set **velcor.ai** (non-www) as the primary domain; `vercel.json` now 301-redirects www → apex.

## 1. Indexing / SEO
- **Wired the `Seo` component into every page** (it existed but was never imported, so every route served the homepage title + canonical — Google saw all inner pages as duplicates of `/`). Each page now has a unique title, description, canonical, robots, Open Graph/Twitter, and per-page JSON-LD.
- **Build-time prerendering (SSG).** The site is still a React SPA, but every known route is now rendered to static HTML at build time (`src/entry-server.jsx` + `scripts/prerender.mjs`). Crawlers and AI bots that don't run JavaScript now receive full page content + metadata. This fixes the "no extractable text" problem.
- **Structured data:** site-wide Organization + WebSite `@graph` in `index.html`; per-page WebPage + BreadcrumbList via `Seo`; Service schema on the homepage; Article schema on every blog post.
- **sitemap.xml** is auto-generated from the real route list on every build (was missing all blog posts and case studies).
- **Canonical host** consolidated to `https://velcor.ai` + www→apex 301 redirect (`vercel.json`).

## 2. Bugs fixed
- **Broken case-study links:** homepage cards pointed at slugs that didn't exist (`saas-analytics`, `dev-agency`, `b2b-services`) → every click hit "not found". Aligned to real slugs.
- **Footer ChatGPT icon** had a broken path (`" \chatgpt-icon.webp"`) → `/chatgpt-icon.webp`.
- **HowWeHelp.jsx** had a JSX parse error (`<a>` closed with `</button>`). Fixed.
- Hero "Request call" and Contact "Strategy Call" now use client-side navigation (no full page reload).

## 3. Mobile / responsiveness
- Global `overflow-x: clip` guard + `max-width:100%` on media in `index.css` to stop horizontal scroll on small screens (uses `clip`, not `hidden`, so it doesn't break the sticky sidebar on the booking page).
- Services video clip-path moved from a JS `window.innerWidth` check to a CSS media query (same look on desktop/mobile, and removes a hydration mismatch).

## 4. Design / theme
- Unchanged. All edits preserve the existing layout, colors, and components.

## Notes / recommendations
- **Security:** your `.env` was inside the shared zip. It is NOT included in this package. Rotate the Gmail app password (`EMAIL_PASS`) since it was shared.
- `og:image` still points at `logo.png`; consider a dedicated 1200×630 share image.
- New blog/case-study slugs will render client-side until the next build; re-run `npm run build` to prerender them.
