"use client";
import { createContext, useContext, useEffect, useState } from "react";

const CartContext = createContext();

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  // Load from localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("cart");
      if (stored) setCart(JSON.parse(stored));
    }
  }, []);

  // Save to localStorage
  useEffect(() => {
    if (typeof window !== "undefined") {
      localStorage.setItem("cart", JSON.stringify(cart));
    }
  }, [cart]);

  const addToCart = (product) => {
    setCart((prev) => {
      const exists = prev.find(
        (item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
      );
      if (exists) {
        return prev.map((item) =>
          item.id === product.id && item.selectedSize === product.selectedSize
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }
      return [...prev, { ...product, qty: 1 }];
    });
  };

  const removeFromCart = (id, size) => {
    setCart((prev) =>
      prev.filter((item) => !(item.id === id && item.selectedSize === size))
    );
  };

  const increaseQty = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, qty: item.qty + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id, size) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id && item.selectedSize === size
          ? { ...item, qty: Math.max(1, item.qty - 1) }
          : item
      )
    );
  };

  const clearCart = () => setCart([]);

  const subtotal = cart.reduce(
    (acc, item) =>
      acc + parseInt(item.price.replace("₹", "").replace(",", "")) * item.qty,
    0
  );

  const totalItems = cart.reduce((acc, item) => acc + item.qty, 0);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        clearCart,
        subtotal,
        totalItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
