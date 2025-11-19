import React, { useMemo } from "react";
import Navbar from "./components/NavBar.jsx";
import Home from "./components/Home.jsx";
import About from "./components/About.jsx";
import Project from "./components/Project.jsx";
import Contact from "./components/Contact.jsx";

const App = () => {
  // Generate bubbles ONCE
  const bubbles = useMemo(() => {
    return [...Array(28)].map((_, i) => {
      const size = 40 + Math.random() * 80;
      const duration = 8 + Math.random() * 12;
      const delay = Math.random() * 8;
      const drift = Math.random() > 0.5 ? 120 : -120;
      const left = Math.random() * 100;

      return { id: i, size, duration, delay, drift, left };
    });
  }, []);

  // Smooth scroll function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <>
      {/* BACKGROUND WITH BUBBLES */}
      <div className="fixed inset-0 -z-10 overflow-hidden bg-[#020016] min-h-screen ">
        <div className="absolute inset-0 pointer-events-none">
          {bubbles.map((bubble) => (
            <div
              key={bubble.id}
              className="absolute rounded-full"
              style={{
                width: `${bubble.size}px`,
                height: `${bubble.size}px`,
                left: `${bubble.left}%`,
                bottom: `-120px`,
                background: "rgba(180, 180, 180, 0.12)",
                border: "1px solid rgba(220, 220, 220, 0.18)",
                boxShadow: "0 8px 32px rgba(0, 0, 0, 0.3)",
                animation: `balloon ${bubble.duration}s linear infinite`,
                animationDelay: `${bubble.delay}s`,
                "--drift": `${bubble.drift}px`,
              }}
            />
          ))}
        </div>

        <div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] -translate-x-1/2 -translate-y-1/2 bg-gray-800/20 blur-3xl rounded-full" />
      </div>

      <style jsx>{`
        @keyframes balloon {
          0% { transform: translateY(0) translateX(0) rotate(0deg); opacity: 0; }
          10% { opacity: 0.4; }
          90% { opacity: 0.3; }
          100% {
            transform: translateY(-110vh) translateX(var(--drift, 100px)) rotate(360deg);
            opacity: 0;
          }
        }
      `}</style>

      {/* MAIN CONTENT */}
      <div className="relative min-h-screen">
        <Navbar scrollToSection={scrollToSection} />
  
        <div className="pt-20 md:pt-24">
          <section id="home"><Home /></section>
          <section id="about"><About /></section>
          <section id="projects"><Project /></section>
          <section id="contact"><Contact /></section>
        </div>
      </div>
    </>
  );
};

export default App;