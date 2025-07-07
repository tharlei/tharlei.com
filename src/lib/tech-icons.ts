export type TechIconType = 'svg' | 'fallback';

export interface TechIconConfig {
  type: TechIconType;
  name: string;
  slug: string;
  category: string;
}

// Configuração dos ícones
export const techIconsConfig: Record<string, TechIconConfig> = {
  react: {
    type: 'svg',
    name: 'React',
    slug: 'react',
    category: 'frontend',
  },
  next: {
    type: 'svg',
    name: 'Next.js',
    slug: 'nextdotjs',
    category: 'frontend',
  },
  nuxt: {
    type: 'svg',
    name: 'Nuxt.js',
    slug: 'nuxt',
    category: 'frontend',
  },
  vue: {
    type: 'svg',
    name: 'Vue.js',
    slug: 'vuedotjs',
    category: 'frontend',
  },
  typescript: {
    type: 'svg',
    name: 'TypeScript',
    slug: 'typescript',
    category: 'frontend',
  },
  javascript: {
    type: 'svg',
    name: 'JavaScript',
    slug: 'javascript',
    category: 'frontend',
  },
  tailwind: {
    type: 'svg',
    name: 'Tailwind CSS',
    slug: 'tailwindcss',
    category: 'frontend',
  },

  node: {
    type: 'svg',
    name: 'Node.js',
    slug: 'nodedotjs',
    category: 'backend',
  },
  nest: {
    type: 'svg',
    name: 'NestJS',
    slug: 'nestjs',
    category: 'backend',
  },
  php: {
    type: 'svg',
    name: 'PHP',
    slug: 'php',
    category: 'backend',
  },
  laravel: {
    type: 'svg',
    name: 'Laravel',
    slug: 'laravel',
    category: 'backend',
  },
  adonis: {
    type: 'svg',
    name: 'AdonisJS',
    slug: 'adonisjs',
    category: 'backend',
  },

  mysql: {
    type: 'svg',
    name: 'MySQL',
    slug: 'mysql',
    category: 'database',
  },
  postgres: {
    type: 'svg',
    name: 'PostgreSQL',
    slug: 'postgresql',
    category: 'database',
  },
  mongodb: {
    type: 'svg',
    name: 'MongoDB',
    slug: 'mongodb',
    category: 'database',
  },
  firebase: {
    type: 'svg',
    name: 'Firebase',
    slug: 'firebase',
    category: 'database',
  },
  redis: {
    type: 'svg',
    name: 'Redis',
    slug: 'redis',
    category: 'database',
  },
  elasticsearch: {
    type: 'svg',
    name: 'Elasticsearch',
    slug: 'elastic',
    category: 'database',
  },

  graphql: {
    type: 'svg',
    name: 'GraphQL',
    slug: 'graphql',
    category: 'tools',
  },
  postman: {
    type: 'svg',
    name: 'Postman',
    slug: 'postman',
    category: 'tools',
  },
  nginx: {
    type: 'svg',
    name: 'Nginx',
    slug: 'nginx',
    category: 'tools',
  },

  kibana: {
    type: 'svg',
    name: 'Kibana',
    slug: 'kibana',
    category: 'devops',
  },
  minio: {
    type: 'svg',
    name: 'MinIO',
    slug: 'minio',
    category: 'cloud',
  },
  gcp: {
    type: 'svg',
    name: 'Google Cloud',
    slug: 'googlecloud',
    category: 'cloud',
  },
  docker: {
    type: 'svg',
    name: 'Docker',
    slug: 'docker',
    category: 'devops',
  },
  heroku: {
    type: 'svg',
    name: 'Heroku',
    slug: 'heroku',
    category: 'cloud',
  },
  ubuntu: {
    type: 'svg',
    name: 'Ubuntu',
    slug: 'ubuntu',
    category: 'devops',
  },
  netlify: {
    type: 'svg',
    name: 'Netlify',
    slug: 'netlify',
    category: 'cloud',
  },
  vercel: {
    type: 'svg',
    name: 'Vercel',
    slug: 'vercel',
    category: 'cloud',
  },
  digitalocean: {
    type: 'svg',
    name: 'Digital Ocean',
    slug: 'digitalocean',
    category: 'cloud',
  },
  github: {
    type: 'svg',
    name: 'GitHub',
    slug: 'github',
    category: 'devops',
  },
  git: {
    type: 'svg',
    name: 'Git',
    slug: 'git',
    category: 'devops',
  },

  jest: {
    type: 'svg',
    name: 'Jest',
    slug: 'jest',
    category: 'testing',
  },
  vitest: {
    type: 'svg',
    name: 'Vitest',
    slug: 'vitest',
    category: 'testing',
  },

  datadog: {
    type: 'svg',
    name: 'Datadog',
    slug: 'datadog',
    category: 'monitoring',
  },
  rabbitmq: {
    type: 'svg',
    name: 'RabbitMQ',
    slug: 'rabbitmq',
    category: 'monitoring',
  },

  jira: {
    type: 'svg',
    name: 'Jira',
    slug: 'jira',
    category: 'tools',
  },
};
