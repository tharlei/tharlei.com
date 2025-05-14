import { Building, Code } from 'lucide-react';
import { useSearchParams } from 'react-router-dom';

import React, { useState } from 'react';

import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';

import Layout from '../components/layout/Layout';
import OpenSourceProjectList from '../components/projects/OpenSourceProjectList';
import ProfessionalProjectList from '../components/projects/ProfessionalProjectList';
import { useLocale } from '../contexts/LocaleContext';
import { openSourceProjects } from '../data/openSourceProjects';
import { professionalProjects } from '../data/professionalProjects';

const Projects = () => {
  const { t } = useLocale();
  const [activeTab, setActiveTab] = useState('professional');
  const [searchParams, setSearchParams] = useSearchParams();

  // Filter projects if company param exists
  const companyFilter = searchParams.get('company');
  const filteredProjects = companyFilter
    ? professionalProjects.filter(project => project.companyId === companyFilter)
    : professionalProjects;

  const clearFilter = () => {
    setSearchParams({});
  };

  return (
    <Layout>
      <section className="container mx-auto animate-page-transition px-4 py-16">
        <div className="mx-auto max-w-4xl">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-3 text-3xl font-bold">{t('projects.title')}</h1>
            <p className="text-muted-foreground">{t('projects.subtitle')}</p>
          </div>

          {/* Tabs */}
          <Tabs
            defaultValue="professional"
            value={activeTab}
            onValueChange={setActiveTab}
            className="mb-8"
          >
            <div className="flex justify-center">
              <TabsList>
                <TabsTrigger value="professional" className="flex items-center gap-1">
                  <Building className="h-4 w-4" />
                  {t('projects.workExperience')}
                </TabsTrigger>
                <TabsTrigger value="opensource" className="flex items-center gap-1">
                  <Code className="h-4 w-4" />
                  {t('projects.openSource')}
                </TabsTrigger>
              </TabsList>
            </div>

            {/* Professional Projects Tab */}
            <TabsContent value="professional">
              <ProfessionalProjectList
                projects={filteredProjects}
                companyFilter={companyFilter}
                clearFilter={clearFilter}
              />
            </TabsContent>

            {/* Open Source Tab */}
            <TabsContent value="opensource">
              <OpenSourceProjectList projects={openSourceProjects} />
            </TabsContent>
          </Tabs>
        </div>
      </section>
    </Layout>
  );
};

export default Projects;
