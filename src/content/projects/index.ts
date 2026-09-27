import type { Project } from "../types";
import { innpilot } from "./innpilot";
import { advanceOntario } from "./advance-ontario";
import { launchpad } from "./launchpad";

/**
 * Display order. The first project is treated as the flagship on the home page.
 * To add a project: create a file next to these, export a Project, and add it here.
 */
export const projects: Project[] = [innpilot, advanceOntario, launchpad];

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

export const statusLabel: Record<Project["status"], string> = {
  "in-development": "In development",
  delivered: "Delivered",
  live: "Live",
};
