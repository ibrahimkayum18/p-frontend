export default function CTA() {
  return (
    <section className="relative py-28 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden">
      {/* Glow Accent */}
      <div className="absolute w-[400px] h-[400px] bg-[#663399] opacity-20 blur-[180px] rounded-full -top-20 -right-20"></div>
      <div className="absolute w-[300px] h-[300px] bg-purple-600 opacity-20 blur-[180px] rounded-full -bottom-10 -left-10"></div>

      <div className="container mx-auto px-6 relative z-10 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8">
          Ready to boost your{" "}
          <span className="text-[#663399]">Shopify store revenue?</span>
        </h2>
        <p className="text-gray-400 mb-12 max-w-xl mx-auto">
          Work with a Shopify Conversion & Optimization Specialist to increase
          conversions, optimize UX, and scale your revenue performance.
        </p>

        <a
          href="#contact"
          className="inline-block bg-gradient-to-r from-[#663399] to-purple-600 hover:from-purple-600 hover:to-[#663399] text-white font-semibold px-10 py-4 rounded-full shadow-lg transition-all duration-300"
        >
          Book Your Free Audit
        </a>
      </div>
    </section>
  );
}
