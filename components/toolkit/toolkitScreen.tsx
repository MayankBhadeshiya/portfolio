"use client";

import { motion } from "motion/react";
import { profile } from "@/data/profile";
import { strings } from "@/constants/strings";
import styles from "./toolkitStyles.module.css";
import { useToolkit } from "./useToolkit";

export default function Toolkit() {
  const { sectionRef, rowRef, x, sectionStyle, pinned } = useToolkit();

  return (
    <section
      id="toolkit"
      ref={sectionRef}
      className={styles.section}
      style={sectionStyle}
      aria-labelledby="toolkit-title"
    >
      <div className={pinned ? styles.stickyPinned : styles.sticky}>
        <motion.div ref={rowRef} className={styles.row} style={{ x }}>
          <div className={styles.intro}>
            <h2 id="toolkit-title" className={styles.title}>
              {strings.toolkit.title}
            </h2>
          </div>

          {profile.skills.map((group) => (
            <div key={group.name} className={styles.group}>
              <div className={styles.groupHead}>
                <h3 className={styles.groupName}>{group.name}</h3>
                <span className={styles.count}>
                  {group.skills.length} {strings.toolkit.countSuffix}
                </span>
              </div>
              <ul className={styles.skills}>
                {group.skills.map((skill) => (
                  <li key={skill}>{skill}</li>
                ))}
              </ul>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
