import Image from "next/image";

export default function HomeHouseBand() {
  return (
    <section className="bg-surface pt-14 pb-6 sm:pt-20 sm:pb-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <h2 className="max-w-2xl font-serif text-2xl font-light text-cream sm:text-3xl">
          The House Band
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
          <p>
            Pop Up Jazz Club started with three friends who wanted an excuse to
            play music together. What began as a small gathering of singers and
            musicians has grown into a welcoming evening where local people can
            perform with the support of a live band.
          </p>
          <p>
            Helen Staniland (double bass and vocals), Paul Southern (keyboards)
            and Vincent Burke (drums) accompany every performance, helping
            singers feel comfortable and confident on stage.
          </p>
          <p>
            Whether it&apos;s someone&apos;s first solo or a familiar face
            returning to sing again, the aim is always the same: good music, good
            company and a room full of encouragement.
          </p>
        </div>

        <div className="mt-12 max-w-4xl overflow-hidden rounded-sm border border-border bg-background lg:mt-16">
          <Image
            src="/gallery/SmilingBand.png"
            alt="The house band together on stage"
            width={1920}
            height={1080}
            sizes="(max-width: 1024px) 100vw, 896px"
            className="h-auto w-full"
          />
        </div>
      </div>
    </section>
  );
}
