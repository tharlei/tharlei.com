import { ArrowRight, Github, Linkedin, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

import { useState } from 'react';

import { Button } from '@/components/ui/button';

import { techIconsConfig } from '@/lib/tech-icons';

import TechCarousel from '../components/TechCarousel';
import TechIcon from '../components/TechIcon';
import TypedText from '../components/TypedText';
import Layout from '../components/layout/Layout';
import { useLocale } from '../contexts/LocaleContext';
import { useIsMobile } from '../hooks/use-mobile';

const Home = () => {
  const { t } = useLocale();
  const isMobile = useIsMobile();
  const [techs] = useState(Object.keys(techIconsConfig).sort(() => Math.random() - 0.5));

  const roles = [t('home.role.web'), t('home.role.back'), t('home.role.front')];

  return (
    <Layout>
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-3xl">
          <div className="grid grid-cols-1 items-center gap-8 md:grid-cols-2">
            <div className="order-2 animate-fade-in space-y-6 text-center md:order-1 md:text-left">
              <div className="space-y-1">
                <h2 className="text-xl font-medium text-muted-foreground">{t('home.greeting')}</h2>
                <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
                  {t('home.introduction')}
                </h1>
                <div className="flex h-12 justify-center text-2xl font-medium text-primary sm:text-3xl md:justify-start">
                  <TypedText
                    strings={roles}
                    typingSpeed={100}
                    deletingSpeed={50}
                    delayBetween={2000}
                  />
                </div>
              </div>

              <p className="text-lg text-muted-foreground">{t('home.bio')}</p>

              <div className="flex flex-wrap justify-center gap-4 pt-2 md:justify-start">
                <Button asChild>
                  <Link to="/projects">
                    {t('projects.title')} <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
                <Button variant="outline" asChild>
                  <Link to="/contact">{t('contact.title')}</Link>
                </Button>
              </div>

              <div className="flex justify-center space-x-4 pt-4 md:justify-start">
                <a
                  href="https://github.com/tharlei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Github size={24} />
                </a>
                <a
                  href="https://linkedin.com/in/tharlei"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Linkedin size={24} />
                </a>
                <a
                  href="mailto:contact@tharlei.dev"
                  className="text-muted-foreground transition-colors hover:text-foreground"
                >
                  <Mail size={24} />
                </a>
              </div>
            </div>

            <div className="order-1 flex justify-center md:order-2">
              <div className="relative h-64 w-64 overflow-hidden rounded-full border-4 border-primary/20 md:h-72 md:w-72">
                <img src="/selfie.jpg" alt="Tharlei" className="h-full w-full object-cover" />
              </div>
            </div>
          </div>

          <div className="mt-20">
            <h3 className="mb-6 text-center text-lg font-medium text-muted-foreground">
              {t('home.technologies')}
            </h3>

            <div className="flex flex-col items-center">
              <TechCarousel technologies={techs} />

              <div className="mt-8 flex flex-wrap justify-center gap-3">
                {techs.slice(0, 8).map(tech => (
                  <div
                    key={tech}
                    className="flex items-center rounded-lg bg-accent/50 p-2 text-accent-foreground"
                  >
                    <TechIcon name={tech} size={16} className="mr-2" />
                    <span className="text-sm">{techIconsConfig[tech].name}</span>
                  </div>
                ))}
                <div className="flex items-center rounded-lg bg-primary/20 p-2 text-primary">
                  <span className="text-sm">
                    +{techs.length - 8} {t('home.more')}
                  </span>
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
