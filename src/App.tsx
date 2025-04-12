import React, { useEffect, useState } from 'react';
import { Menu, X, Leaf, TreePine, Recycle, ChevronRight, Linkedin, Facebook } from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const features = [
    { icon: <Leaf className="w-16 h-16 text-primary" />, title: 'Eco-Friendly', description: 'All products made from sustainable materials' },
    { icon: <TreePine className="w-16 h-16 text-primary" />, title: 'Carbon Neutral', description: 'Zero carbon footprint in our operations' },
    { icon: <Recycle className="w-16 h-16 text-primary" />, title: 'Recyclable', description: '100% recyclable packaging and products' },
  ];

  const milestones = [
    { year: '2020', title: 'Foundation', description: 'Started with a vision for sustainable future' },
    { year: '2021', title: 'Growth', description: 'Expanded to 10 countries worldwide' },
    { year: '2022', title: 'Innovation', description: 'Launched revolutionary eco-products' },
    { year: '2023', title: 'Impact', description: 'Reached 1M+ customers globally' },
  ];

  return (
    <div className="min-h-screen bg-offwhite">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-md text-gray-800' : 'bg-transparent text-white'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Leaf className="h-8 w-8 text-primary" />
              <span className="ml-2 font-montserrat font-bold text-xl">Sustainable Futures</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center space-x-8">
              <a href="#features" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Features</a>
              <a href="#products" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Products</a>
              <a href="#impact" className={`nav-link ${isScrolled ? 'text-gray-800' : 'text-white'}`}>Impact</a>
              <button className="btn-primary">Get Started</button>
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-inherit">
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#features" className="block px-3 py-2 nav-link">Features</a>
              <a href="#products" className="block px-3 py-2 nav-link">Products</a>
              <a href="#impact" className="block px-3 py-2 nav-link">Impact</a>
              <button className="w-full btn-primary mt-4">Get Started</button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center" style={{
        backgroundImage: "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1511497584788-876760111969?ixlib=rb-1.2.1&auto=format&fit=crop&w=2378&q=80')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-7xl font-bold text-white mb-6 animate-fade-in">
              Join the Sustainability Revolution
            </h1>
            <p className="text-xl text-white mb-8 animate-slide-up">
              Together, we can create a greener tomorrow. Join us in our mission to make sustainable living accessible to everyone.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 animate-slide-up">
              <button className="btn-primary">Learn More</button>
              <div className="flex-1 max-w-md">
                <div className="relative">
                  <input
                    type="email"
                    placeholder="Enter your email"
                    className="w-full h-11 px-4 rounded-lg border-2 border-white bg-transparent text-white placeholder-white/70 focus:outline-none focus:border-accent"
                  />
                  <button className="absolute right-2 top-1/2 -translate-y-1/2">
                    <ChevronRight className="w-6 h-6 text-white" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


       {/* Product Launch Section */}
       <section id="product-launch" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Exclusive Launch</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="feature-card">
              <div className="flex space-x-4">
              <img
                src="https://us.frankgreen.com/cdn/shop/files/2205_CAMPAIGNS_CHROME_WEBSITE_HOW_IT_WORKS_670x850_STEP_2_V1.01_cade359b-e837-42a2-9324-fc6f4d6ccdd6.jpg?v=1737434989&"
                alt="Reusable Bottle"
                className="w-1/2 h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              <img
                src="https://us.frankgreen.com/cdn/shop/files/2205_CAMPAIGNS_CHROME_WEBSITE_HOW_IT_WORKS_670x850_STEP_3_V1.01_4b0adbe9-ffc0-42cc-98af-7199f99fba6c.jpg?v=1737434989&"
                alt="Reusable Bottle"
                className="w-1/2 h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              </div>
              <h3 className="text-xl font-bold mt-4">Reusable Bottle</h3>
              <p className="text-gray-600 mb-4">Durable, BPA-free, and perfect for everyday use.</p>
              <button className="btn-primary">See Details</button>
            </div>
            <div className="feature-card">
            <div className="flex space-x-4">
              <img
                src="https://zerowastedaniel.com/cdn/shop/files/1_71_1024x1024@2x.jpg?v=1736283222"
                alt="cloth"
                className="w-1/2 h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              <img
                src="https://zerowastedaniel.com/cdn/shop/files/2_3_720x.png?v=1738210407"
                alt="cloth"
                className="w-1/2 h-80 object-cover rounded-lg transition-transform duration-500 hover:scale-105"
              />
              </div>
              <h3 className="text-xl font-bold mt-4">Zero-Waste Clothing</h3>
              <p className="text-gray-600 mb-4">Stylish and made from 100% sustainable materials.</p>
              <button className="btn-primary">See Details</button>
            </div>
          </div>
        </div>
      </section>


      {/* Features & Benefits Section */}
      <section id="features-benefits" className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Features & Benefits</h2>
            <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center animate-fade-in">
              <img src="https://imgs.search.brave.com/ru7JijMcIp7AC8ALZmw9OSTTe2L8SwXc1keY8MF0v1g/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vcGhvdG9z/L2NhbnZhcy1jb3R0/b24tc2hvcHBpbmct/ZWNvLWZyaWVuZGx5/LWJhZy1hbmQtcGxh/c3RpYy1iYWctb3Zl/ci13aGl0ZS1waWN0/dXJlLWlkMTE2MTkw/OTkyMD9iPTEmaz0y/MCZtPTExNjE5MDk5/MjAmcz0xNzA2Njdh/Jnc9MCZoPUJtbmFr/OEdwTUEtWmFza3dS/YklHRnU1bUUxVFdh/MER1Z05mS3J0Rm1i/T0k9" alt="Plastic-Free" className="mx-auto mb-4 w-32 h-32 object-cover" />
              <h3 className="text-xl font-bold">Plastic-Free</h3>
              <p className="text-gray-600">Eliminating plastic waste with every product.</p>
            </div>
            <div className="text-center animate-fade-in">
              <img src="https://t3.ftcdn.net/jpg/02/98/44/42/240_F_298444208_JtozJAlEqXklwHJsZqnao54MvE3gZBUj.jpg" alt="Zero Waste" className="mx-auto mb-4 w-32 h-32 object-cover" />
              <h3 className="text-xl font-bold">Zero Waste</h3>
              <p className="text-gray-600">Designed for a sustainable future.</p>
            </div>
            <div className="text-center animate-fade-in">
              <img src="./bottllee.png" alt="Stylish & Durable" className="mx-auto mb-4 w-32 h-27 object-cover" />
              <h3 className="text-xl font-bold">Stylish & Durable</h3>
              <p className="text-gray-600">Combining fashion with functionality.</p>
            </div>
            </div>
        </div>
      </section>


      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sustainable Product Sale Section */}
      <section id="products" className="py-20 bg-offwhite">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Sustainable Products</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="feature-card">
              <img
                src="https://imgs.search.brave.com/t3hZDZvrThyuNAjvrogNxEOzUMJvlEki0jJY0iPRto8/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NzF2cmUzcXFiTUwu/anBn"
                alt="Product 1"
                className="w-48 h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Eco-Friendly Bag</h3>
              <p className="text-gray-600 mb-4">Made from 100% recycled materials.</p>
              <button className="btn-primary">Buy Now</button>
            </div>
            <div className="feature-card">
              <img
                src="./bottllee.png"
                alt="Product 2"
                className="w-48 h-42 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Reusable Water Bottle</h3>
              <p className="text-gray-600 mb-4">Durable and BPA-free.</p>
              <button className="btn-primary">Buy Now</button>
            </div>
            <div className="feature-card">
              <img
                src="https://cdn.shopify.com/s/files/1/0038/1111/5123/files/Sustainable_wardrobe_sustainable_fashion_organic_clothing_organic_fashion_organic_wardrobe_8_055c83c3-d20e-43c7-be59-d030bca85cd6_480x480.jpg?v=1612286048"
                alt="Product 3"
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h3 className="text-xl font-bold mb-2">Organic Cotton T-Shirt</h3>
              <p className="text-gray-600 mb-4">Soft, breathable, and sustainable.</p>
              <button className="btn-primary">Buy Now</button>
            </div>
          </div>
        </div>
      </section>

     
      

      {/* Brand Values Section */}
      <section id="brand-values" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Brand Values</h2>
          <div className="space-y-8">
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                2020
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Foundation</h3>
                <p className="text-gray-600">Started with a vision for a sustainable future.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                5,000+
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Plastic Bottles Saved</h3>
                <p className="text-gray-600">Through our innovative products and initiatives.</p>
              </div>
            </div>
            <div className="flex flex-col md:flex-row items-center gap-4">
              <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                2023
              </div>
              <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                <h3 className="text-xl font-bold mb-2">Global Impact</h3>
                <p className="text-gray-600">Reaching millions with our sustainable mission.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Timeline */}
      <section id="impact" className="py-20 bg-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-center mb-16">Our Impact Journey</h2>
          <div className="space-y-8">
            {milestones.map((milestone, index) => (
              <div key={index} className="flex flex-col md:flex-row items-center gap-4">
                <div className="w-24 h-24 rounded-full bg-primary text-white flex items-center justify-center font-bold text-xl">
                  {milestone.year}
                </div>
                <div className="flex-1 bg-white p-6 rounded-xl shadow-md">
                  <h3 className="text-xl font-bold mb-2">{milestone.title}</h3>
                  <p className="text-gray-600">{milestone.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-white/80">Creating a sustainable future through innovation and commitment to environmental responsibility.</p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#features" className="hover:text-accent">Features</a></li>
                <li><a href="#products" className="hover:text-accent">Products</a></li>
                <li><a href="#impact" className="hover:text-accent">Impact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <ul className="space-y-2">
                <li>Email: info@sustainablefutures.com</li>
                <li>Phone: (555) 123-4567</li>
                <li>Address: 123 Eco Street, Green City</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="hover:text-accent"><Facebook className="w-8 h-8" /></a>
                <a href="#" className="hover:text-accent"><Linkedin className="w-8 h-8" /></a>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-white/20 text-center">
            <p>&copy; {new Date().getFullYear()} Sustainable Futures. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;