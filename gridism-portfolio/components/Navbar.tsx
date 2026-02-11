"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { useColorDetection } from "@/hooks/useColorDetection";

const Navbar = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  
  // Detect background at navbar position (top of screen, y=100px)
  const isDark = useColorDetection(100);

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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-1000 ease-[cubic-bezier(0.45,0,0.15,1)]`}
      style={{
        transform: isVisible ? "translateY(0)" : "translateY(-100%)",
      }}
    >
      <nav className="relative w-full max-w-[1440px] mx-auto px-[2%] py-6 flex items-center justify-between">
        <Link href="/" className="relative z-50">
          <img
            src="/images/gridism-logo.svg"
            alt="Gridism"
            width={100}
            height={100}
            className="w-[100px] h-auto transition-all duration-200"
            style={{
              filter: isDark ? "invert(1)" : "invert(0)",
            }}
          />
        </Link>

        <ul className="flex items-center gap-8 lg:gap-12">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`relative text-[14px] lg:text-[16px] leading-[20px] transition-all duration-200 hover:opacity-100 group ${
                  link.italic ? "italic" : ""
                }`}
                style={{
                  color: isDark ? "#FFFFFF" : "#000000",
                }}
              >
                {link.label}
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