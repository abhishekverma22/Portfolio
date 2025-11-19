import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", section: "home" },
    { name: "About", section: "about" },
    { name: "Projects", section: "projects" },
    { name: "Contact", section: "contact" },
  ];

  // Scrollspy effect: detect active section based on scroll position
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3; // adjust trigger point

      navItems.forEach((item) => {
        const section = document.getElementById(item.section);
        if (section) {
          const { offsetTop, offsetHeight } = section;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(item.section);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (section) => {
    scrollToSection(section);
    setIsOpen(false);
  };

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl border-b border-white/10"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
          {/* Logo */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => scrollToSection("home")}
            className="cursor-pointer select-none"
          >
            <div className="text-xl sm:text-2xl lg:text-3xl font-bold bg-linear-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent tracking-tighter">
              {"<AV/>"}
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-10">
            <div className="flex items-center gap-6 relative">
              {navItems.map((item) => (
                <button
                  key={item.section}
                  onClick={() => handleNavClick(item.section)}
                  className={`relative text-xs sm:text-sm lg:text-base cursor-pointer font-medium text-gray-300 hover:text-white transition-all duration-300 px-1`}
                >
                  {item.name}
                  {/* Active Bar */}
                  {activeSection === item.section && (
                    <motion.span
                      layoutId="nav-bar"
                      className="absolute left-0 bottom-0 w-full h-0.5 bg-yellow-400 rounded-full"
                      transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                      }}
                    />
                  )}
                </button>
              ))}
            </div>

            {/* Desktop Resume */}
            <motion.a
              href="/Abhishek_verma_resume.pdf"
              download="Abhishek_Verma_Resume.pdf"
              className="group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 bg-yellow-400/10 border border-yellow-400/30 rounded-full text-yellow-400 text-sm sm:text-base font-medium hover:bg-yellow-400 hover:text-black transition-all duration-300 shadow-lg"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Download
                size={16}
                className="group-hover:rotate-12 transition-transform"
              />
              Resume
            </motion.a>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden text-white p-2 sm:p-3 hover:bg-white/10 rounded-xl transition"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            {/* Panel */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-linear-to-b from-black via-gray-900 to-black border-l border-white/10 shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center px-6 py-16 sm:px-8 space-y-6 ">
                {navItems.map((item, index) => (
                  <motion.button
                    key={item.section}
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    onClick={() => handleNavClick(item.section)}
                    className={`block w-full text-left text-2xl sm:text-3xl font-bold  ${
                      activeSection === item.section
                        ? "text-yellow-400"
                        : "text-gray-300"
                    } hover:text-white transition-all duration-300 py-3 border-b border-white/10 last:border-0`}
                  >
                    {item.name}
                  </motion.button>
                ))}

                {/* Resume Button */}
                <a
                  href="/Abhishek_verma_resume.pdf"
                  download="Abhishek_Verma_Resume.pdf"
                  className="flex items-center justify-center gap-3 w-full px-8 py-4 bg-linear-to-r from-yellow-400 to-yellow-500 text-black font-bold text-lg rounded-2xl shadow-2xl hover:shadow-yellow-400/50 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer"
                  onClick={() => setIsOpen(false)}
                >
                  <Download size={20} />
                  Download Resume
                </a>
              </div>

              {/* Close Button */}
              <button
                onClick={() => setIsOpen(false)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-400 hover:text-white transition"
              >
                <X size={28} />
              </button>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
