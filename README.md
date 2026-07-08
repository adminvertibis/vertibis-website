# Vertibis Website

Next.js marketing website for Vertibis Technologies Pvt Ltd.

## Current Positioning

Vertibis is building an explainable MSME Business Health Intelligence ecosystem for:

- CAs, CSs and tax consultants
- MSMEs
- Banks, NBFCs and fintechs
- Enterprises and vendor-risk teams
- Insurance companies
- Strategic platform partners

Public copy must remain careful:

- Vertibis is a Registered ASP with TaxPro GSTP.
- GST API integration is currently in testing / pilot stage.
- Do not claim live production GST data pull unless enabled and verified.
- Do not publish fake traction numbers or testimonials.
- Outputs are indicative and require professional review.

## Routes

- `/`
- `/for-cas`
- `/for-msmes`
- `/for-lenders`
- `/for-enterprises`
- `/for-insurance`
- `/pricing`
- `/resources`
- `/resources/[slug]`
- `/about`
- `/contact`
- `/login`
- `/admin`
- `/privacy`
- `/terms`

Legacy routes:

- `/features` redirects to `/#modules`
- `/demo` redirects to `/contact?type=ca-partner`
- `/blog` redirects to `/resources`
- `/blog/[slug]` redirects to `/resources/[slug]`

## Admin CMS

Admin route: `/admin`

Set these environment variables before production:

```bash
ADMIN_EMAIL=admin@vertibis.com
ADMIN_PASSWORD=replace-with-a-long-random-password
ADMIN_SESSION_SECRET=replace-with-a-long-random-secret
```

Editable sections:

- Website settings
- Navigation
- Stats
- Homepage
- Audience pages
- Product modules
- Pricing plans
- Report pricing
- Lead forms
- Resources
- FAQs
- Testimonials

Lead submissions are stored through `/api/leads` and visible/exportable at `/admin`.

## Storage Note

This repository currently has no durable database configured. The CMS and lead APIs use a file-backed development store under `data/`.

That works for local development and server environments with writable persistent disk. On Vercel, file writes are not durable. Before relying on admin edits or lead storage in production, connect a persistent backend such as Postgres, Supabase, Neon, Vercel Postgres, or another approved data store and update `app/lib/cms-store.ts`.

## Development

```bash
npm install
npm run dev
```

## Verification

```bash
npm run lint
npm run build
```

## Backup

A pre-redesign source backup was created at:

`backups/vertibis-old-website-20260708-202531.zip`
