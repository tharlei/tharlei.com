import { TECH } from '../../data/tech';

export function TechTag({ techKey }: { techKey: string }) {
  const tech = TECH[techKey];
  if (!tech) return null;
  return (
    <div className="tech-tag">
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
      <span>{tech.name}</span>
    </div>
  );
}
