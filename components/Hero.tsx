import Image from "next/image";

export default function Hero() {
  return (
    <section className="relative overflow-hidden border-b border-border/40">
      <div
        className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,var(--glow-hero)_0%,transparent_50%)]"
        aria-hidden
      />

      <div className="relative mx-auto max-w-6xl px-6 py-16 sm:py-20 lg:px-8 lg:py-24">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Pop Up Jazz Club · Herne Hill
            </p>
            <h1 className="mt-5 font-serif text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
              Live jazz, local voices and great company.
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-cream-muted">
              A community jazz night in Herne Hill where singers, musicians,
              friends and audiences come together. Bring your own bottle.
            </p>
          </div>

          <div className="overflow-hidden rounded-sm border border-border bg-surface">
            <Image
              src="/gallery/SingerKeyboard.png"
              alt="Local singer performing with the pianist at Pop Up Jazz Club"
              width={1065}
              height={985}
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
