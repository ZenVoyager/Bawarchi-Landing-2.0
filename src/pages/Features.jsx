import { Page } from '../components/Shell.jsx';
import { MAIN_ACTION, SIGNUP_HREF, FROM_PRICE } from '../data/site.js';
import { Screen, PhoneShot } from '../components/Shot.jsx';

/*
  type: software
  deal: hero triptych; nav, close, footer, rhythm, buttons and mark as the site (nav-mega, close-word,
        footer-dark, dark-band, pill, initial); no new effect (the collage is the hero's picture)
  moment: pinned-chapters in #guests (two screens live)
  sections: hero · guests (pinned-chapters, 3 features) · floor (three cards, 3 features) ·
            office (dark band, tabs-tour, 3 features) · close
*/
export default function Features() {
  return (
    <Page current="features">
      {/* hero: triptych (headline, collage, button) */}
      <section className="hero hero--triptych" data-enter aria-labelledby="hero-h">
        <div className="wrap"><div className="hero-text grid hero__grid">
          <div className="span-3">
            <h1 id="hero-h">Restaurant features from table to office</h1>
            <p className="hero__lead">Nine parts of one system: QR ordering, orders, tables, menus, stock, guests, coupons and sales. <span data-assumed>Plans from {FROM_PRICE} a month.</span></p>
          </div>
          <div className="ly-collage span-6 start-4">
            <div className="ly-collage__set is-on">
              <div className="ly-piece ly-piece--bare" style={{ left: '8%', top: '2%', width: '39%' }}><PhoneShot alt="Bawarchi's screens: the guest's phone menu beside their order; then the stock and the revenue chart; then a coupon at checkout and the guest's profile" name="ph-home" className="bw-phone--fluid" sizes="240px" /></div>
              <div className="ly-piece ly-piece--bare" style={{ left: '53%', top: '10%', width: '39%' }}><PhoneShot name="ph-order" className="bw-phone--fluid" sizes="240px" alt="The guest's order on their phone: three dishes with their prices and quantities, and the total of ₹260" /></div>
            </div>
            <div className="ly-collage__set" aria-hidden="true">
              <div className="ly-piece" style={{ left: '4%', top: '6%', width: '50%' }}><Screen name="dash-inventory" sizes="340px" alt="The dashboard's stock card: tomatoes in stock, paneer low with 3 kg left and garam masala out of stock" /></div>
              <div className="ly-piece" style={{ left: '34%', top: '50%', width: '62%' }}><Screen name="dash-analytics" sizes="440px" alt="The dashboard's revenue chart, June to November" /></div>
            </div>
            <div className="ly-collage__set" aria-hidden="true">
              <div className="ly-piece ly-piece--bare" style={{ left: '8%', top: '2%', width: '39%' }}><PhoneShot name="ph-coupon" className="bw-phone--fluid" sizes="240px" alt="Checkout on the guest's phone with a field for a coupon code" /></div>
              <div className="ly-piece ly-piece--bare" style={{ left: '53%', top: '10%', width: '39%' }}><PhoneShot name="ph-profile" className="bw-phone--fluid" sizes="240px" alt="A guest's profile on their phone: past orders and visited restaurants" /></div>
            </div>
          </div>
          <div className="span-3 start-10 hero__cta"><a className="btn btn--primary" href={SIGNUP_HREF}>{MAIN_ACTION}</a></div>
        </div></div>
      </section>

      {/* pinned-chapters: what guests see, three features, one visual changing per step */}
      <section className="section" id="guests" style={{ '--h': 2, '--hm': 2 }} data-moment="pinned-chapters" aria-labelledby="guests-h">
        <div className="wrap mo-pc__grid">
          <div className="mo-pc__text">
            <h2 id="guests-h">QR ordering from the guest’s phone</h2>
            <ol className="mo-pc__steps">
              <li className="mo-pc__step">
                <h3>Guest QR ordering</h3>
                <p>Guests scan the code on their table, read the menu with prices and veg marks, and send the order themselves.</p>
                <figure className="mo-pc__visual bw-visual">
                  <div className="bw-visual__in"><PhoneShot alt="The guest's phone: the main menu with a featured dish, top-rated dishes and categories" name="ph-menu" /></div>
                </figure>
              </li>
              <li className="mo-pc__step">
                <h3>Customer profiles</h3>
                <p>Every guest who orders builds a profile: visits, usual table, average bill and the dishes they order most.</p>
                <figure className="mo-pc__visual bw-visual">
                  <div className="bw-visual__in"><PhoneShot alt="A guest's profile: their details, past orders with a reorder button and the restaurants they have visited" name="ph-profile" /></div>
                </figure>
              </li>
              <li className="mo-pc__step">
                <h3>Restaurant coupons and favourites</h3>
                <p>Run a weekday lunch offer or a reward on the fifth visit, and guests keep the dishes they like for next time.</p>
                <figure className="mo-pc__visual bw-visual">
                  <div className="bw-visual__in shot-pair"><PhoneShot alt="The guest's favourite dishes, and their order with a field for a coupon code" name="ph-favs" sizes="210px" /><PhoneShot name="ph-coupon" sizes="210px" alt="The guest's order with a field for a coupon code" /></div>
                </figure>
              </li>
            </ol>
          </div>
          <div className="mo-pc__visuals frame"></div>
        </div>
      </section>

      {/* three cards: the floor and the kitchen */}
      <section className="section" id="floor" style={{ '--hm': 2 }} aria-labelledby="floor-h">
        <div className="wrap">
          <div className="section-head">
            <h2 id="floor-h">Run the floor and the kitchen. <span className="muted">Orders, tables and codes on one screen.</span></h2>
          </div>
          <div className="grid">
            <article className="card card--row card--open span-4 m-nolift">
              <h3>Order management</h3>
              <p>New, preparing, ready, served and paid: each order moves along as the kitchen works.</p>
              <div className="panel">
                <div className="stage stage--fade-br"><div className="at-corner wide" style={{ '--ax': '28px', '--ay': '28px', '--w': '640px' }}>
                  <Screen alt="The order list: Table 4's new order waiting to be accepted, then Table 6 and Table 1 with their dishes preparing and served" name="orders-list" sizes="640px" />
                </div></div>
              </div>
            </article>
            <article className="card card--row card--open span-4 m-nolift">
              <h3>Table management</h3>
              <p>See which tables are free, eating or asking for the bill, and how long each has been seated.</p>
              <div className="panel">
                <div className="stage stage--fade-br"><div className="at-corner wide" style={{ '--ax': '28px', '--ay': '28px', '--w': '580px' }}>
                  <Screen alt="The floor view of the ground floor with Table 1's QR code, scans and orders open" name="tables-floor" sizes="580px" />
                </div></div>
              </div>
            </article>
            <article className="card card--row card--open span-4 m-nolift">
              <h3>QR code management</h3>
              <p>One code for each table, ready to print. Move a table and its code follows.</p>
              <div className="panel">
                <div className="stage stage--fade-br"><div className="at-corner wide" style={{ '--ax': '28px', '--ay': '28px', '--w': '640px' }}>
                  <Screen alt="The tables page: 36 tables, 412 scans this week, and each table's QR code with its scans and orders" name="tables-list" sizes="640px" />
                </div></div>
              </div>
            </article>
          </div>
        </div>
      </section>

      {/* dark band: tabs-tour for the office */}
      <section className="section ground-inverse" id="office" aria-labelledby="office-h">
        <div className="wrap">
          <div className="grid">
            <div className="span-5">
              <div className="section-head">
                <h2 id="office-h">Menu, stock and sales in the back office</h2>
                <p>The three screens you open after service, and before the next one.</p>
              </div>
              <div className="tabs" role="tablist" aria-label="Back office">
                <button className="tab" role="tab" id="tab-menu" aria-selected="true" aria-controls="panel-menu screen-menu" type="button">Edit the menu</button>
                <button className="tab" role="tab" id="tab-stock" aria-selected="false" aria-controls="panel-stock screen-stock" type="button" tabIndex={-1}>Check the stock</button>
                <button className="tab" role="tab" id="tab-sales" aria-selected="false" aria-controls="panel-sales screen-sales" type="button" tabIndex={-1}>Read the sales</button>
              </div>
              <div className="tab-panels">
                <div role="tabpanel" id="panel-menu" aria-labelledby="tab-menu">
                  <p>Menu management: add dishes, change prices and switch a dish off when the kitchen runs out. Every table’s menu follows.</p>
                </div>
                <div role="tabpanel" id="panel-stock" aria-labelledby="tab-stock" hidden>
                  <p>Inventory management: each order takes its ingredients off the stock, and you get a warning before something runs out.</p>
                </div>
                <div role="tabpanel" id="panel-sales" aria-labelledby="tab-sales" hidden>
                  <p>Analytics dashboard: revenue, orders and best-selling dishes by hour, day or any dates you choose.</p>
                </div>
              </div>
            </div>
            <div className="frame frame--split span-6 start-7">
              <div className="stage stage--fade-br">
                <div id="screen-menu" className="at-rise fit" style={{ '--fit-max': '560px', '--ax': 'max(32px, 50% - 280px)', '--ay': '48px' }}><Screen alt="Menu management: 58 dishes in 12 categories, two unavailable, and the dishes with their prices" name="menu" sizes="560px" /></div>
                <div id="screen-stock" className="at-rise fit" style={{ '--fit-max': '560px', '--ax': 'max(32px, 50% - 280px)', '--ay': '48px' }} hidden><Screen alt="Inventory management: 58 items tracked, 8 low and 2 out of stock, with each item's stock, cost and status" name="inventory" sizes="560px" /></div>
                <div id="screen-sales" className="at-rise fit" style={{ '--fit-max': '560px', '--ax': 'max(32px, 50% - 280px)', '--ay': '48px' }} hidden><Screen alt="The dashboard: orders, growth and today's revenue, stock, the revenue chart for six months and the active orders" name="dash-main" sizes="560px" /></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Page>
  );
}
