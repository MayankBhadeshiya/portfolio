import { ImageResponse } from "next/og";
import { colors } from "@/constants/colors";
import { profile } from "@/data/profile";

// Favicon: the first initial on an ink tile, with a mobile-accent underline.
export const size = { width: 64, height: 64 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 14,
        background: colors.ink,
        color: colors.white,
        fontSize: 40,
        fontWeight: 800,
        letterSpacing: -2,
      }}
    >
      {profile.firstName[0]}
      <div
        style={{
          width: 26,
          height: 5,
          marginTop: 2,
          borderRadius: 3,
          background: colors.mobile,
        }}
      />
    </div>,
    size,
  );
}
