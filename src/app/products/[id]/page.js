"use client";
import { useState } from "react";
import Image from "next/image";
import { ShoppingCart } from "lucide-react";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetails({ params }) {
  const product = products.find((p) => p.id === params.id);
  const { addToCart } = useCart();
  const [selectedSize, setSelectedSize] = useState(null);

  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size before adding to cart.");
      return;
    }
    addToCart({
      ...product,
      selectedSize,
    });
  };

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

        {/* Size Selector */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-2">Size</h3>
          <div className="flex space-x-2">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`w-10 h-10 border text-sm transition-colors ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "border-gray-300 hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="flex items-center justify-center w-full px-6 py-4 bg-black text-white text-sm font-medium hover:bg-gray-800 transition-colors"
        >
          <ShoppingCart size={18} className="mr-2" /> Add to Cart
        </button>
      </div>
    </div>
  );
}
