import { popUpJazzClubVenue } from "@/lib/venue";

export default function VenueDetails() {
  const { addressLines, directionsUrl } = popUpJazzClubVenue;

  return (
    <div className="border-t border-border/40 pt-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Venue</p>
      <address className="mt-3 text-sm not-italic leading-relaxed text-cream-muted">
        {addressLines[0]}
      </address>
      <p className="mt-4">
        <a
          href={directionsUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-gold transition-colors hover:text-gold-light"
        >
          Open directions in Google Maps ↗
        </a>
      </p>
    </div>
  );
}
