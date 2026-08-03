import { ImageResponse } from "next/og";
import { business } from "@/config/business";

export const alt = `${business.name} — Commercial Cleaning in Fayetteville, AR`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          padding: "80px",
          background: "#ffffff",
          color: "#171717",
          fontFamily: "Arial, sans-serif",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "24px",
            marginBottom: "40px",
          }}
        >
          <div
            style={{
              width: "72px",
              height: "72px",
              borderRadius: "16px",
              background: "#171717",
              color: "#ffffff",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "40px",
              fontWeight: 700,
            }}
          >
            CC
          </div>
          <div style={{ fontSize: "40px", fontWeight: 700 }}>{business.name}</div>
        </div>
        <div style={{ fontSize: "68px", fontWeight: 800, lineHeight: 1.1 }}>
          Dependable Commercial Cleaning in Fayetteville
        </div>
        <div style={{ fontSize: "32px", color: "#444444", marginTop: "32px" }}>
          After-hours office cleaning · Northwest Arkansas
        </div>
      </div>
    ),
    { ...size }
  );
}
