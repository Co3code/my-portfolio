import { motion } from "motion/react";
import { Mail, Phone, MapPin, Send } from "lucide-react";

export default function Contact() {
  return (
    <section id="contact" className="section-padding bg-zinc-50/50">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">Get in Touch</h2>
            <p className="text-lg text-zinc-500 mb-12 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you. Fill out the form or use the
              contact details below.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl card-shadow text-zinc-900 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Email</h4>
                  <p className="text-zinc-500">anthonycountian7@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl card-shadow text-zinc-900 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Phone</h4>
                  <p className="text-zinc-500">09916772811</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl card-shadow text-zinc-900 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Location</h4>
                  <p className="text-zinc-500">Gingoog City</p>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] card-shadow"
          >
            <form className="space-y-6" onSubmit={(e) => e.preventDefault()}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 ml-1">Name</label>
                  <input
                    type="text"
                    placeholder="Co Untian"
                    className="w-full px-6 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 transition-all outline-none"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 ml-1">Email</label>
                  <input
                    type="email"
                    placeholder="Co Untian@example.com"
                    className="w-full px-6 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 transition-all outline-none"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-900 ml-1">Message</label>
                <textarea
                  rows={5}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 transition-all outline-none resize-none"
                ></textarea>
              </div>
              <button className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 group">
                Send Message
                <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
