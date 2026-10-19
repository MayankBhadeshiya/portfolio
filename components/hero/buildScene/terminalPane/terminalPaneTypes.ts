import type { MotionValue } from "motion/react";

export type TerminalPaneProps = {
  // Build-phase progress, for the bundling percentage.
  data: MotionValue<number>;
};

export type QrCell = {
  x: number;
  y: number;
};
