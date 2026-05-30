import { MapPin, Phone, Mail } from "lucide-react";

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
  </svg>
);

const LogoIcon = () => (
  <div className="relative flex items-center justify-center w-10 h-10 bg-cream/10 rounded-xl mr-3 text-cream">
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-6 h-6">
      <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z" />
      <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z" />
    </svg>
    <div className="absolute -top-1 bg-[#2C241D] rounded-full p-0.5 shadow-sm">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-3 h-3 text-muted-gold">
        <polygon points="12,2 15,9 22,9 17,14 19,21 12,17 5,21 7,14 2,9 9,9" />
      </svg>
    </div>
  </div>
);

export default function Footer() {
  return (
    <footer className="bg-[#2C241D] text-cream/80 pt-20 pb-10">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="flex items-center font-serif text-3xl font-bold text-cream tracking-tight">
              <LogoIcon />
              <span>
                Adhyayan<span className="text-terracotta">Library</span>
              </span>
            </h3>
            <p className="text-cream/70 leading-relaxed max-w-xs">
              Gwalior's premium self-study center. Creating an environment where discipline, focus, and success thrive.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-colors">
                <InstagramIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-colors">
                <FacebookIcon />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-cream/10 flex items-center justify-center hover:bg-terracotta hover:text-cream transition-colors">
                <TwitterIcon />
              </a>
            </div>
          </div>


          {/* Quick Links */}
          <div>
            <h4 className="text-cream font-bold text-lg mb-6">Quick Links</h4>
            <ul className="space-y-4">
              <li><a href="#home" className="hover:text-terracotta transition-colors">Home</a></li>
              <li><a href="#about" className="hover:text-terracotta transition-colors">About Us</a></li>
              <li><a href="#gallery" className="hover:text-terracotta transition-colors">Gallery</a></li>
              <li><a href="#testimonials" className="hover:text-terracotta transition-colors">Testimonials</a></li>
            </ul>
          </div>

          {/* Membership & Contact */}
          <div>
            <h4 className="text-cream font-bold text-lg mb-6">Membership Plans</h4>
            <ul className="space-y-4 mb-8">
              <li><a href="#pricing" className="hover:text-terracotta transition-colors">Basic Plan</a></li>
              <li><a href="#pricing" className="hover:text-terracotta transition-colors">Standard Plan</a></li>
              <li><a href="#pricing" className="hover:text-terracotta transition-colors">Premium Plan</a></li>
            </ul>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-sm">
          <p>© 2026 Adhyayan Library. All Rights Reserved.</p>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-cream transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-cream transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
