import { blogs } from "../data/data";

export default function Blogs() {
  return (
    <section
      id="blogs"
      className="relative py-28 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#663399] opacity-20 blur-[200px] rounded-full top-20 right-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Latest <span className="text-[#663399]">Insights</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Strategic Shopify conversion tips, UX improvements, and growth
            insights to help you scale revenue.
          </p>
        </div>

        {/* Blog Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {blogs.map((blog) => (
            <div
              key={blog.id}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#663399]"
            >
              {/* Image Placeholder */}
              <div className="overflow-hidden">
                <div className="h-[200px] bg-gradient-to-br from-[#663399]/40 to-purple-600/30 flex items-center justify-center text-white text-lg font-semibold">
                  Shopify Growth
                </div>
              </div>

              {/* Content */}
              <div className="p-8">
                {/* Category Badge */}
                <div className="inline-block bg-[#663399]/20 text-[#663399] px-4 py-1 rounded-full text-xs font-semibold mb-4">
                  CRO Strategy
                </div>

                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#663399] transition">
                  {blog.title}
                </h3>

                <p className="text-gray-400 text-sm leading-relaxed">
                  {blog.content}
                </p>

                <button className="mt-6 text-[#663399] font-semibold hover:underline">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
