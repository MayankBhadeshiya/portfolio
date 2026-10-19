import { strings } from "@/constants/strings";

const s = strings.phoneStack;
const barHeights = [40, 65, 50, 85, 70, 95, 60];

// Three phone mockups that fan out on load, each sketching a kind of
// feature from the résumé: push notifications, payments, wearable data.
export default function PhoneStack() {
  return (
    <div className="phones" aria-hidden="true">
      <div className="phone phone-left">
        <div className="screen screen-coral">
          <div className="notch" />
          <div className="ui-time">{s.time}</div>
          <div className="ui-notif">
            <div className="ui-dot" />
            <div>
              <b>{s.notifShippedTitle}</b>
              <span>{s.notifShippedBody}</span>
            </div>
          </div>
          <div className="ui-notif ui-notif-faded">
            <div className="ui-dot" />
            <div>
              <b>{s.notifUpdateTitle}</b>
              <span>{s.notifUpdateBody}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="phone phone-right">
        <div className="screen screen-mint">
          <div className="notch" />
          <div className="ui-ring">
            <svg viewBox="0 0 100 100">
              <circle cx="50" cy="50" r="40" className="ring-track" />
              <circle cx="50" cy="50" r="40" className="ring-fill" />
            </svg>
            <span>{s.steps}</span>
            <small>{s.stepsLabel}</small>
          </div>
          <div className="ui-bars">
            {barHeights.map((h, i) => (
              <i key={i} style={{ height: `${h}%` }} />
            ))}
          </div>
        </div>
      </div>

      <div className="phone phone-center">
        <div className="screen screen-sun">
          <div className="notch" />
          <div className="ui-card">
            <span className="ui-card-chip" />
            <span className="ui-card-num">{s.cardNumber}</span>
          </div>
          <div className="ui-total">
            <span>{s.totalLabel}</span>
            <b>{s.totalAmount}</b>
          </div>
          <div className="ui-pay">{s.payNow}</div>
        </div>
      </div>
    </div>
  );
}
