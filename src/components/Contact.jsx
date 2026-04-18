export default function Contact() {
  return (
    <section
      id="contact"
      className="relative py-28 bg-gradient-to-b from-black via-[#0f0f0f] to-black text-white overflow-hidden"
    >
      {/* Background Glow */}
      <div className="absolute w-[500px] h-[500px] bg-[#663399] opacity-20 blur-[200px] rounded-full top-0 right-0"></div>
      <div className="absolute w-[400px] h-[400px] bg-purple-600 opacity-20 blur-[180px] rounded-full bottom-0 left-0"></div>

      <div className="container mx-auto px-6 relative z-10 max-w-xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12">
          Get in <span className="text-[#663399]">Touch</span>
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Have a Shopify project in mind? Fill out the form below and I’ll get
          back to you as soon as possible.
        </p>

        <form className="space-y-6 bg-white/5 backdrop-blur-md border border-white/10 rounded-2xl p-8 shadow-lg">
          {/* Name */}
          <div className="relative">
            <input
              type="text"
              placeholder="Name"
              className="w-full p-4 border border-white/20 rounded-xl bg-transparent text-white placeholder-transparent focus:outline-none focus:border-[#663399] peer transition"
            />
            <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#663399] peer-focus:text-sm">
              Name
            </label>
          </div>

          {/* Email */}
          <div className="relative">
            <input
              type="email"
              placeholder="Email"
              className="w-full p-4 border border-white/20 rounded-xl bg-transparent text-white placeholder-transparent focus:outline-none focus:border-[#663399] peer transition"
            />
            <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#663399] peer-focus:text-sm">
              Email
            </label>
          </div>

          {/* Message */}
          <div className="relative">
            <textarea
              rows="4"
              placeholder="Message"
              className="w-full p-4 border border-white/20 rounded-xl bg-transparent text-white placeholder-transparent focus:outline-none focus:border-[#663399] peer transition"
            ></textarea>
            <label className="absolute left-4 top-4 text-gray-400 text-sm transition-all peer-placeholder-shown:top-4 peer-placeholder-shown:text-gray-400 peer-placeholder-shown:text-base peer-focus:top-1 peer-focus:text-[#663399] peer-focus:text-sm">
              Message
            </label>
          </div>

          {/* Submit */}
          <button className="w-full bg-[#663399] hover:bg-purple-700 text-white font-semibold py-3 rounded-xl shadow-lg transition">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
