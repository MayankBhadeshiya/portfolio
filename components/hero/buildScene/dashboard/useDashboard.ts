"use client";

import { useTransform, type MotionValue } from "motion/react";
import { strings } from "@/constants/strings";
import type { Kpi } from "./dashboardTypes";

const s = strings.scene;

// Revenue per day (relative), drawn as the chart's line and area.
const SERIES = [32, 44, 38, 58, 52, 74, 88];
const W = 100;
const H = 40;

function chartPaths() {
  const max = Math.max(...SERIES);
  const points = SERIES.map((v, i) => {
    const x = (i / (SERIES.length - 1)) * W;
    const y = H - (v / max) * (H - 4) - 2;
    return [x, y] as const;
  });
  const line = points
    .map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)} ${y.toFixed(1)}`)
    .join(" ");
  const area = `${line} L${W} ${H} L0 ${H} Z`;
  return { line, area, viewBox: `0 0 ${W} ${H}` };
}

const CHART = chartPaths();

const format = (n: number) => Math.round(n).toLocaleString("en-IN");

export function useDashboard(data: MotionValue<number>) {
  // One counter per KPI; hooks are called a fixed number of times.
  const [k0, k1, k2] = s.kpis;
  const v0 = useTransform(data, (v) => `${k0.prefix}${format(v * k0.target)}${k0.suffix}`);
  const v1 = useTransform(data, (v) => `${k1.prefix}${format(v * k1.target)}${k1.suffix}`);
  const v2 = useTransform(data, (v) => `${k2.prefix}${format(v * k2.target)}${k2.suffix}`);

  const kpis: Kpi[] = [
    { label: k0.label, delta: k0.delta, value: v0 },
    { label: k1.label, delta: k1.delta, value: v1 },
    { label: k2.label, delta: k2.delta, value: v2 },
  ];

  return { kpis, chart: CHART };
}
