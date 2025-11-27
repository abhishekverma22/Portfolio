import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Download } from "lucide-react";

// SINGLE SOURCE OF TRUTH — Change only this when you update your resume!
const RESUME_FILE_ID = "1Jlc_O1eN0VKue9ZIsXTdG7Pu2sci1kBl";
const RESUME_VIEW_URL = `https://drive.google.com/file/d/${RESUME_FILE_ID}/view?usp=sharing`;
const RESUME_DOWNLOAD_URL = `https://drive.google.com/uc?export=download&id=${RESUME_FILE_ID}`;
const RESUME_FILENAME = "Abhishek_Verma_Resume.pdf";

const Navbar = ({ scrollToSection }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  const navItems = [
    { name: "Home", section: "home", type: "scroll" },
    { name: "About", section: "about", type: "scroll" },
    { name: "Projects", section: "projects", type: "scroll" },
    { name: "Contact", section: "contact", type: "scroll" },
    { name: "Resume", type: "resume" }, // Special type for dual action
  ];

  // Scrollspy logic (unchanged)
  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 3;

      navItems.forEach((item) => {
        if (item.type === "scroll") {
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

  // Resume dual-action handler
  const handleResumeClick = () => {
    // Open in new tab
    window.open(RESUME_VIEW_URL, "_blank");

    // Trigger download
    const link = document.createElement("a");
    link.href = RESUME_DOWNLOAD_URL;
    link.download = RESUME_FILENAME;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setIsOpen(false); // Close mobile menu
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
              {navItems.map((item) =>
                item.type === "scroll" ? (
                  <button
                    key={item.name}
                    onClick={() => handleNavClick(item.section)}
                    className={`relative text-xs sm:text-sm lg:text-base cursor-pointer font-medium text-gray-300 hover:text-white transition-all duration-300 px-1`}
                  >
                    {item.name}
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
                ) : (
                  <button
                    key={item.name}
                    onClick={handleResumeClick}
                    className="relative flex items-center gap-2 text-xs sm:text-sm lg:text-base font-medium text-gray-300 hover:text-white transition-all duration-300 px-1"
                  >
                    {item.name}
                    <Download size={16} className="opacity-70" />
                  </button>
                )
              )}
            </div>
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
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/70 backdrop-blur-sm z-40 lg:hidden"
            />

            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
              className="fixed inset-y-0 right-0 w-full max-w-sm bg-linear-to-b from-black via-gray-900 to-black border-l border-white/10 shadow-2xl z-50 lg:hidden flex flex-col"
            >
              <div className="flex-1 flex flex-col justify-center px-6 py-16 sm:px-8 space-y-6">
                {navItems.map((item, index) =>
                  item.type === "scroll" ? (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={() => handleNavClick(item.section)}
                      className="block w-full text-left text-2xl sm:text-3xl font-bold text-gray-300 hover:text-white transition-all duration-300 py-3 border-b border-white/10"
                    >
                      {item.name}
                    </motion.button>
                  ) : (
                    <motion.button
                      key={item.name}
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1 }}
                      onClick={handleResumeClick}
                      className="flex items-center gap-4 w-full text-left text-2xl sm:text-3xl font-bold text-gray-300 hover:text-white transition-all duration-300 py-3 border-b border-white/10"
                    >
                      {item.name}
                      <Download size={28} />
                    </motion.button>
                  )
                )}
              </div>

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