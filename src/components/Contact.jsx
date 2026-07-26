import { useState } from "react";

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
      const res = await fetch("http://localhost:5000/contact", {
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
    <section id="contact" className="py-28 bg-black text-white">
      <div className="max-w-xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-8">
          Get in <span className="text-[#663399]">Touch</span>
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Name"
            className="w-full p-4 bg-transparent border rounded"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Email"
            className="w-full p-4 bg-transparent border rounded"
          />

          <textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Message"
            className="w-full p-4 bg-transparent border rounded"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#663399] py-3 rounded"
          >
            {loading ? "Sending..." : "Send Message"}
          </button>
        </form>

        {/* Response Message */}
        {responseMsg && (
          <p className="mt-4 text-center">{responseMsg}</p>
        )}
      </div>
    </section>
  );
}