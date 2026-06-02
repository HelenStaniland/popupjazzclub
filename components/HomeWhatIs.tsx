import Image from "next/image";

export default function HomeWhatIs() {
  return (
    <section className="border-b border-border/40 py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="max-w-2xl font-serif text-2xl font-light text-cream sm:text-3xl">
          What is Pop Up Jazz Club?
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
          <p>
            Pop Up Jazz Club is a community jazz night in Herne Hill where local
            people come together to sing, play, listen and spend an evening in
            good company.
          </p>
          <p>
            What began as a small gathering of friends from local choirs and
            music groups has grown into a welcoming regular event. Some people
            come to perform, others come to support friends, and many simply
            come to enjoy live music in a relaxed atmosphere.
          </p>
          <p>
            With candlelit tables, a live house band and a bring-your-own-bottle
            approach, the evening combines the feel of a jazz club with the
            warmth of a community gathering.
          </p>
          <p>
            Bring a bottle, settle in with friends, and enjoy an evening of live
            jazz, local voices and community.
          </p>
        </div>

        <div className="mt-12 overflow-hidden rounded-sm border border-border bg-surface lg:mt-16">
          <Image
            src="/gallery/AudienceBanner.jpg"
            alt="Guests enjoying an evening at Pop Up Jazz Club"
            width={1529}
            height={568}
            sizes="(max-width: 1152px) 100vw, 1152px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
