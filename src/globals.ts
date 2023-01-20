export const MOBILE_BREAKPOINT = 768;

export const PARAMS = {
  RIPPLES_COLOR: 'rgba(255, 255, 255, .3)',
};

export const ACCOUNTS = {
  // email: 'hugodeiro@gmail.com',
  email: 'indexgestaocontabil@outlook.com',
  instagram: 'indexgestaocontabil',
};

export const MEMBERS = {
  Rossan: {
    name: 'Rossan Ferraz',
    phone: '(71) 99181-3380',
    linkedin: 'rossanferraz',
    photo: `${process.env.PUBLIC_URL}/rossan.jpeg`,
    about: [
      'Contador formado pela Faculdade Batista Brasileira (FBB), com Pós-Graduação em Planejamento Tributário na Unime. Atua desde 2011 em assessoria e consultoria empresarial e tributária.',
      'Rossan tem vasta experiência em ICMS no Estado da Bahia e atualmente é líder da equipe responsável pela área fiscal, atuando com foco na redução da carga tributária e recuperação de créditos tributários.',
      'Possui experiência em projetos na área de Tributos Diretos e Indiretos, Pleitos de Incentivos SUDENE e Programa Desenvolve. Também é responsável pelo planejamento e revisão tributária de empresas, nos segmentos de comércio e serviço nos níveis industriais, atacadistas e varejistas.',
    ],
    specialities: [
      'Apuração Fiscal',
      'Benefícios Fiscais',
      'Planejamento Tributário',
    ],
  },
  Thiago: {
    name: 'Thiago Anunciação',
    phone: '(71) 98830-1015',
    linkedin: 'thiago-anunciacao',
    photo: `${process.env.PUBLIC_URL}/thiago.jpeg`,
    about: [
      'Contador formado pela Universidade Federal da Bahia (UFBA) com Pós-Graduação em Planejamento Tributário na Unime. Atua desde 2010 em assessoria tributária.',
      'Thiago tem vasta experiência em reorganização societária, revisão, regularização fiscal, acompanhamento de fiscalização, defesas administrativas, recuperação de crédito e planejamento tributário.',
      'Também é responsável pela execução de tarefas relacionadas a apuração, análise e fechamento de balancetes e balanços, bem como na administração do passivo fiscal de empresas, acompanhamento de parcelamentos e renegociação de dívidas tributárias.',
    ],
    specialities: [
      'Gestão de Passivo Fiscal',
      'Reorganização Societária',
      'Regularização e Parcelamento de Tributos',
    ],
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
