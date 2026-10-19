// Every color used on the site. CSS reads these as `var(--color-<kebab-name>)`;
// TS code imports `colors` directly.
export const colors = {
  night: "#0e1626",
  nightRaised: "#162036",
  nightDeep: "#090f1b",
  navBg: "rgb(14 22 38 / 0.72)",

  text: "#e9ecf5",
  textMuted: "#8d96b0",
  textDim: "rgb(233 236 245 / 0.16)",
  line: "rgb(233 236 245 / 0.12)",

  periwinkle: "#8b9cff",
  periwinkleA20: "rgb(139 156 255 / 0.2)",
  periwinkleA08: "rgb(139 156 255 / 0.08)",
  apricot: "#ffb27a",
  apricotA20: "rgb(255 178 122 / 0.2)",
  mint: "#7ee0b8",
  rose: "#ff8fa3",

  white: "#ffffff",
  whiteA08: "rgb(255 255 255 / 0.08)",
  whiteA60: "rgb(255 255 255 / 0.6)",
  shadow: "rgb(5 8 15 / 0.6)",
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
