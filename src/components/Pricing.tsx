"use client";

import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import SpotlightCard from "./ui/SpotlightCard";
import SectionHeading from "./ui/SectionHeading";
import { featuredProducts, buyerChallenges, siteConfig, linkTargetProps } from "@/lib/constants";

export default function Pricing() {
  return (
    <section id="products" className="snap-start snap-always bg-light-primary scroll-mt-20">
      <div className="fp-inner">
        <SectionHeading
          compact
          eyebrow="Products"
          title={
            <>
              Digital products for{" "}
              <span className="gradient-text">specific workflow needs.</span>
            </>
          }
          description="Four ready-to-deploy products — verified capabilities only, separate from custom delivery."
          aside={
            <Link
              href={siteConfig.bookingUrl}
              className="fp-btn group inline-flex items-center gap-2 border border-text-dark/10 text-text-dark font-medium transition-all duration-300 hover:border-accent hover:text-accent hover:bg-accent/5"
            >
              Talk through products
              <ArrowUpRight size={14} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </Link>
          }
        />

        <div className="fp-grid fp-grid-4 fp-fill">
          {featuredProducts.map((product, i) => (
            <SpotlightCard
              key={product.name}
              variant="light"
              className={`fp-card group relative border bg-white overflow-hidden transition-all duration-500 hover:-translate-y-1 ${
                product.featured
                  ? "border-accent shadow-[0_24px_50px_-28px_color-mix(in_srgb,var(--accent)_55%,transparent)]"
                  : "border-card-light-border hover:border-accent/40 hover:shadow-[0_20px_40px_-28px_rgba(15,23,42,0.35)]"
              }`}
            >
              {product.featured && <div className="absolute top-0 inset-x-0 h-[3px] bg-accent z-20" />}

              <div className="flex flex-col h-full min-h-0" style={{ padding: "var(--fp-card-pad)" }}>
                <div className="flex items-center justify-between gap-2 mb-4">
                  <span className="font-heading text-[13px] text-text-dark-muted/60 tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span
                    className={`inline-flex items-center gap-1.5 px-2 py-0.5 text-[10px] font-bold uppercase tracking-[0.16em] ${
                      product.featured ? "bg-accent text-white" : "border border-card-light-border text-text-dark-muted"
                    }`}
                  >
                    <span className={`h-1.5 w-1.5 rounded-full ${product.featured ? "bg-white" : "bg-emerald-500"}`} />
                    {product.featured ? "Featured · Live" : product.status}
                  </span>
                </div>

                <h3 className="fp-card-title font-heading font-bold text-text-dark mb-1">{product.name}</h3>
                <p className="fp-label text-accent mb-3 leading-snug min-h-[2.6em]">{product.category}</p>
                <p className="fp-body text-text-dark-muted mb-4 line-clamp-3">{product.blurb}</p>

                <ul className="space-y-2 pt-4 border-t border-card-light-border mb-4 flex-1 min-h-0 overflow-hidden">
                  {product.points.slice(0, 3).map((f) => (
                    <li key={f} className="fp-body flex items-start gap-2 text-text-dark-muted leading-snug">
                      <Check size={14} className="mt-[3px] shrink-0 text-accent" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>

                <a
                  href={product.href}
                  {...linkTargetProps(product.href)}
                  className={`fp-btn mt-auto inline-flex items-center justify-center gap-1.5 rounded-md font-semibold uppercase tracking-widest transition-all duration-300 ${
                    product.featured
                      ? "bg-accent text-white hover:bg-accent-hover"
                      : "border border-text-dark/15 text-text-dark hover:border-accent hover:text-accent hover:bg-accent/5"
                  }`}
                >
                  {product.cta}
                  <ArrowUpRight size={12} />
                </a>
              </div>
            </SpotlightCard>
          ))}
        </div>

        <div className="grid grid-cols-2 xl:grid-cols-4 border border-card-light-border bg-white divide-x divide-y xl:divide-y-0 divide-card-light-border">
          {buyerChallenges.map((s, i) => (
            <div key={s.label} className="flex items-start gap-4 px-5 py-4 transition-colors hover:bg-light-primary">
              <span className="font-heading text-2xl text-accent/80 leading-none tabular-nums pt-0.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <div className="min-w-0">
                <p className="fp-label text-accent mb-1">{s.label}</p>
                <p className="font-heading font-bold text-text-dark text-[15px] leading-tight mb-1">{s.value}</p>
                <p className="text-[13px] text-text-dark-muted leading-snug line-clamp-2">{s.note}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
