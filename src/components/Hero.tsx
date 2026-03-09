import { motion } from "motion/react";
import { ArrowRight, Sparkles, Code2, Globe, Cpu, Palette, Layout, Terminal } from "lucide-react";
import { Link } from "react-router-dom";

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
      className="min-h-screen flex items-center justify-center px-6 sm:px-8 pt-20 bg-white overflow-hidden relative"
    >
      <div className="max-w-7xl mx-auto w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 relative z-10">
        {/* Text Section */}
        <motion.div
          className="md:w-1/2 text-center md:text-left"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          {/* Badge */}
          <div className="inline-flex items-center gap-2 py-1.5 px-4 rounded-full bg-gray-50 border border-gray-200 text-gray-800 text-xs font-semibold tracking-wider uppercase mb-8 shadow-sm">
            <Sparkles size={14} className="text-gray-400" />
            Available for Projects
          </div>

          {/* Main Heading */}
          <h1 className="text-6xl md:text-[100px] font-serif font-bold text-gray-900 mb-8 leading-tight">
            Student & <br />
            <span className="italic text-gray-800 drop-shadow-lg">Aspiring Web Developer.</span>
          </h1>

          {/* Icon Slider */}
          <div className="relative w-full overflow-hidden mb-16 py-6">
            <motion.div
              className="flex items-center gap-12 whitespace-nowrap"
              animate={{ x: ["0%", "-50%"] }}
              transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
            >
              {[...techStack, ...techStack].map((tech, index) => (
                <div
                  key={index}
                  className="flex items-center gap-3 text-gray-500 hover:text-gray-900 transition-all duration-300 cursor-pointer group"
                >
                  <div className="group-hover:scale-110 transition-transform text-gray-400/50 group-hover:text-gray-900">
                    {tech.icon}
                  </div>
                  <span className="text-sm font-semibold tracking-[0.1em] uppercase">{tech.label}</span>
                </div>
              ))}
            </motion.div>
            <div className="absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-white to-transparent z-10" />
            <div className="absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-white to-transparent z-10" />
          </div>

          {/* Description */}
          <p className="text-lg md:text-xl text-gray-600 mb-12 max-w-2xl leading-relaxed">
            Crafting clean and modern digital experiences with a focus on
            <span className="text-gray-900 font-semibold italic"> user-centric design</span>. Based in the Philippines.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-5 justify-center md:justify-start">
            <a
              href="#projects"
              className="inline-flex items-center justify-center px-12 py-5 bg-gray-900 text-white rounded-full font-semibold tracking-widest uppercase text-xs hover:bg-gray-800 hover:shadow-lg hover:translate-y-1 transition-all duration-300 group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>

            <Link
              to="/view-app"
              className="inline-flex items-center justify-center px-12 py-5 border-2 border-gray-200 text-gray-900 rounded-full font-semibold tracking-widest uppercase text-xs hover:bg-gray-100 hover:border-gray-300 transition-all duration-300"
            >
              See My App
            </Link>
          </div>
        </motion.div>

        {/* Image Section */}
        <motion.div
          className="md:w-1/2 flex justify-center mb-10 md:mb-0"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src="src/assets/wow.jpg" // replace with your image path
            alt="Hero Image"
            className="w-full max-w-sm rounded-3xl shadow-xl object-cover"
          />
        </motion.div>
      </div>

      {/* Background Glows */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gray-100/40 rounded-full blur-[140px] -z-10 pointer-events-none animate-pulse"
        style={{ animationDuration: "8s" }}
      />
      <div className="absolute bottom-[-10%] left-[-10%] w-96 h-96 bg-gray-50/50 rounded-full blur-[100px] -z-10 pointer-events-none" />
    </section>
  );
}
