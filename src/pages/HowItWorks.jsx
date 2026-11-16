import { Page } from '../components/Shell.jsx';
import { MAIN_ACTION, SIGNUP_HREF } from '../data/site.js';
import { PlanPrice, PlanName } from '../components/Plan.jsx';
import { cloneElement } from 'react';
import { Screen, PhoneShot } from '../components/Shot.jsx';

/*
  type: software
  deal: hero collage; nav, close, footer, rhythm, buttons and mark as the site
  moment: iris-opens on #signup (the dark band: the form on the inverse ground)
  sections: hero · steps (six steps, two screens) · signup (booking-form) · close
  The form posts to a mailto on .example until a real form address exists (data-endpoint).
*/

// Each step's picture is the guest's own phone screen. fit: the picture's widest size in its card.
const STEPS = [
  { t: 'Scan the QR code to order', p: 'The guest points their phone camera at the code on the table. The menu opens for that table.', v: <Screen name="start-qr" sizes="300px" />, fit: 300, label: 'The app’s start screen: scan the QR code or go to your profile' },
  { t: 'Explore the menu', p: 'Dishes by category with prices and veg marks, and only what the kitchen has tonight.', v: <PhoneShot name="ph-categories" />, label: 'The guest’s menu: categories, then sandwiches with their prices, ratings and veg marks' },
  { t: 'Place the order', p: 'The guest sends the order with a note. It arrives in the kitchen with the table number.', v: <PhoneShot name="ph-order" />, label: 'The guest’s order: three dishes with their prices and quantities' },
  { t: 'Pay for the order by phone', p: 'UPI, card or at the counter, and the bill can be split between the guests at the table.', v: <Screen name="pay" sizes="300px" />, fit: 300, label: 'Checkout: a coupon code field, service charge and tax, the total of ₹260, the payment method and Place Order' },
  { t: 'Track the order', p: 'The guest sees when the kitchen starts and how long is left, without waving for a waiter.', v: <PhoneShot name="ph-preparing" />, label: 'Order tracking: 5 minutes left while the kitchen prepares the order' },
  { t: 'Serve the order and enjoy', p: 'Staff mark the order served. Once it is paid, the table shows as free for the next guests.', v: <PhoneShot name="ph-served" />, label: 'Order served: the e-receipt to download, the dishes and the bill total' },
];

