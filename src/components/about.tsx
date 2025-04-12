import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Leaf, Recycle, Globe, Wind } from 'lucide-react';

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section className="py-24 bg-white relative overflow-hidden" ref={ref}>
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-5">
        <motion.div
          className="absolute top-0 right-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 80% 20%, rgba(46, 125, 50, 0.3) 0%, transparent 25%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-full h-full"
          style={{
            background: "radial-gradient(circle at 20% 80%, rgba(78, 52, 46, 0.3) 0%, transparent 25%)",
          }}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 15,
            delay: 7,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="inline-flex items-center gap-2 mb-3"
          >
            <Leaf className="h-5 w-5 text-primary" />
            <span className="text-primary font-medium">About Sustainable Futures</span>
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-3xl md:text-4xl font-playfair text-secondary mb-6"
          >
            Reimagining Tomorrow, Sustainably.
          </motion.h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {/* Main content column */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="md:col-span-2"
          >
            <p className="text-gray-700 mb-6 leading-relaxed text-lg">
              At Sustainable Futures, we create products that align beauty, function, and responsibility. From reusable water bottles to zero-waste home goods and sustainable fashion, our mission is simple — design for the planet without compromising elegance.
            </p>
            
            <p className="text-gray-700 mb-8 leading-relaxed text-lg">
              We believe sustainability isn't a checkbox — it's a lifestyle. Every product we offer is a conscious step toward a cleaner earth: thoughtfully designed, ethically sourced, and meant to last. Our artisans work with reclaimed materials, low-impact processes, and an unwavering respect for nature.
            </p>

            {/* Quote card */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="bg-gradient-to-r from-primary/10 to-secondary/10 p-6 rounded-xl border border-primary/20 mb-8"
            >
              <div className="flex items-start">
                <Recycle className="h-6 w-6 text-primary mr-3 mt-1 flex-shrink-0" />
                <p className="text-secondary italic font-medium text-lg">
                  "Our promise: luxury without waste, purpose without compromise."
                </p>
              </div>
            </motion.div>

            <p className="text-gray-700 leading-relaxed text-lg">
              Through eco-innovation and transparent values, we invite you to join us in shaping a future that's not just sustainable — but exceptional.
            </p>
          </motion.div>

          {/* Card with company values */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.8 }}
            className="relative bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
          >
            <div className="absolute top-0 right-0 w-20 h-20 bg-primary/10 rounded-full -mt-10 -mr-10" />
            <div className="absolute bottom-0 left-0 w-16 h-16 bg-secondary/10 rounded-full -mb-8 -ml-8" />
            
            <div className="p-6 relative z-10">
              <h3 className="text-xl font-cinzel text-secondary mb-4">Our Values</h3>
              
              {['Sustainability', 'Craftsmanship', 'Transparency', 'Innovation'].map((value, i) => (
                <motion.div
                  key={value}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 1 + (i * 0.2) }}
                  className="flex items-center mb-4"
                >
                  {i % 2 === 0 ? (
                    <Globe className="h-5 w-5 text-primary mr-3" />
                  ) : (
                    <Wind className="h-5 w-5 text-primary mr-3" />
                  )}
                  <span className="text-gray-700">{value}</span>
                </motion.div>
              ))}
              
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={isInView ? { scale: 1, opacity: 1 } : {}}
                transition={{ duration: 0.8, delay: 1.8 }}
                className="mt-6 pt-4 border-t border-gray-100"
              >
                <div className="flex items-center justify-between text-xs text-gray-500">
                  <span>EST. 2018</span>
                  <span>100% Carbon Neutral</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Vision section with background gradient */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="relative rounded-2xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-secondary/20" />
          
          <div className="relative p-8 md:p-12 text-center">
            <h3 className="text-2xl font-cinzel text-secondary mb-4">Our Vision</h3>
            <p className="text-gray-700 max-w-3xl mx-auto">
              We envision a world where sustainable choices are the norm, not the exception. 
              Through our products and practices, we're building a community of conscious consumers 
              who understand that quality and responsibility can coexist beautifully.
            </p>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={isInView ? { opacity: 1 } : {}}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="mt-6 flex flex-wrap justify-center gap-4"
            >
              {['Reduce', 'Reuse', 'Recycle', 'Rethink', 'Refuse'].map((principle, i) => (
                <motion.span
                  key={principle}
                  initial={{ opacity: 0 }}
                  animate={isInView ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: 1.8 + (i * 0.2) }}
                  className="px-4 py-2 bg-white/50 backdrop-blur-sm rounded-full text-sm text-primary border border-primary/20"
                >
                  {principle}
                </motion.span>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
