import Image from "next/image";
import { communityPhotos } from "@/lib/content";

export default function HomeFriends() {
  const [featured, wide, ...rest] = communityPhotos;

  return (
    <section className="bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">
          The Community
        </p>
        <h2 className="mt-4 max-w-xl font-serif text-2xl font-light text-cream sm:text-3xl">
          Friends supporting friends
        </h2>
        <div className="mt-6 max-w-2xl space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
          <p>
            The audience are not passive spectators. They are friends, family,
            supporters, and fellow music lovers — many of whom know the
            performers personally.
          </p>
          <p>
            Between sets there is conversation, laughter, and the easy warmth
            of a gathering where newcomers are welcomed and familiar faces
            abound.
          </p>
        </div>

        <div className="mt-12 space-y-4 lg:mt-16">
          <figure className="overflow-hidden rounded-sm border border-border">
            <div className="relative aspect-[16/10] sm:aspect-[2/1]">
              <Image
                src={featured.src}
                alt={featured.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </figure>
          <figure className="overflow-hidden rounded-sm border border-border">
            <div className="relative aspect-[16/10] sm:aspect-[2/1]">
              <Image
                src={wide.src}
                alt={wide.alt}
                fill
                sizes="(max-width: 1024px) 100vw, 1152px"
                className="object-cover"
              />
            </div>
          </figure>
          <div className="grid gap-4 sm:grid-cols-3">
            {rest.map(({ src, alt }) => (
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
