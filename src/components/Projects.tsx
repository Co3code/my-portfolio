import { motion } from "motion/react";
import { ExternalLink, Github, ArrowUpRight } from "lucide-react";
import project1Img from "../assets/album.png";
import project2Img from "../assets/notevault.png";
import project3Img from "../assets/iron.png";

const projects = [
  {
    title: "Bootstrap Album",
    description:
      "An album gallery built with Bootstrap, where static UI components were integrated with backend functionality using the Dalira framework.",
    tags: ["PHP", "MySQL", "Bootstrap", "dalira"],
    image: project1Img,
    link: "#",
    github: "#",
  },
  {
    title: "NoteVault",
    description:
      "Secure personal workspace for digital notes. Features full CRUD functionality with a focus on user privacy and organized data storage.",
    tags: ["JavaScript", "MySQL", "PHP"],
    image: project2Img,
    link: "#",
    github: "#",
  },
  {
    title: "Iron Gym",
    description:
      "High-energy landing page for fitness centers. Optimized for conversion with membership plans and interactive service displays.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project3Img,
    link: "#",
    github: "#",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block"
          >
            Portfolio
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-gray-900 mb-6">
            Featured <span className="italic font-normal">Projects</span>
          </h2>
          <div className="h-1 w-20 bg-gray-900"></div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group relative"
            >
              {/* Image Container */}
              <div className="relative aspect-[16/10] overflow-hidden rounded-2xl bg-gray-100 mb-6">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                />
                {/* Overlay on Hover */}
                <div className="absolute inset-0 bg-gray-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                  <a
                    href={project.github}
                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                  >
                    <Github size={20} />
                  </a>
                  <a
                    href={project.link}
                    className="p-3 bg-white rounded-full text-gray-900 hover:scale-110 transition-transform"
                  >
                    <ExternalLink size={20} />
                  </a>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-2xl font-bold text-gray-900 flex items-center justify-between group-hover:text-gray-600 transition-colors">
                  {project.title}
                  <ArrowUpRight
                    className="opacity-0 group-hover:opacity-100 transition-all -translate-x-2 group-hover:translate-x-0"
                    size={20}
                  />
                </h3>

                <p className="text-gray-500 text-sm leading-relaxed line-clamp-2">{project.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
