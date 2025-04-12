import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

const Hero = () => {
  // Track scroll for parallax
  const { scrollYProgress } = useScroll();
  const backgroundY = useTransform(scrollYProgress, [0, 1], ['0%', '20%']);
  
  // Letter animation for title
  const letterAnimation = {
    hidden: { opacity: 0, y: 50 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
  };

  const title = "Not Just Glassware. It's Wood With Soul.";
  
  // Create leaves for animation
  const leaves = Array.from({ length: 15 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * -100,
    size: Math.random() * 25 + 15,
    rotation: Math.random() * 360,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 5,
  }));

  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      {/* Parallax forest background */}
      <motion.div
        style={{ y: backgroundY }}
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        initial={{ scale: 1.1 }}
        animate={{ scale: 1 }}
        transition={{ duration: 2 }}
      >
        <div
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{
            backgroundImage: 'url(https://images.unsplash.com/photo-1542273917363-3b1817f69a2d?auto=format&fit=crop&q=80)',
            filter: 'blur(4px)',
          }}
        />
      </motion.div>
      
      {/* Dark overlay with gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/30 to-black/50" />
      
      {/* Animated falling leaves */}
      {leaves.map((leaf) => (
        <motion.div
          key={leaf.id}
          className="absolute pointer-events-none z-10"
          style={{
            left: `${leaf.x}%`,
            top: `-50px`,
            width: `${leaf.size}px`,
            height: `${leaf.size}px`,
          }}
          initial={{ 
            y: leaf.y, 
            x: leaf.x, 
            rotate: 0,
            opacity: 0 
          }}
          animate={{ 
            y: ['0vh', '100vh'],
            x: [
              `${leaf.x}%`, 
              `${leaf.x - 10 + Math.random() * 20}%`, 
              `${leaf.x - 15 + Math.random() * 30}%`, 
              `${leaf.x - 5 + Math.random() * 10}%`
            ],
            rotate: [0, 360, 720, 1080],
            opacity: [0, 0.8, 0.8, 0]
          }}
          transition={{ 
            duration: leaf.duration,
            delay: leaf.delay,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 24 24" fill="none" className="w-full h-full opacity-70">
            <path 
              d="M15 5c1 1 2 2 2 4s0 3-1 4c-1 1-2 2-4 2-3 0-5-2-5-5 0-2 1-4 3-5-1 1-1 2-1 4 0 3 2 5 5 5 2 0 4-1 5-3-1 2-3 3-5 3-4 0-6-3-6-6 0-4 3-7 7-7 3 0 5 2 5 5z"
              fill="#A0C8B0"
            />
          </svg>
        </motion.div>
      ))}
      
      {/* Removed duplicate navigation bar */}
      
      <div className="relative z-10 text-center px-4 max-w-5xl">
        {/* Title with letter animation */}
        <div className="overflow-hidden">
          <h1 className="text-4xl md:text-6xl font-playfair text-white mb-6 drop-shadow-lg">
            {title.split('').map((char, i) => (
              <motion.span
                key={i}
                custom={i}
                variants={letterAnimation}
                initial="hidden"
                animate="visible"
                className="inline-block"
              >
                {char}
              </motion.span>
            ))}
          </h1>
        </div>
        
        {/* Subttext */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5 }}
          className="text-xl text-white/90 mb-10 font-inter max-w-2xl mx-auto"
        >
          Handcrafted from ancient wood. Designed for the conscious modern.
        </motion.p>

        {/* Enhanced CTA button */}
        <div className="relative inline-block group">
          {/* Glow effect */}
          <div className="absolute -inset-1 bg-primary/30 rounded-full blur-md group-hover:blur-xl transition-all duration-1000"></div>
          
          {/* Button with ripple effect */}
          <motion.button
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative px-8 py-4 bg-primary/80 hover:bg-primary text-white rounded-full
              backdrop-blur-sm border border-white/20 shadow-lg overflow-hidden
              transition-all duration-300 transform hover:shadow-xl"
            onClick={(event) => {
              // Fix ripple effect on click with proper event handling
              const button = event.currentTarget;
              const ripple = document.createElement('span');
              const rect = button.getBoundingClientRect();
              const size = Math.max(rect.width, rect.height);
              const x = event.clientX - rect.left - size / 2;
              const y = event.clientY - rect.top - size / 2;
              
              ripple.style.width = ripple.style.height = `${size}px`;
              ripple.style.left = `${x}px`;
              ripple.style.top = `${y}px`;
              ripple.classList.add('ripple');
              
              const existingRipple = button.querySelector('.ripple');
              if (existingRipple) {
                existingRipple.remove();
              }
              
              button.appendChild(ripple);
              
              setTimeout(() => {
                ripple.remove();
              }, 600);
              
              // Scroll to products section
              document.getElementById('products')?.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
              });
            }}
          >
            <span className="relative z-10">Explore Wooden Glasses</span>
            
            {/* Glass reflection animation */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-tr from-white/0 via-white/40 to-transparent"
              initial={{ left: '-100%', top: '-100%' }}
              animate={{ left: '100%', top: '100%' }}
              transition={{
                repeat: Infinity,
                duration: 3,
                ease: "easeInOut",
                repeatDelay: 1
              }}
            />
          </motion.button>
        </div>

        {/* Down arrow indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer"
          onClick={() => {
            document.getElementById('the-product')?.scrollIntoView({
              behavior: 'smooth',
              block: 'start'
            });
          }}
        >
          <ChevronDown className="w-8 h-8 text-white animate-bounce" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;