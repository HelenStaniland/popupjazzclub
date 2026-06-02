import Link from "next/link";
import Button from "@/components/Button";

export default function HomeJoinUs() {
  return (
    <section className="border-t border-border/40 bg-surface py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6 text-center lg:px-8">
        <p className="text-xs uppercase tracking-[0.3em] text-gold">Join Us</p>
        <p className="mx-auto mt-4 max-w-md font-serif text-2xl font-light text-cream sm:text-3xl">
          Come along to the next one.
        </p>

        <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
          <Button href="/events">Upcoming events</Button>
          <Button href="/join" variant="outline">
            Join the mailing list
          </Button>
        </div>

        <p className="mt-8">
          <Link
            href="/gallery"
            className="text-sm text-cream-muted transition-colors hover:text-gold"
          >
            More photos from past evenings →
          </Link>
        </p>
      </div>
    </section>
  );
}
