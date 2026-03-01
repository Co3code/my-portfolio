import { Github, Twitter, Linkedin, Instagram } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-zinc-100">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
        <div className="text-xl font-bold tracking-tight text-zinc-900">
          AC<span className="text-zinc-400">.</span>
        </div>

        <div className="flex items-center space-x-6">
          <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Github size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Twitter size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Linkedin size={20} />
          </a>
          <a href="#" className="text-zinc-400 hover:text-zinc-900 transition-colors">
            <Instagram size={20} />
          </a>
        </div>

        <div className="text-sm text-zinc-400 font-medium">
          © {currentYear} Modern Portfolio. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
