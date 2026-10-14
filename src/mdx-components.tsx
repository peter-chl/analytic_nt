import type { MDXComponents } from "mdx/types";
import { Definition, Example, Remark, Result } from "@/components/Env";
import Figure from "@/components/Figure";
import { Proof, ProofDetails, ProofIdea } from "@/components/Proof";

const components: MDXComponents = {
  Definition,
  Example,
  Remark,
  Result,
  Figure,
  Proof,
  ProofIdea,
  ProofDetails,
};

export function useMDXComponents(): MDXComponents {
  return components;
}
