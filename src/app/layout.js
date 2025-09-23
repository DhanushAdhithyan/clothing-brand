// src/app/layout.js

import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Aura - Minimalist Fashion",
  description: "Shop the latest minimalist and Gen Z fashion.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body className="min-h-screen flex flex-col bg-white text-gray-900">
        <Navbar />
        <main className="flex-grow container mx-auto px-4 py-8 md:py-12">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
