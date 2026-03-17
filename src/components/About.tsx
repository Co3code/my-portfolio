import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import myProfilePhoto from "../assets/about4.jpg";
import hoverPhoto from "../assets/shirtless.jpg";

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 1024);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current && !isMobile) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  const skills = ["React", "Next.js", "Node.js", "Tailwind", "JavaScript", "TypeScript"];

  const stats = [
    { label: "Location", value: "Philippines" },
    { label: "Focus", value: "Full-Stack" },
    { label: "Experience", value: "3+ Years" },
    { label: "Projects", value: "10+ Built" },
  ];

  return (
    <section
      id="about"
      className="relative py-28 bg-[#0a0a0f] overflow-hidden"
    >
      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -top-24 -left-24 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(120,90,255,0.13) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 right-[5%] w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,100,80,0.09) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10 flex flex-col lg:flex-row items-center gap-16 lg:gap-20">

        {/* ── Image Column ── */}
        <motion.div
          className="flex-shrink-0 flex flex-col items-center gap-4"
          initial={{ opacity: 0, x: -24 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-[280px] h-[350px] sm:w-[300px] sm:h-[375px]">

            {/* Photo Frame */}
            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`relative w-full h-full rounded-[20px] overflow-hidden border border-white/[0.07] bg-[#13121f] ${isMobile ? "cursor-default" : "cursor-none"}`}
            >
              {/* Primary photo */}
              <img
                src={myProfilePhoto}
                alt="Anthony Co Untian Jr."
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* Hover reveal photo (desktop only) */}
              {!isMobile && (
                <div
                  className="absolute inset-0 w-full h-full pointer-events-none z-10"
                  style={{
                    backgroundImage: `url(${hoverPhoto})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    WebkitMaskImage: isHovered
                      ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
                      : `radial-gradient(circle 0px at 0px 0px, black 100%, transparent 100%)`,
                    maskImage: isHovered
                      ? `radial-gradient(circle 100px at ${mousePos.x}px ${mousePos.y}px, black 100%, transparent 100%)`
                      : `radial-gradient(circle 0px at 0px 0px, black 100%, transparent 100%)`,
                  }}
                />
              )}

              {/* Lens ring (desktop only) */}
              {isHovered && !isMobile && (
                <motion.div
                  className="absolute top-0 left-0 w-[200px] h-[200px] border border-white/40 rounded-full pointer-events-none z-20"
                  animate={{ x: mousePos.x - 100, y: mousePos.y - 100 }}
                  transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
                />
              )}

              {/* Bottom gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/50 to-transparent pointer-events-none" />
            </motion.div>

            {/* Deco border */}
            <div className="absolute -inset-2.5 rounded-[28px] border border-white/5 pointer-events-none" />

            {/* Vertical accent line */}
            <div
              className="absolute -left-7 top-8 bottom-8 w-px pointer-events-none hidden sm:block"
              style={{ background: "linear-gradient(to bottom, transparent, rgba(120,90,255,0.4), transparent)" }}
            />

            {/* Corner dots */}
            <div
              className="absolute -top-1 -left-1 w-2 h-2 rounded-full"
              style={{ background: "rgba(120,90,255,0.6)", boxShadow: "0 0 10px rgba(120,90,255,0.8)" }}
            />
            <div
              className="absolute -bottom-1 -right-1 w-2 h-2 rounded-full"
              style={{ background: "rgba(255,100,80,0.5)", boxShadow: "0 0 10px rgba(255,100,80,0.7)" }}
            />
          </div>

          {/* Hint text */}
          {!isMobile && (
            <p className="text-[9px] uppercase tracking-[0.3em] text-[#f0ede6]/25 font-medium">
              Move cursor to reveal
            </p>
          )}
        </motion.div>

        {/* ── Text Column ── */}
        <motion.div
          className="flex-1"
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
        >
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#f0ede6]/45 text-[10px] font-medium tracking-[0.15em] uppercase mb-7">
            The Developer
          </div>

          {/* Heading */}
          <h2
            className="text-[clamp(3rem,6vw,5.5rem)] leading-[1] text-[#f0ede6] mb-8 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            About{" "}
            <em className="italic text-[#f0ede6]/30">Me</em>
          </h2>

          {/* Body */}
          <div className="space-y-5 mb-0">
            <p className="text-[0.95rem] text-[#f0ede6]/50 leading-[1.85] max-w-[460px]">
              Hello! I'm a dedicated web developer with a passion for creating{" "}
              <span className="text-[#f0ede6]/85 font-medium italic">modern and efficient</span>{" "}
              web applications. Based in the Philippines, I bridge the gap between complex
              logic and{" "}
              <span className="text-[#f0ede6]/85 font-medium">fluid user interfaces</span>.
            </p>
            <p className="text-[0.95rem] text-[#f0ede6]/50 leading-[1.85] max-w-[460px]">
              I don't just write code — I build digital experiences. My journey is fueled
              by a persistent curiosity for{" "}
              <span
                className="text-[#f0ede6]/85 font-medium"
                style={{ borderBottom: "1px solid rgba(120,90,255,0.5)", paddingBottom: "1px" }}
              >
                emerging tech
              </span>
              , ensuring every project I touch is built with the future in mind.
            </p>
          </div>

          {/* Divider */}
          <div className="w-full h-px bg-white/[0.06] my-8" />

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-5 mb-8">
            {stats.map((s) => (
              <div key={s.label}>
                <p className="text-[9px] uppercase tracking-[0.2em] text-[#f0ede6]/25 font-medium mb-1.5">
                  {s.label}
                </p>
                <p
                  className="text-[1.4rem] text-[#f0ede6] leading-none tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  {s.value}
                </p>
              </div>
            ))}
          </div>

          {/* Skill Tags */}
          <div className="flex flex-wrap gap-2">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-3.5 py-1.5 rounded-full border border-white/[0.08] bg-white/[0.02] text-[10px] uppercase tracking-[0.1em] text-[#f0ede6]/40 transition-all duration-200 cursor-default hover:border-[rgba(120,90,255,0.4)] hover:text-[rgba(180,160,255,0.85)] hover:bg-[rgba(120,90,255,0.06)]"
              >
                {skill}
              </span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}