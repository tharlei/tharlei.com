export type TechIconType = 'svg' | 'fallback';

export interface TechIconConfig {
  type: TechIconType;
  name: string;
  slug: string;
}

// Configuração dos ícones
export const techIconsConfig: Record<string, TechIconConfig> = {
  // Frontend
  react: {
    type: 'svg',
    name: 'React',
    slug: 'react'
  },
  next: {
    type: 'svg',
    name: 'Next.js',
    slug: 'nextdotjs'
  },
  nuxt: {
    type: 'svg',
    name: 'Nuxt.js',
    slug: 'nuxt'
  },
  vue: {
    type: 'svg',
    name: 'Vue.js',
    slug: 'vuedotjs'
  },
  typescript: {
    type: 'svg',
    name: 'TypeScript',
    slug: 'typescript'
  },
  javascript: {
    type: 'svg',
    name: 'JavaScript',
    slug: 'javascript'
  },
  tailwind: {
    type: 'svg',
    name: 'Tailwind CSS',
    slug: 'tailwindcss'
  },

  // Backend
  node: {
    type: 'svg',
    name: 'Node.js',
    slug: 'nodedotjs'
  },
  nest: {
    type: 'svg',
    name: 'NestJS',
    slug: 'nestjs'
  },
  php: {
    type: 'svg',
    name: 'PHP',
    slug: 'php'
  },
  laravel: {
    type: 'svg',
    name: 'Laravel',
    slug: 'laravel'
  },
  adonis: {
    type: 'svg',
    name: 'AdonisJS',
    slug: 'adonisjs'
  },

  // Databases
  mysql: {
    type: 'svg',
    name: 'MySQL',
    slug: 'mysql'
  },
  postgres: {
    type: 'svg',
    name: 'PostgreSQL',
    slug: 'postgresql'
  },
  mongodb: {
    type: 'svg',
    name: 'MongoDB',
    slug: 'mongodb'
  },
  firebase: {
    type: 'svg',
    name: 'Firebase',
    slug: 'firebase'
  },
  redis: {
    type: 'svg',
    name: 'Redis',
    slug: 'redis'
  },
  elasticsearch: {
    type: 'svg',
    name: 'Elasticsearch',
    slug: 'elasticsearch'
  },

  // APIs & Tools
  graphql: {
    type: 'svg',
    name: 'GraphQL',
    slug: 'graphql'
  },
  postman: {
    type: 'svg',
    name: 'Postman',
    slug: 'postman'
  },
  nginx: {
    type: 'svg',
    name: 'Nginx',
    slug: 'nginx'
  },

  // Cloud & DevOps
  aws: {
    type: 'svg',
    name: 'AWS',
    slug: 'amazon'
  },
  gcp: {
    type: 'svg',
    name: 'Google Cloud',
    slug: 'googlecloud'
  },
  docker: {
    type: 'svg',
    name: 'Docker',
    slug: 'docker'
  },
  heroku: {
    type: 'svg',
    name: 'Heroku',
    slug: 'heroku'
  },
  digitalocean: {
    type: 'svg',
    name: 'Digital Ocean',
    slug: 'digitalocean'
  },
  github: {
    type: 'svg',
    name: 'GitHub',
    slug: 'github'
  },
  git: {
    type: 'svg',
    name: 'Git',
    slug: 'git'
  },

  // Testing
  jest: {
    type: 'svg',
    name: 'Jest',
    slug: 'jest'
  },
  vitest: {
    type: 'svg',
    name: 'Vitest',
    slug: 'vitest'
  },

  // Monitoring
  datadog: {
    type: 'svg',
    name: 'Datadog',
    slug: 'datadog'
  },
  rabbitmq: {
    type: 'svg',
    name: 'RabbitMQ',
    slug: 'rabbitmq'
  }
}; 