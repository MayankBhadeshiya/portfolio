"use client";

import { useEffect, useRef } from "react";
import { useScroll } from "motion/react";
import { useLenis } from "lenis/react";
import { usePrefersReducedMotion } from "@/hooks/usePrefersReducedMotion";
import { profile } from "@/data/profile";
import type { StackCardData } from "./projectsTypes";

// How much smaller each buried card ends up than the one in front of it.
const SCALE_STEP = 0.05;
// Inside the stack, one scroll gesture moves exactly one card.
const SLIDE_DURATION = 0.75; // seconds
// Wheel events closer together than this belong to the same gesture
// (trackpad momentum, a fast wheel spin), so they never skip a second card.
const GESTURE_GAP = 220; // ms
// A swipe shorter than this on touch screens is ignored.
const SWIPE_MIN = 30; // px
// How close (as a share of the viewport) you must be to the first or last
// card before the stack catches the scroll.
const CATCH = 0.2;

// Cards stick one on top of another as you scroll. While the stack builds,
// each card shrinks toward its target scale so the earlier ones recede.
export function useProjects() {
  const listRef = useRef<HTMLOListElement>(null);
  const { scrollYProgress } = useScroll({ target: listRef, offset: ["start start", "end end"] });
  const lenis = useLenis();
  const reduceMotion = usePrefersReducedMotion();

  useEffect(() => {
    const list = listRef.current;
    if (!list || list.children.length < 2) return;

    let busyUntil = 0;
    let lastWheel = 0;
    let slid = false;
    let touchStartY = 0;
    let touchTarget: number | null = null;

    // Scroll positions where each card lands on its sticky line.
    const snaps = () => {
      const items = Array.from(list.children) as HTMLElement[];
      const step = items[0].offsetHeight + parseFloat(getComputedStyle(list).rowGap || "0");
      const stickyTop = parseFloat(getComputedStyle(items[0]).top || "0");
      const listTop = list.getBoundingClientRect().top + window.scrollY;
      return items.map((_, i) => Math.round(listTop + i * step - stickyTop));
    };

    // The card to move to for a gesture in `dir`, or null to scroll freely.
    const targetFor = (dir: number): number | null => {
      const points = snaps();
      const y = window.scrollY;
      const first = points[0];
      const last = points[points.length - 1];
      const catchZone = window.innerHeight * CATCH;
      if (dir > 0) {
        if (y < first - catchZone || y >= last - 2) return null;
        return points.find((p) => p > y + 2) ?? null;
      }
      if (y <= first + 2 || y > last + catchZone) return null;
      return [...points].reverse().find((p) => p < y - 2) ?? null;
    };

    const slideTo = (top: number) => {
      busyUntil = performance.now() + SLIDE_DURATION * 1000;
      if (lenis) {
        lenis.scrollTo(top, { duration: SLIDE_DURATION, lock: true, force: true });
      } else {
        window.scrollTo({ top, behavior: reduceMotion ? "auto" : "smooth" });
      }
    };

    const onWheel = (event: WheelEvent) => {
      if (event.ctrlKey || Math.abs(event.deltaY) < 2) return;
      const now = performance.now();
      // A pause between wheel events starts a new gesture.
      if (now - lastWheel > GESTURE_GAP) slid = false;
      lastWheel = now;
      // Absorb input while sliding and for the rest of the gesture that slid,
      // so momentum never carries on to a second card.
      const target = now < busyUntil || slid ? null : targetFor(Math.sign(event.deltaY));
      if (target === null && !slid && now >= busyUntil) return;
      event.preventDefault();
      event.stopPropagation();
      if (target === null) return;
      slid = true;
      slideTo(target);
    };

    const onTouchStart = (event: TouchEvent) => {
      touchStartY = event.touches[0].clientY;
      touchTarget = null;
    };

    const onTouchMove = (event: TouchEvent) => {
      if (performance.now() < busyUntil) {
        event.preventDefault();
        return;
      }
      const dy = touchStartY - event.touches[0].clientY;
      if (touchTarget === null && Math.abs(dy) > 6) touchTarget = targetFor(Math.sign(dy));
      if (touchTarget !== null) event.preventDefault();
    };

    const onTouchEnd = (event: TouchEvent) => {
      const dy = touchStartY - event.changedTouches[0].clientY;
      if (touchTarget !== null && Math.abs(dy) > SWIPE_MIN) slideTo(touchTarget);
      touchTarget = null;
    };

    // Capture on document runs before Lenis's wheel listener on window.
    const capture = { capture: true, passive: false };
    document.addEventListener("wheel", onWheel, capture);
    document.addEventListener("touchstart", onTouchStart, { passive: true });
    document.addEventListener("touchmove", onTouchMove, capture);
    document.addEventListener("touchend", onTouchEnd, { passive: true });
    return () => {
      document.removeEventListener("wheel", onWheel, capture);
      document.removeEventListener("touchstart", onTouchStart);
      document.removeEventListener("touchmove", onTouchMove, capture);
      document.removeEventListener("touchend", onTouchEnd);
    };
  }, [lenis, reduceMotion]);

  const total = profile.projects.length;
  const cards: StackCardData[] = profile.projects.map((project, index) => ({
    project,
    index,
    number: String(index + 1).padStart(2, "0"),
    range: [index / total, 1],
    targetScale: 1 - (total - 1 - index) * SCALE_STEP,
  }));

  return { listRef, cards, scrollYProgress };
}
