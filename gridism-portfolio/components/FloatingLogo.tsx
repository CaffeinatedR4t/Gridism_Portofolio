"use client";

import { useState, useEffect } from "react";
import { useColorDetection } from "@/hooks/useColorDetection";

const FloatingLogo = () => {
  const [centerY, setCenterY] = useState(500); // Default fallback

  useEffect(() => {
    // Set actual center Y position after component mounts
    setCenterY(window.innerHeight / 2);

    const handleResize = () => {
      setCenterY(window.innerHeight / 2);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Detect background at floating logo position (center of viewport)
  const isDark = useColorDetection(centerY);

  return (
    <div
      className="fixed z-30 pointer-events-none"
      style={{
        left: "0px",
        top: "50%",
        transform: "translateY(-50%) rotate(-90deg)",
        transformOrigin: "center center",
      }}
    >
      <img
        src="/images/gridism-logo-tilted.svg"
        alt=""
        className="select-none h-auto transition-all duration-200"
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