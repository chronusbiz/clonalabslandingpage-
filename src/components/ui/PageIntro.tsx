import Link from "next/link";
import { siteConfig } from "@/lib/constants";

type Cta = { label: string; href: string };

export default function PageIntro({
  label,
  title,
  description,
  primaryCta,
  secondaryCta,
  ink = false,
}: {
  label?: string;
  title: React.ReactNode;
  description?: string;
  primaryCta?: Cta;
  secondaryCta?: Cta;
  ink?: boolean;
}) {
  const primary = primaryCta ?? {
    label: siteConfig.bookingLabel,
    href: siteConfig.bookingUrl,
  };

  return (
    <header className={`${ink ? "bg-ink" : "bg-surface"} border-b border-border`}>
      <div className="container-site section !pb-12 !pt-16 md:!pt-20">
        {label && (
          <p className={`label mb-4 ${ink ? "text-text-on-ink-muted" : "text-text-muted"}`}>
            {label}
          </p>
        )}
        <h1
          className={`text-h1 max-w-[20ch] ${ink ? "text-text-on-ink" : "text-ink"}`}
        >
          {title}
        </h1>
        {description && (
          <p
            className={`mt-5 prose-measure text-body ${
              ink ? "text-text-on-ink-muted" : "text-text-muted"
            }`}
          >
            {description}
          </p>
        )}
        <div className="mt-8 flex flex-wrap items-center gap-4">
          <Link
            href={primary.href}
            className={`btn ${ink ? "btn-on-ink" : "btn-primary"}`}
          >
            {primary.label}
          </Link>
          {secondaryCta && (
            <Link href={secondaryCta.href} className="link-text">
              {secondaryCta.label}
            </Link>
          )}
        </div>
      </div>
    </header>
  );
}
