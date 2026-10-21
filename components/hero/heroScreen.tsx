"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import AwsBadge from "./awsBadge";
import BuildScene from "./buildScene";
import styles from "./heroStyles.module.css";
import { useHero } from "./useHero";

const s = strings.hero;

export default function Hero() {
  const { ref, phases, step, progress, reduceMotion, rise } = useHero();

  return (
    <section
      id="top"
      ref={ref}
      className={reduceMotion ? `${styles.hero} ${styles.static}` : styles.hero}
    >
      <div className={styles.sticky}>
        <div className={styles.copy}>
          <motion.p className={styles.jsx} {...rise(0)}>
            <span className={styles.punct}>{s.tagOpen}</span>
            <span className={styles.tag}>{s.tagName}</span>{" "}
            <span className={styles.attr}>{s.tagAttr}</span>
            <span className={styles.punct}>{s.tagEquals}</span>
            <span className={styles.str}>&quot;{profile.title}&quot;</span>
            <span className={styles.punct}>{s.tagClose}</span>
          </motion.p>

          <motion.h1 className={`display ${styles.headline}`} {...rise(1)}>
            {s.lines.map((line, i) => (
              <span key={line} className={styles.line} data-line={i}>
                {line}
              </span>
            ))}
          </motion.h1>

          <motion.p className={styles.intro} {...rise(2)}>
            {profile.intro}
          </motion.p>

          <motion.div className={styles.actions} {...rise(3)}>
            <a className={styles.primary} href="#work">
              {s.seeWork}
            </a>
            <a className={styles.secondary} href="#contact">
              {s.getInTouch}
            </a>
          </motion.div>

          <motion.div className={styles.cert} {...rise(4)}>
            <AwsBadge />
          </motion.div>

          <motion.div className={styles.stepper} {...rise(4)}>
            <ol className={styles.steps} aria-label={strings.a11y.buildProgress}>
              {s.steps.map((label, i) => (
                <li
                  key={label}
                  className={i <= step ? `${styles.step} ${styles.stepDone}` : styles.step}
                  aria-current={i === step ? "step" : undefined}
                >
                  <span className={styles.stepIcon}>
                    <ToolLogo name={s.stepTools[i]} size={14} />
                  </span>
                  {label}
                </li>
              ))}
            </ol>
            <div className={styles.track} aria-hidden="true">
              <motion.span className={styles.fill} style={{ scaleX: progress }} />
            </div>
          </motion.div>

          <motion.div className={styles.stack} {...rise(5)}>
            <span className={styles.stackLabel}>{s.stackLabel}</span>
            <ul className={styles.stackLogos}>
              {s.stack.map((tool) => (
                <li key={tool} title={tool}>
                  <ToolLogo name={tool} size={22} />
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <div className={styles.stage}>
          <BuildScene phases={phases} />
        </div>
      </div>
    </section>
  );
}
