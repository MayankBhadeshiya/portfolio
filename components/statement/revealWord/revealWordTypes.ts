import type { ReactNode } from "react";
import type { MotionValue } from "motion/react";

export type RevealWordProps = {
  children: ReactNode;
  progress: MotionValue<number>;
  range: [number, number];
};
