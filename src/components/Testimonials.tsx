"use client";

import { motion } from "framer-motion";
import { Armchair, Clock, Droplets, Lock, MapPin, ShieldCheck, Wifi, Wind } from "lucide-react";
import { business } from "@/lib/site";

const PROOF_POINTS = [
  {
    icon: <MapPin size={22} />,
    title: "Verified Padav address",
    detail: `${business.streetAddress}, ${business.locality}, ${business.region} ${business.postalCode}`,
  },
  {
    icon: <Clock size={22} />,
    title: "Long daily study hours",
    detail: `${business.hours}, with night shift availability listed for members.`,
  },
  {
    icon: <Armchair size={22} />,
    title: "175+ cabin desks",
    detail: "Personal cabin-style seating for students who need a fixed daily preparation setup.",
  },
  {
    icon: <Wind size={22} />,
    title: "Silent AC study hall",
    detail: "A quiet, air-conditioned reading room environment for long self-study sessions.",
  },
  {
    icon: <Wifi size={22} />,
    title: "WiFi and charging",
    detail: "High-speed internet, individual charging points, and study lights for online and offline preparation.",
  },
  {
    icon: <Lock size={22} />,
    title: "Private lockers",
    detail: "Personal storage options for books, notes, and daily study material.",
  },
  {
    icon: <ShieldCheck size={22} />,
    title: "CCTV monitoring",
    detail: "Security-focused study environment for students and parents comparing libraries in Gwalior.",
  },
  {
    icon: <Droplets size={22} />,
    title: "RO drinking water",
    detail: "Hot, normal, and chilled RO water availability for members during study hours.",
  },
];

export default function Testimonials() {
  return (
    <section id="facilities-proof" className="py-10 md:py-20 bg-secondary-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[19px] md:text-5xl font-serif font-bold text-text-primary mb-1 md:mb-4 tracking-[-0.01em] md:tracking-normal"
          >
            Why students shortlist Adhyayan Library
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[12.5px] md:text-lg text-text-secondary"
          >
            Clear facilities, address, and study timings for students comparing libraries and self-study centres in Gwalior.
          </motion.p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 md:gap-5">
          {PROOF_POINTS.map((point, index) => (
            <motion.article
              key={point.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-cream rounded-[10px] md:rounded-2xl p-4 md:p-5"
            >
              <div className="w-9 h-9 rounded-[9px] bg-secondary-background flex items-center justify-center text-terracotta mb-3">
                {point.icon}
              </div>
              <h3 className="font-bold text-text-primary text-[13px] md:text-lg mb-1.5">
                {point.title}
              </h3>
              <p className="text-[11.5px] md:text-sm text-text-secondary leading-relaxed">
                {point.detail}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
