import type { CSSProperties } from 'react';

export function CompanyBadge({ initials, accent }: { initials: string; accent: string }) {
  return (
    <div className="company-badge" style={{ '--accent': accent } as CSSProperties}>
      <span>{initials}</span>
    </div>
  );
}
