import type { Metadata } from "next";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import MobileActionBar from "@/components/MobileActionBar";
import SmoothScroll from "@/components/SmoothScroll";
import { business, siteUrl } from "@/lib/site";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.name,
  title: {
    default: "Adhyayan Library Gwalior | Self Study Centre & Reading Library",
    template: "%s | Adhyayan Library Gwalior",
  },
  description: business.description,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  category: "Education",
  manifest: "/manifest.webmanifest",
  icons: {
    icon: [
      { url: "/favicon.svg", type: "image/svg+xml" },
      { url: "/favicon.ico", sizes: "any" },
    ],
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    siteName: business.name,
    title: "Adhyayan Library Gwalior | Premium Self Study Centre",
    description: business.description,
    images: [
      {
        url: business.shareImage,
        width: 1200,
        height: 630,
        alt: "Students studying in a quiet modern library at Adhyayan Library Gwalior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Adhyayan Library Gwalior | Self Study Centre",
    description: business.description,
    images: [business.shareImage],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  appleWebApp: {
    title: business.name,
    capable: true,
  },
  other: {
    "geo.region": "IN-MP",
    "geo.placename": "Gwalior",
    "geo.position": `${business.latitude};${business.longitude}`,
    ICBM: `${business.latitude}, ${business.longitude}`,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className="h-full antialiased"
    >
      <body className="min-h-full flex flex-col pb-16 md:pb-0">
        <SmoothScroll />
        <GoogleAnalytics />
        {children}
        <MobileActionBar />
      </body>
    </html>
  );
}
