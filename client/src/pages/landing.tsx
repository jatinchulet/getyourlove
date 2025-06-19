import { motion } from "framer-motion";
import { Shield, Download, Smartphone, Target, Zap, X, Gift, Crown, Brain } from "lucide-react";
import CountdownTimer from "@/components/countdown-timer";
import TestimonialCarousel from "@/components/testimonial-carousel";
import FAQSection from "@/components/faq-section";
import StickyCTA from "@/components/sticky-cta";

export default function LandingPage() {
  const handlePurchase = () => {
    // TODO: Implement payment processing
    console.log("Purchase initiated");
  };

  return (
    <div className="bg-black text-white font-inter">
      <StickyCTA />
      
      {/* Hero Section */}
      <section className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-black relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-600/10 to-transparent"></div>
        
        <div className="container mx-auto px-4 py-20 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center lg:text-left"
            >
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-black font-montserrat leading-tight mb-6">
                <span className="text-white">Tired of being</span>
                <span className="text-gradient block">IGNORED?</span>
              </h1>
              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-yellow-500 mb-8">
                Unlock the psychology that makes her chase you.
              </h2>
              <p className="text-lg md:text-xl text-gray-300 mb-12 max-w-2xl">
                Learn the exact words, texts & strategies that trigger emotional attraction in women — even if you're not rich, tall or famous.
              </p>
              
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                className="bg-gradient-to-r from-red-600 to-red-700 p-6 rounded-xl mb-8 animate-glow"
              >
                <div className="flex items-center justify-center gap-4 mb-4">
                  <span className="text-2xl font-bold line-through text-gray-400">₹999</span>
                  <span className="text-4xl font-black text-yellow-500">₹99</span>
                  <span className="bg-yellow-500 text-black px-3 py-1 rounded-full text-sm font-bold">90% OFF</span>
                </div>
                <p className="text-sm text-gray-200">Limited Time Offer</p>
              </motion.div>

              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={handlePurchase}
                className="bg-yellow-500 text-black font-black text-xl px-12 py-6 rounded-xl transition-all animate-pulse-slow shadow-2xl"
              >
                Get Access Now – Instant Download
              </motion.button>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="flex justify-center"
            >
              <div className="relative animate-float">
                <img
                  src="https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=800"
                  alt="Unlock Her Mind eBook Cover"
                  className="w-80 h-96 object-cover rounded-xl shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/20 to-red-600/20 rounded-xl"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Emotional Trigger Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">
              <span className="text-red-600">Sound Familiar?</span>
            </h2>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                emoji: "😔",
                title: "She \"lost interest\" after 3 days?",
                description: "You were texting perfectly fine, then suddenly... silence. Left wondering what went wrong."
              },
              {
                emoji: "👥",
                title: "Always end up in the friend zone?",
                description: "\"You're such a good friend\" - the words that crush your confidence every single time."
              },
              {
                emoji: "👻",
                title: "Feel confused after getting ghosted?",
                description: "Everything seemed to be going well, then she vanished without explanation."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gray-800/30 p-8 rounded-xl border border-red-600/20 hover:border-red-600/50 transition-colors"
              >
                <div className="text-red-600 text-4xl mb-4">{item.emoji}</div>
                <h3 className="text-xl font-bold mb-4 text-red-600">{item.title}</h3>
                <p className="text-gray-300">{item.description}</p>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center bg-gradient-to-r from-red-600/20 to-yellow-500/20 p-8 rounded-xl"
          >
            <h3 className="text-2xl md:text-3xl font-bold mb-4">
              Most guys text randomly. <span className="text-yellow-500">Alpha men text with intention.</span>
            </h3>
            <p className="text-xl text-gray-200">This eBook shows you exactly how.</p>
          </motion.div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">
              <span className="text-gradient">What You'll Master</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Transform from confused to confident with psychology-backed strategies that actually work.
            </p>
          </motion.div>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {[
              {
                icon: <Target className="text-yellow-500 text-2xl" />,
                title: "How to text in a way that sparks curiosity & desire",
                description: "The psychological triggers that make her eager to respond and engage."
              },
              {
                icon: <Zap className="text-yellow-500 text-2xl" />,
                title: "The \"Attraction Frame\" women can't resist",
                description: "Position yourself as the prize she wants to win, not chase."
              },
              {
                icon: <X className="text-yellow-500 text-2xl" />,
                title: "5 mistakes that turn her off instantly",
                description: "Avoid the common pitfalls that kill attraction before it starts."
              },
              {
                icon: <span className="text-yellow-500 text-2xl">🔥</span>,
                title: "What to say when she goes cold or dry",
                description: "Turn around dead conversations and reignite her interest."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-red-600/10 to-transparent border border-red-600/20"
              >
                <div>{item.icon}</div>
                <div>
                  <h3 className="text-xl font-bold mb-2 text-yellow-500">{item.title}</h3>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="flex items-start gap-4 p-6 rounded-xl bg-gradient-to-r from-yellow-500/10 to-transparent border border-yellow-500/20 md:col-span-2"
            >
              <div><Gift className="text-red-600 text-2xl" /></div>
              <div>
                <h3 className="text-xl font-bold mb-2 text-red-600">BONUS: Real texting templates that get responses fast</h3>
                <p className="text-gray-300">Copy-paste messages that have been tested and proven to work.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Visual Impact Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
                alt: "Confident man silhouette"
              },
              {
                src: "https://images.unsplash.com/photo-1494790108755-2616c330ca42?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=400&h=600",
                alt: "Woman smiling at phone"
              },
              {
                src: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
                alt: "Dating app interface"
              },
              {
                src: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=600",
                alt: "Successful confident man"
              }
            ].map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="relative overflow-hidden rounded-xl"
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">
              <span className="text-gradient">Real Results From Real Men</span>
            </h2>
          </motion.div>
          
          <TestimonialCarousel />
        </div>
      </section>

      {/* Bonuses Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">
              <span className="text-gradient">Exclusive Bonuses</span>
            </h2>
            <p className="text-xl text-gray-300">Worth ₹1,197 - Yours FREE today only</p>
          </motion.div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: <Target className="text-yellow-500 text-4xl" />,
                title: "FREE BONUS #1",
                subtitle: "20 Irresistible First Messages",
                description: "That spark instant attraction and get responses fast",
                value: "₹499"
              },
              {
                icon: <Brain className="text-red-600 text-4xl" />,
                title: "FREE BONUS #2",
                subtitle: "Female Psychology Cheat Sheet",
                description: "Understand what she's really thinking behind her texts",
                value: "₹299"
              },
              {
                icon: <Crown className="text-yellow-500 text-4xl" />,
                title: "FREE BONUS #3",
                subtitle: "Alpha Dating Habits Guide",
                description: "Build the mindset and habits of naturally attractive men",
                value: "₹399"
              }
            ].map((bonus, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                className="bg-gradient-to-br from-yellow-500/20 via-transparent to-red-600/20 p-8 rounded-xl border border-yellow-500/30"
              >
                <div className="mb-4">{bonus.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-yellow-500">{bonus.title}</h3>
                <h4 className="text-lg font-semibold mb-2">{bonus.subtitle}</h4>
                <p className="text-gray-300 mb-4">{bonus.description}</p>
                <div className="text-yellow-500 font-bold">Value: {bonus.value}</div>
              </motion.div>
            ))}
          </div>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="text-center mt-12"
          >
            <div className="inline-block bg-gradient-to-r from-red-600 to-yellow-500 p-6 rounded-xl">
              <p className="text-2xl font-bold text-black">Total Value: ₹2,196</p>
              <p className="text-3xl font-black text-white">Your Price Today: ₹99</p>
              <p className="text-sm text-gray-200">Save ₹2,097 (95% OFF)</p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Urgency Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">
              <span className="text-red-600">⏰ This Offer Expires In:</span>
            </h2>
            
            <CountdownTimer className="mb-12" />
            
            <div className="bg-gradient-to-r from-red-600/20 to-yellow-500/20 p-8 rounded-xl mb-8">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">⚠️ Only 47 copies left at ₹99</h3>
              <p className="text-xl text-gray-200 mb-6">After this timer hits zero, the price goes back to ₹999</p>
              <div className="bg-red-600/30 p-4 rounded-lg border border-red-600">
                <p className="text-lg font-bold text-red-600">Don't text another girl until you read this!</p>
              </div>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePurchase}
              className="bg-yellow-500 text-black font-black text-2xl px-16 py-8 rounded-xl transition-all animate-pulse-slow shadow-2xl"
            >
              🔥 Secure Your Copy Now - ₹99
            </motion.button>
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gradient-to-b from-black to-gray-900">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-black font-montserrat mb-8">
              <span className="text-gradient">Frequently Asked Questions</span>
            </h2>
          </motion.div>
          
          <FAQSection />
        </div>
      </section>

      {/* Trust Elements Section */}
      <section className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="flex flex-wrap justify-center items-center gap-8 mb-12">
              <div className="flex items-center gap-3">
                <Shield className="text-yellow-500 text-2xl" />
                <span className="text-gray-300">100% Safe Payment</span>
              </div>
              <div className="flex items-center gap-3">
                <Download className="text-yellow-500 text-2xl" />
                <span className="text-gray-300">Instant Access</span>
              </div>
              <div className="flex items-center gap-3">
                <Smartphone className="text-yellow-500 text-2xl" />
                <span className="text-gray-300">Read on Any Device</span>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-red-600/20 to-yellow-500/20 p-8 rounded-xl max-w-2xl mx-auto mb-12">
              <h3 className="text-2xl font-bold mb-4 text-yellow-500">Our Guarantee</h3>
              <p className="text-xl text-gray-200">If you don't learn something new that changes your dating game, you clearly didn't open it. But we know you will.</p>
            </div>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePurchase}
              className="bg-yellow-500 text-black font-black text-2xl px-16 py-8 rounded-xl transition-all animate-pulse-slow shadow-2xl"
            >
              🔥 Get Instant Access - ₹99
            </motion.button>
            <p className="text-sm text-gray-400 mt-4">Secure payment • Instant download • No subscription</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
