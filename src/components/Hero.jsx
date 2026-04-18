import { useEffect, useRef } from "react";

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        blobRef.current.style.transform = `translate3d(calc(${e.clientX}px - 50%), calc(${e.clientY}px - 50%), 0)`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-black text-white overflow-hidden">
      {/* 🔥 Gradient Blob */}
      <div
        ref={blobRef}
        className="fixed w-[650px] h-[650px] rounded-full pointer-events-none blur-[250px] -z-10 transition-all duration-300 ease-out"
        style={{
          backgroundImage: "linear-gradient(135deg, #663399 10%, #ff00f2)",
        }}
      />

      <div className="container mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* LEFT CONTENT */}
        <div>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight text-center md:text-left">
            I help Shopify stores increase{" "}
            <span className="text-primary">conversions & revenue</span>
          </h1>

          <p className="mt-6 text-gray-300 text-lg text-center md:text-left">
            Optimized product pages, mobile UX, and store designs that turn
            visitors into buyers.
          </p>

          <div className="mt-8 flex justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-white text-black px-8 py-3 rounded-full font-semibold hover:bg-gray-300 transition"
            >
              Book Free Audit
            </a>

            <a
              href="#portfolio"
              className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-black transition"
            >
              View Work
            </a>
          </div>
        </div>

        {/* RIGHT IMAGE (Hover Scroll Effect Included) */}
        <HoverImage />
      </div>
    </section>
  );
}

/* 🔥 Hover Scroll Screenshot Component */
function HoverImage() {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    const img = imageRef.current;
    if (img) {
      img.style.transform = `translateY(-${img.scrollHeight - 400}px)`;
    }
  };

  const handleMouseLeave = () => {
    const img = imageRef.current;
    if (img) {
      img.style.transform = "translateY(0)";
    }
  };

  return (
    <div
      className="relative h-[400px] overflow-hidden rounded-2xl shadow-2xl"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <img
        ref={imageRef}
        src="https://i.ibb.co.com/ccdKBG83/screencapture-terox-inc-myshopify-2026-02-28-06-28-57.png"
        alt="Shopify Preview"
        className="w-full transition-transform duration-[4000ms] ease-in-out"
      />
    </div>
  );
}
