// src/app/products/page.js

"use client";
import { useState } from "react";
import ProductCard from "@/components/ProductCard";

const products = [
  {
    id: "1",
    name: "Classic White Shirt",
    price: "₹1,499",
    image: "/products/classic-white-shirt.jpg",
    category: "Shirts",
    sizes: ["S", "M", "L"],
  },
  {
    id: "2",
    name: "Denim Jacket",
    price: "₹2,999",
    image: "/products/denim-jacket.jpg",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "3",
    name: "Slim Fit Jeans",
    price: "₹1,999",
    image: "/products/slim-fit-jeans.jpg",
    category: "Jeans",
    sizes: ["28", "30", "32", "34"],
  },
  {
    id: "4",
    name: "Black Dress",
    price: "₹3,499",
    image: "/products/black-dress.jpg",
    category: "Dresses",
    sizes: ["S", "M"],
  },
  {
    id: "5",
    name: "Oversized Hoodie",
    price: "₹2,199",
    image: "/products/oversized-hoodie.jpg",
    category: "Outerwear",
    sizes: ["S", "M", "L", "XL"],
  },
  {
    id: "6",
    name: "Cotton T-Shirt",
    price: "₹899",
    image: "/products/cotton-tshirt.jpg",
    category: "Shirts",
    sizes: ["S", "M", "L"],
  },
];

export default function Products() {
  const [filters, setFilters] = useState({
    category: "",
    size: "",
  });

  const handleFilterChange = (filterName, value) => {
    setFilters((prev) => ({
      ...prev,
      [filterName]: prev[filterName] === value ? "" : value,
    }));
  };

  const filteredProducts = products.filter((product) => {
    return (
      (filters.category === "" || product.category === filters.category) &&
      (filters.size === "" || product.sizes.includes(filters.size))
    );
  });

  const categories = ["All", "Shirts", "Jeans", "Dresses", "Outerwear"];
  const sizes = ["S", "M", "L", "XL"];

  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
      {/* Sidebar Filters */}
      <aside className="md:col-span-1 md:border-r md:pr-6 space-y-8">
        <div>
          <h2 className="text-lg font-bold mb-3">Category</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            {categories.map((cat) => (
              <li key={cat}>
                <button
                  onClick={() =>
                    handleFilterChange("category", cat === "All" ? "" : cat)
                  }
                  className={`hover:text-black transition-colors ${
                    filters.category === (cat === "All" ? "" : cat)
                      ? "font-bold text-black"
                      : ""
                  }`}
                >
                  {cat}
                </button>
              </li>
            ))}
          </ul>
        </div>
        <div>
          <h2 className="text-lg font-bold mb-3">Size</h2>
          <ul className="flex flex-wrap gap-2">
            {sizes.map((size) => (
              <li key={size}>
                <button
                  onClick={() => handleFilterChange("size", size)}
                  className={`w-8 h-8 flex items-center justify-center border border-gray-300 text-sm rounded-full transition-colors ${
                    filters.size === size
                      ? "bg-black text-white"
                      : "hover:bg-gray-100"
                  }`}
                >
                  {size}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </aside>
      {/* Product Grid */}
      <section className="md:col-span-3">
        <h1 className="text-3xl font-light mb-6">All Products</h1>
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8">
          {filteredProducts.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </div>
  );
}
