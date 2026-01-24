"use client";

import { useEffect, useState } from "react";
import Image from "next/image";

const FloatingLogo = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window. scrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      className="fixed right-[5%] top-[20%] z-30 pointer-events-none"
      style={{
        transform: `translateY(${scrollY * 0.3}px) rotate(15deg)`,
      }}
    >
      <Image
        src="/images/gridism-logo-tilted.svg"
        alt=""
        width={500}
        height={120}
        className="opacity-20 select-none"
        aria-hidden="true"
      />
    </div>
  );
};

export default FloatingLogo;