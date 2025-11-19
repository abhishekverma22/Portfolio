import React from "react";
import { motion } from "framer-motion";
import {
  Code2,
  Globe,
  Database,
  GitBranch,
  Terminal,
  Palette,
  Server,
  Layers,
} from "lucide-react";

const About = () => {
  const skills = [
    { name: "React.js", icon: <Code2 className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "JavaScript", icon: <Terminal className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "Node.js", icon: <Server className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "Express.js", icon: <Layers className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "MongoDB", icon: <Database className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "Tailwind CSS", icon: <Palette className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "HTML & CSS", icon: <Globe className="w-7 h-7 sm:w-8 sm:h-8" /> },
    { name: "Git & GitHub", icon: <GitBranch className="w-7 h-7 sm:w-8 sm:h-8" /> },
  ];

  const education = [
    {
      degree: "Software Development",
      school: "Masai School, Bengaluru",
      year: "Dec 2024 – Jan 2026 (Ongoing)",
    },
    {
      degree: "Bachelor of Computer Applications (BCA)",
      school: "Marwari College, Ranchi",
      year: "2021 – 2024",
    },
    {
      degree: "Intermediate (12th) - Science",
      school: "Marwari College, Ranchi",
      year: "2019 – 2021",
    },
    {
      degree: "Matriculation (10th)",
      school: "Radha Govind Sr. Sec. Public School, Ramgarh",
      year: "2018",
    },
  ];

  return (
    <section id="about" className="relative z-10 min-h-screen py-16 md:py-24 lg:py-32 px-5 sm:px-8 lg:px-6 overflow-hidden bg-[#010011]">
      {/* Floating Bubbles */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        {[...Array(16)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float"
            style={{
              width: `${35 + Math.random() * 75}px`,
              height: `${35 + Math.random() * 75}px`,
              left: `${Math.random() * 100}%`,
              bottom: `-120px`,
              background: "rgba(180, 180, 180, 0.18)",
              border: "1px solid rgba(200, 200, 200, 0.15)",
              boxShadow: "0 10px 30px rgba(0, 0, 0, 0.4)",
              animation: `float ${14 + Math.random() * 16}s linear infinite`,
              animationDelay: `${Math.random() * 10}s`,
            }}
          />
        ))}
      </div>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] sm:w-[600px] sm:h-[600px] bg-gray-800/10 blur-3xl rounded-full -z-10" />

      <div className="relative max-w-6xl mx-auto">
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-4">
            About Me
          </h2>
          <p className="text-gray-400 text-sm sm:text-base md:text-lg lg:text-xl max-w-3xl mx-auto px-4 leading-relaxed">
            Ambitious full-stack developer skilled in MERN stack and modern web technologies.
            Passionate about building scalable, beautiful, and user-focused applications with clean code.
          </p>
        </motion.div>

        {/* Main Grid - Responsive */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          {/* EDUCATION */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
              Education
            </h3>
            <div className="space-y-5">
              {education.map((edu, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="bg-gray-900/50 border border-gray-700 rounded-2xl p-5 sm:p-6 hover:border-gray-600 transition-all duration-300 group"
                >
                  <h4 className="text-lg sm:text-xl font-semibold text-white group-hover:text-gray-200 transition">
                    {edu.degree}
                  </h4>
                  <p className="text-gray-300 text-sm sm:text-base mt-1">{edu.school}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mt-2">{edu.year}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* TECHNICAL SKILLS */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-white/5 backdrop-blur-xl border border-gray-800 rounded-3xl p-6 sm:p-8 shadow-2xl"
          >
            <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-6 sm:mb-8">
              Technical Skills
            </h3>
            <div className="grid grid-cols-2 gap-4 sm:gap-6">
              {skills.map((skill, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-center gap-4 bg-gray-900/60 border border-gray-700 rounded-2xl p-4 sm:p-6 hover:border-gray-500 hover:bg-gray-900/80 transition-all duration-300 group"
                >
                  <div className="text-gray-400 group-hover:text-white transition-all duration-300">
                    {skill.icon}
                  </div>
                  <span className="text-gray-200 font-medium text-sm sm:text-base group-hover:text-white transition">
                    {skill.name}
                  </span>
                </motion.div>
              ))}
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
          10% { opacity: 0.4; }
          90% { opacity: 0.3; }
          100% {
            transform: translateY(-120vh) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>
    </section>
  );
};

export default About;