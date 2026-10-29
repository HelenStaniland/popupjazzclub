export type EventStatus = "On sale" | "Upcoming" | "Sold out";

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
  time?: string;
  callout?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "Friday 18 December 2026",
    startsOn: "2026-12-18",
    title: "Christmas Vocal Jazz Night",
    description:
      "An open, welcoming evening of vocal jazz — local singers, the house band and candlelit tables, with some Christmas classics in the mix; there’s no bar, so bring your own wine, beer or other drinks and we’ll provide the glasses, ice, ice buckets, bottle openers and a speakeasy atmosphere!",
    status: "Sold out",
    time: "7:30pm - 10:30pm",
    ticketNote: "Tickets £8 (excluding booking fee)",
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
