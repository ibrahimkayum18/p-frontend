import { testimonials } from "../data/data";

export default function Testimonials() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden">
      {/* Glow Accent */}
      <div className="absolute w-[500px] h-[500px] bg-[#663399] opacity-20 blur-[220px] rounded-full -top-20 left-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Client <span className="text-[#663399]">Testimonials</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real feedback from Shopify brands I've helped optimize and scale.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#663399]"
            >
              {/* Big Quote */}
              <div className="text-[#663399] text-5xl font-bold mb-6 leading-none">
                “
              </div>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex mb-4 text-[#663399]">★★★★★</div>

              <div className="border-t border-white/10 pt-4">
                <p className="font-semibold group-hover:text-[#663399] transition">
                  {t.name}
                </p>
                <p className="text-gray-500 text-sm">Shopify Brand Owner</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
