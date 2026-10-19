import type { MotionValue } from "motion/react";

export type DashboardProps = {
  // Build-phase progress; drives the counters.
  data: MotionValue<number>;
};

export type Kpi = {
  label: string;
  delta: string;
  value: MotionValue<string>;
};
