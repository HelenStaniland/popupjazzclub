import Button from "@/components/Button";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,45,95,0.2)_0%,transparent_55%)]"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,rgba(85,35,80,0.14)_0%,transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-24 sm:py-32 lg:px-8 lg:py-40">
        <div className="max-w-3xl">
          <p className="mb-6 text-xs uppercase tracking-[0.3em] text-gold">
            Pop Up Jazz Club · Herne Hill
          </p>
          <h1 className="font-serif text-4xl font-light leading-tight tracking-wide text-cream sm:text-5xl lg:text-6xl">
            Live jazz, local voices and great company.
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-cream-muted sm:text-xl">
            Where singers, musicians and audiences come together for an
            enjoyable night out. Bring your own bottle.
          </p>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/events">Book Tickets</Button>
            <Button href="/join" variant="outline">
              Join the Club
            </Button>
          </div>
        </div>

        <div
          className="pointer-events-none absolute -right-20 top-1/2 hidden h-96 w-96 -translate-y-1/2 rounded-full bg-gold/5 blur-3xl lg:block"
          aria-hidden
        />
      </div>

      <div className="h-px bg-gradient-to-r from-transparent via-gold/40 to-transparent" />
    </section>
  );
}
