import CarouselBanner from "@/components/CarouselBanner";
import FeaturedCategories from "@/components/FeaturedCategories";
import ProductGrid from "@/components/ProductGrid";
// import PromoBanner from "@/components/PromoBanner";
// import AboutSection from "@/components/AboutSection";
// import Newsletter from "@/components/Newsletter";
import AboutUsSection from "@/components/AboutUsSection";
import products from "@/data/products";
import Link from "next/link";
import OffersSection from "@/components/OffersSection";

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

      {/* <Newsletter /> */}
    </div>
  );
}
