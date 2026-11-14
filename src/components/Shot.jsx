// Bhawarchi's real product screens: web copies of the design screenshots in "UI Designs Screenshots/",
// made by scripts/shots.mjs (npm run shots) into public/shots/. The images are decorative (alt=""):
// the frame that holds one carries role="img" and an aria-label saying what it shows.
import SHOTS from '../data/shots.json';

export function Shot({ name, sizes = '(max-width: 639px) 92vw, 640px', eager = false }) {
  const s = SHOTS[name];
  if (!s) throw new Error(`No screenshot called "${name}": add it to scripts/shots.mjs and run npm run shots`);
  const url = (w) => `/shots/${name}-${w}.webp`;
  return (
    <img
      className="shot__img"
      src={url(s.w)}
      srcSet={s.widths.map((w) => `${url(w)} ${w}w`).join(', ')}
      sizes={sizes}
      width={s.w}
      height={s.h}
      alt=""
      loading={eager ? 'eager' : 'lazy'}
      decoding="async"
      fetchpriority={eager ? 'high' : undefined}
    />
  );
}

// A screen from the admin dashboard, in a dark rounded frame.
export function Screen({ name, className = '', sizes, eager }) {
  return (
    <div className={'ui shot ' + className} aria-hidden="true">
      <Shot name={name} sizes={sizes} eager={eager} />
    </div>
  );
}

// A screen from the guest's phone, in a phone.
export function PhoneShot({ name, className = '', sizes = '270px' }) {
  return (
    <div className={'ui bw-phone shot-phone ' + className} aria-hidden="true">
      <div className="bw-phone__screen"><Shot name={name} sizes={sizes} /></div>
    </div>
  );
}
