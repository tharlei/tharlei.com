import { TECH, resolveTechKey } from '../../data/tech';

export function SkillTag({ name }: { name: string }) {
  const techKey = resolveTechKey(name);
  if (techKey && TECH[techKey]) {
    const tech = TECH[techKey];
    return (
      <div className="tech-tag tech-tag--skill">
        <span className="tech-tag__icon">
          <img
            src={tech.url}
            alt=""
            loading="lazy"
            onError={e => {
              e.currentTarget.style.visibility = 'hidden';
            }}
          />
        </span>
        <span>{name}</span>
      </div>
    );
  }
  // Non-tech skills (soft skills, abstract topics) — same chrome, no icon.
  return <span className="tech-tag tech-tag--skill tech-tag--text">{name}</span>;
}
