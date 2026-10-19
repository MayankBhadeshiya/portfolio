"use client";

import { useState } from "react";
import { useMotionValueEvent, useScroll } from "motion/react";

const SCROLLED_AFTER = 24;
const HIDE_AFTER = 400;

// Gives the bar a background once the page moves, and tucks it away while
// scrolling down so it doesn't cover the pinned sections.
export function useNav() {
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > SCROLLED_AFTER);
    setHidden(y > HIDE_AFTER && y > previous);
  });

  return { scrolled, hidden };
}
