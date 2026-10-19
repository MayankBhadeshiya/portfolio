"use client";

import { useMemo, useRef } from "react";
import { useScroll } from "motion/react";
import { profile } from "@/data/profile";
import type { StatementWord } from "./statementTypes";

// Leave a little scroll at the end with every word lit before the section unpins.
const REVEAL_END = 0.85;

export function useStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });

  const words = useMemo<StatementWord[]>(() => {
    const parts = profile.now.split(" ");
    const step = REVEAL_END / parts.length;
    return parts.map((text, i) => ({
      key: `${i}-${text}`,
      text,
      range: [i * step, (i + 1) * step],
    }));
  }, []);

  return { ref, words, scrollYProgress };
}
