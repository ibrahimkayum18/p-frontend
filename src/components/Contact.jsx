import { useState } from "react";
import {
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
} from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { RiFiverrFill } from "react-icons/ri";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [responseMsg, setResponseMsg] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setResponseMsg("");

    try {
      const res = await fetch("https://portfolio-backend-eight-weld.vercel.app/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {
        setResponseMsg("✅ Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      } else {
        setResponseMsg("❌ " + data.message);
      }
    } catch (error) {
      setResponseMsg("❌ Server error");
    }

    setLoading(false);
  };

  return (
    <section
  id="contact"
  className="relative py-24 bg-gradient-to-b from-black via-[#07110A] to-black text-white overflow-hidden"
>
  {/* Background Glow */}
  <div className="absolute -top-24 -left-24 w-[450px] h-[450px] bg-[#95BF47]/15 blur-[180px] rounded-full"></div>
  <div className="absolute -bottom-24 -right-24 w-[450px] h-[450px] bg-[#5E8E3E]/15 blur-[180px] rounded-full"></div>

  <div className="max-w-2xl mx-auto px-6 relative z-10">
    {/* Heading */}
    <div className="text-center mb-12">
      <p className="uppercase tracking-[0.3em] text-[#95BF47] text-sm mb-3">
        Contact
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        Let's Build Your{" "}
        <span className="bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] bg-clip-text text-transparent">
          Shopify Store
        </span>
      </h2>

      <p className="text-gray-400 mt-5 max-w-xl mx-auto">
        Have a Shopify project or need help improving conversions?
        Send me a message and I'll get back to you as soon as possible.
      </p>
    </div>

    {/* Contact Form */}
    <div className="bg-[#0F1611]/80 backdrop-blur-xl border border-[#95BF47]/15 rounded-3xl p-8 md:p-10 shadow-2xl">
      <form onSubmit={handleSubmit} className="space-y-6">
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your Name"
          className="w-full rounded-xl border border-[#95BF47]/20 bg-[#111A14] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#95BF47] focus:ring-2 focus:ring-[#95BF47]/20"
        />

        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Your Email"
          className="w-full rounded-xl border border-[#95BF47]/20 bg-[#111A14] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#95BF47] focus:ring-2 focus:ring-[#95BF47]/20"
        />

        <textarea
          rows="6"
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="Tell me about your Shopify project..."
          className="w-full rounded-xl border border-[#95BF47]/20 bg-[#111A14] px-5 py-4 text-white placeholder:text-gray-500 outline-none transition focus:border-[#95BF47] focus:ring-2 focus:ring-[#95BF47]/20 resize-none"
        />

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-xl bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] py-4 font-semibold text-black shadow-lg transition-all duration-300 hover:scale-[1.02] hover:shadow-[#95BF47]/30 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send Message"}
        </button>
      </form>

      {responseMsg && (
        <p className="mt-6 text-center text-gray-300">
          {responseMsg}
        </p>
      )}
    </div>

<div>
  <div className="mt-8 md:mt-10 flex justify-center items-center gap-5">
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
      href="https://wa.me/+8801609640109"
      target="_blank"
      rel="noopener noreferrer"
      className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
    >
      <FaWhatsapp size={20} />
    </a>
  
    <a
      href="mailto:smibrahimkayum@email.com"
      className="w-11 h-11 flex items-center justify-center rounded-full border border-green-500/30 text-green-400 hover:bg-green-500 hover:text-black transition-all duration-300 hover:scale-110"
    >
      <MdEmail size={22} />
    </a>
  </div>
</div>

  </div>
</section>
  );
}