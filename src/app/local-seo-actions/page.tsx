import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, ExternalLink } from "lucide-react";
import { business, citationTargets, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Local SEO Actions for Adhyayan Library Gwalior",
  description:
    "Citation, Google Business Profile, and review checklist for strengthening Adhyayan Library Gwalior local search visibility.",
  alternates: {
    canonical: "/local-seo-actions",
  },
  robots: {
    index: true,
    follow: true,
  },
};

const actionJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/local-seo-actions#actions`,
  name: "Local SEO actions for Adhyayan Library Gwalior",
  itemListElement: citationTargets.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    description: item.action,
  })),
};

export default function LocalSeoActionsPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(actionJsonLd) }}
      />

      <section className="px-4 md:px-6 py-6 border-b border-text-primary/10">
        <div className="max-w-5xl mx-auto">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
            <ArrowLeft size={16} />
            Home
          </Link>
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] text-terracotta mb-3">
            Local pack prominence
          </p>
          <h1 className="text-[34px] md:text-6xl font-serif font-bold leading-tight mb-4">
            Local SEO actions for Adhyayan Library Gwalior
          </h1>
          <p className="text-[14px] md:text-lg text-text-secondary leading-relaxed max-w-3xl">
            Google already recognizes an Adhyayan Library listing at 55, Padav.
            To move from being merely listed to ranking stronger for local
            searches, the same official business details should be consistent
            across Google Business Profile, local directories, social profiles,
            and student community references.
          </p>

          <div className="grid md:grid-cols-[1fr_0.8fr] gap-5 mt-8">
            <article className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
              <h2 className="font-serif font-bold text-2xl mb-4">
                Citation-ready details
              </h2>
              <div className="space-y-2 text-sm text-text-secondary">
                <p><strong className="text-text-primary">Name:</strong> {business.name}</p>
                <p><strong className="text-text-primary">Address:</strong> {business.streetAddress}, {business.locality}, {business.region} {business.postalCode}</p>
                <p><strong className="text-text-primary">Phones:</strong> {business.displayPhone}, {business.alternateDisplayPhone}</p>
                <p><strong className="text-text-primary">Website:</strong> {siteUrl}</p>
                <p><strong className="text-text-primary">Category:</strong> Self-study centre, reading room, study library</p>
                <p><strong className="text-text-primary">Hours:</strong> {business.hours}</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <a
                  href={business.sameAs[0]}
                  className="inline-flex items-center justify-center gap-2 bg-burnt-orange text-white rounded-full px-5 py-3 text-sm font-bold"
                >
                  Google Maps listing
                  <ExternalLink size={15} />
                </a>
                <Link
                  href="/contact"
                  className="text-center bg-text-primary text-cream rounded-full px-5 py-3 text-sm font-bold"
                >
                  Official Contact Page
                </Link>
              </div>
            </article>

            <article className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
              <h2 className="font-serif font-bold text-2xl mb-4">
                Review request checklist
              </h2>
              <ul className="space-y-3 text-sm text-text-secondary">
                {[
                  "Ask real members to review the correct 55, Padav Google listing.",
                  "Never buy reviews or copy fake review text.",
                  "Reply to each review with natural, specific language.",
                  "Add current photos of seating, entrance, facilities, and study hall.",
                ].map((item) => (
                  <li key={item} className="flex gap-2">
                    <CheckCircle2 size={16} className="text-terracotta flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          </div>

          <section className="mt-8">
            <h2 className="font-serif font-bold text-2xl md:text-3xl mb-4">
              Priority citation actions
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {citationTargets.map((target, index) => (
                <article key={target.name} className="bg-cream rounded-[12px] p-5">
                  <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-terracotta mb-1">
                    Action {index + 1}
                  </p>
                  <h3 className="font-bold text-lg mb-2">{target.name}</h3>
                  <p className="text-sm text-text-secondary leading-relaxed">
                    {target.action}
                  </p>
                </article>
              ))}
            </div>
          </section>
        </div>
      </section>
    </main>
  );
}