export default function HowItWorks() {
  return (
    <Page current="ordering" actionHref="#signup">
      {/* hero: collage (the product cut by its frame, one result card that loops) */}
      <section className="hero hero--collage" data-enter aria-labelledby="hero-h">
        <div className="wrap"><div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <h1 id="hero-h">How QR ordering works at your tables</h1>
            <p className="hero__lead">A guest goes from sitting down to a paid bill in 6 steps, all on their own phone. Then sign up your restaurant with the form at the end of this page.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href="#signup">{MAIN_ACTION}</a>
              <a className="btn btn--secondary" href="#steps">See the six steps</a>
            </div>
          </div>
          <div className="hero__art span-6 start-7">
            <div className="ly-piece ly-piece--main">
              <Screen alt="Bawarchi's order management screen with each table's order, and the guest's phone showing their order being prepared, 5 minutes left" name="orders" eager sizes="(max-width: 1023px) 92vw, 760px" />
            </div>
            <div className="ly-piece ly-piece--note ly-piece--phone">
              <PhoneShot name="ph-preparing" className="bw-phone--fluid" sizes="200px" alt="The guest's phone: their order being prepared, 5 minutes left" />
            </div>
          </div>
        </div></div>
      </section>

      {/* steps: six, in two rows of three (two screens) */}
      <section className="section g2 steps--six" id="steps" style={{ '--hm': 2 }} aria-labelledby="steps-h">
        <div className="wrap">
          <div className="group">
            <div className="section-head">
              <h2 id="steps-h">From table QR to paid bill in 6 steps</h2>
            </div>
            <div className="panel steps__phone">
              <div className="stage stage--fade-b"><div className="at-rise" style={{ '--ax': 'max(16px, 50% - 135px)', '--ay': '24px', '--ay-sm': '24px' }}><PhoneShot alt="The guest's phone: the main menu, where the six steps start" name="ph-menu" /></div></div>
            </div>
            <div className="grid">
              {STEPS.slice(0, 3).map((s, i) => <Step key={s.t} n={i + 1} {...s} />)}
            </div>
          </div>
          <div className="grid">
            {STEPS.slice(3).map((s, i) => <Step key={s.t} n={i + 4} {...s} />)}
          </div>
        </div>
      </section>

      {/* booking-form: the signup, on the dark band, with the dealt iris-opens moment */}
      <section className="section ground-inverse" id="signup" data-moment="iris-opens" data-moment-opts='{"from": "base"}' aria-labelledby="signup-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-5">
              <h2 id="signup-h">Sign up your restaurant</h2>
              <p className="t-lead">Tell us about your restaurant. We reply within one working day to set up your menu and table codes.</p>
              <ul className="plain-facts">
                <li><PlanName />, <PlanPrice /></li>
                <li>Every feature included</li>
                <li><a className="link" href={SIGNUP_HREF}>Or create your account yourself now</a></li>
              </ul>
            </div>
            <div className="span-6 start-7 signup-panel">
              <form className="form" action="mailto:hello@bhawarchi.example" method="post" encType="text/plain" data-endpoint="" data-sent="Your restaurant signup is in. We reply within one working day." noValidate>
                <div className="field"><label htmlFor="f-rest">Restaurant name</label>
                  <input id="f-rest" name="restaurant" type="text" autoComplete="organization" required aria-describedby="f-rest-err" />
                  <p className="field__error" id="f-rest-err" hidden>Write your restaurant’s name.</p></div>
                <div className="field"><label htmlFor="f-name">Owner or contact person</label>
                  <input id="f-name" name="contact" type="text" autoComplete="name" required aria-describedby="f-name-err" />
                  <p className="field__error" id="f-name-err" hidden>Write the name of the person we should talk to.</p></div>
                <div className="field"><label htmlFor="f-email">Email</label>
                  <input id="f-email" name="email" type="email" autoComplete="email" inputMode="email" required aria-describedby="f-email-err" />
                  <p className="field__error" id="f-email-err" hidden>Write an email address with an @, like name@example.com.</p></div>
                <div className="field"><label htmlFor="f-phone">Phone</label>
                  <input id="f-phone" name="phone" type="tel" autoComplete="tel" inputMode="tel" required aria-describedby="f-phone-err" />
                  <p className="field__error" id="f-phone-err" hidden>Write a phone number we can call, with the area code.</p></div>
                <div className="field"><label htmlFor="f-city">Restaurant location</label>
                  <input id="f-city" name="location" type="text" autoComplete="address-level2" required aria-describedby="f-city-err" />
                  <p className="field__error" id="f-city-err" hidden>Write the city or area your restaurant is in.</p></div>
                <div className="btn-row"><button className="btn btn--primary" type="submit">{MAIN_ACTION}</button></div>
                <p className="form__status" role="status" data-form-status></p>
                <p className="t-small muted">We reply within one working day.</p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}

function Step({ n, t, p, v, fit = 270, label }) {
  return (
    <article className="card card--row card--open span-4 m-nolift">
      <span className="step-num">{n}</span>
      <h3>{t}</h3>
      <p>{p}</p>
      <div className="panel">
        <div className="stage stage--fade-b"><div className="at-rise fit" style={{ '--fit-max': fit + 'px', '--ax': `max(24px, 50% - ${fit / 2}px)`, '--ay': '28px', '--ay-sm': '16px' }}>{cloneElement(v, { alt: label })}</div></div>
      </div>
    </article>
  );
}
