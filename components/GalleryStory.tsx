import Image from "next/image";
import Button from "@/components/Button";
import { galleryStory } from "@/lib/content";

type StorySection = (typeof galleryStory)[number];
type SingersSectionData = Extract<StorySection, { layout: "singers" }>;
type CommunitySectionData = Extract<StorySection, { layout: "community" }>;
type HouseBandSectionData = Extract<StorySection, { layout: "house-band" }>;
type StoryImage = {
  src: string;
  alt: string;
  caption: string;
  credit?: string;
  fit?: "cover" | "contain";
  objectPosition?: "center" | "top" | string;
};

function imageObjectFit(
  fit: "cover" | "contain",
  position: string
): { className: string; style?: { objectPosition: string } } {
  if (fit === "contain") {
    return { className: "object-contain object-center" };
  }
  if (position === "top") {
    return { className: "object-cover object-top" };
  }
  if (position === "center") {
    return { className: "object-cover object-center" };
  }
  return {
    className: "object-cover",
    style: { objectPosition: position },
  };
}

function FeatureImage({
  image,
  priority = false,
  className = "",
  aspect = "wide",
  objectPosition = "center",
  fit = "cover",
  sizes,
}: {
  image: StoryImage;
  priority?: boolean;
  className?: string;
  aspect?: "wide" | "tall";
  objectPosition?: "center" | "top" | string;
  fit?: "cover" | "contain";
  sizes?: string;
}) {
  const imageFit = image.fit ?? fit;
  const imagePosition = image.objectPosition ?? objectPosition;
  const aspectClass =
    aspect === "tall" ? "aspect-[3/4]" : "aspect-[16/10] sm:aspect-[16/9]";
  const imageSizes =
    sizes ??
    (aspect === "tall"
      ? "(max-width: 640px) 100vw, 33vw"
      : "(max-width: 1024px) 100vw, 1152px");
  const { className: objectClass, style: objectStyle } = imageObjectFit(
    imageFit,
    imagePosition
  );

  return (
    <figure className={className}>
      <div
        className={`relative overflow-hidden rounded-sm border border-border bg-surface-elevated ${aspectClass}`}
      >
        <Image
          src={image.src}
          alt={image.alt}
          fill
          priority={priority}
          sizes={imageSizes}
          className={objectClass}
          style={objectStyle}
        />
      </div>
    </figure>
  );
}

function SectionHeader({ label, tagline }: { label: string; tagline: string }) {
  return (
    <div className="max-w-xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{label}</p>
      <p className="mt-3 font-serif text-2xl font-light leading-snug text-cream sm:text-3xl">
        {tagline}
      </p>
    </div>
  );
}

