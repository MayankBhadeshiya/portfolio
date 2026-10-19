"use client";

import { useRef, type PointerEvent } from "react";
import {
  useMotionTemplate,
  useMotionValue,
  useReducedMotion,
  useSpring,
  useTransform,
} from "motion/react";
import { profile } from "@/data/profile";

const MAX_TILT = 14;
const spring = { damping: 18, stiffness: 220 };

export function useTiltCard() {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();

  // Pointer position across the card, from -0.5 to 0.5 on each axis.
  const px = useMotionValue(0);
  const py = useMotionValue(0);
  const rotateX = useSpring(useTransform(py, [-0.5, 0.5], [MAX_TILT, -MAX_TILT]), spring);
  const rotateY = useSpring(useTransform(px, [-0.5, 0.5], [-MAX_TILT, MAX_TILT]), spring);

  const spotX = useTransform(px, [-0.5, 0.5], [0, 100]);
  const spotY = useTransform(py, [-0.5, 0.5], [0, 100]);
  const spotlight = useMotionTemplate`radial-gradient(320px circle at ${spotX}% ${spotY}%, var(--color-frontend-a12), transparent 70%)`;

  const onPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (reduceMotion || event.pointerType !== "mouse") return;
    const rect = event.currentTarget.getBoundingClientRect();
    px.set((event.clientX - rect.left) / rect.width - 0.5);
    py.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const onPointerLeave = () => {
    px.set(0);
    py.set(0);
  };

  const monogram = `${profile.firstName[0]}${profile.lastName[0]}`;
  const [latestJob] = profile.experience;

  return {
    ref,
    rotateX,
    rotateY,
    spotlight,
    onPointerMove,
    onPointerLeave,
    monogram,
    current: latestJob.company,
    disciplines: profile.disciplines,
  };
}
