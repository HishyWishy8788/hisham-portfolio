/**
 * Site-wide facts. Edit this file to change your name, headline, links, and bio.
 * Any link left as an empty string is simply not rendered.
 */
export const site = {
  name: "Hisham Ahmad",
  shortName: "Hisham",
  eyebrow: "Computer Science · Sheridan College · Third year",
  headline: {
    lead: "I build software for problems I've",
    emphasis: "actually worked inside.",
  },
  intro:
    "Third-year Computer Science student at Sheridan College, specializing in Data Analytics. I write practical software, treat security as part of the build rather than a checkbox, and can explain why a piece of code is good or not.",
  lookingFor:
    "Open to software engineering, full-stack, and application security internships.",
  location: "Mississauga, Ontario",

  /** What you are doing right now. Shown as a short ledger in the hero. */
  now: [
    { label: "Building", value: "InnPilot, a motel operations app" },
    { label: "Evaluating", value: "AI-generated code as an AI Trainer at Outlier" },
    { label: "Running", value: "the front desk at Clarkson Village Motel" },
  ],

  education: {
    school: "Sheridan College",
    program: "Computer Science, Data Analytics specialization",
    detail: "Third year",
  },

  /** Fill these in. Empty strings are hidden. */
  links: {
    email: "",
    linkedin: "",
    github: "",
  },
};

export type Site = typeof site;
