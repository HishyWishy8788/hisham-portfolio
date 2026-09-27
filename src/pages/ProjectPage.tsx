import { Link, useParams } from "react-router-dom";
import { findProject, projects } from "../content/projects";
import type { Block, Project } from "../content/types";
import { StatusChip } from "../components/StatusChip";
import { useDocumentTitle } from "../components/useDocumentTitle";
import { NotFound } from "./NotFound";

/** Section order and headings, shared by every case study. */
const sectionOrder: { key: keyof Project["sections"]; heading: string }[] = [
  { key: "problem", heading: "The problem" },
  { key: "role", heading: "My role" },
  { key: "approach", heading: "Technical approach" },
  { key: "decisions", heading: "Decisions" },
  { key: "challenges", heading: "Challenges" },
  { key: "evidence", heading: "Evidence" },
  { key: "currentStatus", heading: "Current status" },
];

function BlockBody({ block }: { block: Block }) {
  return (
    <>
      {block.paragraphs.map((text, i) => (
        <p key={i}>{text}</p>
      ))}
      {block.bullets && (
        <ul className="bullets">
          {block.bullets.map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>
      )}
    </>
  );
}

export function ProjectPage() {
  const { slug } = useParams();
  const project = findProject(slug);
  useDocumentTitle(project?.name);

  if (!project) return <NotFound />;

  const index = projects.indexOf(project);
  const prev = projects[index - 1];
  const next = projects[index + 1];

  return (
    <article className="case wrap">
      <header className="case__header">
        <Link to="/#work" className="back-link mono">
          ← All work
        </Link>
        <p className="eyebrow mono">Case study {String(index + 1).padStart(2, "0")}</p>
        <h1 className="case__title">{project.name}</h1>
        <p className="case__tagline">{project.tagline}</p>

        <dl className="facts">
          <div>
            <dt className="mono">Timeframe</dt>
            <dd>{project.timeframe}</dd>
          </div>
          <div>
            <dt className="mono">Role</dt>
            <dd>{project.role}</dd>
          </div>
          <div>
            <dt className="mono">Status</dt>
            <dd>
              <StatusChip status={project.status} />
              <span className="facts__note">{project.statusNote}</span>
            </dd>
          </div>
          <div>
            <dt className="mono">Stack</dt>
            <dd>{project.stack.join(", ")}</dd>
          </div>
          {project.links && project.links.length > 0 && (
            <div>
              <dt className="mono">Links</dt>
              <dd>
                {project.links.map((link) => (
                  <a key={link.href} href={link.href} rel="noopener" className="inline-link">
                    {link.label}
                  </a>
                ))}
              </dd>
            </div>
          )}
        </dl>
      </header>

      {sectionOrder.map(({ key, heading }, i) => (
        <section className="case__section" key={key} aria-labelledby={`sec-${key}`}>
          <h2 className="case__heading" id={`sec-${key}`}>
            <span className="mono">{String(i + 1).padStart(2, "0")}</span>
            {heading}
          </h2>
          <div className="prose">
            <BlockBody block={project.sections[key]} />
          </div>
        </section>
      ))}

      <nav className="case__nav" aria-label="Other case studies">
        {prev ? (
          <Link to={`/projects/${prev.slug}`}>
            <span className="mono">← Previous</span>
            {prev.name}
          </Link>
        ) : (
          <span />
        )}
        {next && (
          <Link to={`/projects/${next.slug}`} className="case__nav-next">
            <span className="mono">Next →</span>
            {next.name}
          </Link>
        )}
      </nav>
    </article>
  );
}
