import { ArrowRight, Building, Calendar, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

import TechIcon from '../components/TechIcon';
import Layout from '../components/layout/Layout';
import { useLocale } from '../contexts/LocaleContext';

const skills = [];

const timeline = [
  {
    year: '2021 - Present',
    title: 'work.techCompany.title',
    company: 'work.techCompany.name',
    description: 'work.techCompany.description',
    techs: [],
    projectLink: '/projects?company=tech-company',
  },
];

const About = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h1 className="mb-3 text-3xl font-bold">{t('about.title')}</h1>
            <p className="text-muted-foreground">{t('about.subtitle')}</p>
          </div>

          <div className="mb-12">
            <h2 className="mb-4 text-2xl font-semibold">{t('about.bio.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.bio.p1')}</p>
              <p>{t('about.bio.p2')}</p>
              <p>{t('about.bio.p3')}</p>
            </div>
          </div>

          <div className="mb-16">
            <h2 className="mb-6 text-2xl font-semibold">{t('about.skills')}</h2>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
              {skills.map(skillGroup => (
                <Card
                  key={skillGroup.category}
                  className="overflow-hidden transition-shadow hover:shadow-md"
                >
                  <CardContent className="p-6">
                    <h3 className="mb-3 text-lg font-medium">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map(tech => (
                        <div
                          key={tech}
                          className="flex items-center rounded-full bg-accent/50 px-3 py-1 text-sm text-accent-foreground"
                        >
                          {/* <TechIcon name={tech} size={14} className="mr-1.5" /> */}
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          <div>
            <h2 className="mb-8 flex items-center text-2xl font-semibold">
              <Calendar className="mr-2 h-6 w-6 text-primary" />
              {t('about.timeline')}
            </h2>

            <div className="relative">
              <div className="absolute bottom-10 left-6 top-2 w-0.5 rounded-full bg-primary/20"></div>

              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-16">
                    <div className="absolute left-0 top-0 flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/20 bg-primary/10">
                      <Building className="h-6 w-6 text-primary" />
                    </div>

                    <div className="rounded-lg border bg-card p-6 shadow-sm transition-shadow hover:shadow-md">
                      <div className="mb-4 flex flex-wrap items-start justify-between">
                        <div>
                          <h3 className="text-xl font-medium">{t(item.title)}</h3>
                          <p className="text-lg text-primary">{t(item.company)}</p>
                        </div>
                        <div className="flex items-center text-sm text-muted-foreground">
                          <Calendar className="mr-1 h-4 w-4" />
                          {item.year}
                        </div>
                      </div>

                      <p className="mb-4 text-muted-foreground">{t(item.description)}</p>

                      <div className="mb-4 flex flex-wrap gap-2">
                        {item.techs.map(tech => (
                          <div
                            key={tech}
                            className="flex items-center rounded-full bg-accent/50 px-2 py-1 text-xs"
                          >
                            <TechIcon name={tech} size={12} className="mr-1" />
                            {tech}
                          </div>
                        ))}
                      </div>

                      <Link
                        to={item.projectLink}
                        className="flex items-center text-sm text-primary hover:text-primary/80"
                      >
                        {t('projects.viewMore')} <ArrowRight className="ml-1 h-3 w-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-12 text-center">
              <Button asChild>
                <Link to="/projects">{t('projects.title')}</Link>
              </Button>
            </div>
          </div>

          <div className="mt-20 text-center">
            <h3 className="mb-4 text-xl font-medium">{t('about.getInTouch')}</h3>
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/tharlei"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
              >
                <Github size={24} className="mb-2" />
                <span>GitHub</span>
              </a>
              <a
                href="https://linkedin.com/in/tharleialeixo"
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
              >
                <Linkedin size={24} className="mb-2" />
                <span>LinkedIn</span>
              </a>
              <a
                href="mailto:tharlei_aleixo@hotmail.com"
                className="flex flex-col items-center text-muted-foreground transition-colors hover:text-primary"
              >
                <Mail size={24} className="mb-2" />
                <span>Email</span>
              </a>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
