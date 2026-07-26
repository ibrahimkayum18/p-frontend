export default function Services() {
  const services = [
    {
      title: "Shopify Store Design",
      image:
        "https://images.unsplash.com/photo-1556740749-887f6717d7e4?w=900&auto=format&fit=crop&q=80",
      desc: "Launch a beautiful, responsive, and high-converting Shopify store tailored to your brand and business goals.",
      link: "https://www.fiverr.com/YOUR_FIRST_GIG",
    },
    {
      title: "Shopify Bug Fixing",
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900&auto=format&fit=crop&q=80",
      desc: "Fix Liquid errors, responsive issues, app conflicts, speed problems, and any Shopify bugs quickly and professionally.",
      link: "https://www.fiverr.com/YOUR_SECOND_GIG",
    },
    {
      title: "Shopify CRO & Store Improvement",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900&auto=format&fit=crop&q=80",
      desc: "Increase conversions by improving your existing Shopify store with better UX, faster performance, and CRO strategies.",
      link: "https://www.fiverr.com/YOUR_THIRD_GIG",
    },
  ];

  return (
    <section
      id="services"
      className="relative py-24 bg-gradient-to-b from-black via-[#050806] to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute -top-40 -right-40 w-[600px] h-[600px] rounded-full bg-[#95BF47]/20 blur-[180px]" />

      <div className="absolute -bottom-40 -left-40 w-[500px] h-[500px] rounded-full bg-emerald-500/10 blur-[180px]" />

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-16">
          <p className="uppercase tracking-[4px] text-green-400 text-sm font-medium mb-4">
            MY SERVICES
          </p>

          <h2 className="text-4xl md:text-6xl font-bold leading-tight">
            Professional{" "}
            <span className="bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Shopify Services
            </span>
          </h2>

          <p className="text-gray-400 max-w-3xl mx-auto mt-6 text-lg">
            Whether you're launching a new Shopify store, fixing technical
            issues, or improving conversions, I provide solutions that help your
            business grow.
          </p>
        </div>

        {/* Services */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <a
              key={index}
              href={service.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group rounded-3xl overflow-hidden border border-green-500/20 bg-[#0d0d0d]/90 backdrop-blur-xl transition-all duration-500 hover:-translate-y-3 hover:border-green-400/60 hover:shadow-[0_0_40px_rgba(149,191,71,0.18)]"
            >
              {/* Image */}
              <div className="relative overflow-hidden h-60">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent"></div>

                <div className="absolute top-5 left-5 w-12 h-12 rounded-xl bg-[#95BF47]/20 backdrop-blur-md border border-[#95BF47]/40 flex items-center justify-center font-bold text-[#95BF47]">
                  {String(index + 1).padStart(2, "0")}
                </div>
              </div>

              {/* Content */}
              <div className="p-7">
                <h3 className="text-2xl font-semibold mb-4 group-hover:text-[#95BF47] transition-colors">
                  {service.title}
                </h3>

                <p className="text-gray-400 leading-7 mb-6">
                  {service.desc}
                </p>

                <div className="flex items-center text-[#95BF47] font-semibold">
                  View Fiverr Gig

                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="ml-2 w-5 h-5 transition-transform duration-300 group-hover:translate-x-2"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}