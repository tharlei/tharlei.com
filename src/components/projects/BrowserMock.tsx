import type { CSSProperties } from 'react';

interface BrowserMockProps {
  accent: string;
  domain: string;
  title: string;
}

export function BrowserMock({ accent, domain, title }: BrowserMockProps) {
  return (
    <div className="browser-mock" style={{ '--accent': accent } as CSSProperties}>
      <div className="browser-mock__chrome">
        <div className="browser-mock__dots">
          <span />
          <span />
          <span />
        </div>
        <div className="browser-mock__url">
          <svg
            viewBox="0 0 24 24"
            width="11"
            height="11"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            aria-hidden="true"
          >
            <rect x="4" y="11" width="16" height="10" rx="2" />
            <path d="M8 11V7a4 4 0 1 1 8 0v4" />
          </svg>
          <span>{domain}</span>
        </div>
      </div>
      <div className="browser-mock__viewport">
        <div className="bm-nav">
          <div className="bm-logo" />
          <div className="bm-navlinks">
            <span />
            <span />
            <span />
            <span />
          </div>
        </div>
        <div className="bm-hero">
          <div className="bm-hero__title">{title}</div>
          <div className="bm-hero__sub" />
          <div className="bm-hero__cta" />
        </div>
        <div className="bm-grid">
          {[0, 1, 2, 3, 4, 5].map(i => (
            <div key={i} className="bm-card" />
          ))}
        </div>
      </div>
    </div>
  );
}
