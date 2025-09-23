// src/components/FeaturedProducts.js

import ProductCard from "./ProductCard";

const dummyProducts = [
  {
    id: "1",
    name: "Oversized T-Shirt",
    price: "₹899",
    image: "/products/oversized-tshirt.jpg",
  },
  {
    id: "2",
    name: "Cargo Pants",
    price: "₹2,499",
    image: "/products/cargo-pants.jpg",
  },
  {
    id: "3",
    name: "Ribbed Knit Top",
    price: "₹1,299",
    image: "/products/ribbed-top.jpg",
  },
];

export default function FeaturedProducts() {
  return (
    <section className="py-12 md:py-24">
      <h2 className="text-xl font-medium tracking-wide mb-8">Featured</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
        {dummyProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </section>
  );
}
