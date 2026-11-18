import { useRef } from 'react';

// Home's "Watch the demo": the voiced 53 s walk-through in a dialog. Phones get it upright, made for their
// screen (reel/landing/demo-vertical.html); wider screens get it wide (demo.html). Both carry the same voice
// and timing, so one subtitle file serves both.
// Nothing downloads until it opens; the click lets it start with sound, and closing pauses it
// (Esc, the close button or a click outside). Reopened, it carries on where it stopped.
// English subtitles (the voice is Hinglish) are a track the player's CC button turns on.
const DEMO = {
  tall: { src: '/video/bawarchi-demo-vertical.mp4', poster: '/video/bawarchi-demo-vertical-poster.webp' },
  small: { src: '/video/bawarchi-demo-720.mp4', poster: '/video/bawarchi-demo-poster.webp' },
  large: { src: '/video/bawarchi-demo-1080.mp4', poster: '/video/bawarchi-demo-poster.webp' },
  subs: '/video/bawarchi-demo.en.vtt',
};
const PHONE = '(max-width: 767px)';   // as the dialog's tall shape in site.css

export function DemoButton() {
  const dlg = useRef(null);
  const vid = useRef(null);

  const open = () => {
    const v = vid.current, d = dlg.current;
    if (!v.getAttribute('src')) {   // the first open picks the copy; its poster too waits for it
      const tall = matchMedia(PHONE).matches;
      const pick = tall ? DEMO.tall : innerWidth < 900 ? DEMO.small : DEMO.large;
      d.dataset.shape = tall ? 'tall' : 'wide';
      v.poster = pick.poster;
      v.src = pick.src;
    }
    if (v.ended) v.currentTime = 0;
    d.showModal();
    v.play().catch(() => {});
  };
  const close = () => dlg.current.close();

  return (
    <>
      <button type="button" className="btn btn--secondary" onClick={open} aria-haspopup="dialog">
        <svg className="btn__play" viewBox="0 0 12 12" aria-hidden="true"><path d="M3.2 1.6v8.8L10.4 6z" /></svg>
        Watch the demo
      </button>
      <dialog ref={dlg} className="demo" aria-label="Bawarchi demo video, 53 seconds"
        onClose={() => vid.current.pause()}
        onClick={(e) => { if (e.target === dlg.current) close(); }}>
        <div className="demo__frame">
          <video ref={vid} controls playsInline preload="none">
            <track kind="subtitles" src={DEMO.subs} srcLang="en" label="English" />
          </video>
        </div>
        <button type="button" className="demo__close" onClick={close} aria-label="Close the demo">
          <svg viewBox="0 0 16 16" aria-hidden="true"><path d="M3.5 3.5l9 9M12.5 3.5l-9 9" /></svg>
        </button>
      </dialog>
    </>
  );
}
