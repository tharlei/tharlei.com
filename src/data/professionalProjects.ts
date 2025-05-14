import { siteConfig } from '@/config/site';

export interface ProfessionalProject {
  id: number;
  name: string;
  company: string;
  companyId: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

// Professional projects data
export const professionalProjects: ProfessionalProject[] = [
  // {
  //   id: 1,
  //   name: 'projects.professional.ecommerce.name',
  //   company: 'Tech Company Inc.',
  //   companyId: 'tech-company',
  //   description: 'projects.professional.ecommerce.description',
  //   image: '/placeholder.svg',
  //   link: siteConfig.projects.professional.ecommerce,
  //   technologies: ['react', 'node', 'redis', 'aws', 'docker', 'postgres']
  // },
];
