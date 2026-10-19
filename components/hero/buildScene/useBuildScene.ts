"use client";

import type { MotionStyle } from "motion/react";
import { toolIcons } from "@/constants/tools";
import type { BuildPhases } from "./buildSceneTypes";

// Feeds the phase values to CSS as custom properties (--code, --data, --ship).
// Child panes read them from CSS, so scrolling never re-renders React.
export function useBuildScene({ code, data, ship, spin }: BuildPhases) {
  // Motion animates CSS custom properties, but its style type doesn't list them.
  const vars = { "--code": code, "--data": data, "--ship": ship } as MotionStyle;

  return { vars, spin, reactPath: toolIcons.React.path };
}
