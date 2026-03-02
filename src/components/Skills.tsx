import { motion } from 'motion/react';
import { Code2, Database, Layout, GitBranch, Server, Terminal, Cloud } from 'lucide-react';

const skills = [
  { name: 'PHP', icon: <Server size={24} />, category: 'Backend' },
  { name: 'CSS', icon: <Layout size={24} />, category: 'Frontend' },
  { name: 'JavaScript', icon: <Code2 size={24} />, category: 'Frontend' },
  { name: 'Git', icon: <GitBranch size={24} />, category: 'Tools' },
  { name: 'Firebase', icon: <Cloud size={24} />, category: 'Cloud' },
  { name: 'Python', icon: <Terminal size={24} />, category: 'Backend' },
  { name: 'MySQL', icon: <Database size={24} />, category: 'Database' },
];

// Duplicate the skills array to create a seamless loop
const duplicatedSkills = [...skills, ...skills, ...skills];

export default function Skills() {
  return (
    <section id="skills" className="py-24 bg-zinc-50/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
          Technical Skills
        </h2>
        <p className="text-zinc-500 max-w-2xl mx-auto">
          A collection of technologies and tools I use to bring ideas to life.
        </p>
      </div>

      <div className="relative flex">
        {/* Gradient Overlays for smooth edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-zinc-50 to-transparent z-10 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-zinc-50 to-transparent z-10 pointer-events-none" />

        <motion.div
          className="flex gap-8 px-4"
          animate={{
            x: [0, -100 * skills.length - 32 * skills.length],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {duplicatedSkills.map((skill, index) => (
            <div
              key={`${skill.name}-${index}`}
              className="flex-shrink-0 flex flex-col items-center justify-center w-40 h-40 bg-white rounded-3xl card-shadow border border-zinc-100/50 hover:border-zinc-200 transition-colors"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-2xl text-zinc-900 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-sm font-bold text-zinc-900 mb-1">{skill.name}</h3>
              <span className="text-[10px] uppercase tracking-widest text-zinc-400 font-bold">
                {skill.category}
              </span>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
