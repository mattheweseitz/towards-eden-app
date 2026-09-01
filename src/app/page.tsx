import Link from "next/link";
import { RotatingHeadline } from "./rotating-headline";

const PFI_URL = "https://painfreeintimacy.com";

const HERO_PHRASES = [
  "shouldn't hurt",
  "shouldn't be painful",
  "was meant to be joyful",
  "is possible",
];

const beliefs = [
  {
    title: "Wholeness, not just relief",
    body: "Healing isn't only the absence of pain — it's the return of closeness, confidence, and joy between spouses.",
  },
  {
    title: "Compassionate & clinical",
    body: "A proven, structured recovery program led with expertise and care, so no couple has to navigate this alone.",
  },
  {
    title: "Marriage at the center",
    body: "We walk with couples, not just individuals — because intimacy is something you rebuild together.",
  },
];

export default function Home() {
  return (
    <>
      <header className="sticky top-0 z-10 border-b border-border/70 bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <Link href="/" className="flex items-center gap-2 font-semibold tracking-tight">
            <span aria-hidden className="text-lg">🌿</span>
            Towards Eden
          </Link>
          <nav className="flex items-center gap-6 text-sm text-muted">
            <a href="#mission" className="hidden transition-colors hover:text-foreground sm:inline">
              Our mission
            </a>
            <a
              href={PFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Visit Pain-Free Intimacy
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Working toward marital wholeness
          </p>
          <RotatingHeadline
            phrases={HERO_PHRASES}
            className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl"
          />
          <p className="mx-auto mt-6 max-w-2xl text-lg text-muted">
            Towards Eden is the parent company of{" "}
            <span className="font-medium text-foreground">Pain-Free Intimacy</span>{" "}
            — the premier recovery program for painful sex. If pain has come
            between you and your spouse, there is a way back.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href={PFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Explore the program →
            </a>
            <a
              href="#mission"
              className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-card"
            >
              Learn about us
            </a>
          </div>
          <p className="mt-4 text-sm text-muted">
            painfreeintimacy.com
          </p>
        </section>

        {/* Beliefs */}
        <section id="mission" className="border-t border-border/70 bg-card/40">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <h2 className="mx-auto max-w-2xl text-center text-3xl font-semibold tracking-tight sm:text-4xl">
              We believe in working toward marital wholeness.
            </h2>
            <div className="mt-12 grid gap-6 sm:grid-cols-3">
              {beliefs.map((b) => (
                <div
                  key={b.title}
                  className="rounded-2xl border border-border bg-card p-6 shadow-sm"
                >
                  <h3 className="text-lg font-semibold">{b.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted">{b.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Program spotlight / redirect */}
        <section className="mx-auto max-w-3xl px-6 py-24 text-center">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-accent">
            Our flagship program
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight sm:text-4xl">
            Pain-Free Intimacy
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            A dedicated recovery program helping couples overcome painful sex and
            restore the closeness marriage is meant to hold. Everything we do
            lives at Pain-Free Intimacy — that&apos;s where your recovery begins.
          </p>
          <div className="mt-10">
            <a
              href={PFI_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-primary px-8 py-3.5 text-lg font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Go to painfreeintimacy.com →
            </a>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
          <span>🌿 Towards Eden · Parent company of Pain-Free Intimacy</span>
          <a
            href={PFI_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-foreground"
          >
            painfreeintimacy.com
          </a>
        </div>
        <div className="mx-auto max-w-5xl px-6 pb-8 text-xs text-muted">
          © {new Date().getFullYear()} Towards Eden. All rights reserved.
        </div>
      </footer>
    </>
  );
}
