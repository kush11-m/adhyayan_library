import type { Metadata } from "next";
import { business, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: { absolute: "Reserve a Study Cabin | Adhyayan Library Gwalior" },
  description:
    "Reserve a cabin desk or membership at Adhyayan Library, a self-study centre and reading library in Padav, Gwalior.",
  alternates: {
    canonical: "/join",
  },
  openGraph: {
    title: "Reserve a Study Cabin | Adhyayan Library Gwalior",
    description:
      "Enquire for half-day or full-day membership at Adhyayan Library in Padav, Gwalior, with reserved and unreserved locker options.",
    url: `${siteUrl}/join`,
    images: [
      {
        url: business.shareImage,
        width: 1200,
        height: 630,
        alt: "Adhyayan Library Gwalior study cabin reservation",
      },
    ],
  },
};

export default function JoinLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return children;
}
