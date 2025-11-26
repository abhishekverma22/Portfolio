import React, { useState, memo } from "react";
import { motion, AnimatePresence } from "framer-motion";
import citiSaver from "../assets/CITI-SAVER.png";
import fluencymate from "../assets/fluencymate.png";

const projects = [
  {
    id: 1,
    title: "FluencyMate - Smart language-learning platform",
    description:
      "FluencyMate is a smart language-learning app that helps users improve vocabulary, practice speaking in real time, and build fluency through quizzes and guided exercises.",
    fullDescription:
      "FluencyMate is an interactive language-learning app designed to help users improve their speaking, vocabulary, and overall communication skills. The platform offers a combination of engaging quizzes, real-time speaking practice, and personalized feedback to make learning easier and more effective. With guided exercises and practice modes, users can build fluency, track progress, and strengthen their confidence in any language—all in one intuitive app.",
    tech: ["HTML", "CSS", "JavaScript", "FireBase"],
    features: [
      "Interactive quizzes to build vocabulary and grammar",
      "Speaking practice with instant evaluation",
      "Personalized learning paths",
      "Progress tracking and daily practice goals",
      "Simple, user-friendly interface for learners of all levels",
      "Responsive UI",
    ],
    liveDemo: "https://fluencymate.netlify.app/",
    github: "https://github.com/abhishekverma22/Language-learning-system",
    image: fluencymate,
  },
  {
    id: 2,
    title: "CITI SAVER ",
    description:
      "CitiSave is a citizen-focused web and mobile application designed to streamline the reporting and resolution of civic issues in local neighborhoods",
    fullDescription:
      "CitiSave is a citizen-focused web and mobile application designed to streamline the reporting and resolution of civic issues in local neighborhoods. The platform empowers residents to easily log complaints about problems such as potholes, garbage accumulation, streetlight failures, and more. Users can attach photos, specify locations using Google Maps integration, and track the status of their complaints in real time \n Authorities and municipal staff have access to an admin dashboard, where they can efficiently manage, update, and resolve reported issues. Meanwhile, a public-facing dashboard highlights resolved complaints, promoting transparency and accountability in local governance. CitiSave bridges the gap between citizens and authorities, ensuring faster response times, better civic management, and a cleaner, safer community.",
    tech: ["React", "TailwindCSS", "Node.js", "Express", "MongoDB"],
    features: [
      "Submit complaints with real-time photo and location capture.",
      "Track issue status in real time.",
      "Admin panel to manage and update complaints.",
      "Public dashboard showcasing resolved issues.",
      "Google Maps integration for precise location reporting.",
    ],
    liveDemo: "https://my-city-jet.vercel.app/",
    github: "https://github.com/SumitKumar8252/My-City",
    image: citiSaver,
  },
];

const ProjectCard = memo(({ project, index, onClick }) => (
  <motion.div
    initial={{ opacity: 0, y: 40 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.7, delay: index * 0.1 }}
    whileHover={{ y: -8, scale: 1.02 }}
    className="group relative cursor-pointer"
    onClick={() => onClick(project)}
  >
    <div className="flex flex-col h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-white/30 hover:shadow-2xl transition-all duration-500">
      <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent" />
        <div className="absolute bottom-2 left-2 flex flex-wrap gap-1 sm:gap-2">
          {project.tech.map((t) => (
            <span
              key={t}
              className="px-2 py-0.5 sm:px-3 sm:py-1 text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-gray-200"
            >
              {t}
            </span>
          ))}
        </div>
        <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          <div className="text-white text-xs sm:text-sm md:text-base font-medium bg-black/50 backdrop-blur-sm px-3 sm:px-6 py-1 sm:py-2 rounded-full border border-white/30">
            Click to View Details
          </div>
        </div>
      </div>

      <div className="p-4 sm:p-6 flex-1 flex flex-col">
        <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
          {project.title}
        </h3>
        <p className="text-gray-300 text-xs sm:text-sm md:text-base line-clamp-2 flex-1">
          {project.description}
        </p>

        <div className="mt-4 sm:mt-6 flex gap-3 flex-wrap">
          <a
            href={project.liveDemo}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base bg-linear-to-r from-gray-700 to-gray-800 text-white font-medium rounded-xl hover:shadow-md transition-all duration-300 text-center"
          >
            Live Demo
          </a>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            onClick={(e) => e.stopPropagation()}
            className="flex-1 px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base border-2 border-gray-500 text-white font-medium rounded-xl hover:bg-white/10 hover:border-gray-400 transition-all duration-300 text-center"
          >
            View Code
          </a>
        </div>
      </div>
    </div>
  </motion.div>
));

