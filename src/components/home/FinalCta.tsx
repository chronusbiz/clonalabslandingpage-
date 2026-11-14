import Link from "next/link";
import { linkTargetProps, siteConfig } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="bg-ink" aria-labelledby="final-cta-heading">
      <div className="container-site section">
        <div className="max-w-2xl">
          <h2 id="final-cta-heading" className="text-h1 text-text-on-ink mb-4">
            Tell us what you are building.
          </h2>
          <p className="text-body text-text-on-ink-muted mb-8">
            Book a technical call. We will listen to your goals and systems, then
            suggest the right next step—engagement, product or a clear no.
          </p>
          <Link
            href={siteConfig.bookingUrl}
            {...linkTargetProps(siteConfig.bookingUrl)}
            className="btn btn-on-ink"
          >
            {siteConfig.bookingLabel}
          </Link>
        </div>
      </div>
    </section>
  );
}
