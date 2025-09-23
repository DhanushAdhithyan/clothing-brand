export default function AboutUsSection() {
  //   const videos = [
  //     { src: "/videos/video1.mp4", caption: "Behind the Scenes" },
  //     { src: "/videos/video2.mp4", caption: "Design Process" },
  //     { src: "/videos/video3.mp4", caption: "Runway Showcase" },
  //     { src: "/videos/video4.mp4", caption: "Crafting Details" },
  //     { src: "/videos/video5.mp4", caption: "Street Style" },
  //   ];

  return (
    <section className="container mx-auto px-4 py-20">
      <p className="text-lg font-light max-w-2xl mx-auto leading-relaxed text-center mb-12">
        We believe fashion is an expression of individuality. Our collections
        are designed with timeless elegance, blending minimalism with modern
        aesthetics.
      </p>

      {/* Masonry layout */}
      {/* <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
        {videos.map((video, index) => (
          <div
            key={index}
            className="break-inside-avoid overflow-hidden rounded-2xl shadow-lg relative group"
          >
            <video
              src={video.src}
              autoPlay
              muted
              loop
              playsInline
              className="w-full rounded-2xl"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-sm p-2 text-center opacity-0 group-hover:opacity-100 transition">
              {video.caption}
            </div>
          </div>
        ))}
      </div> */}
    </section>
  );
}
