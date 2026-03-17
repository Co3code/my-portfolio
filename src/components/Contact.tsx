import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Mail, Phone, MapPin, Send, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

const contactInfo = [
  {
    icon: <Mail size={16} />,
    title: "Email",
    detail: "anthonycountian7@gmail.com",
  },
  {
    icon: <Phone size={16} />,
    title: "Phone",
    detail: "0991 677 2811",
  },
  {
    icon: <MapPin size={16} />,
    title: "Location",
    detail: "Gingoog City, PH",
  },
];

export default function Contact() {
  const formRef = useRef<HTMLFormElement>(null);
  const [form, setForm] = useState({ name: "", email: "", message: "", plan: "" });
  const [status, setStatus] = useState<"success" | "error" | null>(null);
  const [loading, setLoading] = useState(false);

  // Read selected plan from URL and listen for changes from Pricing
  useEffect(() => {
    const handleUrlChange = () => {
      const params = new URLSearchParams(window.location.search);
      const selectedPlan = params.get("plan");
      if (selectedPlan) {
        setForm((prev) => ({ ...prev, plan: selectedPlan }));
      }
    };
    handleUrlChange();
    window.addEventListener("popstate", handleUrlChange);
    return () => window.removeEventListener("popstate", handleUrlChange);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        formRef.current!,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      )
      .then(() => {
        setLoading(false);
        setStatus("success");
        setForm({ name: "", email: "", message: "", plan: "" });
        setTimeout(() => setStatus(null), 5000);
      })
      .catch((err) => {
        setLoading(false);
        setStatus("error");
        console.error("EmailJS Error:", err);
      });
  };

  return (
    <section id="contact" className="relative py-28 bg-[#0a0a0f] overflow-hidden">

      {/* Background Grid */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.025) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.025) 1px, transparent 1px)",
          backgroundSize: "60px 60px",
        }}
      />

      {/* Orbs */}
      <div
        className="absolute -top-20 -right-20 w-[450px] h-[450px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(120,90,255,0.12) 0%, transparent 70%)" }}
      />
      <div
        className="absolute -bottom-16 -left-16 w-[350px] h-[350px] rounded-full pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(255,100,80,0.08) 0%, transparent 70%)" }}
      />

      <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-start">

          {/* ── Left Info ── */}
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/25 mb-4">
              Inquiry
            </span>

            <h2
              className="text-[clamp(2.8rem,4.5vw,4.2rem)] leading-[1.05] text-[#f0ede6] tracking-tight mb-5"
              style={{ fontFamily: "'DM Serif Display', serif" }}
            >
              Let's build{" "}
              <em
                className="italic text-[#f0ede6]/30 text-[0.85em] block"
                style={{ fontFamily: "'DM Serif Display', serif" }}
              >
                together.
              </em>
            </h2>

            <p className="text-[0.9rem] text-[#f0ede6]/40 leading-relaxed max-w-sm mb-12">
              Whether you have a question or just want to discuss a new project, my inbox is always open.
            </p>

            <div className="space-y-7">
              {contactInfo.map((item, i) => (
                <div key={i} className="flex items-center gap-4 group cursor-default">
                  <div className="w-11 h-11 rounded-xl border border-white/[0.08] bg-white/[0.03] flex items-center justify-center flex-shrink-0 transition-all duration-300 group-hover:bg-[#f0ede6] group-hover:border-[#f0ede6]">
                    <span className="text-[#f0ede6]/45 transition-colors duration-300 group-hover:text-[#0a0a0f] [&>svg]:w-4 [&>svg]:h-4">
                      {item.icon}
                    </span>
                  </div>
                  <div>
                    <p className="text-[9px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/25 mb-0.5">
                      {item.title}
                    </p>
                    <p className="text-[0.9rem] text-[#f0ede6]/70">{item.detail}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* ── Right Form ── */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.1 }}
          >
            <form
              ref={formRef}
              onSubmit={handleSubmit}
              className="bg-white/[0.025] border border-white/[0.07] rounded-3xl p-8 md:p-10 space-y-7"
            >
              {/* Name + Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-[9px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/30">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="Enter name"
                    required
                    className="w-full bg-transparent border-b border-white/[0.08] focus:border-white/[0.35] text-[#f0ede6] text-[0.9rem] py-2.5 outline-none transition-colors placeholder:text-[#f0ede6]/18"
                  />
                </div>
                <div className="space-y-2">
                  <label className="block text-[9px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/30">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    placeholder="example@mail.com"
                    required
                    className="w-full bg-transparent border-b border-white/[0.08] focus:border-white/[0.35] text-[#f0ede6] text-[0.9rem] py-2.5 outline-none transition-colors placeholder:text-[#f0ede6]/18"
                  />
                </div>
              </div>

              {/* Selected Plan */}
              <div className="space-y-2">
                <label className="block text-[9px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/30">
                  Selected Plan
                </label>
                <input
                  type="text"
                  name="plan"
                  value={form.plan}
                  readOnly
                  className="w-full bg-white/[0.02] border-b border-white/[0.08] text-[#f0ede6]/40 text-[0.9rem] py-2.5 outline-none cursor-default"
                />
              </div>

              {/* Message */}
              <div className="space-y-2">
                <label className="block text-[9px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/30">
                  Message
                </label>
                <textarea
                  rows={4}
                  name="message"
                  value={form.message}
                  onChange={handleChange}
                  placeholder="How can I help you?"
                  required
                  className="w-full bg-transparent border-b border-white/[0.08] focus:border-white/[0.35] text-[#f0ede6] text-[0.9rem] py-2.5 outline-none transition-colors resize-none placeholder:text-[#f0ede6]/18"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 bg-[#f0ede6] text-[#0a0a0f] rounded-full text-[11px] font-semibold tracking-[0.15em] uppercase flex items-center justify-center gap-2 transition-all duration-250 hover:bg-white hover:-translate-y-0.5 hover:shadow-[0_8px_24px_rgba(240,237,230,0.12)] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none group"
              >
                {loading ? "Sending..." : "Send Inquiry"}
                {!loading && (
                  <Send
                    size={13}
                    className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform"
                  />
                )}
              </button>

              {/* Status */}
              <AnimatePresence>
                {status === "success" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="flex items-center justify-center gap-2 text-green-400 text-[0.85rem] font-medium"
                  >
                    <CheckCircle2 size={16} />
                    Message sent successfully!
                  </motion.div>
                )}
                {status === "error" && (
                  <motion.div
                    initial={{ opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 }}
                    className="text-red-400 text-[0.85rem] font-medium text-center"
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