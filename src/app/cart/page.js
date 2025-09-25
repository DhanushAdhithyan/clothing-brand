"use client";
import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, increaseQty, decreaseQty, subtotal } =
    useCart();

  if (cart.length === 0) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-light mb-4">Your cart is empty.</h1>
        <p className="text-gray-600 mb-6">
          Time to fill it with some great styles.
        </p>
        <Link
          href="/products"
          className="inline-block px-8 py-3 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-10">
      <h1 className="text-3xl font-light mb-8">Your Cart</h1>
      <div className="space-y-6">
        {cart.map((item) => (
          <div
            key={`${item.id}-${item.selectedSize}`}
            className="border-b pb-4 flex items-center justify-between"
          >
            <div className="flex items-center space-x-4">
              <div className="relative w-20 h-20">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover rounded"
                />
              </div>
              <div>
                <p className="font-medium">{item.name}</p>
                <p className="text-sm text-gray-500">
                  Size: {item.selectedSize}
                </p>
                <p className="text-sm">₹{item.price}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              {/* Qty controls */}
              <div className="flex items-center border rounded">
                <button
                  className="px-3 py-1"
                  onClick={() => decreaseQty(item.id, item.selectedSize)}
                >
                  -
                </button>
                <span className="px-4">{item.qty}</span>
                <button
                  className="px-3 py-1"
                  onClick={() => increaseQty(item.id, item.selectedSize)}
                >
                  +
                </button>
              </div>

              {/* Remove */}
              <button
                onClick={() => removeFromCart(item.id, item.selectedSize)}
                className="text-sm text-red-500"
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 border-t pt-6">
        <div className="flex justify-between text-lg font-medium mb-6">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <Link
          href="/checkout"
          className="w-full text-center block px-6 py-4 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
