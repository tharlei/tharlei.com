
import React from 'react';
import Layout from '../components/layout/Layout';
import { useLocale } from '../contexts/LocaleContext';
import { Link } from 'react-router-dom';
import { Card, CardContent } from '@/components/ui/card';
import { 
  Calendar, 
  Code, 
  Building, 
  Github, 
  Linkedin, 
  Mail, 
  ArrowRight 
} from 'lucide-react';
import TechIcon from '../components/TechIcon';
import { Button } from '@/components/ui/button';

const skills = [
  { category: 'Frontend', techs: ['React', 'Next.js', 'TypeScript', 'JavaScript', 'HTML', 'CSS'] },
  { category: 'Backend', techs: ['Node.js', 'PHP', 'Laravel', 'Express'] },
  { category: 'Database', techs: ['MySQL', 'PostgreSQL', 'MongoDB', 'Redis'] },
  { category: 'Tools & Others', techs: ['Docker', 'AWS', 'Git', 'GitHub', 'RabbitMQ', 'Elasticsearch'] },
];

const timeline = [
  {
    year: '2021 - Present',
    title: 'work.techCompany.title',
    company: 'work.techCompany.name',
    description: 'work.techCompany.description',
    techs: ['React', 'Node.js', 'AWS', 'Docker'],
    projectLink: '/projects?company=tech-company',
  },
  {
    year: '2018 - 2021',
    title: 'work.digitalSolutions.title',
    company: 'work.digitalSolutions.name',
    description: 'work.digitalSolutions.description',
    techs: ['Laravel', 'Vue.js', 'PHP', 'MySQL'],
    projectLink: '/projects?company=digital-solutions',
  },
  {
    year: '2016 - 2018',
    title: 'work.creativeWeb.title',
    company: 'work.creativeWeb.name',
    description: 'work.creativeWeb.description',
    techs: ['JavaScript', 'PHP', 'HTML', 'CSS'],
    projectLink: '/projects?company=creative-web',
  },
];

const About = () => {
  const { t } = useLocale();

  return (
    <Layout>
      <section className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto">
          {/* Header */}
          <div className="mb-12 text-center">
            <h1 className="text-3xl font-bold mb-3">{t('about.title')}</h1>
            <p className="text-muted-foreground">{t('about.subtitle')}</p>
          </div>
          
          {/* Bio Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-4">{t('about.bio.title')}</h2>
            <div className="space-y-4 text-muted-foreground">
              <p>{t('about.bio.p1')}</p>
              <p>{t('about.bio.p2')}</p>
              <p>{t('about.bio.p3')}</p>
            </div>
          </div>
          
          {/* Skills Section */}
          <div className="mb-16">
            <h2 className="text-2xl font-semibold mb-6">{t('about.skills')}</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {skills.map((skillGroup) => (
                <Card key={skillGroup.category} className="overflow-hidden hover:shadow-md transition-shadow">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-medium mb-3">{skillGroup.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skillGroup.techs.map((tech) => (
                        <div
                          key={tech}
                          className="bg-accent/50 text-accent-foreground px-3 py-1 rounded-full text-sm flex items-center"
                        >
                          <TechIcon name={tech} size={14} className="mr-1.5" />
                          {tech}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          {/* Timeline Section */}
          <div>
            <h2 className="text-2xl font-semibold mb-8 flex items-center">
              <Calendar className="mr-2 h-6 w-6 text-primary" />
              {t('about.timeline')}
            </h2>
            
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-6 top-2 bottom-10 w-0.5 bg-primary/20 rounded-full"></div>
              
              {/* Timeline entries */}
              <div className="space-y-12">
                {timeline.map((item, index) => (
                  <div key={index} className="relative pl-16">
                    {/* Timeline dot */}
                    <div className="absolute left-0 top-0 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center border-2 border-primary/20">
                      <Building className="h-6 w-6 text-primary" />
                    </div>
                    
                    <div className="bg-card rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow border">
                      <div className="flex flex-wrap justify-between items-start mb-4">
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
                      
                      <div className="flex flex-wrap gap-2 mb-4">
                        {item.techs.map((tech) => (
                          <div
                            key={tech}
                            className="bg-accent/50 px-2 py-1 rounded-full text-xs flex items-center"
                          >
                            <TechIcon name={tech} size={12} className="mr-1" />
                            {tech}
                          </div>
                        ))}
                      </div>
                      
                      <Link 
                        to={item.projectLink} 
                        className="text-primary hover:text-primary/80 text-sm flex items-center"
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
          
          {/* Contact Links */}
          <div className="mt-20 text-center">
            <h3 className="text-xl font-medium mb-4">{t('about.getInTouch')}</h3>
            <div className="flex justify-center gap-6">
              <a 
                href="https://github.com/tharlei"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Github size={24} className="mb-2" />
                <span>GitHub</span>
              </a>
              <a 
                href="https://linkedin.com/in/tharlei"
                target="_blank"
                rel="noopener noreferrer" 
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
              >
                <Linkedin size={24} className="mb-2" />
                <span>LinkedIn</span>
              </a>
              <a 
                href="mailto:contact@tharlei.dev"
                className="flex flex-col items-center text-muted-foreground hover:text-primary transition-colors"
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
