"use client";
import { useCart } from "@/context/CartContext";

export default function Checkout() {
  const { cart, subtotal } = useCart();

  return (
    <div className="max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-10">
      {/* Billing Form */}
      <div>
        <h1 className="text-2xl font-bold mb-6">Billing & Shipping</h1>
        <form className="space-y-4">
          <input
            type="text"
            placeholder="Full Name"
            className="w-full border px-4 py-3 rounded"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full border px-4 py-3 rounded"
          />
          <input
            type="text"
            placeholder="Phone Number"
            className="w-full border px-4 py-3 rounded"
          />
          <input
            type="text"
            placeholder="Street Address"
            className="w-full border px-4 py-3 rounded"
          />
          <div className="flex space-x-4">
            <input
              type="text"
              placeholder="City"
              className="w-1/2 border px-4 py-3 rounded"
            />
            <input
              type="text"
              placeholder="ZIP Code"
              className="w-1/2 border px-4 py-3 rounded"
            />
          </div>
        </form>
      </div>

      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div key={item.id} className="flex justify-between">
              <span>
                {item.name} × {item.qty}
              </span>
              <span>₹{(item.price * item.qty).toLocaleString()}</span>
            </div>
          ))}
          <div className="border-t pt-4 flex justify-between font-medium">
            <span>Total</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
        </div>
        <button className="w-full mt-6 px-6 py-4 bg-black text-white text-sm hover:bg-gray-800 transition-colors">
          Place Order
        </button>
      </div>
    </div>
  );
}
