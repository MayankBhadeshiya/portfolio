// Every color used on the site. CSS reads these as `var(--color-<kebab-name>)`;
// TS code imports `colors` directly. (Brand logo colors come from Simple Icons
// data at runtime; see constants/tools.ts.)
//
// The palette borrows from the stack the site is about: Expo's near-black ink,
// React's blue, Expo's indigo and Node's green. Each accent stands for one
// discipline everywhere: indigo = mobile, blue = frontend, green = backend.
export const colors = {
  // Canvas
  paper: "#f7f8fa",
  surface: "#ffffff",
  grid: "rgb(28 32 36 / 0.05)",
  gridStrong: "rgb(28 32 36 / 0.14)",

  // Ink
  ink: "#1c2024",
  inkSoft: "#454b52",
  muted: "#6e757c",
  line: "rgb(28 32 36 / 0.1)",
  inkA06: "rgb(28 32 36 / 0.06)",
  shadow: "rgb(28 32 36 / 0.1)",
  shadowStrong: "rgb(28 32 36 / 0.25)",
  glass: "rgb(247 248 250 / 0.8)",

  // Discipline accents
  mobile: "#4630eb",
  mobileA12: "rgb(70 48 235 / 0.1)",
  mobileA25: "rgb(70 48 235 / 0.25)",
  frontend: "#087ea4",
  frontendA12: "rgb(8 126 164 / 0.1)",
  frontendA25: "rgb(8 126 164 / 0.25)",
  backend: "#3c873a",
  backendA12: "rgb(60 135 58 / 0.1)",
  backendA25: "rgb(60 135 58 / 0.25)",

  // React's signature cyan, for the orbiting atom and glows.
  reactCyan: "#58c4dc",
  reactCyanA15: "rgb(88 196 220 / 0.15)",
  reactCyanA35: "rgb(88 196 220 / 0.35)",

  // Dark editor and terminal in the hero.
  editor: "#16181d",
  editorRaised: "#23272f",
  editorLine: "rgb(255 255 255 / 0.08)",
  editorText: "#e4e7eb",
  editorMuted: "#8b929b",

  // Code syntax colors in the hero editor.
  synKeyword: "#c678dd",
  synTag: "#58c4dc",
  synAttr: "#e5c07b",
  synString: "#98c379",
  synFunc: "#61afef",

  // Status
  success: "#30a46c",
  white: "#ffffff",
} as const;

export type ColorToken = keyof typeof colors;

const toKebab = (name: string): string => name.replace(/[A-Z0-9]+/g, (m) => `-${m.toLowerCase()}`);

// Builds the `:root { --color-*: ... }` block injected by the root layout.
export function colorsToCssVars(): string {
  const declarations = (Object.keys(colors) as ColorToken[])
    .map((name) => `--color-${toKebab(name)}: ${colors[name]};`)
    .join("");
  return `:root{${declarations}}`;
}
