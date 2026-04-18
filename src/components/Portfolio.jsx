import { projects } from "../data/data";

export default function Portfolio() {
  return (
    <section
      id="portfolio"
      className="relative py-28 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[600px] h-[600px] bg-[#663399] opacity-20 blur-[220px] rounded-full -bottom-20 -left-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Heading */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold">
            Featured <span className="text-[#663399]">Case Studies</span>
          </h2>
          <p className="text-gray-400 mt-4 max-w-2xl mx-auto">
            Real Shopify optimization projects focused on increasing conversions
            and revenue performance.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:border-[#663399]"
            >
              {/* Image */}
              <div className="overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-[220px] object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>

              {/* Content */}
              <div className="p-8">
                <h3 className="text-xl font-semibold mb-4 group-hover:text-[#663399] transition">
                  {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-3">
                  <span className="text-white font-semibold">Problem:</span>{" "}
                  {project.problem}
                </p>

                <p className="text-gray-400 text-sm mb-5">
                  <span className="text-white font-semibold">Solution:</span>{" "}
                  {project.solution}
                </p>

                {/* Result Badge */}
                <div className="inline-block bg-[#663399]/20 text-[#663399] px-4 py-2 rounded-full text-sm font-semibold">
                  {project.result}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
