import { motion } from 'motion/react';
import gallery1 from '../assets/iron.png';
import gallery2 from '../assets/iron.png';
import gallery3 from '../assets/iron.png';
import gallery4 from '../assets/iron.png';
import gallery5 from '../assets/iron.png';
import gallery6 from '../assets/iron.png';

const galleryItems = [
  { id: 1, title: 'Project 1', category: 'Web Design', image: gallery1 },
  { id: 2, title: 'Project 2', category: 'Development', image: gallery2 },
  { id: 3, title: 'Project 3', category: 'UI/UX', image: gallery3 },
  { id: 4, title: 'Project 4', category: 'Branding', image: gallery4 },
  { id: 5, title: 'Project 5', category: 'Mobile App', image: gallery5 },
  { id: 6, title: 'Project 6', category: 'Web App', image: gallery6 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Project Gallery
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A visual showcase of my design and development journey.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {galleryItems.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative aspect-square rounded-3xl overflow-hidden bg-zinc-100 card-shadow"
            >
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              
              <div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-8">
                <span className="text-[10px] font-bold uppercase tracking-widest text-white/80 mb-2">
                  {item.category}
                </span>
                <h3 className="text-xl font-bold text-white">
                  {item.title}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
