import React, { useState, useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { 
  Play, 
  Pause, 
  Leaf, 
  Droplets, 
  Recycle, 
  Award, 
  CheckCircle, 
  ChevronRight,
  Sparkles
} from 'lucide-react';

const ProductShowcase = () => {
  const [ref, inView] = useInView({
    triggerOnce: false,
    threshold: 0.2,
  });
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [showDetails, setShowDetails] = useState(false);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  
  const { scrollYProgress } = useScroll();
  const opacity = useTransform(scrollYProgress, [0, 0.2], [0.3, 1]);
  const scale = useTransform(scrollYProgress, [0, 0.2], [0.8, 1]);
  
  // Product images with titles
  const products = [
    {
      src: "https://imgs.search.brave.com/wgfqt8tMRYzgpZ-ugD4zO72qQtmrjSBnJcPwGzqSkxo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/d29vZGdlZWtzdG9y/ZS5jb20vY2RuL3No/b3AvZmlsZXMvZ2xh/c3N3aW5lXzIwMDB4/LmpwZz92PTE3NDIz/Nzg0Mzk",
      alt: "Wooden Wine Glass",
      title: "Vineyard Elegance",
      description: "Artisanal wine glass crafted from teak wood",
      features: [
        { icon: Leaf, text: "100% Sustainable Teak" },
        { icon: Droplets, text: "Natural Oils Finish" },
        { icon: Award, text: "Artisan Handcrafted" }
      ]
    },
    {
      src: "https://www.woodgeekstore.com/cdn/shop/files/glassesshot_16_2a_800x.jpg?v=1742376533",
      alt: "Wooden Whiskey Tumbler",
      title: "Highland Tumbler",
      description: "Perfectly balanced mango wood whiskey glass",
      features: [
        { icon: Recycle, text: "Reclaimed Mango Wood" },
        { icon: Droplets, text: "Food-Safe Coating" },
        { icon: CheckCircle, text: "Thermal Resistant" }
      ]
    },
    {
      src: "https://www.woodgeekstore.com/cdn/shop/files/glassesnewallsetwhiteash2_2000x.jpg?v=1712558298",
      alt: "Wooden Cocktail Set",
      title: "Cocktail Collection",
      description: "Complete set made from reclaimed white ash",
      features: [
        { icon: Leaf, text: "White Ash from FSC Forests" },
        { icon: Droplets, text: "Waterproof Treatment" },
        { icon: Award, text: "Award-Winning Design" }
      ]
    }
  ];
  
  // Auto-rotate products
  useEffect(() => {
    if (inView && isPlaying && !isPaused) {
      timerRef.current = setTimeout(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % products.length);
      }, 5000); // Change product every 5 seconds
    }
    
    return () => {
      if (timerRef.current) {
        clearTimeout(timerRef.current);
      }
    };
  }, [activeIndex, inView, isPlaying, isPaused, products.length]);

  // Handle pause/play functionality
  const togglePlayback = () => {
    setIsPlaying(!isPlaying);
  };

  // Toggle product details
  const toggleDetails = () => {
    setShowDetails(!showDetails);
  };

  // Product highlights
  const highlights = [
    { 
      title: "Sustainable Excellence", 
      description: "Every glass crafted from FSC-certified wood, harvested with respect for nature.",
      icon: Leaf,
      delay: 0.3
    },
    { 
      title: "Artisanal Craftsmanship", 
      description: "Each piece hand-finished by master woodworkers with decades of experience.",
      icon: Sparkles,
      delay: 0.5
    },
    { 
      title: "Ecological Innovation", 
      description: "Water-resistant natural oils ensure durability without synthetic chemicals.",
      icon: Droplets,
      delay: 0.7
    }
  ];

  return (
    <section className="relative py-24 overflow-hidden" id="products">
      {/* Animated wood grain texture background */}
      <motion.div 
        className="absolute inset-0 bg-repeat opacity-10 z-0"
        style={{ 
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='200' height='200' viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 0c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20v20c-40 0-40 20-80 20s-40-20-80-20-40 20-80 20-40-20-80-20zm0 40c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20v20c-40 0-40 20-80 20s-40-20-80-20-40 20-80 20-40-20-80-20zm0 40c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20v20c-40 0-40 20-80 20s-40-20-80-20-40 20-80 20-40-20-80-20zm0 40c40 0 40 20 80 20s40-20 80-20 40 20 80 20 40-20 80-20v20c-40 0-40 20-80 20s-40-20-80-20-40 20-80 20-40-20-80-20z' fill='%234E342E' fill-opacity='0.3' fill-rule='evenodd'/%3E%3C/svg%3E")`,
          backgroundSize: '400px 400px'
        }}
        animate={{ 
          y: [0, -400],
        }}
        transition={{ 
          repeat: Infinity,
          repeatType: "loop",
          duration: 60,
          ease: "linear"
        }}
      />
      
      {/* Enhanced gradient background */}
      <motion.div 
        className="absolute inset-0 z-0"
        style={{
          background: "linear-gradient(135deg, #DAD2BC 0%, #A99F8A 50%, #8A7968 100%)",
        }}
        animate={{
          backgroundPosition: ['0% 0%', '100% 100%'],
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }}
      />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          style={{ opacity, scale }}
          className="text-center"
        >
          {/* Section heading */}
          <motion.div
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <div className="inline-block relative">
              <motion.div 
                className="absolute -inset-1 rounded-lg bg-gradient-to-r from-primary/30 to-secondary/30 blur-md z-0"
                animate={{ 
                  opacity: [0.5, 0.8, 0.5],
                  scale: [1, 1.05, 1], 
                }}
                transition={{ 
                  repeat: Infinity,
                  duration: 3,
                  ease: "easeInOut"
                }}
              />
              <span className="relative z-10 text-sm uppercase tracking-wider font-medium text-primary bg-white/80 px-4 py-1 rounded-full">
                The Collection
              </span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-playfair text-secondary mt-6 mb-3 relative">
              <span className="relative inline-block">
                Nature Reimagined in Wood
                <motion.div 
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-primary/40 rounded-full"
                  initial={{ width: "0%" }}
                  whileInView={{ width: "100%" }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, delay: 0.3 }}
                />
              </span>
            </h2>
            
            <p className="text-lg text-gray-600 max-w-2xl mx-auto mt-4">
              Where sustainable luxury meets functional art. Each piece tells a story of craftsmanship and ecological mindfulness.
            </p>
          </motion.div>
          
          {/* Product showcase */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, type: "spring", stiffness: 50 }}
            className="relative max-w-6xl mx-auto mb-24"
          >
            {/* 3D effect layers */}
            <div className="absolute inset-0 rounded-3xl bg-secondary/5 -rotate-1 transform scale-105 shadow-lg z-0"></div>
            <div className="absolute inset-0 rounded-3xl bg-primary/5 rotate-1 transform scale-105 shadow-lg z-0"></div>
            
            {/* Glow effect */}
            <motion.div 
              className="absolute -inset-4 bg-gradient-to-tr from-primary/20 via-transparent to-secondary/20 rounded-[2rem] blur-xl z-0"
              animate={{ 
                opacity: [0.4, 0.6, 0.4],
                scale: [0.98, 1.02, 0.98], 
              }}
              transition={{ 
                repeat: Infinity,
                duration: 5,
                ease: "easeInOut"
              }}
            />
            
            {/* Main display area */}
            <motion.div 
              className="relative bg-white/20 backdrop-blur-md rounded-3xl p-6 md:p-10 shadow-2xl border border-white/30 z-10"
              initial={{ scale: 0.95, opacity: 0.8 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.4, type: "spring" }}
              onMouseEnter={() => setIsPaused(true)}
              onMouseLeave={() => setIsPaused(false)}
            >
              {/* Header with controls */}
              <div className="flex flex-wrap justify-between items-center mb-8">
                <motion.div 
                  className="text-xl md:text-2xl font-cinzel text-secondary flex items-center"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                >
                  <span>Artisanal Wooden Glassware</span>
                  <motion.button
                    onClick={togglePlayback}
                    className="ml-3 p-2 rounded-full bg-white/20 backdrop-blur-sm hover:bg-primary/20 transition-colors duration-300"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    {isPlaying ? (
                      <Pause size={16} className="text-secondary" />
                    ) : (
                      <Play size={16} className="text-secondary" />
                    )}
                  </motion.button>
                </motion.div>
                
                {/* Sustainability badge */}
                <motion.div
                  initial={{ x: 20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="relative group mt-2 md:mt-0"
                >
                  <div className="bg-primary/10 border border-primary/30 text-primary px-3 py-1.5 rounded-full flex items-center font-medium text-sm cursor-help">
                    <Recycle size={16} className="mr-1.5" />
                    <span>100% Sustainable</span>
                  </div>
                  
                  {/* Tooltip */}
                  <div className="absolute right-0 top-full mt-2 w-64 p-4 bg-white rounded-xl shadow-xl border border-primary/20 text-left z-50 origin-top-right hidden group-hover:block">
                    <h4 className="font-medium text-secondary mb-2">Our Sustainability Commitment</h4>
                    <p className="text-sm text-gray-600">Ethically sourced wood from FSC-certified forests. Zero waste production and carbon-neutral shipping.</p>
                  </div>
                </motion.div>
              </div>
              
              {/* Progress indicators */}
              <div className="flex justify-center gap-2 mb-6">
                {products.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`h-1 rounded-full ${
                      activeIndex === index ? 'bg-primary' : 'bg-white/30'
                    }`}
                    initial={{ width: activeIndex === index ? '12px' : '20px' }}
                    animate={{ 
                      width: activeIndex === index ? '36px' : '12px',
                      backgroundColor: activeIndex === index 
                        ? ['rgba(46, 125, 50, 1)', 'rgba(46, 125, 50, 0.7)', 'rgba(46, 125, 50, 1)'] 
                        : 'rgba(255, 255, 255, 0.3)'
                    }}
                    transition={{ 
                      duration: activeIndex === index ? 5 : 0.3,
                      repeat: activeIndex === index && isPlaying && !isPaused ? Infinity : 0,
                      ease: "linear"
                    }}
                    onClick={() => setActiveIndex(index)}
                  />
                ))}
              </div>
              
              {/* Pause indicator */}
              <AnimatePresence>
                {isPaused && (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.8 }}
                    transition={{ duration: 0.3 }}
                    className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 
                      bg-black/50 text-white p-4 rounded-full z-30 backdrop-blur-md"
                  >
                    <Pause size={28} />
                  </motion.div>
                )}
              </AnimatePresence>
              
              {/* Product display area */}
              <div className="relative mx-auto mb-8">
                {products.map((product, index) => (
                  <AnimatePresence key={index}>
                    {activeIndex === index && (
                      <motion.div
                        className="flex flex-col md:flex-row items-center gap-8"
                        initial={{ opacity: 0, rotateY: 45, scale: 0.8 }}
                        animate={{ opacity: 1, rotateY: 0, scale: 1 }}
                        exit={{ opacity: 0, rotateY: -45, scale: 0.8 }}
                        transition={{ duration: 0.8, ease: "easeInOut" }}
                      >
                        {/* Product image */}
                        <motion.div 
                          className="w-full md:w-1/2 relative"
                          whileHover={{ scale: 1.05, rotateY: 15 }}
                          transition={{ duration: 1.2, ease: "easeOut" }}
                        >
                          <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
                            <motion.img
                              src={product.src}
                              alt={product.alt}
                              className="w-full h-full object-cover rounded-2xl"
                              style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
                              animate={isPlaying && !isPaused ? { 
                                rotateY: [0, 10, 0, -10, 0],
                              } : {}}
                              whileHover={{ 
                                rotateY: [0, 10, 0, -10, 0],
                              }}
                              transition={{ 
                                duration: 5, 
                                ease: "easeInOut",
                                repeat: Infinity,
                                repeatType: "mirror"
                              }}
                            />
                            
                            {/* Lighting effect */}
                            <motion.div
                              className="absolute inset-0 bg-gradient-to-tr from-yellow-100/0 via-white/40 to-transparent"
                              initial={{ opacity: 0 }}
                              animate={isPlaying && !isPaused ? { 
                                opacity: [0, 0.5, 0],
                                left: ["0%", "100%"],
                                top: ["0%", "100%"]
                              } : {}}
                              whileHover={{ 
                                opacity: [0, 0.5, 0],
                                left: ["0%", "100%"],
                                top: ["0%", "100%"]
                              }}
                              transition={{ duration: 2, ease: "easeInOut", repeat: Infinity }}
                            />
                            
                            {/* Shadow */}
                            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/20 to-transparent rounded-b-2xl"></div>
                            
                            {/* Product title overlay */}
                            <motion.div 
                              className="absolute bottom-4 left-4 right-4 text-left p-4 bg-black/50 backdrop-blur-sm rounded-xl text-white"
                              initial={{ opacity: 0, y: 20 }}
                              animate={{ opacity: 1, y: 0 }}
                              transition={{ delay: 0.6, duration: 0.5 }}
                            >
                              <h3 className="text-xl md:text-2xl font-cinzel">{product.title}</h3>
                              <p className="text-sm text-white/80">{product.description}</p>
                            </motion.div>
                          </div>
                        </motion.div>
                        
                        {/* Product features */}
                        <motion.div 
                          className="w-full md:w-1/2 flex flex-col space-y-4"
                          initial={{ opacity: 0, x: 30 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.4, duration: 0.6 }}
                        >
                          <h3 className="text-xl text-secondary font-cinzel text-left mb-2">Key Features</h3>
                          
                          {/* Features list */}
                          <div className="bg-white/30 backdrop-blur-md rounded-xl border border-white/40 p-4">
                            {product.features.map((feature, i) => (
                              <motion.div 
                                key={i}
                                className="flex items-center gap-3 mb-3 last:mb-0"
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.6 + (i * 0.15) }}
                                whileHover={{ x: 5 }}
                              >
                                <div className="bg-primary/20 p-2 rounded-full">
                                  <feature.icon size={18} className="text-primary" />
                                </div>
                                <span className="text-secondary text-left">{feature.text}</span>
                              </motion.div>
                            ))}
                          </div>
                          
                          {/* CTA button */}
                          <motion.button
                            className="relative mt-4 self-start overflow-hidden group bg-gradient-to-r from-primary to-primary-dark text-white py-3 px-6 rounded-full text-sm font-medium"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 1.2 }}
                            onClick={toggleDetails}
                          >
                            <span className="relative z-10 flex items-center">
                              Experience the Craft 
                              <ChevronRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                            
                            {/* Button glow effect */}
                            <motion.div 
                              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/20 to-transparent"
                              initial={{ left: '-100%', top: '-100%' }}
                              animate={{ left: '100%', top: '100%' }}
                              transition={{
                                repeat: Infinity,
                                duration: 1.5,
                                ease: "easeIn",
                                repeatDelay: 0.5
                              }}
                            />
                          </motion.button>
                        </motion.div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                ))}
              </div>
              
              {/* Product thumbnails */}
              <div className="flex justify-center gap-4">
                {products.map((product, index) => (
                  <motion.button
                    key={index}
                    className={`w-16 h-16 rounded-lg overflow-hidden border-2 transition-all duration-300 ${
                      activeIndex === index ? 'border-primary scale-110 shadow-lg' : 'border-white/50 opacity-70'
                    }`}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveIndex(index)}
                  >
                    <div className="relative w-full h-full">
                      <img 
                        src={product.src} 
                        alt={`Thumbnail ${index + 1}`} 
                        className="w-full h-full object-cover"
                      />
                      {activeIndex === index && isPlaying && !isPaused && (
                        <motion.div 
                          className="absolute inset-0 bg-primary/20"
                          initial={{ width: '0%' }}
                          animate={{ width: '100%' }}
                          transition={{ duration: 5, ease: "linear" }}
                        />
                      )}
                    </div>
                  </motion.button>
                ))}
              </div>
            </motion.div>
          </motion.div>
          
          {/* Product highlights cards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16"
          >
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                className="group relative overflow-hidden rounded-xl bg-white/10 backdrop-blur-md border border-white/20 p-6 transition-all duration-500"
                whileHover={{ 
                  y: -8,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.1)",
                  backgroundColor: "rgba(255,255,255,0.2)"
                }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: highlight.delay, duration: 0.6 }}
              >
                {/* Icon */}
                <div className="relative mb-4 inline-block">
                  <motion.div 
                    className="absolute inset-0 rounded-full bg-primary/20 blur-md"
                    animate={{ scale: [1, 1.3, 1] }}
                    transition={{ duration: 3, repeat: Infinity }}
                  />
                  <motion.div 
                    className="relative h-12 w-12 rounded-full bg-gradient-to-r from-primary to-primary-dark flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <highlight.icon size={22} className="text-white" />
                  </motion.div>
                </div>
                
                {/* Content */}
                <h3 className="text-lg font-semibold text-secondary mb-2">
                  {highlight.title}
                </h3>
                <p className="text-gray-600 group-hover:text-gray-800 transition-colors">
                  {highlight.description}
                </p>
                
                {/* Corner decoration */}
                <div className="absolute top-0 right-0 h-16 w-16 overflow-hidden">
                  <div className="absolute top-0 right-0 transform rotate-45 bg-gradient-to-r from-primary/30 to-primary-dark/30 w-24 h-1.5 origin-bottom-left" />
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* CTA section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="text-center"
          >
            <motion.p
              className="text-xl text-secondary max-w-2xl mx-auto font-inter bg-white/20 backdrop-blur-sm px-6 py-4 rounded-xl border border-white/20 shadow-lg mb-8"
            >
              Each piece is a unique work of functional art, carrying the spirit of the tree from which it came.
            </motion.p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative inline-block"
            >
              <motion.div 
                className="absolute -inset-1 bg-gradient-to-r from-primary/50 to-secondary/50 rounded-full blur-md"
                animate={{ opacity: [0.5, 0.8, 0.5] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <a 
                href="#contact" 
                className="relative bg-gradient-to-r from-primary to-primary-dark text-white font-medium py-3 px-8 rounded-full inline-flex items-center"
              >
                <span>Pre Book Now</span>
                <ChevronRight size={18} className="ml-2" />
              </a>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default ProductShowcase;