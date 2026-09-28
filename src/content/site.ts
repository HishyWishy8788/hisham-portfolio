/**
 * Site-wide facts. Edit this file to change your name, headline, links, and bio.
 * Any link left as an empty string is simply not rendered.
 */
export const site = {
  name: "Hisham Ahmad",
  shortName: "Hisham",
  eyebrow: "Computer Science · Sheridan College · Third year",
  /** Two lines of the hero name. The second line is set in italic accent. */
  nameLines: ["Hisham", "Ahmad"],

  /** Short, true lines that rotate under the name. Keep each under ~45 characters. */
  roles: [
    "Computer Science student at Sheridan College",
    "Building InnPilot, a motel operations app",
    "AI code evaluator at Outlier",
    "Cybersecurity consulting intern, 2026",
  ],

  /**
   * Your photo. Drop a file into /public (e.g. public/portrait.jpg) and set src to "/portrait.jpg".
   * While src is empty, a labelled placeholder frame is shown instead.
   */
  portrait: {
    src: "/portrait.jpg",
    alt: "Hisham Ahmad",
  },

  /** Small labels that float around the portrait. Keep them true and short. */
  orbitTags: ["InnPilot", "AppSec", "Data Analytics"],

  /** One sentence beside the name. The longer intro lives below. */
  tagline:
    "I build practical software for problems I've worked inside, with security and code quality as part of the build.",
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
    email: "hishamahmadxx87@gmail.com",
    linkedin: "https://www.linkedin.com/in/hisham-ahmad-147695244/",
    github: "https://github.com/HishyWishy8788",
  },
};

export type Site = typeof site;
