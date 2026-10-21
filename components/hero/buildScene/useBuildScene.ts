"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";
import type { MotionStyle } from "motion/react";
import { toolIcons } from "@/constants/tools";
import type { BuildPhases, SceneFit } from "./buildSceneTypes";

// The scene is laid out once on a fixed canvas and scaled to fit the stage,
// so panes, text and phone keep the same proportions at every screen size.
// Phones get a taller canvas with a simpler layout (see the 900px queries).
const DESKTOP = { width: 800, height: 700 };
const MOBILE = { width: 440, height: 520 };
const MOBILE_QUERY = "(max-width: 900px)";
const MAX_SCALE = 1.15;

// Feeds the phase values to CSS as custom properties (--code, --data, --ship).
// Child panes read them from CSS, so scrolling never re-renders React.
export function useBuildScene({ code, data, ship, spin }: BuildPhases) {
  const fitRef = useRef<HTMLDivElement>(null);
  const [fit, setFit] = useState<SceneFit | null>(null);

  useLayoutEffect(() => {
    const el = fitRef.current;
    if (!el) return;
    const measure = () => {
      const canvas = window.matchMedia(MOBILE_QUERY).matches ? MOBILE : DESKTOP;
      const { width, height } = el.getBoundingClientRect();
      if (width === 0 || height === 0) return;
      // Capped so tablets don't blow the scene up past its drawn size.
      const scale = Math.min(width / canvas.width, height / canvas.height, MAX_SCALE);
      setFit({ ...canvas, scale });
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  // Motion animates CSS custom properties, but its style type doesn't list them.
  const vars = { "--code": code, "--data": data, "--ship": ship } as MotionStyle;

  // Hidden until measured, so the scene never flashes at the wrong size.
  const canvasStyle = (
    fit
      ? { "--cw": `${fit.width}px`, "--ch": `${fit.height}px`, "--fit": fit.scale }
      : { visibility: "hidden" }
  ) as CSSProperties;

  return { fitRef, canvasStyle, vars, spin, reactPath: toolIcons.React.path };
}
