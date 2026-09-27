import { Link } from "react-router-dom";
import type { Project } from "../content/types";
import { StatusChip } from "./StatusChip";

interface Props {
  project: Project;
  index: number;
  flagship?: boolean;
}

export function ProjectCard({ project, index, flagship = false }: Props) {
  const number = String(index + 1).padStart(2, "0");
  const titleId = `project-${project.slug}-title`;

  return (
    <article className={`card${flagship ? " card--flagship" : ""}`} aria-labelledby={titleId}>
      <div className="card__meta">
        <span className="mono">{number}</span>
        <StatusChip status={project.status} />
      </div>
      <h3 className="card__title" id={titleId}>
        <Link to={`/projects/${project.slug}`} className="card__link">
          {project.name}
          <span className="card__arrow" aria-hidden="true">
            →
          </span>
        </Link>
      </h3>
      <p className="card__tagline">{project.tagline}</p>
      <p className="card__summary">{project.summary}</p>
      <ul className="card__stack mono" aria-label="Technologies">
        {project.stack.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </article>
  );
}
