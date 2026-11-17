import { useEffect, useRef } from 'react';
import { Shot } from './Shot.jsx';

// Home's hero, alive: a silent 20 s loop of one order's trip (a guest at Table 04 orders, the dashboard
// accepts it, cooks it, counts the paneer and banks the bill), made in reel/landing/hero.html.
// It lies over the dashboard screenshot, whose picture is the loop's first and last frame, so it slips in
// unseen once it plays. The screenshot stays the page's first picture: the video only loads after the
// page has, and never with reduced motion or Save-Data. Off screen it pauses.
const VIDEO = { small: '/video/hero-loop-960.mp4', large: '/video/hero-loop-1920.mp4' };

export function HeroVideo({ className = '', sizes }) {
  const ref = useRef(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    if (matchMedia('(prefers-reduced-motion: reduce)').matches || navigator.connection?.saveData) return;

    let seen = true;
    const play = () => { if (seen && v.src) v.play().catch(() => {}); };
    const start = () => {
      v.muted = true;   // set as a property too: browsers only autoplay a muted video
      v.src = innerWidth < 640 ? VIDEO.small : VIDEO.large;
      play();
    };
    const onPlaying = () => v.classList.add('is-playing');
    v.addEventListener('playing', onPlaying);

    const io = new IntersectionObserver(([e]) => {
      seen = e.isIntersecting;
      if (seen) play(); else v.pause();
    });
    io.observe(v);

    let idle;
    const later = () => { idle = setTimeout(start, 300); };
    if (document.readyState === 'complete') later(); else addEventListener('load', later, { once: true });

    return () => {
      clearTimeout(idle);
      removeEventListener('load', later);
      v.removeEventListener('playing', onPlaying);
      io.disconnect();
    };
  }, []);

  return (
    <div className={'ui shot ' + className} aria-hidden="true">
      <Shot name="dashboard" sizes={sizes} eager />
      <video ref={ref} className="shot__video" width="1920" height="1248" muted loop playsInline preload="none" disablePictureInPicture />
    </div>
  );
}
