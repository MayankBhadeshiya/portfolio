"use client";

import { useSyncExternalStore } from "react";

const QUERY = "(prefers-reduced-motion: reduce)";

function subscribe(onChange: () => void) {
  const media = window.matchMedia(QUERY);
  media.addEventListener("change", onChange);
  return () => media.removeEventListener("change", onChange);
}

const getSnapshot = () => window.matchMedia(QUERY).matches;

// The server can't know the visitor's setting, so it renders "no preference".
const getServerSnapshot = () => false;

// Hydration-safe "prefers reduced motion". The first client render matches
// the server, then React re-renders with the real value, so there's no
// hydration mismatch (unlike Motion's useReducedMotion).
export function usePrefersReducedMotion(): boolean {
  return useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
}
