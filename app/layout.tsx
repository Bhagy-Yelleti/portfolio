import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { MagicDust } from "@/components/magic-dust";
import { PageTransition } from "@/components/page-transition";
import { ScrollProgress } from "@/components/scroll-progress";
import { SiteChrome } from "@/components/site-chrome";
import { SoundProvider } from "@/components/sound-provider";
import { WandCursor } from "@/components/wand-cursor";

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
  icons: {
    icon: "/icon.svg",
    shortcut: "/icon.svg",
    apple: "/icon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sans.variable} ${serif.variable}`}>
      <body className="bg-base text-white antialiased">
        <SoundProvider>
          <ScrollProgress />
          <WandCursor />
          <MagicDust />
          <div className="fixed inset-0 -z-10 overflow-hidden">
            <div className="mesh mesh-a" />
            <div className="mesh mesh-b" />
            <div className="mesh mesh-c" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,244,220,0.06),transparent_26%),linear-gradient(180deg,#060505_0%,#080706_35%,#0b0a09_100%)]" />
          </div>
          <SiteChrome />
          <PageTransition>{children}</PageTransition>
        </SoundProvider>
      </body>
    </html>
  );
}
