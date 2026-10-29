import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Clonalabs — White-label AI inquiry handling for agencies.";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// Canada-flag palette (mirrors the CSS tokens in globals.css).
const ACCENT = "#C8102E";
const ACCENT_LIGHT = "#F87171";

const proof = [
  { value: "3", label: "Channels, one inbox" },
  { value: "$0", label: "Per-seat fees" },
  { value: "~3 steps", label: "To go live" },
];

export default async function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          background: `radial-gradient(circle at 20% 20%, rgba(200,16,46,0.38) 0%, transparent 45%), radial-gradient(circle at 80% 80%, rgba(200,16,46,0.22) 0%, transparent 50%), #000000`,
          fontFamily: "system-ui, -apple-system, Segoe UI, Roboto, sans-serif",
          color: "white",
          position: "relative",
        }}
      >
        {/* Top bar: Brand */}
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "flex",
              fontSize: 34,
              fontWeight: 900,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
          >
            Clona
            <span style={{ color: ACCENT_LIGHT }}>labs</span>
          </div>
        </div>

        {/* Center: Headline */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              fontSize: 16,
              textTransform: "uppercase",
              letterSpacing: "0.25em",
              color: ACCENT_LIGHT,
              fontWeight: 600,
            }}
          >
            White-label for agencies
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
          >
            Sell AI inquiry handling
          </div>
          <div
            style={{
              fontSize: 80,
              fontWeight: 900,
              lineHeight: 1.02,
              letterSpacing: "-0.03em",
              color: ACCENT_LIGHT,
            }}
          >
            under your own brand.
          </div>
        </div>

        {/* Bottom: Proof strip */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            paddingTop: "32px",
            borderTop: "1px solid rgba(255,255,255,0.12)",
          }}
        >
          <div style={{ display: "flex", gap: "48px" }}>
            {proof.map((p) => (
              <div key={p.label} style={{ display: "flex", flexDirection: "column" }}>
                <div style={{ fontSize: 28, fontWeight: 800, color: "white" }}>
                  {p.value}
                </div>
                <div
                  style={{
                    fontSize: 12,
                    color: "rgba(255,255,255,0.5)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  {p.label}
                </div>
              </div>
            ))}
          </div>
          <div
            style={{
              fontSize: 14,
              color: "rgba(255,255,255,0.5)",
              letterSpacing: "0.1em",
            }}
          >
            clonalabs.ca · Powered by Clonvo
          </div>
        </div>

        {/* Accent bar */}
        <div
          style={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: 10,
            background: ACCENT,
          }}
        />
      </div>
    ),
    { ...size }
  );
}
