"use client";

import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import CodeEditor from "./codeEditor";
import Dashboard from "./dashboard";
import ExpoPhone from "./expoPhone";
import TerminalPane from "./terminalPane";
import styles from "./buildSceneStyles.module.css";
import type { BuildSceneProps } from "./buildSceneTypes";
import { useBuildScene } from "./useBuildScene";

const s = strings.scene;

// A dev setup that builds an app as the hero scrolls. VS Code and the terminal
// sit at the back; the Next.js dashboard and the Expo app come forward and
// fill with real data, then ship. Decorative.
export default function BuildScene({ phases }: BuildSceneProps) {
  const { vars, spin, reactPath } = useBuildScene(phases);

  return (
    <motion.div className={styles.scene} style={vars} aria-hidden="true">
      {/* React atom, turning slowly behind everything */}
      <motion.svg className={styles.atom} viewBox="0 0 24 24" style={{ rotate: spin }}>
        <path d={reactPath} />
      </motion.svg>

      {/* Back: the tools */}
      <div className={styles.back}>
        <CodeEditor />
        <TerminalPane data={phases.data} />
      </div>

      {/* Front: the product */}
      <Dashboard data={phases.data} />
      <ExpoPhone />

      {/* Ship */}
      <div className={styles.shipToast}>
        <span className={styles.shipCheck}>{s.check}</span>
        <div>
          <p className={styles.shipTitle}>{s.shipTitle}</p>
          <p className={styles.shipBody}>{s.shipBody}</p>
        </div>
        <div className={styles.shipLogos}>
          <ToolLogo name="Expo" size={16} tone="dark" />
          <ToolLogo name="Vercel" size={16} tone="dark" />
        </div>
      </div>
    </motion.div>
  );
}
