const facts = [
  "Station Hall, Herne Hill",
  "Bring Your Own Bottle",
  "Community Jazz Night",
] as const;

export default function FactStrip() {
  return (
    <div className="border-b border-border/40 bg-surface">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-2 py-4 text-center text-xs uppercase tracking-[0.22em] text-cream-muted sm:gap-x-4 sm:py-5 sm:text-sm">
          {facts.map((fact, index) => (
            <span key={fact} className="inline-flex items-center gap-x-3 sm:gap-x-4">
              {index > 0 && (
                <span className="text-gold" aria-hidden>
                  •
                </span>
              )}
              {fact}
            </span>
          ))}
        </p>
      </div>
    </div>
  );
}
