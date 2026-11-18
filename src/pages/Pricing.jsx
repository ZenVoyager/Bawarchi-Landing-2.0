import { Page } from '../components/Shell.jsx';
import { MAIN_ACTION, SIGNUP_HREF, SIGNIN_ACTION, SIGNIN_HREF, CONTACT_MAILTO } from '../data/site.js';
import { Invoice } from '../components/ui/Ui.jsx';
import { Screen } from '../components/Shot.jsx';
import { usePlan, formatPrice, perLabel } from '../components/Plan.jsx';

/*
  One plan, managed by the master admin in the admin panel (Subscription tab).
  The page prerenders with DEFAULT_PLAN from src/data/site.js and swaps in the
  live plan from the API after load.
*/

export default function Pricing() {
  const plan = usePlan();
  const price = formatPrice(plan);
  const per = perLabel(plan);
  const cycle = plan.billingCycle === 'monthly' ? 'monthly' : 'yearly';

  return (
    <Page current="pricing">
      {/* hero: split */}
      <section className="hero hero--split hero--text-mid" data-enter aria-labelledby="hero-h">
        <div className="wrap"><div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <h1 id="hero-h">One plan, every feature</h1>
            <p className="hero__lead">{plan.name} gives your restaurant QR ordering, orders, tables, menu, stock and analytics for {price} {per}.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={SIGNUP_HREF}>{MAIN_ACTION}</a>
              <a className="btn btn--secondary" href="#plans">See what's included</a>
            </div>
          </div>
          <div className="hero__media hero__media--ui span-6 start-7">
            <Screen alt="Bawarchi's dashboard: today's orders and revenue, the daily goal, stock running low, six months of revenue and the active orders" name="dashboard-full" eager sizes="(max-width: 1023px) 92vw, 640px" />
          </div>
        </div></div>
      </section>

      {/* the plan */}
      <section className="section" id="plans" aria-labelledby="plans-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="plans-h">Simple pricing. <span className="muted">One plan with every feature, priced per outlet.</span></h2>
          </div>
          {/* the one plan: a wide card, what you pay on a dark panel and what you get beside it */}
          <article className="plan-x" aria-labelledby="plan-name">
            <div className="plan-x__buy ground-inverse">
              <div className="plan-x__tags">
                <h3 className="plan-x__name" id="plan-name">{plan.name}</h3>
                <span className="plan-x__tag">Every feature included</span>
              </div>
              {plan.description && <p className="plan-x__desc">{plan.description}</p>}
              <p className="plan-x__price">
                <span className="plan-x__amount">{price}</span>
                <span className="plan-x__per">/ {plan.billingCycle === 'monthly' ? 'month' : 'year'}</span>
              </p>
              <p className="plan-x__terms">Billed {cycle} for each outlet. GST is added to each invoice.</p>
              <a className="btn btn--primary" href={SIGNUP_HREF}>{MAIN_ACTION}</a>
              <p className="plan-x__signin">Already use Bawarchi? <a className="link" href={SIGNIN_HREF}>{SIGNIN_ACTION}</a></p>
            </div>
            <div className="plan-x__list">
              <div className="plan-x__head">
                <h3>Everything in {plan.name}</h3>
                <p>There is no other plan, so nothing is held back for an upgrade.</p>
              </div>
              <ul className="checks plan-x__features">
                {plan.features.map((l) => <li key={l}>{l}</li>)}
              </ul>
              {/* <p className="plan-x__note"><span>Running several outlets? We will set them up together.</span> <a className="link" href={CONTACT_MAILTO}>Email us</a></p> */}
            </div>
          </article>
        </div>
      </section>

      {/* faq: every answer open */}
      <section className="section" id="questions" aria-labelledby="questions-h">
        <div className="wrap">
          <div className="grid">
            <div className="faq__intro span-5 stack-4">
              <h2 id="questions-h">Questions about pricing</h2>
              <p>Something not answered here? Write to us and we will help.</p>
              <a className="link" href="mailto:hello@bawarchi.com">Email us</a>
              <div className="faq__bill" role="img" aria-label={`A Bawarchi invoice for the ${plan.name}: the ${cycle} price with GST added`}>
                <Invoice plan={plan.name} price={plan.price} cycle={cycle} />
              </div>
            </div>
            <div className="faq span-6 start-7">
              <div className="faq__item">
                <h3>Is GST included in the price?</h3>
                <p>No. GST is added to each invoice.</p>
              </div>
              <div className="faq__item">
                <h3>Are there other plans?</h3>
                <p>No. Every restaurant gets {plan.name} with every feature, so there is nothing to compare or upgrade later.</p>
              </div>
              <div className="faq__item">
                <h3>I run several outlets. What do I pay?</h3>
                <p>{price} {per} for each outlet. Email us and we will set them up together.</p>
              </div>
              <div className="faq__item">
                <h3>How do I start?</h3>
                <p>Create your account, add your restaurant's details, and you land on your dashboard ready to add your menu.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
