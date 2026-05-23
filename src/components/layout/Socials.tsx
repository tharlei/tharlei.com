import { Icon } from '../icons';
import { profile } from '../../data/profile';

export function Socials({ size = 'md' }: { size?: 'sm' | 'md' }) {
  return (
    <div className={size === 'sm' ? 'footer__socials' : 'hero__socials'}>
      <a
        href={profile.github}
        target="_blank"
        rel="noreferrer"
        className="icon-btn"
        aria-label="GitHub"
      >
        <Icon.GitHub />
      </a>
      <a
        href={profile.linkedin}
        target="_blank"
        rel="noreferrer"
        className="icon-btn"
        aria-label="LinkedIn"
      >
        <Icon.LinkedIn />
      </a>
      <a href={`mailto:${profile.email}`} className="icon-btn" aria-label="Email">
        <Icon.Mail />
      </a>
    </div>
  );
}
