"use client";
import { useCart } from "@/context/CartContext";
import { useState } from "react";

export default function Checkout() {
  const { cart, subtotal, clearCart } = useCart();
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
  });
  const [success, setSuccess] = useState(false);

  const handlePlaceOrder = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.phone || !form.address) {
      alert("Please fill all required fields.");
      return;
    }

    // Fake order save
    localStorage.setItem(
      "lastOrder",
      JSON.stringify({ form, cart, subtotal, date: new Date() })
    );

    clearCart();
    setSuccess(true);
  };

  if (success) {
    return (
      <div className="text-center py-20">
        <h1 className="text-2xl font-bold mb-4">🎉 Order Confirmed!</h1>
        <p className="text-gray-600">
          Thanks for shopping with Aura. A confirmation email has been sent.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto py-10 grid md:grid-cols-2 gap-10">
      {/* Billing Form */}
      <form onSubmit={handlePlaceOrder} className="space-y-4">
        <h1 className="text-2xl font-bold mb-6">Billing & Shipping</h1>
        <input
          type="text"
          placeholder="Full Name"
          required
          className="w-full border px-4 py-3 rounded"
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
        />
        <input
          type="email"
          placeholder="Email Address"
          required
          className="w-full border px-4 py-3 rounded"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
        />
        <input
          type="tel"
          placeholder="Phone Number"
          required
          className="w-full border px-4 py-3 rounded"
          value={form.phone}
          onChange={(e) => setForm({ ...form, phone: e.target.value })}
        />
        <textarea
          placeholder="Street Address"
          required
          className="w-full border px-4 py-3 rounded"
          value={form.address}
          onChange={(e) => setForm({ ...form, address: e.target.value })}
        />
        <button
          type="submit"
          className="w-full px-6 py-4 bg-black text-white text-sm hover:bg-gray-800 transition-colors"
        >
          Place Order
        </button>
      </form>

      {/* Order Summary */}
      <div>
        <h2 className="text-xl font-bold mb-6">Order Summary</h2>
        <div className="space-y-4">
          {cart.map((item) => (
            <div
              key={`${item.id}-${item.selectedSize}`}
              className="flex justify-between"
            >
              <span>
                {item.name} × {item.qty}
              </span>
              <span>
                ₹
                {(
                  parseInt(item.price.replace("₹", "").replace(",", "")) *
                  item.qty
                ).toLocaleString()}
              </span>
            </div>
          ))}
          <div className="border-t pt-4 flex justify-between font-medium">
            <span>Total</span>
            <span>₹{subtotal.toLocaleString()}</span>
          </div>
        </div>
      </div>
    </div>
  );
}
