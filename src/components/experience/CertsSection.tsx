import { useApp } from '../../context/AppContext';
import { CERTS, ISSUER_STYLE } from '../../data/certs';
import type { Cert } from '../../data/certs';
import { SkillTag } from '../common/SkillTag';

function CertBadge({ issuer }: { issuer: string }) {
  const style = ISSUER_STYLE[issuer] || {
    bg: '#27272a',
    fg: '#fff',
    label: issuer.slice(0, 2).toUpperCase(),
  };
  return (
    <div className="cert-card__badge" style={{ background: style.bg, color: style.fg }}>
      <span>{style.label}</span>
    </div>
  );
}

function CertCard({ cert }: { cert: Cert }) {
  const { t, lang } = useApp();
  return (
    <article className="cert-card">
      <CertBadge issuer={cert.issuer} />
      <div className="cert-card__body">
        <h4 className="cert-card__title">{cert.title[lang]}</h4>
        <p className="cert-card__issuer">{cert.issuer}</p>
        <p className="cert-card__meta">
          <span>
            {t.experience.issuedAt} {cert.date[lang]}
          </span>
          {cert.code && (
            <>
              <span className="dot-sep" aria-hidden="true">
                ·
              </span>
              <span className="cert-card__code">{cert.code}</span>
            </>
          )}
        </p>
        {cert.skills && cert.skills.length > 0 && (
          <div className="cert-card__skills">
            {cert.skills.map(s => (
              <SkillTag key={s} name={s} />
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export function CertsSection() {
  const { t } = useApp();
  return (
    <section className="section section--certs">
      <div className="container">
        <header className="section__head">
          <p className="section__eyebrow">{t.experience.certsEyebrow}</p>
          <h2 className="section__title">{t.experience.certsTitle}</h2>
          <p className="section__count">{t.experience.certsCount(CERTS.length)}</p>
        </header>
        <div className="cert-grid">
          {CERTS.map(c => (
            <CertCard key={c.id} cert={c} />
          ))}
        </div>
      </div>
    </section>
  );
}
