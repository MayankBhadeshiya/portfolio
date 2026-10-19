"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { useMotionValueEvent, useScroll } from "motion/react";
import { strings } from "@/constants/strings";
import type { NavLink } from "./navTypes";

const SCROLLED_AFTER = 24;
const HIDE_AFTER = 400;
const barMotion = { duration: 0.35, ease: [0.16, 1, 0.3, 1] as const };

const sections = [
  { id: "work", label: strings.nav.work },
  { id: "projects", label: strings.nav.projects },
  { id: "experience", label: strings.nav.experience },
  { id: "contact", label: strings.nav.contact },
];

// Gives the bar a background once the page moves, and tucks it away while
// scrolling down so it doesn't cover the pinned sections. Section links point
// back to the home page when shown on another page.
export function useNav() {
  const pathname = usePathname();
  const { scrollY } = useScroll();
  const [scrolled, setScrolled] = useState(false);
  const [hidden, setHidden] = useState(false);

  useMotionValueEvent(scrollY, "change", (y) => {
    const previous = scrollY.getPrevious() ?? 0;
    setScrolled(y > SCROLLED_AFTER);
    setHidden(y > HIDE_AFTER && y > previous);
  });

  const base = pathname === "/" ? "" : "/";
  const links: NavLink[] = sections.map((s) => ({ href: `${base}#${s.id}`, label: s.label }));

  return { scrolled, hidden, links, barMotion };
}
