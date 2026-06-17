"use client";

import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Membership", href: "#pricing" },
  { name: "Gallery", href: "#gallery" },
  { name: "Contact", href: "#contact" },
];

const LogoIcon = () => (
  <div className="relative flex items-center justify-center w-10 h-10 bg-terracotta/10 rounded-xl mr-3 text-terracotta">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
    <div className="absolute -top-1 bg-cream rounded-full p-0.5 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-muted-gold">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
      </svg>
    </div>
  </div>
);

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky md:fixed top-0 left-0 right-0 z-50 md:px-6 md:py-4 bg-cream md:bg-transparent border-none">
      <div className="max-w-7xl mx-auto md:bg-cream md:border border-text-primary/10 md:shadow-md md:rounded-full px-4 md:px-6 py-3 md:py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center font-serif text-[16px] md:text-2xl font-bold text-text-primary tracking-tight md:tracking-tight tracking-[-0.01em]">
            <LogoIcon />
            <span>
              Adhyayan<span className="text-terracotta">Library</span>
            </span>
          </a>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-secondary hover:text-terracotta transition-colors text-sm font-medium"
            >
              {link.name}
            </a>
          ))}
          <a
            href="#pricing"
            className="bg-text-primary text-cream px-5 py-2 rounded-full text-sm font-medium hover:bg-terracotta transition-colors"
          >
            Join Now
          </a>
        </div>

        {/* Mobile Nav Toggle */}
        <button
          className="md:hidden text-text-primary p-1"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="md:hidden fixed inset-0 z-50 bg-cream/98 backdrop-blur-md flex flex-col justify-between px-6 py-4 pb-10 overflow-y-auto"
        >
          {/* Menu Header Area */}
          <div className="flex items-center justify-between w-full pt-1 pb-4">
            <a href="#" className="flex items-center font-serif text-[16px] font-bold text-text-primary tracking-[-0.01em]" onClick={() => setIsOpen(false)}>
              <LogoIcon />
              <span>
                Adhyayan<span className="text-terracotta">Library</span>
              </span>
            </a>
            <button
              className="text-text-primary p-1"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>

          {/* Menu Links */}
          <div className="flex flex-col space-y-6 my-auto py-8">
            {NAV_LINKS.map((link, idx) => (
              <motion.a
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: idx * 0.05, duration: 0.3 }}
                key={link.name}
                href={link.href}
                className="text-2xl font-serif font-bold text-text-primary flex items-center justify-between group"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.name}</span>
                <span className="text-terracotta text-sm font-sans font-bold tracking-wider opacity-60">
                  0{idx + 1}
                </span>
              </motion.a>
            ))}
          </div>

          {/* Bottom Container: CTA + Quick Contact */}
          <div className="space-y-6 pt-6 border-t border-secondary-background/60">
            <a
              href="#pricing"
              className="block w-full bg-burnt-orange text-white text-center py-3.5 rounded-xl font-bold text-[14px] shadow-[0_4px_14px_rgba(217,119,69,0.3)]"
              onClick={() => setIsOpen(false)}
            >
              Reserve a Cabin Desk
            </a>

            <div className="space-y-2">
              <p className="text-[10px] uppercase tracking-[0.08em] font-bold text-muted-gold">
                Quick Contact
              </p>
              <div className="text-xs font-semibold text-text-secondary space-y-1">
                <a href="tel:9425744080" className="block">+91 9425744080</a>
                <a href="mailto:ridhimaheshwari2004@gmail.com" className="block">ridhimaheshwari2004@gmail.com</a>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </nav>
  );
}

