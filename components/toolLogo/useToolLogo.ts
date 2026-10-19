import { toolBadges, toolIcons } from "@/constants/tools";
import type { ToolLogoTone } from "./toolLogoTypes";

// Relative luminance of a 6-digit hex color, 0 (black) → 1 (white).
function luminance(hex: string): number {
  const [r, g, b] = [0, 2, 4].map((i) => parseInt(hex.slice(i, i + 2), 16) / 255);
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

// Picks the brand color, unless it would vanish on the background: near-black
// logos (Next.js, Expo, Vercel…) on dark panels and near-white ones on light.
export function useToolLogo(name: string, tone: ToolLogoTone) {
  const icon = toolIcons[name];

  let fill = "currentColor";
  if (icon) {
    const l = luminance(icon.hex);
    const invisible = tone === "dark" ? l < 0.18 : l > 0.85;
    fill = invisible ? "currentColor" : `#${icon.hex}`;
  }

  // Lettered badge for real tools without a logo; nothing for concepts.
  const badge = icon ? undefined : toolBadges[name];

  return { icon, fill, badge };
}
