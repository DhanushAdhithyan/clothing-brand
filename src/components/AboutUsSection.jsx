export default function AboutUsSection() {
  const videos = [
    {
      src: "https://res.cloudinary.com/dwrabv5nl/video/upload/v1758692082/video1_bntjf9.mp4",
      caption: "Behind the Scenes",
    },
    {
      src: "https://res.cloudinary.com/dwrabv5nl/video/upload/v1758692078/video2_tty9zo.mp4",
      caption: "Design Process",
    },
    {
      src: "https://res.cloudinary.com/dwrabv5nl/video/upload/v1758692119/video3_ml7csp.mp4",
      caption: "Runway Showcase",
    },
    {
      src: "https://res.cloudinary.com/dwrabv5nl/video/upload/v1758692108/video4_ff3f53.mp4",
      caption: "Crafting Details",
    },
    {
      src: "https://res.cloudinary.com/dwrabv5nl/video/upload/v1758692112/video5_rzrky8.mp4",
      caption: "Street Style",
    },
  ];

  return (
    <section className="container mx-auto px-4 py-20">
      <p className="text-lg font-light max-w-2xl mx-auto leading-relaxed text-center mb-12">
        We believe fashion is an expression of individuality. Our collections
        are designed with timeless elegance, blending minimalism with modern
        aesthetics.
      </p>

      {/* Masonry layout */}
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
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
      </div>
    </section>
  );
}
