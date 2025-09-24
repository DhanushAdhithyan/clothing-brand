// src/components/ProductCard.js

import Link from "next/link";
import Image from "next/image";

export default function ProductCard({ product }) {
  return (
    <Link href={`/products/${product.id}`} className="group block">
      <div className="relative w-full h-[450px] overflow-hidden bg-gray-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="mt-4">
        <h3 className="text-sm font-medium">{product.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{product.price}</p>
      </div>
    </Link>
  );
}
  