import Image from "next/image";
import { houseBand } from "@/lib/content";
import { SectionIntro } from "@/components/SectionParts";

export default function HomeHouseBand() {
  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionIntro label="The House Band" title="The musicians behind every set">
          <p>
            Local musicians provide the foundation for the evening — piano,
            double bass, and drums backing each singer through the night.
          </p>
        </SectionIntro>

        <div className="mt-12 grid gap-6 sm:grid-cols-3 lg:mt-16">
          {houseBand.map(({ name, src, alt, description }) => (
            <figure key={name}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-sm border border-border bg-surface-elevated">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 100vw, 33vw"
                  className="object-cover"
                />
              </div>
              <figcaption className="mt-4">
                <p className="font-serif text-xl text-gold">{name}</p>
                <p className="mt-1 text-sm leading-relaxed text-cream-muted">
                  {description}
                </p>
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
