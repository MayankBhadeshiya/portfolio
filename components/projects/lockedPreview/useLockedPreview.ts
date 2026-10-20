"use client";

import { useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import type { Project } from "@/data/profile";

// Open/close state for the "preview locked" notice. Focus moves into the
// notice when it opens and back to the Preview button when it closes;
// Escape closes it.
export function useLockedPreview(project: Project) {
  const [open, setOpen] = useState(false);
  const noticeId = useId();
  const pathname = usePathname();
  const triggerRef = useRef<HTMLButtonElement>(null);
  const closeRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) return;
    closeRef.current?.focus();
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  const show = () => setOpen(true);
  const hide = () => {
    setOpen(false);
    triggerRef.current?.focus();
  };

  const contactHref = pathname === "/" ? "#contact" : "/#contact";

  // Web projects that also ship a mobile app get a phone in the mock.
  const hasMobile = project.platforms.some((p) => p === "iOS" || p === "Android");

  return { open, noticeId, contactHref, hasMobile, triggerRef, closeRef, show, hide };
}
