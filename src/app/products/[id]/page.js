"use client";

import { useParams } from "next/navigation";
import Image from "next/image";
import { useState } from "react";
import products from "@/data/products";
import { useCart } from "@/context/CartContext";

export default function ProductDetailPage() {
  const params = useParams();
  const { addToCart } = useCart();

  // ✅ Find product by id
  const product = products.find((p) => p.id === params.id);

  const [selectedSize, setSelectedSize] = useState("");
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <div className="p-20 text-center">
        <h1 className="text-2xl font-bold">Product not found</h1>
      </div>
    );
  }

  const handleAddToCart = () => {
    if (!selectedSize) {
      alert("Please select a size");
      return;
    }

    addToCart({
      ...product,
      size: selectedSize,
      quantity,
    });
  };

  return (
    <div className="container mx-auto px-8 py-20 grid grid-cols-1 md:grid-cols-2 gap-12">
      {/* Product Image */}
      <div>
        <Image
          src={product.image}
          alt={product.name}
          width={600}
          height={700}
          className="w-full h-auto rounded-lg shadow-lg"
        />
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-4xl font-bold mb-2">{product.name}</h1>
        <p className="text-gray-500 mb-2">{product.category}</p>
        <p className="text-xl font-semibold mb-4">{product.price}</p>
        <p className="mb-6 text-gray-700">{product.description}</p>

        {/* Size Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Select Size:</h3>
          <div className="flex gap-3">
            {product.sizes.map((size) => (
              <button
                key={size}
                onClick={() => setSelectedSize(size)}
                className={`px-4 py-2 border rounded ${
                  selectedSize === size
                    ? "bg-black text-white"
                    : "bg-white text-black hover:bg-gray-100"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>

        {/* Quantity Selection */}
        <div className="mb-6">
          <h3 className="font-semibold mb-2">Quantity:</h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => setQuantity((prev) => Math.max(1, prev - 1))}
              className="px-3 py-1 border rounded"
            >
              -
            </button>
            <span className="text-lg">{quantity}</span>
            <button
              onClick={() => setQuantity((prev) => prev + 1)}
              className="px-3 py-1 border rounded"
            >
              +
            </button>
          </div>
        </div>

        {/* Add to Cart */}
        <button
          onClick={handleAddToCart}
          className="bg-black text-white px-6 py-3 rounded hover:bg-gray-800"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
