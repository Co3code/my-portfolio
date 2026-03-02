import { motion } from "motion/react";
import { ExternalLink, Github } from "lucide-react";
import project1Img from "../assets/internal-heaven.png";
import project2Img from "../assets/notevault.png";
import project3Img from "../assets/iron.png";

const projects = [
  {
    title: "Internal Heaven",
    description:
      "A web application designed for funeral homes to showcase available coffins. Built with PHP, Bootstrap, CSS, and MySQL for database management. Users can view and select coffins available for purchase.",
    tags: ["PHP", "MySQL", "Bootstrap", "CSS", "JavaScript"],
    image: project1Img, // Use the correct image path for your project
  },
  {
    title: "NoteVault",
    description:
    "A personal note-taking app where users can register, log in, and store their own notes in a database. This app features user authentication, note creation, and a CRUD operation system, allowing users to manage their notes. Built with PHP, MySQL, JavaScript, and CSS.",
    tags: ["HTML", "CSS", "JavaScript"],
    image: project2Img, // Use the correct image path for your project
  },
  {
    title: "Iron Gym",
    description:
    "A landing page for a gym, built with HTML, CSS, and JavaScript. The website showcases gym services, membership plans, and features a contact form.",
    tags: ["PHP", "MySQL", "JavaScript", "CSS"],
    image: project3Img, // Use the correct image path for your project
  },
];
export default function Projects() {
  return (
    <section id="projects" className="section-padding bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">Featured Projects</h2>
            <p className="text-zinc-500 max-w-xl">
              A selection of my recent work, showcasing my ability to build robust and scalable applications.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl overflow-hidden card-shadow group"
            >
              <div className="aspect-video bg-zinc-100 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
              </div>

              <div className="p-8">
                <div className="flex gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[10px] font-bold uppercase tracking-widest text-zinc-400 bg-zinc-50 px-2 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="text-xl font-bold text-zinc-900 mb-3 group-hover:text-zinc-600 transition-colors">
                  {project.title}
                </h3>
                <p className="text-zinc-500 text-sm leading-relaxed mb-6">{project.description}</p>
                <div className="flex items-center gap-4">
                  <button className="p-2 rounded-full hover:bg-zinc-50 transition-colors text-zinc-400 hover:text-zinc-900">
                    <Github size={20} />
                  </button>
                  <button className="p-2 rounded-full hover:bg-zinc-50 transition-colors text-zinc-400 hover:text-zinc-900">
                    <ExternalLink size={20} />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
