import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pop Up Jazz Club is a welcoming social jazz night — local singers, musicians, friends and audiences coming together.",
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
            Pop Up Jazz Club brings local singers, musicians, friends and
            audiences together for relaxed, welcoming jazz nights — stylish,
            but never pretentious.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="https://images.unsplash.com/photo-1520523839897-bd05543f18a5?w=800&q=80"
                alt="Pop Up Jazz Club — community of friends, singers and musicians"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-cream-muted sm:text-base">
              <h2 className="font-serif text-3xl font-light text-cream">
                Built by and for our community
              </h2>
              <p>
                We started Pop Up Jazz Club because we wanted a place where
                local musicians could perform, friends could come along to
                support them, and everyone else could discover live jazz in a
                relaxed, informal setting. No velvet ropes — just a good night
                out.
              </p>
              <p>
                The performers are people from the area — singers, pianists,
                bass players, saxophonists and more, often playing together for
                the first time. The audience is a mix of friends, family,
                neighbours and anyone who loves music. That&apos;s what makes
                each night feel personal.
              </p>
              <p>
                We transform each venue with table seating, warm lighting and
                decoration to create a jazz club atmosphere — but the focus is
                always on people, participation and connection. Come to hear
                live music, stay to meet someone new.
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
                  title: "Arrive & settle in",
                  text: "Doors open early. Find a table with friends, pour a drink, and ease into the evening.",
                },
                {
                  title: "Live local music",
                  text: "Two sets from singers and musicians in the community, with a short break to chat and refuel.",
                },
                {
                  title: "Stay & socialise",
                  text: "Stick around afterwards — plenty of people do, and it's often the best part of the night.",
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
