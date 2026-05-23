import { useApp } from '../context/AppContext';
import { CAREER } from '../data/career';
import { CompanyBlock } from '../components/experience/CompanyBlock';
import { EducationSection } from '../components/experience/EducationSection';
import { CertsSection } from '../components/experience/CertsSection';
import { ResumeButton } from '../components/experience/ResumeButton';

export function ExperiencePage() {
  const { t } = useApp();
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">{t.experience.eyebrow}</p>
          <h1 className="page-hero__title">{t.experience.title}</h1>
          <p className="page-hero__subtitle">{t.experience.subtitle}</p>
          <div className="page-hero__cta">
            <ResumeButton />
          </div>
        </div>
      </section>

      <section className="career">
        <div className="container">
          <ol className="career__list">
            {CAREER.map((entry, i) => (
              <CompanyBlock key={entry.id} entry={entry} isLast={i === CAREER.length - 1} />
            ))}
          </ol>
        </div>
      </section>

      <EducationSection />
      <CertsSection />
    </main>
  );
}
