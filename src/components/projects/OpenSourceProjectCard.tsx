import { Github } from 'lucide-react';

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

export interface OpenSourceProject {
  id: number;
  name: string;
  repo: string;
  description: string;
  link: string;
  contributions: string[];
  technologies: string[];
}

interface OpenSourceProjectCardProps {
  project: OpenSourceProject;
  index: number;
}

const OpenSourceProjectCard: React.FC<OpenSourceProjectCardProps> = ({ project, index }) => {
  const { t } = useLocale();

  return (
    <AnimatedCard key={project.id} delay={index}>
      <Card className="overflow-hidden transition-shadow hover:shadow-md">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="flex items-center gap-2">{project.name}</CardTitle>
            <CardDescription className="mt-1 font-mono text-sm">{project.repo}</CardDescription>
          </div>
          <Button size="sm" variant="outline" className="h-8" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Github className="mr-2 h-4 w-4" /> {t('projects.viewRepo')}
            </a>
          </Button>
        </CardHeader>

        <CardContent>
          <p className="mb-3 text-muted-foreground">{project.description}</p>

          <div className="mb-4">
            <div className="mb-2 text-sm font-medium">{t('projects.contributions')}</div>
            <div className="flex flex-wrap gap-2">
              {project.contributions.map((contribution, i) => (
                <div key={i} className="rounded-full bg-primary/10 px-2 py-1 text-xs text-primary">
                  {contribution}
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="mb-2 text-sm font-medium">{t('projects.technologies')}:</div>
            <div className="flex flex-wrap gap-2">
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
          </div>
        </CardContent>
      </Card>
    </AnimatedCard>
  );
};

export default OpenSourceProjectCard;
