import { useApp } from '../../context/AppContext';
import { Socials } from './Socials';

export function Footer() {
  const { t } = useApp();
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer__inner container">
        <p className="footer__copy">
          © {year} Tharlei — {t.rights}.
        </p>
        <Socials size="sm" />
      </div>
    </footer>
  );
}
