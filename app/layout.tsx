import type { Metadata } from "next";
import { Cormorant_Garamond, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { PageTransition } from "@/components/page-transition";
import { SoundProvider } from "@/components/sound-provider";

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
  description: "Netflix-style portfolio featuring premium digital experiences and cinematic interfaces.",
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
      <body className="bg-black text-white antialiased">
        <SoundProvider>
          <div className="fixed inset-0 -z-10 overflow-hidden bg-black" />
          <PageTransition>{children}</PageTransition>
        </SoundProvider>
      </body>
    </html>
  );
}
