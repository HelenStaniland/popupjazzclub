import Image from "next/image";
import { musicWidePhotos, singerPhotos } from "@/lib/content";

export default function HomeLocalVoices() {
  const [leadWide, ...otherWides] = musicWidePhotos;

  return (
    <section className="py-20 sm:py-28">
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

        <div className="mt-12 space-y-4 lg:mt-16">
          <figure className="overflow-hidden rounded-sm border border-border">
            <div className="relative aspect-[16/10] sm:aspect-[2/1]">
              <Image
                src={leadWide.src}
                alt={leadWide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </figure>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
            {singerPhotos.map(({ src, alt }) => (
              <figure
                key={src}
                className="overflow-hidden rounded-sm border border-border"
              >
                <div className="relative aspect-[3/4] bg-surface-elevated">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {otherWides.map(({ src, alt }) => (
              <figure
                key={src}
                className="overflow-hidden rounded-sm border border-border"
              >
                <div className="relative aspect-[16/10]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, 33vw"
                    className="object-cover"
                  />
                </div>
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
