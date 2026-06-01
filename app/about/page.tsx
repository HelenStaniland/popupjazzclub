import type { Metadata } from "next";
import Image from "next/image";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "About",
  description:
    "Pop Up Jazz Club — a Herne Hill jazz night where local singers, musicians, friends and music lovers come together.",
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
            A local jazz night where singers, musicians and audiences come
            together — friendly, relaxed, and open to all.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-20">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border">
              <Image
                src="/gallery/CurtainCall.jpg"
                alt="Pop Up Jazz Club singers and musicians together on stage"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>

            <div className="space-y-6 text-sm leading-relaxed text-cream-muted sm:text-base">
              <h2 className="font-serif text-3xl font-light text-cream">
                How it started
              </h2>
              <p>
                Pop Up Jazz Club began in Herne Hill as a way for local singers,
                musicians, friends and music lovers to come together for a great
                night out. It grew out of the area&apos;s choirs and musical
                communities — people who wanted to perform, and people who
                wanted to come along and listen.
              </p>
              <p>
                Many of the singers come from local choirs. Audience members
                often arrive to support friends on stage, meet new people, and
                enjoy live music without any fuss. The music matters, but the
                community matters just as much.
              </p>
              <p>
                It&apos;s not a professional concert venue or an exclusive club.
                It&apos;s a social evening — live jazz, familiar faces, and the
                chance to make new friends.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="font-serif text-3xl font-light text-cream">
              A typical evening
            </h2>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {[
                {
                  title: "Arrive & settle in",
                  text: "Find a table, open a bottle, say hello to someone nearby.",
                },
                {
                  title: "Two sets of live jazz",
                  text: "Local singers and musicians — standards, favourites, and the occasional surprise.",
                },
                {
                  title: "Stay & chat",
                  text: "Plenty of time between sets and afterwards to catch up with friends.",
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
