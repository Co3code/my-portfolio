// src/components/About.tsx
import { motion } from "motion/react";
import myProfilePhoto from "../assets/about.png"; // Import the image from assets

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
                Hello! I'm a passionate student and developer with a deep interest in building modern web applications.
                I enjoy the process of turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p>
                My journey in tech started with a curiosity for how things work on the internet, which quickly evolved
                into a full-blown passion for web development. I'm constantly learning new technologies and refining my
                skills to stay at the forefront of the industry.
              </p>
              <p>
                When I'm not coding, you can find me exploring new design trends, contributing to open-source projects,
                or learning about the latest advancements in software engineering.
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
