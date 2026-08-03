import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const alt = `${business.name} — Commercial Cleaning in Fayetteville, AR`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  const logo = await readFile(
    join(process.cwd(), "public", "complete-cleaners-logo.png")
  );
  const logoSrc = `data:image/png;base64,${logo.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          alignItems: "center",
          gap: "64px",
          padding: "80px",
          background: "#ffffff",
          color: "#171717",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            flex: 1,
          }}
        >
          <div style={{ fontSize: "64px", fontWeight: 800, lineHeight: 1.1 }}>
            Dependable Commercial Cleaning in Fayetteville
          </div>
          <div style={{ fontSize: "30px", color: "#444444", marginTop: "32px" }}>
            After-hours office cleaning · Northwest Arkansas
          </div>
          <div
            style={{
              fontSize: "26px",
              color: "#5f7060",
              marginTop: "28px",
              fontWeight: 700,
            }}
          >
            completecleanersnwa.com
          </div>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={logoSrc} alt="" width={380} height={380} />
      </div>
    ),
    { ...size }
  );
}
