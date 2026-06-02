import Image from "next/image";
import { singerPhotos } from "@/lib/content";
import { FeatureImage, SectionIntro } from "@/components/SectionParts";

export default function HomeMusic() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro label="The Music" title="Local voices, live on stage">
          <p>
            Each night features singers from the Herne Hill community —
            often from local choirs — performing jazz standards, favourites,
            and the occasional surprise.
          </p>
          <p>
            Duets, solo spots, and variety from night to night. Neighbours
            sharing music they love, supported by a live band.
          </p>
        </SectionIntro>

        <div className="mt-12 lg:mt-16">
          <FeatureImage
            src="/gallery/Duet.jpg"
            alt="Two local singers performing a duet on stage"
            caption="Duets and collaborations."
            aspect="wide"
          />
        </div>

        <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4 lg:mt-8">
          {singerPhotos.slice(0, 4).map(({ src, alt }) => (
            <figure key={src} className="overflow-hidden rounded-sm border border-border">
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
      </div>
    </section>
  );
}
