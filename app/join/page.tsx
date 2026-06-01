import type { Metadata } from "next";
import JoinForm from "@/components/JoinForm";

export const metadata: Metadata = {
  title: "Join the Club",
  description:
    "Join the Pop Up Jazz Club mailing list — hear about upcoming social jazz nights, local performers, and ticket news.",
};

export default function JoinPage() {
  return (
    <div>
      <section className="relative overflow-hidden border-b border-border/40 bg-surface py-16 sm:py-24">
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(120,45,95,0.16)_0%,transparent_70%)]"
          aria-hidden
        />
        <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">
            Join the Club
          </p>
          <h1 className="mt-4 font-serif text-4xl font-light text-cream sm:text-5xl">
            Stay in the loop
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-cream-muted">
            Sign up to hear about upcoming nights, who&apos;s performing, and
            when tickets go on sale. No spam — just the occasional note about
            a great night out.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-xl px-6 lg:px-8">
          <JoinForm />

          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl font-light text-cream">
              Why join?
            </h2>
            <ul className="mt-8 space-y-4 text-sm text-cream-muted">
              <li className="flex items-center justify-center gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                Hear when new events are announced
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                Find out who&apos;s performing each night
              </li>
              <li className="flex items-center justify-center gap-3">
                <span className="text-gold" aria-hidden>
                  ✦
                </span>
                Be part of a growing community of music lovers
              </li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
