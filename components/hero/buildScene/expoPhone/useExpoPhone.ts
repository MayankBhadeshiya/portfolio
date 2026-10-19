import type { CSSProperties } from "react";
import { strings } from "@/constants/strings";
import type { PhoneNavItem, PhoneOrder } from "./expoPhoneTypes";

const s = strings.scene;

const TRACKER_STEPS = 3;

// Outline icons for the tab bar (24×24, stroked).
const NAV_ICONS = [
  "M3 11 12 4l9 7v9h-6v-6H9v6H3z",
  "M3 7.5 12 3l9 4.5v9L12 21l-9-4.5zM3 7.5l9 4.5 9-4.5M12 12v9",
  "M3 4h2l2.4 11h11L21 7.5H6.3M9.5 20h.01M17.5 20h.01",
  "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8zM4 21c0-4 3.6-6 8-6s8 2 8 6",
];

export function useExpoPhone() {
  // --i staggers each order card in during the build phase.
  const orders: PhoneOrder[] = s.phoneRows.map((name, i) => ({
    name,
    status: s.phoneStatus[i],
    price: s.phonePrices[i],
    thumb: s.phoneThumbs[i],
    steps: Array.from({ length: TRACKER_STEPS }, (_, step) => step < s.phoneProgress[i]),
    eta: i === 0 ? s.phoneEta : undefined,
    style: { "--i": i } as CSSProperties,
  }));

  const navItems: PhoneNavItem[] = s.phoneNav.map((label, i) => ({ label, icon: NAV_ICONS[i] }));

  return { orders, navItems, badges: s.storeBadges };
}
