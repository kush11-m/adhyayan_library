"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";

const IMAGES = [
  "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1521737711867-e3b97375f902?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1497215728101-856f4ea42174?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80"
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="gallery" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4"
          >
            Inside Adhyayan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-text-secondary text-lg"
          >
            Designed for focus, comfort, and productivity.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div 
            initial={false}
            animate={{ height: isExpanded ? "auto" : "480px" }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden relative"
          >
            <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
              {IMAGES.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid relative rounded-3xl overflow-hidden group cursor-pointer"
                >
                  <img 
                    src={src} 
                    alt={`Adhyayan Library Gallery Image ${index + 1}`} 
                    className="w-full h-auto object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
                  />
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </motion.div>
              ))}
            </div>

            {/* Gradient Overlay to fade out bottom content when collapsed */}
            {!isExpanded && (
              <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            )}
          </motion.div>

          {/* Show More / Show Less Toggle Button */}
          <div className="flex justify-center mt-12 relative z-20">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="glass text-text-primary px-8 py-4 rounded-full font-medium hover:bg-white/50 transition-all flex items-center space-x-2 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transform duration-200"
            >
              <span>{isExpanded ? "Show Less" : "Explore Gallery"}</span>
              <motion.div
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <ChevronDown className="w-5 h-5 text-terracotta" />
              </motion.div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

