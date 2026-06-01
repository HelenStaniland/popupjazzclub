import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join the Club",
  description:
    "Join Pop Up Jazz Club for early access to events, venue reveals, and exclusive updates.",
};

export default function JoinPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/40 bg-surface py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(140,55,68,0.14)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Join the Club
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-cream sm:text-5xl">
            Be first through the door
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-muted">
            Join our mailing list for early ticket access, venue reveals, and
            occasional notes from the band. No spam — just jazz.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <JoinForm />

          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl font-light text-cream">
              Member perks
            </h2>
            <ul className="mt-8 space-y-4 text-sm text-cream-muted">
              <li className="flex items-center justify-center gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                Early access to tickets before public release
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                Venue reveals sent directly to your inbox
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                Occasional exclusive events for members
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
