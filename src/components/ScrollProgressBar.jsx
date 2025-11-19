import React, { useState, useEffect } from "react";

const ScrollProgressBar = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollPx = document.documentElement.scrollTop;
      const winHeightPx =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      const scrolled = (scrollPx / winHeightPx) * 100;

      setScrollProgress(scrolled);
    };

    window.addEventListener("scroll", updateScrollProgress);
    updateScrollProgress(); // Initial call

    return () => window.removeEventListener("scroll", updateScrollProgress);
  }, []);

  return (
    <div className="fixed right-4 md:right-8 top-0 w-1.5 h-screen z-50 pointer-events-none">
      {/* Background Track */}
      <div className="absolute inset-0 bg-gray-800/30 rounded-full" />
      
      {/* Progress Fill */}
      <div
        className="absolute top-0 left-0 w-full bg-linear-to-b from-gray-500 to-gray-600 rounded-full transition-all duration-300 shadow-lg shadow-gray-900/50"
        style={{
          height: `${scrollProgress}%`,
        }}
      />
      
      {/* Optional: Glowing Top Cap */}
      <div
        className="absolute left-1/2 -translate-x-1/2 w-3 h-3 bg-gray-400 rounded-full blur-md opacity-80"
        style={{
          top: `${scrollProgress}%`,
          transform: `translate(-50%, -50%)`,
        }}
      />
    </div>
  );
};

export default ScrollProgressBar;