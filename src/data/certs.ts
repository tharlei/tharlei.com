import type { Localized } from './types';

export interface Cert {
  id: string;
  issuer: string;
  title: Localized;
  date: Localized;
  code?: string;
  skills?: string[];
}

export interface IssuerStyle {
  bg: string;
  fg: string;
  label: string;
}

export const CERTS: Cert[] = [
  {
    id: 'fiap-lead',
    issuer: 'FIAP',
    title: {
      pt: 'Liderança na Prática — Tech Leaders',
      en: 'Leadership in Practice — Tech Leaders',
    },
    date: { pt: 'set 2025', en: 'Sep 2025' },
    skills: ['Liderança', 'Gestão de Projetos', 'Comunicação'],
  },
  {
    id: 'elastic-eng',
    issuer: 'Elastic',
    title: { pt: 'Elasticsearch Engineer (On-Demand)', en: 'Elasticsearch Engineer (On-Demand)' },
    date: { pt: 'jun 2025', en: 'Jun 2025' },
    code: 'C1297791',
    skills: ['Elasticsearch'],
  },
  {
    id: 'aws-ml',
    issuer: 'Udemy',
    title: {
      pt: 'Machine Learning com Amazon AWS e SageMaker',
      en: 'Machine Learning with Amazon AWS and SageMaker',
    },
    date: { pt: 'jun 2025', en: 'Jun 2025' },
    code: 'UC-e2a9754e',
    skills: ['AWS', 'IA', 'SageMaker'],
  },
  {
    id: 'clean-arch',
    issuer: 'Udemy',
    title: {
      pt: 'Domine a Arquitetura Limpa e Hexagonal',
      en: 'Master Clean & Hexagonal Architecture',
    },
    date: { pt: 'mar 2025', en: 'Mar 2025' },
    code: 'UC-6c539db0',
    skills: ['Node.js', 'Clean Architecture', 'Postman'],
  },
  {
    id: 'es8',
    issuer: 'Udemy',
    title: { pt: 'Master AWS Elasticsearch 8', en: 'Master AWS Elasticsearch 8' },
    date: { pt: 'dez 2024', en: 'Dec 2024' },
    code: 'UC-54382549',
    skills: ['Elastic Stack', 'Elasticsearch', 'AWS'],
  },
  {
    id: 'filament',
    issuer: 'Udemy',
    title: {
      pt: 'Filament Admin Panel Course for Laravel (V3)',
      en: 'Filament Admin Panel Course for Laravel (V3)',
    },
    date: { pt: 'jun 2024', en: 'Jun 2024' },
    code: 'UC-fc935b75',
    skills: ['Laravel', 'Filament', 'SQL', 'PHP'],
  },
  {
    id: 'hr-rocks',
    issuer: 'Qulture.Rocks',
    title: {
      pt: 'HR.Rocks — Gestão de Desempenho e Tendências',
      en: 'HR.Rocks — Performance Management & Trends',
    },
    date: { pt: 'mai 2024', en: 'May 2024' },
    code: 'cert_gyb9w6rx',
    skills: ['Gestão de Pessoas'],
  },
  {
    id: 'vue-laravel',
    issuer: 'Udemy',
    title: {
      pt: 'Vue 3 e Laravel: Quebrando um Monolito em Microsserviços',
      en: 'Vue 3 and Laravel: Breaking a Monolith into Microservices',
    },
    date: { pt: 'dez 2023', en: 'Dec 2023' },
    code: 'UC-beb6c99b',
    skills: ['Docker', 'Laravel', 'Vue.js', 'RabbitMQ', 'PHP', 'TypeScript'],
  },
  {
    id: 'es-full',
    issuer: 'Udemy',
    title: {
      pt: 'Elasticsearch e Elastic Stack: o Curso Completo!',
      en: 'Elasticsearch & Elastic Stack: The Complete Course',
    },
    date: { pt: 'nov 2023', en: 'Nov 2023' },
    code: 'UC-85d04c06',
    skills: ['Kibana', 'Elastic Stack', 'Elasticsearch'],
  },
  {
    id: 'react-next',
    issuer: 'Udemy',
    title: {
      pt: 'React.Js e Next.Js (Intermediário e Avançado)',
      en: 'React.Js & Next.Js (Intermediate & Advanced)',
    },
    date: { pt: 'mai 2022', en: 'May 2022' },
    code: 'UC-17c471d5',
    skills: ['Next.js', 'TypeScript', 'React', 'Testes unitários'],
  },
  {
    id: 'nlw2',
    issuer: 'Rocketseat',
    title: { pt: 'Next Level Week #2', en: 'Next Level Week #2' },
    date: { pt: 'ago 2020', en: 'Aug 2020' },
    skills: ['Node.js', 'TypeScript'],
  },
  {
    id: 'http-alura',
    issuer: 'Alura',
    title: {
      pt: 'HTTP — Entendendo a Web por baixo dos panos',
      en: 'HTTP — Understanding the Web Under the Hood',
    },
    date: { pt: 'jun 2018', en: 'Jun 2018' },
    skills: ['HTTP'],
  },
  {
    id: 'ionic',
    issuer: 'Alura',
    title: { pt: 'Ionic 3 — Aplicações Híbridas Mobile', en: 'Ionic 3 — Hybrid Mobile Apps' },
    date: { pt: 'set 2018', en: 'Sep 2018' },
    skills: ['Ionic'],
  },
  {
    id: 'js-es6',
    issuer: 'Alura',
    title: {
      pt: 'JavaScript Avançado II: ES6 e Padrões de Projeto',
      en: 'Advanced JavaScript II: ES6 & Design Patterns',
    },
    date: { pt: 'mar 2018', en: 'Mar 2018' },
    skills: ['JavaScript'],
  },
  {
    id: 'angular',
    issuer: 'Alura',
    title: { pt: 'Angular 1: Crie webapps poderosas', en: 'Angular 1: Build powerful webapps' },
    date: { pt: 'fev 2018', en: 'Feb 2018' },
    skills: ['Angular'],
  },
  {
    id: 'html-css',
    issuer: 'Alura',
    title: {
      pt: 'HTML5 e CSS3 I: Suas primeiras páginas da Web',
      en: 'HTML5 & CSS3 I: Your first web pages',
    },
    date: { pt: 'dez 2017', en: 'Dec 2017' },
    skills: ['HTML5', 'CSS'],
  },
];

export const ISSUER_STYLE: Record<string, IssuerStyle> = {
  FIAP: { bg: '#ED1846', fg: '#fff', label: 'FIAP' },
  Elastic: { bg: '#005571', fg: '#fff', label: 'EL' },
  Udemy: { bg: '#A435F0', fg: '#fff', label: 'U' },
  'Qulture.Rocks': { bg: '#0F172A', fg: '#fff', label: 'Q' },
  Rocketseat: { bg: '#8257E5', fg: '#fff', label: 'R' },
  Alura: { bg: '#0C0C0C', fg: '#fff', label: 'A' },
};
