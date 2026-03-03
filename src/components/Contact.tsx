import { useState, useRef } from "react";
import { motion } from "framer-motion"; // Changed to 'framer-motion' as it is more common
import { Mail, Phone, MapPin, Send } from "lucide-react";
import emailjs from "@emailjs/browser";

export default function Contact() {
  const formRef = useRef();
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [confirmation, setConfirmation] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setConfirmation("");

    // Use sendForm to make sure all data from formRef is sent correctly
    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(() => {
        setLoading(false);
        setConfirmation("Thank you for your message 🙌");
        setForm({ name: "", email: "", message: "" });
      })
      .catch((err) => {
        setLoading(false);
        console.error("EmailJS Error:", err);
        setConfirmation("Something went wrong. Please check your .env file.");
      });
  };

  return (
    <section id="contact" className="py-20 bg-zinc-50/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-zinc-900 mb-8">
              Get in Touch
            </h2>
            <p className="text-lg text-zinc-500 mb-12 leading-relaxed">
              Have a project in mind or just want to say hello? I'd love to hear from you.
            </p>

            <div className="space-y-8">
              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm text-zinc-900 shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Email</h4>
                  <p className="text-zinc-500">anthonycountian7@gmail.com</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm text-zinc-900 shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Phone</h4>
                  <p className="text-zinc-500">09916772811</p>
                </div>
              </div>

              <div className="flex items-start gap-6">
                <div className="w-12 h-12 flex items-center justify-center bg-white rounded-2xl shadow-sm text-zinc-900 shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-bold text-zinc-900 mb-1">Location</h4>
                  <p className="text-zinc-500">Gingoog City</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-xl"
          >
            <form className="space-y-6" ref={formRef} onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 ml-1">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    className="w-full px-6 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 outline-none"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-zinc-900 ml-1">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="email@example.com"
                    className="w-full px-6 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 outline-none"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-zinc-900 ml-1">Message</label>
                <textarea
                  rows={5}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  className="w-full px-6 py-4 bg-zinc-50 border-none rounded-2xl focus:ring-2 focus:ring-zinc-900 outline-none resize-none"
                  required
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={loading}
                className="w-full py-4 bg-zinc-900 text-white rounded-2xl font-bold hover:bg-zinc-800 transition-all flex items-center justify-center gap-2 disabled:opacity-50"
              >
                {loading ? "Sending..." : "Send Message"}
                <Send size={18} />
              </button>

              {confirmation && (
                <p className={`mt-4 text-center font-medium ${confirmation.includes("wrong") ? "text-red-500" : "text-green-600"}`}>
                  {confirmation}
                </p>
              )}
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}