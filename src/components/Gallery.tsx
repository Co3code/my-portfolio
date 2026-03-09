import { motion } from "motion/react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What year am I in?",
    answer: "I am currently in my 3rd year of IT studies.",
  },
  {
    question: "Which programming languages am I comfortable with?",
    answer: "I mainly code in PHP, JavaScript, HTML, and CSS, and I’m learning React.",
  },
  {
    question: "What is my coding habit?",
    answer: "I try to code daily, practice small projects, and experiment with new technologies regularly.",
  },
  {
    question: "How many hours do I usually code?",
    answer: "On average, I spend around 3–5 hours coding each day, depending on my workload and projects.",
  },
  {
    question: "What inspired me to choose coding?",
    answer:
      "I was inspired by how technology solves real problems and the ability to create apps that people can actually use.",
  },
];

export default function FAQCollapsible() {
  return (
    <section id="faq" className="section-padding bg-gray-50 font-sans">
      <div className="max-w-7xl mx-auto text-center mb-16">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-gray-900 mb-4">
          Frequently Asked Questions
        </h2>
        <p className="text-gray-600 max-w-2xl mx-auto">
          Click the questions below to reveal the answers about my coding journey and habits.
        </p>
      </div>

      <div className="max-w-4xl mx-auto space-y-4">
        {faqs.map((item, index) => (
          <motion.details
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className="bg-white rounded-3xl shadow-lg p-6 group cursor-pointer"
          >
            <summary className="flex justify-between items-center font-semibold text-lg list-none group-open:text-gray-600 transition-colors">
              {item.question}
              <ChevronDown className="ml-2 h-5 w-5 text-gray-500 group-open:rotate-180 transition-transform duration-300" />
            </summary>
            <p className="mt-3 text-gray-600">{item.answer}</p>
          </motion.details>
        ))}
      </div>
    </section>
  ); 
}
