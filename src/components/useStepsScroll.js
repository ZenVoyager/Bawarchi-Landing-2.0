import { useEffect } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

// How it works' six steps: one row that the page's scroll moves sideways. While the section is held
// (CSS: .steps--row.is-hscroll, the section taller by the row's overflow and its .wrap sticky), a
// scrubbed tween slides the row left until its last step meets the right edge; each step fades and
// rises in as it comes in from the right, and the bar beside the heading fills with the progress.
// Held by CSS sticky, not ScrollTrigger's pin, whose wrapper would break the kit's main > section rules.
// From 768px and without reduced motion; otherwise the row scrolls by hand (or, on a phone, stacks).
const QUERY = '(min-width: 768px) and (prefers-reduced-motion: no-preference)';

export function useStepsScroll(ref) {
  useEffect(() => {
    const section = ref.current;
    if (!section) return;
    const viewport = section.querySelector('.steps__viewport');
    const track = section.querySelector('.steps__track');
    const bar = section.querySelector('.steps__bar');
    if (!viewport || !track) return;

    gsap.registerPlugin(ScrollTrigger);
    const mm = gsap.matchMedia();

    mm.add(QUERY, () => {
      section.classList.add('is-hscroll');
      viewport.scrollLeft = 0;

      // how far the row overflows its column: the sideways run, and the extra height that holds it
      const dist = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
      const setRun = () => section.style.setProperty('--hs-run', dist() + 'px');
      setRun();
      ScrollTrigger.addEventListener('refreshInit', setRun);

      const run = {
        trigger: section,
        start: 'top top',
        end: () => '+=' + dist(),
        scrub: 0.6,                 // the row trails the scroll a little, so it glides
        invalidateOnRefresh: true,
      };
      const slide = gsap.to(track, { x: () => -dist(), ease: 'none', scrollTrigger: run });
      if (bar) gsap.fromTo(bar, { scaleX: 0 }, { scaleX: 1, ease: 'none', scrollTrigger: { ...run } });

      // each step that starts off to the right fades and rises in as it crosses into view
      track.querySelectorAll('.steps__card').forEach((card) => {
        gsap.fromTo(card, { autoAlpha: 0.15, y: 48 }, {
          autoAlpha: 1, y: 0, ease: 'power2.out',
          scrollTrigger: { trigger: card, containerAnimation: slide, start: 'left 96%', end: 'left 70%', scrub: true },
        });
      });

      if (document.fonts) document.fonts.ready.then(() => ScrollTrigger.refresh());

      return () => {
        ScrollTrigger.removeEventListener('refreshInit', setRun);
        section.classList.remove('is-hscroll');
        section.style.removeProperty('--hs-run');
      };
    });

    return () => mm.revert();
  }, [ref]);
}
