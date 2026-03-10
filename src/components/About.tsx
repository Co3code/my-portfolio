import { useState, useRef, useEffect } from "react";
import { motion } from "motion/react";
import myProfilePhoto from "../assets/myphtoooo.png";
import hoverPhoto from "../assets/joker.jpg";

export default function About() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false); // Check for touch devices
  const containerRef = useRef(null);

  // Check if user is on a mobile device on mount
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const handleMouseMove = (e) => {
    if (containerRef.current && !isMobile) {
      const rect = containerRef.current.getBoundingClientRect();
      setMousePos({
        x: e.clientX - rect.left,
        y: e.clientY - rect.top,
      });
    }
  };

  return (
    <section id="about" className="py-24 bg-white overflow-hidden relative">
      <div className="max-w-7xl mx-auto px-6 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative order-1"
          >
            <div className="absolute -top-10 -left-10 w-72 h-72 bg-yellow-100/30 rounded-full blur-[100px] animate-pulse pointer-events-none" />

            <motion.div
              ref={containerRef}
              onMouseMove={handleMouseMove}
              onMouseEnter={() => !isMobile && setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
              animate={{ y: [0, -15, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className={`relative aspect-[4/5] sm:aspect-square lg:aspect-[4/5] rounded-[2rem] overflow-hidden bg-zinc-50 border border-gray-100 shadow-2xl ${isMobile ? "cursor-default" : "cursor-none"}`}
            >
              {/* PRIMARY PHOTO */}
              <img
                src={myProfilePhoto}
                alt="Profile"
                className="absolute inset-0 w-full h-full object-cover pointer-events-none"
              />

              {/* SECONDARY PHOTO (Only masks if NOT mobile) */}
              {!isMobile && (
                <div
                  className="absolute inset-0 w-full h-full object-cover pointer-events-none z-10"
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

              {/* Lens Ring (Desktop Only) */}
              {isHovered && !isMobile && (
                <motion.div
                  className="absolute top-0 left-0 w-[200px] h-[200px] border border-white/40 rounded-full pointer-events-none z-20"
                  animate={{ x: mousePos.x - 100, y: mousePos.y - 100 }}
                  transition={{ type: "spring", damping: 30, stiffness: 400, mass: 0.2 }}
                />
              )}

              <div
                className={`absolute inset-0 bg-black/5 transition-opacity duration-500 ${isHovered ? "opacity-0" : "opacity-100"}`}
              />
            </motion.div>

            {/* Desktop Hint */}
            {!isMobile && (
              <p className="text-[9px] uppercase tracking-[0.3em] text-zinc-400 mt-6 text-center font-bold opacity-50">
                Move cursor to reveal
              </p>
            )}

            <div className="absolute -bottom-6 -right-6 w-32 h-32 border-b-2 border-r-2 border-gray-100 rounded-br-[2rem] -z-10 hidden sm:block" />
          </motion.div>

          {/* Text Content */}
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

            <h2 className="text-5xl sm:text-7xl lg:text-8xl font-serif font-bold text-gray-900 mb-8 leading-[0.9] tracking-tight">
              About <span className="italic font-normal text-gray-400">Me</span>
            </h2>

            <div className="space-y-6 text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
              <p>
                Hello! I'm a dedicated web developer with a passion for creating
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
