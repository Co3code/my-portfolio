import React from "react";
import { motion } from "motion/react";

const skills = [
  { name: "PHP" },
  { name: "CSS" },
  { name: "JAVASCRIPT" },
  { name: "GIT" },
  { name: "FIREBASE" },
  { name: "PYTHON" },
  { name: "MYSQL" },
];

// Duplicated for a seamless infinite horizontal loop
const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

const Skills = () => {
  return (
    <section id="skills" className="py-32 bg-white overflow-hidden relative">
      {/* Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20 relative z-30 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-4xl md:text-6xl font-serif font-bold tracking-tighter text-gray-900 uppercase"
        >
          Technical <span className="text-gray-600 italic font-serif lowercase">Expertise</span>
        </motion.h2>
      </div>

      <div className="relative flex items-center py-10">
        {/* Horizontal Fading Gradients (Left & Right) */}
        <div className="absolute inset-y-0 left-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none" />

        {/* The Marquee Container */}
        <div className="flex overflow-hidden">
          <motion.div
            animate={{ x: ["0%", "-100%"] }} // Continuous scroll to the left
            transition={{
              duration: 150, // Much slower and continuous
              repeat: Infinity, // Infinite loop, no back-and-forth motion
              ease: "linear", // Keep the movement smooth and steady
            }}
            style={{
              willChange: "transform",
            }}
            className="flex gap-12 md:gap-24 items-center whitespace-nowrap transform-gpu"
          >
            {duplicatedSkills.map((skill, index) => (
              <div key={`${skill.name}-${index}`} className="group flex items-center justify-center">
                <span
                  className="text-4xl md:text-5xl font-serif italic tracking-tight select-none leading-none 
                             text-gray-600 transition-all duration-500
                             group-hover:text-gray-800 group-hover:scale-110 group-hover:drop-shadow-[0_0_30px_rgba(0,0,0,0.1)]"
                  style={{
                    textRendering: "optimizeLegibility",
                    WebkitFontSmoothing: "antialiased",
                    fontFamily: '"Dancing Script", cursive', // Using a cursive font
                  }}
                >
                  {skill.name}
                </span>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Center Vertical Focus Bar (Glass effect) */}
        <div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-full pointer-events-none 
                        border-x border-gray-300/30 bg-gray-50/5 backdrop-blur-[1px] -z-10 
                        shadow-[0_0_100px_rgba(0,0,0,0.05)]"
        />
      </div>

      {/* Ambient Glow behind the scroller */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-gray-200/20 rounded-full blur-[120px] -z-20 animate-pulse" />
    </section>
  );
};

export default Skills;
