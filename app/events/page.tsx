import type { Metadata } from "next";
import Button from "@/components/Button";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Upcoming Pop Up Jazz Club nights — live music, local talent, and a relaxed evening with friends.",
};

const upcomingEvents = [
  {
    date: "Friday 14 June",
    title: "Standards & Swing",
    venue: "The Old Village Hall, Surrey",
    description:
      "An evening of jazz standards with local singers and musicians. Bring friends, grab a table, and enjoy the show.",
    status: "On sale",
  },
  {
    date: "Saturday 28 June",
    title: "Vocal Jazz Night",
    venue: "Community Hall, Sussex",
    description:
      "Three local vocalists and a house band — come along to support them and meet other music lovers in the room.",
    status: "On sale",
  },
  {
    date: "Friday 12 July",
    title: "Summer Jazz Social",
    venue: "Location TBC",
    description:
      "Our summer get-together — live music, good chat, and a relaxed night out. Join the mailing list to hear when tickets go on sale.",
    status: "Coming soon",
  },
];

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
            Each event is a one-off social jazz night — live music, local
            performers, and a room full of friends and neighbours. Come as you
            are.
          </p>
        </div>
      </section>

      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="space-y-6">
            {upcomingEvents.map((event) => (
              <article
                key={event.title}
                className="group flex flex-col gap-6 rounded-sm border border-border bg-surface-elevated p-8 transition-colors hover:border-gold/30 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <time className="text-sm uppercase tracking-widest text-gold">
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
                  <p className="mt-1 text-sm text-gold-light">{event.venue}</p>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-cream-muted">
                    {event.description}
                  </p>
                </div>
                <div className="shrink-0">
                  {event.status === "On sale" ? (
                    <Button href="mailto:hello@popupjazzclub.com?subject=Ticket%20enquiry">
                      Book Tickets
                    </Button>
                  ) : (
                    <Button href="/join" variant="outline">
                      Join the Club
                    </Button>
                  )}
                </div>
              </article>
            ))}
          </div>

          <p className="mt-12 text-center text-sm text-cream-muted">
            Want to hear about the next one?{" "}
            <a
              href="/join"
              className="text-gold transition-colors hover:text-gold-light"
            >
              Join the Club
            </a>{" "}
            and we&apos;ll keep you posted.
          </p>
        </div>
      </section>
    </div>
  );
}
