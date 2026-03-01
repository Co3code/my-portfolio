import { motion } from 'motion/react';
import { Code2, Database, Layout, GitBranch, Server, Terminal } from 'lucide-react';

const skills = [
  { name: 'PHP', icon: <Server size={24} />, category: 'Backend' },
  { name: 'CSS', icon: <Layout size={24} />, category: 'Frontend' },
  { name: 'JavaScript', icon: <Code2 size={24} />, category: 'Frontend' },
  { name: 'Git', icon: <GitBranch size={24} />, category: 'Tools' },
  { name: 'Firebase', icon: <Database size={24} />, category: 'Cloud' },
  { name: 'Python', icon: <Terminal size={24} />, category: 'Backend' },
  { name: 'MySQL', icon: <Database size={24} />, category: 'Database' },
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Technical Skills
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A collection of technologies and tools I use to bring ideas to life.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-6">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className="flex flex-col items-center p-6 bg-white rounded-2xl card-shadow hover:translate-y-[-4px] transition-all"
            >
              <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-xl text-zinc-900 mb-4">
                {skill.icon}
              </div>
              <h3 className="text-sm font-semibold text-zinc-900 mb-1">{skill.name}</h3>
              <span className="text-[10px] uppercase tracking-wider text-zinc-400 font-bold">{skill.category}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
