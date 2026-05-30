"use client";

import { motion } from "framer-motion";
import { Star, Wifi, BookOpen, Armchair, Moon, Clock, Wind } from "lucide-react";

export default function Hero() {
  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 overflow-hidden bg-background">
      {/* Subtle background grain/gradient can be added here if needed */}
      <div className="absolute inset-0 bg-gradient-to-br from-cream to-background opacity-50 z-0"></div>

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 w-full h-full pb-16">
        
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col space-y-8"
        >
          <div className="space-y-4">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-text-primary leading-tight">
              Where <span className="text-terracotta">Focus</span> <br /> Meets Success
            </h1>
            
            <p className="text-base md:text-xl text-text-secondary max-w-lg leading-relaxed">
              A premium study environment designed for students, aspirants, and professionals who are serious about achieving their goals.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 pt-4">
            <a href="#pricing" className="bg-text-primary text-cream px-8 py-4 rounded-full font-medium hover:bg-terracotta transition-colors text-center shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
              Join Adhyayan Today
            </a>
            <a href="#about" className="glass text-text-primary px-8 py-4 rounded-full font-medium hover:bg-white/50 transition-colors text-center">
              Explore Library
            </a>
          </div>
        </motion.div>

        {/* Right Image & Floating Cards */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          className="relative h-[400px] md:h-[600px] w-full rounded-[24px] md:rounded-[40px] overflow-hidden shadow-2xl"
        >
          <img 
            src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80" 
            alt="Students studying in a premium modern library"
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/10"></div>

          {/* Floating Cards */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="absolute top-6 left-6 md:top-8 md:left-8 glass-dark px-6 py-4 rounded-2xl flex items-center space-x-4"
          >
            <div className="bg-terracotta/20 p-3 rounded-full text-terracotta">
              <Armchair size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">175+</p>
              <p className="text-white/70 text-sm">Dedicated Cabins</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.5 }}
            className="absolute bottom-6 left-6 md:bottom-8 md:left-8 glass-dark px-6 py-4 rounded-2xl flex items-center space-x-4"
          >
            <div className="bg-muted-gold/20 p-3 rounded-full text-muted-gold">
              <Moon size={24} />
            </div>
            <div>
              <p className="text-white font-bold text-xl">Night Shift</p>
              <p className="text-white/70 text-sm">Option Available</p>
            </div>
          </motion.div>

          <motion.div 
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-1/2 -translate-y-1/2 right-6 md:right-8 glass-dark px-6 py-4 rounded-2xl flex flex-col space-y-3"
          >
            <div className="flex items-center space-x-3 text-white/90">
              <Wind size={18} className="text-terracotta" />
              <span className="text-sm">AC Study Hall</span>
            </div>
            <div className="flex items-center space-x-3 text-white/90">
              <Clock size={18} className="text-terracotta" />
              <span className="text-sm">5:30 AM - 10:50 PM</span>
            </div>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
