import { motion } from "motion/react";
import { Download, Smartphone, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import appScreenshot from "../assets/poomodoro.jpg";
import calcScreenshot from "../assets/cal.jpg";

const features = [
  {
    icon: <Zap size={20} />,
    title: "Performance First",
    desc: "Lightweight builds optimized with EAS to ensure smooth animations and instant startup.",
  },
  {
    icon: <Shield size={20} />,
    title: "Privacy Focused",
    desc: "Minimal permissions requested. Your data stays on your device—no background tracking.",
  },
  {
    icon: <Smartphone size={20} />,
    title: "Native Experience",
    desc: "Built with React Native for a fluid feel that respects system-wide design and gestures.",
  },
  {
    icon: <Globe size={20} />,
    title: "Open Source",
    desc: "Transparent codebases hosted on GitHub. Built with clean, maintainable architecture.",
  },
];

export default function AppPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="relative bg-[#0a0a0f] pt-32 pb-24 overflow-hidden">

      {/* Background Grid */}
      <div
        className="fixed inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">

        {/* ── SECTION 1: Pomodoro ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-40">

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/25 mb-6">
              Focus Timer App
            </span>

            <h1
              className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-[#f0ede6] tracking-tight mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Pomodoro
            </h1>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.2)] text-[9px] font-medium tracking-widest uppercase text-green-400">
                v2.0.0 Stable
              </span>
            </div>

            <p
              className="text-[clamp(1.8rem,3vw,2.8rem)] leading-none text-[#f0ede6]/30 mb-8"
              style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
            >
              Efficiency Redefined.
            </p>

            <p className="text-[0.92rem] text-[#f0ede6]/45 leading-relaxed max-w-md mb-10">
              Master your time with a simple, clean Pomodoro timer. Built to eliminate distractions and help you
              maintain deep focus throughout your sessions.
            </p>

            <a
              href="https://github.com/Co3code/pomodoro-app/releases/download/v2.0.0/pomodoro-v2.0.0.apk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] bg-white/[0.04] text-[#f0ede6]/65 text-[11px] font-medium tracking-[0.15em] uppercase hover:border-white/[0.25] hover:text-[#f0ede6] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={14} />
              Download APK
            </a>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center px-4"
          >
            <div className="relative aspect-[9/18] w-full max-w-[260px] sm:max-w-[280px] bg-[#1a1826] rounded-[2.8rem] border-[10px] border-[#1a1826] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
              <img src={appScreenshot} alt="Pomodoro App" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-[2rem]" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
            </div>
            {/* Glow behind phone */}
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full -z-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(120,90,255,0.18) 0%, transparent 70%)" }}
            />
          </motion.div>
        </div>

        {/* ── SECTION 2: AC Calc ── */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-40">

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, scale: 0.93 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="relative flex justify-center px-4 lg:order-last"
          >
            <div className="relative aspect-[9/18] w-full max-w-[260px] sm:max-w-[280px] bg-[#1a1826] rounded-[2.8rem] border-[10px] border-[#1a1826] shadow-[0_60px_120px_-20px_rgba(0,0,0,0.6)] overflow-hidden">
              <img src={calcScreenshot} alt="AC Calculator" className="w-full h-full object-cover" />
              <div className="absolute inset-0 rounded-[2rem]" style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }} />
            </div>
            <div
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full -z-10 pointer-events-none"
              style={{ background: "radial-gradient(circle, rgba(255,100,80,0.12) 0%, transparent 70%)" }}
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/25 mb-6">
              Utility Tool
            </span>

            <h2
              className="text-[clamp(3rem,6vw,5rem)] leading-[1.05] text-[#f0ede6] tracking-tight mb-3"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              AC Calc
            </h2>

            <div className="flex items-center gap-3 mb-6">
              <span className="inline-flex items-center px-3 py-1 rounded-full bg-[rgba(96,165,250,0.08)] border border-[rgba(96,165,250,0.2)] text-[9px] font-medium tracking-widest uppercase text-blue-400">
                v2.0.0
              </span>
            </div>

            <p
              className="text-[clamp(1.8rem,3vw,2.8rem)] leading-none text-[#f0ede6]/30 mb-8"
              style={{ fontFamily: "'DM Serif Display', serif", fontStyle: "italic" }}
            >
              Simple. Accurate.
            </p>

            <p className="text-[0.92rem] text-[#f0ede6]/45 leading-relaxed max-w-md mb-10">
              A minimalist calculator built for speed. Handling daily calculations with a sleek interface and haptic
              feedback.
            </p>

            <a
              href="https://github.com/Co3code/my-cal/releases/download/v2.0.0.0/AC-Calculator-v2.0.0.apk"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-white/[0.12] bg-white/[0.04] text-[#f0ede6]/65 text-[11px] font-medium tracking-[0.15em] uppercase hover:border-white/[0.25] hover:text-[#f0ede6] hover:-translate-y-0.5 transition-all duration-300"
            >
              <Download size={14} />
              Download APK
            </a>
          </motion.div>
        </div>

        {/* ── Features Grid ── */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-40">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="p-7 bg-white/[0.025] border border-white/[0.07] rounded-2xl hover:border-white/[0.14] hover:bg-white/[0.04] transition-all duration-300 group"
            >
              <div className="w-10 h-10 flex items-center justify-center rounded-xl border border-white/[0.08] bg-white/[0.04] text-[#f0ede6]/45 mb-5 group-hover:text-[#f0ede6] group-hover:border-white/[0.15] transition-all duration-300">
                {feature.icon}
              </div>
              <h3
                className="text-[1rem] text-[#f0ede6] mb-2"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                {feature.title}
              </h3>
              <p className="text-[0.82rem] text-[#f0ede6]/35 leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* ── CTA Banner ── */}
        <motion.div
          className="relative rounded-2xl p-12 md:p-20 text-center overflow-hidden border border-white/[0.07]"
          style={{ background: "rgba(120,90,255,0.06)" }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Glow */}
          <div
            className="absolute top-0 right-0 w-80 h-80 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(120,90,255,0.15) 0%, transparent 70%)" }}
          />
          <div
            className="absolute bottom-0 left-0 w-60 h-60 rounded-full pointer-events-none"
            style={{ background: "radial-gradient(circle, rgba(255,100,80,0.08) 0%, transparent 70%)" }}
          />

          {/* Deco border top */}
          <div
            className="absolute top-0 left-1/2 -translate-x-1/2 w-[400px] h-px pointer-events-none"
            style={{ background: "linear-gradient(to right, transparent, rgba(120,90,255,0.4), transparent)" }}
          />

          <div className="relative z-10">
            <h2
              className="text-[clamp(2.2rem,5vw,4rem)] leading-[1.1] text-[#f0ede6] mb-8 tracking-tight"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Ready to see <br />
              <em className="italic text-[#f0ede6]/30" style={{ fontFamily: "'DM Serif Display', serif" }}>
                more progress?
              </em>
            </h2>

            <a
              href=""
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[#f0ede6]/50 text-[11px] font-medium tracking-[0.2em] uppercase hover:text-[#f0ede6] hover:gap-3 transition-all duration-300 group"
            >
              Follow on GitHub
              <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
            </a>
          </div>
        </motion.div>
      </div>
    </main>
  );
}