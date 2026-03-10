import { motion } from "motion/react";

export default function Map() {
  return (
    <section id="map" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-4">My Location</h2>
          <p className="text-zinc-500 max-w-2xl mx-auto">Find me in the heart of the tech world.</p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="w-full h-[450px] bg-zinc-100 rounded-[2.5rem] overflow-hidden card-shadow relative"
        >
          {/* Your embedded map is now here */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4522.683297199723!2d125.09841535998183!3d8.823441834205275!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x33002eeddbf145c1%3A0xfad5a15f4306db12!2sChrist%20the%20King%20College!5e1!3m2!1sen!2sph!4v1772355723325!5m2!1sen!2sph"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </motion.div>
      </div>
    </section>
  );
}
