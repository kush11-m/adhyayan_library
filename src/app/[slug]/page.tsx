import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import { business, seoPages, siteUrl, type SeoPage } from "@/lib/site";

type PageProps = {
  params: Promise<{
    slug: string;
  }>;
};

function getSeoPage(slug: string): SeoPage | undefined {
  return seoPages.find((page) => page.slug === slug);
}

export function generateStaticParams() {
  return seoPages.map((page) => ({
    slug: page.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    return {};
  }

  return {
    title: page.metaTitle,
    description: page.description,
    alternates: {
      canonical: `/${page.slug}`,
    },
    openGraph: {
      title: page.metaTitle,
      description: page.description,
      url: `${siteUrl}/${page.slug}`,
      images: [
        {
          url: business.image,
          width: 1200,
          height: 630,
          alt: `${page.title} at Adhyayan Library Gwalior`,
        },
      ],
    },
  };
}

export default async function SeoLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const page = getSeoPage(slug);

  if (!page) {
    notFound();
  }

  const pageUrl = `${siteUrl}/${page.slug}`;
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${pageUrl}#webpage`,
      url: pageUrl,
      name: page.metaTitle,
      description: page.description,
      isPartOf: {
        "@id": `${siteUrl}/#website`,
      },
      about: {
        "@id": `${siteUrl}/#localbusiness`,
      },
      inLanguage: "en-IN",
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${pageUrl}#faq`,
      mainEntity: page.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    },
    {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Home",
          item: siteUrl,
        },
        {
          "@type": "ListItem",
          position: 2,
          name: page.title,
          item: pageUrl,
        },
      ],
    },
  ];

  return (
    <main className="min-h-screen bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />

      <section className="px-4 md:px-6 py-6 md:py-8 border-b border-text-primary/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
            <ArrowLeft size={16} />
            Home
          </Link>
          <Link
            href="/join"
            className="bg-text-primary text-cream rounded-full px-4 py-2 text-sm font-semibold"
          >
            Reserve a Seat
          </Link>
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-20">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-[1fr_380px] gap-8 md:gap-12 items-start">
          <div>
            <p className="text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] text-terracotta mb-3">
              {page.eyebrow}
            </p>
            <h1 className="text-[34px] md:text-6xl font-serif font-bold leading-tight tracking-[-0.01em] mb-5">
              {page.h1}
            </h1>
            <p className="text-[15px] md:text-xl text-text-secondary leading-relaxed max-w-3xl mb-5">
              {page.intro}
            </p>
            <p className="text-[13px] md:text-base text-text-secondary leading-relaxed max-w-3xl">
              {page.primaryIntent}
            </p>

            <div className="grid sm:grid-cols-2 gap-3 md:gap-4 mt-8">
              {page.highlights.map((highlight) => (
                <div key={highlight} className="flex gap-3 bg-cream rounded-[10px] md:rounded-2xl p-4">
                  <CheckCircle2 className="text-terracotta flex-shrink-0 mt-0.5" size={18} />
                  <p className="text-[12.5px] md:text-sm text-text-secondary leading-relaxed">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside className="bg-cream rounded-[14px] md:rounded-2xl p-5 md:p-6">
            <h2 className="font-serif font-bold text-2xl mb-4">
              {business.name}
            </h2>
            <div className="space-y-4 text-sm text-text-secondary">
              <div className="flex gap-3">
                <MapPin className="text-terracotta flex-shrink-0" size={18} />
                <p>
                  {business.streetAddress}, {business.locality},{" "}
                  {business.region} {business.postalCode}
                </p>
              </div>
              <div className="flex gap-3">
                <Clock className="text-terracotta flex-shrink-0" size={18} />
                <p>{business.hours}; night shift available</p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-terracotta flex-shrink-0" size={18} />
                <p>
                  <a href={`tel:${business.phone}`} className="font-semibold text-terracotta">
                    {business.displayPhone}
                  </a>
                  <br />
                  <a
                    href={`tel:${business.alternatePhone}`}
                    className="font-semibold text-terracotta"
                  >
                    {business.alternateDisplayPhone}
                  </a>
                </p>
              </div>
            </div>
            <Link
              href="/join"
              className="block text-center bg-burnt-orange text-white rounded-full px-5 py-3 mt-6 font-bold"
            >
              Enquire for Membership
            </Link>
          </aside>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-[22px] md:text-4xl font-serif font-bold mb-5">
            Common questions about {page.title}
          </h2>
          <div className="grid md:grid-cols-2 gap-4">
            {page.faqs.map((faq) => (
              <article key={faq.question} className="bg-cream rounded-[10px] md:rounded-2xl p-4 md:p-6">
                <h3 className="font-bold text-[14px] md:text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-[12.5px] md:text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
