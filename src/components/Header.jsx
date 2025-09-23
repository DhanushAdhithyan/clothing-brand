"use client";

import { useState } from "react";

// --- Icons ---
const SearchIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
    />
  </svg>
);

const UserIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 18.75a7.5 7.5 0 0114.998 0H4.501z"
    />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.803l1.5.094a.75.75 0 01.761.646l.994 10.867a.75.75 0 01-.762.723H2.883a.75.75 0 01-.762-.723l.994-10.867a.75.75 0 01.761-.646l1.5-.094m5.151 6.541a.75.75 0 10-1.06-1.06 1.5 1.5 0 012.12 0 .75.75 0 001.06-1.06 3 3 0 00-4.242 0 .75.75 0 001.06 1.06z"
    />
  </svg>
);

const MobileMenuIcon = ({ isOpen }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="none"
    viewBox="0 0 24 24"
    strokeWidth={1.5}
    stroke="currentColor"
    className="w-6 h-6"
  >
    {isOpen ? (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M6 18L18 6M6 6l12 12"
      />
    ) : (
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
      />
    )}
  </svg>
);

const Header = ({ navigate }) => {
  // The navigate prop is received here
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Helper to handle navigation and close the mobile menu
  const handleNavigation = (view) => {
    navigate(view);
    setIsMobileMenuOpen(false); // Close menu on navigation
  };

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between p-4 sm:px-8">
        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={toggleMobileMenu}
            className="focus:outline-none p-2 rounded-md"
          >
            <MobileMenuIcon isOpen={isMobileMenuOpen} />
          </button>
        </div>

        {/* Logo/Brand Name */}
        <div className="flex-grow text-center sm:flex-none">
          <div
            className="text-xl sm:text-2xl font-bold tracking-wider uppercase cursor-pointer"
            onClick={() => handleNavigation("home")}
          >
            Your Brandddddddddd
          </div>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden sm:flex flex-grow justify-center space-x-8 text-sm">
          <div
            onClick={() => handleNavigation("products")}
            className="cursor-pointer hover:underline underline-offset-4 decoration-2"
          >
            Shop
          </div>
          <a
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Men
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Women
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Kids
          </a>
          <a
            href="#"
            className="hover:underline underline-offset-4 decoration-2"
          >
            Sale
          </a>
        </div>

        {/* Icons */}
        <div className="flex items-center space-x-4">
          <button aria-label="Search" className="hidden sm:block">
            <SearchIcon />
          </button>
          <button aria-label="Account" className="hidden sm:block">
            <UserIcon />
          </button>
          <button aria-label="Shopping Bag">
            <ShoppingBagIcon />
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white z-40 transform transition-transform duration-300 ease-in-out ${
          isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
        } sm:hidden`}
      >
        <div className="p-4 pt-20 flex flex-col items-center space-y-4 text-lg">
          <div
            onClick={() => handleNavigation("products")}
            className="cursor-pointer hover:underline decoration-2"
          >
            Shop
          </div>
          <a href="#" className="hover:underline decoration-2">
            Men
          </a>
          <a href="#" className="hover:underline decoration-2">
            Women
          </a>
          <a href="#" className="hover:underline decoration-2">
            Kids
          </a>
          <a href="#" className="hover:underline decoration-2">
            Sale
          </a>
          <button className="flex items-center space-x-2">
            <SearchIcon className="w-5 h-5" />
            <span>Search</span>
          </button>
          <button className="flex items-center space-x-2">
            <UserIcon className="w-5 h-5" />
            <span>Account</span>
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;
