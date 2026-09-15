# Imrane Mouzaria Portfolio

A modern personal portfolio built with Next.js, React, TypeScript, Tailwind CSS, Framer Motion, Lucide React, and React Icons.

## Run Locally

```bash
npm install
npm run dev
```

Open `http://localhost:3000`.

## Validate

```bash
npm run lint
npm run type-check
npm run build
```

## Update Personal Links

Personal contact and CV links are stored in `lib/placeholders.ts`.
Project repository and demo links are stored in `data/projects.ts`.

## Deploy On Vercel

1. Push this project to a GitHub repository.
2. Import the repository in Vercel.
3. Keep the default Next.js framework settings.
4. Deploy.
5. Replace `https://YOUR_PORTFOLIO_DOMAIN` in `app/layout.tsx`, `app/robots.ts`, and `app/sitemap.ts` with the production domain.
