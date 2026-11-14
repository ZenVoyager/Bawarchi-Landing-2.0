// The one piece of product UI still drawn as live HTML: the sample invoice on the pricing page,
// which follows the prices in src/data/site.js. Every other product screen on the site is a real
// screenshot (src/components/Shot.jsx). Decorative markup (aria-hidden); the frame that holds it
// carries role="img" and an aria-label saying what it shows.

// An invoice for a plan (sample price, GST at 18%).
export function Invoice({ plan = 'Growth', price = 2799 }) {
  const gst = Math.round(price * 0.18 * 100) / 100;
  const total = Math.round((price + gst) * 100) / 100;
  const fmt = (n) => '₹' + n.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
  return (
    <div className="ui ui-bw bw-card bw-invoice" aria-hidden="true">
      <div className="bw-card__head"><b>Invoice · {plan} plan</b><small>Monthly</small></div>
      <div className="bw-pay__rows">
        <div><span>{plan} plan, one restaurant</span><span className="bw-num">{fmt(price)}</span></div>
        <div><span>GST at 18%</span><span className="bw-num">{fmt(gst)}</span></div>
        <div className="bw-invoice__total"><span>Total</span><span className="bw-num">{fmt(total)}</span></div>
      </div>
    </div>
  );
}
