import { features } from "@/lib/content";

export default function FeaturePanels() {
  return (
    <section className="bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 text-center">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Pop Up Jazz Club
          </p>
          <h2 className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">
            A Herne Hill jazz night built around people and music
          </h2>
        </div>

        <div className="grid gap-6 sm:grid-cols-2">
          {features.map(({ title, description, icon }) => (
            <article
              key={title}
              className="group relative overflow-hidden rounded-sm border border-border bg-surface-elevated p-8 transition-colors hover:border-gold/40"
            >
              <div
                className="absolute inset-0 bg-gradient-to-br from-gold/5 to-transparent opacity-0 transition-opacity group-hover:opacity-100"
                aria-hidden
              />
              <div className="relative">
                <span
                  className="mb-5 inline-flex h-10 w-10 items-center justify-center rounded-full border border-gold/30 text-lg text-gold"
                  aria-hidden
                >
                  {icon}
                </span>
                <h3 className="font-serif text-2xl font-light text-cream">
                  {title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-cream-muted">
                  {description}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
