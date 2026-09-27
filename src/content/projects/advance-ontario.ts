import type { Project } from "../types";

export const advanceOntario: Project = {
  slug: "advance-ontario",
  name: "Advance Ontario",
  tagline: "Securing a creator's digital delivery on a five-dollar-a-month budget.",
  summary:
    "Cybersecurity consulting internship. I assessed a creator's website, built a token-based download flow so paid files were no longer sitting at guessable URLs, and delivered a 25-page technical roadmap the client could act on.",
  timeframe: "Apr – Jun 2026",
  role: "Cybersecurity Consulting Intern",
  status: "delivered",
  statusNote: "Engagement complete. Roadmap delivered to the client.",
  stack: ["Web security assessment", "Token-based file delivery", "Technical writing"],
  sections: {
    problem: {
      paragraphs: [
        "A creator was selling and distributing digital files through a small website with two hard constraints: about one gigabyte of storage and a hosting budget of roughly five dollars a month. There was no room for a CDN subscription, a managed storage tier, or an enterprise access-control product. The question was whether the site could deliver files securely at all under those limits, and what the owner should fix first.",
        "Client details, URLs, and specific findings are confidential and are not described here.",
      ],
    },
    role: {
      paragraphs: [
        "I was the person doing the work, from the first look at the site to the final document.",
      ],
      bullets: [
        "Assessed the site's security posture and its digital delivery path end to end.",
        "Designed and built a secure, token-based download approach that fit the storage and cost limits.",
        "Wrote and delivered a 25-page technical roadmap that prioritized the remaining work by risk and cost.",
      ],
    },
    approach: {
      paragraphs: [
        "This was an assessment and a build, not a penetration test. I started by mapping how a file travelled from purchase to download, and where along that path someone who had not paid could get at it. The largest exposure was structural rather than exotic: files reachable by a stable link that anyone could pass around.",
        "The fix I implemented was a token-based download flow. Instead of linking to the file, the site issues a download token that is tied to the purchase, expires, and cannot be reused indefinitely. The server checks the token and streams the file only when it validates. That closes the sharing problem without any new infrastructure, which was the whole point.",
      ],
    },
    decisions: {
      paragraphs: [
        "Every recommendation had to survive the budget. Anything that needed a paid service was either dropped or moved to a later phase of the roadmap with the cost stated plainly.",
      ],
      bullets: [
        "Chose expiring tokens over signed storage URLs because the hosting plan had no object storage to sign against.",
        "Ranked findings by how likely they were to actually cost the creator money or trust, not by severity labels from a scanner.",
        "Wrote the roadmap for the owner, not for another engineer: what to do, why it matters, what it costs, in that order.",
      ],
    },
    challenges: {
      paragraphs: [
        "The hard part was not the token logic. It was making security decisions that a solo creator could afford and maintain without me. Several textbook fixes were technically right and practically useless at this scale. I spent as much time explaining trade-offs as building, and the roadmap reflects that: each item says what happens if it is skipped.",
      ],
    },
    evidence: {
      paragraphs: [
        "The deliverable was a 25-page technical roadmap covering the current state, the download flow I implemented, and the prioritized remaining work. The document belongs to the client and is confidential. I can describe its structure and my reasoning in conversation.",
      ],
    },
    currentStatus: {
      paragraphs: [
        "The engagement ran from April to June 2026 and is complete. The token-based download approach was built and handed over with the roadmap.",
      ],
    },
  },
};
