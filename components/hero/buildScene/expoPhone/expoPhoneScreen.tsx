import { strings } from "@/constants/strings";
import ToolLogo from "@/components/toolLogo";
import styles from "./expoPhoneStyles.module.css";
import { useExpoPhone } from "./useExpoPhone";

const s = strings.scene;

// An Expo order-tracking app on an iPhone. Wireframe (sketch) → styled
// skeleton (code) → live orders with Fast Refresh (build) → push
// notification and store badges (ship).
export default function ExpoPhone() {
  const { orders, navItems, badges } = useExpoPhone();

  return (
    <div className={`accent-mobile ${styles.wrap}`}>
      <div className={styles.phone}>
        <div className={styles.screen}>
          <div className={styles.statusBar}>
            <span>{s.phoneTime}</span>
            <span className={styles.island} />
            <span className={styles.signal} />
          </div>

          {/* Push notification (ship) */}
          <div className={styles.notification}>
            <span className={styles.appIcon}>
              <ToolLogo name="Expo" size={12} tone="dark" />
            </span>
            <div className={styles.notifText}>
              <p className={styles.notifMeta}>
                <span>{s.notification.app}</span>
                <span>{s.notification.time}</span>
              </p>
              <p className={styles.notifTitle}>{s.notification.title}</p>
              <p className={styles.notifBody}>{s.notification.body}</p>
            </div>
          </div>

          <span className={styles.refresh}>
            <ToolLogo name="React" size={9} />
            {s.fastRefresh}
          </span>

          {/* Header */}
          <div className={`${styles.region} ${styles.head}`}>
            <span className={styles.wire} />
            <span className={styles.note}>{s.annotations.header}</span>
            <div className={`${styles.skin} ${styles.headSkin}`}>
              <div>
                <p className={styles.greeting}>{s.phoneGreeting}</p>
                <p className={styles.title}>{s.phoneTitle}</p>
              </div>
              <span className={styles.avatar} />
            </div>
          </div>

          <div className={`${styles.skin} ${styles.search}`}>{s.phoneSearch}</div>

          <div className={`${styles.skin} ${styles.segment}`}>
            {s.phoneTabs.map((tab, i) => (
              <span key={tab} className={i === 0 ? styles.segmentActive : undefined}>
                {tab}
              </span>
            ))}
          </div>

          {/* Orders */}
          <div className={`${styles.region} ${styles.list}`}>
            <span className={styles.wire} />
            <span className={styles.note}>{s.annotations.list}</span>
            <ul className={styles.skin}>
              {orders.map((order) => (
                <li key={order.name} className={styles.card} style={order.style}>
                  <span className={styles.cardSkeleton} />
                  <div className={styles.cardLive}>
                    <span className={styles.thumb}>{order.thumb}</span>
                    <div className={styles.cardText}>
                      <p className={styles.cardTop}>
                        <span className={styles.cardName}>{order.name}</span>
                        <span className={styles.cardPrice}>{order.price}</span>
                      </p>
                      <p className={styles.cardStatus}>
                        <i />
                        {order.status}
                      </p>
                      <div className={styles.tracker}>
                        {order.steps.map((done, i) => (
                          <span key={i} className={done ? styles.stepDone : undefined} />
                        ))}
                      </div>
                      {order.eta && <p className={styles.eta}>{order.eta}</p>}
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          {/* Tab bar */}
          <div className={`${styles.region} ${styles.tabbar}`}>
            <span className={styles.wire} />
            <span className={`${styles.note} ${styles.noteBottom}`}>{s.annotations.tabbar}</span>
            <nav className={`${styles.skin} ${styles.tabs}`}>
              {navItems.map((item, i) => (
                <span key={item.label} className={i === 1 ? styles.tabActive : undefined}>
                  <svg viewBox="0 0 24 24">
                    <path d={item.icon} />
                  </svg>
                  {item.label}
                </span>
              ))}
            </nav>
          </div>
          <span className={styles.homeIndicator} />
        </div>
      </div>

      <ul className={styles.badges}>
        {badges.map((badge) => (
          <li key={badge}>
            <ToolLogo name={badge} label size={13} />
          </li>
        ))}
      </ul>
    </div>
  );
}
