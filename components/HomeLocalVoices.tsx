import Image from "next/image";

const localVoicePhotos = [
  {
    src: "/gallery/SingerKeyboard.png",
    alt: "Local singer performing with the pianist",
  },
  {
    src: "/gallery/Singer8.png",
    alt: "Local singer performing on stage with the house band",
  },
  {
    src: "/gallery/SmilingSingerBassist.png",
    alt: "Local singer performing with the double bass player",
  },
] as const;

export default function HomeLocalVoices() {
  return (
    <section className="py-14 sm:py-20">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">The Music</p>
        <h2 className="mt-4 max-w-xl font-serif text-2xl font-light text-cream sm:text-3xl">
          Local voices, live on stage
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
          <p>
            Each night features singers from the Herne Hill community — often
            from local choirs — performing jazz standards, favourites, and the
            occasional surprise.
          </p>
          <p>
            Duets, solo spots, and variety from night to night. Neighbours
            sharing music they love, supported by a live band.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
          {localVoicePhotos.map(({ src, alt }) => (
            <figure
              key={src}
              className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover object-center"
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
