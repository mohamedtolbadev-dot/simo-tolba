"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";

const Loading = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 5;
      });
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 z-[200]">
      {/* Minimalist Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/3 right-0 w-[500px] h-[500px] bg-red-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-1/3 left-0 w-[400px] h-[400px] bg-slate-800/30 rounded-full blur-[100px]" />
      </div>

      {/* Main Content */}
      <div className="text-center space-y-10 max-w-md mx-auto px-6 relative z-10">
        {/* Logo */}
        <motion.div
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ type: "spring", duration: 0.8 }}
          className="mx-auto"
        >
          <div className="w-24 h-24 flex items-center justify-center mx-auto">
            <img src="/logo.svg" alt="Mohamed Tolba Logo" className="w-full h-full drop-shadow-2xl" />
          </div>
        </motion.div>

        {/* Main Message with 3D Effect */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="space-y-3"
          style={{ perspective: "1000px" }}
        >
          <motion.h1 
            className="text-4xl sm:text-5xl font-black text-white tracking-tight"
            style={{
              textShadow: `
                2px 2px 0px rgba(220, 38, 38, 0.3),
                4px 4px 0px rgba(220, 38, 38, 0.2),
                6px 6px 0px rgba(220, 38, 38, 0.1),
                8px 8px 20px rgba(0, 0, 0, 0.5)
              `
            }}
          >
            MOHAMED TOLBA
          </motion.h1>
          <p className="text-slate-400 font-medium text-sm tracking-[0.2em] uppercase">
            Full-Stack Developer
          </p>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9 }}
          className="space-y-3"
        >
          <div className="text-slate-400 text-sm font-mono font-bold">
            Loading... {progress}%
          </div>

          <div className="w-full bg-slate-800/50 rounded-full h-1.5 overflow-hidden border border-slate-700/50">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
              className="h-full bg-gradient-to-r from-red-600 to-red-500 rounded-full shadow-lg shadow-red-600/50"
            />
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="text-slate-500 text-xs font-mono"
          >
            {progress < 25 && "Initializing..."}
            {progress >= 25 && progress < 50 && "Loading assets..."}
            {progress >= 50 && progress < 75 && "Preparing content..."}
            {progress >= 75 && progress < 100 && "Almost ready..."}
            {progress === 100 && "Welcome!"}
          </motion.div>
        </motion.div>
      </div>

      {/* Minimal Floating Dots */}
      {[...Array(5)].map((_, i) => (
        <motion.div
          key={i}
          animate={{
            opacity: [0.1, 0.3, 0.1],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 3,
            delay: i * 0.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute w-1 h-1 rounded-full bg-red-600/40"
          style={{
            left: `${10 + i * 20}%`,
            top: `${15 + i * 15}%`,
          }}
        />
      ))}
    </div>
  );
};

export default Loading;
