"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

const Loading = () => {
  const [progress, setProgress] = useState(0)
  const name = "MOHAMED TOLBA"
  const nameArray = name.split("")

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer)
          return 100
        }
        return prev + 1
      })
    }, 20)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 z-50">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        {/* Modern gradient background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />

        {/* Subtle grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff05_50%,transparent_51%)] bg-[length:40px_40px]" />

        {/* Accent color glow */}
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
      </div>

      <div className="text-center space-y-12 max-w-xl mx-auto px-4 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="w-20 h-20 rounded-full bg-gradient-to-br from-secondary to-secondary/60 mx-auto mb-8 flex items-center justify-center"
        >
          <span className="text-primary font-bold text-3xl">M</span>
        </motion.div>

        {/* Animated Letters */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-8 flex-wrap">
          {nameArray.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`text-3xl sm:text-4xl md:text-5xl font-bold ${letter === " " ? "mr-2" : "text-white"}`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Loading Bar Container */}
        <div className="relative w-full max-w-md mx-auto">
          {/* Progress Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-6 left-0 text-sm text-slate-400"
          >
            Loading...
          </motion.div>

          {/* Percentage Text */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-6 right-0 text-sm text-secondary"
          >
            {progress}%
          </motion.div>

          {/* Progress Bar */}
          <div className="h-1.5 w-full bg-white/5 backdrop-blur-sm rounded-full overflow-hidden border border-white/10">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-secondary via-secondary/80 to-secondary rounded-full"
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="relative py-4">
          <div className="flex justify-center items-center gap-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Number.POSITIVE_INFINITY,
                  delay: i * 0.2,
                  ease: "easeInOut",
                }}
                className="w-3 h-3 bg-secondary rounded-full"
              />
            ))}
          </div>

          {/* Circular Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-secondary via-secondary/80 to-secondary rounded-full" />
          </div>
        </div>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-slate-400 text-sm"
        >
          {progress < 30
            ? "Preparing assets..."
            : progress < 60
              ? "Loading content..."
              : progress < 90
                ? "Almost there..."
                : "Welcome!"}
        </motion.p>
      </div>

      {/* Decorative Elements */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2">
        <motion.div
          animate={{
            y: [0, -8, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
          className="w-1 h-10 rounded-full bg-gradient-to-b from-secondary to-transparent"
        />
      </div>
    </div>
  )
}

export default Loading
