import Image from "next/image";
import { houseBandDetailPhotos, houseBandPhotos } from "@/lib/content";

export default function HomeHouseBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          The House Band
        </p>
        <p className="mt-4 max-w-xl font-serif text-2xl font-light text-cream sm:text-3xl">
          The same musicians backing every singer through the evening.
        </p>

        <div className="mt-12 space-y-4 lg:mt-16">
          {houseBandPhotos.map(({ src, alt }) => (
            <figure
              key={src}
              className="overflow-hidden rounded-sm border border-border"
            >
              <div className="relative aspect-[16/10] sm:aspect-[2/1]">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 1024px) 100vw, 1152px"
                  className="object-cover"
                />
              </div>
            </figure>
          ))}
          <div className="grid gap-4 sm:grid-cols-3">
            {houseBandDetailPhotos.map(({ src, alt }) => (
              <figure
                key={src}
                className="overflow-hidden rounded-sm border border-border"
              >
                <div className="relative aspect-[3/4] bg-surface-elevated">
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
