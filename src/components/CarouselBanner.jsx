// src/components/CarouselBanner.js
"use client";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function CarouselBanner({ slides = [] }) {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);
  console.log(slides);
  return (
    <div className="relative w-full h-[500px] lg:h-[700px] overflow-hidden">
      {slides.map((slide, idx) => (
        <div
          key={idx}
          className={`absolute inset-0 transition-opacity duration-1000 ${
            idx === current ? "opacity-100" : "opacity-0"
          }`}
        >
          {/* Background image wrapper */}
          <div className="relative w-full h-full">
            <Image
              src={slide.image}
              alt={slide.title || `Slide ${idx}`}
              fill
              sizes="100vw"
              className="object-cover"
              priority={idx === 0}
            />
          </div>

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/50"></div>

          {/* Foreground text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
            <h2 className="text-3xl lg:text-5xl font-bold text-white mb-4 drop-shadow-lg">
              {slide.title}
            </h2>
            <p className="text-lg lg:text-xl text-gray-200 drop-shadow-md max-w-2xl">
              {slide.subtitle}
            </p>
          </div>
        </div>
      ))}

      {/* Dots navigation */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex gap-2">
        {slides.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            className={`w-2 h-2 rounded-full transition-colors duration-300 ${
              current === idx ? "bg-white" : "bg-white/40"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}
