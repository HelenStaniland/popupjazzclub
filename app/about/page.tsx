import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Pop Up Jazz Club — the musicians, singers, and hosts behind our intimate jazz nights.",
};

export default function AboutPage() {
  return (
    <div>
      <section className="border-b border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">About</p>
          <h1 className="mt-4 font-serif text-4xl font-light text-cream sm:text-5xl">
            Our story
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-muted">
            Pop Up Jazz Club transforms ordinary spaces into intimate jazz
            clubs — one unforgettable evening at a time.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="https://images.unsplash.com/photo-1520523839897-bd05543f18a5?w=800&q=80"
                alt="Pop Up Jazz Club collective — group photograph placeholder"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-cream-muted sm:text-base">
              <h2 className="font-serif text-3xl font-light text-cream">
                The people behind the music
              </h2>
              <p>
                We started Pop Up Jazz Club because we missed the feeling of
                sitting close to the band — hearing the breath between phrases,
                catching a smile across the stage. Concert halls have their
                place, but jazz was made for smaller rooms.
              </p>
              <p>
                Our collective includes pianists, double bass players,
                saxophonists, drummers, and vocalists who perform together in
                different combinations depending on the night. Some of us have
                played internationally; others are the best-kept secrets of the
                local scene. All of us share a love for the tradition and a
                desire to make every guest feel like a regular.
              </p>
              <p>
                Behind the scenes, a small team handles venue sourcing, set
                design, and the details that turn a blank room into a club for
                the evening — warm lighting, dressed tables, and a welcome that
                sets the tone before the first note.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light text-cream">
              What to expect
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Arrive & settle",
                  text: "Doors open early. Find your table, pour a glass, and soak in the atmosphere.",
                },
                {
                  title: "Two sets of live jazz",
                  text: "Acoustic performances with a short interval. The music is the centrepiece.",
                },
                {
                  title: "Stay & socialise",
                  text: "Linger afterwards — many of our best friendships start at the bar.",
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
