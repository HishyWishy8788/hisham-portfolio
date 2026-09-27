/**
 * Shared content types. Every project and experience entry must match these
 * shapes, so TypeScript catches a missing section before it reaches the page.
 */

export type ProjectStatus = "in-development" | "delivered" | "live";

export interface Link {
  label: string;
  href: string;
}

/** One case-study section: a few paragraphs, optionally followed by bullets. */
export interface Block {
  paragraphs: string[];
  bullets?: string[];
}

export interface Project {
  /** URL segment, e.g. "innpilot" -> /projects/innpilot */
  slug: string;
  name: string;
  /** One line under the name. Keep it under ~70 characters. */
  tagline: string;
  /** Two or three sentences for the card on the home page. */
  summary: string;
  timeframe: string;
  role: string;
  status: ProjectStatus;
  /** Honest one-liner shown next to the status, e.g. "Local prototype, not deployed." */
  statusNote: string;
  stack: string[];
  /** Optional public links. Never add private repositories here. */
  links?: Link[];
  sections: {
    problem: Block;
    role: Block;
    approach: Block;
    decisions: Block;
    challenges: Block;
    evidence: Block;
    currentStatus: Block;
  };
}

export interface Experience {
  organization: string;
  title: string;
  /** Free text, e.g. "Mar 2026 – present" */
  period: string;
  summary: string;
  /** Slug of a related case study, if one exists. */
  projectSlug?: string;
}
