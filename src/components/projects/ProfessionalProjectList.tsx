
import React from 'react';
import { Button } from '@/components/ui/button';
import ProfessionalProjectCard from './ProfessionalProjectCard';
import { ProfessionalProject } from '../../data/professionalProjects';
import { useLocale } from '../../contexts/LocaleContext';

interface ProfessionalProjectListProps {
  projects: ProfessionalProject[];
  companyFilter: string | null;
  clearFilter: () => void;
}

const ProfessionalProjectList: React.FC<ProfessionalProjectListProps> = ({ 
  projects, 
  companyFilter,
  clearFilter
}) => {
  const { t } = useLocale();

  return (
    <>
      {companyFilter && (
        <div className="mb-6">
          <Button 
            variant="link" 
            onClick={clearFilter}
            className="px-0"
          >
            ← {t('projects.allCompanies')}
          </Button>
        </div>
      )}
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project, index) => (
          <ProfessionalProjectCard 
            key={project.id} 
            project={project} 
            index={index} 
          />
        ))}
      </div>
    </>
  );
};

export default ProfessionalProjectList;
