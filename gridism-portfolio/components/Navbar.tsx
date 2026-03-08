"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const navLinks = [
    { href: "/", label: "Home", italic: false },
    { href: "/work", label: "Work", italic: false },
    { href: "/about", label: "About", italic: false },
    { href: "/connect", label: "Connect", italic: true },
  ];

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.45,0,0.15,1)]"
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
        /* mix-blend-mode: difference makes white elements invert
           against whatever background is beneath — no color detection needed */
        mixBlendMode: "difference",
      }}
    >
      <nav className="relative w-full max-w-[1440px] mx-auto px-[2%] py-6 flex items-center justify-between">
        {/* Logo — always white, difference blend inverts it on light bg */}
        <Link href="/" className="relative z-50">
          <img
            src="/images/gridism-logo.svg"
            alt="Gridism"
            width={100}
            height={100}
            className="w-[100px] h-auto"
            style={{
              filter: "invert(1)", /* white in difference mode */
            }}
          />
        </Link>

        {/* Nav links — always white, difference blend handles contrast */}
        <ul className="flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[14px] lg:text-[16px] leading-[20px] transition-opacity duration-200 hover:opacity-70 group ${
                  link.italic ? "italic" : ""
                }`}
                style={{
                  color: "#FFFFFF", /* white + difference = auto contrast */
                }}
              >
                {link.label}
                <span
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"
                  style={{ backgroundColor: "#FFFFFF" }}
                />
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;