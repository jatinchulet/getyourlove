import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const testimonials = [
  {
    text: "Bro I followed just 1 line and she messaged me first after ignoring me for 2 weeks! This stuff actually works.",
    name: "Rajesh, 24",
    location: "Mumbai",
    initial: "R"
  },
  {
    text: "Finally understood why I was getting friendzoned. Applied the psychology techniques and got 3 dates this month!",
    name: "Arjun, 28",
    location: "Delhi",
    initial: "A"
  },
  {
    text: "The templates are gold! Used them on Tinder and got more matches in one week than in 6 months.",
    name: "Sameer, 26",
    location: "Bangalore",
    initial: "S"
  },
  {
    text: "Went from getting ignored to having multiple conversations going. The psychology insights are incredible!",
    name: "Vikram, 30",
    location: "Chennai",
    initial: "V"
  },
  {
    text: "I was skeptical but tried it anyway. Now I understand female psychology better than my female friends do!",
    name: "Rohit, 25",
    location: "Pune",
    initial: "R"
  }
];

export default function TestimonialCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex(prev => (prev + 3) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  const currentTestimonials = testimonials.slice(currentIndex, currentIndex + 3);
  if (currentTestimonials.length < 3) {
    currentTestimonials.push(...testimonials.slice(0, 3 - currentTestimonials.length));
  }

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
      <AnimatePresence mode="wait">
        {currentTestimonials.map((testimonial, index) => (
          <motion.div
            key={`${currentIndex}-${index}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className="glassmorphism p-8 rounded-xl"
          >
            <div className="flex mb-4">
              <span className="text-yellow-500 text-2xl">★★★★★</span>
            </div>
            <p className="text-gray-200 mb-6 italic">"{testimonial.text}"</p>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-gradient-to-br from-yellow-500 to-red-600 rounded-full flex items-center justify-center text-black font-bold">
                {testimonial.initial}
              </div>
              <div>
                <h4 className="font-bold text-yellow-500">{testimonial.name}</h4>
                <p className="text-sm text-gray-400">{testimonial.location}</p>
              </div>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
