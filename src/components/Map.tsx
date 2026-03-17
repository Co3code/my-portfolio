import { motion } from "motion/react";
import { MapPin } from "lucide-react";

export default function Map() {
  return (
    <section id="map" className="relative py-28 bg-[#0a0a0f] overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(ellipse, rgba(120,90,255,0.09) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">

        {/* Header */}
        <motion.div
          className="text-center mb-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-white/10 bg-white/[0.03] text-[#f0ede6]/45 text-[10px] font-medium tracking-[0.15em] uppercase mb-6">
            <MapPin size={11} />
            Based In
          </div>
          <h2
            className="text-[clamp(2.2rem,4vw,3.8rem)] leading-none tracking-tight text-[#f0ede6] mb-3"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            My{" "}
            <em className="italic text-[#f0ede6]/30" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Location
            </em>
          </h2>
          <p className="text-[0.88rem] text-[#f0ede6]/35 max-w-sm mx-auto">
            Find me in the heart of the tech world.
          </p>
        </motion.div>

        {/* Map Frame */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          className="relative w-full h-[420px] rounded-[20px] overflow-hidden border border-white/[0.07]"
        >
          {/* Overlay tint to blend map with dark theme */}
          <div className="absolute inset-0 pointer-events-none z-10 rounded-[20px]"
            style={{ boxShadow: "inset 0 0 0 1px rgba(255,255,255,0.06)" }}
          />

          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4522.683297199723!2d125.09841535998183!3d8.823441834205275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33002eeddbf145c1%3A0xfad5a15f4306db12!2sChrist%20the%20King%20College!5e1!3m2!1sen!2sph!4v1772355723325!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) brightness(0.85) contrast(0.9)" }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </motion.div>

        {/* Location label below */}
        <motion.div
          className="flex items-center justify-center gap-2 mt-5"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="w-1.5 h-1.5 rounded-full bg-[rgba(120,90,255,0.7)]"
            style={{ boxShadow: "0 0 8px rgba(120,90,255,0.8)" }}
          />
          <span className="text-[10px] tracking-[0.2em] uppercase text-[#f0ede6]/30 font-medium">
            Gingoog City, Philippines
          </span>
        </motion.div>
      </div>
    </section>
  );
} 