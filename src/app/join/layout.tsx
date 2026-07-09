import type { Metadata } from "next";
import { business, siteUrl } from "@/lib/site";

export const metadata: Metadata = {
  title: "Reserve a Study Cabin",
  description:
    "Reserve a cabin desk or membership at Adhyayan Library, a self-study centre and reading library in Padav, Gwalior.",
  alternates: {
    canonical: "/join",
  },
  openGraph: {
    title: "Reserve a Study Cabin | Adhyayan Library Gwalior",
    description:
      "Enquire for Basic, Standard, or Premium membership at Adhyayan Library in Padav, Gwalior.",
    url: `${siteUrl}/join`,
    images: [
      {
        url: business.image,
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
