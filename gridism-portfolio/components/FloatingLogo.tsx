"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

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
      className="fixed z-30 pointer-events-none left-1/2"
      style={{
        top: "373px",
        transform: `translateX(-50%) translateY(${scrollY * 0.3}px)`,
      }}
    >
      <Image
        src="/images/gridism-logo-tilted.svg"
        alt=""
        width={866}
        height={249}
        className="select-none"
        aria-hidden="true"
        style={{ mixBlendMode: "difference" }}
      />
    </div>
  );
};

export default FloatingLogo;