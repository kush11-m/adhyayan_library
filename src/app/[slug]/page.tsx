import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import {
  amenities,
  business,
  examCategories,
  localBusinessJsonLd,
  seoPages,
  selectionChecklist,
  services,
  servedAreas,
  siteUrl,
  type SeoPage,
} from "@/lib/site";

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
  const relatedPages = seoPages.filter((item) => item.slug !== page.slug);
  const structuredData = [
    localBusinessJsonLd,
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
    ...(page.slug === "how-to-choose-self-study-centre-gwalior"
      ? [
          {
            "@context": "https://schema.org",
            "@type": "HowTo",
            "@id": `${pageUrl}#howto`,
            name: "How to choose a self study centre in Gwalior",
            description:
              "A practical checklist for students comparing self-study centres and reading rooms in Gwalior.",
            step: selectionChecklist.map((item, index) => ({
              "@type": "HowToStep",
              position: index + 1,
              name: item.name,
              text: item.text,
            })),
          },
        ]
      : []),
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

      <section className="px-4 md:px-6 pb-12 md:pb-16">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-4">
          <article className="bg-secondary-background rounded-[12px] md:rounded-2xl p-5 md:p-6">
            <h2 className="font-serif font-bold text-xl md:text-2xl mb-3">
              Facilities included
            </h2>
            <ul className="space-y-2 text-[12.5px] md:text-sm text-text-secondary">
              {amenities.slice(0, 7).map((item) => (
                <li key={item} className="flex gap-2">
                  <CheckCircle2 size={15} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </article>

          <article className="bg-secondary-background rounded-[12px] md:rounded-2xl p-5 md:p-6">
            <h2 className="font-serif font-bold text-xl md:text-2xl mb-3">
              Useful for exams
            </h2>
            <div className="flex flex-wrap gap-2">
              {examCategories.map((exam) => (
                <span
                  key={exam}
                  className="bg-cream rounded-full px-3 py-1.5 text-[11px] md:text-xs font-bold text-text-primary"
                >
                  {exam}
                </span>
              ))}
            </div>
          </article>

          <article className="bg-secondary-background rounded-[12px] md:rounded-2xl p-5 md:p-6">
            <h2 className="font-serif font-bold text-xl md:text-2xl mb-3">
              Areas served
            </h2>
            <p className="text-[12.5px] md:text-sm text-text-secondary leading-relaxed">
              Students search from {servedAreas.slice(1, 7).join(", ")} and
              nearby Gwalior areas when choosing Adhyayan Library for daily
              self study.
            </p>
          </article>
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

      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-7">
          <h2 className="text-[20px] md:text-3xl font-serif font-bold mb-4">
            Checklist before joining a Gwalior study centre
          </h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {selectionChecklist.map((item, index) => (
              <article
                key={item.name}
                className="bg-background rounded-[10px] p-4"
              >
                <p className="text-[11px] font-bold uppercase tracking-[0.08em] text-terracotta mb-1">
                  Step {index + 1}
                </p>
                <h3 className="font-bold text-[14px] md:text-lg mb-1">
                  {item.name}
                </h3>
                <p className="text-[12.5px] md:text-sm text-text-secondary leading-relaxed">
                  {item.text}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-7">
          <h2 className="text-[20px] md:text-3xl font-serif font-bold mb-4">
            Services available at Adhyayan Library
          </h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-4">
            {services.map((service) => (
              <article
                key={service.name}
                className="bg-background rounded-[10px] p-4"
              >
                <h3 className="font-bold text-[14px] md:text-lg mb-1">
                  {service.name}
                </h3>
                <p className="text-[12.5px] md:text-sm text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="px-4 md:px-6 pb-12 md:pb-20">
        <div className="max-w-6xl mx-auto border-t border-text-primary/10 pt-8">
          <h2 className="text-[18px] md:text-3xl font-serif font-bold mb-4">
            Related Gwalior study searches
          </h2>
          <div className="flex flex-wrap gap-2">
            {relatedPages.map((item) => (
              <Link
                key={item.slug}
                href={`/${item.slug}`}
                className="bg-cream text-text-primary rounded-full px-3.5 py-2 text-[11px] md:text-sm font-bold"
              >
                {item.title}
              </Link>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
