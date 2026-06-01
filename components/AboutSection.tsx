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
                src="/gallery/CurtainCall.jpg"
                alt="Pop Up Jazz Club singers and musicians together on stage"
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
              Friends, musicians &amp; neighbours
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
              <p>
                Pop Up Jazz Club is a welcoming social jazz night where local
                singers, musicians, friends and audiences come together. It
                started as a way to share live music with the people we know —
                and grew into something the whole community looks forward to.
              </p>
              <p>
                You might come to support a friend on stage, catch up with
                neighbours over a glass of wine, or simply enjoy a relaxed
                evening with other music lovers. The hall gets dressed with red
                tablecloths, candles and lighting to create a jazz club feel —
                but what makes the night special is the people in the room.
              </p>
              <p>
                No dress code, no pretension — just good music, good company,
                and a shared experience you&apos;ll want to come back to.
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
