import { useEffect } from "react";
import { site } from "../content/site";

/** Sets the browser tab title. Pass nothing for the home page. */
export function useDocumentTitle(title?: string) {
  useEffect(() => {
    document.title = title ? `${title} · ${site.name}` : site.name;
  }, [title]);
}
