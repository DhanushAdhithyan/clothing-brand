"use client";
import Link from "next/link";
import { useState } from "react";
import { ShoppingBag, Search } from "lucide-react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: "WOMAN", href: "/products?category=woman" },
    { name: "MAN", href: "/products?category=man" },
    { name: "KIDS", href: "/products?category=kids" },
    { name: "ACCESSORIES", href: "/products?category=accessories" },
  ];

  return (
    <header className="border-b border-gray-200">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 md:px-0">
        {/* Left links */}
        <nav className="hidden md:flex space-x-8 text-sm tracking-widest">
          {navLinks.slice(0, 2).map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="hover:opacity-60 transition"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Logo */}
        <div className="text-2xl font-light tracking-[0.3em]">
          <Link href="/">A U R A</Link>
        </div>

        {/* Right links + icons */}
        <div className="flex items-center space-x-6">
          <nav className="hidden md:flex space-x-8 text-sm tracking-widest">
            {navLinks.slice(2).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="hover:opacity-60 transition"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <button className="hover:opacity-60 transition">
            <Search size={20} />
          </button>
          <button className="hover:opacity-60 transition">
            <ShoppingBag size={20} />
          </button>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden hover:opacity-60 transition"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden border-t border-gray-200 py-4 space-y-4 text-center text-sm tracking-widest">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className="block hover:opacity-60 transition"
              onClick={() => setMenuOpen(false)}
            >
              {link.name}
            </Link>
          ))}
        </div>
      )}
    </header>
  );
}
