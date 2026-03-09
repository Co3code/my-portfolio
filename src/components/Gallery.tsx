import { motion } from "motion/react";
import gallery1 from "../assets/trio.jpg";
import gallery2 from "../assets/grppic.jpg";
import gallery3 from "../assets/projectdone.jpg";
import gallery4 from "../assets/insert.jpg";
import gallery5 from "../assets/liga.jpg";
import gallery6 from "../assets/skiefam.jpg";

const galleryItems = [
  { id: 1, title: "Moment 1", category: "trio", image: gallery1 },
  { id: 2, title: "Moment 2", category: "ohaha", image: gallery2 },
  { id: 3, title: "Moment 3", category: "skie fam", image: gallery3 },
  { id: 4, title: "Moment 4", category: "saw saw", image: gallery4 },
  { id: 5, title: "Moment 5", category: "the legendary leefam", image: gallery5 },
  { id: 6, title: "Moment 6", category: "IT Days", image: gallery6 },
];

export default function Gallery() {
  return (
    <section id="gallery" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">
            Our Ongoing IT Journey Together
          </h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">
            A collection of six photos capturing the moments, growth, and friendships we've built during our third year
            in IT.
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
                <h3 className="text-xl font-bold text-white">{item.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
