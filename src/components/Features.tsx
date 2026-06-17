"use client";

import { motion } from "framer-motion";
import { Armchair, Wind, Zap, Lock, Wifi, Droplets, BookOpen, ShieldCheck, Users } from "lucide-react";

const FEATURES = [
  {
    icon: <Armchair size={28} />,
    title: "Personal Cabins (175+ Seats)",
    description: "Fixed & dedicated desks with premium comfortable seating designed for long study hours."
  },
  {
    icon: <Wind size={28} />,
    title: "Noise-Free Full AC",
    description: "Fully air-conditioned, pin-drop silent halls running all day to keep you focused."
  },
  {
    icon: <Zap size={28} />,
    title: "Power & Study Setup",
    description: "Individual power charging points and dedicated study lights at every single desk."
  },
  {
    icon: <Lock size={28} />,
    title: "Private Lockers",
    description: "Secure, personal lockers for every member to store books and valuables safely."
  },
  {
    icon: <Wifi size={28} />,
    title: "High-Speed WiFi",
    description: "Enterprise-grade high-speed internet connectivity for uninterrupted learning."
  },
  {
    icon: <Droplets size={28} />,
    title: "Free RO Water",
    description: "Purified hot, normal, and chilled RO drinking water available 24/7."
  },
  {
    icon: <BookOpen size={28} />,
    title: "Daily Newspapers",
    description: "Hindi and English newspapers updated daily to keep you current with news."
  },
  {
    icon: <ShieldCheck size={28} />,
    title: "Safe & Secure",
    description: "24/7 CCTV camera monitoring and trusted environment to study peacefully."
  },
  {
    icon: <Users size={28} />,
    title: "Separate Washrooms",
    description: "Regularly cleaned, separate washroom facilities for boys and girls."
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
} as const;

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } }
} as const;

export default function Features() {
  return (
    <section className="py-10 md:py-20 bg-secondary-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-6 md:mb-12">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[19px] md:text-4xl lg:text-5xl font-serif font-bold text-text-primary mb-1 md:mb-4 tracking-[-0.01em] md:tracking-normal"
          >
            Built For Serious Learners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[12.5px] md:text-lg text-text-secondary"
          >
            Every detail is meticulously crafted to support your academic journey.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 lg:grid-cols-3 gap-3 md:gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="bg-cream md:glass p-4 md:p-8 rounded-[10px] md:rounded-[32px] transition-all duration-300 border-none md:border md:border-transparent"
            >
              <div className="bg-secondary-background md:bg-cream w-[26px] h-[26px] md:w-14 md:h-14 rounded-[7px] md:rounded-2xl flex items-center justify-center text-terracotta mb-2 md:mb-6 [&>svg]:w-3.5 [&>svg]:h-3.5 md:[&>svg]:w-7 md:[&>svg]:h-7">
                {feature.icon}
              </div>
              <h3 className="text-[12.5px] md:text-xl font-bold text-text-primary mb-[3px] md:mb-3 leading-[1.3] md:leading-tight">{feature.title}</h3>
              <p className="text-[11px] md:text-base text-text-secondary leading-[1.4] md:leading-relaxed m-0">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
