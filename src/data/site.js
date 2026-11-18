// Everything a page says more than once lives here, so one fact has one wording site-wide.

export const BRAND = 'Bawarchi';

// The main action: the same words in the nav, every hero, the close and the signup form.
export const MAIN_ACTION = 'Sign up your restaurant';
export const SIGNUP_HREF = 'https://admin-bawarchi.netlify.app/signup';

// For restaurants that already have an account: the admin app's login page (the nav's second button).
export const SIGNIN_ACTION = 'Sign in';
export const SIGNIN_HREF = 'https://admin-bawarchi.netlify.app/login';

export const API_URL = import.meta.env.VITE_API_URL || 'https://bawarchi-api.zenvoyager.in/api/v1';

// Shown before the live plan loads (and in the prerendered HTML). Keep it in
// step with the backend's default in subscriptionPlan.model.js.
export const DEFAULT_PLAN = {
  name: 'Starter',
  price: 299,
  currency: 'INR',
  billingCycle: 'monthly',
  description: 'For smaller restaurants',
  features: [
    'Guest QR ordering',
    'Digital menu with photos',
    'Order management',
    'Table management',
    'QR codes for every table',
    'Online payments',
  ],
};

// Stand-in contact address until the real one exists (the form posts here as a mailto).
export const CONTACT_MAILTO = 'mailto:hello@bawarchi.com';

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

