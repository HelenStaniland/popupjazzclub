import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";
import { galleryStory } from "@/lib/content";

type StorySection = (typeof galleryStory)[number];
type StoryImage = StorySection["images"][number];

function FeatureImage({
  image,
  priority = false,
  className = "",
  aspect = "wide",
}: {
  image: StoryImage;
  priority?: boolean;
  className?: string;
  aspect?: "wide" | "tall" | "cinematic";
}) {
  const aspectClass =
    aspect === "tall"
      ? "aspect-[3/4]"
      : aspect === "cinematic"
        ? "aspect-[21/9] sm:aspect-[2/1]"
        : "aspect-[16/10] sm:aspect-[16/9]";

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
        <div className="absolute inset-0 bg-gradient-to-t from-background/20 via-transparent to-transparent" />
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

function PairSection({
  section,
  priority,
}: {
  section: StorySection;
  priority?: boolean;
}) {
  const [primary, secondary] = section.images;
  if (!secondary) return null;

  return (
    <section
      id={section.id}
      className="scroll-mt-24 py-24 sm:py-32 lg:py-36"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-12 lg:items-start lg:gap-10">
          <FeatureImage
            image={primary}
            priority={priority}
            className="lg:col-span-8"
          />
          <FeatureImage
            image={secondary}
            aspect="tall"
            className="lg:col-span-4"
          />
        </div>
      </div>
    </section>
  );
}

function PeopleSection({ section }: { section: StorySection }) {
  const [hero, ...rest] = section.images;

  return (
    <section
      id={section.id}
      className="scroll-mt-24 bg-surface py-28 sm:py-36 lg:py-44"
    >
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <SectionHeader label={section.label} tagline={section.tagline} />
        <div className="mt-12 lg:mt-16">
          <FeatureImage image={hero} priority aspect="cinematic" />
          <div className="mt-8 grid gap-8 sm:grid-cols-2 lg:mt-10">
            {rest.map((image) => (
              <FeatureImage key={image.src} image={image} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SingleSection({ section }: { section: StorySection }) {
  const [image] = section.images;

  return (
    <section
      id={section.id}
      className="scroll-mt-24 py-24 sm:py-32 lg:py-36"
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
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(120,45,95,0.15)_0%,transparent_60%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Gallery</p>
          <h1 className="mt-5 max-w-2xl font-serif text-4xl font-light leading-tight text-cream sm:text-5xl lg:text-6xl">
            Music, friends &amp; good evenings
          </h1>
          <p className="mt-6 max-w-md text-lg text-cream-muted">
            Pop Up Jazz Club in Herne Hill — live music, local voices, and a
            friendly crowd.
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
        if (section.layout === "people") {
          return <PeopleSection key={section.id} section={section} />;
        }
        if (section.layout === "pair") {
          return (
            <PairSection
              key={section.id}
              section={section}
              priority={index === 0}
            />
          );
        }
        return <SingleSection key={section.id} section={section} />;
      })}

      <section className="border-t border-border/40 bg-surface py-24 sm:py-32">
        <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
          <p className="font-serif text-2xl font-light text-cream sm:text-3xl">
            Fancy joining us?
          </p>
          <p className="mx-auto mt-4 max-w-sm text-sm text-cream-muted">
            See when the next Herne Hill night is on.
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
