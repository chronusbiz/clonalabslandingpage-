import type { Metadata, Viewport } from "next";
import { fontClassName } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://clonalabs.ca";

const DESCRIPTION =
  "ClonaLabs helps Canadian businesses turn AI and software ideas into production systems with clear scope, senior ownership and handover ready delivery.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "ClonaLabs | AI and Software Engineering Partner Canada",
    template: "%s | ClonaLabs",
  },
  description: DESCRIPTION,
  keywords: [
    "AI engineering partner Canada",
    "custom software development Canada",
    "fractional CTO Canada",
    "AI model evaluation",
    "Mississauga software company",
    "AI solutions for Canadian businesses",
    "ClonaLabs",
    "Clonvo",
    "ProTender",
  ],
  authors: [{ name: "ClonaLabs", url: SITE_URL }],
  creator: "ClonaLabs",
  publisher: "ClonaLabs",
  applicationName: "ClonaLabs",
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    url: "/",
    siteName: "ClonaLabs",
    title: "ClonaLabs | AI and Software Engineering Partner Canada",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ClonaLabs — Technology partner for Canadian businesses.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ClonaLabs | AI and Software Engineering Partner Canada",
    description: DESCRIPTION,
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "ClonaLabs — Technology partner for Canadian businesses.",
      },
    ],
  },
  category: "Technology",
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon.png", type: "image/png", sizes: "512x512" },
    ],
    apple: [{ url: "/apple-icon.png", type: "image/png", sizes: "180x180" }],
    shortcut: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C8102E" },
    { media: "(prefers-color-scheme: dark)", color: "#000000" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      data-scroll-behavior="smooth"
      className={`${fontClassName} h-full`}
    >
      <head>
        <link rel="preload" href="/fonts/Optima-Regular.woff2" as="font" type="font/woff2" crossOrigin="" />
        <link rel="preload" href="/fonts/Optima-Bold.woff2" as="font" type="font/woff2" crossOrigin="" />
        <StructuredData />
      </head>
      <body className="min-h-full antialiased font-optima" suppressHydrationWarning>
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-[100] focus:px-4 focus:py-2 focus:rounded-md focus:bg-accent focus:text-white focus:text-sm focus:font-semibold"
        >
          Skip to main content
        </a>
        {children}
        <SiteChrome />
      </body>
    </html>
  );
}
