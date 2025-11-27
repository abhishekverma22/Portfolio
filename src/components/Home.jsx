import React, { useMemo } from "react";
import profileImage from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Home = () => {
  // Generate bubbles once, reduced count (20 → 12) for performance
  const bubbles = useMemo(() => {
    return [...Array(12)].map((_, i) => ({
      id: i,
      size: 40 + Math.random() * 70,
      duration: 12 + Math.random() * 18,
      delay: Math.random() * 10,
      left: Math.random() * 100,
    }));
  }, []);

  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-5 sm:px-8 lg:px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* Bubbles - now memoized and reduced */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {bubbles.map((bubble) => (
          <div
            key={bubble.id}
            className="absolute rounded-full"
            style={{
              width: `${bubble.size}px`,
              height: `${bubble.size}px`,
              left: `${bubble.left}%`,
              bottom: `-150px`,
              background: "rgba(180, 180, 180, 0.1)",
              border: "1px solid rgba(220, 220, 220, 0.15)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              animation: `float ${bubble.duration}s linear infinite`,
              animationDelay: `${bubble.delay}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* Mobile Layout */}
        <div className="block md:hidden text-center space-y-6 mt-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="mx-auto"
          >
            <div className="relative group inline-block">
              <div className="absolute -inset-2 bg-linear-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-xl opacity-60 group-hover:opacity-90 transition duration-700" />
              <div className="relative w-40 h-50 rounded-full overflow-hidden border-4 border-gray-800 shadow-xl">
                <img
                  src={profileImage}
                  alt="Abhishek Verma"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-gray-400 font-medium text-sm tracking-wider"
          >
            Hello, I'm
          </motion.p>

          <motion.h1
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35 }}
            className="text-3xl font-bold tracking-wide text-white"
          >
            Abhishek Verma
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45 }}
            className="text-base font-light text-gray-400 italic -mt-4"
          >
            Turning Ideas into Code
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55 }}
            className="text-gray-300 text-sm leading-relaxed max-w-xs mx-auto px-3"
          >
            Passionate full-stack developer building fast, modern, responsive
            web apps.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.65 }}
            className="flex items-center justify-center gap-3 pt-4"
          >
            <a
              href="#projects"
              className="px-4 py-2 bg-gray-800 text-white font-medium text-sm rounded-full border border-gray-700 shadow-md hover:scale-105 transition duration-300"
            >
              Projects
            </a>
            <a
              href="https://drive.google.com/file/d/1ScFMlA3JUqIDSqzKhZSOUNL7SJt9TuVO/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-gray-500 text-gray-300 font-medium text-sm rounded-full hover:bg-white/10 hover:text-white transition duration-300"
            >
              Resume
            </a>
          </motion.div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.9 }}
            className="space-y-8"
          >
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="text-gray-400 font-medium text-xl tracking-wide"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              className="text-6xl lg:text-7xl font-bold text-white leading-tight"
            >
              Abhishek Verma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
              className="text-3xl lg:text-4xl font-light text-gray-400 italic"
            >
              Turning Ideas into Code
            </motion.p>

            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.8 }}
              className="text-gray-300 text-lg lg:text-xl leading-relaxed max-w-2xl"
            >
              Passionate full-stack developer crafting beautiful, responsive,
              and high-performance web applications with React, Node.js, and
              modern tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
              className="flex flex-row gap-6 pt-8"
            >
              <a
                href="#projects"
                className="px-6 py-3 bg-linear-to-r from-gray-700 to-gray-800 text-white font-semibold text-lg rounded-full shadow-md hover:shadow-xl hover:scale-105 transition-all duration-300 border border-gray-600"
              >
                View Projects
              </a>
              <a
                href="https://drive.google.com/file/d/1ScFMlA3JUqIDSqzKhZSOUNL7SJt9TuVO/view?usp=sharing"
                target="_blank"
                className="px-6 py-3 border-2 border-gray-500 text-gray-300 font-semibold text-lg rounded-full hover:bg-white/10 hover:text-white hover:border-gray-400 transition-all duration-300"
              >
                Resume
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-8 bg-linear-to-r from-gray-600 to-black rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700" />
              <div className="relative w-80 h-96 rounded-full overflow-hidden border-8 lg:border-12 border-gray-800 shadow-3xl">
                <img
                  src={profileImage}
                  alt="Abhishek Verma"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  loading="lazy"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0% {
            transform: translateY(0) rotate(0deg);
            opacity: 0;
          }
          10% {
            opacity: 0.4;
          }
          90% {
            opacity: 0.2;
          }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </main>
  );
};

export default Home;
