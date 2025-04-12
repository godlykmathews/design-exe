import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import ProductShowcase from './components/ProductShowcase';
import Features from './components/Features';
import CTA from './components/cta';
import Footer from './components/Footer';
import About from './components/about';
import Sustainability from './components/sustainability';

function App() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <div id="home">
        <Hero />
      </div>
      <div id="about">
        <About />
      </div>
      <div id="the-product">
        <ProductShowcase />
      </div>
      <div id="features">
        <Features />
      </div>
      <div id="sustainability">
        <Sustainability />
      </div>
      <div id="contact">
        <CTA />
      </div>
      <Footer />
    </div>
  );
}

export default App;