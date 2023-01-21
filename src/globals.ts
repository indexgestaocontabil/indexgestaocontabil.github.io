import heroContent from './assets/json/hero.json';
import accountsContent from './assets/json/accounts.json';
import rossanContent from './assets/json/rossan.json';
import thiagoContent from './assets/json/thiago.json';

export const MOBILE_BREAKPOINT = 768;

export const PARAMS = {
  RIPPLES_COLOR: 'rgba(255, 255, 255, .3)',
};

export const HERO = heroContent;
export const ACCOUNTS = accountsContent;
export const MEMBERS = {
  Rossan: rossanContent,
  Thiago: thiagoContent,
};

export const REGEX = {
  VALIDATORS: {
    EMAIL: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
  },
};

export const VIEWPORT = {
  IS_MOBILE: window.innerWidth <= MOBILE_BREAKPOINT,
  IS_DESKTOP: window.innerWidth > MOBILE_BREAKPOINT,
};
