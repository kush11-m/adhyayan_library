import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { seoPages, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Adhyayan Library Site Map",
  description:
    "HTML sitemap for Adhyayan Library Gwalior, including official contact, membership, and local study library pages.",
  alternates: {
    canonical: "/sitemap",
  },
};

const CORE_LINKS = [
  { href: "/", label: "Adhyayan Library Gwalior Home" },
  { href: "/contact", label: "Contact Adhyayan Library Gwalior" },
  { href: "/join", label: "Reserve a Cabin Desk" },
];

const sitemapJsonLd = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  "@id": `${siteUrl}/sitemap#pages`,
  name: "Adhyayan Library Gwalior Site Map",
  itemListElement: [
    ...CORE_LINKS.map((link, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: link.label,
      url: `${siteUrl}${link.href === "/" ? "" : link.href}`,
    })),
    ...seoPages.map((page, index) => ({
      "@type": "ListItem",
      position: CORE_LINKS.length + index + 1,
      name: page.title,
      url: `${siteUrl}/${page.slug}`,
    })),
  ],
};

export default function HtmlSitemapPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(sitemapJsonLd) }}
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
            Crawlable page index
          </p>
          <h1 className="text-[34px] md:text-6xl font-serif font-bold leading-tight mb-4">
            Adhyayan Library Gwalior Site Map
          </h1>
          <p className="text-[14px] md:text-lg text-text-secondary leading-relaxed max-w-3xl">
            A simple HTML sitemap for students, parents, search engines, and
            local directories to find official Adhyayan Library pages.
          </p>

          <div className="grid md:grid-cols-2 gap-5 mt-8">
            <article className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
              <h2 className="font-serif font-bold text-2xl mb-4">Core pages</h2>
              <ul className="space-y-3">
                {CORE_LINKS.map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-terracotta font-bold">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </article>

            <article className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
              <h2 className="font-serif font-bold text-2xl mb-4">Gwalior study pages</h2>
              <ul className="space-y-3">
                {seoPages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`} className="text-terracotta font-bold">
                      {page.title}
                    </Link>
                    <p className="text-xs text-text-secondary mt-1">
                      {page.description}
                    </p>
                  </li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>
    </main>
  );
}
