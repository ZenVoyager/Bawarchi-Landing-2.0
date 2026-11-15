import { Page } from '../components/Shell.jsx';
import { Arrow } from '../components/Arrow.jsx';
import { MAIN_ACTION, SIGNUP_HREF, FROM_PRICE } from '../data/site.js';
import { Screen, PhoneShot } from '../components/Shot.jsx';
import { useRef } from 'react';
import { useHeroScrub } from '../components/useHeroScrub.js';

/*
  type: software (restaurant management and QR ordering SaaS)
  deal: hero centred, nav nav-mega, close close-word, footer footer-dark, rhythm dark-band, buttons pill,
        mark initial; palette: the client's own (brand: warm off-white, charcoal, orange); type urbanist
        (Urbanist + DM Mono); effect grain-gradient in the hero frame; card grounds: none dealt (the lit
        ground, data-ground="sand")
  moment: word-highlight in #why (its own one-screen statement section)
*/
export default function Home() {
  const heroRef = useRef(null);
  useHeroScrub(heroRef);
  return (
    <Page current="home">
      {/* hero: centred (x.ai's hero); scrolling grows its window to fill the screen (useHeroScrub) */}
      <section ref={heroRef} className="hero hero--centred" data-enter aria-labelledby="hero-h">
        <div className="wrap"><div className="hero-text">
          <div className="hero__c">
            <a className="pill" href="/pricing.html"><span data-assumed>At just <span className='fw-bold'>{FROM_PRICE}</span> a month</span><span className="muted">Pricing</span></a>
            <h1 id="hero-h">QR ordering software for restaurants</h1>
            <p className="hero__lead">Guests scan the code on their table, order and pay from their phone. Each order reaches your kitchen at once, and tables, stock and sales update on one dashboard.</p>
            <div className="btn-row">
              <a className="btn btn--primary" href={SIGNUP_HREF}>{MAIN_ACTION}</a>
              <a className="btn btn--secondary" href="/features.html">See all features</a>
            </div>
          </div>
          <div className="hero__window" data-fx="grain-gradient" data-fx-seed="7" role="img" aria-label="Bhawarchi's dashboard: today's orders, active orders, growth and revenue, the daily goal, stock running low and six months of revenue">
            <Screen name="dashboard" className="ly-piece" eager sizes="(max-width: 1023px) 92vw, 960px" />
          </div>
        </div></div>
      </section>

      {/* app-frame: the product whole, the order list beside the open order */}
      <section className="section" id="orders" aria-labelledby="orders-h">
        <div className="wrap">
          <div className="grid">
            <h2 className="span-5" id="orders-h">Every order from every table, in one window</h2>
            <p className="span-6 start-7">New orders arrive from the table QR, go to the kitchen with one tap and move from preparing to served to paid while you watch. <a className="link" href="/features.html#floor">See order management</a></p>
          </div>
          <div className="shot-fill fill" role="img" aria-label="Bhawarchi's order management screen: each table's order with its time to prepare, payment and dishes, a new order from Table 4 waiting to be accepted">
            <Screen name="orders" sizes="(max-width: 1279px) 92vw, 1200px" />
          </div>
        </div>
      </section>

      {/* features-2x2: one grid, so the rows sit as far apart as the columns */}
      <section className="section" id="features" aria-labelledby="features-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="features-h">What Bawarchi runs for you. <span className="muted">Menus, stock and sales sit beside the orders.</span></h2>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Shows guests your menu on their phone</h3>
              <p>Guests scan the table QR, pick dishes and send the order. It reaches you with the table number on it.</p>
              <div className="panel" role="img" aria-label="The guest's phone: the restaurant's menu with a search, a featured dish and the top-rated dishes">
                <div className="stage stage--fade-b"><div className="at-rise" style={{ '--ax': 'max(24px, 50% - 135px)', '--ay': '32px', '--ay-sm': '16px' }}>
                  <PhoneShot name="ph-home" />
                </div></div>
              </div>
            </article>
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Menu changes in one tap</h3>
              <p>Change a price or take a dish off for the night, and the menu on every table changes with it.</p>
              <div className="panel" role="img" aria-label="Bhawarchi's menu management: 58 dishes in 12 categories, two unavailable, and the dishes with their prices">
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ '--fit-max': '440px', '--ax': 'max(24px, 50% - 220px)', '--ay': '40px', '--ay-sm': '16px' }}>
                  <Screen name="menu" sizes="440px" />
                </div></div>
              </div>
            </article>
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Counts stock as orders come in</h3>
              <p>Each dish uses up its ingredients, so you see the paneer running low before the dinner rush.</p>
              <div className="panel" role="img" aria-label="Bhawarchi's stock: tomatoes in stock, paneer low with 3 kg left and garam masala out of stock">
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ '--fit-max': '360px', '--ax': 'max(24px, 50% - 180px)', '--ay': '40px', '--ay-sm': '16px' }}>
                  <Screen name="dash-inventory" sizes="360px" />
                </div></div>
              </div>
            </article>
            <article className="card card--row card--open span-6 m-nolift">
              <h3>Shows today’s sales by the hour</h3>
              <p>Revenue, orders and your best-selling dish for today, this week or any date you pick.</p>
              <div className="panel" role="img" aria-label="Bhawarchi's analytics: revenue month by month from June to November">
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ '--fit-max': '480px', '--ax': 'max(24px, 50% - 240px)', '--ay': '40px', '--ay-sm': '16px' }}>
                  <Screen name="dash-analytics" sizes="480px" />
                </div></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* the statement, with the dealt word-highlight moment */}
      <section className="section statement" id="why" data-moment="word-highlight" aria-label="One system from table to bill">
        <div className="wrap">
          <p className="t-label">From table to bill</p>
          <p className="mo-wh__text">A guest scans, orders and pays at the table. The kitchen sees the order <strong>the same second</strong>, the stock counts itself down, and the bill is settled before anyone walks to the counter.</p>
        </div>
      </section>

      {/* dark-band: split-text-left with the floor view */}
      <section className="section ground-inverse" id="tables" aria-labelledby="tables-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-5 stack-5">
              <h2 id="tables-h">Table management on one floor view</h2>
              <p className="t-lead">The floor view shows every table as it stands: free, ordering, eating or asking for the bill. Tap a table to see its order or print its bill.</p>
              <ul className="plain-facts">
                <li>Tables by room, with their state</li>
                <li>How long each table has been seated</li>
                <li>The bill and payment for each table</li>
              </ul>
              <a className="link" href="/features.html#floor">See table management</a>
            </div>
            <div className="frame frame--split span-6 start-7 fill" role="img" aria-label="Bhawarchi's floor view of the ground floor: the kitchen, reception and tables, with Table 1's order open beside it">
              <div className="stage stage--fade-br"><div className="at-rise fit" style={{ '--fit-max': '560px', '--ax': '48px', '--ay': '56px', '--ay-sm': '24px' }}>
                <Screen name="orders-floor" sizes="(max-width: 639px) 92vw, 560px" />
              </div></div>
            </div>
          </div>
        </div>
      </section>

      {/* steps: getting started, three real steps */}
      <section className="section" id="steps" aria-labelledby="steps-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="steps-h">Start taking QR orders in 3 steps</h2>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-4 m-nolift">
              <span className="step-num">1</span>
              <h3>Add your menu</h3>
              <p>Dishes, prices, categories and veg marks, typed in once.</p>
              <div className="panel" role="img" aria-label="Adding a new dish: its name, veg mark, description, photos, price, time to prepare and category">
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ '--fit-max': '340px', '--ax': 'max(24px, 50% - 170px)', '--ay': '32px', '--ay-sm': '16px' }}><Screen name="add-dish" sizes="340px" /></div></div>
              </div>
            </article>
            <article className="card card--row card--open span-4 m-nolift">
              <span className="step-num">2</span>
              <h3>Print an ordering code per table</h3>
              <p>Every code knows its table, so orders arrive already labelled.</p>
              <div className="panel" role="img" aria-label="Table 8's QR code, ready to export and print on a table stand">
                <div className="stage stage--fade-b"><div className="at-rise fit" style={{ '--fit-max': '340px', '--ax': 'max(24px, 50% - 170px)', '--ay': '32px', '--ay-sm': '16px' }}><Screen name="table-qr" sizes="340px" /></div></div>
              </div>
            </article>
            <article className="card card--row card--open span-4 m-nolift">
              <span className="step-num">3</span>
              <h3>Take orders on the dashboard</h3>
              <p>Accept, send to the kitchen and close the bill from one screen.</p>
              <div className="panel" role="img" aria-label="Active orders on the dashboard: Table 4's new order with Accept and Decline, Table 6's dishes being prepared and served">
                <div className="stage stage--fade-br"><div className="at-corner wide" style={{ '--ax': '24px', '--ay': '32px', '--w': '640px' }}>
                  <Screen name="dash-orders" sizes="640px" />
                </div></div>
              </div>
            </article>
          </div>
        </div>
      </section>
    </Page>
  );
}
