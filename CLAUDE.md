# CLAUDE.md

Notes for Claude Code (and humans) working in this repo.

## Project

**Beeanie English Institute** — marketing site for an English school targeting
Spanish speakers (Venezuela-based). Single page today (hero, services, method,
testimonials, contact). Will grow over time.

## Stack

- Next.js 16 (App Router) + React 19 + TypeScript
- Tailwind v4 (CSS-first config via `@theme` in `app/globals.css`)
- Resend for the contact form, Cloudflare Turnstile for spam protection
- Deployed on Vercel; push to `main` ships production

## Brand

Brand tokens live in `app/globals.css` under `@theme`. Color palette and usage
rules are documented in [docs/brand.md](docs/brand.md). **Never hardcode hex
values in components** — always use the Tailwind utilities backed by the
`@theme` tokens (e.g. `bg-purple`, `text-orange`, `shadow-card`).

Canonical brand strings (Instagram, WhatsApp, email) live in `lib/brand.ts`.
Import from there rather than duplicating.

## Forms / privacy

- The contact form's server action is in `app/contact/actions.ts`.
- **Never log form payloads** (name/email/message). The action only returns
  `{ ok, error?, fieldErrors? }` to the client.
- The honeypot field is named `website`. If it's non-empty we silently accept
  the submission (return `ok: true`) but skip sending mail.
- Cloudflare Turnstile is required server-side. Submissions without a verified
  token are rejected with a generic error.

## Content

Page copy is canonical in English. **Do not rewrite copy unless explicitly
asked.** New copy must be reviewed before merge.

## Code style

- Server components by default. Mark `"use client"` only when interactivity
  requires it (forms, effects).
- Keep components small and section-scoped under `components/`.
- Brand strings: import from `@/lib/brand`, don't duplicate.
- Imports use the `@/*` alias — don't write long relative paths.

## Don't

- Don't add dependencies without checking bundle impact.
- Don't introduce a CMS, blog, or auth without an issue first.
- Don't commit `.env.local` (or any `.env*.local`).
- Don't switch CSS frameworks. Tailwind v4 is the system.
- Don't hardcode brand colors as hex; use the theme tokens.

## Commits

Conventional Commits: `feat:`, `fix:`, `chore:`, `docs:`, `refactor:`.
