import type { CSSProperties } from 'react';
import { useApp } from '../../context/AppContext';
import { EDUCATION } from '../../data/education';
import type { Education } from '../../data/education';
import { CompanyBadge } from '../common/CompanyBadge';

function EducationItem({ entry, index }: { entry: Education; index: number }) {
  const { lang } = useApp();
  const side = index % 2 === 0 ? 'left' : 'right';
  return (
    <li
      className={`edu-item edu-item--${side}`}
      style={{ '--accent': entry.accent } as CSSProperties}
    >
      <div className="edu-item__year" aria-hidden="true">
        <span>{entry.year}</span>
      </div>
      <div className="edu-item__node" aria-hidden="true">
        <span className="edu-item__node-dot" />
      </div>
      <article className="edu-item__card">
        <header className="edu-item__head">
          <CompanyBadge initials={entry.initials} accent={entry.accent} />
          <div className="edu-item__head-meta">
            <h4 className="edu-item__school">{entry.school}</h4>
            <span className="edu-item__range">{entry.yearRange[lang]}</span>
          </div>
        </header>
        <p className="edu-item__degree">{entry.degree[lang]}</p>
        <p className="edu-item__period">{entry.period[lang]}</p>
        <p className="edu-item__summary">{entry.summary[lang]}</p>
      </article>
    </li>
  );
}

export function EducationSection() {
  const { t } = useApp();
  return (
    <section className="section section--edu">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">{t.experience.educationEyebrow}</p>
          <h2 className="section__title">{t.experience.educationTitle}</h2>
        </header>
        <ol className="edu-timeline">
          {EDUCATION.map((e, i) => (
            <EducationItem key={e.id} entry={e} index={i} />
          ))}
        </ol>
      </div>
    </section>
  );
}
