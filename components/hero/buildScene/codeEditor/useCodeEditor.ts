import type { CSSProperties } from "react";
import { strings } from "@/constants/strings";
import type { CodeLine, CodeToken, EditorTab } from "./codeEditorTypes";

const s = strings.scene;

// Token kind (from strings.scene.code) → CSS module class.
const KIND_CLASS: Record<string, CodeToken["className"]> = {
  k: "keyword",
  t: "tag",
  a: "attr",
  s: "string",
  f: "func",
  p: "plain",
};

export function useCodeEditor() {
  const tabs: EditorTab[] = s.editorTabs.map((name, i) => ({ name, tool: s.editorTabTools[i] }));

  const lines: CodeLine[] = s.code.map((tokens, i) => ({
    key: i,
    number: i + 1,
    style: { "--i": i } as CSSProperties,
    tokens: tokens.map(([kind, text]) => ({ className: KIND_CLASS[kind] ?? "plain", text })),
  }));

  // --n tells the CSS how many lines share the typing progress.
  const editorStyle = { "--n": lines.length } as CSSProperties;

  const status = { branch: strings.editor.branch, language: strings.editor.language };

  return { tabs, lines, editorStyle, status };
}