function SingersSection({
  section,
  priority,
  altBg,
}: {
  section: SingersSectionData;
  priority?: boolean;
  altBg?: boolean;
}) {
  const portraits = section.images;
  const wideImages =
    "wideImages" in section && section.wideImages ? section.wideImages : [];

  if (portraits.length === 0 && wideImages.length === 0) return null;

  return (
    <section
      id={section.id}
      className={`scroll-mt-20 py-14 sm:py-20 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-8 lg:mt-10">
          {portraits.length > 0 && (
            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {portraits.map((image, index) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-sm border border-border"
                >
                  <div className="relative aspect-[3/4] bg-surface-elevated">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      priority={priority && index === 0}
                      sizes="(max-width: 640px) 50vw, 25vw"
                      {...imageObjectFit("cover", image.objectPosition ?? "center")}
                    />
                  </div>
                </figure>
              ))}
            </div>
          )}
          {wideImages.length > 0 && (
            <div className="mt-5 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
              {wideImages.map((image) => (
                <FeatureImage
                  key={image.src}
                  image={image as StoryImage}
                  aspect="wide"
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

function CommunitySection({
  section,
  priority,
  altBg,
}: {
  section: CommunitySectionData;
  priority?: boolean;
  altBg?: boolean;
}) {
  if (section.images.length === 0) return null;

  return (
    <section
      id={section.id}
      className={`scroll-mt-20 py-14 sm:py-20 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3 lg:gap-4">
          {section.images.map((image, index) => (
            <figure
              key={image.src}
              className="overflow-hidden rounded-sm border border-border bg-surface-elevated"
            >
              <div className="relative aspect-[4/3]">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  priority={priority && index === 0}
                  sizes="(max-width: 640px) 50vw, 33vw"
                  className="object-cover object-center"
                />
              </div>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}

function HouseBandSection({
  section,
  priority,
  altBg,
}: {
  section: HouseBandSectionData;
  priority?: boolean;
  altBg?: boolean;
}) {
  const [featured, ...rest] = section.images;
  if (!featured) return null;

  const groupPhotos = [featured, ...rest.slice(0, 1)];
  const portraits = rest.slice(1);

  return (
    <section
      id={section.id}
      className={`scroll-mt-20 py-14 sm:py-20 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="max-w-2xl">
          <h2 className="font-serif text-2xl font-light text-cream sm:text-3xl">
            {section.label}
          </h2>
          {"body" in section && section.body && (
            <div className="mt-5 space-y-3 text-sm leading-relaxed text-cream-muted sm:text-base">
              {section.body.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>
          )}
        </div>
        <div className="mt-8 lg:mt-10">
          <div className="grid gap-3 sm:grid-cols-2 lg:gap-4">
            {groupPhotos.map((image, index) => (
              <figure
                key={image.src}
                className="overflow-hidden rounded-sm border border-border bg-surface-elevated"
              >
                <div className="relative aspect-[4/3]">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    priority={priority && index === 0}
                    sizes="(max-width: 640px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                </div>
              </figure>
            ))}
          </div>
          {portraits.length > 0 && (
            <div className="mt-4 grid gap-4 sm:grid-cols-3">
              {portraits.map((image) => (
                <div key={image.src}>
                  <FeatureImage
                    image={image}
                    aspect="tall"
                    objectPosition="top"
                  />
                  {"credit" in image && image.credit && (
                    <p className="mt-3 text-center text-sm text-cream-muted">
                      {image.credit}
                    </p>
                  )}
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function GalleryStory() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 bg-surface py-12 sm:py-16 lg:py-20">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--glow-gallery)_0%,transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-light leading-tight text-cream sm:text-5xl">
            Moments from Pop Up Jazz Club
          </h1>
          <p className="mt-4 max-w-md text-cream-muted">
            Live jazz, local voices and good company in Herne Hill.
          </p>

          <nav
            aria-label="Gallery sections"
            className="mt-8 flex flex-wrap gap-x-8 gap-y-3"
          >
            {galleryStory.map(({ id, label }) => (
              <a
                key={id}
                href={`#${id}`}
                className="text-sm uppercase tracking-widest text-gold transition-colors hover:text-gold-light"
              >
                {label}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {galleryStory.map((section, index) => {
        const altBg = index % 2 === 1;

        if (section.layout === "singers") {
          return (
            <SingersSection
              key={section.id}
              section={section}
              priority={index === 0}
              altBg={altBg}
            />
          );
        }
        if (section.layout === "house-band") {
          return (
            <HouseBandSection
              key={section.id}
              section={section}
              altBg={altBg}
            />
          );
        }
        if (section.layout === "community") {
          return (
            <CommunitySection
              key={section.id}
              section={section}
              altBg={altBg}
            />
          );
        }
        return null;
      })}

      <section className="border-t border-border/40 bg-surface py-14 sm:py-20">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <p className="font-serif text-2xl font-light text-cream sm:text-3xl">
            Fancy coming along?
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm text-cream-muted">
            Live jazz, local voices, and a room full of friends.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/events">See upcoming events</Button>
            <a
              href="/join"
              className="text-sm text-gold transition-colors hover:text-gold-light"
            >
              Join the Club →
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
