import { useState } from 'react';
import { Link } from 'react-router-dom';
import Layout from '../components/layout/Layout';
import TypedText from '../components/TypedText';
import { useLocale } from '../contexts/LocaleContext';
import { useIsMobile } from '../hooks/use-mobile';
import { Button } from '@/components/ui/button';
import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import TechCarousel from '../components/TechCarousel';
import TechIcon from '../components/TechIcon';
import { techIconsConfig } from '@/lib/tech-icons';

const Home = () => {
  const { t } = useLocale();
  const isMobile = useIsMobile();
  const [techs] = useState(Object.keys(techIconsConfig).sort(() => Math.random() - 0.5));

  const roles = [
    t('home.role.web'),
    t('home.role.back'),
    t('home.role.front')
  ];

  return (
    <Layout>
      <section className="container mx-auto px-4 py-20">
        <div className="max-w-3xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6 order-2 md:order-1 animate-fade-in text-center md:text-left">
              <div className="space-y-1">
                <h2 className="text-xl font-medium text-muted-foreground">
                  {t('home.greeting')}
                </h2>
                <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
                  {t('home.introduction')}
                </h1>
                <div className="text-2xl sm:text-3xl font-medium text-primary h-12 flex justify-center md:justify-start">
                  <TypedText strings={roles} typingSpeed={100} deletingSpeed={50} delayBetween={2000} />
                </div>
              </div>
              
              <p className="text-lg text-muted-foreground">
                {t('home.bio')}
              </p>
              
              <div className="flex flex-wrap gap-4 pt-2 justify-center md:justify-start">
                <Button asChild>
                  <Link to="/projects">
                    {t('projects.title')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">{t('contact.title')}</Link>
                </Button>
              </div>
              
              <div className="flex space-x-4 pt-4 justify-center md:justify-start">
                <a 
                  href="https://github.com/tharlei" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Github size={24} />
                </a>
                <a 
                  href="https://linkedin.com/in/tharlei" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Linkedin size={24} />
                </a>
                <a 
                  href="mailto:contact@tharlei.dev" 
                  className="text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>
            
            <div className="flex justify-center order-1 md:order-2">
              <div className="relative h-64 w-64 md:h-72 md:w-72 rounded-full overflow-hidden border-4 border-primary/20">
                <img
                  src="/selfie.jpg"
                  alt="Tharlei"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
          
          <div className="mt-20">
            <h3 className="text-center text-lg font-medium text-muted-foreground mb-6">
              {t('home.technologies')}
            </h3>
            
            <div className="flex flex-col items-center">
              <TechCarousel technologies={techs} />
              
              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {techs.slice(0, 8).map((tech) => (
                  <div 
                    key={tech} 
                    className="flex items-center p-2 bg-accent/50 rounded-lg text-accent-foreground"
                  >
                    <TechIcon name={tech} size={16} className="mr-2" />
                    <span className="text-sm">{techIconsConfig[tech].name}</span>
                  </div>
                ))}
                <div className="flex items-center p-2 bg-primary/20 rounded-lg text-primary">
                  <span className="text-sm">+{techs.length - 8} {t('home.more')}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;