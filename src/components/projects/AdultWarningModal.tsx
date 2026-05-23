import { useEffect } from 'react';
import type { CSSProperties } from 'react';
import { useApp } from '../../context/AppContext';
import { useBodyScrollLock } from '../../hooks/useBodyScrollLock';

interface AdultWarningModalProps {
  accent: string;
  onConfirm: () => void;
  onCancel: () => void;
}

export function AdultWarningModal({ accent, onConfirm, onCancel }: AdultWarningModalProps) {
  const { t } = useApp();
  useBodyScrollLock(true);
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onCancel();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [onCancel]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-labelledby="adult-modal-title">
      <div className="modal__backdrop" onClick={onCancel} />
      <div className="modal__panel" style={{ '--accent': accent } as CSSProperties}>
        <div className="modal__icon" aria-hidden="true">
          18+
        </div>
        <h3 id="adult-modal-title" className="modal__title">
          {t.projects.adult.title}
        </h3>
        <p className="modal__body">{t.projects.adult.body}</p>
        <div className="modal__actions">
          <button className="btn btn--ghost" onClick={onCancel}>
            {t.projects.adult.cancel}
          </button>
          <button
            className="btn btn--primary"
            onClick={onConfirm}
            style={{ '--accent': accent } as CSSProperties}
          >
            {t.projects.adult.confirm}
          </button>
        </div>
      </div>
    </div>
  );
}
