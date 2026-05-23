import { useApp } from '../context/AppContext';
import { usePageMeta } from '../hooks/usePageMeta';
import { Hero } from '../components/home/Hero';
import { TechSection } from '../components/home/TechSection';

export function HomePage() {
  const { t } = useApp();
  usePageMeta(t.seo.home);
  return (
    <main>
      <Hero />
      <TechSection />
    </main>
  );
}
