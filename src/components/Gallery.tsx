"use client";

import { useState } from "react";
import Image from "next/image";
import { ChevronDown } from "lucide-react";

const IMAGES = [
  { src: "/images/library/hero-study-hall.webp", alt: "Wide central aisle and cabin desks inside Adhyayan Library Gwalior" },
  { src: "/images/library/private-study-cubicles.webp", alt: "Private wooden study cubicles with Indian flags at Adhyayan Library" },
  { src: "/images/library/student-study-room.webp", alt: "Student working quietly in the Adhyayan Library reading room" },
  { src: "/images/library/focused-students.webp", alt: "Gwalior students preparing at personal cabin desks" },
  { src: "/images/library/window-study-room.webp", alt: "Bright AC study room with rows of dedicated desks in Padav" },
  { src: "/images/library/adhyayan-library-sign.webp", alt: "Illuminated Adhyayan Library sign at the Padav centre" },
];

export default function Gallery() {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <section id="gallery" className="py-6 md:py-24 bg-background">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="text-left md:text-center max-w-2xl mx-auto mb-4 md:mb-16">
          <h2 className="text-[19px] md:text-5xl font-serif font-bold text-text-primary mb-1 md:mb-4 tracking-[-0.01em] md:tracking-normal">
            Inside Adhyayan
          </h2>
          <p className="text-[12.5px] md:text-lg text-text-secondary">
            Designed for focus, comfort, and productivity.
          </p>
        </div>

        <div className="relative">
          <div className={`overflow-hidden relative ${isExpanded ? "" : "md:max-h-[480px]"}`}>
            <div id="library-photo-grid" className="grid grid-cols-3 gap-[6px] md:block md:columns-2 lg:columns-3 md:gap-6 md:space-y-6">
              {IMAGES.map((image) => (
                <div
                  key={image.src}
                  className="break-inside-avoid relative rounded-[7px] md:rounded-3xl overflow-hidden mb-0 md:mb-6 h-[76px] md:h-auto"
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={800}
                    height={600}
                    sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 33vw"
                    className="w-full h-full md:h-auto object-cover"
                  />
                </div>
              ))}
            </div>

            {/* Gradient Overlay to fade out bottom content when collapsed */}
            {!isExpanded && (
              <div className="hidden md:block absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-background to-transparent pointer-events-none z-10" />
            )}
          </div>

          {/* Show More / Show Less Toggle Button */}
          <div className="hidden md:flex justify-center mt-12 relative z-20">
            <button 
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              aria-controls="library-photo-grid"
              className="glass text-text-primary px-8 py-4 rounded-full font-medium flex items-center space-x-2 shadow-lg"
            >
              <span>{isExpanded ? "Show Less" : "Explore Gallery"}</span>
              <div className={`transition-transform duration-300 ${isExpanded ? "rotate-180" : ""}`}>
                <ChevronDown className="w-5 h-5 text-terracotta" />
              </div>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
