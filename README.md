# Next.js Starter

A minimal, clean Next.js starter that preserves a polished UI foundation without authentication or a database.

Features
- Next.js (App Router) + TypeScript (strict)
- Tailwind CSS v4 with modern design tokens
- shadcn/ui components (Button, Card, Input, and more)
- Dark mode via next-themes
- Toasts with sonner
- Navigation progress bar with bprogress
- SEO metadata helpers and sensible security headers

Pages included
- `/` — Welcome page with quick links and stack overview
- `/about` — Example static page showing metadata usage
- `/components` — Simple gallery using shadcn/ui components
- `/api/health` — Minimal API responding with `{ status: "ok" }`

Getting started
This starter has zero required environment variables. Clone the repo and start building.

How to add Auth and DB later
- Auth: better-auth — https://better-auth.com/docs
- UI: better-auth-ui — https://better-auth-ui.com
- ORM/DB: Drizzle ORM — https://orm.drizzle.team/docs

Notes
- The project intentionally excludes auth and database code to give you a clean base. Add your preferred solutions when you need them.
- Type checking, linting, and formatting are configured via TypeScript and Biome.
- Sitemap generation is included via next-sitemap.

License
MIT
