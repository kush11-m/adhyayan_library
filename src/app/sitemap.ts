import type { MetadataRoute } from "next";
import { seoPages, siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: siteUrl },
    { url: `${siteUrl}/join` },
    { url: `${siteUrl}/membership` },
    { url: `${siteUrl}/contact` },
    { url: `${siteUrl}/sitemap` },
    ...seoPages.map((page) => ({
      url: `${siteUrl}/${page.slug}`,
    })),
  ];
}
