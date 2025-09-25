"use client";

import Link from "next/link";
import ProductCard from "./ProductCard";
import products from "@/data/products";

export default function FeaturedProducts() {
  // Filter only featured products
  const featuredProducts = products.filter((p) => p.isFeatured);

  return (
    <section className="py-12 md:py-24">
      <h2 className="text-xl font-medium tracking-wide mb-8">Featured</h2>
      {featuredProducts.length > 0 ? (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
          {featuredProducts.map((product) => (
            <Link key={product.id} href={`/products/${product.id}`}>
              <ProductCard product={product} />
            </Link>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">No featured products available.</p>
      )}
    </section>
  );
}
