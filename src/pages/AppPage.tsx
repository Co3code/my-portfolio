import { motion } from "motion/react";
import { Download, Smartphone, Shield, Zap, Globe, Coffee, CheckCircle, Bell, Calculator } from "lucide-react";
import { useEffect } from "react";
import appScreenshot from "../assets/poomodoro.jpg";
// MAKE SURE TO ADD YOUR CALCULATOR IMAGE TO ASSETS AND IMPORT IT HERE:
import calcScreenshot from "../assets/cal.jpg";

export default function AppPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* SECTION 1: POMODORO APP */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.6 }}>
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold tracking-wider uppercase mb-6">
              Focus Timer App
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              Pomodoro <br />
              <span className="text-zinc-400">Focus Mode & Break Time.</span>
              <span className="ml-4 inline-block py-1 px-2 rounded bg-green-100 text-green-700 text-[10px] align-middle">
                v1.0.0 Stable
              </span>
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
              Switch between Focus Mode and Break Time with a simple, clean Pomodoro timer. Stay consistent, eliminate
              distractions, and build real productivity momentum.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Co3code/pomodoro-app/releases/download/v1.0.0/pomodoro.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all group"
              >
                <Download className="mr-2" size={20} />
                Download APK
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[9/16] max-w-[350px] mx-auto bg-zinc-100 rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden"
          >
            <img
              src={appScreenshot}
              alt="Pomodoro App"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* VISUAL DIVIDER */}
        <hr className="border-zinc-100 mb-32" />

        {/* SECTION 2: AC CALCULATOR (New Section) */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-32">
          {/* Image first on mobile, but second on desktop for alternating feel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-[9/16] max-w-[350px] mx-auto bg-zinc-100 rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden lg:order-last"
          >
            <img
              src={calcScreenshot}
              alt="AC Calculator App"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold tracking-wider uppercase mb-6">
              Utility Tool
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
              AC Calculator <br />
              <span className="text-zinc-400">Simple. Clean. Accurate.</span>
              <span className="ml-4 inline-block py-1 px-2 rounded bg-blue-100 text-blue-700 text-[10px] align-middle">
                v1.0.0
              </span>
            </h1>
            <p className="text-lg text-zinc-500 mb-10 max-w-xl leading-relaxed">
              A minimalist calculator designed by AC. Built for speed and clarity, handling your daily calculations with
              a sleek user interface and haptic feedback for every touch.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Co3code/my-cal/releases/download/v1.0.0/AC-Calculator-v1.0.0.apk"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all group"
              >
                <Download className="mr-2" size={20} />
                Download APK
              </a>
            </div>
            <p className="mt-6 text-xs text-zinc-400 italic max-w-sm">
              * Note: For AC Calculator, you may need to select "Install Anyway" on Android.
            </p>
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            {
              icon: <Zap />,
              title: "Performance First",
              desc: "Lightweight builds optimized with EAS to ensure smooth animations and instant startup on any device.",
            },
            {
              icon: <Shield />,
              title: "Privacy Focused",
              desc: "Minimal permissions requested. Your data stays on your device—no unnecessary background tracking.",
            },
            {
              icon: <Smartphone />,
              title: "Native Experience",
              desc: "Built with React Native for a fluid feel that respects Android's system-wide design and gestures.",
            },
            {
              icon: <Globe />,
              title: "Open Source",
              desc: "Transparent codebases hosted on GitHub. Built with clean, maintainable architecture and best practices.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-3xl border border-zinc-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-2xl text-zinc-900 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Footer/CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-50 rounded-[3rem] p-12 md:p-20 text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-6">Want to see more?</h2>
          <p className="text-lg text-zinc-500 mb-10 max-w-2xl mx-auto">
            I am constantly building new tools and apps. Check back often to see the latest additions to my mobile
            portfolio.
          </p>
          <a
            href="https://github.com/Co3code"
            target="_blank"
            className="text-zinc-900 font-bold underline underline-offset-4"
          >
            Follow my GitHub
          </a>
        </motion.div>
      </div>
    </main>
  );
}
