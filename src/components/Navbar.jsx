"use client";

import Link from "next/link";
import { useState } from "react";
import { useCart } from "@/context/CartContext";
import { FaShoppingCart, FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const { cart } = useCart();
  const cartCount = cart.length;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md py-4 px-6 sticky top-0 z-50">
      <div className="flex justify-between items-center">
        {/* Logo */}
        <Link href="/" className="text-2xl font-bold">
          Aura
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex space-x-6">
          <Link href="/">Home</Link>
          <Link href="/products">Products</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>

        {/* Right Side: Cart + Hamburger */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link href="/cart" className="relative">
            <FaShoppingCart className="text-2xl" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {cartCount}
              </span>
            )}
          </Link>

          {/* Hamburger */}
          <button
            className="md:hidden text-2xl"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {/* Mobile Nav with Animation */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden mt-4 flex flex-col space-y-4 bg-gray-50 p-4 rounded-lg shadow"
          >
            <Link href="/" onClick={() => setMenuOpen(false)}>
              Home
            </Link>
            <Link href="/products" onClick={() => setMenuOpen(false)}>
              Products
            </Link>
            <Link href="/about" onClick={() => setMenuOpen(false)}>
              About
            </Link>
            <Link href="/contact" onClick={() => setMenuOpen(false)}>
              Contact
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
