export default function Services() {
  const services = [
    {
      title: "Conversion Optimization",
      desc: "Identify revenue leaks and optimize product pages, CTAs, and customer flow to increase conversions.",
    },
    {
      title: "Store Redesign",
      desc: "Modern, high-converting Shopify designs focused on clarity, branding, and trust-building.",
    },
    {
      title: "Mobile UX & Speed",
      desc: "Fast-loading, mobile-first experiences that reduce bounce rate and increase revenue.",
    },
    {
      title: "Ongoing CRO Retainers",
      desc: "Continuous performance optimization and A/B improvements to scale your store monthly.",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden"
    >
      {/* Glow Accent */}
      <div className="absolute w-[500px] h-[500px] bg-[#663399] opacity-20 blur-[200px] rounded-full top-0 right-0"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold">
            My <span className="text-[#663399]">Services</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Strategic Shopify solutions designed to maximize conversions,
            optimize performance, and scale revenue.
          </p>
        </div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <div
              key={i}
              className="group relative bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 transition-all duration-500 hover:-translate-y-3 hover:border-[#663399]"
            >
              {/* Icon Circle */}
              <div className="w-14 h-14 flex items-center justify-center rounded-full bg-[#663399]/20 text-[#663399] mb-6 text-xl font-bold">
                {i + 1}
              </div>

              <h3 className="text-xl font-semibold mb-4 group-hover:text-[#663399] transition">
                {service.title}
              </h3>

              <p className="text-gray-400 text-sm leading-relaxed">
                {service.desc}
              </p>

              {/* Bottom Gradient Line */}
              <div className="absolute bottom-0 left-0 w-0 h-[3px] bg-[#663399] transition-all duration-500 group-hover:w-full rounded-b-2xl"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
