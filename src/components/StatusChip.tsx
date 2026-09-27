import type { ProjectStatus } from "../content/types";
import { statusLabel } from "../content/projects";

export function StatusChip({ status }: { status: ProjectStatus }) {
  return (
    <span className={`chip chip--${status}`}>
      <span className="chip__dot" aria-hidden="true" />
      {statusLabel[status]}
    </span>
  );
}
