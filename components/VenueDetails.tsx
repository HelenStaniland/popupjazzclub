import { popUpJazzClubVenue } from "@/lib/venue";

export default function VenueDetails() {
  const { title, addressLines, directionsUrl, mapEmbedUrl } = popUpJazzClubVenue;

  return (
    <div className="border-t border-border/40 pt-6">
      <p className="text-xs uppercase tracking-[0.3em] text-gold">Venue</p>
      <h3 className="mt-3 font-serif text-xl font-light text-cream">{title}</h3>
      <address className="mt-3 space-y-0.5 text-sm not-italic leading-relaxed text-cream-muted">
        {addressLines.map((line) => (
          <span key={line} className="block">
            {line}
          </span>
        ))}
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
      <div className="mt-4 max-w-md overflow-hidden rounded-sm border border-border bg-background">
        <iframe
          title="Map showing Station Hall, Herne Hill"
          src={mapEmbedUrl}
          className="h-44 w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        />
      </div>
    </div>
  );
}
