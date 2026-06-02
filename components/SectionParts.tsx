import Image from "next/image";

type SectionIntroProps = {
  label: string;
  title: string;
  children?: React.ReactNode;
};

export function SectionIntro({ label, title, children }: SectionIntroProps) {
  return (
    <div className="max-w-xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{label}</p>
      <h2 className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">
        {title}
      </h2>
      {children && (
        <div className="mt-5 space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
          {children}
        </div>
      )}
    </div>
  );
}

type FeatureImageProps = {
  src: string;
  alt: string;
  caption?: string;
  priority?: boolean;
  aspect?: "wide" | "tall" | "square";
  className?: string;
};

export function FeatureImage({
  src,
  alt,
  caption,
  priority = false,
  aspect = "wide",
  className = "",
}: FeatureImageProps) {
  const aspectClass =
    aspect === "tall"
      ? "aspect-[3/4]"
      : aspect === "square"
        ? "aspect-square"
        : "aspect-[16/10] sm:aspect-[3/2]";

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-sm border border-border bg-surface-elevated ${aspectClass}`}
      >
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes="(max-width: 1024px) 100vw, 576px"
          className="object-cover"
        />
      </div>
      {caption && (
        <figcaption className="mt-3 text-sm text-cream-muted">{caption}</figcaption>
      )}
    </figure>
  );
}
