export function Avatar() {
  return (
    <div className="avatar">
      <div className="avatar__glow" />
      <div className="avatar__ring" />
      <div className="avatar__inner">
        <img className="avatar__img" src="/selfie.jpg" alt="Tharlei Aleixo" />
      </div>
    </div>
  );
}
