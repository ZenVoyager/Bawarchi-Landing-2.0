import { useEffect } from 'react';
import { BRAND, MAIN_ACTION, SIGNUP_HREF, NAV, FEATURE_GROUPS } from '../data/site.js';
import { PlanPrice, PlanName } from './Plan.jsx';
import { Arrow } from './Arrow.jsx';
import { Screen } from './Shot.jsx';

const Chev = () => (
  <svg className="chev" viewBox="0 0 12 12" aria-hidden="true">
    <path d="M3 4.5l3 3 3-3" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
  </svg>
);

export function Logo() {
  return (
    <a className="nav__logo" href="/">
      {/* <span className="mark mark--initial" aria-hidden="true">B</span> */}
      Project <b>Bawarchi<span>.</span></b>
    </a>
  );
}

// nav-mega (dealt): the Features word opens the full-width panel with the nine features in
// three columns and one menu card; the other words are plain links to their pages.
export function Nav({ current, actionHref = SIGNUP_HREF }) {
  return (
    <header className="nav">
      <div className="wrap nav__bar">
        <a className="skip-link" href="#top">Skip to content</a>
        <Logo />
        <nav className="nav__links" aria-label="Main">
          <div className="nav__item">
            <a className="nav__link" href="/features.html" aria-current={current === 'features' ? 'page' : undefined}>
              Features <Chev />
            </a>
            <div className="nav__menu">
              <div className="wrap grid">
                {FEATURE_GROUPS.map((g) => (
                  <div className="menu-col span-3" key={g.id}>
                    <p className="t-label">{g.label}</p>
                    {g.items.map((it) => (
                      <a href={`/features.html#${g.id}`} key={it.name}>
                        {it.name}
                        <span>{it.line}</span>
                      </a>
                    ))}
                  </div>
                ))}
                <a className="menu-card span-3" href="/pricing.html#plans">
                  <div className="panel menu-card__panel">
                    <div className="stage stage--fade-br">
                      <div className="at-corner wide" style={{ '--ax': '24px', '--ay': '20px', '--w': '440px' }}>
                        <Screen name="dash-orders" sizes="440px" />
                      </div>
                    </div>
                  </div>
                  <span className="t-card"><PlanName />, <PlanPrice /></span>
                  <span className="t-small muted">One plan with every feature</span>
                </a>
              </div>
            </div>
          </div>
          {NAV.slice(1).map((n) => (
            <div className="nav__item" key={n.key}>
              <a className="nav__link" href={n.href} aria-current={current === n.key ? 'page' : undefined}>{n.label}</a>
            </div>
          ))}
        </nav>
        <div className="nav__actions">
          <a className="btn btn--primary" href={actionHref}>{MAIN_ACTION}</a>
        </div>
        <button className="nav__toggle" type="button" aria-expanded="false" aria-label="Menu">
          <svg width="18" height="18" viewBox="0 0 18 18" aria-hidden="true"><path d="M2 5h14M2 13h14" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" /></svg>
        </button>
      </div>
    </header>
  );
}

// footer.closing: row 1 the dealt close (close-word), row 2 the dark footer's directory (footer-dark).
export function Closing({ heading = 'Put your menu on every table', line, actionHref = SIGNUP_HREF }) {
  return (
    <footer className="footer closing footer--dark ground-inverse g2m" id="contact" aria-labelledby="close-h">
      <div className="wrap">
        <div className="closing__cta close--word">
          <div className="section-head--split">
            <div>
              <h2 id="close-h">{heading}</h2>
              <p className="t-lead">{line || <>One plan with every feature, <PlanPrice />.</>}</p>
            </div>
            <a className="btn btn--primary" href={actionHref}>{MAIN_ACTION}<Arrow /></a>
          </div>
          <p className="close__word" aria-hidden="true" >{BRAND}</p>
        </div>
        <div className="closing__links">
          <div className="grid">
            <div className="span-4">
              <p className="footer__lede">QR ordering and restaurant software.</p>
            </div>
            <div className="span-2 footer__col">
              <h3>Features</h3>
              <ul>
                <li><a href="/features.html#guests">For guests</a></li>
                <li><a href="/features.html#floor">For the floor</a></li>
                <li><a href="/features.html#office">For the office</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Ordering</h3>
              <ul>
                <li><a href="/how-it-works.html#steps">The six steps</a></li>
                <li><a href="/how-it-works.html#signup">Signup form</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Pricing</h3>
              <ul>
                <li><a href="/pricing.html#plans">Plans</a></li>
                <li><a href="/pricing.html#compare">Plan comparison</a></li>
                <li><a href="/pricing.html#questions">Questions</a></li>
              </ul>
            </div>
            <div className="span-2 footer__col">
              <h3>Company</h3>
              <ul>
                <li><a href="/">Home</a></li>
                <li><a href="mailto:hello@bawarchi.example">Email us</a></li>
              </ul>
            </div>
          </div>
          <div className="footer__legal">
            <span>&copy; 2026 {BRAND}</span>
            <div className="socials"></div>
          </div>
        </div>
      </div>
    </footer>
  );
}

// Loads the design kit's scripts once React has put the page in the DOM (they read the DOM on
// start: nav panel and phone sheet, hover layer, hero entrance, tabs, forms, moments).
const KIT = [
  '/assets/system.js',
  '/assets/motion/motion.js',
  '/assets/layout/layout.js',
  '/assets/diagrams/mount.js',
  '/assets/moments/moments.js',
];
export function Kit() {
  useEffect(() => {
    if (window.__bwKit) return;
    window.__bwKit = true;
    for (const src of KIT) {
      const s = document.createElement('script');
      s.type = 'module';
      s.src = src;
      document.body.appendChild(s);
    }
  }, []);
  return null;
}

export function Page({ current, children, actionHref, close }) {
  return (
    <>
      <Nav current={current} actionHref={actionHref} />
      <main id="top">{children}</main>
      <Closing actionHref={actionHref} {...close} />
      <Kit />
    </>
  );
}
