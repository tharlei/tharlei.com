import { useCallback, useState } from 'react';
import type { CSSProperties, MouseEvent } from 'react';
import { useApp } from '../../context/AppContext';
import type { Project } from '../../data/projects';
import { CompanyBadge } from '../common/CompanyBadge';
import { TechTag } from '../common/TechTag';
import { Icon } from '../icons';
import { BrowserMock } from './BrowserMock';
import { AdultWarningModal } from './AdultWarningModal';

export function ProjectCard({ project: p, index }: { project: Project; index: number }) {
  const { t, lang } = useApp();
  const employmentLabel = p.employment === 'freelance' ? t.projects.freelance : t.projects.employed;
  const [showWarning, setShowWarning] = useState(false);

  const handleVisit = useCallback(
    (e: MouseEvent) => {
      if (!p.adultWarning) return;
      e.preventDefault();
      setShowWarning(true);
    },
    [p.adultWarning]
  );

  const confirmVisit = useCallback(() => {
    setShowWarning(false);
    window.open(p.siteUrl, '_blank', 'noopener,noreferrer');
  }, [p.siteUrl]);

  return (
    <article className={`project ${index % 2 ? 'project--right' : ''}`}>
      <div className="project__preview">
        <a
          href={p.siteUrl}
          target="_blank"
          rel="noreferrer"
          aria-label={`${p.title} — ${t.projects.visit}`}
          onClick={handleVisit}
        >
          <BrowserMock accent={p.accent} domain={p.domain} title={p.title} />
        </a>
      </div>
      <div className="project__body">
        <div className="project__company">
          <CompanyBadge initials={p.companyInitials} accent={p.accent} />
          <div className="project__company-meta">
            <span className="project__company-name">{p.company}</span>
            <span
              className="project__company-role"
              style={{ '--accent': p.accent } as CSSProperties}
            >
              {employmentLabel}
            </span>
          </div>
        </div>

        <h2 className="project__title">{p.title}</h2>
        <p className="project__subtitle" style={{ '--accent': p.accent } as CSSProperties}>
          {p.subtitle[lang]}
        </p>
        <p className="project__desc">{p.summary[lang]}</p>

        <div className="project__stack">
          <span className="project__stack-label">{t.projects.stackLabel}</span>
          <div className="project__tags">
            {p.techs.map(k => (
              <TechTag key={k} techKey={k} />
            ))}
          </div>
        </div>

        <a
          href={p.siteUrl}
          target="_blank"
          rel="noreferrer"
          className="btn btn--primary"
          style={{ '--accent': p.accent } as CSSProperties}
          onClick={handleVisit}
        >
          <span>{t.projects.visit}</span>
          <Icon.ArrowUpRight />
        </a>
      </div>

      {showWarning && (
        <AdultWarningModal
          accent={p.accent}
          onConfirm={confirmVisit}
          onCancel={() => setShowWarning(false)}
        />
      )}
    </article>
  );
}
