# Repository Guidelines

## Project Structure & Module Organization
- `src/app/` hosts App Router entries, shared layouts, and route-specific metadata. Keep page logic slim and push complex UI into components.
- `src/components/` is grouped by `layout/`, `ui/`, and feature folders; co-locate animation helpers (e.g., `AnimatedSection`) with their usage.
- `src/lib/` stores hooks and utilities such as scroll observers; add new helpers here when they are shared.
- Assets belong in `public/` (static images, icons) or `out/` when running `npm run export`. Configuration lives at the root (`next.config.ts`, `tailwind.config.js`, `netlify.toml`).

## Build, Test, and Development Commands
- `npm run dev` – Launches Next.js 15 dev server at http://localhost:3000 with hot reload.
- `npm run lint` – Runs `next lint` using the ESLint 9 + `eslint-config-next` stack; fix all warnings before committing.
- `npm run build` – Produces the production bundle (lint bypassed with `--no-lint`; run lint separately first).
- `npm run export` – Builds and triggers `next-sitemap` to emit the static export in `out/`.
- `npm start` – Serves the production build locally; use this to verify Netlify parity.

## Coding Style & Naming Conventions
- TypeScript + React 19 with strict mode; prefer functional components and typed props/interfaces.
- Use 2-space indentation, Tailwind utility-first classes, and the `cn()` helper for conditional styling.
- Name components with UpperCamelCase, hooks with `use*`, and files following Next.js conventions (`page.tsx`, `layout.tsx`).
- Keep content strings and localization consistent with the Japanese copywriting tone outlined in `content-planning/writing-guidelines.md`.

## Testing Guidelines
- There is no dedicated unit-test suite yet; enforce quality via `npm run lint`, TypeScript type-checks (`npx tsc --noEmit`), and manual responsive checks.
- When adding new features, include Storybook-like mock pages or integration states under `src/app/(previews)` if needed for visual QA.
- Document any manual test steps in the PR description until automated coverage is introduced.

## Commit & Pull Request Guidelines
- Favor concise, imperative commit messages with optional scopes (e.g., `feat(hero): add lottie animation`). Group related changes into a single commit when practical.
- PRs should describe the change, list test commands executed, and mention affected routes or components. Attach screenshots/GIFs for UI or animation updates.
- Link back to tracking issues or Trello cards, and call out any content dependencies (e.g., new assets under `public/` or changes to analytics tags).

## Content & Compliance Notes
- Never position the studio as a financial or educational investment consultancy. Focus on AI創造教育, trial classes, and program delivery.
- Cite government or institutional sources for educational blog posts and include the reference block defined in `content-planning/writing-guidelines.md`.
- Ensure CTA sections always drive toward trial lessons or consultations, not paid advisory services.
