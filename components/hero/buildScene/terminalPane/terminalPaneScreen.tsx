"use client";

import { motion } from "motion/react";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import styles from "./terminalPaneStyles.module.css";
import type { TerminalPaneProps } from "./terminalPaneTypes";
import { useTerminalPane } from "./useTerminalPane";

const s = strings.scene;

// zsh session: create the app, start Metro (with an Expo Go QR code), bundle,
// then ship with EAS and Vercel. Each block appears with its phase.
export default function TerminalPane({ data }: TerminalPaneProps) {
  const { qrCells, qrSize, percent } = useTerminalPane(data);

  return (
    <div className={styles.terminal}>
      <div className={styles.bar}>
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.dot} />
        <span className={styles.title}>{s.terminalTitle}</span>
      </div>

      <div className={styles.body}>
        <p className={styles.line}>
          <span className={styles.prompt}>{s.prompt}</span> {s.cmdCreate}
        </p>

        <div className={`${styles.block} ${styles.blockCode}`}>
          <p className={styles.line}>
            <span className={styles.prompt}>{s.prompt}</span> {s.cmdStart}
          </p>
          <div className={styles.metro}>
            <svg className={styles.qr} viewBox={`0 0 ${qrSize} ${qrSize}`}>
              {qrCells.map((c) => (
                <rect key={`${c.x}-${c.y}`} x={c.x} y={c.y} width="1" height="1" />
              ))}
            </svg>
            <div>
              <p className={styles.muted}>{s.metroWaiting}</p>
              <p className={styles.muted}>
                <ToolLogo name="Expo" size={10} tone="dark" /> {s.scanQr}
              </p>
            </div>
          </div>
        </div>

        <div className={`${styles.block} ${styles.blockData}`}>
          <p className={styles.line}>
            {s.bundling}{" "}
            <span className={styles.progress}>
              <span className={styles.progressFill} />
            </span>{" "}
            <motion.span className={styles.percent}>{percent}</motion.span>
          </p>
          <p className={`${styles.line} ${styles.ok}`}>{s.bundled}</p>
        </div>

        <div className={`${styles.block} ${styles.blockShip}`}>
          <p className={styles.line}>
            <span className={styles.prompt}>{s.prompt}</span> {s.cmdEas}
          </p>
          <p className={`${styles.line} ${styles.ok}`}>
            {s.check} {s.easDone}
          </p>
          <p className={styles.line}>
            <span className={styles.prompt}>{s.prompt}</span> {s.cmdVercel}
          </p>
          <p className={`${styles.line} ${styles.ok}`}>
            {s.check} {s.vercelDone}
          </p>
        </div>
      </div>
    </div>
  );
}
