import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, CheckCircle2, Clock, MapPin, Phone } from "lucide-react";
import {
  business,
  localBusinessJsonLd,
  membershipPlans,
  siteUrl,
} from "@/lib/site";

export const metadata: Metadata = {
  title: "Adhyayan Library Membership Plans",
  description:
    "Membership plans and cabin desk pricing for Adhyayan Library, a self-study centre and reading library in Padav, Gwalior.",
  alternates: {
    canonical: "/membership",
  },
  openGraph: {
    title: "Adhyayan Library Membership Plans",
    description:
      "Compare Basic, Standard, and Premium study library membership plans at Adhyayan Library Gwalior.",
    url: `${siteUrl}/membership`,
  },
};

const membershipJsonLd = [
  localBusinessJsonLd,
  {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    "@id": `${siteUrl}/membership#plans`,
    url: `${siteUrl}/membership`,
    name: "Adhyayan Library Gwalior membership plans",
    description:
      "Membership and cabin seat plans for Adhyayan Library Gwalior.",
    about: {
      "@id": `${siteUrl}/#localbusiness`,
    },
    mainEntity: {
      "@type": "OfferCatalog",
      name: "Adhyayan Library membership plans",
      itemListElement: membershipPlans.map((plan) => ({
        "@type": "Offer",
        name: plan.name,
        price: plan.price,
        priceCurrency: "INR",
        availability: "https://schema.org/InStock",
        url: `${siteUrl}/join?plan=${plan.slug}`,
        itemOffered: {
          "@type": "Service",
          name: plan.name,
          description: plan.description,
          provider: {
            "@id": `${siteUrl}/#localbusiness`,
          },
          areaServed: "Gwalior",
        },
      })),
    },
  },
];

export default function MembershipPage() {
  return (
    <main className="min-h-screen bg-background text-text-primary">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(membershipJsonLd) }}
      />

      <section className="px-4 md:px-6 py-6 border-b border-text-primary/10">
        <div className="max-w-6xl mx-auto flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2 text-sm font-semibold text-text-secondary">
            <ArrowLeft size={16} />
            Home
          </Link>
          <Link href="/contact" className="text-sm font-semibold text-terracotta">
            Contact
          </Link>
        </div>
      </section>

      <section className="px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-6xl mx-auto">
          <p className="text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] text-terracotta mb-3">
            Gwalior study library pricing
          </p>
          <h1 className="text-[34px] md:text-6xl font-serif font-bold leading-tight mb-4">
            Adhyayan Library Membership Plans
          </h1>
          <p className="text-[14px] md:text-lg text-text-secondary leading-relaxed max-w-3xl">
            Compare membership options for Adhyayan Library in Padav, Gwalior.
            Plans are designed for students who need a quiet reading room,
            reserved cabin seating, WiFi, charging, lockers, and long study
            hours.
          </p>

          <div className="grid md:grid-cols-3 gap-4 md:gap-6 mt-8">
            {membershipPlans.map((plan) => (
              <article
                key={plan.slug}
                className="bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6"
              >
                <h2 className="font-serif font-bold text-2xl mb-2">
                  {plan.name}
                </h2>
                <p className="text-3xl font-bold text-terracotta mb-2">
                  ₹{plan.price}
                  <span className="text-sm text-text-secondary font-semibold">
                    {" "}/ {plan.period}
                  </span>
                </p>
                <p className="text-sm text-text-secondary leading-relaxed mb-5">
                  {plan.description}
                </p>
                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex gap-2 text-sm text-text-secondary">
                      <CheckCircle2 size={16} className="text-terracotta flex-shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/join?plan=${plan.slug}`}
                  className="block text-center bg-text-primary text-cream rounded-full px-5 py-3 text-sm font-bold"
                >
                  Enquire for {plan.name}
                </Link>
              </article>
            ))}
          </div>

          <aside className="mt-8 bg-cream rounded-[12px] md:rounded-2xl p-5 md:p-6">
            <h2 className="font-serif font-bold text-2xl mb-4">Before joining</h2>
            <div className="grid md:grid-cols-3 gap-4 text-sm text-text-secondary">
              <div className="flex gap-3">
                <MapPin className="text-terracotta flex-shrink-0" size={18} />
                <p>{business.streetAddress}, {business.locality}, {business.region} {business.postalCode}</p>
              </div>
              <div className="flex gap-3">
                <Clock className="text-terracotta flex-shrink-0" size={18} />
                <p>{business.hours}; night shift availability listed for members.</p>
              </div>
              <div className="flex gap-3">
                <Phone className="text-terracotta flex-shrink-0" size={18} />
                <p>
                  <a href={`tel:${business.phone}`} className="font-semibold text-terracotta">
                    {business.displayPhone}
                  </a>
                  <br />
                  <a href={`tel:${business.alternatePhone}`} className="font-semibold text-terracotta">
                    {business.alternateDisplayPhone}
                  </a>
                </p>
              </div>
            </div>
          </aside>
        </div>
      </section>
    </main>
  );
}
