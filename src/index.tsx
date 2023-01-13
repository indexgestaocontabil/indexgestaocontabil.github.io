import React from 'react';
import ReactDOM from 'react-dom/client';
import { MOBILE_BREAKPOINT, VIEWPORT } from './globals';
import './index.scss';
import AppRouter from './routes';

// Set CSS Overrides
const rootCssVars: HTMLElement | null = document.querySelector(':root');
if (rootCssVars) {
  // Whenever window resizes, css vars are updated.
  // This is important because properties like vh doesn't consider browser UI, only the screen size on iPhones
  window.addEventListener('resize', () => {
    const {innerHeight, innerWidth} = window;

    rootCssVars?.style.setProperty('--window-height', `${innerHeight}px`);
    rootCssVars?.style.setProperty('--window-width', `${innerWidth}px`);

    VIEWPORT.IS_MOBILE = innerWidth <= MOBILE_BREAKPOINT;
    VIEWPORT.IS_DESKTOP = !VIEWPORT.IS_MOBILE;
  });

  // Triggers first resize event (onload)
  dispatchEvent(new Event('resize'));
}

// Bootstrap App

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(<AppRouter />);
