import { Github, Linkedin, Facebook, ArrowUp, Instagram } from "lucide-react";

const socials = [
  { icon: <Github size={18} />, href: "https://github.com/Tch-Lian", label: "Github" },
  { icon: <Linkedin size={18} />, href: "https://www.linkedin.com/in/anthony-obedencio-a20555395/", label: "LinkedIn" },
  { icon: <Instagram size={18} />, href: "https://www.instagram.com/co_untian?igsh=Zm5uajQ1MjkxbTFt", label: "Instagram" },
  { icon: <Facebook size={18} />, href: "https://www.facebook.com/cy.yan.539259", label: "Facebook" },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <footer className="relative bg-[#0a0a0f] border-t border-white/[0.05] px-6 py-12 overflow-hidden">

      {/* Subtle top glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-px pointer-events-none"
        style={{ background: "linear-gradient(to right, transparent, rgba(120,90,255,0.3), transparent)" }}
      />

      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Brand */}
          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center md:items-start cursor-pointer bg-transparent border-none p-0"
          >
            <div
              className="text-3xl text-[#f0ede6] tracking-tighter flex items-center gap-0.5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              AC
              <em
                className="italic font-normal text-[#f0ede6]/20 group-hover:text-[rgba(180,160,255,0.7)] transition-colors duration-300"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                .
              </em>
            </div>
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#f0ede6]/25 mt-0.5 font-medium">
              Digital Developer
            </p>
          </button>

          {/* Social Links */}
          <div className="flex items-center gap-6">
            {socials.map((s) => (
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={s.label}
                className="w-9 h-9 rounded-full border border-white/[0.08] bg-white/[0.03] flex items-center justify-center text-[#f0ede6]/35 hover:text-[#f0ede6] hover:border-white/[0.2] hover:-translate-y-1 transition-all duration-300"
              >
                {s.icon}
              </a>
            ))}
          </div>

          {/* Copyright */}
          <div className="text-center md:text-right">
            <p className="text-[0.82rem] text-[#f0ede6]/35">
              © {currentYear}{" "}
              <span className="text-[#f0ede6]/70 font-medium">AC</span>
            </p>
            <p className="text-[9px] uppercase tracking-[0.15em] text-[#f0ede6]/20 mt-1">
              Built with React & Passion
            </p>
          </div>
        </div>

        {/* Back to top — mobile */}
        <div className="mt-10 flex justify-center md:hidden">
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full border border-white/[0.08] bg-white/[0.03] text-[#f0ede6]/35 hover:bg-[#f0ede6] hover:text-[#0a0a0f] hover:border-[#f0ede6] transition-all duration-300 flex items-center justify-center"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </footer>
  );
}