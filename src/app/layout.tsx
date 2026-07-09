import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import ScrollManager from "@/components/ScrollManager";
import { business, localKeywords, siteUrl } from "@/lib/site";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  applicationName: business.name,
  title: {
    default: "Adhyayan Library Gwalior | Self Study Centre & Reading Library",
    template: "%s | Adhyayan Library Gwalior",
  },
  description: business.description,
  keywords: localKeywords,
  authors: [{ name: business.name }],
  creator: business.name,
  publisher: business.name,
  category: "Education",
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
        url: business.image,
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
    images: [business.image],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${manrope.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <ScrollManager />
        {children}
      </body>
    </html>
  );
}
