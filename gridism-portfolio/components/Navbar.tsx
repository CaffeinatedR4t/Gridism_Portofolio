"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useBackgroundDetection } from "@/hooks/useBackgroundDetection";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const isDark = useBackgroundDetection();

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.45,0,0.15,1)]`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav className="relative w-full max-w-[1440px] mx-auto px-[2%] py-6 flex items-center justify-between">
        {/* Logo - Auto color inversion based on background */}
        <Link href="/" className="relative z-50">
          <img
            src="/images/gridism-logo.svg"
            alt="Gridism"
            width={100}
            height={100}
            className="w-[100px] h-auto transition-all duration-500 ease-in-out"
            style={{
              filter: isDark ? "invert(1)" : "invert(0)",
            }}
          />
        </Link>

        {/* Navigation Links - Auto color based on background */}
        <ul className="flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[14px] lg:text-[16px] leading-[20px] transition-all duration-500 ease-in-out hover:opacity-100 group ${
                  link.italic ? "italic" : ""
                }`}
                style={{
                  color: isDark ? "#FFFFFF" : "#000000",
                }}
              >
                {link.label}
                {/* Thicker Center-Expand Underline - Color matches text */}
                <span 
                  className="absolute left-1/2 bottom-0 w-0 h-[2px] transition-all duration-300 ease-out group-hover:w-full group-hover:left-0"
                  style={{
                    backgroundColor: isDark ? "#FFFFFF" : "#000000",
                  }}
                ></span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;