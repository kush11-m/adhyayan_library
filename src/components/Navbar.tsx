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
    <nav className="fixed top-0 left-0 right-0 z-50 px-4 md:px-6 py-3 md:py-4">
      <div className="max-w-7xl mx-auto glass rounded-full px-4 md:px-6 py-2 md:py-3 flex items-center justify-between">
        <div className="flex items-center">
          <a href="#" className="flex items-center font-serif text-xl md:text-2xl font-bold text-text-primary tracking-tight">
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

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className="md:hidden absolute top-16 left-6 right-6 glass rounded-2xl p-6 flex flex-col space-y-4"
        >
          {NAV_LINKS.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-text-primary text-lg font-medium hover:text-terracotta transition-colors"
              onClick={() => setIsOpen(false)}
            >
              {link.name}
            </a>
          ))}
        </motion.div>
      )}
    </nav>
  );
}
