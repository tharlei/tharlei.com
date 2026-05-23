export function Avatar() {
  return (
    <div className="avatar" aria-hidden="true">
      <div className="avatar__glow" />
      <div className="avatar__ring" />
      <div className="avatar__inner">
        <div className="avatar__placeholder">
          <span className="initials">T</span>
          <span className="label">Tharlei Aleixo</span>
        </div>
      </div>
    </div>
  );
}
