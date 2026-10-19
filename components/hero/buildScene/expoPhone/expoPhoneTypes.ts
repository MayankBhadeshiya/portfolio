import type { CSSProperties } from "react";

export type PhoneOrder = {
  name: string;
  status: string;
  price: string;
  thumb: string;
  // One entry per tracker step; true when that step is done.
  steps: boolean[];
  eta?: string;
  // Carries --i, the card's index, for the staggered reveal.
  style: CSSProperties;
};

export type PhoneNavItem = {
  label: string;
  // SVG path data for a 24×24 outline icon.
  icon: string;
};
