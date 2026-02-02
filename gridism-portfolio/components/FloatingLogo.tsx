"use client";

import { useBackgroundDetection } from "@/hooks/useBackgroundDetection";

const FloatingLogo = () => {
  const isDark = useBackgroundDetection();

  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        left: "25px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "center center",
      }}
    >
      {/* Using img tag to avoid Next.js Image optimization issues with SVG */}
      <img
        src="/images/gridism-logo-tilted.svg"
        alt=""
        className="select-none h-auto transition-all duration-500 ease-in-out"
        aria-hidden="true"
        style={{
          width: "124px",
          filter: isDark ? "invert(1)" : "invert(0)",
        }}
      />
    </div>
  );
};

export default FloatingLogo;