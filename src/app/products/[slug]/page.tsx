import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, ArrowUpRight, Users, ShieldCheck } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import LightPageHero from "@/components/ui/LightPageHero";
import ScrollReveal from "@/components/ui/ScrollReveal";
import StatusBadge from "@/components/ui/StatusBadge";
import CTABanner from "@/components/ui/CTABanner";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { products, siteConfig } from "@/lib/constants";

type PageProps = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

function getProduct(slug: string) {
  return products.find((p) => p.slug === slug);
}

const statusCopy = {
  Live: "Available today.",
  Beta: "In active beta. Scope and availability are confirmed with our team.",
  Planned: "On our roadmap. Not yet available.",
} as const;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) return {};
  return {
    title: `${product.name} — ${product.category}`,
    description: product.summary,
    alternates: { canonical: product.href },
    openGraph: {
      title: `${product.name} | ClonaLabs`,
      description: product.summary,
      url: product.href,
      type: "website",
    },
  };
}

export default async function ProductDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const product = getProduct(slug);
  if (!product) notFound();

  const others = products.filter((p) => p.slug !== product.slug);

  return (
    <>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Products", path: "/products" },
          { label: product.name, path: product.href },
        ]}
      />
      <Navbar />
      <main id="main-content" className="bg-white">
        <LightPageHero
          eyebrow={product.category}
          title={product.name}
          description={product.summary}
          primaryCta={{ label: siteConfig.contactCta, href: "/contact" }}
          secondaryCta={
            product.externalUrl
              ? { label: `Visit ${new URL(product.externalUrl).hostname}`, href: product.externalUrl }
              : { label: "All products", href: "/products" }
          }
        >
          <div className="flex items-center gap-3">
            <StatusBadge status={product.status} />
            <span className="text-sm text-text-dark-muted">{statusCopy[product.status]}</span>
          </div>
        </LightPageHero>

        <section className="py-14 lg:py-20 bg-white">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
            <ScrollReveal className="lg:col-span-7">
              <h2 className="font-heading text-2xl md:text-3xl font-bold text-text-dark mb-4">
                About {product.name}
              </h2>
              <p className="text-base md:text-lg text-text-dark-muted leading-relaxed mb-8">
                {product.summary}
              </p>

              <div className="rounded-md border border-card-light-border bg-light-primary p-6">
                <div className="mb-3 flex items-center gap-3">
                  <span className="flex h-9 w-9 items-center justify-center rounded-md bg-accent/10 text-accent">
                    <Users size={17} />
                  </span>
                  <h3 className="font-heading text-lg font-bold text-text-dark">Who it is for</h3>
                </div>
                <p className="text-sm text-text-dark-muted leading-relaxed">{product.audience}</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.1} className="lg:col-span-5">
              <div className="space-y-5 lg:sticky lg:top-28">
                <div className="rounded-md border border-card-light-border bg-white p-6">
                  <dl className="space-y-4 text-sm">
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dark-muted mb-1">
                        Status
                      </dt>
                      <dd>
                        <StatusBadge status={product.status} />
                      </dd>
                    </div>
                    <div>
                      <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dark-muted mb-1">
                        Category
                      </dt>
                      <dd className="text-text-dark font-medium">{product.category}</dd>
                    </div>
                    {product.externalUrl && (
                      <div>
                        <dt className="text-[11px] font-semibold uppercase tracking-[0.2em] text-text-dark-muted mb-1">
                          Product site
                        </dt>
                        <dd>
                          <a
                            href={product.externalUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-accent hover:underline"
                          >
                            {new URL(product.externalUrl).hostname}
                            <ArrowUpRight size={14} />
                          </a>
                        </dd>
                      </div>
                    )}
                  </dl>
                </div>

                <div className="rounded-md border border-accent/40 bg-accent/5 p-6">
                  <div className="mb-2 flex items-center gap-2">
                    <ShieldCheck size={16} className="text-accent" />
                    <h3 className="text-[11px] font-semibold uppercase tracking-[0.2em] text-accent">
                      Governance note
                    </h3>
                  </div>
                  <p className="text-sm leading-relaxed text-text-dark">{product.note}</p>
                </div>
              </div>
            </ScrollReveal>
          </div>
        </section>

        <section className="py-14 lg:py-16 bg-light-primary border-t border-card-light-border">
          <div className="max-w-[1400px] mx-auto px-6 lg:px-8">
            <h2 className="font-heading text-xl font-bold text-text-dark mb-5">Other products</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {others.map((p) => (
                <li key={p.slug}>
                  <Link
                    href={p.href}
                    className="group flex items-center justify-between gap-3 rounded-md border border-card-light-border bg-white p-4 transition-colors hover:border-accent"
                  >
                    <span className="flex items-center gap-3">
                      <span className="text-sm font-semibold text-text-dark group-hover:text-accent">
                        {p.name}
                      </span>
                      <StatusBadge status={p.status} />
                    </span>
                    <ArrowRight size={14} className="flex-shrink-0 text-accent transition-transform group-hover:translate-x-1" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <CTABanner
          title="Talk to us about"
          highlight={`${product.name}.`}
          description="Ask about fit, availability and how it could work for your team."
          buttonText={siteConfig.contactCta}
          buttonHref="/contact"
          dark={false}
        />
      </main>
      <Footer />
    </>
  );
}
