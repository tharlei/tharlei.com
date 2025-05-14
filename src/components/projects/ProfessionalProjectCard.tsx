import { Globe } from 'lucide-react';

import React from 'react';

import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';

import { useLocale } from '../../contexts/LocaleContext';
import AnimatedCard from '../AnimatedCard';
import TechIcon from '../TechIcon';

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

interface ProfessionalProjectCardProps {
  project: ProfessionalProject;
  index: number;
}

const ProfessionalProjectCard: React.FC<ProfessionalProjectCardProps> = ({ project, index }) => {
  const { t } = useLocale();

  return (
    <AnimatedCard key={project.id} delay={index}>
      <Card className="flex h-full flex-col overflow-hidden transition-shadow hover:shadow-md">
        <div className="relative h-48 bg-accent">
          <img src={project.image} alt={project.name} className="h-full w-full object-cover" />
          <div className="absolute right-3 top-3 rounded bg-background/80 px-2 py-1 text-xs backdrop-blur-sm">
            {project.company}
          </div>
        </div>

        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">{project.description}</CardDescription>
        </CardHeader>

        <CardContent className="flex-grow">
          <div className="mb-4 flex flex-wrap gap-1">
            {project.technologies.map(tech => (
              <div
                key={tech}
                className="flex items-center rounded-full bg-accent px-2 py-1 text-xs"
              >
                <TechIcon name={tech} size={12} className="mr-1" />
                {tech}
              </div>
            ))}
          </div>
        </CardContent>

        <CardFooter>
          <Button variant="outline" className="w-full text-sm" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Globe className="mr-2 h-4 w-4" /> {t('projects.visitProject')}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedCard>
  );
};

export default ProfessionalProjectCard;
