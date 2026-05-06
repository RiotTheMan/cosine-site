# cosine-site

Source for [cosinehq.co.za](https://cosinehq.co.za) — CoSine, a one-person software-consulting practice.

## Stack

- Astro 6 + Tailwind v4 (`@tailwindcss/vite` plugin)
- Content collections (loader API) — markdown for case studies + services
- Cloudflare Pages (Direct Upload mode)

## Develop

```bash
npm install
npm run dev          # → http://localhost:4321
```

## Build

```bash
npm run build        # → dist/
```

## Deploy

```bash
CLOUDFLARE_API_TOKEN=<token> CLOUDFLARE_ACCOUNT_ID=<account-id> \
  npx wrangler pages deploy dist --project-name=cosine-site --branch=main --commit-dirty=true
```

Token scope: **Account → Cloudflare Pages → Edit** (only).

## Layout

```
src/
  pages/                  routes (index, work, consulting, about, book, 404)
  layouts/Base.astro      head, JSON-LD, OG meta
  components/             Nav, Footer, geometry SVGs
  content/                case-studies, services (markdown)
  styles/global.css       tokens (paper, ink, ocean, green) + utilities
public/
  logo/                   brand marks
  og/                     Open Graph cards (per page)
  patterns/               background patterns
  hero/                   homepage hero composition
  _headers                Cloudflare Pages headers (HSTS, CSP, etc.)
```

## License

All rights reserved. © Emile Harel.
