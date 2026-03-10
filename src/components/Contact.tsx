import { useState, useRef } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState(null); // 'success', 'error', or null
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "" });
        // Clear success message after 5 seconds
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setStatus("error");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section id="contact" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left Side: Editorial Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-[10px] font-bold tracking-[0.3em] uppercase text-zinc-400 mb-6 block">Inquiry</span>
            <h2 className="text-5xl md:text-7xl font-serif font-bold text-zinc-900 mb-8 leading-tight">
              Let's build <br />
              <span className="italic font-normal text-zinc-400 text-4xl md:text-6xl">together.</span>
            </h2>
            <p className="text-lg text-zinc-500 mb-12 max-w-md leading-relaxed">
              Whether you have a question or just want to discuss a new project, my inbox is always open.
            </p>

            <div className="space-y-10">
              {[
                { icon: <Mail size={18} />, title: "Email", detail: "anthonycountian7@gmail.com" },
                { icon: <Phone size={18} />, title: "Phone", detail: "0991 677 2811" },
                { icon: <MapPin size={18} />, title: "Location", detail: "Gingoog City, PH" },
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-6 group">
                  <div className="w-12 h-12 flex items-center justify-center bg-zinc-50 rounded-2xl text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-all duration-300">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] font-bold uppercase tracking-widest text-zinc-400">{item.title}</h4>
                    <p className="text-zinc-900 font-medium">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Side: Modern Form */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="space-y-8 bg-zinc-50/50 p-8 md:p-12 rounded-[3rem] border border-zinc-100"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 ml-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors placeholder:text-zinc-300"
                    required
                  />
                </div>
                <div className="space-y-3">
                  <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 ml-1">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    className="w-full px-0 py-3 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors placeholder:text-zinc-300"
                    required
                  />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[10px] font-bold uppercase tracking-widest text-zinc-900 ml-1">Message</label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  className="w-full px-0 py-3 bg-transparent border-b border-zinc-200 focus:border-zinc-900 outline-none transition-colors resize-none placeholder:text-zinc-300"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-5 bg-zinc-900 text-white rounded-full font-bold uppercase text-[10px] tracking-[0.2em] hover:bg-zinc-800 transition-all flex items-center justify-center gap-3 disabled:opacity-50 group"
              >
                {loading ? "Sending Message..." : "Send Inquiry"}
                {!loading && (
                  <Send
                    size={14}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                )}
              </button>

              {/* Status Messages */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 text-green-600 font-bold text-sm pt-4"
                  >
                    <CheckCircle2 size={18} />
                    Message sent successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-500 font-bold text-sm text-center pt-4"
                  >
                    Something went wrong. Please try again.
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
