import { jsx as _jsx } from "react/jsx-runtime";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import './styles/global.css';
// analytics is opt-in via VITE_PLAUSIBLE_DOMAIN
import { initAnalytics } from './lib/analytics';
const rootElement = document.getElementById('root');
if (!rootElement) {
    throw new Error('Root element not found');
}
createRoot(rootElement).render(_jsx(StrictMode, { children: _jsx(BrowserRouter, { children: _jsx(App, {}) }) }));
// initialize analytics after render so it's non-blocking
if (typeof window !== 'undefined') {
    // small timeout to avoid impacting first paint
    setTimeout(() => initAnalytics(), 200);
}
