"use client";

// A proof box that shows the high-level idea by default and reveals the full
// argument with a toggle. Usage in MDX:
//
//   <Proof name="…">
//   <ProofIdea>…</ProofIdea>
//   <ProofDetails>…</ProofDetails>
//   </Proof>

import { createContext, useContext, useId, useState } from "react";

const ProofContext = createContext<{ open: boolean; id: string }>({
  open: false,
  id: "",
});

export function Proof({
  name,
  children,
}: {
  name?: string;
  children: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const id = useId();

  return (
    <div className="proof" data-open={open || undefined}>
      <div className="proof-head">
        <span className="proof-title">
          Proof
          {name && <span className="proof-name"> ({name})</span>}
        </span>
        <button
          type="button"
          className="proof-toggle"
          aria-expanded={open}
          aria-controls={id}
          onClick={() => setOpen((o) => !o)}
        >
          {open ? "Hide full proof" : "Show full proof"}
        </button>
      </div>
      <ProofContext.Provider value={{ open, id }}>
        {children}
      </ProofContext.Provider>
    </div>
  );
}

export function ProofIdea({ children }: { children: React.ReactNode }) {
  return (
    <div className="proof-idea">
      <div className="proof-label">Idea</div>
      {children}
    </div>
  );
}

export function ProofDetails({ children }: { children: React.ReactNode }) {
  const { open, id } = useContext(ProofContext);
  return (
    <div id={id} className="proof-details" hidden={!open}>
      <div className="proof-label">Full proof</div>
      {children}
      <div className="proof-qed" aria-hidden="true">
        ∎
      </div>
    </div>
  );
}
