"use client";
import Link from "next/link";
import { useCart } from "@/context/CartContext";

export default function Cart() {
  const { cart, removeFromCart, subtotal } = useCart();

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
    <div className="max-w-3xl mx-auto py-10">
      <h1 className="text-3xl font-light mb-8">Your Cart</h1>
      {cart.map((item) => (
        <div
          key={`${item.id}-${item.selectedSize}`}
          className="border-b py-4 flex justify-between items-center"
        >
          <div>
            <p className="font-medium">{item.name}</p>
            <p className="text-sm text-gray-500">
              Size: {item.selectedSize} — ₹{item.price} × {item.qty}
            </p>
          </div>
          <button
            onClick={() => removeFromCart(item.id, item.selectedSize)}
            className="text-sm text-red-500"
          >
            Remove
          </button>
        </div>
      ))}

      <div className="mt-8">
        <div className="flex justify-between items-center text-lg font-medium">
          <span>Subtotal</span>
          <span>₹{subtotal.toLocaleString()}</span>
        </div>
        <Link
          href="/checkout"
          className="w-full text-center block mt-6 px-6 py-4 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
}
