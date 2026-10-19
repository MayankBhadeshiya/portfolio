import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { profile } from "@/data/profile";
import { colors, colorsToCssVars } from "@/constants/colors";
import { strings } from "@/constants/strings";
import SmoothScroll from "@/components/smoothScroll";
import Cursor from "@/components/cursor";
import "lenis/dist/lenis.css";
import "./globals.css";

// Geist and Geist Mono: the Next.js / Vercel typefaces.
const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

// Code, terminal output and blueprint labels.
const mono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name}${strings.meta.titleSeparator}${profile.title}`,
  description: profile.intro,
};

export const viewport: Viewport = {
  themeColor: colors.paper,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: colorsToCssVars() }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
        <Cursor />
      </body>
    </html>
  );
}
