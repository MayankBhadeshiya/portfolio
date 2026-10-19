import type { Metadata, Viewport } from "next";
import { Geist, Instrument_Serif } from "next/font/google";
import { profile } from "@/data/profile";
import { colors, colorsToCssVars } from "@/constants/colors";
import { strings } from "@/constants/strings";
import SmoothScroll from "@/components/smoothScroll";
import "lenis/dist/lenis.css";
import "./globals.css";

const serif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name}${strings.meta.titleSeparator}${profile.title}`,
  description: profile.intro,
};

export const viewport: Viewport = {
  themeColor: colors.night,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: colorsToCssVars() }} />
      </head>
      <body>
        <SmoothScroll>{children}</SmoothScroll>
      </body>
    </html>
  );
}
