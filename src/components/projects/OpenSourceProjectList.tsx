
import React from 'react';
import { Button } from '@/components/ui/button';
import { ExternalLink } from 'lucide-react';
import OpenSourceProjectCard from './OpenSourceProjectCard';
import { OpenSourceProject } from '../../data/openSourceProjects';
import { useLocale } from '../../contexts/LocaleContext';

interface OpenSourceProjectListProps {
  projects: OpenSourceProject[];
}

const OpenSourceProjectList: React.FC<OpenSourceProjectListProps> = ({ projects }) => {
  const { t } = useLocale();

  return (
    <div className="space-y-6">
      {projects.map((project, index) => (
        <OpenSourceProjectCard 
          key={project.id} 
          project={project} 
          index={index} 
        />
      ))}
      
      <div className="mt-8 text-center">
        <Button asChild variant="outline">
          <a 
            href="https://github.com/tharlei" 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center"
          >
            {t('projects.seeMoreGitHub')}
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </div>
    </div>
  );
};

export default OpenSourceProjectList;
