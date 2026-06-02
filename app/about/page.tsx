import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";
import { houseBand } from "@/lib/content";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pop Up Jazz Club — a community jazz night in Herne Hill, South London.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            About · Herne Hill
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-cream sm:text-5xl">
            Pop Up Jazz Club
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-muted">
            Born in Herne Hill and open to everyone. A community jazz night
            where local people perform, friends come to support them, and
            everyone enjoys a relaxed evening out.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="/gallery/Duet.jpg"
                alt="Two local singers performing a duet on stage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-cream-muted sm:text-base">
              <h2 className="font-serif text-3xl font-light text-cream">
                The people
              </h2>
              <p>
                Pop Up Jazz Club grew out of Herne Hill&apos;s choirs and
                musical communities. Many performers come from local choirs,
                friendship networks, and groups who already sing together.
              </p>
              <p>
                There is no strong separation between performers and audience.
                The singers are members of the community sharing music they
                love. The audience are friends, supporters, family, and fellow
                music lovers — not passive spectators.
              </p>
              <p>
                The evening feels somewhere between a jazz club, a party, and a
                live music night with friends. That combination is what makes
                it distinctive.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="space-y-6 text-sm leading-relaxed text-cream-muted sm:text-base lg:order-1">
              <h2 className="font-serif text-3xl font-light text-cream">
                The music
              </h2>
              <p>
                Each night features local singers performing jazz standards,
                favourites, and occasional surprises — backed by a live house
                band of piano, double bass, and drums.
              </p>
              <p>
                Performers vary from night to night. The variety and
                participation are part of what makes each evening different.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border lg:order-2">
              <Image
                src="/gallery/SmilingBand.png"
                alt="The house band together on stage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>

          <ul className="mt-16 grid gap-6 sm:grid-cols-3">
            {houseBand.map(({ name, src, alt, description }) => (
              <li
                key={name}
                className="overflow-hidden rounded-sm border border-border bg-background"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
                <div className="p-6">
                  <p className="font-serif text-xl text-gold">{name}</p>
                  <p className="mt-2 text-sm leading-relaxed text-cream-muted">
                    {description}
                  </p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light text-cream">
              A typical evening
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Arrive & say hello",
                  text: "Find a table, open a bottle, catch up with friends.",
                },
                {
                  title: "Two sets of live jazz",
                  text: "Local singers with the house band — then a break to chat.",
                },
                {
                  title: "Stay for the company",
                  text: "Plenty of people linger afterwards. Newcomers welcome.",
                },
              ].map(({ title, text }) => (
                <div key={title}>
                  <h3 className="font-serif text-xl text-gold">{title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    {text}
                  </p>
                </div>
              ))}
            </div>
            <div className="mt-12">
              <Button href="/events">See upcoming events</Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
