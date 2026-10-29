# Clonalabs landing (clonalabs.ca)

White-label AI inquiry handling for agencies. Clonalabs runs [Clonvo](https://clonvo.chat); agencies sell it under their own brand.

Built with Next.js (App Router), Tailwind CSS v4, framer-motion and Manrope.

## Develop

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Where things live

- `src/lib/constants.ts` — site config, nav, product pillars, use cases, onboarding steps, pricing plans, FAQ, footer links
- `src/components/` — homepage sections (Hero, Services, About, Industries, Approach, Pricing, Partners), Navbar, Footer, StickyCTA
- `src/app/` — `/`, `/about`, `/faq`, `/contact`, `/privacy`, `/terms`, `/cookie-policy`
- `src/app/api/contact/route.ts` — contact form email delivery (see `env.example`)
- `src/app/globals.css` — theme tokens (Canada red + white)
