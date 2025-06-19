import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";

const faqs = [
  {
    question: "Will this work even if I'm shy?",
    answer: "Absolutely! This isn't about changing your personality - it's about learning the right psychology and techniques. Many of our most successful students started as introverts."
  },
  {
    question: "Can I use this on dating apps?",
    answer: "Yes! The psychology principles work everywhere - Tinder, Bumble, Instagram, WhatsApp, or any platform where you text women."
  },
  {
    question: "How fast will I see results?",
    answer: "Most men see improvements in their text conversations within 24-48 hours. The psychological techniques are designed to work immediately when applied correctly."
  },
  {
    question: "Is it a PDF? How do I access it?",
    answer: "You'll get instant access to a downloadable PDF that works on any device - phone, tablet, or computer. Download link sent to your email immediately after purchase."
  }
];

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-4xl mx-auto space-y-6">
      {faqs.map((faq, index) => (
        <div
          key={index}
          className="bg-gray-800/30 p-6 rounded-xl border border-red-600/20 cursor-pointer hover:border-red-600/50 transition-colors"
          onClick={() => toggleFAQ(index)}
        >
          <div className="flex justify-between items-center">
            <h3 className="text-xl font-bold text-yellow-500">{faq.question}</h3>
            {openIndex === index ? (
              <ChevronUp className="text-yellow-500 text-2xl" />
            ) : (
              <ChevronDown className="text-yellow-500 text-2xl" />
            )}
          </div>
          <AnimatePresence>
            {openIndex === index && (
              <motion.div
                initial={{ opacity: 0, height: 0 }}
                animate={{ opacity: 1, height: "auto" }}
                exit={{ opacity: 0, height: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="mt-4 text-gray-300">
                  <p>{faq.answer}</p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
