"use client";

import { ReactLenis } from "lenis/react";
import type { SmoothScrollProps } from "./smoothScrollTypes";
import { useSmoothScroll } from "./useSmoothScroll";

export default function SmoothScroll({ children }: SmoothScrollProps) {
  const { enabled, options } = useSmoothScroll();

  if (!enabled) return <>{children}</>;

  return (
    <ReactLenis root options={options}>
      {children}
    </ReactLenis>
  );
}
