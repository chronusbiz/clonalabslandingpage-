import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/ui/PageShell";
import PageIntro from "@/components/ui/PageIntro";
import FinalCta from "@/components/home/FinalCta";
import { BreadcrumbSchema } from "@/components/schema/PageSchema";
import { insightsPosts, pageSeo } from "@/lib/constants";

const seo = pageSeo.insights;

export const metadata: Metadata = {
  title: seo.title.replace(" | ClonaLabs", ""),
  description: seo.description,
  alternates: { canonical: "/insights" },
  openGraph: {
    title: seo.title,
    description: seo.description,
    url: "/insights",
    type: "website",
  },
};

export default function InsightsPage() {
  return (
    <PageShell>
      <BreadcrumbSchema
        crumbs={[
          { label: "Home", path: "/" },
          { label: "Insights", path: "/insights" },
        ]}
      />
      <PageIntro
        label="Insights"
        title="Practical writing for Canadian teams."
        description="Titles we are preparing on fractional CTO work, AI evaluation, custom software decisions and vendor privacy. Full articles will appear here; nothing below invents body copy."
      />

      <section className="bg-surface">
        <div className="container-site section">
          <ul className="border-t border-border">
            {insightsPosts.map((post, i) => (
              <li
                key={post.title}
                className="ruled grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 py-6"
              >
                <span className="md:col-span-1 font-mono text-small text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div className="md:col-span-8">
                  <h2 className="text-h3 text-ink">{post.title}</h2>
                  <p className="mt-1 text-small text-text-muted">
                    Placeholder · related reading:{" "}
                    <Link href={post.linksTo} className="link-text">
                      {post.linksTo.replace(/^\//, "").replace(/#.*$/, "") || "home"}
                    </Link>
                  </p>
                </div>
                <div className="md:col-span-3 md:text-right">
                  <span className="font-mono text-small text-text-muted uppercase tracking-wider">
                    Coming soon
                  </span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FinalCta />
    </PageShell>
  );
}
