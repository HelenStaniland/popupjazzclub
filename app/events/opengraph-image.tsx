import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { getNextEvent } from "@/lib/events";
import { getNextEventImageAlt } from "@/lib/social";
import { popUpJazzClubVenue } from "@/lib/venue";

export const alt = getNextEventImageAlt();
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  const event = getNextEvent();
  const title = event?.title ?? "Live jazz, local voices and great company.";
  const date = event?.date ?? "Herne Hill, South London";
  const titleSize = title.length > 32 ? 40 : 48;
  const band = event?.band;
  const singers = event?.singers;
  const ticketNote = event?.ticketNote;

  const [serifRegular, serifSemiBold, sansMedium, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/DMSans-Medium.ttf")),
    readFile(join(process.cwd(), "public/gallery/SingerBandInteraction.png")),
  ]);

  const photoSrc = `data:image/png;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          position: "relative",
          overflow: "hidden",
          backgroundColor: "#28243a",
          color: "#f5f0e6",
        }}
      >
        <img
          src={photoSrc}
          alt=""
          width={1200}
          height={630}
          style={{
            position: "absolute",
            width: 1200,
            height: 630,
            objectFit: "cover",
            objectPosition: "center 62%",
          }}
        />
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 1200,
            padding: "40px 48px 32px",
            backgroundImage:
              "linear-gradient(to top, #1c1828 0%, rgba(28, 24, 40, 0.82) 62%, transparent 100%)",
          }}
        >
          <div
            style={{
              display: "flex",
              fontFamily: "DM Sans",
              fontSize: 16,
              letterSpacing: "0.28em",
              textTransform: "uppercase",
              color: "#ca84c4",
            }}
          >
            Pop Up Jazz Club
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontFamily: "Cormorant Garamond",
              fontSize: titleSize,
              fontWeight: 600,
              lineHeight: 1.1,
              color: "#f5f0e6",
            }}
          >
            {title}
          </div>
          <div
            style={{
              display: "flex",
              marginTop: 8,
              fontFamily: "DM Sans",
              fontSize: 18,
              letterSpacing: "0.06em",
              textTransform: "uppercase",
              color: "#d4cadf",
            }}
          >
            {date} · {popUpJazzClubVenue.title}
          </div>
          {ticketNote ? (
            <div
              style={{
                display: "flex",
                marginTop: 8,
                fontFamily: "DM Sans",
                fontSize: 18,
                color: "#ca84c4",
              }}
            >
              {ticketNote}
            </div>
          ) : null}
          {band ? (
            <div
              style={{
                display: "flex",
                marginTop: 14,
                fontFamily: "DM Sans",
                fontSize: 18,
                color: "#f5f0e6",
                width: 1104,
              }}
            >
              {band}
            </div>
          ) : null}
          {singers ? (
            <div
              style={{
                display: "flex",
                marginTop: 4,
                fontFamily: "DM Sans",
                fontSize: 18,
                lineHeight: 1.35,
                color: "#f5f0e6",
                width: 1104,
              }}
            >
              Singers: {singers}
            </div>
          ) : null}
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        {
          name: "Cormorant Garamond",
          data: serifRegular,
          weight: 400,
          style: "normal",
        },
        {
          name: "Cormorant Garamond",
          data: serifSemiBold,
          weight: 600,
          style: "normal",
        },
        {
          name: "DM Sans",
          data: sansMedium,
          weight: 500,
          style: "normal",
        },
      ],
    }
  );
}
