import { Link } from "react-router-dom";
import { useDocumentTitle } from "../components/useDocumentTitle";

export function NotFound() {
  useDocumentTitle("Not found");
  return (
    <section className="wrap section">
      <p className="eyebrow mono">404</p>
      <h1 className="case__title">Nothing here.</h1>
      <p className="lead">
        <Link to="/" className="inline-link">
          Back to the front page
        </Link>
      </p>
    </section>
  );
}
