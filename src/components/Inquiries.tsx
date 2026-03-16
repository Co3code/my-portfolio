import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
// Import your secondary photo here
import faqImage from "../assets/quer.jpg";

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
      {/* FAQ Section */}
      <section id="faq" className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
            {/* Left Side: Sticky Image */}
            <div className="lg:w-1/3">
              <div className="lg:sticky lg:top-32">
                <motion.span
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  className="text-xs font-bold tracking-[0.2em] uppercase text-gray-400 mb-4 block"
                >
                  Information
                </motion.span>
                <h2 className="text-4xl md:text-6xl font-serif font-bold text-gray-900 mb-8 leading-tight">
                  Common <br />
                  <span className="italic font-normal text-gray-500">Inquiries</span>
                </h2>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  className="relative hidden lg:block aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl"
                >
                  <img
                    src={faqImage}
                    alt="FAQ Visual"
                    className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                  />
                  <div className="absolute inset-0 bg-gray-900/10" />
                </motion.div>
              </div>
            </div>

            {/* Right Side: FAQ List */}
            <div className="lg:w-2/3">
              <div className="divide-y divide-gray-100 border-t border-gray-100">
                {faqs.map((item, index) => {
                  const isOpen = activeIndex === index;

                  return (
                    <div key={index} className="overflow-hidden">
                      <button
                        onClick={() => setActiveIndex(isOpen ? null : index)}
                        className="w-full py-8 flex justify-between items-center text-left group transition-all"
                      >
                        <span
                          className={`text-xl md:text-2xl font-medium pr-8 transition-colors duration-300 ${
                            isOpen ? "text-gray-900" : "text-gray-400 group-hover:text-gray-600"
                          }`}
                        >
                          {item.question}
                        </span>
                        <div
                          className={`flex-shrink-0 p-2 rounded-full transition-all duration-300 ${
                            isOpen
                              ? "bg-gray-900 text-white rotate-180"
                              : "bg-gray-50 text-gray-400 group-hover:bg-gray-100"
                          }`}
                        >
                          {isOpen ? <Minus size={18} /> : <Plus size={18} />}
                        </div>
                      </button>

                      <AnimatePresence>
                        {isOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
                          >
                            <p className="pb-8 text-gray-500 text-base md:text-lg leading-relaxed max-w-2xl">
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

      {/* Testimonial Carousel */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="mb-16 text-center">
            <h2 className="text-4xl font-serif font-bold text-gray-900">
              Client <span className="italic font-normal text-gray-500">Feedback</span>
            </h2>
          </div>

          <div className="relative flex flex-col items-center">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.5 }}
                className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 w-full max-w-md"
              >
                <div className="flex items-center gap-4 mb-6">
                  <img
                    src={testimonials[activeTestimonial].image}
                    alt={testimonials[activeTestimonial].name}
                    className="w-12 h-12 rounded-full grayscale hover:grayscale-0 transition-all duration-500"
                  />
                  <div>
                    <h4 className="font-bold text-gray-900">{testimonials[activeTestimonial].name}</h4>
                    <p className="text-sm text-gray-400 uppercase tracking-wider">
                      {testimonials[activeTestimonial].role}
                    </p>
                  </div>
                </div>
                <p className="text-gray-600 italic leading-relaxed">"{testimonials[activeTestimonial].message}"</p>
              </motion.div>
            </AnimatePresence>

            {/* Circle Navigation */}
            <div className="flex justify-center mt-6 gap-3">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  className={`w-3 h-3 rounded-full transition-all ${
                    index === activeTestimonial ? "bg-gray-900" : "bg-gray-400"
                  }`}
                  onClick={() => setActiveTestimonial(index)}
                ></button>
              ))}
            </div>

            {/* Optional Arrows */}
            <div className="flex justify-between w-full max-w-md mt-4">
              <button
                onClick={() =>
                  setActiveTestimonial(activeTestimonial === 0 ? testimonials.length - 1 : activeTestimonial - 1)
                }
                className="text-gray-500 hover:text-gray-900"
              >
                ←
              </button>
              <button
                onClick={() =>
                  setActiveTestimonial(activeTestimonial === testimonials.length - 1 ? 0 : activeTestimonial + 1)
                }
                className="text-gray-500 hover:text-gray-900"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
