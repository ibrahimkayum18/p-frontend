import React from "react";

export default function About() {
  return (
    <section
      id="about"
      className="relative py-10 md:py-24 bg-gradient-to-b from-black via-[#050806] to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[550px] h-[550px] bg-[#95BF47]/15 blur-[200px] rounded-full -top-32 -left-32"></div>

      <div className="absolute w-[450px] h-[450px] bg-emerald-500/10 blur-[180px] rounded-full bottom-0 right-0"></div>

      {/* Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px]" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Image */}
          <div className="relative flex justify-center group">
            {/* Glow */}
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#95BF47] to-emerald-500 opacity-20 blur-2xl group-hover:opacity-40 transition duration-500"></div>

            <img
              src="https://i.ibb.co.com/k6y0mYT8/photo-2026-01-07-00-36-54.png"
              alt="Ibrahim Kayum"
              className="relative w-[320px] md:w-[420px] rounded-3xl object-cover shadow-2xl border border-green-500/20 transition duration-500 group-hover:scale-105 group-hover:-rotate-1"
            />

            {/* Experience Badge */}
            <div className="absolute -bottom-6 right-0 bg-[#0d0d0d]/90 backdrop-blur-xl border border-green-500/20 px-6 py-4 rounded-2xl shadow-xl">
              <p className="text-sm text-gray-400">Experience</p>

              <h4 className="text-xl font-bold text-[#95BF47]">
                3+ Years
              </h4>
            </div>
          </div>

          {/* Right Content */}
          <div>
            {/* Sub Heading */}
            <p className="uppercase tracking-[4px] text-green-400 text-sm font-medium mb-4">
              About Me
            </p>

            {/* Heading */}
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold leading-tight mb-6">
              Helping Shopify Brands
              <br />

              <span className="bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent">
                Grow Through Better UX & CRO
              </span>
            </h2>

            {/* Intro */}
            <p className="text-gray-300 text-lg leading-relaxed mb-6">
              I'm{" "}
              <span className="font-semibold text-white">
                Ibrahim Kayum
              </span>
              , a Shopify Developer and Conversion Rate Optimization Specialist
              passionate about creating fast, modern, and high-converting
              Shopify stores that turn visitors into loyal customers.
            </p>

            <p className="text-gray-400 leading-8 mb-10">
              Over the past three years, I've successfully completed 200+
              Shopify projects and contributed to more than 3,000 stores
              worldwide. My focus is on combining clean development,
              user-centered design, and data-driven CRO strategies to maximize
              revenue and improve customer experience.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-5">
              {[
                {
                  value: "200+",
                  label: "Projects",
                },
                {
                  value: "3K+",
                  label: "Stores",
                },
                {
                  value: "4+",
                  label: "Countries",
                },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="rounded-2xl border border-green-500/20 bg-[#0d0d0d]/80 backdrop-blur-xl p-6 text-center transition duration-300 hover:-translate-y-2 hover:border-[#95BF47]/60 hover:shadow-[0_0_30px_rgba(149,191,71,0.18)]"
                >
                  <h3 className="text-3xl font-bold text-[#95BF47]">
                    {stat.value}
                  </h3>

                  <p className="text-sm text-gray-400 mt-2">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="mt-12 flex flex-wrap gap-4">
              <a
                href="#contact"
                className="w-full sm:w-auto text-center bg-gradient-to-r from-[#95BF47] to-emerald-500 text-black font-semibold px-8 py-3 rounded-full shadow-lg hover:scale-105 hover:shadow-green-500/40 transition-all duration-300"
              >
                Work With Me
              </a>

              <a
                href="#portfolio"
                className="w-full sm:w-auto text-center border border-green-500/30 px-8 py-3 rounded-full hover:bg-[#95BF47] hover:text-black transition-all duration-300"
              >
                View Case Studies
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}