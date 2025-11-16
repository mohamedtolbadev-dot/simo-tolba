"use client";

import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle } from "lucide-react";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./view/About";
import Projects from "./view/Projects";
import Skills from "./view/Skills";
import Contact from "./view/Contact";
import Footer from "./components/Footer";
import { ContextProvider } from "./components/ContextProvider";
import PalestinianFlag from "./components/PalestinianFlag";

const CursorFollower = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      const isClickable = 
        target.tagName === 'A' || 
        target.tagName === 'BUTTON' || 
        target.closest('a') || 
        target.closest('button') ||
        window.getComputedStyle(target).cursor === 'pointer';
      setIsPointer(isClickable);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      {/* Main cursor dot */}
      <motion.div
        className="fixed w-2 h-2 bg-red-600 rounded-full pointer-events-none z-[9999] mix-blend-difference"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
        }}
        transition={{
          type: "spring",
          damping: 30,
          stiffness: 500,
          mass: 0.5,
        }}
      />
      
      {/* Outer ring */}
      <motion.div
        className="fixed w-10 h-10 border-2 border-red-600/50 rounded-full pointer-events-none z-[9998] mix-blend-difference"
        animate={{
          x: mousePosition.x - 20,
          y: mousePosition.y - 20,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          damping: 20,
          stiffness: 200,
          mass: 0.8,
        }}
      />
    </>
  );
};

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-bgPrimary via-slate-900 to-bgPrimary" />

      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff05_50%,transparent_51%)] bg-[length:40px_40px]" />

      {/* Accent color glows */}
      <motion.div
        animate={{
          opacity: [0.15, 0.2, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 8,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
        }}
        className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/15 rounded-full blur-[100px]"
      />
      <motion.div
        animate={{
          opacity: [0.15, 0.2, 0.15],
          scale: [1, 1.1, 1],
        }}
        transition={{
          duration: 10,
          repeat: Number.POSITIVE_INFINITY,
          repeatType: "reverse",
          delay: 2,
        }}
        className="absolute bottom-1/4 -right-20 w-72 h-72 bg-accent/15 rounded-full blur-[100px]"
      />

      {/* Minimal Particles */}
      {[...Array(6)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0, 0.4, 0],
          }}
          transition={{
            duration: 6,
            repeat: Number.POSITIVE_INFINITY,
            delay: i * 1,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-accent/40"
          style={{
            left: `${10 + i * 15}%`,
            top: `${10 + i * 10}%`,
          }}
        />
      ))}

      {/* Subtle animated lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => {
          const y = (i + 1) * (window.innerHeight / 6);
          return (
            <motion.line
              key={i}
              x1="-100"
              y1={y}
              x2={window.innerWidth + 100}
              y2={y}
              stroke="url(#lineGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{
                pathLength: [0, 1, 0],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 15,
                repeat: Number.POSITIVE_INFINITY,
                delay: i * 3,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>
    </div>
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time with minimum duration
    const minLoadingTime = 1200; // 1.2 seconds minimum loading time
    const startTime = Date.now();

    const handleLoading = () => {
      const elapsedTime = Date.now() - startTime;
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime);

      setTimeout(() => {
        setLoading(false);
      }, remainingTime);
    };

    // Start loading process
    window.onload = handleLoading;

    // Fallback in case window.onload doesn't trigger
    setTimeout(handleLoading, 3000);

    return () => {
      window.onload = null;
    };
  }, []);

  return (
    <ContextProvider>
      <main className="relative min-h-screen" style={{ cursor: 'none' }}>
        <AnimatePresence mode="wait">
          {loading ? (
            <motion.div
              key="loading"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="fixed inset-0 z-50"
            >
              <Loading />
            </motion.div>
          ) : (
            <motion.div
              key="content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <AnimatedBackground />
              <CursorFollower />
              <div className="relative z-10">
                <Navbar />
                <Hero />
                <About />
                <Skills />
                <Projects />
                <Contact />
                <Footer />

                {/* WhatsApp icon */}
                <motion.a
                  href="https://wa.me/+212612455372"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-4 sm:bottom-6 right-4 sm:right-6 bg-gradient-to-r from-secondary to-secondary/80 text-light p-3 sm:p-3.5 rounded-full shadow-lg hover:shadow-secondary/20 transition-all duration-300 z-40"
                  aria-label="WhatsApp"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  transition={{ delay: 1, type: "spring" }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <MessageCircle size={24} />
                  <span className="absolute -top-10 right-0 bg-slate-900 text-white text-sm py-1 px-3 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
                    Chat with me
                  </span>
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </main>
    </ContextProvider>
  );
}

export default App;
