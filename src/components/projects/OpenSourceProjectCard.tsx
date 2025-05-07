
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Github } from 'lucide-react';
import TechIcon from '../TechIcon';
import AnimatedCard from '../AnimatedCard';
import { useLocale } from '../../contexts/LocaleContext';

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
      <Card className="overflow-hidden hover:shadow-md transition-shadow">
        <CardHeader className="flex flex-row items-start justify-between space-y-0">
          <div>
            <CardTitle className="flex items-center gap-2">
              {project.name}
            </CardTitle>
            <CardDescription className="text-sm font-mono mt-1">
              {project.repo}
            </CardDescription>
          </div>
          <Button size="sm" variant="outline" className="h-8" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Github className="h-4 w-4 mr-2" /> {t('projects.viewRepo')}
            </a>
          </Button>
        </CardHeader>
        
        <CardContent>
          <p className="text-muted-foreground mb-3">
            {project.description}
          </p>
          
          <div className="mb-4">
            <div className="text-sm font-medium mb-2">{t('projects.contributions')}</div>
            <div className="flex flex-wrap gap-2">
              {project.contributions.map((contribution, i) => (
                <div key={i} className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full">
                  {contribution}
                </div>
              ))}
            </div>
          </div>
          
          <div>
            <div className="text-sm font-medium mb-2">{t('projects.technologies')}:</div>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <div key={tech} className="text-xs px-2 py-1 bg-accent rounded-full flex items-center">
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
