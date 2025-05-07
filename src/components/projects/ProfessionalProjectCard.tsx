
import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Globe } from 'lucide-react';
import TechIcon from '../TechIcon';
import AnimatedCard from '../AnimatedCard';
import { useLocale } from '../../contexts/LocaleContext';

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
      <Card className="overflow-hidden hover:shadow-md transition-shadow flex flex-col h-full">
        <div className="relative h-48 bg-accent">
          <img 
            src={project.image}
            alt={project.name}
            className="w-full h-full object-cover"
          />
          <div className="absolute top-3 right-3 bg-background/80 backdrop-blur-sm px-2 py-1 rounded text-xs">
            {project.company}
          </div>
        </div>
        
        <CardHeader>
          <CardTitle>{project.name}</CardTitle>
          <CardDescription className="line-clamp-2">
            {project.description}
          </CardDescription>
        </CardHeader>
        
        <CardContent className="flex-grow">
          <div className="flex flex-wrap gap-1 mb-4">
            {project.technologies.map((tech) => (
              <div key={tech} className="text-xs px-2 py-1 bg-accent rounded-full flex items-center">
                <TechIcon name={tech} size={12} className="mr-1" />
                {tech}
              </div>
            ))}
          </div>
        </CardContent>
        
        <CardFooter>
          <Button variant="outline" className="w-full text-sm" asChild>
            <a href={project.link} target="_blank" rel="noopener noreferrer">
              <Globe className="h-4 w-4 mr-2" /> {t('projects.visitProject')}
            </a>
          </Button>
        </CardFooter>
      </Card>
    </AnimatedCard>
  );
};

export default ProfessionalProjectCard;
