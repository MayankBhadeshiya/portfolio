// Static shapes for the mock charts. Kept here so the screen file stays markup-only.
const waveBars = [30, 55, 80, 45, 95, 60, 75, 40, 85, 50, 65, 35];
const weekBars = [45, 70, 55, 90, 65, 100, 60];

// Ring circumference is 2πr with r = 50; 68% of the daily goal is filled.
const RING_CIRCUMFERENCE = 2 * Math.PI * 50;
const ringOffset = RING_CIRCUMFERENCE * (1 - 0.68);

export function usePhoneMock() {
  return { waveBars, weekBars, ringOffset };
}
