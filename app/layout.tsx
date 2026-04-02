import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import { SiteChrome } from "@/components/site-chrome";
import { SpotlightCursor } from "@/components/spotlight-cursor";

const sans = Space_Grotesk({
  variable: "--font-sans",
  subsets: ["latin"],
});

const serif = Cormorant_Garamond({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "BhagyaYelleti",
  description: "Cinematic portfolio for Bhagya Yelleti, a frontend engineer obsessed with craft, motion, and premium interfaces.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-base text-white antialiased">
        <SpotlightCursor />
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="mesh mesh-a" />
          <div className="mesh mesh-b" />
          <div className="mesh mesh-c" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.08),transparent_28%),linear-gradient(180deg,#05060a_0%,#06070b_35%,#090b13_100%)]" />
        </div>
        <SiteChrome />
        <PageTransition>{children}</PageTransition>
      </body>
    </html>
  );
}
