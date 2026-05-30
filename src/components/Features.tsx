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
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

export default function Features() {
  return (
    <section className="py-24 bg-secondary-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4"
          >
            Built For Serious Learners
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Every detail is meticulously crafted to support your academic journey.
          </motion.p>
        </div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {FEATURES.map((feature, index) => (
            <motion.div 
              key={index}
              variants={itemVariants}
              className="glass p-6 md:p-8 rounded-[24px] md:rounded-[32px] hover:-translate-y-2 transition-transform duration-300 group"
            >
              <div className="bg-cream w-14 h-14 rounded-2xl flex items-center justify-center text-terracotta mb-6 group-hover:bg-terracotta group-hover:text-cream transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-text-primary mb-3">{feature.title}</h3>
              <p className="text-text-secondary leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
