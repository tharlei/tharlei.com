import React from 'react';

import { Button } from '@/components/ui/button';

import { useLocale } from '../../contexts/LocaleContext';
import { ProfessionalProject } from '../../data/professionalProjects';
import ProfessionalProjectCard from './ProfessionalProjectCard';

interface ProfessionalProjectListProps {
  projects: ProfessionalProject[];
  companyFilter: string | null;
  clearFilter: () => void;
}

const ProfessionalProjectList: React.FC<ProfessionalProjectListProps> = ({
  projects,
  companyFilter,
  clearFilter,
}) => {
  const { t } = useLocale();

  return (
    <>
      {companyFilter && (
        <div className="mb-6">
          <Button variant="link" onClick={clearFilter} className="px-0">
            ← {t('projects.allCompanies')}
          </Button>
        </div>
      )}

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {projects.map((project, index) => (
          <ProfessionalProjectCard key={project.id} project={project} index={index} />
        ))}
      </div>
    </>
  );
};

export default ProfessionalProjectList;
