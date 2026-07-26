import { useState } from "react";
import { Play, X } from "lucide-react";

export default function Blogs() {
  const [selectedVideo, setSelectedVideo] = useState(null);

  const videos = [
    {
      id: 1,
      title: "Why This Shopify Store Is Losing $10K+ in Sales",
      type: "Video",
      videoId: "YVqmXbu0Fso",
      thumbnail: "https://img.youtube.com/vi/YVqmXbu0Fso/maxresdefault.jpg",
      description:
        "Discover the hidden mistakes that are costing this Shopify store over $10,000 in lost sales. Learn practical CRO techniques, UX improvements, and conversion strategies you can apply to your own store.",
    },
    {
      id: 2,
      title: "90% of Shopify Stores Make the Same Costly Mistakes",
      type: "Video",
      videoId: "PhrbNKbkwAY",
      thumbnail: "https://img.youtube.com/vi/PhrbNKbkwAY/maxresdefault.jpg",
      description:
        "Compare an amateur Shopify store with a professional high-converting store and see the mistakes that silently reduce conversions and revenue.",
    },
    {
      id: 3,
      title: "Shopify Product Page Mistakes That Kill Sales!",
      type: "Short",
      videoId: "4Cupfp9oXIg",
      thumbnail: "https://img.youtube.com/vi/4Cupfp9oXIg/maxresdefault.jpg",
      description:
        "A quick Shopify Short explaining common product page mistakes and simple CRO improvements that can increase sales.",
    },
  ];

  return (
    <section
      id="blogs"
      className="relative py-10 md:py-24 bg-gradient-to-b from-black via-[#050806] to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-32 left-0 w-[500px] h-[500px] rounded-full bg-[#95BF47]/15 blur-[180px]" />

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] rounded-full bg-emerald-500/10 blur-[180px]" />

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-green-400 text-sm font-medium mb-4">
            YouTube Content
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            Latest{" "}
            <span className="bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Shopify Insights
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-3xl mx-auto text-lg">
            Watch practical Shopify tutorials, conversion optimization tips,
            UX improvements, and real-world case studies to help you grow your
            online store.
          </p>
        </div>

        {/* Video Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videos.map((video) => (
            <div
              key={video.id}
              onClick={() => setSelectedVideo(video)}
              className="group cursor-pointer rounded-3xl overflow-hidden border border-green-500/20 bg-[#0d0d0d]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-[#95BF47]/60 hover:shadow-[0_0_35px_rgba(149,191,71,0.18)]"
            >
              {/* Thumbnail */}
              <div className="relative overflow-hidden">
                <img
                  src={video.thumbnail}
                  alt={video.title}
                  className="w-full aspect-video object-cover transition duration-500 group-hover:scale-105"
                />

                {/* Overlay */}
                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                  <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center group-hover:scale-110 transition">
                    <Play
                      size={28}
                      fill="black"
                      className="text-black ml-1"
                    />
                  </div>
                </div>

                {/* Badge */}
                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-[#95BF47]/90 text-black text-xs font-bold">
                  {video.type}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#95BF47] transition-colors">
                  {video.title}
                </h3>

                <p className="text-gray-400 leading-7 line-clamp-3">
                  {video.description}
                </p>

                <button className="mt-6 font-semibold text-[#95BF47] flex items-center gap-2">
                  Watch Video →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ===================== VIDEO MODAL ===================== */}

      {selectedVideo && (
        <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0d0d0d] border border-green-500/20">
            {/* Close Button */}
            <button
              onClick={() => setSelectedVideo(null)}
              className="absolute top-5 right-5 z-20 w-11 h-11 rounded-full bg-black/70 hover:bg-black flex items-center justify-center transition"
            >
              <X size={22} />
            </button>
                        {/* Video */}
            <div className="aspect-video">
              <iframe
                className="w-full h-full"
                src={`https://www.youtube.com/embed/${selectedVideo.videoId}?autoplay=1&rel=0&modestbranding=1`}
                title={selectedVideo.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
              ></iframe>
            </div>

            {/* Content */}
            <div className="p-8 md:p-10">
              <div className="inline-flex items-center rounded-full bg-[#95BF47]/20 text-[#95BF47] px-4 py-1 text-sm font-semibold mb-5">
                {selectedVideo.type}
              </div>

              <h3 className="text-2xl md:text-4xl font-bold mb-6">
                {selectedVideo.title}
              </h3>

              <p className="text-gray-300 leading-8 text-lg">
                {selectedVideo.description}
              </p>

              <div className="mt-8">
                <a
                  href={`https://www.youtube.com/watch?v=${selectedVideo.videoId}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 bg-gradient-to-r from-[#95BF47] to-emerald-500 text-black px-6 py-3 rounded-full font-semibold hover:scale-105 transition duration-300"
                >
                  Watch on YouTube
                </a>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}