# Complete Cleaners — Website

Marketing and lead-generation website for **Complete Cleaners** (legal name:
Complete Cleaners NWA LLC), a commercial cleaning company serving
Fayetteville, Arkansas and nearby Northwest Arkansas communities.

Built with Next.js (App Router), TypeScript, and Tailwind CSS. Designed to
deploy on Vercel at **completecleanersnwa.com**.

## Project overview

| Page | Route |
| --- | --- |
| Home | `/` |
| Services | `/services` |
| About | `/about` |
| Service Area | `/service-area` |
| Request a Quote | `/quote` |
| Privacy Policy | `/privacy` |
| Terms of Use | `/terms` |
| Custom 404 | any unknown route |

Also generated automatically: `sitemap.xml`, `robots.txt`, `manifest.webmanifest`,
favicon (`/icon.svg`), and a social-share Open Graph image.

Key directories:

```
src/
  app/            Pages, server action, SEO files (sitemap, robots, manifest)
  components/     Reusable UI (Header, Footer, QuoteForm, cards, form fields…)
  config/         business.ts — the single file to edit for business details
  lib/            Form validation helpers, email delivery, rate limiting
public/           Logo assets
```

## Local setup

Requirements: Node.js 20.9+ (Node 24 LTS recommended).

```bash
npm install
npm run dev
```

Open http://localhost:3000.

Production build and preview:

```bash
npm run build
npm run start
```

Lint:

```bash
npm run lint
```

## Configuration (`src/config/business.ts`)

Everything business-specific lives in one file: **`src/config/business.ts`**.
Edit it to change:

- Public name, legal name, domain, phone, email
- Primary city and nearby service areas
- Business-hours statement
- Social links (blank = hidden)
- Logo path
- Feature flags (see below)
- Testimonials list (hidden unless enabled)
- Form-recipient email

### Feature flags — enabling claims later

The site **never displays** "insured", "bonded", or "licensed" claims, and
never shows a testimonials section, unless you turn them on. When a claim
becomes true (for example, an insurance policy is active):

1. Open `src/config/business.ts`.
2. Set the matching flag to `true` — e.g. `insured: true`.
3. Redeploy. Badges appear automatically in the homepage hero.

For testimonials: add real customer quotes to the `testimonials` array **and**
set `showTestimonials: true`. Never add invented quotes.

### Changing service areas

In `src/config/business.ts`, edit `primaryCity` and the `nearbyAreas` array.
The Service Area page, footer, and structured data update automatically. The
service-area illustration (`src/components/ServiceAreaMap.tsx`) has the town
labels drawn in — update the `<text>` labels there if the list changes.

## Environment variables

Copy `.env.example` to `.env.local` (never commit `.env.local`). All
variables are optional — the site runs without any of them.

| Variable | Purpose |
| --- | --- |
| `EMAIL_PROVIDER` | `resend` (default), `postmark`, or `sendgrid` |
| `RESEND_API_KEY` | API key when using Resend |
| `POSTMARK_SERVER_TOKEN` | API key when using Postmark |
| `SENDGRID_API_KEY` | API key when using SendGrid |
| `EMAIL_FROM` | Verified From address, e.g. `Complete Cleaners <hello@completecleanersnwa.com>` |
| `FORM_RECIPIENT_EMAIL` | Overrides where lead notifications go (default: hello@completecleanersnwa.com) |
| `NEXT_PUBLIC_GA_ID` | Google Analytics 4 ID — enables GA |
| `NEXT_PUBLIC_PLAUSIBLE_DOMAIN` | Plausible domain — enables Plausible |

## Contact-form email setup

The quote form works in three modes:

1. **No provider configured (default):** submissions are validated and logged
   to the server console. The visitor still sees the success screen. Good for
   development.
2. **Resend (recommended):**
   - Create an account at resend.com and add/verify the domain
     `completecleanersnwa.com` (add the DNS records Resend shows you).
   - Create an API key and set `RESEND_API_KEY`.
   - Set `EMAIL_FROM="Complete Cleaners <hello@completecleanersnwa.com>"`.
