import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Clock, Mail, MapPin, Phone, User } from "lucide-react";
import { business, localBusinessJsonLd, seoPages, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Adhyayan Library Gwalior",
  description:
    "Official contact details, address, phone numbers, email, and study hours for Adhyayan Library in Padav, Gwalior.",
  alternates: {
    canonical: "/contact",
  },
  openGraph: {
    title: "Contact Adhyayan Library Gwalior",
    description:
      "Official NAP details for Adhyayan Library: 55, MLB Colony, Padav, Gwalior, Madhya Pradesh 474002.",
    url: `${siteUrl}/contact`,
  },
};

const contactPageJsonLd = [
  localBusinessJsonLd,
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "@id": `${siteUrl}/contact#contact`,
    url: `${siteUrl}/contact`,
    name: "Contact Adhyayan Library Gwalior",
    description:
      "Official contact and location page for Adhyayan Library Gwalior.",
    about: {
      "@id": `${siteUrl}/#localbusiness`,
    },
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
        name: "Contact",
        item: `${siteUrl}/contact`,
      },
    ],
  },
];

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageJsonLd) }}
      />

      <section className="px-4 md:px-6 py-6 border-b border-text-primary/10">
        <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
            <ArrowLeft size={16} />
            Home
          </Link>
          <Link href="/join" className="bg-text-primary text-cream rounded-full px-4 py-2 text-sm font-semibold">
            Reserve a Seat
          </Link>
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-5xl mx-auto">
          <p className="text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] text-terracotta mb-3">
            Official NAP details
          </p>
          <h1 className="text-[34px] md:text-6xl font-serif font-bold leading-tight mb-4">
            Contact Adhyayan Library Gwalior
          </h1>
          <p className="text-[14px] md:text-lg text-text-secondary leading-relaxed max-w-3xl">
            Use this page for the official name, address, phone numbers, email,
            and study hours of Adhyayan Library in Padav, Gwalior. Keeping this
            information consistent helps students, parents, map services, and
            local directories identify the same business entity.
          </p>

          <div className="grid md:grid-cols-2 gap-4 md:gap-6 mt-8">
            <article className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
              <h2 className="font-serif font-bold text-2xl mb-5">Business details</h2>
              <div className="space-y-5 text-sm text-text-secondary">
                <div className="flex gap-3">
                  <User className="text-terracotta flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-text-primary">Name</p>
                    <p>{business.name}</p>
                    <p>{business.legalName}</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <MapPin className="text-terracotta flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-text-primary">Address</p>
                    <address className="not-italic">
                      {business.streetAddress}, {business.locality},{" "}
                      {business.region} {business.postalCode}, India
                    </address>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Phone className="text-terracotta flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-text-primary">Phone</p>
                    <a href={`tel:${business.phone}`} className="block text-terracotta font-semibold">
                      {business.displayPhone}
                    </a>
                    <a href={`tel:${business.alternatePhone}`} className="block text-terracotta font-semibold">
                      {business.alternateDisplayPhone}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Mail className="text-terracotta flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-text-primary">Email</p>
                    <a href={`mailto:${business.email}`} className="text-terracotta font-semibold">
                      {business.email}
                    </a>
                  </div>
                </div>
                <div className="flex gap-3">
                  <Clock className="text-terracotta flex-shrink-0" size={20} />
                  <div>
                    <p className="font-bold text-text-primary">Hours</p>
                    <p>{business.hours}</p>
                    <p>Night shift availability listed for members.</p>
                  </div>
                </div>
              </div>
            </article>

            <article className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
              <h2 className="font-serif font-bold text-2xl mb-5">Citation text</h2>
              <div className="bg-background rounded-[10px] p-4 text-sm text-text-secondary leading-relaxed">
                <p className="font-bold text-text-primary">{business.name}</p>
                <p>{business.streetAddress}</p>
                <p>{business.locality}, {business.region} {business.postalCode}</p>
                <p>Phone: {business.displayPhone}, {business.alternateDisplayPhone}</p>
                <p>Email: {business.email}</p>
                <p>Website: {siteUrl}</p>
                <p>Category: Self-study centre and reading library in Gwalior</p>
              </div>
              <div className="flex flex-col sm:flex-row gap-3 mt-5">
                <a
                  href="/adhyayan-library-gwalior.vcf"
                  className="text-center bg-text-primary text-cream rounded-full px-5 py-3 text-sm font-bold"
                >
                  Download Contact Card
                </a>
                <Link
                  href="/sitemap"
                  className="text-center bg-secondary-background text-text-primary rounded-full px-5 py-3 text-sm font-bold"
                >
                  View Site Map
                </Link>
              </div>
            </article>
          </div>

          <div className="mt-8 bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
            <h2 className="font-serif font-bold text-2xl mb-4">Related pages</h2>
            <div className="flex flex-wrap gap-2">
              {seoPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="bg-background text-text-primary rounded-full px-3.5 py-2 text-[11px] md:text-sm font-bold"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
