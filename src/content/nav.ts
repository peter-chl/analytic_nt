// Table of contents. Order here defines lecture numbering, the sidebar, and
// prev/next links. Each slug must have a matching src/content/<slug>.mdx.

export interface Lecture {
  slug: string;
  title: string;
  summary: string;
}

export interface Part {
  title: string;
  lectures: Lecture[];
}

export const parts: Part[] = [
  {
    title: "Foundations",
    lectures: [
      {
        slug: "introduction",
        title: "What Is Analytic Number Theory?",
        summary:
          "Why a continuous subject can answer discrete questions: counting functions, Dirichlet series and the Euler product, Perron's formula, and Fourier analysis on residue classes.",
      },
    ],
  },
  {
    title: "Arithmetic Functions",
    lectures: [
      {
        slug: "divisor-function",
        title: "The Divisor Function",
        summary:
          "Averaging d(n), first by the trivial count and then by Dirichlet's hyperbola method, and the research it leads to: sharper error terms, short intervals, arithmetic progressions, shifted convolutions and polynomial values.",
      },
    ],
  },
];

export interface NumberedLecture extends Lecture {
  number: number;
  part: string;
}

export const lectures: NumberedLecture[] = parts.flatMap((p) => p.lectures).map(
  (l, i) => ({
    ...l,
    number: i + 1,
    part: parts.find((p) => p.lectures.includes(l))!.title,
  }),
);

export function getLecture(slug: string): NumberedLecture | undefined {
  return lectures.find((l) => l.slug === slug);
}
