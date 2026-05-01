import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import project1Img from "../assets/album.png";
import project2Img from "../assets/notevault2.png";
import project3Img from "../assets/iron.png";
import project4Img from "../assets/rabies.png";
import project5Img from "../assets/aifoundit.png";

const projects = [
  {
    title: "Bootstrap Album",
    description:
      "An album gallery built with Bootstrap, where static UI components were integrated with backend functionality using the Dalira framework.",
    tags: ["PHP", "MySQL", "Bootstrap", "Dalira"],
    image: project1Img,
    link: "",
    github: "",
  },
  {
    title: "NoteVault",
    description:
      "Secure personal workspace for digital notes. Features full CRUD functionality with a focus on user privacy and organized data storage.",
    tags: ["JavaScript", "MySQL", "PHP"],
    image: project2Img,
    link: "https://notevault.great-site.net/auth/login.php",
    github: "",
  },
  {
    title: "Iron Gym",
    description:
      "High-energy landing page for fitness centers. Optimized for conversion with membership plans and interactive service displays.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project3Img,
    link: "",
    github: "",
  },
 
  {
    title: "AIfoundIT",
    description:
      "A smart lost-and-found platform that uses AI to match lost and found items through image and text similarity..",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project5Img,
    link: "",
    github: "",
  },

  {
    title: "Rabies Bite Record System",
    description:
      "A web-based system that allows administrators to input and manage patient records related to rabies bite incidents",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project4Img,
    link: "",
    github: "",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6 bg-[#0a0a0f] overflow-hidden">
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
        className="absolute -top-16 -right-16 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(120,90,255,0.11) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-0 -left-16 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(60,180,150,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto">
        {/* Header */}
        <motion.div
          className="mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/25 mb-4">
            Portfolio
          </span>
          <h2
            className="text-[clamp(2.5rem,5vw,4.5rem)] leading-none tracking-tight text-[#f0ede6] mb-6"
            style={{ fontFamily: "'DM Serif Display', serif" }}
          >
            Featured{" "}
            <em className="italic text-[#f0ede6]/30" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Projects
            </em>
          </h2>
          <div className="w-10 h-px bg-[rgba(120,90,255,0.5)]" />
        </motion.div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              className="group relative cursor-default"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
            >
              {/* Image */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-[#13121f] border border-white/[0.06] mb-5">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.08]"
                />

                {/* Hover overlay */}
                {(project.github || project.link) && (
                  <div className="absolute inset-0 bg-[rgba(10,10,15,0.65)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-3 rounded-2xl">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[rgba(240,237,230,0.95)] flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <Github size={15} className="text-[#0a0a0f]" />
                      </a>
                    )}
                    {project.link && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-10 h-10 rounded-full bg-[rgba(240,237,230,0.95)] flex items-center justify-center hover:scale-110 transition-transform"
                      >
                        <ExternalLink size={15} className="text-[#0a0a0f]" />
                      </a>
                    )}
                  </div>
                )}
              </div>

              {/* Content */}
              <div>
                {/* Tags */}
                <div className="flex flex-wrap gap-x-2 gap-y-1 mb-2">
                  {project.tags.map((tag, i) => (
                    <span key={tag} className="text-[9px] font-medium tracking-[0.15em] uppercase text-[#f0ede6]/25">
                      {i > 0 && <span className="mr-2 text-[#f0ede6]/15">·</span>}
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Title + Arrow */}
                <div className="flex items-center justify-between mb-2">
                  <h3
                    className="text-[1.3rem] text-[#f0ede6] tracking-tight transition-colors duration-300 group-hover:text-[rgba(180,160,255,0.9)]"
                    style={{ fontFamily: "'DM Serif Display', serif" }}
                  >
                    {project.title}
                  </h3>
                  <ArrowUpRight
                    size={16}
                    className="text-[rgba(180,160,255,0.7)] opacity-0 -translate-x-1 translate-y-1 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 flex-shrink-0"
                  />
                </div>

                {/* Description */}
                <p className="text-[0.82rem] text-[#f0ede6]/35 leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
