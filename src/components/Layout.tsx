import { Link, NavLink, Outlet } from "react-router-dom";
import { site } from "../content/site";
import { ScrollToTop } from "./ScrollToTop";

const year = new Date().getFullYear();

export function Layout() {
  const { email, linkedin, github } = site.links;

  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <ScrollToTop />

      <header className="site-header">
        <div className="wrap site-header__inner">
          <Link to="/" className="wordmark">
            {site.name}
          </Link>
          <nav aria-label="Primary">
            <ul className="site-nav">
              <li>
                <NavLink to="/#work">Work</NavLink>
              </li>
              <li>
                <NavLink to="/#experience">Experience</NavLink>
              </li>
              <li>
                <NavLink to="/#contact">Contact</NavLink>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      <main id="main" tabIndex={-1}>
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="wrap site-footer__inner">
          <span>
            © {year} {site.name}
          </span>
          <ul className="site-footer__links">
            {email && (
              <li>
                <a href={`mailto:${email}`}>Email</a>
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
          </ul>
        </div>
      </footer>
    </>
  );
}
