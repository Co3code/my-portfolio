import { motion } from "motion/react";
import { ArrowRight, Download } from "lucide-react";
import hero from "../assets/image.jpg";

export default function Hero() {
  const techStack = [
    "React",
    "Tailwind CSS",
    "JavaScript",
    "Next.js",
    "Node.js",
    "Framer Motion",
    "TypeScript",
    "Vite",
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0a0a0f]"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div className="absolute -top-24 -right-24 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(120,90,255,0.18) 0%, transparent 70%)" }}
      />
      <div className="absolute -bottom-12 left-[10%] w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,100,80,0.12) 0%, transparent 70%)" }}
      />
      <div className="absolute top-[40%] left-[40%] w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(60,180,150,0.10) 0%, transparent 70%)" }}
      />

      {/* Main Content */}
      <div className="relative z-10 max-w-6xl mx-auto w-full px-6 sm:px-10 pt-24 pb-16 flex flex-col-reverse md:flex-row items-center justify-between gap-12">

        {/* ── Text Column ── */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.04] text-white/55 text-[10px] font-medium tracking-widest uppercase mb-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.05, duration: 0.6 }}
          >
            <span className="relative flex h-[6px] w-[6px]">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-[6px] w-[6px] bg-green-400" />
            </span>
            Available for Projects
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="font-serif text-[clamp(2.8rem,6vw,5.5rem)] leading-[1.05] text-[#f0ede6] mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.7 }}
          >
            Hi, I'm{" "}
            <em className="italic text-[rgba(180,160,255,0.9)]">Anthony</em>
            <br />
            Co Untian Jr.
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            className="text-lg sm:text-xl text-[#f0ede6]/40 italic font-light mb-8"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15, duration: 0.7 }}
          >
            Aspiring Web Developer.
          </motion.p>

          {/* Description */}
          <motion.p
            className="text-sm sm:text-base text-[#f0ede6]/50 leading-relaxed max-w-md mx-auto md:mx-0 mb-10"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.7 }}
          >
            Crafting clean and modern digital experiences with a focus on{" "}
            <span className="text-[#f0ede6]/85 font-medium">user-centric design</span>.
            Based in the Philippines.
          </motion.p>

          {/* Buttons */}
          <motion.div
            className="flex flex-wrap gap-3 justify-center md:justify-start mb-12"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.25, duration: 0.7 }}
          >
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#f0ede6] text-[#0a0a0f] rounded-full text-[11px] font-semibold tracking-widest uppercase transition-all duration-300 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(240,237,230,0.15)] group"
            >
              View My Work
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="/AnthonyCo_Resume.pdf"
              download="AnthonyCo_Resume.pdf"
              className="inline-flex items-center gap-2 px-6 py-3 border border-white/15 text-[#f0ede6]/70 rounded-full text-[11px] font-medium tracking-widest uppercase transition-all duration-300 hover:border-white/35 hover:text-[#f0ede6] hover:-translate-y-0.5"
            >
              Download CV
              <Download size={14} />
            </a>
          </motion.div>

          {/* Tech Slider */}
          <motion.div
            className="relative overflow-hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.35, duration: 0.8 }}
          >
            {/* Fade edges */}
            <div className="absolute inset-y-0 left-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to right, #0a0a0f, transparent)" }}
            />
            <div className="absolute inset-y-0 right-0 w-16 z-10 pointer-events-none"
              style={{ background: "linear-gradient(to left, #0a0a0f, transparent)" }}
            />

            <motion.div
              className="flex gap-10 whitespace-nowrap py-3"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, i) => (
                <span
                  key={i}
                  className="inline-flex items-center gap-2 text-[10px] font-medium tracking-[0.15em] uppercase text-[#f0ede6]/30 hover:text-[#f0ede6]/70 transition-colors cursor-default"
                >
                  <span className="w-1 h-1 rounded-full bg-white/20 flex-shrink-0" />
                  {tech}
                </span>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>

        {/* ── Image Column ── */}
        <motion.div
          className="w-full md:w-auto flex justify-center"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          <div className="relative w-[260px] h-[330px] sm:w-[300px] sm:h-[375px]">

            {/* Photo */}
            <div className="w-full h-full rounded-[20px] overflow-hidden border border-white/8 relative">
              <img
                src={hero}
                alt="Anthony Co Untian Jr."
                className="w-full h-full object-cover"
              />
              {/* inner glow overlay */}
              <div
                className="absolute inset-0 rounded-[20px]"
                style={{ background: "radial-gradient(ellipse at 60% 30%, rgba(120,90,255,0.12), transparent 70%)" }}
              />
            </div>

            {/* Deco border */}
            <div className="absolute -inset-2.5 rounded-[28px] border border-white/5 pointer-events-none" />

            {/* Deco dot */}
            <div className="absolute bottom-5 -right-1.5 w-2.5 h-2.5 rounded-full bg-[rgba(120,90,255,0.7)]"
              style={{ boxShadow: "0 0 12px rgba(120,90,255,0.9)" }}
            />

            {/* Floating card — left */}
            <motion.div
              className="absolute -left-12 top-14 bg-[rgba(15,14,22,0.85)] border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 2 }}
            >
              <span className="block text-[#f0ede6] text-2xl leading-none" style={{ fontFamily: "'DM Serif Display', serif" }}>3+</span>
              <span className="block text-[10px] tracking-widest uppercase text-[#f0ede6]/35 mt-0.5">Years Learning</span>
            </motion.div>

            {/* Floating card — right */}
            <motion.div
              className="absolute -right-12 bottom-14 bg-[rgba(15,14,22,0.85)] border border-white/10 rounded-2xl px-4 py-3 backdrop-blur-md"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0 }}
            >
              <span className="block text-[#f0ede6] text-2xl leading-none" style={{ fontFamily: "'DM Serif Display', serif" }}>10+</span>
              <span className="block text-[10px] tracking-widest uppercase text-[#f0ede6]/35 mt-0.5">Projects Built</span>
            </motion.div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}