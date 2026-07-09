"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";

const FEATURES = [
  "Silent Environment",
  "Dedicated Study Desks",
  "High-Speed WiFi",
  "Comfortable Seating",
  "Air Conditioning",
  "Power Backup"
];

export default function About() {
  return (
    <section id="about" className="py-10 md:py-20 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6 grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
        
        {/* Left Image */}
        <div className="relative h-[180px] md:h-[600px] rounded-[10px] md:rounded-[40px] overflow-hidden shadow-none md:shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior of Adhyayan Library self study centre in Padav Gwalior"
            className="absolute inset-0 w-full h-full object-cover"
          />
        </div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="p-0 md:glass md:p-12 md:rounded-[40px]"
        >
          <h2 className="text-[19px] md:text-5xl font-serif font-bold text-text-primary mb-2 md:mb-6 tracking-[-0.01em] md:tracking-normal bg-clip-text text-transparent bg-gradient-to-r from-burnt-orange to-terracotta md:from-text-primary md:to-text-primary">
            About Adhyayan Library
          </h2>
          <p className="text-[13px] md:text-lg text-text-secondary leading-normal md:leading-relaxed mb-4 md:mb-8">
            Adhyayan Library was created to provide Gwalior students with a distraction-free self-study environment where focus, consistency, and productivity become a daily habit. Every aspect of the Padav reading room is designed to help learners stay committed to competitive exams and academic goals.
          </p>

          <div className="flex flex-wrap gap-[6px] md:gap-4 mb-6 md:mb-8 md:grid md:grid-cols-2">
            {FEATURES.map((feature, index) => (
              <motion.span 
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                key={index} 
                className="text-[11px] md:text-base font-semibold md:font-medium px-2.5 py-1.5 md:px-0 md:py-0 rounded-full md:rounded-none bg-secondary-background md:bg-transparent text-text-primary flex items-center md:space-x-3"
              >
                <CheckCircle2 className="hidden md:block text-terracotta flex-shrink-0" size={20} />
                <span>{feature}</span>
              </motion.span>
            ))}
          </div>

          <div className="bg-cream md:bg-transparent border-none md:border-t md:border-text-primary/5 rounded-[10px] md:rounded-none p-3.5 md:p-0 mb-0 md:mb-10 md:pt-6">
            <h4 className="text-[13.5px] md:text-sm font-bold md:font-semibold text-text-primary md:text-muted-gold mb-1.5 md:mb-2">Who It&apos;s For</h4>
            <p className="text-[12px] md:text-sm text-text-secondary mb-2.5 md:mb-4">Ideal for Gwalior students preparing for competitive exams who need a distraction-free space:</p>
            <div className="flex flex-wrap gap-1.5 md:gap-2">
              {["UPSC", "SSC", "BANKING", "NEET", "JEE", "NDA"].map((exam, index) => (
                <motion.span 
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  key={exam} 
                  className="px-2.5 py-1 md:px-4 md:py-2 bg-burnt-orange md:bg-secondary text-white md:text-text-primary rounded-full font-bold md:font-semibold text-[10.5px] md:text-sm transition-all duration-300 md:shadow-sm cursor-default"
                >
                  {exam}
                </motion.span>
              ))}
            </div>
          </div>

          <button 
            className="hidden md:block bg-text-primary text-cream px-8 py-4 rounded-full font-medium transition-colors md:shadow-lg mt-8"
          >
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
