import { motion } from 'motion/react';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center section-padding pt-32">
      <div className="max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block py-1 px-3 rounded-full bg-zinc-100 text-zinc-600 text-xs font-semibold tracking-wider uppercase mb-6">
            Welcome to my portfolio
          </span>
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight text-zinc-900 mb-8 leading-[1.1]">
            Student & <br />
            <span className="text-zinc-400">Web Developer.</span>
          </h1>
          <p className="text-lg md:text-xl text-zinc-500 mb-10 max-w-2xl leading-relaxed">
            I build clean, modern, and functional web applications with a focus on user experience and professional design.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a 
              href="#projects" 
              className="inline-flex items-center justify-center px-8 py-4 bg-zinc-900 text-white rounded-full font-medium hover:bg-zinc-800 transition-all group"
            >
              View My Work
              <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />
            </a>
            <Link 
              to="/view-app" 
              className="inline-flex items-center justify-center px-8 py-4 border border-zinc-200 text-zinc-900 rounded-full font-medium hover:bg-zinc-50 transition-all"
            >
              See My App
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
