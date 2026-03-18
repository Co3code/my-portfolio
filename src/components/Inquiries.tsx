import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
import faqImage from "../assets/question.jpg";

const testimonials = [
  {
    name: "Amelia Mary",
    role: "Student",
    message: "Super satisfied about the web! Very legit and professional work.",
    image: "https://i.pravatar.cc/150?u=1",
  },
  {
    name: "Lazy-Drummer9332",
    role: "E-commerce Owner",
    message: "The design is clean and fast. Exactly what I needed for my business.",
    image: "https://i.pravatar.cc/150?u=2",
  },
  {
    name: "DiecastIndia",
    role: "Tech Lead",
    message: "Great attention to detail in the code. Highly recommended for React projects!",
    image: "https://i.pravatar.cc/150?u=3",
  },
];

const faqs = [
  {
    question: "What year am I in?",
    answer: "I am currently in my 3rd year of IT studies, focusing on modern web architecture.",
  },
  {
    question: "Which programming languages am I comfortable with?",
    answer:
      "I mainly code in PHP, JavaScript, HTML, and CSS. Currently, I'm deep-diving into React and Tailwind CSS for frontend excellence.",
  },
  {
    question: "What is my coding habit?",
    answer:
      "I believe in the '1% better every day' rule. I code daily, whether it's building small components or studying system design.",
  },
  {
    question: "How many hours do I usually code?",
    answer:
      "On average, I spend around 3–5 hours coding each day, balancing university workload with personal project development.",
  },
  {
    question: "What inspired me to choose coding?",
    answer:
      "The ability to turn a blank screen into a functional tool that solves real-world problems is what keeps me motivated every day.",
  },
];

export default function FAQ() {
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  return (
    <>
      {/* ── FAQ Section ── */}
      <section id="faq" className="relative py-28 bg-[#0a0a0f] overflow-hidden">

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
          className="absolute -top-16 -left-16 w-[400px] h-[400px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(120,90,255,0.12) 0%, transparent 70%)" }}
        />
        <div
          className="absolute -bottom-10 -right-10 w-[300px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(circle, rgba(60,180,150,0.08) 0%, transparent 70%)" }}
        />

        <div className="relative z-10 max-w-5xl mx-auto px-6 sm:px-10">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-20">

            {/* Left — Sticky */}
            <div className="lg:w-[280px] flex-shrink-0">
              <div className="lg:sticky lg:top-32">
                <motion.span
                  className="block text-[10px] font-medium tracking-[0.2em] uppercase text-[#f0ede6]/25 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                >
                  Information
                </motion.span>

                <h2
                  className="text-[clamp(2.5rem,4vw,3.8rem)] leading-[1.05] text-[#f0ede6] mb-8 tracking-tight"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  Common <br />
                  <em className="italic text-[#f0ede6]/30" style={{ fontFamily: "'DM Serif Display', serif" }}>
                    Inquiries
                  </em>
                </h2>

                <motion.div
                  className="relative hidden lg:block aspect-[3/4] rounded-2xl overflow-hidden border border-white/[0.06] bg-[#13121f]"
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8 }}
                >
                  <img
                    src={faqImage}
                    alt="FAQ Visual"
                    className="w-full h-full object-cover transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f]/40 to-transparent" />
                </motion.div>
              </div>
            </div>

            {/* Right — FAQ List */}
            <div className="flex-1">
              <div className="border-t border-white/[0.06]">
                {faqs.map((item, index) => {
                  const isOpen = activeIndex === index;
                  return (
                    <div key={index} className="border-b border-white/[0.06] overflow-hidden">
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="w-full py-7 flex justify-between items-center text-left gap-6 group"
                      >
                        <span
                          className={`text-lg md:text-xl font-normal pr-4 transition-colors duration-300 leading-snug ${
                            isOpen ? "text-[#f0ede6]" : "text-[#f0ede6]/35 group-hover:text-[#f0ede6]/65"
                          }`}
                        >
                          {item.question}
                        </span>
                        <span
                          className={`w-8 h-8 rounded-full flex-shrink-0 flex items-center justify-center border transition-all duration-300 ${
                            isOpen
                              ? "bg-[#f0ede6] border-[#f0ede6]"
                              : "bg-white/[0.03] border-white/[0.08] group-hover:border-white/[0.15]"
                          }`}
                        >
                          {isOpen
                            ? <Minus size={14} className="text-[#0a0a0f]" />
                            : <Plus size={14} className="text-[#f0ede6]/50" />
                          }
                        </span>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="pb-7 text-[0.88rem] text-[#f0ede6]/45 leading-relaxed max-w-xl">
                              {item.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Testimonials Section ── */}
      <section className="relative py-24 bg-[#0a0a0f] overflow-hidden border-t border-white/[0.04]">
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] rounded-full pointer-events-none"
          style={{ background: "radial-gradient(ellipse, rgba(120,90,255,0.08) 0%, transparent 70%)" }}
          animate={{ opacity: [0.6, 1, 0.6] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="relative z-10 max-w-lg mx-auto px-6 text-center">
          <motion.h2
            className="text-[clamp(2rem,4vw,3.5rem)] leading-none text-[#f0ede6] mb-12 tracking-tight"
            style={{ fontFamily: "'DM Serif Display', serif" }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            Client{" "}
            <em className="italic text-[#f0ede6]/30" style={{ fontFamily: "'DM Serif Display', serif" }}>
              Feedback
            </em>
          </motion.h2>

          {/* Card */}
          <div className="relative mb-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
                className="bg-white/[0.03] border border-white/[0.07] rounded-2xl p-7 text-left"
              >
                {/* Quote mark */}
                <span
                  className="block text-[2.5rem] leading-[0.5] mb-3 text-[rgba(120,90,255,0.3)]"
                  style={{ fontFamily: "'DM Serif Display', serif" }}
                >
                  "
                </span>

                {/* Avatar + Name */}
                <div className="flex items-center gap-3 mb-5">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-11 h-11 rounded-full border border-white/[0.08] object-cover grayscale hover:grayscale-0 transition-all duration-500 flex-shrink-0"
                  />
                  <div>
                    <p className="text-[0.9rem] font-medium text-[#f0ede6]">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-[9px] tracking-[0.15em] uppercase text-[#f0ede6]/30 mt-0.5">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>

                <p className="text-[0.88rem] text-[#f0ede6]/45 leading-relaxed italic">
                  {testimonials[activeTestimonial].message}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)}
              className="w-9 h-9 rounded-full border border-white/[0.08] text-[#f0ede6]/40 hover:border-white/[0.2] hover:text-[#f0ede6] transition-all flex items-center justify-center text-sm"
            >
              ←
            </button>

            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setActiveTestimonial(i)}
                  className={`rounded-full transition-all duration-300 border-none cursor-pointer ${
                    i === activeTestimonial
                      ? "w-4 h-1.5 bg-[#f0ede6]"
                      : "w-1.5 h-1.5 bg-white/15 hover:bg-white/30"
                  }`}
                />
              ))}
            </div>

            <button
              onClick={() => setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)}
              className="w-9 h-9 rounded-full border border-white/[0.08] text-[#f0ede6]/40 hover:border-white/[0.2] hover:text-[#f0ede6] transition-all flex items-center justify-center text-sm"
            >
              →
            </button>
          </div>
        </div>
      </section>
    </>
  );
}