"use client";

import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { useEffect, useState } from "react";
import { useMotionValue, useSpring } from "motion/react";

const FINE_POINTER = "(hover: hover) and (pointer: fine)";
const INTERACTIVE = "a, button, [data-cursor]";
const spring = { damping: 30, stiffness: 350, mass: 0.5 };

// A small dot that trails the pointer and opens into a ring over anything
// clickable. Only for mouse users who haven't asked for reduced motion.
export function useCursor() {
  const reduceMotion = usePrefersReducedMotion();
  const [finePointer, setFinePointer] = useState(false);
  const [hovering, setHovering] = useState(false);
  const pointerX = useMotionValue(-100);
  const pointerY = useMotionValue(-100);
  const x = useSpring(pointerX, spring);
  const y = useSpring(pointerY, spring);

  const enabled = finePointer && !reduceMotion;

  useEffect(() => {
    const query = window.matchMedia(FINE_POINTER);
    const update = () => setFinePointer(query.matches);
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    if (!enabled) return;
    document.body.classList.add("has-custom-cursor");

    const onMove = (event: PointerEvent) => {
      pointerX.set(event.clientX);
      pointerY.set(event.clientY);
    };
    const onOver = (event: PointerEvent) => {
      const target = event.target instanceof Element ? event.target : null;
      setHovering(Boolean(target?.closest(INTERACTIVE)));
    };

    window.addEventListener("pointermove", onMove);
    window.addEventListener("pointerover", onOver);
    return () => {
      document.body.classList.remove("has-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      window.removeEventListener("pointerover", onOver);
    };
  }, [enabled, pointerX, pointerY]);

  return { enabled, x, y, hovering };
}
