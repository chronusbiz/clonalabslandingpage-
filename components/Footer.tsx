import Link from "next/link";
import { site } from "@/content/site";
import { ChannelIcon, Icons, Lucide } from "./icons";

export function Footer() {
  return (
    <footer className="relative border-t border-line bg-elevated">
      <div className="meta-rail opacity-60" />
      <div className="mx-auto grid max-w-page gap-10 px-4 py-12 sm:px-6 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-xl font-semibold">
            <span className="text-gradient">{site.wordmark}</span>
          </p>
          <p className="mt-2 max-w-sm text-sm leading-relaxed text-muted">{site.tagline}</p>
          <div className="mt-4 flex items-center gap-2.5 text-muted">
            <ChannelIcon channel="WhatsApp" className="h-4 w-4 text-[#25D366]" />
            <ChannelIcon channel="Instagram" className="h-4 w-4 text-[#E1306C]" />
            <ChannelIcon channel="Messenger" className="h-4 w-4 text-[#0084FF]" />
            <ChannelIcon channel="Facebook" className="h-4 w-4 text-[#1877F2]" />
          </div>
          <p className="mt-4 text-sm text-ink">{site.legal.entityName}</p>
          <p className="mt-1 whitespace-pre-line text-sm text-muted">{site.legal.postalAddress}</p>
          <p className="mt-2 text-sm">
            <a className="underline underline-offset-4" href={`mailto:${site.legal.supportEmail}`}>
              {site.legal.supportEmail}
            </a>
          </p>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Explore</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm" aria-label="Footer">
            {site.nav.map((item) => (
              <a key={item.href} href={item.href} className="text-muted hover:text-ink">
                {item.label}
              </a>
            ))}
          </nav>
        </div>

        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted">Legal</p>
          <nav className="mt-3 flex flex-col gap-2 text-sm" aria-label="Legal">
            <Link href="/privacy" className="text-muted hover:text-ink">
              Privacy
            </Link>
            <Link href="/terms" className="text-muted hover:text-ink">
              Terms
            </Link>
            <Link href="/cookies" className="text-muted hover:text-ink">
              Cookie policy
            </Link>
          </nav>
          <ul className="mt-6 space-y-2 text-xs text-muted">
            {[
              { label: "Official Meta Business APIs", icon: Icons.plug },
              { label: "Tenant isolation · audit logs", icon: Icons.lock },
              { label: "No revenue share", icon: Icons.dollar },
            ].map((item) => (
              <li key={item.label} className="flex items-center gap-2">
                <Lucide icon={item.icon} className="h-3.5 w-3.5 text-accent" />
                {item.label}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="border-t border-line">
        <p className="mx-auto max-w-page px-4 py-5 text-xs leading-relaxed text-muted sm:px-6">
          {site.legal.trademarkLine}
        </p>
      </div>
    </footer>
  );
}
