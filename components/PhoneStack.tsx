// Three phone mockups that fan out on load, each sketching a kind of
// feature from the résumé: push notifications, payments, wearable data.
export default function PhoneStack() {
  return (
    <div className="phones" aria-hidden="true">
      <div className="phone phone-left">
        <div className="screen screen-coral">
          <div className="notch" />
          <div className="ui-time">9:41</div>
          <div className="ui-notif">
            <div className="ui-dot" />
            <div>
              <b>Order shipped</b>
              <span>Arriving tomorrow</span>
            </div>
          </div>
          <div className="ui-notif ui-notif-faded">
            <div className="ui-dot" />
            <div>
              <b>Update installed</b>
              <span>v2.4 is live</span>
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
            <span>8,204</span>
            <small>steps</small>
          </div>
          <div className="ui-bars">
            {[40, 65, 50, 85, 70, 95, 60].map((h, i) => (
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
            <span className="ui-card-num">•••• 4242</span>
          </div>
          <div className="ui-total">
            <span>Total</span>
            <b>₹1,499</b>
          </div>
          <div className="ui-pay">Pay now</div>
        </div>
      </div>
    </div>
  );
}
