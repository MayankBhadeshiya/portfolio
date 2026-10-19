"use client";

import RevealWord from "./revealWord";
import styles from "./statementStyles.module.css";
import { useStatement } from "./useStatement";

export default function Statement() {
  const { ref, words, scrollYProgress } = useStatement();

  return (
    <section ref={ref} className={styles.track}>
      <div className={styles.sticky}>
        <p className={styles.text}>
          {words.map((word) => (
            <RevealWord key={word.key} progress={scrollYProgress} range={word.range}>
              {word.text}
            </RevealWord>
          ))}
        </p>
      </div>
    </section>
  );
}
