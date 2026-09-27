import { Link } from "react-router-dom";
import { site } from "../content/site";
import { projects } from "../content/projects";
import { experience } from "../content/experience";
import { ProjectCard } from "../components/ProjectCard";
import { Hero } from "../components/Hero";
import { useDocumentTitle } from "../components/useDocumentTitle";

const principles = [
  {
    title: "Built from real constraints",
    body: "My projects start with a problem I have stood inside: a motel front desk, a creator's five-dollar hosting plan, a club that needed to be found. The constraints are the brief.",
  },
  {
    title: "Security is part of the build",
    body: "Server-side authorization, tenant isolation, CSRF scoped to where it matters, and the discipline to review my own auth flows before anyone else has to.",
  },
  {
    title: "Code quality I can explain",
    body: "I evaluate AI-generated code for a living and write the tests that catch it out. I can tell you why a piece of code is good, not just that it runs.",
  },
];

export function Home() {
  useDocumentTitle();
  const [flagship, ...rest] = projects;
  const { email, linkedin, github } = site.links;

  return (
    <>
      <Hero />

      <section className="now wrap" aria-label="Currently">
        <dl className="ledger">
          {site.now.map((row, i) => (
            <div className="ledger__row" key={row.label}>
              <dt className="mono">
                {i === 0 && <span className="pulse" aria-hidden="true" />}
                {row.label}
              </dt>
              <dd>{row.value}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="section wrap" id="work" aria-labelledby="work-title">
        <h2 className="section__label mono" id="work-title">
          <span>01</span> Selected work
        </h2>
        <div className="cards">
          <ProjectCard project={flagship} index={0} flagship />
          {rest.map((p, i) => (
            <ProjectCard project={p} index={i + 1} key={p.slug} />
          ))}
        </div>
      </section>

      <section className="section wrap" aria-labelledby="how-title">
        <h2 className="section__label mono" id="how-title">
          <span>02</span> How I work
        </h2>
        <div className="principles">
          {principles.map((p) => (
            <div className="principle" key={p.title}>
              <h3>{p.title}</h3>
              <p>{p.body}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section wrap" id="experience" aria-labelledby="exp-title">
        <h2 className="section__label mono" id="exp-title">
          <span>03</span> Experience
        </h2>
        <ol className="experience">
          {experience.map((job) => (
            <li className="experience__row" key={`${job.organization}-${job.title}`}>
              <span className="experience__period mono">{job.period}</span>
              <div>
                <h3 className="experience__title">
                  {job.title}
                  <span className="experience__org"> · {job.organization}</span>
                </h3>
                <p>
                  {job.summary}
                  {job.projectSlug && (
                    <>
                      {" "}
                      <Link to={`/projects/${job.projectSlug}`} className="inline-link">
                        Case study
                      </Link>
                    </>
                  )}
                </p>
              </div>
            </li>
          ))}
        </ol>
        <p className="education">
          <span className="mono">Education</span>
          <span>
            {site.education.school}, {site.education.program}. {site.education.detail}.
          </span>
        </p>
      </section>

      <section className="section wrap contact" id="contact" aria-labelledby="contact-title">
        <h2 className="section__label mono" id="contact-title">
          <span>04</span> Contact
        </h2>
        <p className="contact__title">
          Let's <em>talk.</em>
        </p>
        <p className="lead">
          {site.lookingFor} Based in {site.location}.
        </p>
        <ul className="contact__links">
          {email && (
            <li>
              <a href={`mailto:${email}`}>{email}</a>
            </li>
          )}
          {linkedin && (
            <li>
              <a href={linkedin} rel="me noopener">
                LinkedIn
              </a>
            </li>
          )}
          {github && (
            <li>
              <a href={github} rel="me noopener">
                GitHub
              </a>
            </li>
          )}
          {!email && !linkedin && !github && (
            <li className="muted">Contact links go in src/content/site.ts</li>
          )}
        </ul>
      </section>
    </>
  );
}
