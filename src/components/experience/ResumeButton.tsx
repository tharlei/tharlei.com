import { useCallback, useState } from 'react';
import { useApp } from '../../context/AppContext';
import { generateResume } from '../../lib/resume';
import { Icon } from '../icons';
import { ResumeNoticeModal } from './ResumeNoticeModal';

export function ResumeButton() {
  const { t, lang } = useApp();
  const [showNotice, setShowNotice] = useState(false);

  const onClick = useCallback(() => {
    generateResume({ lang, onNotice: () => setShowNotice(true) });
  }, [lang]);

  return (
    <>
      <button
        className="btn btn--primary btn--accent-red btn--resume"
        onClick={onClick}
        aria-label={t.resume.ariaLabel}
      >
        <Icon.Download />
        <span>{t.resume.cta}</span>
      </button>
      {showNotice && <ResumeNoticeModal onClose={() => setShowNotice(false)} />}
    </>
  );
}
