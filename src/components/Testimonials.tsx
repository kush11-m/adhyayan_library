"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const TESTIMONIALS = [
  {
    name: "Rohan Sharma",
    course: "UPSC Aspirant",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    review: "Adhyayan has completely transformed my preparation. The silent environment and comfortable seating allow me to study for 10-12 hours straight without any fatigue. Worth every penny."
  },
  {
    name: "Sneha Patel",
    course: "Medical Student",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    review: "The high-speed WiFi and extended hours are exactly what I needed. The ambiance here feels incredibly premium and motivates me to push my limits every single day."
  },
  {
    name: "Karan Verma",
    course: "CA Finalist",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80",
    review: "I've tried multiple libraries, but none compare to Adhyayan. The cleanliness, the management, and the overall peaceful vibe make it the best place for serious students."
  }
];

export default function Testimonials() {
  const doubleTestimonials = [...TESTIMONIALS, ...TESTIMONIALS];

  return (
    <section id="testimonials" className="py-24 bg-secondary-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4"
          >
            What Students Say
          </motion.h2>
        </div>
      </div>

      {/* Infinite scrolling marquee container */}
      <div className="relative w-full overflow-hidden flex py-4 select-none">
        {/* Subtle blur gradients on sides for premium editorial look */}
        <div className="absolute top-0 bottom-0 left-0 w-20 bg-gradient-to-r from-secondary-background to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-20 bg-gradient-to-l from-secondary-background to-transparent z-10 pointer-events-none"></div>

        <div className="flex animate-marquee gap-6 hover:[animation-play-state:paused] w-max">
          {doubleTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="glass p-6 rounded-[24px] w-[300px] md:w-[360px] flex-shrink-0 flex flex-col justify-between whitespace-normal"
            >
              <div>
                <div className="flex text-muted-gold mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} className="fill-current" />
                  ))}
                </div>
                <p className="text-text-secondary text-sm md:text-base leading-relaxed mb-4 italic">
                  "{testimonial.review}"
                </p>
              </div>
              <div className="flex items-center space-x-3 mt-4 pt-4 border-t border-text-primary/5">
                <img 
                  src={testimonial.image} 
                  alt={testimonial.name}
                  className="w-10 h-10 rounded-full object-cover border border-cream shadow-sm" 
                />
                <div>
                  <h4 className="font-bold text-text-primary text-sm">{testimonial.name}</h4>
                  <p className="text-xs text-terracotta font-medium">{testimonial.course}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
