import Link from "next/link";
import { FeatureImage, SectionIntro } from "@/components/SectionParts";
import Button from "@/components/Button";

export default function HomeRoom() {
  return (
    <section className="border-t border-border/40 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <SectionIntro label="The Room" title="A jazz club feel for the evening">
            <p>
              The hall is dressed with candles, red tablecloths, and warm
              lighting. It sets the mood — but the people in the room are what
              make the night.
            </p>
          </SectionIntro>
          <FeatureImage
            src="/gallery/FromAbove.jpg"
            alt="Candlelit tables with red cloths in a warmly lit room"
            caption="Tables, candles, and warm light."
            aspect="wide"
          />
        </div>

        <div className="mt-20 flex flex-col items-start justify-between gap-8 border-t border-border/40 pt-16 sm:flex-row sm:items-center">
          <div>
            <p className="font-serif text-2xl font-light text-cream sm:text-3xl">
              Fancy coming along?
            </p>
            <p className="mt-2 max-w-md text-sm text-cream-muted">
              See when the next Herne Hill night is on — or browse more photos
              from past evenings.
            </p>
          </div>
          <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
            <Button href="/events">See upcoming events</Button>
            <Link
              href="/gallery"
              className="text-center text-sm text-gold transition-colors hover:text-gold-light"
            >
              View gallery →
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
