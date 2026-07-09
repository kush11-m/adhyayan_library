import { BookOpenCheck, Clock, MapPin, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { business, seoPages } from "@/lib/site";

const SEARCH_INTENTS = [
  {
    icon: <BookOpenCheck size={22} />,
    title: "Competitive exam preparation",
    description:
      "A focused study library for UPSC, MPPSC, SSC, banking, railway, NEET, JEE, NDA, CA, and college exam aspirants in Gwalior.",
  },
  {
    icon: <MapPin size={22} />,
    title: "Padav location in Gwalior",
    description:
      "Located at 55, MLB Colony, Padav, Gwalior, with crawlable address details so students can find the centre in local search and maps.",
  },
  {
    icon: <Clock size={22} />,
    title: "Long study hours",
    description:
      "Daily study timing from 5:30 AM to 10:50 PM, with night shift availability for members who need extended preparation time.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "Facilities students search for",
    description:
      "AC silent hall, 175+ cabin desks, high-speed WiFi, charging points, lockers, CCTV, RO water, newspapers, and separate washrooms.",
  },
];

const FAQS = [
  {
    question: "Which is a good self study centre in Gwalior for competitive exams?",
    answer:
      "Adhyayan Library in Padav, Gwalior is built for serious competitive exam preparation with silent AC study halls, reserved cabin desks, WiFi, charging points, lockers, newspapers, and long daily study hours.",
  },
  {
    question: "Where is Adhyayan Library located in Gwalior?",
    answer:
      "Adhyayan Library is located at 55, MLB Colony, Padav, Gwalior, Madhya Pradesh 474002.",
  },
  {
    question: "What are the study timings at Adhyayan Library Gwalior?",
    answer:
      "The regular study hours are 5:30 AM to 10:50 PM, and a night shift option is also available for members.",
  },
  {
    question: "Does Adhyayan Library have cabin seats and WiFi?",
    answer:
      "Yes. Adhyayan Library offers 175+ personal cabin desks, high-speed WiFi, individual charging points, study lights, and private lockers.",
  },
];

export { FAQS };

export default function LocalSeo() {
  return (
    <section id="gwalior-library" className="py-10 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid lg:grid-cols-[0.9fr_1.1fr] gap-8 md:gap-12 items-start">
          <div>
            <p className="text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] text-terracotta mb-2">
              Library in Gwalior
            </p>
            <h2 className="text-[22px] md:text-5xl font-serif font-bold text-text-primary mb-3 md:mb-5 tracking-[-0.01em]">
              Self Study Centre in Padav for serious Gwalior aspirants
            </h2>
            <p className="text-[13px] md:text-lg text-text-secondary leading-relaxed">
              Students searching for a quiet reading room, AC library, or study
              centre near Padav, Lashkar, City Centre, Kampoo, Phool Bagh, and
              Gwalior Junction can use Adhyayan Library as a consistent daily
              preparation space. The centre is designed around what exam
              aspirants actually need: silence, fixed seating, long hours,
              internet, power, clean facilities, and a disciplined environment.
            </p>
            <address className="not-italic mt-5 md:mt-8 text-[12.5px] md:text-base text-text-secondary leading-relaxed bg-cream rounded-[10px] md:rounded-2xl p-4 md:p-5">
              <strong className="block text-text-primary mb-1">
                {business.name}
              </strong>
              {business.streetAddress}, {business.locality}, {business.region}{" "}
              {business.postalCode}
              <br />
              <a href={`tel:${business.phone}`} className="font-semibold text-terracotta">
                {business.displayPhone}
              </a>
              <span> | </span>
              <a
                href={`tel:${business.alternatePhone}`}
                className="font-semibold text-terracotta"
              >
                {business.alternateDisplayPhone}
              </a>
              <br />
              Daily hours: {business.hours}
            </address>
            <div className="flex flex-wrap gap-2 mt-4">
              {seoPages.map((page) => (
                <Link
                  key={page.slug}
                  href={`/${page.slug}`}
                  className="bg-text-primary text-cream rounded-full px-3.5 py-2 text-[11px] md:text-sm font-bold"
                >
                  {page.title}
                </Link>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-3 md:gap-5">
            {SEARCH_INTENTS.map((item) => (
              <article
                key={item.title}
                className="bg-cream md:glass rounded-[10px] md:rounded-2xl p-4 md:p-6"
              >
                <div className="w-10 h-10 rounded-[9px] bg-secondary-background flex items-center justify-center text-terracotta mb-3">
                  {item.icon}
                </div>
                <h3 className="font-bold text-text-primary text-[14px] md:text-lg mb-1.5">
                  {item.title}
                </h3>
                <p className="text-[12px] md:text-sm text-text-secondary leading-relaxed">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>

        <div className="mt-8 md:mt-14">
          <h2 className="text-[19px] md:text-4xl font-serif font-bold text-text-primary mb-4">
            Questions students ask before choosing a library
          </h2>
          <div className="grid md:grid-cols-2 gap-3 md:gap-5">
            {FAQS.map((faq) => (
              <article key={faq.question} className="bg-cream rounded-[10px] md:rounded-2xl p-4 md:p-6">
                <h3 className="font-bold text-text-primary text-[13.5px] md:text-lg mb-2">
                  {faq.question}
                </h3>
                <p className="text-[12px] md:text-sm text-text-secondary leading-relaxed">
                  {faq.answer}
                </p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
