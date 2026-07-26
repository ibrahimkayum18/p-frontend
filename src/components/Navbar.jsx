import { useState } from "react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Services", href: "#services" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Blogs", href: "#blogs" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50">
      <nav className="backdrop-blur-xl bg-black/60 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          
          {/* Logo */}
          <a
  href="#home"
  className="text-lg md:text-xl font-bold tracking-wide bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent"
>
  IBRAHIM KAYUM
</a>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-sm text-gray-300">
            {navLinks.map((link, i) => (
              <a
                key={i}
                href={link.href}
                className="hover:text-white transition"
              >
                {link.name}
              </a>
            ))}

            {/* CTA */}
            <a
              href="#contact"
              className="ml-2 bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] px-5 py-2 rounded-full text-white font-medium hover:scale-105 transition"
            >
              Book Audit
            </a>
          </div>

          {/* Mobile Button */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-2xl tracking-wide bg-gradient-to-r from-[#95BF47] via-emerald-400 to-green-300 bg-clip-text text-transparent"
          >
            {open ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile Menu */}
        {open && (
          <div className="md:hidden px-6 pb-6 bg-black/90 border-t border-white/10">
            <div className="flex flex-col gap-5 pt-4 text-gray-300">
              {navLinks.map((link, i) => (
                <a
                  key={i}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="hover:text-white transition"
                >
                  {link.name}
                </a>
              ))}

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-2 bg-gradient-to-r from-[#95BF47] to-[#5E8E3E] px-5 py-3 rounded-full text-center text-white font-medium"
              >
                Book Free Audit
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}