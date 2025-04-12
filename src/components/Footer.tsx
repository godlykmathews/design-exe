import React from 'react';
import { motion } from 'framer-motion';
import { Leaf, Instagram, Youtube, Linkedin } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  const socialLinks = [
    { icon: Instagram, href: 'https://instagram.com', label: 'Instagram' },
    { icon: Youtube, href: 'https://youtube.com', label: 'YouTube' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
  ];

  return (
    <footer className="relative mt-20">
      {/* Blurred background with dark overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1611269154421-4e27233ac5c7?auto=format&fit=crop&q=80)',
          filter: 'blur(8px)',
        }}
      />
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm z-0" />
      
      {/* Content container */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Logo and company info */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-start"
          >
            <div className="flex items-center">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="ml-2 text-lg font-cinzel text-white">Sustainable Futures</span>
            </div>
            <p className="mt-4 text-sm text-gray-300">
              Eco-friendly wooden glassware<br />
              Made with love for the planet
            </p>
          </motion.div>
          
          {/* Links section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col items-center"
          >
            <h3 className="text-white font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2 text-center">
              {['Home', 'About Us', 'Sustainability', 'Contact'].map((item) => (
                <li key={item}>
                  <a 
                    href={`#${item.toLowerCase().replace(' ', '-')}`}
                    className="text-gray-300 hover:text-primary transition-colors duration-300"
                  >
                    {item}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex flex-col items-center md:items-end"
          >
            <h3 className="text-white font-semibold mb-4">Connect With Us</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-white/10 hover:bg-primary/80 transition-all duration-300
                    border border-white/20 group"
                  whileHover={{ 
                    scale: 1.1,
                    rotate: [0, -10, 10, -10, 0],
                    transition: { duration: 0.5 }
                  }}
                >
                  <social.icon className="h-5 w-5 text-white" />
                  <span className="sr-only">{social.label}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Copyright bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          viewport={{ once: true }}
          className="mt-12 pt-6 border-t border-white/10 text-center"
        >
          <p className="text-sm text-gray-400">
            © {currentYear} Sustainable Futures. All rights reserved.
          </p>
          <p className="text-xs text-gray-500 mt-1">
            Crafted with care for the environment
          </p>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
