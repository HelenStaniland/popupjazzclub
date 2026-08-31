import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { popUpJazzClubVenue } from "@/lib/venue";

export const alt = "Pop Up Jazz Club — live jazz, local voices and great company in Herne Hill";
export const size = {
  width: 1200,
  height: 630,
};
export const contentType = "image/png";
export const runtime = "nodejs";

export default async function Image() {
  const [serifRegular, serifSemiBold, sansMedium, photo] = await Promise.all([
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-Regular.ttf")),
    readFile(join(process.cwd(), "assets/fonts/CormorantGaramond-SemiBold.ttf")),
    readFile(join(process.cwd(), "assets/fonts/DMSans-Medium.ttf")),
    readFile(join(process.cwd(), "public/gallery/Singer3.jpg")),
  ]);

  const photoSrc = `data:image/jpeg;base64,${photo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          backgroundColor: "#28243a",
          color: "#f5f0e6",
        }}
      >
        <div
          style={{
            display: "flex",
            width: 480,
            height: 630,
            overflow: "hidden",
          }}
        >
          <img
            src={photoSrc}
            alt=""
            width={480}
            height={630}
            style={{
              width: 480,
              height: 630,
              objectFit: "cover",
              objectPosition: "center 18%",
            }}
          />
        </div>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: 720,
            height: 630,
            padding: "64px 72px",
            backgroundColor: "#322d44",
          }}
        >
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 20,
                letterSpacing: "0.28em",
                textTransform: "uppercase",
                color: "#ac6298",
              }}
            >
              Herne Hill, South London
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 28,
                fontFamily: "Cormorant Garamond",
                fontSize: 58,
                fontWeight: 600,
                lineHeight: 1.12,
                color: "#f5f0e6",
                width: 576,
              }}
            >
              Pop Up Jazz Club
            </div>
            <div
              style={{
                display: "flex",
                marginTop: 24,
                fontFamily: "Cormorant Garamond",
                fontSize: 32,
                fontWeight: 400,
                lineHeight: 1.3,
                color: "#d4cadf",
                width: 576,
              }}
            >
              Live jazz, local voices and great company.
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div
              style={{
                display: "flex",
                width: 48,
                height: 2,
                backgroundColor: "#ac6298",
                marginBottom: 20,
              }}
            />
            <div
              style={{
                display: "flex",
                fontFamily: "DM Sans",
                fontSize: 22,
                color: "#d4cadf",
              }}
            >
              {popUpJazzClubVenue.title}
            </div>
          </div>
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
