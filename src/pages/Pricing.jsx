import { Page } from '../components/Shell.jsx';
import { Arrow } from '../components/Arrow.jsx';
import { MAIN_ACTION, SIGNUP_HREF, PLANS, COMPARE, PRICES } from '../data/site.js';
import { Invoice } from '../components/ui/Ui.jsx';
import { Screen } from '../components/Shot.jsx';

/*
  type: software
  deal: hero split; nav, close, footer, rhythm, buttons and mark as the site
  moment: line-carries-colour on #compare (the dark band: the table on the inverse ground)
  sections: hero · plans (pricing-three) · compare (comparison-table, dark band) · questions (faq) · close
  PRICES ARE SAMPLES (src/data/site.js): every price carries data-assumed.
*/

const Check = () => (
  <span className="compare__yes" aria-hidden="true">
    <svg viewBox="0 0 16 16" width="16" height="16"><path d="M3 8.5l3 3 7-7" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" /></svg>
  </span>
);

export default function Pricing() {
  return (
    <Page current="pricing">
      {/* hero: split */}
      <section className="hero hero--split" data-enter aria-labelledby="hero-h">
        <div className="wrap"><div className="hero-text grid hero__grid">
          <div className="hero__text span-5">
            <h1 id="hero-h">Plans and prices for restaurants</h1>
            <p className="hero__lead">Starter for smaller restaurants at <span data-assumed>{PRICES.starter}</span> a month, Growth for busier teams at <span data-assumed>{PRICES.growth}</span>, and Enterprise priced for groups with several outlets.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={SIGNUP_HREF}>{MAIN_ACTION}</a>
              <a className="btn btn--secondary" href="#compare">Compare the plans</a>
            </div>
          </div>
          <div className="hero__media hero__media--ui span-6 start-7">
            <Screen alt="Bawarchi's dashboard: today's orders and revenue, the daily goal, stock running low, six months of revenue and the active orders" name="dashboard-full" eager sizes="(max-width: 1023px) 92vw, 640px" />
          </div>
        </div></div>
      </section>

      {/* pricing-three */}
      <section className="section" id="plans" style={{ '--hm': 2 }} aria-labelledby="plans-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="plans-h">Pricing</h2>
            <p>Monthly prices per restaurant. Every plan includes table QR ordering and the dashboard.</p>
          </div>
          <div className="grid">
            {PLANS.map((p) => (
              <article className={'card card--plan span-4 m-nolift' + (p.featured ? ' is-featured' : '')} key={p.id}>
                <div className="plan__top"><h3>{p.name}</h3>{p.featured && <span className="badge">Most popular</span>}</div>
                <p>{p.who}</p>
                <p className="price">
                  {p.per ? <><span className="t-stat" data-assumed>{p.price}</span><span className="muted">{p.per}</span></> : <span className="t-stat">{p.price}</span>}
                </p>
                <p className="t-small muted">{p.billing}</p>
                <a className={'btn ' + (p.featured ? 'btn--primary' : 'btn--secondary')} href={p.id === 'enterprise' ? 'mailto:sales@bhawarchi.example' : SIGNUP_HREF}>{p.action}</a>
                <ul className="checks">
                  {p.lines.map((l) => <li key={l}>{l}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* comparison-table on the dark band, with the dealt line-carries-colour moment */}
      <section className="section ground-inverse" id="compare" data-moment="line-carries-colour" data-moment-opts='{"from": "base"}' aria-labelledby="compare-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="compare-h">Compare the three plans</h2>
            <p>What each plan includes, row by row.</p>
          </div>
          <div className="compare" role="table" aria-label="Features in each plan">
            <div className="compare__row compare__row--head" role="row">
              <span role="columnheader">Feature</span>
              {PLANS.map((p) => <span role="columnheader" key={p.id}>{p.name}</span>)}
            </div>
            {COMPARE.map((g) => (
              <div role="rowgroup" key={g.group}>
                {g.rows.map(([name, ...cells]) => (
                  <div className="compare__row" role="row" key={name}>
                    <span role="rowheader">{name}</span>
                    {cells.map((c, i) => (
                      <span role="cell" key={i}>
                        {c ? <><Check /><span className="sr-only">Included</span></> : <span className="compare__no" aria-label="Not included">–</span>}
                      </span>
                    ))}
                  </div>
                ))}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* faq: every answer open */}
      <section className="section" id="questions" aria-labelledby="questions-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-4">
              <h2 id="questions-h">Questions about pricing</h2>
              <p>Something not answered here? Write to us and we will help you choose.</p>
              <a className="link" href="mailto:sales@bhawarchi.example">Email the sales team</a>
              <div className="faq__bill" role="img" aria-label="A Bawarchi invoice for the Growth plan: the monthly price with GST added">
                <Invoice />
              </div>
            </div>
            <div className="faq span-6 start-7">
              <div className="faq__item">
                <h3>Is GST included in the prices?</h3>
                <p>No. The prices are monthly and GST is added to each invoice.</p>
              </div>
              <div className="faq__item">
                <h3>Which plan suits one small restaurant?</h3>
                <p>Starter. It covers table QR ordering, the menu, orders, tables, QR codes and online payments.</p>
              </div>
              <div className="faq__item">
                <h3>What does Growth add?</h3>
                <p>Inventory, live order tracking for guests, customer profiles, coupons and favourites, and the analytics dashboard.</p>
              </div>
              <div className="faq__item">
                <h3>How is Enterprise priced?</h3>
                <p>By the number of outlets you run. Email the sales team and we will send a price for your group.</p>
              </div>
              <div className="faq__item">
                <h3>How do I start?</h3>
                <p>Fill in the signup form with your restaurant’s details and the plan you want, and we will get you set up.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
