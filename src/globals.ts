export const MOBILE_BREAKPOINT = 768;

export const PARAMS = {
  RIPPLES_COLOR: 'rgba(255, 255, 255, .3)',
};

export const ACCOUNTS = {
  email: 'hugodeiro@gmail.com',
  // email: 'indexcontabilidade@outlook.com',
  instagram: 'indexgestaocontabil',
};

export const MEMBERS = {
  Rossan: {
    name: 'Rossan Ferraz',
    phone: '(71) 98739-0348',
  },
  Thiago: {
    name: 'Thiago Anunciação',
    phone: '(71) 99273-8464',
  },
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
