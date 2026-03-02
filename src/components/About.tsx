// src/components/About.tsx
import { motion } from "motion/react";
import myProfilePhoto from "../assets/photobg.png"; // Import the image from assets

export default function About() {
  return (
    <section id="about" className="section-padding bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">About Me</h2>
            <div className="space-y-6 text-lg text-zinc-500 leading-relaxed">
              <p>
                Hello! I'm a dedicated web developer with a strong passion for creating modern and efficient web
                applications. I enjoy simplifying complex challenges and designing user-friendly, visually appealing
                interfaces.
              </p>
              <p>
                My interest in technology started with a curiosity about how things work online, which grew into a
                genuine passion for web development. I'm always exploring new tools and techniques to enhance my skills
                and stay up-to-date with industry trends.
              </p>
              <p>
                Outside of coding, I enjoy exploring new design concepts, contributing to open-source projects, and
                staying informed on the latest advancements in software development.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative aspect-square rounded-3xl overflow-hidden bg-zinc-200 shadow-2xl"
          >
            <img
              src={myProfilePhoto} // Use the imported image here
              alt="Profile"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
