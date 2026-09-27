import type { Project } from "../types";

export const launchpad: Project = {
  slug: "launchpad",
  name: "Sheridan Launchpad",
  tagline: "The public face of a student entrepreneurship club.",
  summary:
    "I built and maintain the website for Launchpad, Sheridan College's entrepreneurship club, and serve on its executive team. Events, team, FAQ, and a clear path to join, on a site the club can keep updating without me.",
  timeframe: "Ongoing",
  role: "Website developer, club executive",
  status: "live",
  statusNote: "Live and in use by the club.",
  stack: ["Next.js", "React", "Vercel"],
  links: [{ label: "Visit the site", href: "https://launchpad-iota-three.vercel.app/" }],
  sections: {
    problem: {
      paragraphs: [
        "Launchpad exists to make business feel less intimidating for students who have never pitched anything. A club like that lives or dies on whether a first-year can find it, understand it in thirty seconds, and show up. It needed a home that was credible to partner clubs and sponsors, easy for a mixed team to keep current, and honest about what it is: a low-pressure room, not a startup incubator.",
      ],
    },
    role: {
      paragraphs: [
        "I built the site and I am on the executive team, so I see both sides: what the club needs to say and what it costs to keep saying it.",
      ],
      bullets: [
        "Built the site from scratch with Next.js and deployed it on Vercel.",
        "Structured it around the questions students actually ask: what is this, what happens at events, who runs it, and do I need an idea to join.",
        "Kept the content model simple enough that other executives can update events and team members.",
      ],
    },
    approach: {
      paragraphs: [
        "The site is a small Next.js application deployed on Vercel. It is organized into four sections: About, Events, Team, and FAQ, with the club's Instagram, LinkedIn, and Discord linked throughout and membership handled through the college's Campus Labs registration rather than a home-grown form. That choice removed an entire category of work and risk: no accounts, no personal data stored by the club, nothing to secure beyond a static site.",
      ],
    },
    decisions: {
      paragraphs: [],
      bullets: [
        "No custom membership system. Registration goes through the college's platform, so the site never holds student data.",
        "Events are presented as recaps with real attendance, not as a generic calendar, so a visitor can tell what the club actually does.",
        "Every executive has a name, role, and LinkedIn link. People join people, not logos.",
      ],
    },
    challenges: {
      paragraphs: [
        "The design challenge was tone. The club's whole pitch is that business does not have to feel serious, so the site could not look like a corporate landing page. It also had to be maintainable by a team of ten students with different skills, which meant resisting anything clever that only I would understand.",
      ],
    },
    evidence: {
      paragraphs: [
        "The site is live and linked above. For context on the club it serves, the site reports 170+ students at events, eight partner clubs, and a Sip & Study session that drew more than a hundred people. Those are the club's numbers, not the website's, and the website is how people found out.",
      ],
    },
    currentStatus: {
      paragraphs: [
        "Live and maintained. Updates follow the club's event calendar.",
      ],
    },
  },
};
