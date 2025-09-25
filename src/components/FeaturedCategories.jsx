"use client";

import Image from "next/image";
import Link from "next/link";

export default function FeaturedCategories() {
  const categories = [
    { name: "WOMAN", slug: "woman", img: "/images/featured/woman-banner.jpg" },
    { name: "MAN", slug: "man", img: "/images/featured/men-banner.webp" },
    { name: "KIDS", slug: "kids", img: "/images/featured/kid-banner.jpg" },
    {
      name: "ACCESSORIES",
      slug: "accessories",
      img: "/images/featured/accessories-banner.webp",
    },
  ];

  return (
    <section className="container mx-auto px-4">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-4 space-y-4">
        {categories.map((cat, idx) => (
          <Link
            key={idx}
            href={`/category/${cat.slug}`}
            className="relative group cursor-pointer overflow-hidden rounded-xl break-inside-avoid block"
          >
            <Image
              src={cat.img}
              alt={cat.name}
              width={1000}
              height={1200}
              className="object-cover w-full h-auto rounded-xl group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <h3 className="text-white text-3xl md:text-4xl font-light tracking-widest">
                {cat.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
