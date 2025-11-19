import React from "react";
import profileImage from "../assets/profile.jpg";
import { motion } from "framer-motion";

const Home = () => {
  return (
    <main className="relative z-10 flex items-center justify-center min-h-screen px-5 sm:px-8 lg:px-6 py-16 md:py-24 lg:py-32 overflow-hidden">
      {/* RESPONSIVE BUBBLES - Smaller on Mobile */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              // Smaller bubbles on mobile, normal on larger screens
              width: `${
                window.innerWidth < 640
                  ? 25 + Math.random() * 50
                  : 40 + Math.random() * 80
              }px`,
              height: `${
                window.innerWidth < 640
                  ? 25 + Math.random() * 50
                  : 40 + Math.random() * 80
              }px`,
              left: `${Math.random() * 100}%`,
              bottom: `-150px`,
              background: "rgba(180, 180, 180, 0.1)",
              border: "1px solid rgba(220, 220, 220, 0.15)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.3)",
              animation: `float ${12 + Math.random() * 18}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="relative max-w-7xl mx-auto w-full">
        {/* MOBILE LAYOUT - Image on Top */}
        <div className="block md:hidden text-center space-y-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mx-auto"
          >
            <div className="relative group inline-block">
              <div className="absolute -inset-3 sm:-inset-4 bg-linear-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700" />
              <div className="relative w-38 h-48 sm:w-64 sm:h-64 rounded-full overflow-hidden border-4 sm:border-8 border-gray-800 shadow-2xl">
                <img
                  src={profileImage}
                  alt="Abhishek Verma"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </motion.div>

          <div className="space-y-5">
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-gray-400 font-medium text-sm sm:text-base tracking-wider"
            >
              Hello, I'm
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="text-4xl sm:text-5xl font-bold text-white leading-tight"
            >
              Abhishek Verma
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl font-light text-gray-400 italic"
            >
              Turning Ideas into Code
            </motion.p>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-md mx-auto px-4"
            >
              Passionate full-stack developer crafting beautiful, responsive,
              and high-performance web applications with React, Node.js, and
              modern tools.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.1 }}
              className="flex flex-col gap-4 pt-6"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-linear-to-r from-gray-700 to-gray-800 text-white font-bold rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600"
              >
                View My Projects
              </a>
              <a
                href="/ABHISHEK_VERMA.pdf"
                download="Abhishek_Verma_Resume.pdf"
                className="px-8 py-4 border-2 border-gray-500 text-gray-300 font-bold rounded-full hover:bg-white/10 hover:text-white hover:border-gray-400 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </div>
        </div>

        {/* DESKTOP & TABLET - Side by Side */}
        <div className="hidden md:grid md:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left: Text */}
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
              className="flex gap-6 pt-8"
            >
              <a
                href="#projects"
                className="px-8 py-4 bg-linear-to-r from-gray-700 to-gray-800 text-white font-bold text-lg rounded-full shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 border border-gray-600"
              >
                View My Projects
              </a>
              <a
                href="/ABHISHEK_VERMA.pdf"
                download="Abhishek_Verma_Resume.pdf"
                className="px-8 py-4 border-2 border-gray-500 text-gray-300 font-bold text-lg rounded-full hover:bg-white/10 hover:text-white hover:border-gray-400 transition-all duration-300"
              >
                Download Resume
              </a>
            </motion.div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.4 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative group">
              <div className="absolute -inset-8 bg-linear-to-r from-gray-600 to-black-600 rounded-full blur-3xl opacity-60 group-hover:opacity-90 transition duration-700" />
              <div className="relative w-80 h-70 lg:w-76 lg:h-96 rounded-full overflow-hidden border-8 lg:border-12 border-gray-800 shadow-3xl">
                <img
                  src={profileImage}
                  alt="Abhishek Verma"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Floating Animation */}
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
