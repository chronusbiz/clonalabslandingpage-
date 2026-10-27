import { Header } from "./Header";
import { Hero } from "./Hero";
import { ProofBar } from "./ProofBar";
import { TrustStrip } from "./TrustStrip";
import { Opportunity } from "./Opportunity";
import { WhoDoesWhat } from "./WhoDoesWhat";
import { Features } from "./Features";
import { BrandedPortal } from "./BrandedPortal";
import { Pricing } from "./Pricing";
import { Timeline } from "./Timeline";
import { Faq } from "./Faq";
import { LeadForm } from "./LeadForm";
import { Footer } from "./Footer";
import type { TrackingParams } from "@/lib/utm";

export function LandingPage({
  variant,
  bookingUrl,
  showPricing,
  tracking,
}: {
  variant: "default" | "afterHours";
  bookingUrl: string;
  showPricing: boolean;
  tracking: TrackingParams;
}) {
  return (
    <>
      <Header bookingUrl={bookingUrl} showPricing={showPricing} />
      <main id="main">
        <Hero variant={variant} bookingUrl={bookingUrl} showPricing={showPricing} />
        <ProofBar />
        <TrustStrip />
        <Opportunity />
        <WhoDoesWhat />
        <Features />
        <BrandedPortal />
        <Pricing showPricing={showPricing} bookingUrl={bookingUrl} />
        <Timeline />
        <Faq />
        <LeadForm tracking={tracking} bookingUrl={bookingUrl} />
      </main>
      <Footer />
    </>
  );
}
