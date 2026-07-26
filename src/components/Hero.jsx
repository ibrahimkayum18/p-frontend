import { useEffect, useRef } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiFiverrFill } from "react-icons/ri";

export default function Hero() {
  const blobRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (blobRef.current) {
        blobRef.current.style.left = e.clientX + "px";
        blobRef.current.style.top = e.clientY + "px";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <section className="relative flex items-center bg-black text-white overflow-hidden pt-10 lg:pt-36 lg:pb-20">
      {/* Cursor Glow */}
      <div
        ref={blobRef}
        className="fixed w-[300px] h-[300px] md:w-[500px] md:h-[500px] rounded-full pointer-events-none blur-[120px] md:blur-[180px] opacity-35 -z-10 transition-all duration-75 ease-out"
        style={{
          background:
            "radial-gradient(circle, rgba(149,191,71,0.75) 0%, rgba(16,185,129,0.55) 40%, transparent 70%)",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Floating Glow */}
      <div className="absolute top-20 left-10 w-40 h-40 bg-green-500/20 rounded-full blur-3xl animate-pulse"></div>

      <div className="absolute bottom-20 right-10 w-52 h-52 bg-emerald-400/20 rounded-full blur-3xl animate-pulse"></div>

      {/* Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:35px_35px] -z-10" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10 py-20 lg:py-0">
        {/* Left */}
        <div className="text-center md:text-left order-2 md:order-1">
          <p className="text-xs md:text-sm uppercase tracking-widest text-green-400 mb-4">
            Shopify DEVELOPER | CRO Specialist
          </p>

          <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold leading-tight">
            Increase Your Store's
            <br />
            <span className="bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent">
              Conversions & Revenue
            </span>
          </h1>

          <p className="mt-6 text-gray-400 text-base md:text-lg max-w-xl mx-auto md:mx-0">
            I optimize Shopify stores with high-converting UX, faster
            performance, and data-driven strategies that turn visitors into
            paying customers.
          </p>

          <div className="mt-8 md:mt-10 flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a
              href="#contact"
              className="bg-gradient-to-r from-[#95BF47] to-emerald-500 px-6 md:px-8 py-3 rounded-full font-semibold text-black shadow-lg hover:scale-105 hover:shadow-green-500/40 transition-all duration-300"
            >
              Book Free Audit
            </a>

            <a
              href="#portfolio"
              className="border border-green-500/40 px-6 md:px-8 py-3 rounded-full hover:bg-[#95BF47] hover:text-black transition-all duration-300"
            >
              View Case Studies
            </a>
          </div>

          {/* Social Icons */}
          <div className="mt-8 md:mt-10 flex justify-center md:justify-start items-center gap-5">
  <a
    href="https://www.fiverr.com/ibrahim_kayum"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
  >
    <RiFiverrFill size={20} />
  </a>

  <a
    href="https://www.linkedin.com/in/s-m-ibrahim-kayum"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
  >
    <FaLinkedin size={20} />
  </a>

  <a
    href="https://www.instagram.com/ibrahim_kayum.shopify_cro"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
  >
    <FaInstagram size={20} />
  </a>

  <a
    href="https://wa.me/8801XXXXXXXXX"
    target="_blank"
    rel="noopener noreferrer"
    className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
  >
    <FaWhatsapp size={20} />
  </a>

  <a
    href="mailto:your@email.com"
    className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
  >
    <MdEmail size={22} />
  </a>
</div>
        </div>

        {/* Right */}
        <HoverImage />
      </div>
    </section>
  );
}

function HoverImage() {
  const imageRef = useRef(null);

  const handleMouseEnter = () => {
    const img = imageRef.current;

    if (img) {
      img.style.transform = `translateY(-${img.scrollHeight - 350}px)`;
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
      className="relative h-[300px] sm:h-[350px] md:h-[500px] overflow-hidden rounded-3xl border border-green-500/20 shadow-2xl group order-1 md:order-2"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <div className="absolute inset-0 rounded-3xl bg-gradient-to-tr from-[#95BF47]/20 to-emerald-500/20 blur-xl opacity-0 group-hover:opacity-100 transition duration-500" />

      <img
        ref={imageRef}
        src="https://i.ibb.co.com/ccdKBG83/screencapture-terox-inc-myshopify-2026-02-28-06-28-57.png"
        alt="Shopify Preview"
        className="w-full transition-transform duration-[4000ms] ease-in-out"
      />
    </div>
  );
}