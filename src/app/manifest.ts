import type { MetadataRoute } from "next";
import { business } from "@/lib/site";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Adhyayan Library Gwalior",
    short_name: "Adhyayan Library",
    description: business.description,
    start_url: "/",
    display: "standalone",
    background_color: "#F5EFE6",
    theme_color: "#2C241D",
    icons: [
      {
        src: "/icon-192.png",
        sizes: "192x192",
        type: "image/png",
        purpose: "any",
      },
      {
        src: "/icon-512.png",
        sizes: "512x512",
        type: "image/png",
        purpose: "maskable",
      },
    ],
  };
}
