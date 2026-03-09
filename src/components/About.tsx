import { motion } from "motion/react";
import myProfilePhoto from "../assets/photobg.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative order-2 lg:order-1"
          >
            {/* Soft Gold Glow */}
            <div
              className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-100/40 rounded-full blur-[100px] animate-pulse pointer-events-none"
              style={{ animationDuration: "6s" }}
            />

            <div className="relative aspect-[4/5] md:aspect-square rounded-[2rem] overflow-hidden bg-zinc-50 border border-gray-100 shadow-[0_20px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-500 hover:scale-[1.02] group">
              <img
                src={myProfilePhoto}
                alt="Profile"
                className="w-full h-full object-cover grayscale transition-all duration-1000 ease-in-out"
                referrerPolicy="no-referrer"
              />
            </div>

            {/* Decorative Frame in Soft Gray */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-4 border-r-4 border-gray-200 rounded-br-[2rem] -z-10" />
          </motion.div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="order-1 lg:order-2"
          >
            {/* Clean Badge */}
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-semibold tracking-[0.2em] uppercase mb-8 shadow-sm">
              Get to know me
            </span>

            <h2 className="text-6xl md:text-8xl font-serif font-bold text-gray-900 mb-8 leading-tight">
              About <span className="font-serif italic text-gray-600">Me</span>
            </h2>

            <div className="space-y-6 text-lg md:text-xl text-gray-600 leading-relaxed font-normal">
              <p>
                Hello! I'm a dedicated web developer with a strong passion for creating
                <span className="text-gray-900 font-semibold"> modern and efficient </span>
                web applications. I enjoy simplifying complex challenges and designing
                <span className="text-gray-600 font-medium"> fluid user interfaces</span>.
              </p>

              <p>
                My interest in technology grew into a genuine passion for development. I'm always exploring
                <span className="text-gray-900 font-bold underline underline-offset-8 decoration-gray-200 decoration-2">
                  new tools
                </span>
                to enhance my skills and stay at the forefront of industry trends.
              </p>

              {/* Stats / Info Grid */}
              <div className="pt-10 grid grid-cols-2 gap-8 border-t border-gray-200 mt-10">
                <div className="group">
                  <h4 className="text-gray-400 font-semibold text-[10px] uppercase tracking-[0.3em] mb-2 group-hover:text-gray-600 transition-colors">
                    Location
                  </h4>
                  <p className="text-gray-900 font-bold text-xl tracking-tight">Philippines</p>
                </div>
                <div className="group">
                  <h4 className="text-gray-400 font-semibold text-[10px] uppercase tracking-[0.3em] mb-2 group-hover:text-gray-600 transition-colors">
                    Focus
                  </h4>
                  <p className="text-gray-900 font-bold text-xl tracking-tight">Full-Stack Dev</p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Decorative background element */}
      <div className="absolute top-0 right-0 w-64 h-64 bg-gray-100/50 rounded-full blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
