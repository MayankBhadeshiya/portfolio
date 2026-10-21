import type { MotionValue } from "motion/react";

// Progress of each build phase, 0 → 1 (sketch is always fully drawn), plus
// the React atom's rotation in degrees.
export type BuildPhases = {
  code: MotionValue<number>;
  data: MotionValue<number>;
  ship: MotionValue<number>;
  spin: MotionValue<number>;
};

export type BuildSceneProps = {
  phases: BuildPhases;
};

// The fixed canvas size the scene is drawn at, and how much it's scaled by.
export type SceneFit = {
  width: number;
  height: number;
  scale: number;
};
