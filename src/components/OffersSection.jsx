export default function OffersSection() {
  return (
    <section className="py-12">
      <h2 className="text-3xl font-bold text-center mb-6">Special Offers</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-yellow-100 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">50% Off on Shoes</h3>
          <p className="text-gray-700">
            Grab the trendiest sneakers at half price!
          </p>
        </div>
        <div className="bg-blue-100 p-6 rounded-lg text-center shadow-md">
          <h3 className="text-xl font-semibold mb-2">Buy 1 Get 1 Free</h3>
          <p className="text-gray-700">On all accessories this week.</p>
        </div>
      </div>
    </section>
  );
}
