import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.scss';
import AppRouter from './routes';

// Set CSS Overrides
const rootCssVars: HTMLElement | null = document.querySelector(':root');
if (rootCssVars) {
  // Whenever window resizes, css vars are updated.
  // This is important because properties like vh doesn't consider browser UI, only the screen size on iPhones
  window.addEventListener('resize', () => {
    rootCssVars?.style.setProperty('--window-height', `${window.innerHeight}px`);
    rootCssVars?.style.setProperty('--window-width', `${window.innerWidth}px`);
  });

  // Triggers first resize event (onload)
  dispatchEvent(new Event('resize'));
}

// Bootstrap App

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppRouter />);
