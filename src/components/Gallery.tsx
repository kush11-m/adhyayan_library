"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <section id="gallery" className="py-6 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-4 md:mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-[19px] md:text-5xl font-serif font-bold text-text-primary mb-1 md:mb-4 tracking-[-0.01em] md:tracking-normal"
          >
            Inside Adhyayan
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-[12.5px] md:text-lg text-text-secondary"
          >
            Designed for focus, comfort, and productivity.
          </motion.p>
        </div>

        <div className="relative">
          <motion.div 
            initial={false}
            animate={{ height: isMobile ? "auto" : (isExpanded ? "auto" : "480px") }}
            transition={{ duration: 0.6, ease: [0.04, 0.62, 0.23, 0.98] }}
            className="overflow-hidden relative"
          >
            <div className="grid grid-cols-3 gap-[6px] md:block md:columns-2 lg:columns-3 md:gap-6 md:space-y-6">
              {IMAGES.map((src, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="break-inside-avoid relative rounded-[7px] md:rounded-3xl overflow-hidden mb-0 md:mb-6 h-[76px] md:h-auto"
                >
                  <Image
                    src={src}
                    alt={`Adhyayan Library Gallery Image ${index + 1}`}
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 33vw"
                    className="w-full h-full md:h-auto object-cover"
                  />
                </motion.div>
              ))}
            </div>

            {/* Gradient Overlay to fade out bottom content when collapsed */}
            {!isExpanded && (
              <div className="hidden md:block absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            )}
          </motion.div>

          {/* Show More / Show Less Toggle Button */}
          <div className="hidden md:flex justify-center mt-12 relative z-20">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              className="glass text-text-primary px-8 py-4 rounded-full font-medium flex items-center space-x-2 shadow-lg"
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
