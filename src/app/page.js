import CarouselBanner from "@/components/CarouselBanner";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
// import PromoBanner from "@/components/PromoBanner";
// import AboutSection from "@/components/AboutSection";
// import Newsletter from "@/components/Newsletter";
import AboutUsSection from "@/components/AboutUsSection";
import products from "@/data/products";
import Link from "next/link";

export default function Home() {
  const bannerImages = [
    {
      image: "/images/banner-image-1.png",
      title: "Effortless Elegance",
      subtitle: "Modern silhouettes redefined for everyday wear.",
    },
    {
      image: "/images/banner-image-8.jpg",
      title: "New Season, New Mood",
      subtitle: "Fresh arrivals to elevate your wardrobe.",
    },
    {
      image: "/images/banner-image-5.jpg",
      title: "Monochrome Edit",
      subtitle: "Timeless black and white for a clean, sharp look.",
    },
    {
      image: "/images/banner-image-7.jpg",
      title: "Urban Essentials",
      subtitle: "Minimal design crafted for the city lifestyle.",
    },
    {
      image: "/images/banner-image-6.jpg",
      title: "Sustainable Choice",
      subtitle: "Eco-friendly fabrics without compromising style.",
    },
    {
      image: "/images/banner-image-4.jpg",
      title: "Evening Collection",
      subtitle: "Bold statements for nights that matter.",
    },
    {
      image: "/images/banner-image-3.png",
      title: "Casual Luxe",
      subtitle: "Relaxed fits designed with premium details.",
    },
    {
      image: "/images/banner-image-2.png",
      title: "The Minimal Edit",
      subtitle: "Understated fashion that speaks volumes.",
    },
  ];

  return (
    <div className="space-y-24">
      <CarouselBanner slides={bannerImages} />

      <FeaturedCategories />
      <AboutUsSection />
      {/* <PromoBanner /> */}

      <section className="container mx-auto px-4">
        <h2 className="text-3xl font-light tracking-widest mb-10 text-center">
          NEW ARRIVALS
        </h2>
        <ProductGrid />
      </section>
      {/* Featured Products */}
      <section className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold mb-6 text-center">Featured</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {products.slice(0, 3).map((product) => (
            <Link
              key={product.id}
              href={`/products/${product.id}`}
              className="border rounded-lg shadow hover:shadow-lg transition"
            >
              <img
                src={product.img}
                alt={product.name}
                className="w-full h-72 object-cover rounded-t-lg"
              />
              <div className="p-4">
                <h3 className="font-semibold">{product.name}</h3>
                <p className="text-gray-600">{product.price}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
      {/* <Newsletter /> */}
    </div>
  );
}
