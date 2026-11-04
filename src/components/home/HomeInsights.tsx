import Link from "next/link";
import { insights } from "@/lib/constants";
import SectionHeading from "@/components/ui/SectionHeading";

export default function HomeInsights() {
  if (insights.length < 3) return null;

  return (
    <section className="bg-light-primary py-20 lg:py-28">
      <div className="mx-auto max-w-[1400px] px-6 lg:px-8">
        <SectionHeading
          theme="light"
          eyebrow="Insights"
          title="Notes from delivery work."
          aside={
            <Link
              href="/insights"
              className="text-sm font-medium text-accent underline decoration-accent/30 underline-offset-4 hover:decoration-accent"
            >
              View all
            </Link>
          }
        />
        <ul className="divide-y divide-card-light-border border-y border-card-light-border">
          {insights.slice(0, 3).map((post) => (
            <li key={post.slug}>
              <Link href={`/insights/${post.slug}`} className="block py-7">
                <p className="text-xs font-medium uppercase tracking-[0.14em] text-accent">
                  {post.category}
                </p>
                <h3 className="font-heading mt-2 text-2xl text-text-dark">
                  {post.title}
                </h3>
                <p className="mt-2 max-w-2xl text-sm text-text-dark-muted">
                  {post.summary}
                </p>
                <p className="mt-3 text-xs text-text-dark-muted">{post.date}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
