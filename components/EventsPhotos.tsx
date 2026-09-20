import Image from "next/image";

const eventPhotos = [
  {
    src: "/gallery/Suzie.jpeg",
    alt: "Local singer performing on stage",
    objectPosition: "center 36%",
  },
  {
    src: "/gallery/TrioHappy.jpeg",
    alt: "Three local singers performing together",
    objectPosition: "center 38%",
  },
  {
    src: "/gallery/Lottie.jpeg",
    alt: "Local singer performing on stage",
    objectPosition: "center top",
  },
] as const;

export default function EventsPhotos() {
  return (
    <div className="grid gap-4 sm:grid-cols-3">
      {eventPhotos.map(({ src, alt, objectPosition }) => (
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
  );
}
