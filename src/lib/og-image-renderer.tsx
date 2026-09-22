import type { RenderFunctionInput } from "astro-opengraph-images";
import React from "react";

/**
 * FloatJet Open Graph image renderer - "Desk Party" style
 *
 * Palette:
 * - Paper: #F4F1EA (background)
 * - Ink: #082F38 (text, outlines, sticker shadows)
 * - Sun: #FFD23F / Coral: #FF8A65 / Sky Light: #80CED7 (stickers)
 * Fonts (registered in astro.config.mjs): Bricolage Grotesque 700 (title), Figtree 700 (body)
 */
export async function floatjetRenderer({
  title,
  description,
}: RenderFunctionInput): Promise<React.ReactNode> {
  const cleanTitle = (title ?? "FloatJet").replace(/\s*\|\s*FloatJet$/, "").replace(/^FloatJet\s*\|\s*/, "");
  // Trim long descriptions at a word boundary
  const shortDescription =
    description && description.length > 120
      ? description.slice(0, 120).replace(/\s+\S*$/, "").replace(/[,.;:]$/, "") + "..."
      : description;
  const titleSize = cleanTitle.length > 70 ? "50px" : cleanTitle.length > 45 ? "58px" : "68px";

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        background: "#F4F1EA",
        padding: "48px",
        position: "relative",
        fontFamily: "Figtree",
      }}
    >
      {/* Sticker card */}
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#FFFFFF",
          border: "4px solid #082F38",
          borderRadius: "40px",
          boxShadow: "8px 9px 0 0 #082F38",
          padding: "52px 56px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column" }}>
          <h1
            style={{
              fontFamily: "Bricolage Grotesque",
              fontSize: titleSize,
              fontWeight: 700,
              color: "#082F38",
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              margin: 0,
              maxWidth: "92%",
            }}
          >
            {cleanTitle}
          </h1>

          {description && (
            <p
              style={{
                fontSize: "26px",
                fontWeight: 700,
                color: "#4A6166",
                lineHeight: 1.4,
                margin: 0,
                marginTop: "24px",
                maxWidth: "85%",
              }}
            >
              {shortDescription}
            </p>
          )}
        </div>

        {/* Footer */}
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <span style={{ fontFamily: "Bricolage Grotesque", fontSize: "34px", fontWeight: 700, color: "#082F38" }}>
            floatjet
          </span>
          <span
            style={{
              display: "flex",
              background: "#082F38",
              color: "#FFD23F",
              borderRadius: "999px",
              padding: "12px 26px",
              fontSize: "22px",
              fontWeight: 700,
            }}
          >
            Remote work tools, tested
          </span>
        </div>
      </div>

      {/* Round sticker */}
      <div
        style={{
          position: "absolute",
          top: "22px",
          right: "34px",
          width: "150px",
          height: "150px",
          borderRadius: "999px",
          background: "#FFD23F",
          border: "4px solid #082F38",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          transform: "rotate(6deg)",
          fontFamily: "Bricolage Grotesque",
          fontWeight: 700,
          fontSize: "24px",
          color: "#082F38",
          textAlign: "center",
          lineHeight: 1.1,
        }}
      >
        no fluff
      </div>

      {/* Coral dot accent */}
      <div
        style={{
          position: "absolute",
          bottom: "30px",
          left: "30px",
          width: "54px",
          height: "54px",
          borderRadius: "999px",
          background: "#FF8A65",
          border: "4px solid #082F38",
        }}
      />
    </div>
  );
}
