import type { CSSProperties } from "react";

export type CodeToken = {
  className: "keyword" | "tag" | "attr" | "string" | "func" | "plain";
  text: string;
};

export type CodeLine = {
  key: number;
  number: number;
  // Carries --i, the line's index, for the typing reveal.
  style: CSSProperties;
  tokens: CodeToken[];
};

export type EditorTab = {
  name: string;
  tool: string;
};
