export const siteConfig = {
  name: 'Tharlei',
  title: 'Tharlei - Desenvolvedor Web',
  description: 'Desenvolvedor web apaixonado por criar aplicações robustas e escaláveis.',

  links: {
    github: import.meta.env.VITE_GITHUB_URL,
    linkedin: import.meta.env.VITE_LINKEDIN_URL,
  },

  seo: {
    title: 'Tharlei - Desenvolvedor Web',
    description: 'Desenvolvedor web apaixonado por criar aplicações robustas e escaláveis.',
    keywords: ['desenvolvedor web', 'frontend', 'backend', 'fullstack', 'react', 'node.js'],
    author: 'Tharlei',
    siteUrl: import.meta.env.VITE_SITE_URL,
  },

  contact: {
    email: import.meta.env.VITE_EMAIL || 'contato@tharlei.com',
    phone: import.meta.env.VITE_PHONE || '+55 (XX) XXXX-XXXX',
  },
};
