import Link from "next/link";

const features = [
  {
    title: "Daily reflection",
    body: "A gentle prompt each morning to set an intention and each evening to look back — no streaks to break, no guilt.",
  },
  {
    title: "Cultivate slowly",
    body: "Plant small habits and watch them take root. Progress here is measured in seasons, not in likes.",
  },
  {
    title: "Quiet by design",
    body: "No feeds, no infinite scroll, no notifications begging for attention. Just space to breathe and begin again.",
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
            <a href="#features" className="transition-colors hover:text-foreground">
              Features
            </a>
            <a href="#philosophy" className="transition-colors hover:text-foreground">
              Philosophy
            </a>
            <a
              href="#waitlist"
              className="rounded-full bg-primary px-4 py-1.5 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Join the waitlist
            </a>
          </nav>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center sm:py-32">
          <p className="mb-4 text-sm font-medium uppercase tracking-[0.2em] text-accent">
            A quieter way back
          </p>
          <h1 className="mx-auto max-w-3xl text-4xl font-semibold leading-tight tracking-tight sm:text-6xl">
            Cultivate calm, focus, and renewal — one small step at a time.
          </h1>
          <p className="mx-auto mt-6 max-w-xl text-lg text-muted">
            Towards Eden is a calm companion for the life you actually want to
            live. Less noise, fewer metrics, more meaning.
          </p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
            <a
              href="#waitlist"
              className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
            >
              Join the waitlist
            </a>
            <a
              href="#philosophy"
              className="rounded-full border border-border px-6 py-3 font-medium transition-colors hover:bg-card"
            >
              Read the philosophy
            </a>
          </div>
        </section>

        {/* Features */}
        <section id="features" className="border-t border-border/70 bg-card/40">
          <div className="mx-auto grid max-w-5xl gap-6 px-6 py-20 sm:grid-cols-3">
            {features.map((f) => (
              <div
                key={f.title}
                className="rounded-2xl border border-border bg-card p-6 shadow-sm"
              >
                <h3 className="text-lg font-semibold">{f.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.body}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Philosophy */}
        <section id="philosophy" className="mx-auto max-w-3xl px-6 py-24 text-center">
          <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
            Growth, not grind.
          </h2>
          <p className="mt-6 text-lg leading-relaxed text-muted">
            The name is a promise: a return to a garden state of mind — unhurried,
            attentive, whole. We build tools that get quieter the more you use
            them, so the app fades and your life comes forward.
          </p>
        </section>

        {/* Waitlist */}
        <section
          id="waitlist"
          className="border-t border-border/70 bg-card/40"
        >
          <div className="mx-auto max-w-xl px-6 py-20 text-center">
            <h2 className="text-2xl font-semibold tracking-tight">
              Be there from the first season.
            </h2>
            <p className="mt-3 text-muted">
              We&apos;ll only email you when there&apos;s something worth your
              attention.
            </p>
            <form className="mt-8 flex flex-col gap-3 sm:flex-row">
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <input
                id="email"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-full border border-border bg-background px-5 py-3 outline-none focus:border-primary"
              />
              <button
                type="submit"
                className="rounded-full bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary-hover"
              >
                Notify me
              </button>
            </form>
          </div>
        </section>
      </main>

      <footer className="border-t border-border/70">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-3 px-6 py-8 text-sm text-muted sm:flex-row">
          <span>🌿 Towards Eden</span>
          <span>© {new Date().getFullYear()} · Built with care.</span>
        </div>
      </footer>
    </>
  );
}
