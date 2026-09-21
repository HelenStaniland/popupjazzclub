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
  time?: string;
};

export const upcomingEvents: UpcomingEvent[] = [
  {
    date: "Saturday 10 October 2026",
    startsOn: "2026-10-10",
    title: "Pop Up Jazz at the Herne Hill Music Festival",
    description:
      "Pop Up Jazz Club joins the Herne Hill Music Festival for an evening of live jazz, local voices and good company. There is no bar at Station Hall, so bring your own wine, beer or other drinks and we’ll provide the glasses, ice, ice buckets, bottle openers and a speakeasy atmosphere!",
    status: "On sale",
    ticketUrl: "https://buytickets.at/hernehillmusicfestival/2353289",
    time: "7:30pm - 11:00pm",
    ticketNote: "Tickets £8",
  },
  {
    date: "Friday 18 December 2026",
    startsOn: "2026-12-18",
    title: "Christmas Vocal Jazz Night",
    description:
      "An open, welcoming evening of vocal jazz — local singers, the house band and candlelit tables, with some Christmas classics in the mix; there’s no bar, so bring your own wine, beer or other drinks and we’ll provide the glasses, ice, ice buckets, bottle openers and a speakeasy atmosphere!",
    status: "On sale",
    ticketUrl: "https://buytickets.at/popupjazzclub/2430157",
    time: "7:30pm - 10:30pm",
    ticketNote: "Tickets £8",
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
