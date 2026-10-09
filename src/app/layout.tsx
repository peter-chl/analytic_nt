import type { Metadata } from "next";
import Shell from "@/components/Shell";
import "./globals.css";

const SITE_URL = "https://peter-chl.github.io/analytic_nt";
const SITE_NAME = "analytic_nt";
const DESCRIPTION =
  "Notes on analytic number theory — the distribution of primes, Dirichlet series, the Riemann zeta function, and sieve methods — with the arguments written out in full.";

export const metadata: Metadata = {
  title: {
    default: "Analytic Number Theory — Notes",
    template: "%s — analytic_nt",
  },
  description: DESCRIPTION,
  metadataBase: new URL(SITE_URL),
  openGraph: {
    title: "Analytic Number Theory",
    description: DESCRIPTION,
    url: SITE_URL,
    siteName: SITE_NAME,
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="antialiased">
      <body className="min-h-screen font-sans">
        <Shell>{children}</Shell>
      </body>
    </html>
  );
}
