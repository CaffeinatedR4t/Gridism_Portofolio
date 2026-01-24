"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";

const Navbar = () => {
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/works", label: "Works" },
    { href: "/about", label: "About" },
    { href: "/connect", label: "Connect" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-40 px-8 py-6">
      <nav className="max-w-[1920px] mx-auto flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="relative z-50">
          <Image
            src="/images/gridism-logo. svg"
            alt="Gridism"
            width={120}
            height={32}
            className="brightness-0 invert" 
          />
        </Link>

        {/* Navigation Links */}
        <ul className="flex items-center gap-10">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={`text-sm font-light tracking-wide transition-colors hover:text-white ${
                  pathname === link. href
                    ? "text-white"
                    : "text-neutral-400"
                }`}
              >
                {link. label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;