const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#010011]"
      >
        {/* Reduced bubbles from 22 to 12 */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${40 + Math.random() * 70}px`,
                height: `${40 + Math.random() * 70}px`,
                left: `${Math.random() * 100}%`,
                bottom: `-150px`,
                background: "rgba(180, 180, 180, 0.08)",
                border: "1px solid rgba(220, 220, 220, 0.15)",
                boxShadow: "0 15px 30px rgba(0, 0, 0, 0.4)",
                animation: `float ${15 + Math.random() * 15}s linear infinite`,
                animationDelay: `${Math.random() * 10}s`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] sm:w-[700px] md:w-[800px] h-[500px] sm:h-[700px] md:h-[800px] bg-gray-800/10 blur-3xl rounded-full -z-10" />

        <div className="relative max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16 px-4"
          >
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-3">
              My Projects
            </h2>
            <p className="text-gray-400 text-sm sm:text-base md:text-lg max-w-2xl mx-auto">
              Click any project card to view full details
            </p>
          </motion.div>

          <div className="grid gap-6 sm:gap-8 lg:gap-10 grid-cols-[repeat(auto-fit,minmax(300px,1fr))]">
            {projects.map((project, index) => (
              <ProjectCard
                key={project.id}
                project={project}
                index={index}
                onClick={setSelectedProject}
              />
            ))}
          </div>
        </div>

        <style jsx>{`
          @keyframes float {
            0% {
              transform: translateY(0) rotate(0deg);
              opacity: 0;
            }
            15% {
              opacity: 0.4;
            }
            85% {
              opacity: 0.2;
            }
            100% {
              transform: translateY(-140vh) rotate(360deg);
              opacity: 0;
            }
          }
        `}</style>
      </section>
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/95 backdrop-blur-2xl"
          >
            <motion.div
              initial={{ scale: 0.94, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.94, opacity: 0 }}
              transition={{ type: "spring", damping: 30, stiffness: 320 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-5xl max-h-[92vh] overflow-y-auto bg-[#0c0c0c] border border-gray-800 rounded-3xl shadow-3xl scrollbar-thin scrollbar-thumb-gray-700 scrollbar-track-transparent"
            >
              {/* Modern Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-30 text-red-600 hover:text-white text-2xl sm:text-3xl transition-all duration-300 hover:scale-110 font-bold"
                aria-label="Close"
              >
                ×
              </button>

              {/* Hero Image + Title Overlay */}
              <div className="relative h-64 sm:h-80 md:h-96 lg:h-112 overflow-hidden">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover object-top"
                  loading="lazy"
                />
                <div className="absolute inset-0 " />
              </div>

              {/* Content */}
              <div className="p-6 sm:p-8 md:p-10 lg:p-12 space-y-8 sm:space-y-10 text-white">
                <div className=" p-6 sm:p-8 md:p-10 text-white">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-3 leading-tight drop-shadow-2xl">
                    {selectedProject.title}
                  </h1>
                  <div className="flex flex-wrap gap-2 sm:gap-3">
                    {selectedProject.tech.map((tech) => (
                      <span
                        key={tech}
                        className="px-3 py-1.5 sm:px-4 sm:py-2 text-xs sm:text-sm bg-white/10 backdrop-blur-md border border-white/20 rounded-full font-medium shadow-md"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                {/* Description */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 mb-3 sm:mb-4 border-l-4 border-yellow-500 pl-3 sm:pl-4">
                    Project Overview
                  </h3>
                  <p className="text-gray-400 text-sm sm:text-base md:text-lg leading-relaxed whitespace-pre-line">
                    {selectedProject.fullDescription}
                  </p>
                </div>

                {/* Key Features */}
                <div>
                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-200 mb-4 sm:mb-6 border-l-4 border-yellow-500 pl-3 sm:pl-4">
                    Key Features
                  </h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
                    {selectedProject.features.map((feature, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-3 bg-gray-900/40 backdrop-blur-sm border border-gray-800 rounded-lg p-3 sm:p-4 hover:border-gray-700 transition"
                      >
                        <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-yellow-500 rounded-full mt-1.5 sm:mt-2 shrink-0" />
                        <span className="text-gray-300 text-sm sm:text-base leading-snug">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 pt-4 sm:pt-6">
                  <a
                    href={selectedProject.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4  font-bold text-sm sm:text-base rounded-xl shadow-xl hover:shadow-2xl hover:scale-105 transition-all duration-300 bg-linear-to-r from-gray-700 to-gray-800 "
                  >
                    View Live Demo
                    <svg
                      className="w-5 h-5 group-hover:translate-x-1 transition"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                  <a
                    href={selectedProject.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-3 px-6 py-3.5 sm:py-4 bg-gray-200 hover:bg-gray-700 border border-gray-700 hover:border-gray-500 text-black font-bold text-sm sm:text-base rounded-xl transition-all duration-300 hover:scale-105"
                  >
                    <svg
                      className="w-6 h-6"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                    </svg>
                    View Code
                  </a>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Project;
