import { siteConfig } from "@/lib/constants";

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || siteConfig.url;

type Crumb = { label: string; path: string };

export function BreadcrumbSchema({ crumbs }: { crumbs: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: crumbs.map((c, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: c.label,
      item: `${SITE_URL}${c.path.startsWith("/") ? c.path : "/" + c.path}`,
    })),
  };
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
