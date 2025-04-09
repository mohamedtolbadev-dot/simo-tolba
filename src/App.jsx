"use client"

import { motion, AnimatePresence } from "framer-motion"
import { MessageCircle } from "lucide-react"
import { useEffect, useState } from "react"
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './view/About';
import Projects from './view/Projects';
import Skills from './view/Skills';
import Contact from './view/Contact';
import Footer from './components/Footer';
import { ContextProvider } from "./components/ContextProvider";

const AnimatedBackground = () => {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Base background */}
      <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

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
        className="absolute top-1/4 -left-20 w-72 h-72 bg-secondary/20 rounded-full blur-[100px]"
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
        className="absolute bottom-1/4 -right-20 w-72 h-72 bg-primary/20 rounded-full blur-[100px]"
      />

      {/* Animated Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          initial={{
            y: Math.random() * 2000,
            x: Math.random() * window.innerWidth,
            opacity: 0,
          }}
          animate={{
            y: [-20, -window.innerHeight - 100],
            opacity: [0, 0.8, 0],
          }}
          transition={{
            duration: Math.random() * 15 + 15,
            repeat: Number.POSITIVE_INFINITY,
            delay: Math.random() * 20,
            ease: "linear",
          }}
          className="absolute w-1.5 h-1.5 rounded-full bg-secondary"
        />
      ))}

      {/* Subtle animated lines */}
      <svg className="absolute inset-0 w-full h-full opacity-10" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(255,255,255,0)" />
            <stop offset="50%" stopColor="rgba(255,255,255,0.2)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0)" />
          </linearGradient>
        </defs>
        {[...Array(5)].map((_, i) => {
          const y = (i + 1) * (window.innerHeight / 6)
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
          )
        })}
      </svg>
    </div>
  )
}

function App() {
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    // Simulate loading time with minimum duration
    const minLoadingTime = 2500 // 2.5 seconds minimum loading time
    const startTime = Date.now()

    const handleLoading = () => {
      const elapsedTime = Date.now() - startTime
      const remainingTime = Math.max(0, minLoadingTime - elapsedTime)

      setTimeout(() => {
        setLoading(false)
      }, remainingTime)
    }

    // Start loading process
    window.onload = handleLoading

    // Fallback in case window.onload doesn't trigger
    setTimeout(handleLoading, 3000)

    return () => {
      window.onload = null
    }
  }, [])

  return (
    <ContextProvider>
      <main className="relative min-h-screen">
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
                  href="https://wa.me/+2126124553"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="fixed bottom-6 right-6 bg-gradient-to-r from-secondary to-secondary/80 text-primary p-3.5 rounded-full shadow-lg hover:shadow-secondary/20 transition-all duration-300 z-40"
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
  )
}

export default App



