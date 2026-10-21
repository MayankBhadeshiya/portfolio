import { strings } from "@/constants/strings";
import styles from "./awsBadgeStyles.module.css";
import { useAwsBadge } from "./useAwsBadge";

const s = strings.hero.aws;

// A certification badge drawn in code: a navy hexagon with the "aws" mark and
// its orange smile, linking to the public Credly verification.
export default function AwsBadge() {
  const { url } = useAwsBadge();
  if (!url) return null;

  return (
    <a className={styles.badge} href={url} target="_blank" rel="noreferrer" aria-label={s.label}>
      <svg className={styles.hex} viewBox="0 0 40 46" aria-hidden="true">
        <path className={styles.hexShape} d="M20 1.5 38 12v22L20 44.5 2 34V12z" />
        <text className={styles.mark} x="20" y="24" textAnchor="middle">
          {s.mark}
        </text>
        <path className={styles.smile} d="M11 28.5q9 5 18 0" />
        <path className={styles.smile} d="M26.5 26.8l2.6 1.6-1.4 2.6" />
      </svg>
      <span className={styles.text}>
        <span className={styles.eyebrow}>{s.eyebrow}</span>
        <span className={styles.title}>{s.title}</span>
      </span>
      <span className={styles.verify}>{s.verify}</span>
    </a>
  );
}
