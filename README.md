# Clonalabs �" agency white-label landing page

Single-page B2B landing for **clonalabs.ca**. One goal: book a 15-minute walkthrough of the Clonvo white-label platform.

## Stack

Next.js (App Router) · TypeScript · Tailwind CSS · no UI kit.

## Setup

```bash
npm install
copy .env.example .env.local   # Windows
# cp .env.example .env.local   # macOS/Linux
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

- Default headline: `/` or `/?s=1`
- After-hours headline: `/?s=2`
- UTM params (`utm_source`, `utm_medium`, `utm_campaign`, `utm_term`, `utm_content`) persist into the lead-form payload.

```bash
npm run build
npm start
```

## Environment

| Variable | Purpose |
| --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Canonical / sitemap / OG base URL |
| `NEXT_PUBLIC_BOOKING_URL` | Primary CTA target (default Cal.com) |
| `NEXT_PUBLIC_SHOW_PRICING` | `true` shows packages; `false` shows “Request pricing” |
| `NEXT_PUBLIC_NOINDEX` | `true` blocks indexing |
| `NEXT_PUBLIC_ANALYTICS_ID` | Plausible `data-domain`. Empty = no third-party script |
| `LEAD_WEBHOOK_URL` | Server POST destination for leads. Empty = log to the server console |

## Edit copy without touching components

All prices, FAQ, features, legal identity and mock content live in [`content/site.ts`](content/site.ts).

Replace every `TODO:` before launch:

- Legal entity name and postal address
- AI-reply definition and allowance-limit behaviour (needs cost validation)
- Cancellation, refunds and data-on-exit
- Privacy / terms / cookie pages

## Deploy

Any Node host that runs Next.js 15 (Vercel, Cloudflare, a VPS). Set the env vars in the host dashboard. Point **clonalabs.ca** at the deployment. Keep **clonvo.chat** as the product domain.

## File tree

```
content/site.ts          ← copy, prices, FAQ, legal
app/page.tsx             ← landing; reads ?s= and utm_*
app/api/lead/route.ts    ← form POST, honeypot, rate limit, webhook
app/opengraph-image.tsx  ← generated OG image
components/              ← one component per section
lib/env.ts               ← env parsing
```

## Acceptance checklist

- [ ] Pricing matches Launch $149 / Growth $299 / Scale $499, activation $299, first payments $448 / $598 / $798
- [ ] `/?s=2` swaps the H1 only
- [ ] Form posts JSON to `LEAD_WEBHOOK_URL` (or logs if unset)
- [ ] One primary CTA style: “Book a 15-minute walkthrough”
- [ ] No horizontal scroll at 320px
- [ ] Footer shows `content/site.ts` identity values
- [ ] No testimonials, logos, earnings guarantees, “unlimited”, or unshipped features
