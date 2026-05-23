import type { Localized } from './types';

export interface Education {
  id: string;
  school: string;
  initials: string;
  accent: string;
  year: string;
  yearRange: Localized;
  degree: Localized;
  period: Localized;
  summary: Localized;
}

export const EDUCATION: Education[] = [
  {
    id: 'focus-ia',
    school: 'Faculdade Focus',
    initials: 'F',
    accent: '#dc2626',
    year: '2025',
    yearRange: { pt: '2024 — 2025', en: '2024 — 2025' },
    degree: {
      pt: 'Pós-graduação · Inteligência Artificial',
      en: 'Graduate Degree · Artificial Intelligence',
    },
    period: { pt: 'jul 2024 — jun 2025', en: 'Jul 2024 — Jun 2025' },
    summary: {
      pt: 'Algoritmos avançados, aprendizado de máquina, processamento de linguagem natural e redes neurais — com foco em aplicações práticas e análise de dados complexos.',
      en: 'Advanced algorithms, machine learning, natural language processing, and neural networks — focused on practical applications and complex data analysis.',
    },
  },
  {
    id: 'focus-arq',
    school: 'Faculdade Focus',
    initials: 'F',
    accent: '#e11d48',
    year: '2021',
    yearRange: { pt: '2021', en: '2021' },
    degree: {
      pt: 'Pós-graduação · Arquitetura de Sistemas da Informação',
      en: 'Graduate Degree · Information Systems Architecture',
    },
    period: { pt: 'mar 2021 — jul 2021', en: 'Mar 2021 — Jul 2021' },
    summary: {
      pt: 'Capacitação para arquitetar soluções tecnológicas, escolher componentes, conduzir migrações e construir ambientes seguros e escaláveis.',
      en: 'Training to architect technology solutions, choose components, drive migrations, and build secure, scalable environments.',
    },
  },
  {
    id: 'unip',
    school: 'Universidade Paulista',
    initials: 'UP',
    accent: '#f43f5e',
    year: '2019',
    yearRange: { pt: '2016 — 2019', en: '2016 — 2019' },
    degree: { pt: 'Bacharelado · Ciência da Computação', en: "Bachelor's · Computer Science" },
    period: { pt: 'jan 2016 — dez 2019', en: 'Jan 2016 — Dec 2019' },
    summary: {
      pt: 'Fundamentos de SO, programação desktop, web e mobile, banco de dados, administração e introdução à inteligência artificial.',
      en: 'OS fundamentals, desktop, web and mobile development, databases, business management, and an introduction to AI.',
    },
  },
  {
    id: 'etec',
    school: 'ETEC — Escola Técnica Estadual de São Paulo',
    initials: 'ET',
    accent: '#f97316',
    year: '2015',
    yearRange: { pt: '2014 — 2015', en: '2014 — 2015' },
    degree: { pt: 'Técnico em Informática', en: 'Technical Course · Information Technology' },
    period: { pt: 'jan 2014 — jul 2015', en: 'Jan 2014 — Jul 2015' },
    summary: {
      pt: 'Desenvolvimento desktop com Delphi e Java; depois pivô para web com HTML, CSS, JavaScript, PHP e Java.',
      en: 'Desktop development with Delphi and Java; later pivoted to web with HTML, CSS, JavaScript, PHP and Java.',
    },
  },
];
