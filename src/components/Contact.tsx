"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, CheckCircle2, User } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="py-24 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Side - Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="glass p-6 md:p-10 rounded-[24px] md:rounded-[40px] h-full flex flex-col"
          >
            <h2 className="text-4xl font-serif font-bold text-text-primary mb-8">
              Get In Touch
            </h2>
            
            <div className="space-y-6 mb-10 flex-grow">
              <div className="flex items-start space-x-4">
                <User className="text-terracotta mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Contact Person</h4>
                  <p className="text-text-secondary">Ridhi Maheshwari</p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <MapPin className="text-terracotta mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Address</h4>
                  <p className="text-text-secondary">55, MLB Colony, Padav,<br/>Gwalior (M.P.), 474002</p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Phone className="text-terracotta mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Phone Numbers</h4>
                  <p className="text-text-secondary">
                    <a href="tel:9425744080" className="hover:text-terracotta transition-colors">+91 9425744080</a>
                    <span className="mx-2">|</span>
                    <a href="tel:9340725050" className="hover:text-terracotta transition-colors">+91 9340725050</a>
                  </p>
                </div>
              </div>
              
              <div className="flex items-start space-x-4">
                <Mail className="text-terracotta mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Email</h4>
                  <p className="text-text-secondary">
                    <a href="mailto:ridhimaheshwari2004@gmail.com" className="hover:text-terracotta transition-colors">
                      ridhimaheshwari2004@gmail.com
                    </a>
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <Clock className="text-terracotta mt-1 flex-shrink-0" size={24} />
                <div>
                  <h4 className="font-bold text-text-primary mb-1">Operating Hours</h4>
                  <p className="text-text-secondary">5:30 AM – 10:50 PM<br/><span className="text-terracotta font-semibold">Night Shift Also Available</span></p>
                </div>
              </div>
            </div>

            {/* Google Maps Embed - Gwalior */}
            <div className="w-full h-48 rounded-2xl overflow-hidden bg-cream relative">
               <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3579.5218764005934!2d78.17296067631388!3d26.212267677073286!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3976c69784346ad7%3A0xe21262d9472f778d!2sMLB%20Colony%2C%20Padav%2C%20Gwalior%2C%20Madhya%20Pradesh%20474002!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={false} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                className="absolute inset-0"
              ></iframe>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="glass p-6 md:p-10 rounded-[24px] md:rounded-[40px] w-full"
          >
            <ContactForm />
          </motion.div>

        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
    setTimeout(() => {
      setLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  if (isSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="text-center py-8 space-y-6"
      >
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-500/10 text-green-600 rounded-full">
          <CheckCircle2 size={36} />
        </div>
        <h3 className="text-2xl font-serif font-bold text-text-primary">
          Inquiry Sent Successfully!
        </h3>
        <div className="space-y-4 max-w-sm mx-auto">
          <p className="text-text-secondary leading-relaxed text-sm">
            Thank you for reaching out, <span className="font-semibold text-text-primary">{formData.name}</span>. 
            Your general inquiry details have been forwarded to <span className="font-semibold text-terracotta">ridhimaheshwari2004@gmail.com</span>.
          </p>
          <p className="text-text-secondary text-xs">
            Our support team will review your message and reach back to you at <span className="font-medium text-text-primary">{formData.phone}</span> or <span className="font-medium text-text-primary">{formData.email || "provided email"}</span> shortly.
          </p>
        </div>
        <div className="pt-2">
          <button
            onClick={() => {
              setFormData({ name: "", phone: "", email: "", message: "" });
              setIsSubmitted(false);
            }}
            className="bg-text-primary text-cream px-6 py-2.5 rounded-full text-sm font-medium hover:bg-terracotta transition-colors shadow-md"
          >
            Send Another Message
          </button>
        </div>
      </motion.div>
    );
  }

  return (
    <>
      <h3 className="text-3xl font-serif font-bold text-text-primary mb-8">Send an Inquiry</h3>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">Name *</label>
          <input 
            type="text" 
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary text-sm"
            placeholder="Your full name"
          />
        </div>
        
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">Phone Number *</label>
            <input 
              type="tel" 
              name="phone"
              required
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary text-sm"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold text-text-primary mb-2">Email</label>
            <input 
              type="email" 
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary text-sm"
              placeholder="Your email address"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-semibold text-text-primary mb-2">Message</label>
          <textarea 
            name="message"
            rows={4}
            value={formData.message}
            onChange={handleChange}
            className="w-full px-5 py-4 bg-white/50 border border-text-primary/10 rounded-2xl focus:outline-none focus:ring-2 focus:ring-terracotta/50 focus:border-transparent transition-all placeholder-text-secondary/50 text-text-primary resize-none text-sm"
            placeholder="How can we help you?"
          ></textarea>
        </div>

        <button 
          type="submit"
          disabled={loading}
          className="w-full bg-text-primary text-cream py-4 rounded-full font-medium hover:bg-terracotta transition-colors shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 duration-200 disabled:opacity-70 disabled:pointer-events-none flex items-center justify-center gap-2"
        >
          {loading ? (
            <div className="w-5 h-5 border-2 border-cream border-t-transparent rounded-full animate-spin"></div>
          ) : (
            "Send Inquiry"
          )}
        </button>
      </form>
    </>
  );
}

