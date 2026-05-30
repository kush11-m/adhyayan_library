import type { Metadata } from "next";
import { Inter, Manrope } from "next/font/google";
import ScrollManager from "@/components/ScrollManager";
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
  title: "Adhyayan Library | Premium Study Environment",
  description: "A premium study environment designed for students, aspirants, and professionals who are serious about achieving their goals.",
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
