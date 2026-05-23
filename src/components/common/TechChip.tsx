import { TECH } from '../../data/tech';

export function TechChip({ techKey }: { techKey: string }) {
  const tech = TECH[techKey];
  if (!tech) return null;
  return (
    <div className="tech-chip">
      <span className="tech-chip__icon">
        <img
          src={tech.url}
          alt=""
          loading="lazy"
          onError={e => {
            e.currentTarget.style.visibility = 'hidden';
          }}
        />
      </span>
      <span>{tech.name}</span>
    </div>
  );
}
