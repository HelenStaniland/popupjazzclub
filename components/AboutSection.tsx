import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutSection() {
  return (
    <section className="border-t border-border/40 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface-elevated">
              <Image
                src="https://images.unsplash.com/photo-1520523839897-bd05543f18a5?w=800&q=80"
                alt="Pop Up Jazz Club musicians and singers — group photograph placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-gold/20 sm:block"
              aria-hidden
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
            <h2 className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">
              The musicians &amp; singers behind the club
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
              <p>
                Pop Up Jazz Club was born from a simple idea: jazz belongs in
                intimate rooms, not vast auditoriums. We&apos;re a collective of
                musicians, vocalists, and hosts who believe the best nights
                happen when the music is close enough to feel.
              </p>
              <p>
                Our rotating ensemble brings together seasoned jazz players and
                rising voices, performing standards and originals in venues that
                surprise and delight. Every event is curated — from the set list
                to the lighting — to recreate the warmth of a classic jazz club,
                wherever we land.
              </p>
              <p>
                Whether you&apos;re a lifelong jazz lover or discovering the
                genre for the first time, you&apos;re welcome at our table.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/about" variant="secondary">
                Our story
              </Button>
              <Link
                href="/join"
                className="inline-flex items-center text-sm text-gold transition-colors hover:text-gold-light"
              >
                Join the Club →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
