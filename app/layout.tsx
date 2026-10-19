import type { Metadata, Viewport } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import { profile } from "@/data/profile";
import "./globals.css";

const bricolage = Bricolage_Grotesque({
  subsets: ["latin"],
  axes: ["opsz", "wdth"],
  variable: "--font-bricolage",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${profile.name} — ${profile.title}`,
  description: profile.intro,
};

export const viewport: Viewport = {
  themeColor: "#2F3CFF",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={bricolage.variable}>
      <body>{children}</body>
    </html>
  );
}
