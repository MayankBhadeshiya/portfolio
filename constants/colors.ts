// Every color used on the site. CSS reads these as `var(--color-<kebab-name>)`;
// TS code imports `colors` directly.
export const colors = {
  cobalt: "#2f3cff",
  cobaltDeep: "#1f27c9",
  coral: "#ff5c7a",
  sun: "#ffc53d",
  sunLight: "#ffd469",
  mint: "#2fd69a",
  lilac: "#b79cff",
  ink: "#1b1442",
  inkA10: "rgb(27 20 66 / 0.1)",
  inkA15: "rgb(27 20 66 / 0.15)",
  paper: "#f5f4ff",
  white: "#ffffff",
  whiteA16: "rgb(255 255 255 / 0.16)",
  whiteA60: "rgb(255 255 255 / 0.6)",
  whiteA72: "rgb(255 255 255 / 0.72)",
  whiteA92: "rgb(255 255 255 / 0.92)",
  shadow: "rgb(16 10 60 / 0.35)",
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
