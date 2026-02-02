"use client";

import { useEffect, useState } from "react";

const FloatingLogo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        left: "70px",
        top: "35%",
        transform: `translateY(${scrollY * 0.2}px) rotate(-90deg)`,
        transformOrigin: "center center",
      }}
    >
      {/* Using img tag to avoid Next.js Image optimization issues with SVG */}
      <img
        src="/images/gridism-logo-tilted.svg"
        alt=""
        className="select-none h-auto"
        aria-hidden="true"
        style={{
          width: "124px",
          mixBlendMode: "difference",
          filter: "invert(1)",
        }}
      />
    </div>
  );
};

export default FloatingLogo;