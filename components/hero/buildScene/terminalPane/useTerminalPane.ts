"use client";

import { useTransform, type MotionValue } from "motion/react";
import type { QrCell } from "./terminalPaneTypes";

const QR_SIZE = 21;

// True for the cells of a QR "finder" square (the three corner targets).
function inFinder(x: number, y: number): boolean | null {
  const corners = [
    [0, 0],
    [QR_SIZE - 7, 0],
    [0, QR_SIZE - 7],
  ];
  for (const [cx, cy] of corners) {
    const dx = x - cx;
    const dy = y - cy;
    if (dx >= 0 && dx < 7 && dy >= 0 && dy < 7) {
      const ring = Math.max(Math.abs(dx - 3), Math.abs(dy - 3));
      return ring !== 2;
    }
  }
  return null;
}

// A decorative QR-like grid: real finder squares, pseudo-random data cells
// (a fixed seed keeps server and client renders identical).
function buildQr(): QrCell[] {
  let seed = 7;
  const next = () => {
    seed = (seed * 9301 + 49297) % 233280;
    return seed / 233280;
  };
  const cells: QrCell[] = [];
  for (let y = 0; y < QR_SIZE; y++) {
    for (let x = 0; x < QR_SIZE; x++) {
      const finder = inFinder(x, y);
      const on = finder ?? next() > 0.52;
      if (on) cells.push({ x, y });
    }
  }
  return cells;
}

const QR_CELLS = buildQr();

export function useTerminalPane(data: MotionValue<number>) {
  const percent = useTransform(data, (v) => `${Math.round(v * 100)}%`);
  return { qrCells: QR_CELLS, qrSize: QR_SIZE, percent };
}
