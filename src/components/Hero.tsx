"use client";

import { motion } from "framer-motion";
import { Star, Armchair, Moon, Clock, Wind } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-0 md:min-h-screen md:flex md:items-center pt-[22px] md:pt-24 pb-8 md:pb-0 overflow-hidden bg-background">
      {/* Subtle background grain/gradient can be added here if needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-background opacity-50 z-0"></div>

      {/* Animated Glowing Blobs */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-terracotta/20 rounded-full blur-[80px] md:blur-[120px] animate-blob pointer-events-none z-0"></div>
      <div className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] bg-muted-gold/20 rounded-full blur-[80px] md:blur-[120px] animate-blob pointer-events-none z-0" style={{ animationDelay: "3.5s" }}></div>

      <div className="max-w-7xl mx-auto px-4 md:px-6 grid md:grid-cols-2 gap-6 md:gap-12 items-center relative z-10 w-full h-full pb-10 md:pb-16">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-4 md:space-y-8 mt-0"
        >
          {/* Gwalior Badge */}
          <div className="inline-flex items-center self-start space-x-1.5 bg-cream/80 px-3 py-1 rounded-full shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-terracotta animate-pulse"></span>
            <span className="text-text-primary text-[10px] md:text-xs font-bold uppercase tracking-[0.08em]">
              Padav, Gwalior Self Study Centre
            </span>
          </div>

          <div className="space-y-3 md:space-y-4">
            <h1 className="text-[32px] leading-[1.12] sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-primary tracking-[-0.02em] md:tracking-normal md:leading-tight">
              Gwalior Library For <span className="text-terracotta italic font-normal">Focused</span> <br className="md:hidden" /> Self Study
            </h1>
            
            <p className="text-[14px] md:text-xl text-text-secondary max-w-[360px] md:max-w-lg leading-relaxed mt-2 mb-1 md:my-0 font-medium">
              Adhyayan Library in Padav, Gwalior gives students and exam aspirants a silent AC reading room, personal cabin desks, WiFi, lockers, and long study hours.
            </p>

            {/* Social Proof Review Indicator */}
            <div className="flex items-center space-x-1.5 pt-0.5 pb-1">
              <div className="flex text-muted-gold space-x-0.5">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={11} className="fill-current" />
                ))}
              </div>
              <span className="text-[11px] md:text-sm font-semibold text-text-secondary">Loved by 500+ Gwalior Students</span>
            </div>
          </div>

          <div className="flex flex-col gap-2.5 pt-1 md:pt-4 mb-2 md:mb-0 w-full sm:flex-row">
            <a 
              href="#pricing" 
              className="w-full text-center bg-burnt-orange text-cream px-6 py-3.5 rounded-xl font-bold text-[13.5px] shadow-[0_4px_14px_rgba(217,119,69,0.35)] md:w-auto md:bg-text-primary md:text-cream md:px-8 md:py-4 md:rounded-full md:text-base md:shadow-lg"
            >
              Reserve a Cabin Desk
            </a>
            <a 
              href="#about" 
              className="w-full text-center bg-cream/50 text-text-primary px-6 py-3.5 rounded-xl font-bold text-[13.5px] backdrop-blur-sm md:w-auto md:bg-cream/30 md:border md:border-transparent md:glass md:px-8 md:py-4 md:rounded-full md:text-base"
            >
              Take a Virtual Tour
            </a>
          </div>
        </motion.div>

        {/* Right Image & Floating Cards */}
        <div className="relative h-[200px] md:h-[600px] w-full rounded-2xl md:rounded-[40px] overflow-hidden shadow-sm md:shadow-2xl mt-4 mb-4 md:my-0 border-none md:border md:border-secondary-background/40">
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students studying in a silent AC self study library in Gwalior"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Premium Tag Over Image */}
          <div className="absolute top-3 right-3 bg-white/85 backdrop-blur-md px-2.5 py-1 rounded-lg text-[9px] font-bold text-text-primary uppercase tracking-[0.05em] shadow-sm">
            Focus & Success
          </div>

          {/* Floating Cards (Hidden on mobile to reduce clutter) */}
          <div className="hidden md:flex absolute top-8 left-8 glass-dark px-6 py-4 rounded-2xl items-center space-x-4">
            <div className="bg-terracotta/20 p-3 rounded-full text-terracotta">
              <Armchair size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">175+</p>
              <p className="text-white/70 text-sm">Dedicated Cabins</p>
            </div>
          </div>

          <div className="hidden md:flex absolute bottom-8 left-8 glass-dark px-6 py-4 rounded-2xl items-center space-x-4">
            <div className="bg-muted-gold/20 p-3 rounded-full text-muted-gold">
              <Moon size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">Night Shift</p>
              <p className="text-white/70 text-sm">Option Available</p>
            </div>
          </div>

          <div className="hidden md:flex absolute top-1/2 -translate-y-1/2 right-8 glass-dark px-6 py-4 rounded-2xl flex-col space-y-3">
            <div className="flex items-center space-x-3 text-white/90">
              <Wind size={18} className="text-terracotta" />
              <span className="text-sm">AC Study Hall</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <Clock size={18} className="text-terracotta" />
              <span className="text-sm">5:30 AM - 10:50 PM</span>
            </div>
          </div>
        </div>

        {/* Mobile Stats Dashboard */}
        <div className="bg-cream/50 rounded-2xl p-4 shadow-sm mt-3 md:hidden">
          <div className="grid grid-cols-3 divide-x divide-secondary-background/80">
            <div className="text-center px-1">
              <div className="font-serif font-bold text-[17px] text-terracotta">175+</div>
              <div className="text-[9px] font-bold text-text-secondary uppercase tracking-[0.05em] mt-0.5">Cabin Desks</div>
            </div>
            <div className="text-center px-1">
              <div className="font-serif font-bold text-[17px] text-terracotta">Night Shift</div>
              <div className="text-[9px] font-bold text-text-secondary uppercase tracking-[0.05em] mt-0.5">24/7 Option</div>
            </div>
            <div className="text-center px-1">
              <div className="font-serif font-bold text-[17px] text-terracotta">AC Hall</div>
              <div className="text-[9px] font-bold text-text-secondary uppercase tracking-[0.05em] mt-0.5">Silent Zone</div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
