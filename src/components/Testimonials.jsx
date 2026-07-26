import { testimonials } from "../data/data";

export default function Testimonials() {
  return (
    <section className="relative py-10 md:py-24 bg-gradient-to-b from-black via-[#050806] to-black text-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute -top-20 left-0 w-[500px] h-[500px] bg-[#95BF47]/15 blur-[180px] rounded-full"></div>

      <div className="absolute bottom-0 right-0 w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-[#95BF47] text-sm font-semibold mb-4">
            Testimonials
          </p>

          <h2 className="text-4xl md:text-6xl font-bold">
            What My{" "}
            <span className="bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Clients Say
            </span>
          </h2>

          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg">
            Real reviews from Shopify store owners I've helped with store
            development, optimization, and conversion rate improvements.
          </p>
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((t) => (
            <div
              key={t.id}
              className="group h-full flex flex-col rounded-3xl border border-green-500/20 bg-[#0d0d0d]/90 backdrop-blur-xl p-8 transition-all duration-500 hover:-translate-y-2 hover:border-[#95BF47] hover:shadow-[0_0_35px_rgba(149,191,71,0.18)]"
            >
              {/* Quote */}
              <div className="text-6xl text-[#95BF47] leading-none mb-6">
                "
              </div>

              {/* Review */}
              <p className="text-gray-300 leading-8 flex-grow">
                {t.text}
              </p>

              {/* Stars */}
              <div className="flex text-[#95BF47] text-xl mt-8 mb-6">
                ★★★★★
              </div>

              {/* Footer */}
              <div className="border-t border-green-500/10 pt-5">
                <h3 className="font-semibold text-lg group-hover:text-[#95BF47] transition-colors">
                  {t.name}
                </h3>

                <p className="text-gray-500 text-sm mt-1">
                  Shopify Store Owner
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}