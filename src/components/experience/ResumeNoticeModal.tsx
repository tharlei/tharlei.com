import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { useApp } from '../../context/AppContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

export function ResumeNoticeModal({ onClose }: { onClose: () => void }) {
  const { t } = useApp();
  useBodyScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true">
      <div className="modal__backdrop" onClick={onClose} />
      <div className="modal__panel" style={{ '--accent': 'var(--red)' } as CSSProperties}>
        <div className="modal__icon" aria-hidden="true">
          <svg
            viewBox="0 0 24 24"
            width="28"
            height="28"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M12 3v13M7 12l5 5 5-5M5 21h14" />
          </svg>
        </div>
        <h3 className="modal__title">{t.resume.cta}</h3>
        <p className="modal__body">{t.resume.comingSoon}</p>
        <div className="modal__actions">
          <button className="btn btn--primary btn--accent-red" onClick={onClose}>
            {t.resume.ok}
          </button>
        </div>
      </div>
    </div>
  );
}
