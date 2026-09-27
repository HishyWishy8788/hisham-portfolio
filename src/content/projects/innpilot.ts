import type { Project } from "../types";

export const innpilot: Project = {
  slug: "innpilot",
  name: "InnPilot",
  tagline: "Operations software for a small motel, designed from behind the front desk.",
  summary:
    "A multi-tenant operations app for family-run motels, built from six years of working the desk at Clarkson Village Motel. Room status, housekeeping, and maintenance workflows on top of a security-first API.",
  timeframe: "Jul 2026 – present",
  role: "Sole developer, product owner",
  status: "in-development",
  statusNote: "Working local prototype. Not deployed, no customers yet.",
  stack: [
    "TypeScript",
    "Node.js",
    "Fastify",
    "PostgreSQL",
    "Vanilla JS PWA",
    "GitHub Actions",
  ],
  sections: {
    problem: {
      paragraphs: [
        "Clarkson Village Motel is a 27-room, family-operated motel in Mississauga. Reservations arrive through Booking.com, Expedia, and the phone. Guest registration is a paper card. The state of the building lives in people's heads: which rooms are clean, which are waiting on housekeeping, which are out of service because a heater is broken.",
        "I have worked that front desk since 2019, so I know exactly where the mornings go wrong. InnPilot is my answer to the part the booking platforms do not touch: day-to-day operations. It is deliberately not a replacement for Booking.com or Expedia. Those bring the reservations. InnPilot is meant to run the building.",
      ],
    },
    role: {
      paragraphs: [
        "I own the whole thing: the product decisions, the database schema, the API, the operator interface, and the security review. The product decisions come from the desk, not from a survey. The schema decisions come from thinking about what a motel actually needs to store, and what it should refuse to store.",
      ],
      bullets: [
        "Defined the scope: operations only, no channel-manager ambitions, no scraping of booking sites.",
        "Designed the room status and housekeeping workflow around how cleaners and the desk actually hand rooms back and forth.",
        "Built the tenant, role, and permission model so one deployment could serve more than one property safely.",
        "Fixed the bugs I found in my own screens and wrote down what I learned.",
      ],
    },
    approach: {
      paragraphs: [
        "InnPilot has two runtime pieces. An installable web app for staff, written in plain JavaScript with no framework and a strict Content Security Policy, and a Fastify API in TypeScript backed by PostgreSQL. In development the database is PGlite, which is real Postgres compiled to WebAssembly and persisted to a local data directory, so nothing extra has to be installed to run the whole system on a laptop.",
        "The API is where most of the engineering effort has gone so far. Sessions are httpOnly cookies with origin-checked CSRF protection scoped to cookie auth. Tenancy is enforced in the database with row-level security that fails closed when no tenant context is set. Eight roles map to a capability matrix that lives in SQL and is mirrored in code, with a test that fails if the two ever drift. The server test suite is adversarial by design: it tries to read across tenants, escalate roles, and replay requests, and expects to be refused.",
      ],
      bullets: [
        "Fastify 5 API with correlation IDs, security headers, a generic error handler, and a Postgres-backed rate limiter on sensitive routes.",
        "Multi-tenant schema with row-level security enabled and forced on tenant-scoped tables.",
        "Rooms table with tenant isolation and a housekeeping status, added under the existing permission model.",
        "Housekeeping and maintenance screens with an explicit room status state machine.",
        "CI on GitHub Actions with secret scanning. No deploy step, on purpose, until the deployment blockers are cleared.",
      ],
    },
    decisions: {
      paragraphs: [
        "Most of the decisions were about what not to build.",
      ],
      bullets: [
        "Dropped the Electron desktop shell in favour of an installable PWA. Same screens, one less runtime to secure and update.",
        "Authorization is server-side only. The role comes from a membership lookup, never from a header the client sends, and every authorization failure returns the same generic 404 so tenants cannot be enumerated.",
        "Planned digital guest registration collects what the paper card collects and nothing more: no driver's licence numbers, no passport numbers, no signature images.",
        "Started server-side persistence with rooms rather than reservations. Smallest schema, an obvious owner in the housekeeper role, and a screen already waiting for it.",
        "Kept the guest-facing marketing site completely separate from the operator app and the API.",
      ],
    },
    challenges: {
      paragraphs: [
        "The most visible bug was the housekeeping screen duplicating its entire room grid every time a room was tapped. It looked intermittent because navigating away and back hid it. The root cause turned out to be a single missing line: the router cleared the content container before rendering a page, but the room click handler re-rendered the page directly, bypassing the router, so each click appended a fresh copy under the old one. The stale copies kept their listeners too, so the grids visibly disagreed with each other. The fix was to make every page function clear its container on entry, which also disposed the stale listeners. The maintenance screen had the identical latent defect, so it got the same fix in the same change.",
        "The second challenge was honesty about state. The development database used to be in-memory and was wiped on every restart, which made it impossible to test anything across two sessions. Making the data directory persistent was a small change with a large effect on how much of the app could actually be exercised.",
        "Reviewing my own auth flows also turned up two identity-binding issues in registration and invitation acceptance. Neither is reachable today, because no real identity provider is wired in, but both are logged as blockers that must be fixed before that day.",
      ],
    },
    evidence: {
      paragraphs: [
        "The repository is private while the product is unfinished. I am happy to walk through the code, the schema, and the test suite live. What exists today, without exaggeration:",
      ],
      bullets: [
        "Roughly seventy server tests covering tenant isolation, authorization, onboarding, CSRF, rate limiting, and session transport.",
        "Three SQL migrations: identity and tenancy, permissions, and rooms. Forward-only, never edited once applied.",
        "A development runbook, a backup and restore runbook, an architecture decision record on session design, and a written security review.",
        "Seventeen operator screens in the PWA, with housekeeping and maintenance driven by a real status state machine.",
      ],
    },
    currentStatus: {
      paragraphs: [
        "InnPilot is a working local prototype, and I describe it that way. Users, organizations, properties, staff, and rooms are real tables. Reservations and guests are still mock data in the client. Nothing is deployed and no motel is using it yet.",
        "Next up, in order: point the housekeeping screen at the rooms API instead of the mock file, then give reservations and guests a real home on the server, then clear the deployment blockers I have already documented.",
      ],
    },
  },
};
