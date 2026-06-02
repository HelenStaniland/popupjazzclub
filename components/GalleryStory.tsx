import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { galleryStory } from "@/lib/content";

type StorySection = (typeof galleryStory)[number];
type StoryImage = {
  src: string;
  alt: string;
  caption: string;
};

function FeatureImage({
  image,
  priority = false,
  className = "",
  aspect = "wide",
}: {
  image: StoryImage;
  priority?: boolean;
  className?: string;
  aspect?: "wide" | "tall";
}) {
  const aspectClass =
    aspect === "tall" ? "aspect-[3/4]" : "aspect-[16/10] sm:aspect-[16/9]";

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
          sizes="(max-width: 1024px) 100vw, 1152px"
          className="object-cover"
        />
      </div>
      <figcaption className="mt-4 text-sm text-cream-muted">{image.caption}</figcaption>
    </figure>
  );
}

function SectionHeader({ label, tagline }: { label: string; tagline: string }) {
  return (
    <div className="max-w-xl">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">{label}</p>
      <p className="mt-4 font-serif text-2xl font-light leading-snug text-cream sm:text-3xl">
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
  section: StorySection;
  priority?: boolean;
  altBg?: boolean;
}) {
  const [featured, ...portraits] = section.images;
  if (!featured) return null;

  const wideImages =
    "wideImages" in section && section.wideImages ? section.wideImages : [];

  return (
    <section
      id={section.id}
      className={`scroll-mt-24 py-24 sm:py-32 lg:py-36 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-12 lg:mt-16">
          <FeatureImage image={featured} priority={priority} aspect="wide" />
          {portraits.length > 0 && (
            <div className="mt-6 grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
              {portraits.map((image) => (
                <figure
                  key={image.src}
                  className="overflow-hidden rounded-sm border border-border"
                >
                  <div className="relative aspect-[3/4] bg-surface-elevated">
                    <Image
                      src={image.src}
                      alt={image.alt}
                      fill
                      sizes="(max-width: 640px) 50vw, 25vw"
                      className="object-cover"
                    />
                  </div>
                  <figcaption className="mt-2 text-xs text-cream-muted">
                    {image.caption}
                  </figcaption>
                </figure>
              ))}
            </div>
          )}
          {wideImages.length > 0 && (
            <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {wideImages.map((image) => (
                <FeatureImage key={image.src} image={image} aspect="wide" />
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
  section: StorySection;
  priority?: boolean;
  altBg?: boolean;
}) {
  const [featured, wide, ...rest] = section.images;
  if (!featured) return null;

  return (
    <section
      id={section.id}
      className={`scroll-mt-24 py-24 sm:py-32 lg:py-36 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-12 space-y-4 lg:mt-16">
          <FeatureImage image={featured} priority={priority} aspect="wide" />
          {wide && <FeatureImage image={wide} aspect="wide" />}
          {rest.length > 0 && (
            <div className="grid gap-4 sm:grid-cols-3">
              {rest.map((image) => (
                <FeatureImage key={image.src} image={image} aspect="wide" />
              ))}
            </div>
          )}
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
  section: StorySection;
  priority?: boolean;
  altBg?: boolean;
}) {
  const [featured, ...rest] = section.images;
  if (!featured) return null;

  return (
    <section
      id={section.id}
      className={`scroll-mt-24 py-24 sm:py-32 lg:py-36 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-12 space-y-4 lg:mt-16">
          <FeatureImage image={featured} priority={priority} aspect="wide" />
          {rest.map((image) => (
            <FeatureImage key={image.src} image={image} aspect="wide" />
          ))}
        </div>
      </div>
    </section>
  );
}

function TextSection({
  section,
  altBg,
}: {
  section: StorySection;
  altBg?: boolean;
}) {
  return (
    <section
      id={section.id}
      className={`scroll-mt-24 py-24 sm:py-32 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <p className="mt-8 max-w-2xl text-sm leading-relaxed text-cream-muted sm:text-base">
          A community jazz night rooted in Herne Hill — part of the
          area&apos;s musical life, open to everyone whether you know the
          performers or not.
        </p>
      </div>
    </section>
  );
}

function SingleSection({
  section,
  altBg,
}: {
  section: StorySection;
  altBg?: boolean;
}) {
  const [image] = section.images;
  if (!image) return null;

  return (
    <section
      id={section.id}
      className={`scroll-mt-24 py-24 sm:py-32 lg:py-36 ${altBg ? "bg-surface" : ""}`}
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-12 lg:mt-16">
          <FeatureImage image={image} aspect="wide" />
        </div>
      </div>
    </section>
  );
}

export default function GalleryStory() {
  return (
    <>
      <section className="relative overflow-hidden border-b border-border/40 bg-surface py-20 sm:py-28 lg:py-32">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,var(--glow-gallery)_0%,transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-cream sm:text-5xl">
            People, music &amp; good evenings
          </h1>
          <p className="mt-6 max-w-md text-cream-muted">
            Photos from Pop Up Jazz Club in Herne Hill.
          </p>

          <nav
            aria-label="Gallery sections"
            className="mt-10 flex flex-wrap gap-x-8 gap-y-3"
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
        if (section.layout === "text") {
          return (
            <TextSection key={section.id} section={section} altBg={altBg} />
          );
        }
        return (
          <SingleSection key={section.id} section={section} altBg={altBg} />
        );
      })}

      <section className="border-t border-border/40 bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <p className="font-serif text-2xl font-light text-cream sm:text-3xl">
            Fancy coming along?
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm text-cream-muted">
            Live jazz, local voices, and a room full of friends.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button href="/events">See upcoming events</Button>
            <Link
              href="/join"
              className="text-sm text-gold transition-colors hover:text-gold-light"
            >
              Join the Club →
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
