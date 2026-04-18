import { useEffect, useState } from "react";

export default function Experience() {
  const stats = [
    { label: "Projects Completed", value: 200 },
    { label: "Projects Monitored", value: 3000 },
    { label: "Countries Served", value: 4 },
  ];

  const [counters, setCounters] = useState(stats.map(() => 0));

  // Animated counter effect
  useEffect(() => {
    const intervals = stats.map((stat, i) => {
      return setInterval(() => {
        setCounters((prev) => {
          const newCounters = [...prev];
          if (newCounters[i] < stat.value) {
            newCounters[i] += Math.ceil(stat.value / 100);
          }
          return newCounters;
        });
      }, 20);
    });

    return () => intervals.forEach((id) => clearInterval(id));
  }, []);

  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden">
      {/* Glow Background */}
      <div className="absolute w-[400px] h-[400px] bg-[#663399] opacity-20 blur-[200px] rounded-full -top-10 -left-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12">
          My <span className="text-[#663399]">Experience</span>
        </h2>

        <div className="grid md:grid-cols-3 gap-12">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="group bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-10 transition-all duration-500 hover:-translate-y-3 hover:border-[#663399]"
            >
              <h3 className="text-5xl font-extrabold text-[#663399] mb-4">
                {counters[i]}
                {stat.label === "Countries Served" ? "+" : "+"}
              </h3>
              <p className="text-gray-400 font-semibold">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
