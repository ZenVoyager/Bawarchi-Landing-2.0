import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// Home's hero: as the page scrolls, the dashboard window grows until it fills the screen under the header.
// A GSAP timeline scrubbed by ScrollTrigger: over the first RUN of a screen of scroll the heading fades
// and lifts, the window rises over it and stretches down to GAP above the screen's foot, and its
// screenshot scales up. The hero is held in place meanwhile by CSS (.hero.is-scrub in site.css: the
// section is taller and its .wrap is sticky), not by ScrollTrigger's pin, whose wrapper would break
// the kit's main > .hero rules. Runs only on a landscape screen from 640px without reduced motion;
// gsap.matchMedia undoes everything otherwise, and the hero stands as it was built.
const GAP = 16;       // the full window's distance from the header and from the screen's foot
const RUN = 0.55;     // scroll it takes to fill, as a share of the screen's height (site.css holds 70%)
const MAX_W = 1180;   // the widest the screenshot grows to
const QUERY = '(min-width: 640px) and (min-aspect-ratio: 1/1) and (prefers-reduced-motion: no-preference)';

export function useHeroScrub(ref) {
  useEffect(() => {
    const hero = ref.current;
    if (!hero) return;
    const wrap = hero.querySelector(':scope > .wrap');
    const text = hero.querySelector('.hero-text');
    const head = hero.querySelector('.hero__c');
    const win = hero.querySelector('.hero__window');
    const piece = win && win.querySelector('.ly-piece');
    if (!wrap || !text || !head || !win || !piece) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add(QUERY, () => {
      hero.classList.add('is-scrub');

      // Where the window sits unscrolled and where it ends, from layout only (offset sizes and boxes that
      // the timeline never moves), so it reads the same at any scroll position on a refresh.
      const m = { mt: 0, up: 0, down: 0, scale: 1 };
      const measure = () => {
        const cs = getComputedStyle(hero);
        const nav = parseFloat(cs.getPropertyValue('--nav')) || 72;
        m.mt = parseFloat(cs.getPropertyValue('--s-6')) || 32;
        const w = wrap.getBoundingClientRect();
        const t = text.getBoundingClientRect();
        const top0 = t.top - w.top + head.offsetHeight + m.mt;          // the window's top, from the wrap's
        const h0 = Math.max(t.height - head.offsetHeight - m.mt, parseFloat(getComputedStyle(win).minHeight) || 0);
        m.up = Math.max(0, top0 - (nav + GAP));
        let down = Math.max(0, wrap.offsetHeight - GAP - (top0 + h0));
        const full = h0 + m.up + down;
        const byW = Math.min(MAX_W, win.offsetWidth - 48) / piece.offsetWidth;
        const byH = (full * 0.94 - piece.offsetTop) / piece.offsetHeight;
        m.scale = Math.max(1, Math.min(byW, byH));
        // no taller than the screenshot needs with the fade under it, so a tall screen shows no empty frame
        const need = (piece.offsetTop + piece.offsetHeight * m.scale) / 0.92;
        if (full > need) down = Math.max(0, down - (full - need));
        m.down = down;
      };
      measure();
      ScrollTrigger.addEventListener('refreshInit', measure);

      const tl = gsap.timeline({
        defaults: { ease: 'none' },
        scrollTrigger: {
          trigger: hero,
          start: 'top top',
          end: () => '+=' + Math.round(innerHeight * RUN),
          scrub: 0.8,                 // the window trails the scroll by 0.8s, so it eases rather than jumps
          invalidateOnRefresh: true,  // re-read the function values below after a resize
        },
      });
      tl.fromTo(win,
        { marginTop: () => m.mt, marginBottom: 0 },
        { marginTop: () => m.mt - m.up, marginBottom: () => -m.down, duration: 1 }, 0)
        .fromTo(piece,
          { xPercent: -50, scale: 1, transformOrigin: '50% 0' },
          { scale: () => m.scale, duration: 1 }, 0)
        .to(head, { y: -40, autoAlpha: 0, duration: 0.6 }, 0);

      // the heading's height settles once the web fonts arrive
      if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', measure);
        hero.classList.remove('is-scrub');
      };
    });

    return () => mm.revert();
  }, [ref]);
}
