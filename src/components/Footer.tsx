import Link from "next/link";
import { business, seoPages } from "@/lib/site";

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

export default function Footer() {
  return (
    <footer className="bg-[#2C241D] text-cream/80 pt-10 pb-[25px] md:pt-20 md:pb-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 mb-8 md:mb-16">
          
          {/* Brand */}
          <div className="space-y-4 md:space-y-6">
            <h3 className="flex items-center font-serif text-[21px] md:text-3xl font-bold text-cream tracking-tight">
              <LogoIcon />
              <span>
                Adhyayan<span className="text-terracotta">Library</span>
              </span>
            </h3>
            <p className="text-[12.5px] md:text-base text-cream/70 leading-[1.6] md:leading-relaxed max-w-[280px] md:max-w-xs">
              Gwalior&apos;s premium self-study center. Creating an environment where discipline, focus, and success thrive.
            </p>
            <div className="text-[11.5px] md:text-sm text-cream/70 leading-relaxed">
              <p>{business.streetAddress}, {business.locality}</p>
              <p>{business.displayPhone} | {business.alternateDisplayPhone}</p>
            </div>
          </div>


          {/* Links Wrapper for Mobile Grid */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 md:col-span-2 w-full">
            {/* Quick Links */}
            <div>
              <h4 className="text-[13px] md:text-lg text-cream font-bold mb-4 md:mb-6">
                Quick Links
              </h4>
              <ul className="space-y-[10px] md:space-y-4">
                {["Home", "About Us", "Gallery"].map((link) => (
                  <li key={link}>
                    <a href={link === "About Us" ? "#about" : `#${link.toLowerCase()}`} className="text-[11px] md:text-base transition-colors flex items-center gap-1 group">
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-[13px] md:text-lg text-cream font-bold mb-4 md:mb-6">
                Gwalior Searches
              </h4>
              <ul className="space-y-[10px] md:space-y-4">
                {seoPages.map((page) => (
                  <li key={page.slug}>
                    <Link href={`/${page.slug}`} className="text-[11px] md:text-base transition-colors flex items-center gap-1 group">
                      {page.title}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Membership & Contact */}
            <div>
              <h4 className="text-[13px] md:text-lg text-cream font-bold mb-4 md:mb-6">
                Contact
              </h4>
              <ul className="space-y-[10px] md:space-y-4 mb-0 md:mb-8">
                {[
                  { href: "/contact", label: "Official Contact" },
                  { href: "/membership", label: "Membership Plans" },
                  { href: "/join", label: "Reserve a Seat" },
                  { href: "/sitemap", label: "Site Map" },
                ].map((link) => (
                  <li key={link.href}>
                    <Link href={link.href} className="text-[11px] md:text-base transition-colors flex items-center gap-1 group">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>

        <div className="border-t border-white/10 pt-5 md:pt-8 flex flex-col md:flex-row justify-between items-center space-y-3 md:space-y-0 text-[10px] md:text-sm">
          <p>© 2026 Adhyayan Library. All Rights Reserved.</p>
          <div className="flex space-x-4 md:space-x-6">
            <Link href="/contact" className="transition-colors">Contact</Link>
            <Link href="/sitemap" className="transition-colors">Sitemap</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
