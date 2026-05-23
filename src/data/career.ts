import type { Localized } from './types';

export interface Role {
  title: Localized;
  period: Localized;
  duration: Localized;
  type: 'fulltime' | 'internship';
  remote?: boolean;
  current?: boolean;
  location?: Localized;
  summary: Localized;
  techs: string[];
}

export interface Company {
  id: string;
  company: string;
  initials: string;
  accent: string;
  tenure: Localized;
  location?: Localized;
  roles: Role[];
}

export const CAREER: Company[] = [
  {
    id: 'atlas',
    company: 'Atlas Technologies',
    initials: 'AT',
    accent: '#e11d48',
    tenure: { pt: '3 anos 7 meses', en: '3 yrs 7 mos' },
    roles: [
      {
        title: { pt: 'Engenheiro Back-end Sênior III', en: 'Senior Back-end Engineer III' },
        period: { pt: 'nov 2025 — o momento', en: 'Nov 2025 — present' },
        duration: { pt: '7 meses', en: '7 mos' },
        type: 'fulltime',
        remote: true,
        current: true,
        summary: {
          pt: 'Liderança técnica em iniciativas de plataforma, autenticação facial e segurança, mentoria do time e revisão de arquitetura.',
          en: 'Tech leadership on platform initiatives, facial authentication and security, team mentorship and architecture review.',
        },
        techs: ['laravel', 'php', 'vue', 'mysql', 'redis', 'grafana', 'docker', 'ghactions'],
      },
      {
        title: { pt: 'Engenheiro Back-end Sênior II', en: 'Senior Back-end Engineer II' },
        period: { pt: 'fev 2024 — nov 2025', en: 'Feb 2024 — Nov 2025' },
        duration: { pt: '1 ano 10 meses', en: '1 yr 10 mos' },
        type: 'fulltime',
        remote: true,
        summary: {
          pt: 'Otimização de performance em alta carga, novas funcionalidades no produto principal e integrações críticas de pagamento.',
          en: 'High-load performance optimization, new features in the core product, and mission-critical payment integrations.',
        },
        techs: ['laravel', 'php', 'vue', 'mysql', 'redis', 'metabase', 'ghactions'],
      },
      {
        title: { pt: 'Engenheiro Back-end Sênior I', en: 'Senior Back-end Engineer I' },
        period: { pt: 'nov 2022 — fev 2024', en: 'Nov 2022 — Feb 2024' },
        duration: { pt: '1 ano 4 meses', en: '1 yr 4 mos' },
        type: 'fulltime',
        remote: true,
        summary: {
          pt: 'Otimização de funcionalidades existentes e inclusão de novos recursos no produto principal.',
          en: 'Optimization of existing features and shipping new capabilities to the main product.',
        },
        techs: ['laravel', 'php', 'vue', 'mysql', 'redis', 'git'],
      },
    ],
  },
  {
    id: 'focus',
    company: 'Focus Concursos',
    initials: 'FC',
    accent: '#dc2626',
    tenure: { pt: '2 anos 1 mês', en: '2 yrs 1 mo' },
    roles: [
      {
        title: { pt: 'Desenvolvedor Full Stack Pleno', en: 'Mid-level Full Stack Developer' },
        period: { pt: 'nov 2020 — nov 2022', en: 'Nov 2020 — Nov 2022' },
        duration: { pt: '2 anos 1 mês', en: '2 yrs 1 mo' },
        type: 'fulltime',
        remote: true,
        summary: {
          pt: 'Estruturação de novos projetos seguindo Clean Architecture e refatoração de sistemas internos críticos. Construção do white-label de graduações EAD do zero.',
          en: 'Structured new projects with Clean Architecture and refactored mission-critical internal systems. Built the white-label distance-learning graduation platform from scratch.',
        },
        techs: [
          'laravel',
          'php',
          'react',
          'vue',
          'graphql',
          'tailwind',
          'postgres',
          'rabbitmq',
          'redis',
          'aws',
          'docker',
        ],
      },
    ],
  },
  {
    id: 'uaufi',
    company: 'Uau-Fi',
    initials: 'U',
    accent: '#f43f5e',
    tenure: { pt: '1 ano 5 meses', en: '1 yr 5 mos' },
    location: { pt: 'Araçatuba, São Paulo', en: 'Araçatuba, São Paulo' },
    roles: [
      {
        title: { pt: 'Desenvolvedor Full Stack Pleno', en: 'Mid-level Full Stack Developer' },
        period: { pt: 'jul 2019 — nov 2020', en: 'Jul 2019 — Nov 2020' },
        duration: { pt: '1 ano 5 meses', en: '1 yr 5 mos' },
        type: 'fulltime',
        location: { pt: 'Araçatuba, SP', en: 'Araçatuba, Brazil' },
        summary: {
          pt: 'Arquitetura de novos projetos e modelagem de banco de dados. Manutenção e evolução contínua de softwares existentes.',
          en: 'Architected new projects and database schemas. Maintained and continuously evolved existing software.',
        },
        techs: ['javascript', 'php', 'mysql', 'html', 'css', 'git'],
      },
    ],
  },
  {
    id: 'computel',
    company: 'COMPUTEL Sigma Software',
    initials: 'CS',
    accent: '#f97316',
    tenure: { pt: '2 anos 3 meses', en: '2 yrs 3 mos' },
    location: { pt: 'Araçatuba, São Paulo', en: 'Araçatuba, São Paulo' },
    roles: [
      {
        title: { pt: 'Desenvolvedor Full Stack Júnior', en: 'Junior Full Stack Developer' },
        period: { pt: 'mai 2018 — jul 2019', en: 'May 2018 — Jul 2019' },
        duration: { pt: '1 ano 3 meses', en: '1 yr 3 mos' },
        type: 'fulltime',
        location: { pt: 'Araçatuba, SP', en: 'Araçatuba, Brazil' },
        summary: {
          pt: 'Desenvolvimento e manutenção de sistemas web full-stack. Primeiro contato com gestão de produto e ciclos de entrega ágeis.',
          en: 'Full-stack web development and maintenance. First exposure to product management and agile delivery cycles.',
        },
        techs: ['javascript', 'php', 'mysql', 'html', 'css'],
      },
      {
        title: { pt: 'Desenvolvedor Trainee', en: 'Trainee Developer' },
        period: { pt: 'mai 2017 — mai 2018', en: 'May 2017 — May 2018' },
        duration: { pt: '1 ano 1 mês', en: '1 yr 1 mo' },
        type: 'internship',
        location: { pt: 'Araçatuba, SP', en: 'Araçatuba, Brazil' },
        summary: {
          pt: 'Primeiros passos na carreira: programação web, banco de dados e bons hábitos de engenharia de software.',
          en: 'First steps into the career: web development, databases, and the fundamentals of software engineering.',
        },
        techs: ['javascript', 'php', 'html', 'css'],
      },
    ],
  },
];
