import { createRoot, hydrateRoot } from 'react-dom/client';
import '../styles/site.css';
import Page from '../pages/Features.jsx';

// The build prerenders this page to HTML; in the browser React hydrates it (in dev it renders).
const root = document.getElementById('root');
if (root.firstElementChild) hydrateRoot(root, <Page />);
else createRoot(root).render(<Page />);
