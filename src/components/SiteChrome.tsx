"use client";

import StickyCTA from "@/components/StickyCTA";
import CookieConsent from "@/components/CookieConsent";
import ConsentGate from "@/components/ConsentGate";
import ScrollProgress from "@/components/ScrollProgress";
import CommandMenu from "@/components/CommandMenu";

/** Site chrome: sticky CTA, cookie banner, command menu, scroll progress. */
export default function SiteChrome() {
  return (
    <>
      <ScrollProgress />
      <StickyCTA />
      <CookieConsent />
      <CommandMenu />
      <ConsentGate />
    </>
  );
}
