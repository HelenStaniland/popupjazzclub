import type { Metadata } from "next";
import Button from "@/components/Button";
import VenueDetails from "@/components/VenueDetails";
import { upcomingEvents } from "@/lib/events";
import { getNextEventShareMetadata } from "@/lib/social";

export function generateMetadata(): Metadata {
  return {
    title: "Events",
    description:
      "Upcoming Pop Up Jazz Club nights in Herne Hill — live music, local talent, and good company.",
    ...getNextEventShareMetadata(),
  };
}

export default function EventsPage() {
  return (
    <div>
      <section className="border-b border-border/40 bg-surface py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <p className="text-xs uppercase tracking-[0.3em] text-gold">Events</p>
          <h1 className="mt-4 font-serif text-4xl font-light text-cream sm:text-5xl">
            Upcoming nights
          </h1>
          <p className="mt-6 max-w-2xl text-cream-muted">
            Jazz nights in Herne Hill — live music, local performers, and a
            friendly crowd. Come as you are.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="rounded-sm border border-border bg-surface-elevated p-8 transition-colors hover:border-gold/30"
              >
                <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-3">
                      <time
                        className="text-sm uppercase tracking-widest text-gold"
                        dateTime={event.startsOn}
                      >
                        {event.date}
                      </time>
                      <span
                        className={`rounded-full px-3 py-0.5 text-xs uppercase tracking-wider ${
                          event.status === "On sale"
                            ? "bg-gold/15 text-gold"
                            : "bg-cream-muted/10 text-cream-muted"
                        }`}
                      >
                        {event.status}
                      </span>
                    </div>
                    <h2 className="mt-3 font-serif text-2xl font-light text-cream">
                      {event.title}
                    </h2>
                    <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream-muted">
                      {event.description}
                    </p>
                  </div>
                  <div className="shrink-0">
                    {event.ticketUrl ? (
                      <Button href={event.ticketUrl}>Buy Tickets</Button>
                    ) : (
                      <span
                        aria-disabled="true"
                        className="inline-flex cursor-not-allowed items-center justify-center rounded-sm border border-border bg-surface px-7 py-3.5 text-sm font-medium tracking-wide uppercase text-cream-muted/70"
                      >
                        Tickets not yet on sale
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-6 border-t border-border/40 pt-6">
                  <p className="text-xs uppercase tracking-[0.3em] text-gold">
                    Tickets
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-cream-muted">
                    Advance tickets: £8
                    <br />
                    £10 on the door (subject to availability)
                  </p>
                </div>
                <VenueDetails />
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-cream-muted">
            New to Pop Up Jazz Club?{" "}
            <a
              href="/join"
              className="text-gold transition-colors hover:text-gold-light"
            >
              Join the Club
            </a>{" "}
            and we&apos;ll let you know about the next night.
          </p>
        </div>
      </section>
    </div>
  );
}
