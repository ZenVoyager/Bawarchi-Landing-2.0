import { renderToString } from 'react-dom/server';
import Home from './pages/Home.jsx';
import Features from './pages/Features.jsx';
import Pricing from './pages/Pricing.jsx';
import HowItWorks from './pages/HowItWorks.jsx';

const PAGES = { 'index.html': Home, 'features.html': Features, 'pricing.html': Pricing, 'how-it-works.html': HowItWorks };

export function render(file) {
  const Page = PAGES[file];
  return renderToString(<Page />);
}
export const files = Object.keys(PAGES);
