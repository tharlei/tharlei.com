import { siteConfig } from '@/config/site';

export interface OpenSourceProject {
  id: number;
  name: string;
  repo: string;
  description: string;
  link: string;
  contributions: string[];
  technologies: string[];
}

// Open source contributions data
export const openSourceProjects: OpenSourceProject[] = [
  // {
  //   id: 1,
  //   name: 'projects.opensource.components.name',
  //   repo: 'framework/components',
  //   description: 'projects.opensource.components.description',
  //   link: siteConfig.projects.github.components,
  //   contributions: [
  //     'projects.opensource.components.contributions.feature',
  //     'projects.opensource.components.contributions.bugs',
  //     'projects.opensource.components.contributions.docs',
  //   ],
  //   technologies: ['react', 'typescript', 'jest'],
  // },
];
