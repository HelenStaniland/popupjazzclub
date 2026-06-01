import Image from "next/image";
import Link from "next/link";
import { galleryImages } from "@/lib/content";

type GallerySectionProps = {
  showViewAll?: boolean;
  limit?: number;
};

export default function GallerySection({
  showViewAll = true,
  limit = 6,
}: GallerySectionProps) {
  const images = galleryImages.slice(0, limit);

  return (
    <section className="py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="mb-14 flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Gallery
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">
              Nights to remember
            </h2>
            <p className="mt-4 max-w-lg text-sm leading-relaxed text-cream-muted">
              Friends cheering on friends, conversations between sets, and
              local musicians doing what they love — all in a room that feels
              just a little bit special.
            </p>
          </div>
          {showViewAll && (
            <Link
              href="/gallery"
              className="shrink-0 text-sm uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
            >
              View all →
            </Link>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-3">
          {images.map(({ src, alt, caption }, index) => (
            <figure
              key={src}
              className={`group relative overflow-hidden rounded-sm ${
                index === 0 ? "col-span-2 row-span-2 lg:col-span-1 lg:row-span-1" : ""
              }`}
            >
              <div className="relative aspect-[4/3] overflow-hidden bg-surface-elevated">
                <Image
                  src={src}
                  alt={alt}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 400px"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 transition-opacity group-hover:opacity-100" />
                <figcaption className="absolute bottom-0 left-0 right-0 translate-y-full p-4 text-xs uppercase tracking-widest text-cream transition-transform group-hover:translate-y-0">
                  {caption}
                </figcaption>
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
