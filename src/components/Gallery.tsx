import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Plus, Minus } from "lucide-react";
// Import your secondary photo here
import faqImage from "../assets/quest-removebg-preview.png";

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

  return (
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
  );
}
