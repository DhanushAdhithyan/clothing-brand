// src/app/products/[id]/page.js

import Image from "next/image";
import { ShoppingCart } from "lucide-react";

// In a real app, fetch data based on params.id
const products = [
  // ... (use the same product array from Products.js for now)
  {
    id: "1",
    name: "Classic White Shirt",
    price: "₹1,499",
    image: "/products/classic-white-shirt.jpg",
    description:
      "A timeless classic for any wardrobe. Made from 100% breathable cotton for ultimate comfort.",
    sizes: ["S", "M", "L"],
  },
];

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === params.id);
  if (!product) return <div>Product not found.</div>;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-16">
      <div className="relative h-[600px] w-full">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover"
        />
      </div>
      <div className="flex flex-col justify-center">
        <h1 className="text-3xl font-light mb-2">{product.name}</h1>
        <p className="text-xl text-gray-600 mb-6">{product.price}</p>
        <p className="text-sm leading-relaxed mb-6">{product.description}</p>

        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                className="w-10 h-10 border border-gray-300 text-sm hover:bg-black hover:text-white transition-colors"
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        <button className="flex items-center justify-center w-full px-6 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors">
          <ShoppingCart size={18} className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
