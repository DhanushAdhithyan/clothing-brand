// src/components/Footer.js

import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-gray-200 py-8 mt-12">
      <div className="container mx-auto px-6 text-center text-sm">
        <div className="flex flex-col md:flex-row justify-center md:space-x-8 space-y-2 md:space-y-0 mb-4">
          <Link href="/about" className="hover:text-gray-500 transition-colors">
            About Us
          </Link>
          <Link
            href="/contact"
            className="hover:text-gray-500 transition-colors"
          >
            Contact
          </Link>
          <Link
            href="/returns"
            className="hover:text-gray-500 transition-colors"
          >
            Returns
          </Link>
          <Link
            href="/privacy"
            className="hover:text-gray-500 transition-colors"
          >
            Privacy Policy
          </Link>
        </div>
        <p className="text-gray-500">
          &copy; {new Date().getFullYear()} Aura. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
