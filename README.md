# Beeanie English Institute — Web

Marketing site for [Beeanie English Institute](https://www.instagram.com/beeanienglish?igsh=MTdmNG5rZXg0d295eg==).

## Stack

- [Next.js 16](https://nextjs.org/) (App Router) + React 19 + TypeScript
- [Tailwind v4](https://tailwindcss.com/) (CSS-first via `@theme`)
- [Resend](https://resend.com/) for the contact form
- [Cloudflare Turnstile](https://www.cloudflare.com/products/turnstile/) for spam protection
- Deployed on [Vercel](https://vercel.com/)

## Local development

```bash
npm install
cp .env.example .env.local   # fill in keys
npm run dev                  # http://localhost:3000
```

## Scripts

- `npm run dev` — start the dev server
- `npm run build` — production build
- `npm run start` — serve the production build
- `npm run lint` — ESLint
- `npm run typecheck` — TypeScript type-check (no emit)

## Project rules

See [`CLAUDE.md`](./CLAUDE.md) and [`docs/brand.md`](./docs/brand.md).
