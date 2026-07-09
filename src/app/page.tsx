import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Features from "@/components/Features";
import About from "@/components/About";
import Pricing from "@/components/Pricing";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import LocalSeo, { FAQS } from "@/components/LocalSeo";
import { business, siteUrl } from "@/lib/site";

const structuredData = [
  {
    "@context": "https://schema.org",
    "@type": ["Library", "LocalBusiness"],
    "@id": `${siteUrl}/#localbusiness`,
    name: business.name,
    legalName: business.legalName,
    description: business.description,
    url: siteUrl,
    image: business.image,
    email: business.email,
    telephone: business.phone,
    priceRange: business.priceRange,
    openingHours: business.openingHours,
    address: {
      "@type": "PostalAddress",
      streetAddress: business.streetAddress,
      addressLocality: business.locality,
      addressRegion: business.region,
      postalCode: business.postalCode,
      addressCountry: business.country,
    },
    geo: {
      "@type": "GeoCoordinates",
      latitude: business.latitude,
      longitude: business.longitude,
    },
    contactPoint: [
      {
        "@type": "ContactPoint",
        telephone: business.phone,
        contactType: "customer service",
        areaServed: "Gwalior",
        availableLanguage: ["en", "hi"],
      },
      {
        "@type": "ContactPoint",
        telephone: business.alternatePhone,
        contactType: "customer service",
        areaServed: "Gwalior",
        availableLanguage: ["en", "hi"],
      },
    ],
    amenityFeature: [
      "Silent AC study hall",
      "175+ personal cabin desks",
      "High-speed WiFi",
      "Individual charging points",
      "Private lockers",
      "CCTV monitoring",
      "RO drinking water",
      "Daily Hindi and English newspapers",
    ].map((name) => ({
      "@type": "LocationFeatureSpecification",
      name,
      value: true,
    })),
    areaServed: [
      "Gwalior",
      "Padav",
      "Lashkar",
      "City Centre Gwalior",
      "Kampoo",
      "Phool Bagh",
    ],
    sameAs: business.sameAs,
  },
  {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: business.name,
    description: business.description,
    inLanguage: "en-IN",
    publisher: {
      "@id": `${siteUrl}/#localbusiness`,
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": `${siteUrl}/#faq`,
    mainEntity: FAQS.map((faq) => ({
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
    ],
  },
];

export default function Home() {
  return (
    <main className="relative bg-background">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <Navbar />
      <Hero />
      <Features />
      <About />
      <Testimonials />
      <Pricing />
      <LocalSeo />
      <Gallery />
      <Contact />
      <Footer />
    </main>
  );
}
