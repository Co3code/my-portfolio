import { motion } from "motion/react";
import myProfilePhoto from "../assets/myphtoooo.png";

export default function About() {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        {/* Changed order-2 lg:order-1 logic to ensure photo is top on mobile */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side - Now first on mobile */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1"
          >
            {/* Soft Glow */}
            <div
              className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-100/30 rounded-full blur-[100px] animate-pulse pointer-events-none"
              style={{ animationDuration: "8s" }}
            />

            {/* Float Animation Wrapper */}
            <motion.div
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-50 border border-gray-100 shadow-2xl group"
            >
              <img
                src={myProfilePhoto}
                alt="Profile"
                /* Removed grayscale for a more approachable feel, but kept smooth transition */
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              {/* Optional: Subtle vignette overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </motion.div>

            {/* Decorative Frame */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gray-100 rounded-br-[2rem] -z-10 hidden sm:block" />
          </motion.div>

          {/* Text Content - Now second on mobile */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2"
          >
            <span className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-700 text-[10px] font-bold tracking-[0.2em] uppercase mb-8">
              The Developer
            </span>

            {/* Responsive Text Size */}
            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
              About <span className="italic font-normal text-gray-400">Me</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              <p>
                Hello! I'm a dedicated web developer with a strong passion for creating
                <span className="text-gray-900 font-semibold italic"> modern and efficient </span>
                web applications. Based in the Philippines, I bridge the gap between complex logic and
                <span className="text-gray-900 font-medium"> fluid user interfaces</span>.
              </p>

              <p>
                I don't just write code; I build digital experiences. My journey is fueled by a persistent curiosity for
                <span className="text-gray-900 font-bold underline underline-offset-8 decoration-gray-200">
                  emerging tech
                </span>
                , ensuring that every project I touch is built with the future in mind.
              </p>

              {/* Stats / Info Grid */}
              <div className="pt-10 grid grid-cols-2 gap-4 sm:gap-8 border-t border-gray-100 mt-10">
                <div className="group">
                  <h4 className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Location</h4>
                  <p className="text-gray-900 font-bold text-lg sm:text-xl tracking-tight group-hover:translate-x-1 transition-transform inline-block cursor-default">
                    Philippines
                  </p>
                </div>
                <div className="group">
                  <h4 className="text-gray-400 font-bold text-[10px] uppercase tracking-[0.2em] mb-2">Focus</h4>
                  <p className="text-gray-900 font-bold text-lg sm:text-xl tracking-tight group-hover:translate-x-1 transition-transform inline-block cursor-default">
                    Full-Stack
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
