export const MOBILE_BREAKPOINT = 768;

export const PARAMS = {
  RIPPLES_COLOR: 'rgba(255, 255, 255, .3)',
};

export const HERO = {
  team: {
    background:
      'https://paris-sensacional.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12_1.jpg',
    title: 'Executivos',
    subtitle:
      'Equipe dinâmica e qualificada para atender desde a abertura até o planejamento estratégico.',
  },
  services: {
    background:
      'https://paris-sensacional.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12_1.jpg',
    title: 'Serviços',
    subtitle:
      'Projetos com alto valor agregado, customizados para as necessidades e especificidades dos empresários, tendo o foco em micro, pequenas e médias empresas, dos mais variados ramos de atividade.',
  },
  contact: {
    background:
      'https://paris-sensacional.com/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/1/2/12_1.jpg',
    title: 'Contato',
    subtitle: 'Nosso time de atendimento ao cliente está esperando por você!',
  },
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
      'Contador formado pela Universidade Federal da Bahia (UFBA) com Pós-Graduação em Planejamento Tributário na Unime. Atua desde 2010 em assessoria e consultoria tributária.',
      'Thiago tem vasta experiência em reorganização societária, revisão e regularização fiscal, acompanhamento de fiscalização, defesas administrativas, recuperação de crédito e planejamento tributário.',
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
