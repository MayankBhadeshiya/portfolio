"use client";

import { useEffect, useRef, useState, type CSSProperties } from "react";
import { useMotionValue, useReducedMotion, useScroll, useTransform } from "motion/react";

const PIN_QUERY = "(min-width: 861px)";

// On wide screens the section pins and vertical scroll moves the row of skill
// groups sideways. The section is made exactly tall enough for the row to
// travel its full width. Narrow screens and reduced motion get a plain stack.
export function useToolkit() {
  const sectionRef = useRef<HTMLElement>(null);
  const rowRef = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const [wide, setWide] = useState(false);
  const [travel, setTravel] = useState(0);
  const distance = useMotionValue(0);

  const pinned = wide && !reduceMotion;

  useEffect(() => {
    const query = window.matchMedia(PIN_QUERY);
    const update = () => setWide(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const row = rowRef.current;
    if (!row || !pinned) {
      distance.set(0);
      setTravel(0);
      return;
    }
    const measure = () => {
      const next = Math.max(0, row.scrollWidth - window.innerWidth);
      distance.set(next);
      setTravel(next);
    };
    measure();
    const observer = new ResizeObserver(measure);
    observer.observe(row);
    window.addEventListener("resize", measure);
    return () => {
      observer.disconnect();
      window.removeEventListener("resize", measure);
    };
  }, [pinned, distance]);

  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end end"] });
  const x = useTransform(() => -scrollYProgress.get() * distance.get());

  const sectionStyle: CSSProperties | undefined = pinned
    ? { height: `calc(100vh + ${travel}px)` }
    : undefined;

  return { sectionRef, rowRef, x, sectionStyle, pinned };
}
