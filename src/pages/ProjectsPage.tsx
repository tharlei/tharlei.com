import { useApp } from '../context/AppContext';
import { PROJECTS } from '../data/projects';
import { ProjectCard } from '../components/projects/ProjectCard';

export function ProjectsPage() {
  const { t } = useApp();
  return (
    <main>
      <section className="page-hero">
        <div className="container">
          <p className="page-hero__eyebrow">{t.projects.eyebrow}</p>
          <h1 className="page-hero__title">{t.projects.title}</h1>
          <p className="page-hero__subtitle">{t.projects.subtitle}</p>
        </div>
      </section>

      <section className="projects">
        <div className="container">
          <div className="projects__list">
            {PROJECTS.map((p, i) => (
              <ProjectCard key={p.id} project={p} index={i} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
