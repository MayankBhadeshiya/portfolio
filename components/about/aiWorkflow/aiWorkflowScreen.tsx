"use client";

import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import styles from "./aiWorkflowStyles.module.css";
import type { TermRowProps, TreeRowProps } from "./aiWorkflowTypes";
import { useAiWorkflow } from "./useAiWorkflow";

const s = strings.aiWorkflow;

function TreeRow({ item }: TreeRowProps) {
  return (
    <li className={styles.treeRow} style={{ paddingLeft: `${item.depth * 1.1}rem` }}>
      <span className={item.folder ? styles.folder : styles.file}>{item.name}</span>
    </li>
  );
}

function TermRow({ item }: TermRowProps) {
  if (item.kind === "cmd") {
    return (
      <>
        <span className={styles.prompt}>$</span> {item.text}
      </>
    );
  }
  return (
    <>
      <span className={styles.rowName}>{item.name}</span>
      <span className={styles.ok}>✓ {item.status}</span>
    </>
  );
}

export default function AiWorkflow() {
  const { rise, line } = useAiWorkflow();

  return (
    <div className={`card accent-ink ${styles.panel}`}>
      <motion.div className={styles.copy} {...rise(0)}>
        <p className="eyebrow">{s.eyebrow}</p>
        <h3 className={`display ${styles.title}`}>{s.title}</h3>
        <p className={styles.body}>{s.body}</p>
        <ul className={styles.points}>
          {s.points.map((p) => (
            <li key={p}>{p}</li>
          ))}
        </ul>
      </motion.div>

      <motion.div className={styles.window} {...rise(1)}>
        <div className={styles.bar}>
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.dot} />
          <span className={styles.barTitle}>{s.editorTitle}</span>
        </div>
        <div className={styles.panes}>
          <div className={styles.tree}>
            <p className={styles.paneLabel}>{s.treeLabel}</p>
            <ul>
              {s.tree.map((item) => (
                <TreeRow key={`${item.depth}-${item.name}`} item={item} />
              ))}
            </ul>
          </div>
          <ul className={styles.terminal}>
            {s.terminal.map((item, i) => (
              <motion.li
                key={`${item.kind}-${i}`}
                className={item.kind === "cmd" ? styles.cmd : styles.row}
                {...line(i)}
              >
                <TermRow item={item} />
              </motion.li>
            ))}
          </ul>
        </div>
      </motion.div>
    </div>
  );
}
