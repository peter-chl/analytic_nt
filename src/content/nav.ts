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
          "Averaging τ(n), first by the trivial count and then by Dirichlet's hyperbola method, and the research it leads to: sharper error terms, short intervals, arithmetic progressions, shifted convolutions and polynomial values.",
      },
      {
        slug: "squarefree",
        title: "Squarefree Numbers",
        summary:
          "Counting integers with no repeated prime factor, why the error term is tied to the Riemann hypothesis, and the same research directions: short intervals, arithmetic progressions, correlations and polynomial values.",
      },
      {
        slug: "gauss-circle",
        title: "The Gauss Circle Problem",
        summary:
          "Counting lattice points in a disc, from Gauss's area argument to the hyperbola method and L(1, χ) = π/4, and the open problem of the error term and its relatives.",
      },
      {
        slug: "sums-of-two-squares",
        title: "Integers That Are Sums of Two Squares",
        summary:
          "The indicator b(n) rather than the representation count: Landau's x/√(log x) law and why its generating function has a branch point instead of a pole, then gaps and short intervals, arithmetic progressions, consecutive sums of two squares and polynomial values.",
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
