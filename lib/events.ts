export type EventStatus = "On sale" | "Upcoming";

export type UpcomingEvent = {
  date: string;
  startsOn: string;
  title: string;
  description: string;
  status: EventStatus;
  ticketUrl?: string;
  band?: string;
  singers?: string;
  ticketNote?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "Friday 11 September 2026",
    startsOn: "2026-09-11",
    title: "Vocal Jazz Night",
    description:
      "An open, welcoming evening of vocal jazz — local singers, the house band and candlelit tables; there’s no bar, so bring your own wine, beer or other drinks and we’ll provide the glasses, ice, ice buckets, bottle openers and, naturally, a strategically placed bowl of crisps or two.",
    status: "On sale",
    ticketUrl: "https://buytickets.at/popupjazzclub/2254280",
    band: "House Band: Paul - Keyboards, Helen - Double Bass, Vince - Drums, and Guest violin - Ariella",
    singers:
      "Suzie, Lottie, Nicola, Jeremy, Candida, Louisa, Trish, Sarah D, Helen, Liam, Andrew, Steve, Sarah B, Philip, Andrea, John",
    ticketNote: "Tickets £8 advance",
  },
  {
    date: "Saturday 10 October 2026",
    startsOn: "2026-10-10",
    title: "Pop Up Jazz at the Herne Hill Music Festival",
    description:
      "Pop Up Jazz Club joins the Herne Hill Music Festival for an evening of live jazz, local voices and good company.",
    status: "Upcoming",
  },
];

export const NEXT_EVENT_PATH = "/events";

function todayInLondon(): string {
  return new Intl.DateTimeFormat("en-CA", {
    timeZone: "Europe/London",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
  }).format(new Date());
}

export function getNextEvent(): UpcomingEvent | undefined {
  const today = todayInLondon();
  return upcomingEvents.find((event) => event.startsOn >= today);
}
