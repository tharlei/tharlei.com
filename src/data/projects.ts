import type { Localized } from './types';

export interface Project {
  id: string;
  company: string;
  companyInitials: string;
  employment: 'employed' | 'freelance';
  adultWarning?: boolean;
  title: string;
  accent: string;
  domain: string;
  siteUrl: string;
  subtitle: Localized;
  summary: Localized;
  techs: string[];
}

export const PROJECTS: Project[] = [
  {
    id: 'cenes',
    company: 'Focus Concursos',
    companyInitials: 'FC',
    employment: 'employed',
    title: 'Faculdade Focus / Cenes',
    accent: '#dc2626',
    domain: 'faculdadefocus.com.br',
    siteUrl: 'https://faculdadefocus.com.br',
    subtitle: {
      pt: 'Plataforma white-label de graduações EAD',
      en: 'White-label distance-learning graduation platform',
    },
    summary: {
      pt: 'Sou o principal desenvolvedor da plataforma de graduações EAD desde 2020, com mais de 70% dos commits. No núcleo em Laravel, construí o white-label por temas para instituições parceiras, o checkout com Pagar.me e Asaas, a matrícula automática no Moodle via filas em RabbitMQ e Redis e a autenticação em dois fatores. Na nova LMS (AdonisJS e Next.js), com o tenant resolvido pelo subdomínio, trabalhei em assinaturas recorrentes com cartão, boleto e Pix, emissão de NF-e e no SSO entre os dois sistemas.',
      en: "I've been the lead developer of this distance-learning degree platform since 2020, with over 70% of the commits. In the Laravel core I built the theme-based white-label for partner institutions, checkout with Pagar.me and Asaas, automatic Moodle enrollment through RabbitMQ and Redis queues, and two-factor authentication. On the new LMS (AdonisJS and Next.js), where each tenant is resolved by subdomain, I worked on recurring subscriptions with card, boleto, and Pix, NF-e invoicing, and SSO between both systems.",
    },
    techs: [
      'laravel',
      'php',
      'vue',
      'adonisjs',
      'typescript',
      'next',
      'react',
      'mysql',
      'redis',
      'rabbitmq',
      'moodle',
      'aws',
      'docker',
      'claude',
    ],
  },
  {
    id: 'fatal-model',
    company: 'Atlas Technologies',
    companyInitials: 'AT',
    employment: 'employed',
    adultWarning: true,
    title: 'Fatal Model',
    accent: '#e11d48',
    domain: 'fatalmodel.com',
    siteUrl: 'https://fatalmodel.com',
    subtitle: {
      pt: 'Top 50 em audiência no Brasil',
      en: 'Top 50 most-accessed sites in Brazil',
    },
    summary: {
      pt: 'Plataforma entre as 50 mais acessadas do Brasil, com milhões de visitas por dia e dezenas de microsserviços. No time de segurança, construí a autenticação facial com prova de vida (AWS Rekognition), a validação de documentos com OCR e a API de denúncias e moderação. Também trabalhei no checkout e no middleware financeiro que orquestra vários gateways, Pix e carteira digital, com processamento assíncrono e conciliação.',
      en: "Among Brazil's 50 most-accessed websites, with millions of daily visits and dozens of microservices. On the security team I built facial authentication with liveness detection (AWS Rekognition), OCR-based document verification, and the reports and moderation API. I also worked on checkout and on the payments middleware that orchestrates multiple gateways, Pix, and a digital wallet, with async processing and reconciliation.",
    },
    techs: [
      'laravel',
      'php',
      'vue',
      'nuxt',
      'mysql',
      'redis',
      'elasticsearch',
      'aws',
      'docker',
      'opentelemetry',
      'grafana',
      'metabase',
      'ghactions',
      'claude',
    ],
  },
  {
    id: 'itau-uniclass',
    company: 'Alice Wonders',
    companyInitials: 'AW',
    employment: 'freelance',
    title: 'Itaú Flagship Uniclass — Av. Paulista',
    accent: '#f97316',
    domain: 'itau.com.br/uniclass',
    siteUrl: 'https://www.alicewonders.ws/en/works/espaco-itau-uniclass',
    subtitle: {
      pt: 'Experiência interativa em totens da agência flagship',
      en: 'Interactive in-branch totem experience at the flagship',
    },
    summary: {
      pt: 'Sistema offline-first instalado nos totens da agência flagship Itaú Uniclass na Av. Paulista. Experiência interativa para clientes e visitantes durante a visita, com sincronização resiliente e telemetria via MQTT para acompanhar uso em tempo real.',
      en: "Offline-first system installed on the totems at Itaú Uniclass's Av. Paulista flagship branch. Interactive experience for clients and visitors during their visit, with resilient sync and MQTT telemetry to monitor usage in real time.",
    },
    techs: ['laravel', 'postgres', 'mqtt', 'docker', 'react', 'nightwatch', 'redis'],
  },
  {
    id: 'saudz',
    company: 'Saudz',
    companyInitials: 'SZ',
    employment: 'freelance',
    title: 'Saudz',
    accent: '#039855',
    domain: 'saudz.com.br',
    siteUrl: 'https://saudz.com.br',
    subtitle: {
      pt: 'Sistema modular para clínicas e consultórios',
      en: 'Modular management system for clinics and practices',
    },
    summary: {
      pt: 'SaaS para clínicas e consultórios em que o profissional monta o próprio plano e paga só pelos módulos que usa: agenda com confirmação automática por WhatsApp, prontuário com modelos por especialidade, prescrição digital e financeiro. Atende medicina, fisioterapia, nutrição, psicologia, estética e pediatria.',
      en: 'SaaS for clinics and private practices where each professional builds their own plan and pays only for the modules they use: scheduling with automatic WhatsApp confirmations, specialty-specific medical records, digital prescriptions, and billing. Serves medicine, physiotherapy, nutrition, psychology, aesthetics, and pediatrics.',
    },
    techs: [
      'laravel',
      'php',
      'filament',
      'next',
      'react',
      'typescript',
      'tailwind',
      'postgres',
      'redis',
      'stripe',
      'docker',
      'coolify',
      'nightwatch',
    ],
  },
  {
    id: 'giovanna-ramaldo',
    company: 'Giovanna Ramaldo Arquitetura',
    companyInitials: 'GR',
    employment: 'freelance',
    title: 'Giovanna Ramaldo Arquitetura',
    accent: '#c9a96e',
    domain: 'giovannaramaldo.com.br',
    siteUrl: 'https://giovannaramaldo.com.br',
    subtitle: {
      pt: 'Landing page de captação para escritório de arquitetura',
      en: 'Lead-generation landing page for an architecture studio',
    },
    summary: {
      pt: 'Landing page para uma arquiteta de Araçatuba/SP, com portfólio de projetos, serviços, depoimentos e formulário de orçamento. Cada rota é pré-renderizada em HTML estático com CSS inline, fontes servidas pelo próprio site e dados estruturados pra SEO. O Google Analytics só carrega depois da primeira interação, com Consent Mode negado por padrão.',
      en: 'Landing page for an architect in Araçatuba, Brazil, with a project portfolio, services, testimonials, and a quote request form. Every route is prerendered to static HTML with inlined CSS, self-hosted fonts, and structured data for SEO. Google Analytics only loads after the first interaction, with Consent Mode denied by default.',
    },
    techs: ['react', 'typescript', 'vite', 'nginx', 'docker'],
  },
];
