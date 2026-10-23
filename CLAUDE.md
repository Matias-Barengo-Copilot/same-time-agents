# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

- `npm install` — install deps (retry once if it fails with a transient network error)
- `npm run dev` — dev server on http://localhost:3000 (use another port per worktree: `npm run dev -- -p 3001`)
- `npm run build` — production build; must pass before a feature is considered done
- `npm test` — runs `node --test "tests/**/*.test.js"`; single file: `node --test tests/<name>.test.js`

## Architecture

Next.js (App Router, plain JavaScript, no TypeScript) landing page for a fictional SaaS ("Orbita"). `@/` aliases the repo root.

- `app/page.js` only composes sections; each section is its own file in `components/`.
- Client components with CSS Modules (`Stats`, `Waitlist`, `BackToTop`) are the extension points for the exercise. Put feature styles in the component's own `*.module.css`, **not** in `app/globals.css`.
- `app/api/stats/route.js` returns data after a deliberate 1.5s delay (so loading states are visible). `app/api/waitlist/route.js` accepts any POST.

## Build Lab: four features, parallel agents (IMPORTANT)

This repo exists for the "Four Features, One Engineer" Build Lab. Four features are built **at the same time by separate Claude agents**, so agents must never share a working directory.

Mandatory workflow:

1. Each feature gets its own **git worktree + branch** off `main`, created outside the main checkout's files:
   `git worktree add .worktrees/<name> -b feat/<name> main`
   Branches: `feat/back-to-top`, `feat/health-endpoint`, `feat/loading-indicator`, `feat/form-validation`.
2. An agent works **only inside its own worktree** and never edits files in another worktree or in the main checkout. Run `npm install` inside the worktree and use a distinct dev port (3001–3004).
3. Each feature owns disjoint files, so merges don't conflict. Do not touch shared files (`app/page.js`, `app/layout.js`, `app/globals.css`, `package.json`) — they are already wired for all four features.

   | Feature | Branch | Owns |
   |---|---|---|
   | Back to top (longest page) | `feat/back-to-top` | `components/BackToTop.js`, `components/BackToTop.module.css`, `tests/back-to-top.test.js` |
   | `/health` (status + server time) | `feat/health-endpoint` | `app/health/route.js` (new), `tests/health.test.js` |
   | Loading indicator (stats fetch) | `feat/loading-indicator` | `components/Stats.js`, `components/Stats.module.css`, `tests/loading-indicator.test.js` |
   | Empty-value rejection (waitlist form) | `feat/form-validation` | `components/Waitlist.js`, `components/Waitlist.module.css`, `tests/form-validation.test.js` |

4. Each branch must be one clean, reviewable change: small commits, `npm run build` and `npm test` passing, no unrelated edits. Do not merge into `main` yourself — the human reviews and merges.
5. After all four are merged into `main` (one at a time), re-run `npm run build`, `npm test`, and check the page, `/health`, the stats loader and the form manually.
6. If a feature finishes early or gets stuck, stop and report; do not borrow another feature's files.
