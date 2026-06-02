import Image from "next/image";

export default function HomeFriends() {
  return (
    <section className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              The Community
            </p>
            <h2 className="mt-4 max-w-xl font-serif text-2xl font-light text-cream sm:text-3xl">
              Friends Supporting Friends
            </h2>
            <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
              <p>
                Many of our singers come from local choirs and music groups, and
                for some, Pop Up Jazz Club is their first experience of singing
                solo.
              </p>
              <p>
                What makes the evening special is the encouragement people give
                one another. Friends come to cheer each other on, performers
                support new singers, and audience members often become performers
                themselves.
              </p>
              <p>
                Over time, the confidence grows. People who were nervous about
                stepping onto the stage have returned to sing again, inspiring
                others to have a go.
              </p>
              <p>
                Every evening brings a mixture of familiar faces, new voices and
                memorable moments.
              </p>
            </div>
          </div>

          <div className="mx-auto max-w-[288px] overflow-hidden rounded-sm border border-border bg-background sm:max-w-[346px] lg:mx-0 lg:max-w-[288px] xl:max-w-[346px]">
            <Image
              src="/gallery/AudienceGold.jpeg"
              alt="Guests enjoying the warm atmosphere of the evening"
              width={1200}
              height={1600}
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="h-auto w-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
