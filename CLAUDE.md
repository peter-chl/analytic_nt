# analytic_nt

Static Next.js site of notes on analytic number theory, deployed to
GitHub Pages. Sibling of peter-chl/or_apps (same design and deploy setup,
different subject).

## Structure

- `src/content/nav.ts` — table of contents (parts → lectures). Source of truth
  for numbering, sidebar and prev/next.
- `src/content/<slug>.mdx` — one lecture per file, rendered by
  `src/app/[slug]/page.tsx` via dynamic import.
- `src/components/Shell.tsx` — header + left sidebar (lists the current
  lecture's `##` sections, read from the DOM).
- `src/components/Env.tsx` — Definition / Example / Result / Remark boxes.
- `src/components/Proof.tsx` — `<Proof>` box: `<ProofIdea>` shows the
  high-level idea by default, `<ProofDetails>` holds the full proof behind a
  toggle. Leave blank lines inside them so the contents parse as Markdown.
- `src/app/globals.css` — lecture typography, section and environment
  numbering (CSS counters).

## Content rules

- Canadian English throughout: -ize (optimize, minimize) but -our, -re and
  doubled l (labour, centre, modelling, travelling). Keep slugs as they are.
- Section order: motivation → definitions/formulation → main results and
  methods → research directions/extensions → further reading. The site calls
  each page a "Section".
- No worked examples or numerical tables (computed counts, error-term data).
  Small illustrations in prose and named constants are fine; any number that
  appears must be verified by computing it (e.g. Python with sympy/mpmath).
  Scratch scripts stay out of the repo. Leave out attribution or history
  claims you can't confirm.
- When a paper is supplied, build on what the PDF says and credit its authors;
  never paraphrase theorems from an abstract.
- In MDX prose, a bare `<` or `{` is parsed as JSX — use math mode or words.
  `$` always starts math (never use it for currency). No `\label`, `\tag` or
  `\eqref`.
- Run `npm run check` (fast) and `npm run build` before pushing.

## Git workflow

**Always push directly to `main`.** Do not open pull requests unless explicitly asked.

Use `git push origin HEAD:main` after committing.
