import type { Metadata } from "next";
import Image from "next/image";
import { galleryImages } from "@/lib/content";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Photos from Pop Up Jazz Club events — intimate jazz nights in transformed spaces.",
};

export default function GalleryPage() {
  return (
    <div>
      <section className="border-b border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-4 font-serif text-4xl font-light text-cream sm:text-5xl">
            Moments from the club
          </h1>
          <p className="mt-6 max-w-2xl text-cream-muted">
            A collection of evenings past — placeholder images for now, ready
            to be replaced with your own photography.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map(({ src, alt, caption }) => (
              <figure
                key={src}
                className="group relative overflow-hidden rounded-sm border border-border bg-surface-elevated"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={src}
                    alt={alt}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/70 via-transparent to-transparent opacity-60" />
                  <figcaption className="absolute bottom-0 left-0 right-0 p-4 text-xs uppercase tracking-widest text-cream">
                    {caption}
                  </figcaption>
                </div>
              </figure>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
