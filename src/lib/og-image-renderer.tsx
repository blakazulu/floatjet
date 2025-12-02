import type { RenderFunctionInput } from "astro-opengraph-images";
import React from "react";

/**
 * FloatJet branded Open Graph image renderer
 *
 * Brand Colors:
 * - Ocean Deep: #0F4C5C (primary background)
 * - Jet Stream: #38A3A5 (accent)
 * - Sky Light: #80CED7 (highlights)
 * - Sand: #E0FBFC (text)
 */
export async function floatjetRenderer({
  title,
  description,
}: RenderFunctionInput): Promise<React.ReactNode> {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        height: "100%",
        background: "linear-gradient(135deg, #0F4C5C 0%, #0a3540 100%)",
        padding: "60px",
        position: "relative",
      }}
    >
      {/* Decorative accent bar at top */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: "8px",
          background: "linear-gradient(90deg, #38A3A5 0%, #80CED7 100%)",
        }}
      />

      {/* Main content container */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          height: "100%",
        }}
      >
        {/* Title */}
        <h1
          style={{
            fontSize: title && title.length > 50 ? "52px" : "64px",
            fontWeight: 700,
            color: "#E0FBFC",
            lineHeight: 1.2,
            margin: 0,
            marginTop: "20px",
          }}
        >
          {title}
        </h1>

        {/* Description (if available) */}
        {description && (
          <p
            style={{
              fontSize: "28px",
              color: "#80CED7",
              lineHeight: 1.4,
              margin: 0,
              marginTop: "24px",
              maxWidth: "90%",
            }}
          >
            {description.length > 120 ? description.substring(0, 120) + "..." : description}
          </p>
        )}

        {/* Footer with branding */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: "auto",
          }}
        >
          {/* Logo/Brand */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "16px",
            }}
          >
            {/* FloatJet icon - stylized wave/jet */}
            <div
              style={{
                width: "48px",
                height: "48px",
                borderRadius: "12px",
                background: "linear-gradient(135deg, #38A3A5 0%, #80CED7 100%)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span style={{ fontSize: "28px", color: "#0F4C5C" }}>F</span>
            </div>
            <span
              style={{
                fontSize: "32px",
                fontWeight: 700,
                color: "#E0FBFC",
              }}
            >
              FloatJet.com
            </span>
          </div>

          {/* Tagline */}
          <span
            style={{
              fontSize: "20px",
              color: "#80CED7",
            }}
          >
            Remote Work Tools & Guides
          </span>
        </div>
      </div>

      {/* Decorative corner accent */}
      <div
        style={{
          position: "absolute",
          bottom: 0,
          right: 0,
          width: "200px",
          height: "200px",
          background:
            "radial-gradient(circle at bottom right, rgba(56, 163, 165, 0.2) 0%, transparent 70%)",
        }}
      />
    </div>
  );
}
