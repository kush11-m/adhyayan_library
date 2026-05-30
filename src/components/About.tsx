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
    <section id="about" className="py-24 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        
        {/* Left Image */}
        <motion.div 
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative h-[350px] md:h-[600px] rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80" 
            alt="Interior of Adhyayan Library"
            className="absolute inset-0 w-full h-full object-cover hover:scale-105 transition-transform duration-700"
          />
        </motion.div>

        {/* Right Content */}
        <motion.div 
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="glass p-6 md:p-12 rounded-[24px] md:rounded-[40px]"
        >
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-6">
            About Adhyayan Library
          </h2>
          <p className="text-lg text-text-secondary leading-relaxed mb-8">
            Adhyayan Library was created to provide students with a distraction-free environment where focus, consistency, and productivity become a daily habit. Every aspect of the space is designed to help learners stay committed to their academic goals.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            {FEATURES.map((feature, index) => (
              <div key={index} className="flex items-center space-x-3">
                <CheckCircle2 className="text-terracotta flex-shrink-0" size={20} />
                <span className="text-text-primary font-medium">{feature}</span>
              </div>
            ))}
          </div>

          <div className="mb-10 pt-6 border-t border-text-primary/5">
            <h4 className="text-sm font-semibold text-muted-gold mb-2">Who It's For</h4>
            <p className="text-text-secondary text-sm mb-4">Ideal for students preparing for competitive exams who need a distraction-free space:</p>
            <div className="flex flex-wrap gap-2">
              {["UPSC", "SSC", "BANKING", "NEET", "JEE", "NDA"].map((exam) => (
                <span key={exam} className="px-4 py-2 bg-secondary text-text-primary rounded-full font-semibold text-sm hover:bg-terracotta hover:text-cream transition-all duration-300 shadow-sm cursor-default">
                  {exam}
                </span>
              ))}
            </div>
          </div>

          <button className="bg-text-primary text-cream px-8 py-4 rounded-full font-medium hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-1 duration-200">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
