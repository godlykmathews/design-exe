import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Trees as Tree, Recycle, Clock, Heart, Axe, Truck, Factory, Store, ChevronRight, BarChart } from 'lucide-react';


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

const Sustainability = () => {
  const containerRef = useRef(null);

  return (
    <section className="py-1 bg-white" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
         {/* Sustainability Commitment Section */}
         <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mt-28 mb-10"
          id="sustainability"
        >
          <h2 className="text-3xl md:text-4xl font-playfair text-center text-secondary mb-16">
            Our Sustainability Commitment
          </h2>
          
          {/* From Forest to Table Timeline */}
          <div className="mb-24">
            <h3 className="text-2xl font-cinzel text-primary text-center mb-12">
              From Forest to Table
            </h3>
            
            <div className="relative">
              {/* Timeline connector line */}
              <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-primary-light z-0"></div>
              
              {/* Process steps */}
              <div className="relative z-10">
                {processSteps.map((step, index) => (
                  <motion.div
                    key={step.title}
                    initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className={`flex mb-12 items-center ${
                      index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                    }`}
                  >
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pr-12 text-right' : 'pl-12'}`}>
                      <h4 className="text-lg font-semibold text-secondary mb-1">{step.title}</h4>
                      <p className="text-gray-600">{step.description}</p>
                    </div>
                    
                    <div className="relative flex-shrink-0">
                      <motion.div 
                        className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white shadow-lg"
                        whileHover={{ scale: 1.2, rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        <step.icon size={20} />
                      </motion.div>
                      <motion.div
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: index * 0.2 + 0.2 }}
                        className="absolute -z-10 inset-0 bg-primary-light rounded-full blur-sm"
                      />
                    </div>
                    
                    <div className={`w-1/2 ${index % 2 === 0 ? 'pl-12' : 'pr-12 text-right'}`}>
                      {index < processSteps.length - 1 && (
                        <motion.div
                          animate={{ 
                            x: [0, index % 2 === 0 ? -10 : 10, 0],
                            opacity: [0.6, 1, 0.6] 
                          }}
                          transition={{ 
                            repeat: Infinity, 
                            duration: 2,
                            delay: index * 0.3 
                          }}
                          className={`text-primary ${index % 2 === 0 ? 'text-left' : 'text-right'}`}
                        >
                          <ChevronRight className={`inline ${index % 2 !== 0 ? 'transform rotate-180' : ''}`} />
                        </motion.div>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
          
          {/* Carbon Emission Comparison */}
          <div className="mb-24 bg-gray-50 py-12 px-6 rounded-xl">
            <h3 className="text-2xl font-cinzel text-primary text-center mb-8">
              Carbon Footprint Comparison
            </h3>
            
            <div className="max-w-2xl mx-auto">
              <div className="flex items-end mb-2 h-8">
                <div className="w-1/4 text-right pr-4">
                  <BarChart className="inline-block h-5 w-5 text-primary" />
                </div>
                <div className="w-3/4 text-sm text-gray-500">
                  Relative carbon emissions (lower is better)
                </div>
              </div>
              
              {emissionData.map((item, index) => (
                <div key={item.material} className="flex items-center mb-6">
                  <div className="w-1/4 text-right pr-4 font-medium">
                    {item.material}
                  </div>
                  <div className="w-3/4 h-10 bg-gray-200 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${item.value}%` }}
                      viewport={{ once: true }}
                      transition={{ 
                        duration: 1.5,
                        delay: index * 0.2, 
                        ease: "easeOut" 
                      }}
                      className="h-full rounded-full flex items-center pl-3 text-white font-medium"
                      style={{ backgroundColor: item.color }}
                    >
                      {item.value}%
                    </motion.div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Quote Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <div className="relative p-10 md:p-16 bg-gradient-to-r from-primary-light/30 to-secondary-light/30 rounded-xl
              shadow-lg border border-white"
            >
              <div className="absolute text-8xl font-serif opacity-20 -top-6 left-6 text-primary">"</div>
              <blockquote className="relative text-xl md:text-3xl font-playfair text-secondary text-center">
                Sustainability isn't a trend. It's tradition.
                <p className="mt-6 text-base font-inter text-secondary/70">
                  — A philosophy we live by at Sustainable Futures
                </p>
              </blockquote>
              <div className="absolute text-8xl font-serif opacity-20 -bottom-16 right-6 text-primary rotate-180">"</div>
              
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary/30 to-primary-light/30 rounded-xl blur-xl z-[-1] opacity-70"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                }}
              />
            </div>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default Sustainability;