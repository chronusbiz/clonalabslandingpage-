import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { servicePages, siteConfig } from "@/lib/constants";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return servicePages.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const page = servicePages.find((s) => s.slug === slug);
  if (!page) return {};
  return {
    title: page.title.replace(" | ClonaLabs", ""),
    description: page.description,
    alternates: { canonical: `/services/${page.slug}` },
    openGraph: {
      title: page.title,
      description: page.description,
      url: `/services/${page.slug}`,
      type: "website",
    },
  };
}

export default async function ServicePage({ params }: Props) {
  const { slug } = await params;
  const page = servicePages.find((s) => s.slug === slug);
  if (!page) notFound();

  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Capabilities", path: "/services" },
          { label: page.h1.slice(0, 40), path: `/services/${page.slug}` },
        ]}
      />
      <PageIntro
        label="Capability"
        title={page.h1}
        description={page.lead}
        secondaryCta={{ label: "All capabilities", href: "/services" }}
      />

      <section className="bg-surface">
        <div className="container-site section">
          <h2 className="label text-text-muted mb-6">What this covers</h2>
          <ul className="border-t border-border max-w-2xl">
            {page.points.map((point) => (
              <li key={point} className="ruled py-4 text-body text-ink flex gap-3">
                <span className="text-accent" aria-hidden>
                  ·
                </span>
                {point}
              </li>
            ))}
          </ul>
          <div className="mt-10 flex flex-wrap gap-4">
            <Link href={siteConfig.bookingUrl} className="btn btn-primary">
              {siteConfig.bookingLabel}
            </Link>
            <Link href="/engagements" className="link-text">
              See engagements
            </Link>
          </div>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
