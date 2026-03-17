import { motion } from "motion/react";

const skills = [
  { name: "PHP" },
  { name: "CSS" },
  { name: "JavaScript" },
  { name: "Git" },
  { name: "Firebase" },
  { name: "Python" },
  { name: "MySQL" },
];

const duplicatedSkills = [...skills, ...skills, ...skills, ...skills];

const Skills = () => {
  return (
    <section id="skills" className="relative py-28 bg-[#0a0a0f] overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Center Orb */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(120,90,255,0.10) 0%, transparent 70%)" }}
        animate={{ opacity: [0.6, 1, 0.6], scale: [1, 1.08, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Header */}
      <motion.div
        className="relative z-10 text-center px-6 mb-20"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight uppercase text-[#f0ede6]"
          style={{ fontFamily: "'DM Serif Display', serif" }}
        >
          Technical{" "}
          <em
            className="italic lowercase text-[#f0ede6]/30"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Expertise
          </em>
        </h2>
      </motion.div>

      {/* Marquee */}
      <div className="relative flex items-center py-8">

        {/* Fade edges */}
        <div
          className="absolute inset-y-0 left-0 w-44 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to right, #0a0a0f, transparent)" }}
        />
        <div
          className="absolute inset-y-0 right-0 w-44 z-10 pointer-events-none"
          style={{ background: "linear-gradient(to left, #0a0a0f, transparent)" }}
        />

        {/* Center focus bar */}
        <div
          className="absolute top-0 bottom-0 left-1/2 -translate-x-1/2 w-[280px] pointer-events-none z-[1]"
          style={{
            borderLeft: "1px solid rgba(120,90,255,0.15)",
            borderRight: "1px solid rgba(120,90,255,0.15)",
            background: "rgba(120,90,255,0.025)",
          }}
        />

        {/* Track */}
        <div className="overflow-hidden w-full">
          <motion.div
            className="flex gap-16 whitespace-nowrap items-center"
            animate={{ x: ["0%", "-50%"] }}
            transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
            style={{ willChange: "transform" }}
          >
            {duplicatedSkills.map((skill, index) => (
              <div
                key={`${skill.name}-${index}`}
                className="inline-flex items-center gap-6 group cursor-default relative z-[2]"
              >
                <span
                  className="text-[clamp(2.5rem,4vw,3.5rem)] leading-none select-none text-[#f0ede6]/25 transition-all duration-500 group-hover:text-[#f0ede6]/85"
                  style={{
                    fontFamily: "'Dancing Script', cursive",
                    fontWeight: 600,
                    textShadow: "none",
                    transition: "color 0.4s ease, text-shadow 0.4s ease",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.textShadow = "0 0 40px rgba(120,90,255,0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.textShadow = "none";
                  }}
                >
                  {skill.name}
                </span>
                <span className="w-1 h-1 rounded-full bg-white/10 flex-shrink-0 group-hover:bg-[rgba(120,90,255,0.5)] transition-colors duration-300" />
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Skills;