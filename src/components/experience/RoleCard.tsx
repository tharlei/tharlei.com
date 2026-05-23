import type { CSSProperties } from 'react';
import { useApp } from '../../context/AppContext';
import type { Role } from '../../data/career';
import { TechTag } from '../common/TechTag';

interface RoleCardProps {
  role: Role;
  accent: string;
  isLast: boolean;
}

export function RoleCard({ role, accent, isLast }: RoleCardProps) {
  const { t, lang } = useApp();
  const typeLabel = role.type === 'internship' ? t.experience.internship : t.experience.fulltime;
  const remoteLabel = role.remote
    ? t.experience.remote
    : role.location
      ? role.location[lang]
      : null;

  return (
    <article
      className={`role ${role.current ? 'role--current' : ''} ${isLast ? 'role--last' : ''}`}
      style={{ '--accent': accent } as CSSProperties}
    >
      <span className="role__dot" aria-hidden="true" />
      <div className="role__content">
        <div className="role__head">
          <h4 className="role__title">{role.title[lang]}</h4>
          {role.current && (
            <span className="role__badge">
              <span className="role__badge-dot" />
              {t.experience.current}
            </span>
          )}
        </div>
        <p className="role__meta">
          <span>{role.period[lang]}</span>
          <span className="dot-sep" aria-hidden="true">
            ·
          </span>
          <span>{role.duration[lang]}</span>
        </p>
        <p className="role__meta role__meta--muted">
          <span>{typeLabel}</span>
          {remoteLabel && (
            <>
              <span className="dot-sep" aria-hidden="true">
                ·
              </span>
              <span>{remoteLabel}</span>
            </>
          )}
        </p>
        <p className="role__summary">{role.summary[lang]}</p>
        <div className="role__tags">
          {role.techs.map(k => (
            <TechTag key={k} techKey={k} />
          ))}
        </div>
      </div>
    </article>
  );
}
