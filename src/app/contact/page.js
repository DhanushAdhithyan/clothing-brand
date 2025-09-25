export default function ContactPage() {
  return (
    <div className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-gray-700 mb-6">
        Have questions? Reach out to us and we’ll get back to you soon!
      </p>
      <form className="grid gap-4 max-w-lg">
        <input
          type="text"
          placeholder="Your Name"
          className="border rounded p-3"
        />
        <input
          type="email"
          placeholder="Your Email"
          className="border rounded p-3"
        />
        <textarea
          placeholder="Your Message"
          rows="4"
          className="border rounded p-3"
        ></textarea>
        <button
          type="submit"
          className="px-6 py-3 bg-black text-white rounded hover:bg-gray-800"
        >
          Send Message
        </button>
      </form>
    </div>
  );
}
