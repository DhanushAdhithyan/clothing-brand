import Image from "next/image";

export default function ProductGrid() {
  const products = [
    {
      id: 1,
      name: "ABSTRACT PRINT SHIRT",
      price: "₹3,499",
      img: "/images/products/abstract-print-shirt.jpg",
    },
    {
      id: 2,
      name: "BASIC HEAVY WEIGHT TEESHIRT",
      price: "₹1,499",
      img: "/images/products/basic-heavy-weight-teeshirt.jpg",
    },
    {
      id: 3,
      name: "BASIC HOODIE",
      price: "₹2,999",
      img: "/images/products/basic-hoodie.jpg",
    },
    {
      id: 4,
      name: "COMFORT SUIT JACKET",
      price: "₹7,999",
      img: "/images/products/comfort-suit-jacket.jpg",
    },
    {
      id: 5,
      name: "CONTRAST COLLAR POLO SWEATSHIRT",
      price: "₹2,499",
      img: "/images/products/contrast-collar-polo-sweatshirt.jpg",
    },
    {
      id: 6,
      name: "LEATHER BLAZER",
      price: "₹12,999",
      img: "/images/products/leather-blazer.jpg",
    },
    {
      id: 7,
      name: "PLEATED WHITE FIT PANTS",
      price: "₹3,199",
      img: "/images/products/pleated-white-fit-pants.jpg",
    },
    {
      id: 8,
      name: "PLISSE MAXI DRESS",
      price: "₹5,499",
      img: "/images/products/plisse-maxi-dress.jpg",
    },
    {
      id: 9,
      name: "PROM",
      price: "₹8,499",
      img: "/images/products/prom.avif",
    },
    {
      id: 10,
      name: "STRECH SUIT PANTS",
      price: "₹4,999",
      img: "/images/products/strech-suit-pants.jpg",
    },
  ];

  return (
    <div className="columns-2 md:columns-3 lg:columns-4 gap-6 space-y-6">
      {products.map((p) => (
        <div
          key={p.id}
          className="break-inside-avoid text-center cursor-pointer group"
        >
          <div className="relative w-full overflow-hidden">
            <Image
              src={p.img}
              alt={p.name}
              width={600}
              height={800}
              className="object-cover w-full h-auto group-hover:scale-105 transition-transform duration-700"
            />
          </div>
          <h4 className="mt-4 text-sm font-light tracking-widest">{p.name}</h4>
          <p className="text-sm text-gray-700">{p.price}</p>
        </div>
      ))}
    </div>
  );
}
