export default function Navbar() {
  return (
    <nav className="fixed w-full bg-white shadow-sm z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-xl font-bold text-primary">Ibrahim Kayum</h1>

        <div className="hidden md:flex space-x-8 font-medium">
          <a href="#about" className="hover:text-primary">
            About
          </a>
          <a href="#services" className="hover:text-primary">
            Services
          </a>
          <a href="#portfolio" className="hover:text-primary">
            Portfolio
          </a>
          <a href="#blogs" className="hover:text-primary">
            Blogs
          </a>
          <a href="#contact" className="hover:text-primary">
            Contact
          </a>
        </div>
      </div>
    </nav>
  );
}
