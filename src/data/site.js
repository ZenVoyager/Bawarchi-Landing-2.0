// Everything a page says more than once lives here, so one fact has one wording site-wide.

export const BRAND = 'Bawarchi';

// The main action: the same words in the nav, every hero, the close and the signup form.
export const MAIN_ACTION = 'Sign up your restaurant';
export const SIGNUP_HREF = '/how-it-works.html#signup';

// Stand-in contact address until the real one exists (the form posts here as a mailto).
export const CONTACT_MAILTO = 'mailto:hello@bhawarchi.example';

// SAMPLE PRICES (assumed, not final). Change them here and every page follows.
export const PRICES = {
  starter: '₹1,299',
  growth: '₹2,799',
};
export const FROM_PRICE = PRICES.starter;

export const NAV = [
  { key: 'features', label: 'Features', href: '/features.html' },
  { key: 'ordering', label: 'Ordering', href: '/how-it-works.html' },
  { key: 'pricing', label: 'Pricing', href: '/pricing.html' },
];

// The nine features, grouped the way the Features page shows them.
export const FEATURE_GROUPS = [
  {
    id: 'guests',
    label: 'For guests',
    items: [
      { name: 'Guest QR ordering', line: 'Order from the table' },
      { name: 'Customer profiles', line: 'Visits and usual orders' },
      { name: 'Coupons and favourites', line: 'Offers guests come back for' },
    ],
  },
  {
    id: 'floor',
    label: 'For the floor',
    items: [
      { name: 'Order management', line: 'Every order, one screen' },
      { name: 'Table management', line: 'Who sits where, who waits' },
      { name: 'QR code management', line: 'One code for each table' },
    ],
  },
  {
    id: 'office',
    label: 'For the office',
    items: [
      { name: 'Menu management', line: 'Prices and dishes in seconds' },
      { name: 'Inventory management', line: 'Stock that counts itself' },
      { name: 'Analytics dashboard', line: 'Sales by hour and dish' },
    ],
  },
];

// Plans. Feature lists are a first proposal: the split between plans is not final yet.
export const PLANS = [
  {
    id: 'starter',
    name: 'Starter',
    who: 'For smaller restaurants',
    price: PRICES.starter,
    per: '/ month',
    billing: 'Billed monthly, GST extra',
    action: 'Choose Starter',
    lines: ['Guest QR ordering', 'Digital menu with photos', 'Order management', 'Table management', 'QR codes for every table', 'Online payments'],
  },
  {
    id: 'growth',
    name: 'Growth',
    who: 'For growing teams',
    price: PRICES.growth,
    per: '/ month',
    billing: 'Billed monthly, GST extra',
    action: 'Choose Growth',
    featured: true,
    lines: ['Everything in Starter', 'Inventory management', 'Live order tracking for guests', 'Customer profiles', 'Coupons and favourites', 'Analytics dashboard'],
  },
  {
    id: 'enterprise',
    name: 'Enterprise',
    who: 'For larger operations',
    price: 'Price on request',
    per: '',
    billing: 'Priced for your outlets',
    action: 'Contact sales',
    lines: ['Everything in Growth', 'Several outlets on one account', 'Reports across outlets', 'Staff roles for each outlet', 'Help moving your menu across', 'One contact for your account'],
  },
];

export const COMPARE = [
  { group: 'Ordering', rows: [
    ['Guest QR ordering', true, true, true],
    ['Online payments', true, true, true],
    ['Live order tracking for guests', false, true, true],
  ] },
  { group: 'Running the floor', rows: [
    ['Order management', true, true, true],
    ['Table management', true, true, true],
    ['QR code management', true, true, true],
  ] },
  { group: 'Back office', rows: [
    ['Menu management', true, true, true],
    ['Inventory management', false, true, true],
    ['Analytics dashboard', false, true, true],
  ] },
  { group: 'Guests', rows: [
    ['Customer profiles', false, true, true],
    ['Coupons and favourites', false, true, true],
  ] },
];
