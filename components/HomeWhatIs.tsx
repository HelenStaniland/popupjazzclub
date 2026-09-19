import Image from "next/image";

export default function HomeWhatIs() {
  return (
    <section className="border-b border-border/40 pt-14 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <h2 className="max-w-2xl font-serif text-2xl font-light text-cream sm:text-3xl">
              What is Pop Up Jazz Club?
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
              <p>
                Pop Up Jazz Club is a vocal jazz night in Herne Hill — part
                performance, part gathering. Local people come together to sing,
                listen, and spend an evening in good company.
              </p>
              <p>
                What began as a small gathering of friends has grown into a regular
                event where people feel at home. Some come to perform, others to
                support friends, and many simply come to enjoy live music and a
                relaxed evening among people they like.
              </p>
              <p>
                The room is candlelit and bring-your-own-bottle; wine glasses and ice
                are on the tables, with a few snacks while you settle in. A live house
                band carries the music. The evening feels somewhere between a jazz
                club and a live music night among friends.
              </p>
              <p>
                Bring a bottle, settle in at a candlelit table, and enjoy an evening
                of live jazz, local voices and community.
              </p>
            </div>
          </div>

          <div className="overflow-hidden rounded-sm border border-border bg-surface">
            <Image
              src="/gallery/BassSinging.jpeg"
              alt="Helen Staniland singing and playing double bass at Pop Up Jazz Club"
              width={1536}
              height={2048}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
