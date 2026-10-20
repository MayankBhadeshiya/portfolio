"use client";

import { strings } from "@/constants/strings";
import styles from "./lockedPreviewStyles.module.css";
import type { LockedPreviewProps } from "./lockedPreviewTypes";
import { useLockedPreview } from "./useLockedPreview";

const s = strings.lock;

// A code-made mock of the project's UI, blurred. Client work is under NDA,
// so "Preview" opens a locked notice instead of real screens.
export default function LockedPreview({ project, size = "card" }: LockedPreviewProps) {
  const { open, noticeId, contactHref, hasMobile, triggerRef, closeRef, show, hide } =
    useLockedPreview(project);

  return (
    <div
      className={`accent-${project.discipline} ${styles.frame} ${size === "hero" ? styles.hero : ""}`}
    >
      {/* Blurred mock UI */}
      <div className={styles.mock} aria-hidden="true" data-kind={project.preview}>
        {project.preview === "tv" ? (
          <div className={styles.tv}>
            <div className={styles.tvScreen}>
              <span className={styles.art} />
              <span className={styles.art} />
              <span className={styles.art} />
              <span className={styles.tvBar} />
            </div>
            <span className={styles.tvStand} />
            <div className={styles.phoneMini}>
              <span className={styles.art} />
              <span className={styles.line} />
              <span className={styles.line} />
            </div>
          </div>
        ) : (
          <div className={styles.web}>
            <div className={styles.webBar}>
              <i />
              <i />
              <i />
              <span />
            </div>
            <div className={styles.webBody}>
              <div className={styles.side}>
                <span />
                <span />
                <span />
                <span />
              </div>
              <div className={styles.main}>
                <div className={styles.kpis}>
                  <span />
                  <span />
                  <span />
                </div>
                <div className={styles.chart}>
                  <i style={{ height: "40%" }} />
                  <i style={{ height: "62%" }} />
                  <i style={{ height: "48%" }} />
                  <i style={{ height: "78%" }} />
                  <i style={{ height: "66%" }} />
                  <i style={{ height: "90%" }} />
                </div>
                <div className={styles.rows}>
                  <span />
                  <span />
                  <span />
                </div>
              </div>
            </div>
            {hasMobile && (
              <div className={styles.phoneMini}>
                <span className={styles.art} />
                <span className={styles.line} />
                <span className={styles.line} />
              </div>
            )}
          </div>
        )}
      </div>

      {/* Lock layer */}
      <div className={styles.veil}>
        <span className={styles.badge}>
          <svg viewBox="0 0 24 24" aria-hidden="true">
            <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z" />
          </svg>
          {s.badge}
        </span>
        <button
          ref={triggerRef}
          type="button"
          className={styles.previewButton}
          onClick={show}
          aria-expanded={open}
          aria-controls={noticeId}
        >
          {s.preview}
        </button>
      </div>

      {/* Locked notice */}
      <div
        id={noticeId}
        className={open ? `${styles.notice} ${styles.noticeOpen}` : styles.notice}
        role="dialog"
        aria-modal="false"
        aria-label={s.title}
        hidden={!open}
      >
        <span className={styles.lockIcon} aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6zM12 15v2" />
          </svg>
        </span>
        <p className={styles.noticeTitle}>{s.title}</p>
        <p className={styles.noticeBody}>{s.body}</p>
        <div className={styles.noticeActions}>
          <a className={styles.ask} href={contactHref} onClick={hide}>
            {s.ask}
          </a>
          <button ref={closeRef} type="button" className={styles.close} onClick={hide}>
            {s.close}
          </button>
        </div>
      </div>
    </div>
  );
}
