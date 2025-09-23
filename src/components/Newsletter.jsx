export default function Newsletter() {
  return (
    <section className="w-full py-20 bg-black text-white flex flex-col items-center">
      <h2 className="text-xl font-light tracking-widest mb-6">
        JOIN OUR NEWSLETTER
      </h2>
      <form className="flex border-b border-white/50 w-[300px]">
        <input
          type="email"
          placeholder="Enter your email"
          className="bg-transparent flex-1 outline-none text-white placeholder-gray-400"
        />
        <button type="submit" className="ml-2 text-sm tracking-widest">
          SUBMIT
        </button>
      </form>
    </section>
  );
}
