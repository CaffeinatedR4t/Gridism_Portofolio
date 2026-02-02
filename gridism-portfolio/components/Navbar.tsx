"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show navbar when scrolling up, hide when scrolling down
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
    { href: "/works", label: "Works", italic: false },
    { href: "/about", label: "About", italic: false },
    { href: "/connect", label: "Connect", italic: true },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      {/* Glass effect background */}
      <div className="absolute inset-0 bg-black/30 backdrop-blur-md border-b border-white/10" />

      <nav className="relative w-full max-w-[1440px] mx-auto px-[4.86%] py-6 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <img
            src="/images/gridism-logo.svg"
            alt="Gridism"
            width={44}
            height={44}
            className="w-[44px] h-auto invert"
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-[16px] lg:text-[20px] leading-[24px] text-white transition-opacity hover:opacity-70 ${
                  link.italic ? "italic" : ""
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;