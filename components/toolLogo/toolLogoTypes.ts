// "light" for logos on light backgrounds, "dark" for the hero's editor panels.
export type ToolLogoTone = "light" | "dark";

export type ToolLogoProps = {
  // Tool name as written in data/profile.ts, e.g. "Next.js".
  name: string;
  // Show the name next to the logo, as a chip.
  label?: boolean;
  tone?: ToolLogoTone;
  // Logo size in px.
  size?: number;
};
