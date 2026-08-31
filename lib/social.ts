import type { Metadata } from "next";
import { getNextEvent, NEXT_EVENT_PATH } from "@/lib/events";
import { popUpJazzClubVenue } from "@/lib/venue";

const siteName = "Pop Up Jazz Club";

const fallbackTitle = "Pop Up Jazz Club | Herne Hill Jazz Nights";
const fallbackDescription =
  "A community jazz night in Herne Hill — local singers, musicians, friends and music lovers together.";

export function getHomeShareMetadata(): Pick<Metadata, "openGraph" | "twitter"> {
  return {
    openGraph: {
      title: fallbackTitle,
      description: fallbackDescription,
      url: "/",
      siteName,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: fallbackTitle,
      description: fallbackDescription,
    },
  };
}

export function getNextEventShareMetadata(): Pick<
  Metadata,
  "openGraph" | "twitter"
> {
  const event = getNextEvent();

  if (!event) {
    return {
      openGraph: {
        title: fallbackTitle,
        description: fallbackDescription,
        url: NEXT_EVENT_PATH,
        siteName,
        locale: "en_GB",
        type: "website",
      },
      twitter: {
        card: "summary_large_image",
        title: fallbackTitle,
        description: fallbackDescription,
      },
    };
  }

  const title = `${event.title} — ${event.date}`;
  const ticketLine =
    event.ticketNote ??
    (event.status === "On sale" ? "Tickets on sale now." : "Tickets coming soon.");
  const description = `${ticketLine} ${popUpJazzClubVenue.title}. Live vocal jazz with local singers and the house band.`;

  return {
    openGraph: {
      title,
      description,
      url: NEXT_EVENT_PATH,
      siteName,
      locale: "en_GB",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export function getNextEventImageAlt(): string {
  const event = getNextEvent();

  if (!event) {
    return "Pop Up Jazz Club in Herne Hill";
  }

  return `${event.title} — ${event.date} at ${popUpJazzClubVenue.title}`;
}
