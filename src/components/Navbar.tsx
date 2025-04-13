import React, { useState, useEffect, useRef } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { Leaf, Menu, X } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const [isInHeroSection, setIsInHeroSection] = useState(true);
  const [disableAutoActive, setDisableAutoActive] = useState(false);
  const observerRefs = useRef<IntersectionObserver[]>([]);
  const disableTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Use scroll progress for opacity
  const { scrollYProgress } = useScroll();
  const navOpacity = useTransform(scrollYProgress, [0, 0.1], [0.9, 1]);
  const navBackground = useTransform(
    scrollYProgress,
    [0, 0.1],
    ["rgba(255,255,255,0.1)", "rgba(255,255,255,0.15)"]
  );

  // Navigation items - ensure these match the IDs in your component sections
  const navItems = [
    { id: "home", label: "Home" },
    { id: "about", label: "About Us" },
    { id: "the-product", label: "The Product" },
    { id: "features", label: "Features" },
    { id: "sustainability", label: "Sustainability" },
    { id: "contact", label: "Contact" },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      // Check if we're in the hero section (roughly)
      setIsInHeroSection(window.scrollY < window.innerHeight - 100);

      // Re-enable auto-tracking after user starts scrolling
      if (disableAutoActive) {
        setDisableAutoActive(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [disableAutoActive]);

  // Add this new effect to close menu on window resize
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [isMenuOpen]);

  // Set up intersection observers for each section
  useEffect(() => {
    // Clean up any existing observers
    observerRefs.current.forEach((observer) => observer.disconnect());
    observerRefs.current = [];

    // Create new observers for each section
    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) {
        const observer = new IntersectionObserver(
          ([entry]) => {
            // Skip updating active section if auto-tracking is disabled
            if (disableAutoActive) return;

            // When section is at least 50% visible
            if (entry.isIntersecting && entry.intersectionRatio >= 0.5) {
              setActiveSection(item.id);
            }
          },
          { threshold: 0.5 }
        );

        observer.observe(section);
        observerRefs.current.push(observer);
      }
    });

    return () => {
      observerRefs.current.forEach((observer) => observer.disconnect());
    };
  }, [disableAutoActive]);

  // Handle smooth scrolling for navigation links
  const handleNavClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    targetId: string
  ) => {
    e.preventDefault();

    // Close mobile menu if open
    setIsMenuOpen(false);

    // Clear any existing timeout
    if (disableTimeoutRef.current) {
      clearTimeout(disableTimeoutRef.current);
    }

    // Disable auto-tracking when a link is clicked
    setDisableAutoActive(true);

    // Set active section to clicked link
    setActiveSection(targetId);

    // Try to get the target element
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      // Scroll to the target element with smooth behavior
      targetElement.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });

      // Update URL without page reload
      window.history.pushState(null, "", `#${targetId}`);

      // Re-enable auto-tracking after scrolling finishes (approx 1s)
      disableTimeoutRef.current = setTimeout(() => {
        setDisableAutoActive(false);
      }, 1000);
    } else {
      console.warn(`Element with id "${targetId}" was not found`);

      // Fallback for home link
      if (targetId === "home") {
        window.scrollTo({ top: 0, behavior: "smooth" });
        window.history.pushState(null, "", `#${targetId}`);
      }
    }
  };

  // Dynamic text color based on section
  const getTextColorClass = (isActive: boolean) => {
    if (isActive) return "text-primary";

    return isInHeroSection
      ? "text-white hover:text-primary"
      : "text-gray-800 hover:text-primary";
  };

  return (
    <motion.nav
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      style={{
        opacity: navOpacity,
        backgroundColor: isScrolled ? navBackground : "transparent",
      }}
      className={`fixed top-0 left-0 right-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "backdrop-blur-md shadow-lg" : ""
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          className={`flex justify-between items-center h-16 ${
            isScrolled ? "rounded-b-2xl" : ""
          }`}
        >
          <div className="flex items-center">
            <Leaf className={`h-8 w-8 text-primary`} />
            <span
              className={`ml-2 text-xl font-cinzel ${
                isInHeroSection ? "text-white" : "text-gray-800"
              }`}
            >
              Sustainable Futures
            </span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => handleNavClick(e, item.id)}
                  className={`${getTextColorClass(
                    isActive
                  )} transition-colors duration-200 relative group`}
                >
                  {item.label}
                  <motion.span
                    className={`absolute -bottom-1 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      isActive ? "w-full" : "w-0"
                    }`}
                    whileHover={{ width: "100%" }}
                  />
                </a>
              );
            })}
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`${
                isInHeroSection ? "text-white" : "text-gray-800"
              } p-2 rounded-full hover:bg-white/10 transition-colors`}
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation Menu - Using AnimatePresence for proper animation */}
        <AnimatePresence>
          {isMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3 }}
              className="md:hidden absolute left-0 right-0 bg-black/80 backdrop-blur-md rounded-b-2xl overflow-hidden z-50 shadow-lg"
              style={{ top: "4rem" }}
            >
              <div className="px-4 py-3 space-y-2 max-h-[70vh] overflow-y-auto">
                {navItems.map((item) => {
                  const isActive = activeSection === item.id;
                  return (
                    <motion.a
                      key={item.id}
                      href={`#${item.id}`}
                      onClick={(e) => handleNavClick(e, item.id)}
                      className={`block py-2 px-4 ${
                        isActive ? "text-primary bg-white/10" : "text-white"
                      } hover:bg-primary/20 rounded-lg transition-colors`}
                      whileHover={{ x: 5 }}
                    >
                      {item.label}
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  );
};

export default Navbar;
