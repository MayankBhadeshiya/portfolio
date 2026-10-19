"use client";

import { AnimatePresence, motion } from "motion/react";
import { strings } from "@/constants/strings";
import PhoneMock from "./phoneMock";
import styles from "./showcaseStyles.module.css";
import { useShowcase } from "./useShowcase";

export default function Showcase() {
  const { ref, chapters, active, chapter, progressScale, trackStyle, textMotion, screenMotion } =
    useShowcase();

  return (
    <section id="work" ref={ref} className={styles.track} style={trackStyle}>
      <div className={styles.sticky}>
        <div className={styles.copy}>
          <h2 className={styles.title}>{strings.showcase.title}</h2>

          <ol className={styles.chapters}>
            {chapters.map((c, i) => (
              <li
                key={c.screen}
                className={i === active ? styles.chapterActive : styles.chapter}
                aria-current={i === active ? "step" : undefined}
              >
                {c.label}
              </li>
            ))}
          </ol>

          <div className={styles.detail} aria-live="polite">
            <AnimatePresence mode="wait" initial={false}>
              <motion.div key={chapter.screen} {...textMotion}>
                <h3 className={styles.chapterTitle}>{chapter.title}</h3>
                <p className={styles.chapterBody}>{chapter.body}</p>
              </motion.div>
            </AnimatePresence>
          </div>

          <div className={styles.progress} role="presentation">
            <motion.span className={styles.progressFill} style={{ scaleX: progressScale }} />
          </div>
        </div>

        <div className={styles.stage}>
          <div className={styles.halo} aria-hidden="true" />
          <div className={styles.phone}>
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div key={chapter.screen} className={styles.screen} {...screenMotion}>
                <PhoneMock kind={chapter.screen} />
              </motion.div>
            </AnimatePresence>
            <span className={styles.island} aria-hidden="true" />
          </div>
        </div>
      </div>
    </section>
  );
}