3. **Postmark or SendGrid:** set `EMAIL_PROVIDER` to `postmark` or `sendgrid`
   plus the matching API key and a verified `EMAIL_FROM`.

When a provider is active, each submission sends:

- A notification (plain-text + HTML) to `FORM_RECIPIENT_EMAIL` with all form
  fields, with Reply-To set to the prospect.
- A confirmation email to the prospect describing next steps.

Spam protection: a hidden honeypot field, server-side validation of every
field, and best-effort per-IP rate limiting (5 submissions / 10 minutes).

## Logo

The real mascot logo is in place at `public/complete-cleaners-logo.png`
(transparent background, trimmed to a 1517×1517 square from the original
2048×2048 export). Every logo placement (header, hero, footer, structured
data) reads from `logoPath` in `src/config/business.ts`, so swapping the
file or pointing at a new one is a one-line change. A generic placeholder
remains at `public/logo-placeholder.svg` if you ever need it.

`src/app/icon.svg` (browser-tab icon) is a simplified mark; replace it with
a favicon derived from the mascot if you want them to match exactly.

## Analytics

Analytics are **off by default**. Options:

- **Google Analytics:** set `NEXT_PUBLIC_GA_ID` (or `analytics.googleAnalyticsId`
  in `business.ts`).
- **Plausible:** set `NEXT_PUBLIC_PLAUSIBLE_DOMAIN`.
- **Vercel Analytics:** `npm install @vercel/analytics`, then render
  `<Analytics />` from `@vercel/analytics/react` in `src/app/layout.tsx` and
  enable Analytics for the project in the Vercel dashboard.

If you enable analytics, review the Privacy Policy wording (it already covers
basic analytics) before launch.

## Deploying to Vercel

1. Push this folder to a Git repository (GitHub is simplest):
   ```bash
   git init
   git add .
   git commit -m "Initial site"
   ```
   Then create a GitHub repo and push.
2. In Vercel: **Add New → Project**, import the repository. Vercel detects
   Next.js automatically — no build settings needed.
3. Add environment variables (at minimum `RESEND_API_KEY` and `EMAIL_FROM`
   when ready for live email) under **Settings → Environment Variables**.
4. Deploy.

### Connecting completecleanersnwa.com

1. In the Vercel project: **Settings → Domains → Add**, enter
   `completecleanersnwa.com` (and `www.completecleanersnwa.com`; set the apex
   as primary so `www` redirects).
2. At your domain registrar, add the DNS records Vercel shows — typically an
   `A` record for the apex pointing to Vercel's IP and a `CNAME` for `www`
   pointing to `cname.vercel-dns.com`.
3. Wait for DNS to propagate; Vercel provisions HTTPS automatically.

## Updating legal documents

The Privacy Policy (`src/app/privacy/page.tsx`) and Terms of Use
(`src/app/terms/page.tsx`) are plain React pages — edit the text directly.
Both contain a visible note that they should be professionally reviewed
before launch; remove those notes once review is complete, and update the
"Last updated" date passed to `LegalPageLayout`.

## Launch checklist

- [ ] Replace the placeholder logo (see "Logo replacement")
- [ ] Set up email delivery (Resend key + verified domain) and send a test
      submission end-to-end
- [ ] Review Privacy Policy and Terms with counsel; remove the review notes
- [ ] Confirm phone (479-343-8876) and email links are correct
- [ ] Review `src/config/business.ts` values one final time
- [ ] Decide on analytics and configure if desired
- [ ] Connect the domain and confirm HTTPS
- [ ] Submit the sitemap (`https://completecleanersnwa.com/sitemap.xml`) in
      Google Search Console
- [ ] Create a Google Business Profile as a service-area business (hide the
      home address there too)

## Intentional content rules

This site was built to specific content constraints — keep them when editing:

- No residential/home address anywhere (pages, metadata, structured data).
  The company is presented as a service-area business.
- No claims of being licensed, bonded, insured, certified, or established for
  N years unless the matching flag in `business.ts` is enabled.
- No invented reviews, testimonials, customer counts, team size, awards, or
  partnerships.
- No exact service prices, no "24-hour service", no "#1 in Arkansas"-style
  superlatives, and no "100% satisfaction guaranteed" phrasing.
