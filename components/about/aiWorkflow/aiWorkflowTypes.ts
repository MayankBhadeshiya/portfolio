import type { strings } from "@/constants/strings";

export type TreeItem = (typeof strings.aiWorkflow.tree)[number];
export type TerminalLine = (typeof strings.aiWorkflow.terminal)[number];

export type TreeRowProps = { item: TreeItem };
export type TermRowProps = { item: TerminalLine };
