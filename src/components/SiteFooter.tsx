import Link from "next/link";
import { MapPin } from "lucide-react";
import Wordmark from "./ui/Wordmark";
import { footerLinks, siteConfig, linkTargetProps } from "@/lib/constants";
import { isLinkVisible } from "@/lib/site-visibility";

const groups = [
  { heading: "Company", key: "company" as const },
  { heading: "Capabilities", key: "services" as const },
  { heading: "Products", key: "products" as const },
  { heading: "Resources", key: "resources" as const },
];

const legalHrefs = ["/privacy", "/terms", "/cookie-policy"];

export default function SiteFooter() {
  return (
    <footer className="bg-ink text-text-on-ink">
      <div className="container-site section">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-12 gap-8 lg:gap-6">
          {groups.map((g) => (
            <div key={g.key} className="lg:col-span-2">
              <p className="label text-text-on-ink-muted mb-4">{g.heading}</p>
              <ul className="space-y-2.5">
                {footerLinks[g.key]
                  .filter((l) => isLinkVisible(l.href) && !legalHrefs.includes(l.href))
                  .map((l) => (
                    <li key={l.label}>
                      <Link
                        href={l.href}
                        {...linkTargetProps(l.href)}
                        className="text-small text-text-on-ink-muted hover:text-text-on-ink transition-colors"
                      >
                        {l.label}
                      </Link>
                    </li>
                  ))}
              </ul>
            </div>
          ))}

          <div className="col-span-2 md:col-span-4 lg:col-span-4 lg:pl-6 lg:border-l lg:border-white/10 space-y-5">
            <p className="label text-text-on-ink-muted">Contact</p>
            <div className="space-y-2">
              {siteConfig.emails.map((email) => (
                <a
                  key={email}
                  href={`mailto:${email}`}
                  className="block text-small text-text-on-ink-muted hover:text-text-on-ink transition-colors"
                >
                  {email}
                </a>
              ))}
              <a
                href={`tel:${siteConfig.phone}`}
                className="block text-small text-text-on-ink-muted hover:text-text-on-ink transition-colors"
              >
                {siteConfig.phoneDisplay}
              </a>
              <Link
                href={siteConfig.bookingUrl}
                {...linkTargetProps(siteConfig.bookingUrl)}
                className="inline-block text-small text-accent hover:text-accent-hover transition-colors pt-1"
              >
                {siteConfig.bookingLabel}
              </Link>
            </div>
            <p className="label text-text-on-ink-muted pt-2">Offices</p>
            {siteConfig.offices.map((o) => (
              <address key={o.country} className="not-italic flex gap-3">
                <MapPin size={16} className="text-accent shrink-0 mt-0.5" aria-hidden />
                <div>
                  <p className="text-small font-semibold text-text-on-ink mb-1">{o.label}</p>
                  {o.lines.map((line) => (
                    <p key={line} className="text-small text-text-on-ink-muted leading-snug">
                      {line}
                    </p>
                  ))}
                </div>
              </address>
            ))}
          </div>
        </div>

        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row gap-4 sm:items-center sm:justify-between">
          <div className="flex flex-wrap items-center gap-4">
            <Link href="/" aria-label="ClonaLabs home">
              <Wordmark className="text-lg text-text-on-ink" />
            </Link>
            <span className="text-small text-text-on-ink-muted">
              © {new Date().getFullYear()} {siteConfig.name}
            </span>
          </div>
          <div className="flex flex-wrap gap-4">
            {footerLinks.resources
              .filter((l) => legalHrefs.includes(l.href))
              .map((l) => (
                <Link
                  key={l.label}
                  href={l.href}
                  className="text-small text-text-on-ink-muted hover:text-text-on-ink transition-colors"
                >
                  {l.label}
                </Link>
              ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
