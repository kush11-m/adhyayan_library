"use client";

import React, { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, ArrowLeft, CheckCircle2, User, Mail, MessageSquare, BookOpen } from "lucide-react";

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

function JoinFormContent() {
  const searchParams = useSearchParams();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    plan: "general",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const planParam = searchParams.get("plan");
    if (planParam && ["basic", "standard", "premium"].includes(planParam)) {
      setFormData((prev) => ({ ...prev, plan: planParam }));
    }
  }, [searchParams]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) {
      alert("Please fill in your name and phone number.");
      return;
    }
    setLoading(true);
    // Simulate API request
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const planLabels: Record<string, string> = {
    basic: "Basic Plan (₹499/Month)",
    standard: "Monthly Pass - Standard (₹999/Month)",
    premium: "Premium Plan (₹1499/Month)",
    general: "General Enquiry",
  };

  return (
    <div className="min-h-screen bg-background flex flex-col justify-between selection:bg-terracotta/20">
      {/* Header */}
      <header className="px-6 py-6 border-b border-text-primary/5">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <Link href="/" className="flex items-center font-serif text-xl md:text-2xl font-bold text-text-primary tracking-tight">
            <LogoIcon />
            <span>
              Adhyayan<span className="text-terracotta">Library</span>
            </span>
          </Link>
          <Link href="/" className="flex items-center text-text-secondary hover:text-terracotta transition-colors text-sm font-medium gap-2">
            <ArrowLeft size={16} />
            <span>Back to Home</span>
          </Link>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center px-4 py-16 md:py-24">
        <div className="w-full max-w-2xl mx-auto">
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.div
                key="form-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -30 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="space-y-8"
              >
                {/* Form Intro */}
                <div className="text-center">
                  <h1 className="text-4xl md:text-5xl font-serif font-bold text-text-primary mb-4 tracking-tight">
                    Secure Your Cabin
                  </h1>
                  <p className="text-text-secondary text-lg max-w-md mx-auto">
                    Fill out the form below to enquire and reserve your preferred study slot.
                  </p>
                </div>

                {/* Form Card */}
                <div className="glass p-6 md:p-10 rounded-[28px] md:rounded-[40px] shadow-xl border border-white/30">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <User size={16} className="text-terracotta" />
                        Full Name <span className="text-terracotta">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary"
                        placeholder="e.g. Rahul Sharma"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                          <Phone size={16} className="text-terracotta" />
                          Phone Number <span className="text-terracotta">*</span>
                        </label>
                        <input
                          type="tel"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary"
                          placeholder="e.g. 9876543210"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                          <Mail size={16} className="text-terracotta" />
                          Email Address
                        </label>
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary"
                          placeholder="e.g. rahul@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <BookOpen size={16} className="text-terracotta" />
                        Selected Membership Plan
                      </label>
                      <select
                        name="plan"
                        value={formData.plan}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all text-text-primary appearance-none cursor-pointer"
                      >
                        <option value="basic">Basic Plan (₹499/Month)</option>
                        <option value="standard">Monthly Pass - Standard (₹999/Month)</option>
                        <option value="premium">Premium Plan (₹1499/Month)</option>
                        <option value="general">General Enquiry / Custom duration</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-semibold text-text-primary mb-2 flex items-center gap-2">
                        <MessageSquare size={16} className="text-terracotta" />
                        Message / Special Requirements
                      </label>
                      <textarea
                        name="message"
                        rows={3}
                        value={formData.message}
                        onChange={handleChange}
                        className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary resize-none"
                        placeholder="Mention any preferences, preferred study shift, or questions here..."
                      />
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-text-primary text-cream py-4 rounded-full font-medium hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 flex items-center justify-center gap-2 disabled:opacity-75 disabled:pointer-events-none"
                    >
                      {loading ? (
                        <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
                      ) : (
                        "Request Cabin Seat"
                      )}
                    </button>
                  </form>
                </div>

                {/* Direct Enquiry Section - Immediately Below the Form */}
                <motion.div 
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="bg-cream/40 border border-text-primary/5 rounded-[24px] p-6 text-center shadow-sm"
                >
                  <p className="text-text-secondary text-sm font-medium mb-4">
                    Have any questions before booking? Speak with us directly:
                  </p>
                  <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                    <a
                      href="tel:9425744080"
                      className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-terracotta hover:text-cream border border-text-primary/5 rounded-full text-text-primary font-medium text-sm transition-all shadow-sm hover:shadow"
                    >
                      <Phone size={14} className="text-terracotta hover:text-inherit" />
                      <span>+91 9425744080</span>
                    </a>
                    <a
                      href="tel:9340725050"
                      className="flex items-center gap-2 px-5 py-3 bg-white hover:bg-terracotta hover:text-cream border border-text-primary/5 rounded-full text-text-primary font-medium text-sm transition-all shadow-sm hover:shadow"
                    >
                      <Phone size={14} className="text-terracotta hover:text-inherit" />
                      <span>+91 9340725050</span>
                    </a>
                  </div>
                </motion.div>
              </motion.div>
            ) : (
              <motion.div
                key="success-card"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ type: "spring", duration: 0.5 }}
                className="glass p-8 md:p-12 rounded-[28px] md:rounded-[40px] text-center space-y-6 shadow-2xl border border-white/40"
              >
                <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 text-green-600 rounded-full mb-2">
                  <CheckCircle2 size={36} />
                </div>
                <h2 className="text-3xl md:text-4xl font-serif font-bold text-text-primary">
                  Membership Request Received!
                </h2>
                <div className="max-w-md mx-auto space-y-4">
                  <p className="text-text-secondary leading-relaxed">
                    Thank you, <span className="font-semibold text-text-primary">{formData.name}</span>. 
                    Your membership reservation request for the <span className="font-semibold text-terracotta">{planLabels[formData.plan] || formData.plan}</span> has been forwarded to <span className="font-semibold text-terracotta">ridhimaheshwari2004@gmail.com</span>.
                  </p>
                  <p className="text-text-secondary text-sm">
                    Our team will contact you at <span className="font-medium text-text-primary">{formData.phone}</span> shortly to confirm slot timings, seat availability, and setup options.
                  </p>
                </div>

                <hr className="border-text-primary/10 max-w-sm mx-auto my-6" />

                {/* Number mention on Success screen as well */}
                <div className="space-y-3">
                  <p className="text-xs text-text-secondary font-medium uppercase tracking-wider">
                    Need immediate confirmation?
                  </p>
                  <div className="flex justify-center gap-3">
                    <a href="tel:9425744080" className="text-terracotta hover:text-burnt-orange font-semibold text-sm transition-colors">
                      +91 9425744080
                    </a>
                    <span className="text-text-secondary/30">|</span>
                    <a href="tel:9340725050" className="text-terracotta hover:text-burnt-orange font-semibold text-sm transition-colors">
                      +91 9340725050
                    </a>
                  </div>
                </div>

                <div className="pt-4">
                  <Link
                    href="/"
                    className="inline-block bg-text-primary text-cream px-8 py-3.5 rounded-full font-medium hover:bg-terracotta transition-colors shadow-md"
                  >
                    Return to Homepage
                  </Link>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-6 text-center border-t border-text-primary/5 text-xs text-text-secondary/60">
        <p>&copy; {new Date().getFullYear()} Adhyayan Library Gwalior. All rights reserved.</p>
      </footer>
    </div>
  );
}

export default function JoinPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="flex flex-col items-center gap-3">
            <div className="w-8 h-8 border-3 border-terracotta border-t-transparent rounded-full animate-spin"></div>
            <p className="text-text-secondary text-sm font-medium animate-pulse">Loading registration details...</p>
          </div>
        </div>
      }
    >
      <JoinFormContent />
    </Suspense>
  );
}
