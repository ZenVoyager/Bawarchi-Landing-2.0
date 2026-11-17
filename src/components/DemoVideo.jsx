import { useRef } from 'react';

// Home's "Watch the demo": the voiced 53 s walk-through (made in reel/landing/demo.html) in a dialog.
// Nothing downloads until it opens; the click lets it start with sound, and closing pauses it
// (Esc, the close button or a click outside). Reopened, it carries on where it stopped.
// English subtitles (the voice is Hinglish) are a track the player's CC button turns on.
const DEMO = {
  small: '/video/bawarchi-demo-720.mp4',
  large: '/video/bawarchi-demo-1080.mp4',
  poster: '/video/bawarchi-demo-poster.webp',
  subs: '/video/bawarchi-demo.en.vtt',
};

export function DemoButton() {
  const dlg = useRef(null);
  const vid = useRef(null);

  const open = () => {
    const v = vid.current;
    if (!v.getAttribute('src')) {   // the first open: the poster too waits for it
      v.poster = DEMO.poster;
      v.src = innerWidth < 900 ? DEMO.small : DEMO.large;
    }
    if (v.ended) v.currentTime = 0;
    dlg.current.showModal();
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
          <video ref={vid} controls playsInline preload="none" width="1920" height="1080">
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
