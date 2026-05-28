import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Web, Smart Home, Drony & HW servis`;
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
          justifyContent: "center",
          padding: 80,
          background: "linear-gradient(135deg, #07090d 0%, #0f172a 50%, #134e4a 100%)",
          color: "#f4f4f5",
          fontFamily: "system-ui, sans-serif",
        }}
      >
        <div style={{ fontSize: 28, color: "#2dd4bf", marginBottom: 16 }}>
          matyas.online
        </div>
        <div style={{ fontSize: 64, fontWeight: 700, lineHeight: 1.1, maxWidth: 900 }}>
          {profile.name}
        </div>
        <div style={{ fontSize: 28, color: "#a1a1aa", marginTop: 24, maxWidth: 800, lineHeight: 1.4 }}>
          Web & SEO · Smart Home · Drony 4K · PC & iPhone servis
        </div>
        <div style={{ fontSize: 22, color: "#71717a", marginTop: 32 }}>
          Česká republika
        </div>
      </div>
    ),
    { ...size },
  );
}
