"use client";

import { useEffect, useState, type PointerEvent } from "react";
import { useMotionValue, useReducedMotion, useSpring } from "motion/react";
import { profile } from "@/data/profile";

const FLOAT_QUERY = "(hover: hover) and (pointer: fine) and (min-width: 861px)";
const ease = [0.16, 1, 0.3, 1] as const;
const spring = { stiffness: 260, damping: 28, mass: 0.6 };

// Card sits up and to the right of the cursor so it never hides the row text.
const OFFSET_X = 56;
const OFFSET_Y = -150;

// On desktop with a mouse, hovering a row shows that project's cover in a card
// that follows the cursor. Elsewhere the cover is shown inline in each row.
export function useProjects() {
  const projects = profile.projects;
  const reduceMotion = useReducedMotion();
  const [canFloat, setCanFloat] = useState(false);
  const [activeSlug, setActiveSlug] = useState<string | null>(null);

  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const cardX = useSpring(pointerX, spring);
  const cardY = useSpring(pointerY, spring);

  useEffect(() => {
    const query = window.matchMedia(FLOAT_QUERY);
    const update = () => setCanFloat(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  const floating = canFloat && !reduceMotion;

  const onPointerMove = (event: PointerEvent<HTMLElement>) => {
    pointerX.set(event.clientX + OFFSET_X);
    pointerY.set(event.clientY + OFFSET_Y);
  };

  const onRowEnter = (slug: string) => setActiveSlug(slug);
  const onListLeave = () => setActiveSlug(null);

  const activeProject = projects.find((p) => p.slug === activeSlug) ?? null;

  const cardMotion = {
    initial: { opacity: 0, scale: 0.85, rotate: -4 },
    animate: { opacity: 1, scale: 1, rotate: 0 },
    exit: { opacity: 0, scale: 0.9 },
    transition: { duration: 0.35, ease },
  };

  const rowMotion = (index: number) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y: 40 },
          whileInView: { opacity: 1, y: 0 },
          viewport: { once: true, margin: "0px 0px -10% 0px" },
          transition: { duration: 0.8, ease, delay: index * 0.06 },
        };

  return {
    projects,
    floating,
    activeProject,
    cardX,
    cardY,
    cardMotion,
    rowMotion,
    onRowEnter,
    onListLeave,
    onPointerMove,
  };
}
