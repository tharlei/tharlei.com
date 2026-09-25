import { Link } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useTypewriter } from '../../hooks/useTypewriter';
import { Icon } from '../icons';
import { Socials } from '../layout/Socials';
import { Avatar } from './Avatar';

export function Hero() {
  const { t } = useApp();
  const roleText = useTypewriter(t.roles);
  return (
    <section className="hero">
      <div className="hero__grid container">
        <div className="hero__content">
          <p className="hero__hi">{t.hi}</p>
          <h1 className="hero__name">{t.iam}</h1>
          <h2 className="hero__role">
            {roleText}
            <span className="cursor" />
          </h2>
          <p className="hero__desc">{t.description}</p>
          <Link to="/projects" className="btn btn--primary hero__cta">
            <span>{t.heroCta}</span>
            <Icon.ArrowUpRight />
          </Link>
          <Socials />
        </div>
        <Avatar />
      </div>
    </section>
  );
}
