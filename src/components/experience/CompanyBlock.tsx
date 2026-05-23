import { useApp } from '../../context/AppContext';
import type { Company } from '../../data/career';
import { CompanyBadge } from '../common/CompanyBadge';
import { RoleCard } from './RoleCard';

export function CompanyBlock({ entry, isLast }: { entry: Company; isLast: boolean }) {
  const { lang } = useApp();
  return (
    <li className="career__item">
      <div className="career__company">
        <CompanyBadge initials={entry.initials} accent={entry.accent} />
        <div className="career__company-meta">
          <h3 className="career__company-name">{entry.company}</h3>
          <span className="career__tenure">{entry.tenure[lang]}</span>
        </div>
      </div>
      <div className={`career__roles ${isLast ? 'career__roles--last' : ''}`}>
        {entry.roles.map((role, i) => (
          <RoleCard
            key={i}
            role={role}
            accent={entry.accent}
            isLast={i === entry.roles.length - 1}
          />
        ))}
      </div>
    </li>
  );
}
