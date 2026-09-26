import Link from "next/link";
import { CheckCircle2, MapPin, MessageCircle } from "lucide-react";
import { directionsUrl, membershipPlans, whatsappUrl } from "@/lib/site";

const comparisonPoints = [
  {
    factor: "A schedule you can sustain",
    evidence: "Choose a six-hour half day or full-day access instead of paying for time you will not use.",
  },
  {
    factor: "A focused desk setup",
    evidence: "Personal cabin-style desks, charging points, study lights, WiFi, and a silent AC hall support long sessions.",
  },
  {
    factor: "Storage that matches your routine",
    evidence: "Full-day students can choose between unreserved and reserved locker options.",
  },
  {
    factor: "A reachable location",
    evidence: "The centre is at 55, MLB Colony, Padav, close to central Gwalior and Gwalior Junction routes.",
  },
];

export default function BestLibraryGuide() {
  return (
    <section className="px-4 md:px-6 pb-12 md:pb-20">
      <div className="max-w-6xl mx-auto space-y-5 md:space-y-7">
        <article className="bg-cream rounded-[14px] md:rounded-2xl p-5 md:p-8">
          <p className="text-[11px] md:text-sm font-bold uppercase tracking-[0.08em] text-terracotta mb-2">
            Current monthly fees
          </p>
          <h2 className="text-[22px] md:text-4xl font-serif font-bold mb-3">
            Half-day and full-day library fees in Gwalior
          </h2>
          <p className="text-[13px] md:text-base text-text-secondary leading-relaxed max-w-3xl">
            Adhyayan Library keeps the choice simple: ₹550 for six hours,
            ₹750 for full-day access with an unreserved locker, and ₹850 for
            full-day access with a reserved locker. Confirm current seat and
            locker availability before visiting.
          </p>
          <div className="grid md:grid-cols-3 gap-3 mt-5">
            {membershipPlans.map((plan) => (
              <div key={plan.slug} className="bg-background rounded-xl p-4">
                <h3 className="font-bold text-[14px] md:text-lg">{plan.name}</h3>
                <p className="text-2xl font-bold text-terracotta mt-1">
                  ₹{plan.price}<span className="text-xs text-text-secondary"> / month</span>
                </p>
                <p className="text-[12px] md:text-sm text-text-secondary mt-2 leading-relaxed">
                  {plan.description}
                </p>
              </div>
            ))}
          </div>
          <Link
            href="/membership"
            className="inline-block mt-5 text-sm font-bold text-terracotta"
          >
            View complete membership details
          </Link>
        </article>

        <div className="grid lg:grid-cols-2 gap-5">
          <article className="bg-secondary-background rounded-[14px] md:rounded-2xl p-5 md:p-7">
            <h2 className="text-[20px] md:text-3xl font-serif font-bold mb-3">
              A UPSC and MPPSC study library near Padav
            </h2>
            <p className="text-[13px] md:text-base text-text-secondary leading-relaxed mb-4">
              If you searched for a “UPSC library near me” from Padav or central
              Gwalior, compare the daily routine before choosing a centre. The
              shortest commute, a reliable desk, quiet surroundings, power,
              internet, and hours you can follow consistently usually matter
              more than a long list of decorative amenities.
            </p>
            <p className="text-[13px] md:text-base text-text-secondary leading-relaxed">
              Adhyayan Library is intended for independent preparation for
              UPSC, MPPSC, SSC, banking, railway, NEET, JEE, NDA, CA, and
              college exams. It is a self-study space, not a coaching institute.
            </p>
          </article>

          <article className="bg-secondary-background rounded-[14px] md:rounded-2xl p-5 md:p-7">
            <h2 className="text-[20px] md:text-3xl font-serif font-bold mb-3">
              How to decide which library is best for you
            </h2>
            <ul className="space-y-3">
              {comparisonPoints.map((point) => (
                <li key={point.factor} className="flex gap-3">
                  <CheckCircle2 size={18} className="text-terracotta flex-shrink-0 mt-0.5" />
                  <p className="text-[12.5px] md:text-sm text-text-secondary leading-relaxed">
                    <strong className="text-text-primary">{point.factor}:</strong>{" "}
                    {point.evidence}
                  </p>
                </li>
              ))}
            </ul>
          </article>
        </div>

        <aside className="bg-text-primary text-cream rounded-[14px] md:rounded-2xl p-5 md:p-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h2 className="text-[19px] md:text-2xl font-serif font-bold">Check the room before you join</h2>
            <p className="text-[12.5px] md:text-sm text-cream/75 mt-1">
              Ask about today’s seat and locker availability, then visit the real Padav study space.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-2">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-burnt-orange text-white rounded-full px-5 py-3 text-sm font-bold"
            >
              <MessageCircle size={16} /> WhatsApp
            </a>
            <a
              href={directionsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-cream text-text-primary rounded-full px-5 py-3 text-sm font-bold"
            >
              <MapPin size={16} /> Directions
            </a>
          </div>
        </aside>
      </div>
    </section>
  );
}
