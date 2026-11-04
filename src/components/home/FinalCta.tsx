import Link from "next/link";
import { siteConfig } from "@/lib/constants";

export default function FinalCta() {
  return (
    <section className="border-t border-white/10 bg-dark-primary py-24 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-heading text-3xl leading-[1.15] text-white sm:text-4xl lg:text-5xl">
            Let&apos;s make technology work better for your business.
          </h2>
          <p className="mt-5 text-base leading-relaxed text-white/65">
            Tell us about your goals, current systems and challenges. We&apos;ll help
            you explore the right next step.
          </p>
          <Link
            href="/contact"
            className="mt-8 inline-flex min-h-11 items-center justify-center bg-white px-6 text-sm font-semibold text-black transition hover:bg-accent hover:text-white"
          >
            {siteConfig.discussCta}
          </Link>
        </div>
      </div>
    </section>
  );
}
