import type { Metadata } from "next";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { Analytics } from "@/components/Analytics";
import { GradientMouse } from "@/components/GradientMouse";
import { ThemeProvider, themeInitScript } from "@/lib/theme";
import { getPublicEnv } from "@/lib/env";
import { site } from "@/content/site";
import "./globals.css";

const display = Outfit({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700"],
});

const sans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const env = getPublicEnv();

export const metadata: Metadata = {
  metadataBase: new URL(env.siteUrl),
  title: site.seo.title,
  description: site.seo.description,
  alternates: { canonical: "/" },
  robots: env.noindex ? { index: false, follow: false } : { index: true, follow: true },
  openGraph: {
    title: site.seo.title,
    description: site.seo.description,
    url: env.siteUrl,
    siteName: site.wordmark,
    type: "website",
    locale: "en_CA",
  },
  twitter: {
    card: "summary_large_image",
    title: site.seo.title,
    description: site.seo.description,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="font-sans antialiased">
        <ThemeProvider>
          <a className="skip-link" href="#main">
            Skip to content
          </a>
          <GradientMouse />
          <div className="relative z-[2]">{children}</div>
          <Analytics id={env.analyticsId} />
        </ThemeProvider>
      </body>
    </html>
  );
}
