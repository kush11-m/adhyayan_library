"use client";

import { MapPin, Phone, Mail } from "lucide-react";
import { motion } from "framer-motion";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[15px] h-[15px] md:w-[20px] md:h-[20px]">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LogoIcon = () => (
  <div className="relative flex items-center justify-center w-8 h-8 md:w-10 md:h-10 bg-cream/10 rounded-[8px] md:rounded-xl mr-2.5 md:mr-3 text-cream">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-[17px] h-[17px] md:w-6 md:h-6">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
    <div className="absolute -top-1 bg-[#2C241D] rounded-full p-0.5 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-2 h-2 md:w-3 md:h-3 text-muted-gold">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
      </svg>
    </div>
  </div>
);

const linkVariants = {
  hidden: { opacity: 0, x: -10 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.1, duration: 0.3 }
  })
};

export default function Footer() {
  return (
    <footer className="bg-[#2C241D] text-cream/80 pt-10 pb-[25px] md:pt-20 md:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          
          {/* Brand */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="space-y-4 md:space-y-6"
          >
            <h3 className="flex items-center font-serif text-[21px] md:text-3xl font-bold text-cream tracking-tight">
              <LogoIcon />
              <span>
                Adhyayan<span className="text-terracotta">Library</span>
              </span>
            </h3>
            <p className="text-[12.5px] md:text-base text-cream/70 leading-[1.6] md:leading-relaxed max-w-[280px] md:max-w-xs">
              Gwalior's premium self-study center. Creating an environment where discipline, focus, and success thrive.
            </p>
            <div className="flex space-x-3 md:space-x-4">
              <a href="#" className="w-[32px] h-[32px] md:w-10 md:h-10 rounded-full bg-cream/10 flex items-center justify-center transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-[32px] h-[32px] md:w-10 md:h-10 rounded-full bg-cream/10 flex items-center justify-center transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-[32px] h-[32px] md:w-10 md:h-10 rounded-full bg-cream/10 flex items-center justify-center transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </motion.div>


          {/* Links Wrapper for Mobile Grid */}
          <div className="grid grid-cols-2 gap-6 md:gap-12 md:col-span-2 w-full">
            {/* Quick Links */}
            <div>
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[13px] md:text-lg text-cream font-bold mb-4 md:mb-6"
              >
                Quick Links
              </motion.h4>
              <ul className="space-y-[10px] md:space-y-4">
                {["Home", "About Us", "Gallery", "Testimonials"].map((link, i) => (
                  <motion.li 
                    key={link}
                    custom={i}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={linkVariants}
                  >
                    <a href={`#${link.toLowerCase().replace(" ", "")}`} className="text-[11px] md:text-base transition-colors flex items-center gap-1 group">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>

            {/* Membership & Contact */}
            <div>
              <motion.h4 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                className="text-[13px] md:text-lg text-cream font-bold mb-4 md:mb-6"
              >
                Membership Plans
              </motion.h4>
              <ul className="space-y-[10px] md:space-y-4 mb-0 md:mb-8">
                {["Basic Plan", "Standard Plan", "Premium Plan"].map((link, i) => (
                  <motion.li 
                    key={link}
                    custom={i + 4}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    variants={linkVariants}
                  >
                    <a href="#pricing" className="text-[11px] md:text-base transition-colors flex items-center gap-1 group">
                      {link}
                    </a>
                  </motion.li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="border-t border-white/10 pt-5 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-[10px] md:text-sm"
        >
          <p>© 2026 Adhyayan Library. All Rights Reserved.</p>
          <div className="flex space-x-4 md:space-x-6">
            <a href="#" className="transition-colors">Privacy Policy</a>
            <a href="#" className="transition-colors">Terms of Service</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}
