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
      pt: 'Plataforma entre as 50 mais acessadas do Brasil, com média de milhões de visitas diárias. Atuei no time de segurança, implementando autenticação facial dos anunciantes e as integrações de pagamento críticas para a operação — tudo em um ambiente de alta carga e auditoria constante.',
      en: "Among Brazil's 50 most-accessed websites, averaging millions of daily visits. Joined the security team to ship facial authentication for advertisers and the platform's mission-critical payment integrations — under heavy traffic and constant audit.",
    },
    techs: ['laravel', 'php', 'vue', 'mysql', 'redis', 'grafana', 'metabase', 'ghactions'],
  },
  {
    id: 'cenes',
    company: 'Focus Concursos',
    companyInitials: 'FC',
    employment: 'employed',
    title: 'Faculdade Focus / Cenes',
    accent: '#dc2626',
    domain: 'cenes.com.br',
    siteUrl: 'https://cenes.com.br',
    subtitle: {
      pt: 'Plataforma white-label de graduações EAD',
      en: 'White-label distance-learning graduation platform',
    },
    summary: {
      pt: 'Construção do zero de uma plataforma white-label para venda de graduações EAD, arquitetada para suportar múltiplas instituições parceiras com isolamento de dados, escala horizontal e processamento assíncrono de matrículas e pagamentos.',
      en: 'Built from scratch a white-label platform for selling distance-learning graduations, architected to support multiple partner institutions with data isolation, horizontal scale, and asynchronous enrollment and payment processing.',
    },
    techs: [
      'laravel',
      'php',
      'react',
      'vue',
      'rabbitmq',
      'postgres',
      'redis',
      'coolify',
      'aws',
      'docker',
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
    siteUrl: '#',
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
];
