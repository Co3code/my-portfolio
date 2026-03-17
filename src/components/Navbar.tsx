import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

const navLinks = [
  { name: "Home", path: "/#home" },
  { name: "Projects", path: "/#projects" },
  { name: "FAQ", path: "/#faq" },
  { name: "Contact", path: "/#contact" },
  { name: "View App", path: "/view-app" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[rgba(10,10,15,0.85)] backdrop-blur-md border-b border-white/[0.06] py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-5xl mx-auto px-6 sm:px-10 flex items-center justify-between">

        {/* Brand */}
        <Link
          to="/"
          className="text-xl text-[#f0ede6] tracking-tighter flex items-center gap-0.5 hover:opacity-80 transition-opacity"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          AC
          <em
            className="italic font-normal text-[rgba(180,160,255,0.5)]"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            .
          </em>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className="text-[11px] font-medium tracking-[0.12em] uppercase text-[#f0ede6]/40 hover:text-[#f0ede6] transition-colors duration-300"
            >
              {link.name}
            </Link>
          ))}
        </div>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <a
            href="/#contact"
            className="hidden md:inline-flex items-center px-5 py-2 rounded-full border border-white/[0.1] bg-white/[0.04] text-[10px] font-medium tracking-[0.15em] uppercase text-[#f0ede6]/60 hover:border-white/[0.2] hover:text-[#f0ede6] transition-all duration-300"
          >
            Hire Me
          </a>

          <button
            className="md:hidden w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#f0ede6]/50 hover:text-[#f0ede6] hover:border-white/[0.18] transition-all"
            onClick={() => setIsOpen(!isOpen)}
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={16} /> : <Menu size={16} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-[rgba(10,10,15,0.97)] backdrop-blur-md border-b border-white/[0.06] px-6 py-6 flex flex-col gap-5"
          >
            {navLinks.map((link, i) => (
              <motion.div
                key={link.name}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: i * 0.05, duration: 0.2 }}
              >
                <Link
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="block text-[13px] font-medium tracking-[0.12em] uppercase text-[#f0ede6]/40 hover:text-[#f0ede6] transition-colors duration-300"
                >
                  {link.name}
                </Link>
              </motion.div>
            ))}

            <div className="pt-2 border-t border-white/[0.06]">
              <a
                href="/#contact"
                onClick={() => setIsOpen(false)}
                className="inline-flex items-center px-5 py-2.5 rounded-full border border-white/[0.1] bg-white/[0.04] text-[10px] font-medium tracking-[0.15em] uppercase text-[#f0ede6]/60 hover:text-[#f0ede6] hover:border-white/[0.2] transition-all"
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
} 