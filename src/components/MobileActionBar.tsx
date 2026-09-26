"use client";

import { MapPin, MessageCircle, Phone } from "lucide-react";
import { trackConversion } from "@/lib/analytics";
import { business, directionsUrl, whatsappUrl } from "@/lib/site";

export default function MobileActionBar() {
  return (
    <aside
      aria-label="Quick contact actions"
      className="fixed inset-x-0 bottom-0 z-[60] grid grid-cols-3 border-t border-text-primary/10 bg-cream/95 px-2 py-2 shadow-[0_-8px_24px_rgba(44,36,29,0.12)] backdrop-blur-md md:hidden"
    >
      <a
        href={`tel:${business.phone}`}
        onClick={() => trackConversion("phone_click", { placement: "mobile_bar" })}
        className="flex flex-col items-center gap-1 py-1 text-[10px] font-bold text-text-primary"
      >
        <Phone size={18} aria-hidden="true" />
        Call
      </a>
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("whatsapp_intent", { placement: "mobile_bar" })}
        className="flex flex-col items-center gap-1 rounded-xl bg-text-primary py-1.5 text-[10px] font-bold text-cream"
      >
        <MessageCircle size={18} aria-hidden="true" />
        WhatsApp
      </a>
      <a
        href={directionsUrl}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => trackConversion("directions_click", { placement: "mobile_bar" })}
        className="flex flex-col items-center gap-1 py-1 text-[10px] font-bold text-text-primary"
      >
        <MapPin size={18} aria-hidden="true" />
        Directions
      </a>
    </aside>
  );
}
