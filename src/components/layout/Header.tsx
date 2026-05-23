import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useApp } from '../../context/AppContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';
import { Icon, FlagBR, FlagUS } from '../icons';

const LINKS = [
  { to: '/', key: 'home', end: true },
  { to: '/projects', key: 'projects', end: false },
  { to: '/experience', key: 'experience', end: false },
] as const;

function NavLinks({ onNavigate }: { onNavigate?: () => void }) {
  const { t } = useApp();
  return (
    <>
      {LINKS.map(l => (
        <NavLink
          key={l.key}
          to={l.to}
          end={l.end}
          className={({ isActive }) => `nav__link ${isActive ? 'is-active' : ''}`}
          onClick={onNavigate}
        >
          <span>{t.nav[l.key]}</span>
        </NavLink>
      ))}
    </>
  );
}

function LangButton() {
  const { lang, setLang, t } = useApp();
  return (
    <button
      className="icon-btn flag-btn"
      onClick={() => setLang(lang === 'pt' ? 'en' : 'pt')}
      aria-label={t.switchLang}
      title={t.switchLang}
    >
      {lang === 'pt' ? <FlagBR /> : <FlagUS />}
    </button>
  );
}

function ThemeButton() {
  const { theme, setTheme, t } = useApp();
  return (
    <button
      className="icon-btn"
      onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
      aria-label={t.toggleTheme}
      title={t.toggleTheme}
    >
      {theme === 'dark' ? <Icon.Sun /> : <Icon.Moon />}
    </button>
  );
}

export function Header() {
  const { t } = useApp();
  const [open, setOpen] = useState(false);
  useBodyScrollLock(open);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  return (
    <>
      <header className="header">
        <div className="header__inner container">
          <Link to="/" className="brand" aria-label="Tharlei">
            <span className="brand__dot" />
            <span>Tharlei</span>
          </Link>

          <nav className="header__nav" aria-label="Primary">
            <NavLinks />
          </nav>

          <div className="header__controls">
            <LangButton />
            <ThemeButton />
          </div>

          <button
            className="icon-btn header__burger"
            onClick={() => setOpen(true)}
            aria-label={t.nav.menu}
            aria-expanded={open}
          >
            <Icon.Menu />
          </button>
        </div>
      </header>

      <div className={`drawer ${open ? 'is-open' : ''}`} aria-hidden={!open}>
        <div className="drawer__backdrop" onClick={() => setOpen(false)} />
        <aside className="drawer__panel" role="dialog" aria-modal="true">
          <div className="drawer__head">
            <span className="brand">
              <span className="brand__dot" />
              <span>Tharlei</span>
            </span>
            <button className="icon-btn" onClick={() => setOpen(false)} aria-label={t.nav.close}>
              <Icon.Close />
            </button>
          </div>
          <nav className="drawer__nav" aria-label="Mobile">
            <NavLinks onNavigate={() => setOpen(false)} />
          </nav>
          <div className="drawer__controls">
            <LangButton />
            <ThemeButton />
          </div>
        </aside>
      </div>
    </>
  );
}
