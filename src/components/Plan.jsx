import { useEffect, useState } from 'react';
import { API_URL, DEFAULT_PLAN } from '../data/site.js';

// Bawarchi sells one plan; the master admin edits it in the admin panel.
// Pages prerender with DEFAULT_PLAN, then swap in the live plan after load.
let request;
const loadPlan = () => {
  if (!request) {
    request = fetch(`${API_URL}/subscription-plan`)
      .then((r) => (r.ok ? r.json() : Promise.reject(r.status)))
      .then((body) => ({ ...DEFAULT_PLAN, ...body.data }))
      .catch(() => DEFAULT_PLAN);
  }
  return request;
};

export function usePlan() {
  const [plan, setPlan] = useState(DEFAULT_PLAN);
  useEffect(() => {
    let live = true;
    loadPlan().then((p) => { if (live) setPlan(p); });
    return () => { live = false; };
  }, []);
  return plan;
}

const SYMBOLS = { INR: '₹', USD: '$', EUR: '€', GBP: '£' };

export const formatPrice = ({ price, currency }) =>
  (SYMBOLS[currency] || `${currency} `) + Number(price).toLocaleString('en-IN');

export const perLabel = ({ billingCycle }) => (billingCycle === 'monthly' ? 'a month' : 'a year');

// Inline "₹7,000 a year", kept current with the admin's plan.
export function PlanPrice({ withPer = true }) {
  const plan = usePlan();
  return <>{formatPrice(plan)}{withPer ? ` ${perLabel(plan)}` : ''}</>;
}

export function PlanPer() {
  return <>{perLabel(usePlan())}</>;
}

export function PlanName() {
  return <>{usePlan().name}</>;
}
