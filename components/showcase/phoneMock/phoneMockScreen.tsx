import { strings } from "@/constants/strings";
import styles from "./phoneMockStyles.module.css";
import type { PhoneMockProps } from "./phoneMockTypes";
import { usePhoneMock } from "./usePhoneMock";

const s = strings.phone;

export default function PhoneMock({ kind }: PhoneMockProps) {
  const { waveBars, weekBars, ringOffset } = usePhoneMock();

  return (
    <div className={styles.screen} aria-hidden="true">
      <div className={styles.status}>{s.time}</div>

      {kind === "payments" && (
        <div className={styles.body}>
          <p className={styles.heading}>{s.payments.heading}</p>
          <div className={styles.card}>
            <span className={styles.chip} />
            <span className={styles.cardNumber}>{s.payments.cardNumber}</span>
          </div>
          <dl className={styles.rows}>
            <div>
              <dt>{s.payments.item}</dt>
              <dd>{s.payments.itemPrice}</dd>
            </div>
            <div>
              <dt>{s.payments.tax}</dt>
              <dd>{s.payments.taxPrice}</dd>
            </div>
            <div className={styles.total}>
              <dt>{s.payments.total}</dt>
              <dd>{s.payments.totalPrice}</dd>
            </div>
          </dl>
          <span className={styles.payButton}>{s.payments.pay}</span>
        </div>
      )}

      {kind === "voice" && (
        <div className={`${styles.body} ${styles.center}`}>
          <span className={styles.livePill}>{s.voice.status}</span>
          <div className={styles.avatar}>
            <span className={styles.pulse} />
            <span className={`${styles.pulse} ${styles.pulseLate}`} />
          </div>
          <p className={styles.caller}>{s.voice.caller}</p>
          <p className={styles.timer}>{s.voice.timer}</p>
          <div className={styles.wave}>
            {waveBars.map((h, i) => (
              <i key={i} style={{ height: `${h}%`, animationDelay: `${i * 70}ms` }} />
            ))}
          </div>
          <div className={styles.callActions}>
            <span className={styles.callButton}>{s.voice.mute}</span>
            <span className={`${styles.callButton} ${styles.endButton}`}>{s.voice.end}</span>
          </div>
        </div>
      )}

      {kind === "health" && (
        <div className={styles.body}>
          <div className={styles.ring}>
            <svg viewBox="0 0 120 120">
              <circle cx="60" cy="60" r="50" className={styles.ringTrack} />
              <circle
                cx="60"
                cy="60"
                r="50"
                className={styles.ringFill}
                style={{ strokeDashoffset: ringOffset }}
              />
            </svg>
            <div className={styles.ringLabel}>
              <b>{s.health.steps}</b>
              <span>{s.health.stepsLabel}</span>
            </div>
          </div>
          <div className={styles.heart}>
            <b>{s.health.heartRate}</b>
            <span>{s.health.heartRateLabel}</span>
          </div>
          <p className={styles.small}>{s.health.week}</p>
          <div className={styles.week}>
            {weekBars.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      )}

      {kind === "ship" && (
        <div className={styles.body}>
          <p className={styles.heading}>{s.ship.heading}</p>
          <div className={styles.update}>
            <b>{s.ship.updateTitle}</b>
            <span>{s.ship.updateBody}</span>
            <i className={styles.updateBar} />
          </div>
          <ul className={styles.builds}>
            {s.ship.builds.map((b) => (
              <li key={b.name}>
                <span>{b.name}</span>
                <span className={styles.buildStatus}>{b.status}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
