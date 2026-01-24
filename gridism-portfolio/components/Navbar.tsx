"use client";

import Link from "next/link";
import Image from "next/image";

const Navbar = () => {
  const navLinks = [
    { href: "/", label: "Home", italic: false },
    { href: "/works", label: "Works", italic: false },
    { href: "/about", label: "About", italic: false },
    { href: "/connect", label: "Connect", italic: true },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40">
      <nav className="w-full max-w-[1440px] mx-auto relative h-[108px] px-[70px]">
        {/* Logo */}
        <Link 
          href="/" 
          className="absolute top-[57px] left-[70px]"
        >
          <Image
            src="/images/gridism-logo.svg"
            alt="Gridism"
            width={44}
            height={44}
          />
        </Link>

        {/* Navigation Links */}
        <div className="absolute top-[60px] right-[70px] flex items-center">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-[20px] leading-[24px] text-white transition-opacity hover:opacity-80 ${
                link.italic ? "italic" : ""
              } ${index !== 0 ? "ml-[84px]" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;