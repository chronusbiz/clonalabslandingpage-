import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const runtime = "edge";
export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#05060a",
          color: "#f5f6f8",
          padding: 72,
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            height: 6,
            background: "linear-gradient(90deg,#00B2FF,#1877F2,#833AB4,#E1306C,#F77737)",
          }}
        />
        <div
          style={{
            fontSize: 28,
            letterSpacing: 2,
            fontWeight: 700,
            backgroundImage: "linear-gradient(90deg,#00B2FF,#1877F2,#E1306C)",
            backgroundClip: "text",
            color: "transparent",
          }}
        >
          {site.wordmark}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ fontSize: 60, lineHeight: 1.1, maxWidth: 960, fontWeight: 650 }}>
            Sell AI inquiry handling under your own brand.
          </div>
          <div style={{ fontSize: 26, color: "#9aa3b5", maxWidth: 860 }}>
            Your logo, your domain, your client accounts. We run the platform.
          </div>
        </div>
        <div style={{ fontSize: 22, color: "#1877F2" }}>{site.cta.label}</div>
      </div>
    ),
    { ...size },
  );
}
