import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send } from 'lucide-react';

const CTA = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.trim()) return;
    
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      setEmail('');
      // Reset success message after 3 seconds
      setTimeout(() => setIsSubmitted(false), 3000);
    }, 1500);
  };

  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background with blur effect */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1530281700549-e82e7bf110d6?auto=format&fit=crop&q=80)',
          filter: 'blur(8px)',
        }}
      />
      <div className="absolute inset-0 bg-primary/30 backdrop-blur-sm z-0" />
      
      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-white mb-8">
            Be the First to Sip Sustainably.
          </h2>
          
          <p className="text-xl text-white/80 mb-10 max-w-2xl mx-auto">
            Join our exclusive waitlist to be notified when our eco-friendly wooden glassware becomes available.
          </p>
          
          <motion.form 
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4 max-w-xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="relative flex-grow">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="w-full py-4 px-6 rounded-full text-gray-800 
                  bg-white/20 backdrop-blur-md border border-white/30
                  placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-primary
                  shadow-lg transition-all duration-300"
                disabled={isSubmitting || isSubmitted}
                required
              />
            </div>
            
            <motion.button
              type="submit"
              disabled={isSubmitting || isSubmitted}
              className={`py-4 px-8 rounded-full font-medium text-white 
                transition-all duration-500 shadow-lg
                ${isSubmitted ? 'bg-green-600' : 'bg-primary hover:bg-primary-dark'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ boxShadow: "0 0 0 0 rgba(46, 125, 50, 0.7)" }}
              animate={isSubmitting ? {
                boxShadow: ["0 0 0 0 rgba(46, 125, 50, 0.7)", "0 0 0 20px rgba(46, 125, 50, 0)"],
              } : {}}
              transition={{ 
                boxShadow: { repeat: Infinity, duration: 1.5 },
                backgroundColor: { duration: 0.3 } 
              }}
            >
              {isSubmitting ? (
                <span className="flex items-center justify-center">
                  <svg className="animate-spin -ml-1 mr-2 h-4 w-4 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                  </svg>
                  Processing
                </span>
              ) : isSubmitted ? (
                <span className="flex items-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                  Joined!
                </span>
              ) : (
                <span className="flex items-center">
                  Join the Waitlist
                  <Send className="ml-2 h-4 w-4" />
                </span>
              )}
            </motion.button>
          </motion.form>
          
          <motion.p 
            className="mt-6 text-sm text-white/70"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            viewport={{ once: true }}
          >
            We respect your privacy. No spam, ever.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
};

export default CTA;
