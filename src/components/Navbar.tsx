import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  // Handle scroll effect for glassmorphism
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll logic for same-page links
  const handleNavClick = (id) => {
    setIsOpen(false);
    if (location.pathname === "/") {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  };

  const navLinks = [
    { name: "Home", path: "/", id: "home" },
    { name: "About", path: "/", id: "about" },
    { name: "Projects", path: "/", id: "projects" },
    { name: "FAQ", path: "/", id: "faq" },
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
        scrolled ? "bg-white/70 backdrop-blur-xl border-b border-zinc-100 py-4 shadow-sm" : "bg-transparent py-8"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex justify-between items-center">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="text-2xl font-serif font-bold tracking-tighter text-zinc-900 group"
        >
          AC<span className="italic font-normal text-zinc-300 group-hover:text-zinc-900 transition-colors">.</span>
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-10">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              onClick={() => handleNavClick(link.id)}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-zinc-400 hover:text-zinc-900 transition-all"
            >
              {link.name}
            </Link>
          ))}

          {/* Action Button */}
          <Link
            to="/view-app"
            className="px-6 py-2.5 bg-zinc-900 text-white rounded-full text-[10px] font-bold uppercase tracking-[0.15em] hover:bg-zinc-800 transition-all hover:shadow-lg active:scale-95"
          >
            View Apps
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden p-2 text-zinc-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      {isOpen && (
        <div className="md:hidden fixed inset-0 top-[72px] bg-white z-50 px-8 py-12 flex flex-col space-y-8 animate-in slide-in-from-top duration-300">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-4xl font-serif font-bold text-zinc-900"
              onClick={() => handleNavClick(link.id)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/view-app"
            onClick={() => setIsOpen(false)}
            className="text-xl font-bold text-zinc-400 flex items-center gap-2"
          >
            View Mobile Apps <span className="text-zinc-900">→</span>
          </Link>
        </div>
      )}
    </nav>
  );
}
