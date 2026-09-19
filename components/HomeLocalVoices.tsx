import Image from "next/image";

const localVoicePhotos = [
  {
    src: "/gallery/Singer10.jpeg",
    alt: "Local singer performing on stage",
    objectPosition: "center 42%",
  },
  {
    src: "/gallery/DuetLC.jpeg",
    alt: "Two local singers performing a duet",
    objectPosition: "center",
  },
  {
    src: "/gallery/cowboy.jpeg",
    alt: "Local singer performing on stage",
    objectPosition: "center 32%",
  },
] as const;

export default function HomeLocalVoices() {
  return (
    <section className="pt-6 pb-6 sm:pt-8 sm:pb-8">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">The Music</p>
        <h2 className="mt-4 max-w-xl font-serif text-2xl font-light text-cream sm:text-3xl">
          Local voices, live on stage
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
          <p>
            Each night features singers from the Herne Hill community performing
            jazz standards, favourites, and the occasional surprise.
          </p>
          <p>
            Every event brings a different mix of voices, songs and
            personalities. Familiar faces, new favourites, and people sharing
            music they love, supported by a live band.
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-3 lg:mt-16">
          {localVoicePhotos.map(({ src, alt, objectPosition }) => (
            <figure
              key={src}
              className="relative aspect-[4/3] overflow-hidden rounded-sm border border-border bg-surface"
            >
              <Image
                src={src}
                alt={alt}
                fill
                sizes="(max-width: 640px) 100vw, 33vw"
                className="object-cover"
                style={{ objectPosition }}
              />
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
