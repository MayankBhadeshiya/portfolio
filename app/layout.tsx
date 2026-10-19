import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { profile } from "@/data/profile";
import { colors, colorsToCssVars } from "@/constants/colors";
import { strings } from "@/constants/strings";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name}${strings.meta.titleSeparator}${profile.title}`,
  description: profile.intro,
};

export const viewport: Viewport = {
  themeColor: colors.cobalt,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <head>
        <style dangerouslySetInnerHTML={{ __html: colorsToCssVars() }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
