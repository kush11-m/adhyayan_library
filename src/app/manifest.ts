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
        src: "/favicon.svg",
        sizes: "any",
        type: "image/svg+xml",
      },
    ],
  };
}
