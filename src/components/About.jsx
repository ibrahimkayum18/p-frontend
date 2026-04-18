export default function About() {
  return (
    <section
      id="about"
      className="relative py-24 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden"
    >
      {/* Glow Accent */}
      <div className="absolute w-[400px] h-[400px] bg-[#663399] opacity-20 blur-[180px] rounded-full -top-20 -left-20"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          {/* IMAGE SIDE */}
          <div className="relative group flex justify-center">
            <div className="absolute inset-0 bg-gradient-to-tr from-[#663399] to-purple-600 rounded-2xl blur-2xl opacity-30 group-hover:opacity-50 transition duration-500"></div>

            <img
              src="https://i.ibb.co.com/k6y0mYT8/photo-2026-01-07-00-36-54.png"
              alt="Ibrahim Kayum"
              className="relative rounded-2xl shadow-2xl w-[350px] md:w-[420px] object-cover transform group-hover:scale-105 transition duration-500"
            />
          </div>

          {/* TEXT SIDE */}
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-[#663399]">Me</span>
            </h2>

            <p className="text-gray-300 mb-6 leading-relaxed">
              I’m{" "}
              <span className="text-white font-semibold">Ibrahim Kayum</span>, a
              Shopify Conversion & Optimization Specialist with 3+ years of
              hands-on experience helping brands increase revenue through
              strategic UX improvements and performance optimization.
            </p>

            <p className="text-gray-400 mb-8 leading-relaxed">
              I’ve completed over{" "}
              <span className="text-white font-semibold">
                200+ Shopify projects
              </span>
              and later advanced to Project Manager, where I guided and
              monitored more than{" "}
              <span className="text-white font-semibold">
                3,000+ stores globally
              </span>
              .
            </p>

            {/* STATS GRID */}
            <div className="grid grid-cols-3 gap-6 mt-8">
              <div className="bg-[#111] p-6 rounded-xl text-center hover:bg-[#1a1a1a] transition">
                <h3 className="text-3xl font-bold text-[#663399]">200+</h3>
                <p className="text-gray-400 text-sm mt-2">Projects Completed</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl text-center hover:bg-[#1a1a1a] transition">
                <h3 className="text-3xl font-bold text-[#663399]">3,000+</h3>
                <p className="text-gray-400 text-sm mt-2">Projects Monitored</p>
              </div>

              <div className="bg-[#111] p-6 rounded-xl text-center hover:bg-[#1a1a1a] transition">
                <h3 className="text-3xl font-bold text-[#663399]">4+</h3>
                <p className="text-gray-400 text-sm mt-2">Countries Served</p>
              </div>
            </div>

            <div className="mt-10">
              <a
                href="#contact"
                className="inline-block bg-[#663399] px-8 py-3 rounded-full font-semibold hover:bg-purple-700 transition shadow-lg"
              >
                Work With Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
