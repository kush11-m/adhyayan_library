"use client";

import { useEffect } from "react";
import Lenis from "lenis";

export default function ScrollManager() {
  useEffect(() => {
    // Initialize Lenis for premium smooth inertial scrolling
    const lenis = new Lenis({
      duration: 1.6, // Luxurious, slower scroll speed
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // Smooth exponential ease-out
      touchMultiplier: 2,
      infinite: false,
    });

    // Connect Lenis to requestAnimationFrame
    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Intercept anchor clicks and use Lenis for animated scrolling
    const handleAnchorClick = (e: MouseEvent) => {
      const anchor = (e.target as HTMLElement).closest("a");
      if (!anchor) return;

      const href = anchor.getAttribute("href");
      
      // If it's an anchor hash link
      if (href && href.startsWith("#")) {
        e.preventDefault();
        const targetId = href.substring(1);
        const targetElement = targetId ? document.getElementById(targetId) : document.body;
        
        if (targetElement) {
          lenis.scrollTo(targetElement, {
            offset: -80, // Offset to account for sticky navbar height
            duration: 1.8, // Elegant, slightly slower scroll to section
          });
        }
      }
    };

    document.addEventListener("click", handleAnchorClick);

    return () => {
      lenis.destroy();
      document.removeEventListener("click", handleAnchorClick);
    };
  }, []);

  return null;
}

