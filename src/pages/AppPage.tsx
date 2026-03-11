import { motion } from "motion/react";
import { Download, Smartphone, Shield, Zap, Globe, ArrowRight } from "lucide-react";
import { useEffect } from "react";
import appScreenshot from "../assets/poomodoro.jpg";
import calcScreenshot from "../assets/cal.jpg";

export default function AppPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const features = [
    {
      icon: <Zap size={24} />,
      title: "Performance First",
      desc: "Lightweight builds optimized with EAS to ensure smooth animations and instant startup.",
    },
    {
      icon: <Shield size={24} />,
      title: "Privacy Focused",
      desc: "Minimal permissions requested. Your data stays on your device—no background tracking.",
    },
    {
      icon: <Smartphone size={24} />,
      title: "Native Experience",
      desc: "Built with React Native for a fluid feel that respects system-wide design and gestures.",
    },
    {
      icon: <Globe size={24} />,
      title: "Open Source",
      desc: "Transparent codebases hosted on GitHub. Built with clean, maintainable architecture.",
    },
  ];

  return (
    <main className="pt-32 pb-20 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {/* SECTION 1: POMODORO APP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-40">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6 block">
              Focus Timer App
            </span>

            <h1 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 mb-8 leading-tight">
              Pomodoro{" "}
              <span className="py-0.5 px-2 rounded bg-green-50 text-green-600 text-[10px] font-bold border border-green-100">
                v2.0.0 Stable
              </span>
              <br />
              <span className="italic font-normal text-zinc-500 text-4xl md:text-6xl">Efficiency Redefined.</span>
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
              Master your time with a simple, clean Pomodoro timer. Built to eliminate distractions and help you
              maintain deep focus throughout your sessions.
            </p>

            <a
              href="https://github.com/Co3code/pomodoro-app/releases/download/v2.0.0/pomodoro-v2.0.0.apk"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-200 text-zinc-900 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-zinc-50 transition-all shadow-sm"
            >
              <Download className="mr-2" size={18} />
              Download APK
            </a>
          </motion.div>

          {/* Mockup Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative px-4"
          >
            <div className="relative aspect-[9/18] max-w-[300px] sm:max-w-[320px] mx-auto bg-zinc-900 rounded-[3rem] border-[12px] border-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
              <img src={appScreenshot} alt="Pomodoro App" className="w-full h-full object-cover" />
            </div>
            {/* Decorative Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-zinc-100 rounded-full blur-3xl -z-10 opacity-50" />
          </motion.div>
        </div>

        {/* SECTION 2: AC CALCULATOR */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-40">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="lg:order-last px-4"
          >
            <div className="relative aspect-[9/18] max-w-[300px] sm:max-w-[320px] mx-auto bg-zinc-900 rounded-[3rem] border-[12px] border-zinc-900 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3)] overflow-hidden">
              <img src={calcScreenshot} alt="AC Calculator" className="w-full h-full object-cover" />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-zinc-400 mb-6 block">
              Utility Tool
            </span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 mb-8 leading-tight">
              AC Calc{" "}
              <span className="py-0.5 px-2 rounded bg-blue-50 text-blue-600 text-[10px] font-bold border border-blue-100">
                v2.0.0
              </span>{" "}
              <br />
              <span className="italic font-normal text-zinc-500 text-4xl md:text-6xl">Simple. Accurate.</span>
            </h2>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
              A minimalist calculator built for speed. Handling daily calculations with a sleek interface and haptic
              feedback.
            </p>

            <a
              href="https://github.com/Co3code/my-cal/releases/download/v2.0.0.0/AC-Calculator-v2.0.0.apk"
              className="inline-flex items-center justify-center px-8 py-4 border-2 border-zinc-200 text-zinc-900 rounded-full font-bold uppercase text-xs tracking-widest hover:bg-zinc-50 transition-all shadow-sm"
            >
              <Download className="mr-2" size={18} />
              DOWNLOAD APK
            </a>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-40">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="p-10 bg-zinc-50/50 rounded-[2rem] border border-zinc-100 hover:border-zinc-300 transition-all group"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl text-zinc-900 mb-6 shadow-sm group-hover:scale-110 transition-transform">
                {feature.icon}
              </div>
              <h3 className="text-lg font-bold text-zinc-900 mb-2">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* CTA Footer */}
        <motion.div
          className="bg-zinc-900 rounded-[3rem] p-12 md:p-24 text-center text-white relative overflow-hidden"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <div className="relative z-10">
            <h2 className="text-4xl md:text-6xl font-serif font-bold mb-8">
              Ready to see <br /> <span className="italic font-normal text-zinc-400">more progress?</span>
            </h2>
            <a
              href="https://github.com/"
              className="inline-flex items-center gap-2 text-white font-bold uppercase text-xs tracking-[0.2em] hover:gap-4 transition-all"
            >
              Follow on GitHub <ArrowRight size={16} />
            </a>
          </div>
          {/* Subtle background glow */}
          <div className="absolute top-0 right-0 w-96 h-96 bg-white/5 blur-[100px] rounded-full" />
        </motion.div>
      </div>
    </main>
  );
}
