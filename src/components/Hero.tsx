import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code2, Globe, Cpu, Palette, Layout, Terminal } from "lucide-react";
import { Link } from "react-router-dom";
import hero from "../assets/niceone.jpg";

export default function Hero() {
  const techStack = [
    { icon: <Code2 size={20} />, label: "React" },
    { icon: <Palette size={20} />, label: "Tailwind CSS" },
    { icon: <Terminal size={20} />, label: "JavaScript" },
    { icon: <Globe size={20} />, label: "Next.js" },
    { icon: <Cpu size={20} />, label: "Node.js" },
    { icon: <Layout size={20} />, label: "Framer Motion" },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20 pb-12 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-6 md:gap-12 relative z-10">
        {/* Text Section */}
        <motion.div
          className="w-full md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-800 text-[10px] sm:text-xs font-semibold tracking-wider uppercase mb-4 sm:mb-6 shadow-sm">
            <Sparkles size={14} className="text-gray-400" />
            Available for Projects
          </div>

          {/* Main Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl xl:text-8xl font-serif font-bold text-gray-900 mb-4 sm:mb-6 leading-snug sm:leading-tight">
            Student & <br />
            <span className="italic text-gray-800 drop-shadow-sm">Aspiring Web Developer.</span>
          </h1>

          {/* Icon Slider */}
          <div className="relative w-full overflow-hidden mb-6 sm:mb-8 py-4">
            <motion.div
              className="flex items-center gap-6 sm:gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-2 sm:gap-3 text-gray-500 hover:text-gray-900 transition-all duration-300 cursor-pointer group"
                >
                  <div className="group-hover:scale-110 transition-transform text-gray-400/50 group-hover:text-gray-900">
                    {tech.icon}
                  </div>
                  <span className="text-[10px] sm:text-xs font-semibold tracking-widest uppercase">{tech.label}</span>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-12 sm:w-16 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-12 sm:w-16 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          {/* Description + Buttons Wrapper */}
          <div className="w-full sm:max-w-lg mx-auto md:mx-0 text-center md:text-left">
            {/* Description */}
            <p className="text-sm sm:text-base md:text-lg text-gray-600 mb-6 leading-relaxed">
              Crafting clean and modern digital experiences with a focus on
              <span className="text-gray-900 font-semibold italic"> user-centric design</span>. Based in the
              Philippines.
            </p>

            {/* Buttons */}
            <div className="flex flex-row flex-wrap gap-3 justify-center md:justify-start">
              <a
                href="#projects"
                className="w-fit inline-flex items-center justify-center px-6 py-3 bg-gray-900 text-white rounded-full font-semibold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-gray-800 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group"
              >
                View My Work
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={16} />
              </a>

              <Link
                to="/view-app"
                className="w-fit inline-flex items-center justify-center px-6 py-3 border-2 border-gray-200 text-gray-900 rounded-full font-semibold tracking-widest uppercase text-[10px] sm:text-xs hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
              >
                See My App
              </Link>
            </div>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="w-full md:w-1/2 flex justify-center mb-6 md:mb-0"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative">
            <img
              src={hero}
              alt="Hero Image"
              className="w-40 sm:w-64 md:w-full max-w-[300px] md:max-w-full rounded-3xl shadow-2xl object-cover aspect-[4/5]"
            />
            {/* Optional: Decorative element behind image */}
            <div className="absolute -bottom-4 -right-4 -z-10 w-full h-full border-2 border-gray-100 rounded-3xl" />
          </div>
        </motion.div>
      </div>

      {/* Background Glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-gray-100/40 rounded-full blur-[80px] sm:blur-[120px] -z-10 pointer-events-none" />
    </section>
  );
}
