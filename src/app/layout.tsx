import type { Metadata, Viewport } from "next";
import { manrope } from "@/lib/fonts";
import StructuredData from "@/components/StructuredData";
import SiteChrome from "@/components/SiteChrome";
import "./globals.css";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || "https://clonalabs.ca";

const DESCRIPTION =
  "Clonalabs runs Clonvo, the AI inbox for WhatsApp, Instagram and Messenger. Agencies sell it under their own brand — cited AI replies, human handoff, no per-seat fees, no revenue share.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Clonalabs | White-label AI inquiry handling for agencies",
    template: "%s | Clonalabs",
  },
  description: DESCRIPTION,
  keywords: [
    "Clonalabs",
    "Clonvo",
    "white-label AI chatbot",
    "white-label AI for agencies",
    "WhatsApp AI inbox",
    "Instagram DM automation",
    "Messenger chatbot",
    "AI inquiry handling",
    "unified inbox",
    "AI customer support",
    "resell AI chatbot",
  ],
  authors: [{ name: "Clonalabs", url: SITE_URL }],
  creator: "Clonalabs",
  publisher: "Clonalabs",
  applicationName: "Clonalabs",
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
    siteName: "Clonalabs",
    title: "Clonalabs | Sell AI inquiry handling under your own brand",
    description:
      "White-label Clonvo for agencies: one inbox for WhatsApp, Instagram and Messenger, cited AI replies, human handoff. No per-seat fees, no revenue share.",
    // Explicit OG image so previewers (Slack, WhatsApp, LinkedIn,
    // iMessage, Twitter, Facebook) reliably surface the social card.
    // The path resolves against metadataBase, so it becomes an
    // absolute URL like https://<host>/opengraph-image.
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Clonalabs — White-label AI inquiry handling for agencies.",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Clonalabs | Sell AI inquiry handling under your own brand",
    description:
      "White-label Clonvo for agencies: one inbox for WhatsApp, Instagram and Messenger, cited AI replies, human handoff.",
    images: [
      {
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "Clonalabs — White-label AI inquiry handling for agencies.",
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
      className={`${manrope.variable} h-full`}
    >
      <head>
        <StructuredData />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
      </head>
      <body className="min-h-full antialiased" suppressHydrationWarning>
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
