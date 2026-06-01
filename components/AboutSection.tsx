import Image from "next/image";
import Link from "next/link";
import Button from "@/components/Button";

export default function AboutSection() {
  return (
    <section className="border-t border-border/40 bg-surface py-20 sm:py-28">
      <div className="mx-auto max-w-6xl px-6 lg:px-8">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="relative">
            <div className="relative aspect-[4/5] overflow-hidden rounded-sm border border-border bg-surface-elevated">
              <Image
                src="/gallery/CurtainCall.jpg"
                alt="Pop Up Jazz Club singers and musicians together on stage in Herne Hill"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent" />
            </div>
            <div
              className="absolute -bottom-4 -right-4 hidden h-full w-full rounded-sm border border-gold/20 sm:block"
              aria-hidden
            />
          </div>

          <div>
            <p className="text-xs uppercase tracking-[0.3em] text-gold">
              Herne Hill
            </p>
            <h2 className="mt-4 font-serif text-3xl font-light text-cream sm:text-4xl">
              Local singers, musicians &amp; friends
            </h2>
            <div className="mt-6 space-y-4 text-sm leading-relaxed text-cream-muted sm:text-base">
              <p>
                Pop Up Jazz Club started in Herne Hill as a way for local
                singers, musicians, friends and music lovers to come together
                for a great night out.
              </p>
              <p>
                Many of the singers come from local choirs and musical
                communities. People come along to support friends on stage,
                discover new performers, and enjoy live music in a relaxed
                atmosphere.
              </p>
              <p>
                The music matters — and so does the community. Everyone is
                welcome, whether you know the performers or not.
              </p>
            </div>
            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <Button href="/about" variant="secondary">
                About us
              </Button>
              <Link
                href="/join"
                className="inline-flex items-center text-sm text-gold transition-colors hover:text-gold-light"
              >
                Join the Club →
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
