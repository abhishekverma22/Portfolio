import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import portfolio from "../assets/portfolio.png";
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
  {
    id: 3,
    title: "Portfolio Website",
    description:
      "A sleek personal portfolio with smooth animations, glassmorphism, floating bubbles, and interactive hover effects using React and Framer Motion.",
    fullDescription:
      "This portfolio features a modern dark theme with floating particle background, glassmorphic cards, smooth scroll navigation, interactive project previews with image swipe, and a fully functional contact form. Built with React, Tailwind CSS, Framer Motion, and Lucide icons for a premium developer experience.",
    tech: ["React", "Tailwind CSS", "Framer Motion", "Lucide Icons"],
    features: [
      "Smooth Scroll",
      "Glassmorphism",
      "Image Hover Effects",
      "Floating Bubbles",
      "Responsive Design",
    ],
    liveDemo: "https://abhishek-verm-portfolio.vercel.app",
    github: "https://github.com/abhishekverma22/Portfolio",
    image: portfolio,
  },
];
const Project = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <>
      <section
        id="projects"
        className="relative min-h-screen py-16 md:py-24 px-4 sm:px-6 lg:px-12 overflow-hidden bg-[#010011]"
      >
        {/* Floating Bubbles */}
        <div className="absolute inset-0 -z-10 pointer-events-none">
          {[...Array(22)].map((_, i) => (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                width: `${40 + Math.random() * 80}px`,
                height: `${40 + Math.random() * 80}px`,
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
          {/* Section Header */}
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

          {/* Project Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {projects.map((project, index) => (
              <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: index * 0.1 }}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group relative cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex flex-col h-full bg-white/5 backdrop-blur-2xl border border-white/10 rounded-2xl overflow-hidden shadow-xl hover:border-white/30 hover:shadow-2xl transition-all duration-500">
                  {/* Image */}
                  <div className="relative h-48 sm:h-56 md:h-64 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
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

                  {/* Content */}
                  <div className="p-4 sm:p-6 flex-1 flex flex-col">
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-white mb-2">
                      {project.title}
                    </h3>
                    <p className="text-gray-300 text-xs sm:text-sm md:text-base line-clamp-2 flex-1">
                      {project.description}
                    </p>

                    {/* Live Demo */}
                    <div className="mt-4 sm:mt-6">
                      <a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => e.stopPropagation()}
                        className="inline-block px-4 sm:px-6 py-2 sm:py-3 text-xs sm:text-sm md:text-base bg-linear-to-r from-gray-700 to-gray-800 text-white font-medium rounded-xl hover:shadow-md transition-all duration-300"
                      >
                        Live Demo
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>
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

      {/* Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-4xl md:max-w-5xl max-h-[90vh] overflow-y-auto bg-gray-900/30 backdrop-blur-3xl border border-white/20 rounded-3xl shadow-2xl p-4 sm:p-6 md:p-8"
            >
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 sm:top-6 right-4 sm:right-6 text-gray-300 hover:text-white text-lg sm:text-xl md:text-2xl font-bold"
              >
                X
              </button>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6">
                {/* Image */}
                <div className="h-auto sm:h-64 md:h-full overflow-hidden rounded-xl flex justify-center items-center">
                  <img
                    src={selectedProject.image}
                    alt={selectedProject.title}
                    className="w-full h-full object-contain"
                  />
                </div>

                {/* Details */}
                <div className="space-y-4 sm:space-y-6 md:space-y-8 text-white">
                  <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold">
                    {selectedProject.title}
                  </h2>
                  <p className="text-xs sm:text-sm md:text-base text-gray-300 leading-relaxed">
                    {selectedProject.fullDescription}
                  </p>

                  {/* Features */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      Key Features
                    </h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-3">
                      {selectedProject.features.map((feature) => (
                        <div key={feature} className="flex items-center gap-2">
                          <span className="w-2 h-2 bg-green-500 rounded-full" />
                          <span className="text-gray-300 text-xs sm:text-sm md:text-base">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Tech Stack */}
                  <div>
                    <h3 className="text-lg sm:text-xl md:text-2xl font-bold mb-2">
                      Technologies Used
                    </h3>
                    <div className="flex flex-wrap gap-2 sm:gap-3">
                      {selectedProject.tech.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 sm:px-4 sm:py-2 text-xs sm:text-sm md:text-base bg-gray-800/70 rounded-full border border-gray-600"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-col sm:flex-row gap-3 mt-4 sm:mt-6">
                    <a
                      href={selectedProject.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 sm:py-3 text-sm sm:text-base md:text-lg bg-white/20 border-2 border-white/40 text-white font-bold text-center rounded-xl shadow-md hover:shadow-lg transition-all duration-300"
                    >
                      View Live Demo
                    </a>
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 py-2 sm:py-3 text-sm sm:text-base md:text-lg border-2 border-gray-500 text-white font-bold text-center rounded-xl hover:bg-white/10 hover:border-gray-400 transition-all duration-300"
                    >
                      View Code
                    </a>
                  </div>
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
