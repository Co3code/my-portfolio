import { Github, Twitter, Linkedin, Instagram, ArrowUp } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="py-16 px-6 bg-white border-t border-zinc-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center gap-10">
          {/* Brand Signature */}
          <div className="group cursor-pointer" onClick={scrollToTop}>
            <div className="text-3xl font-serif font-bold tracking-tighter text-zinc-900 flex items-center gap-1">
              AC<span className="italic font-normal text-zinc-300 group-hover:text-zinc-900 transition-colors">.</span>
            </div>
            <p className="text-[10px] uppercase tracking-[0.3em] text-zinc-400 mt-1 font-bold">Digital Developer</p>
          </div>

          {/* Social Links with Tooltips/Hover Effect */}
          <div className="flex items-center space-x-8">
            {[
              { icon: <Github size={20} />, href: "https://github.com/Co3code", label: "Github" },
              { icon: <Linkedin size={20} />, href: "#", label: "LinkedIn" },
              { icon: <Twitter size={20} />, href: "#", label: "Twitter" },
              { icon: <Instagram size={20} />, href: "#", label: "Instagram" },
            ].map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-zinc-400 hover:text-zinc-900 transition-all duration-300 hover:-translate-y-1"
                aria-label={social.label}
              >
                {social.icon}
              </a>
            ))}
          </div>

          {/* Copyright & Credits */}
          <div className="text-right">
            <p className="text-sm text-zinc-400 font-medium">
              © {currentYear} <span className="text-zinc-900 font-bold">AC</span>
            </p>
            <p className="text-[10px] text-zinc-300 uppercase tracking-widest mt-1">Built with React & Passion</p>
          </div>
        </div>

        {/* Subtle Back to Top for Mobile */}
        <div className="mt-12 flex justify-center md:hidden">
          <button
            onClick={scrollToTop}
            className="p-3 rounded-full bg-zinc-50 text-zinc-400 hover:bg-zinc-900 hover:text-white transition-all"
          >
            <ArrowUp size={16} />
          </button>
        </div>
      </div>
    </footer>
  );
}
