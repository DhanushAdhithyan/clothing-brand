"use client";

import Link from "next/link";
import Image from "next/image";
import products from "@/data/products";

export default function ProductGrid() {
  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
      {products
        .filter((p) => p.isFeatured) // ✅ only featured products
        .map((p) => (
          <Link
            key={p.id}
            href={`/products/${p.id}`}
            className="break-inside-avoid text-center cursor-pointer group block"
          >
            <div className="relative w-full overflow-hidden">
              <Image
                src={p.image}
                alt={p.name}
                width={600}
                height={800}
                className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
              />
            </div>
            <h4 className="mt-4 text-sm font-light tracking-widest">
              {p.name}
            </h4>
            <p className="text-sm text-gray-700">{p.price}</p>
          </Link>
        ))}
    </div>
  );
}
