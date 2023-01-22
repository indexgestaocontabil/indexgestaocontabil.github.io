import accountsContent from './assets/json/accounts.json';
import Rossan from './assets/json/rossan.json';
import Thiago from './assets/json/thiago.json';

// Global params

export const PARAMS = {
  RIPPLES_COLOR: 'rgba(255, 255, 255, .3)',
  MOBILE_BREAKPOINT: 768,
  VIEWPORT: {
    IS_MOBILE: window.innerWidth <= 768,
    IS_DESKTOP: window.innerWidth > 768,
  },
  REGEX: {
    VALIDATORS: {
      EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
    },
  },
};

// JSON Config file data

export const ACCOUNTS = accountsContent;
export const MEMBERS = { Rossan, Thiago };
