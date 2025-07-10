"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"
import { Code2 } from "lucide-react"

const Loading = () => {
  const [progress, setProgress] = useState(0)
  const name = "MOHAMED TOLBA"
  const nameArray = name.split("")
  const role = "FULL-STACK DEVELOPER"
  const roleArray = role.split("")

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
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-slate-950 z-[200]">
      {/* Modern Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020617_100%)]" />

        {/* Animated Grid */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_49%,#ffffff03_50%,transparent_51%)] bg-[length:30px_30px]" />
          <div className="absolute inset-0 bg-[linear-gradient(0deg,transparent_49%,#ffffff03_50%,transparent_51%)] bg-[length:30px_30px]" />
        </div>

        {/* Dynamic Glows */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-secondary/20 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.1, 0.2, 0.1],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 1,
          }}
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[120px]"
        />
      </div>

      <div className="text-center space-y-8 max-w-xl mx-auto px-4 relative z-10">
        {/* Animated Logo */}
        <div className="relative">
          <motion.div
            animate={{
              scale: [1, 1.1, 1],
              rotate: [0, 360],
            }}
            transition={{
              scale: { duration: 2, repeat: Infinity },
              rotate: { duration: 8, repeat: Infinity, ease: "linear" },
            }}
            className="w-24 h-24 rounded-full bg-gradient-to-br from-secondary via-primary to-secondary mx-auto flex items-center justify-center"
          >
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
            >
              <Code2 className="w-12 h-12 text-slate-900" />
            </motion.div>
          </motion.div>

          {/* Rotating Border */}
          <motion.div
            animate={{ rotate: -360 }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute inset-0 rounded-full border-2 border-dashed border-secondary/30"
          />
        </div>

        {/* Name Animation */}
        <div className="flex justify-center items-center gap-2 flex-wrap my-8">
          {nameArray.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.3,
                delay: index * 0.1,
                ease: "easeOut",
              }}
              className={`text-3xl sm:text-4xl font-bold ${
                letter === " " ? "mr-2" : "bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Role Animation */}
        <div className="flex justify-center items-center gap-1 flex-wrap">
          {roleArray.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{
                duration: 0.3,
                delay: nameArray.length * 0.1 + index * 0.05,
                ease: "easeOut",
              }}
              className={`text-sm tracking-wider font-mono ${
                letter === " " ? "mr-1" : "text-secondary"
              }`}
            >
              {letter}
            </motion.span>
          ))}
        </div>

        {/* Progress Bar */}
        <div className="relative w-full max-w-md mx-auto mt-12">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="absolute -top-6 left-0 text-sm text-slate-400 font-mono"
          >
            Loading... {progress}%
          </motion.div>

          <div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-secondary via-primary to-secondary bg-size-200 animate-gradient rounded-full"
            />
          </div>

          {/* Loading Messages */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="absolute -bottom-6 left-0 right-0 text-xs text-slate-500 font-mono"
          >
            {progress < 33 && "Initializing..."}
            {progress >= 33 && progress < 66 && "Loading assets..."}
            {progress >= 66 && progress < 100 && "Preparing content..."}
            {progress === 100 && "Ready!"}
          </motion.div>
        </div>
      </div>

      {/* Floating Particles */}
      {[...Array(20)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            y: [0, -20, 0],
            opacity: [0.2, 1, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: Math.random() * 3 + 2,
            delay: i * 0.1,
            repeat: Infinity,
          }}
          className="absolute w-1 h-1 rounded-full bg-gradient-to-r from-secondary to-primary"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
          }}
        />
      ))}
    </div>
  )
}

export default Loading
