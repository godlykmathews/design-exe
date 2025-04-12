import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trees as Tree, Recycle, Clock, Heart, Axe, Truck, Factory, Store, ChevronRight, BarChart } from 'lucide-react';

const features = [
  {
    icon: Tree,
    title: 'Timeless Craftsmanship',
    description: 'Made from teak, mango, and blueberry wood',
  },
  {
    icon: Recycle,
    title: 'Eco-Friendly & Biodegradable',
    description: 'No chemicals, low emissions',
  },
  {
    icon: Clock,
    title: 'Lasts 15+ Years',
    description: 'Durable, resilient, elegant',
  },
  {
    icon: Heart,
    title: 'Cruelty-Free & Handmade',
    description: 'Ethical in every way',
  },
];

// Sustainability process timeline
const processSteps = [
  { icon: Tree, title: 'Sustainable Harvesting', description: 'Trees selected based on age and growth cycle' },
  { icon: Axe, title: 'Mindful Collection', description: 'Hand-cut with minimal environmental impact' },
  { icon: Factory, title: 'Zero-Waste Production', description: 'Every part of wood used or recycled' },
  { icon: Truck, title: 'Carbon-Neutral Delivery', description: 'Emissions offset through reforestation' },
  { icon: Store, title: 'To Your Table', description: 'Ready for generations of use' },
];

// Carbon emission data (hypothetical values for comparison)
const emissionData = [
  { material: 'Our Wood', value: 10, color: '#2E7D32' },
  { material: 'Regular Glass', value: 70, color: '#90A4AE' },
  { material: 'Steel', value: 90, color: '#607D8B' },
  { material: 'Plastic', value: 95, color: '#455A64' },
];

const Features = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Create horizontal movement based on scroll
  const xRange = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <section className="py-20 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Improved features section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-center text-secondary mb-4">
            Luxury Meets Sustainability
          </h2>
          <p className="text-gray-600 text-center max-w-3xl mx-auto mb-12">
            Our wooden glassware combines elegant design with environmental responsibility.
          </p>

          <div className="relative overflow-hidden">
            <motion.div 
              style={{ x: xRange }}
              className="flex flex-nowrap gap-6 pb-4 -mx-4 px-4 overflow-x-auto scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8"
            >
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, x: 50 * (index - 1) }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ 
                    delay: index * 0.15, 
                    duration: 0.8,
                    type: "spring",
                    stiffness: 50
                  }}
                  className="group relative min-w-[270px] md:min-w-0 p-8 rounded-2xl
                    backdrop-blur-md border border-white/20
                    transition-all duration-500 ease-out
                    shadow-[0_8px_30px_rgb(0,0,0,0.04)]
                    hover:shadow-[0_8px_30px_rgba(46,125,50,0.1)]"
                  whileHover={{ y: -8 }}
                >
                  {/* Gradient background overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-white/80 to-white/40 rounded-2xl z-[-1]" />
                  
                  {/* Glowing effect on hover */}
                  <motion.div 
                    className="absolute inset-0 bg-gradient-to-tr from-primary-light/20 via-secondary-light/10 to-primary-light/20 rounded-2xl z-[-1] opacity-0 group-hover:opacity-100"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.6 }}
                  />
                  
                  {/* Icon with animated background */}
                  <div className="relative mb-6 inline-block">
                    <motion.div 
                      className="absolute inset-0 bg-primary/10 rounded-full blur-md z-0"
                      animate={{ 
                        scale: [1, 1.2, 1],
                      }}
                      transition={{ 
                        repeat: Infinity,
                        duration: 3,
                        ease: "easeInOut"
                      }}
                    />
                    <motion.div 
                      className="relative z-10 w-16 h-16 bg-gradient-to-r from-primary/90 to-primary-dark/90 rounded-full flex items-center justify-center text-white shadow-lg"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 1, type: "spring" }}
                    >
                      <feature.icon size={28} strokeWidth={1.5} />
                    </motion.div>
                  </div>
                  
                  {/* Feature content */}
                  <h3 className="text-xl font-semibold text-secondary mb-3 group-hover:text-primary transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600 group-hover:text-gray-700 transition-colors duration-300">
                    {feature.description}
                  </p>

                  {/* Decorative corner elements */}
                  <div className="absolute top-4 right-4 w-6 h-6 border-t-2 border-r-2 border-primary-light/40 rounded-tr-lg" />
                  <div className="absolute bottom-4 left-4 w-6 h-6 border-b-2 border-l-2 border-primary-light/40 rounded-bl-lg" />
                </motion.div>
              ))}
            </motion.div>

            {/* Scroll indicators (visible on mobile only) */}
            <div className="md:hidden flex justify-center mt-4 gap-1">
              {features.map((_, index) => (
                <div 
                  key={index} 
                  className={`h-1.5 rounded-full transition-all duration-300 ${
                    index === 0 ? 'w-6 bg-primary' : 'w-2 bg-gray-300'
                  }`}
                />
              ))}
            </div>
          </div>
        </motion.div>
        

      </div>
    </section>
  );
};

export default Features;