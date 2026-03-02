import { motion } from "motion/react";
import { Download, Smartphone, Shield, Zap, Globe, Coffee, CheckCircle, Bell } from "lucide-react";
import { useEffect } from "react";
import appScreenshot from "../assets/poomodoro.jpg";

export default function AppPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="pt-32 pb-20">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Hero Section */}
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
              Switch between Focus Mode and Break Time with a simple, clean Pomodoro timer. Complete a 25-minute work
              session, enjoy a 5-minute break, and repeat. Stay consistent, eliminate distractions, and build real
              productivity momentum.
            </p>

            <div className="flex flex-wrap gap-4">
              <a
                href="https://github.com/Co3code/pomodoro-app/releases/download/v1.0.0/pomodoro.apk" // PASTE LINK HERE
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-bold hover:bg-zinc-800 transition-all group"
              >
                <Download className="mr-2" size={20} />
                Download APK
              </a>
              <button className="inline-flex items-center justify-center px-8 py-4 border border-zinc-200 text-zinc-900 rounded-full font-bold hover:bg-zinc-50 transition-all">
                Learn More
              </button>
            </div>
            <p className="mt-6 text-xs text-zinc-400 italic max-w-sm">
              * Note: Since this is an independent APK, you may need to select "Install Anyway" on Android.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative aspect-[9/16] max-w-[350px] mx-auto bg-zinc-100 rounded-[3rem] border-[8px] border-zinc-900 shadow-2xl overflow-hidden"
          >
            <img
              src={appScreenshot}
              alt="App Screenshot"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-32">
          {[
            {
              icon: <Zap />,
              title: "Study Mode",
              desc: "25-minute deep work sessions designed to maximize your focus and productivity.",
            },
            {
              icon: <Coffee />, // Make sure to import Coffee from 'lucide-react'
              title: "Dual Break Modes",
              desc: "Choose between a quick 5-minute Short Break or a 15-minute Long Break to recharge.",
            },
            {
              icon: <CheckCircle />, // Make sure to import CheckCircle from 'lucide-react'
              title: "Session Tracking",
              desc: "Automatically tracks your completed study sessions to visualize your daily progress.",
            },
            {
              icon: <Bell />, // Make sure to import Bell from 'lucide-react'
              title: "Tactile Alerts",
              desc: "Uses haptic vibration feedback to notify you exactly when a session or break ends.",
            },
          ].map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 bg-white rounded-3xl card-shadow"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-2xl text-zinc-900 mb-6">
                {feature.icon}
              </div>
              <h3 className="text-xl font-bold text-zinc-900 mb-3">{feature.title}</h3>
              <p className="text-zinc-500 text-sm leading-relaxed">{feature.desc}</p>
            </motion.div>
          ))}
        </div>

        {/* Detailed Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-zinc-50 rounded-[3rem] p-12 md:p-20"
        >
          <div className="max-w-3xl">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">Why Choose Pomodoro?</h2>

            <div className="space-y-6 text-lg text-zinc-500 leading-relaxed">
              <p>
                Built around the proven Pomodoro technique, this app keeps your workflow structured and intentional.
                Focus Mode pushes you into deep concentration, while Break Time ensures you recharge properly.
              </p>
              <p>
                With automatic session switching, vibration alerts, and clean controls, you can stay productive without
                overthinking your schedule.
              </p>
              <p>
                Just press start, enter Focus Mode, and let the timer guide your rhythm. Simple structure. Consistent
                results.
              </p>
            </div>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
