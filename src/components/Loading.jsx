import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';

const Loading = () => {
  const [progress, setProgress] = useState(0);
  const name = "MOHAMED TOLBA"; // Your name split into characters
  const nameArray = name.split('');

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(timer);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-primary flex flex-col items-center justify-center z-50"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:4rem_4rem]" />
      
      <div className="text-center space-y-12 max-w-xl mx-auto px-4">
        {/* Animated Letters */}
        <div className="flex justify-center items-center space-x-2 sm:space-x-3 mb-8">
          {nameArray.map((letter, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: "easeOut"
              }}
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-secondary"
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
            className="absolute -top-6 left-0 text-sm text-gray-400"
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
          <div className="h-1 w-full bg-gray-800 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ duration: 0.5 }}
              className="h-full bg-gradient-to-r from-secondary via-blue-500 to-secondary rounded-full"
            />
          </div>
        </div>

        {/* Loading Animation */}
        <div className="relative">
          <div className="flex justify-center items-center gap-3">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  rotate: [0, 180, 360]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2,
                  ease: "easeInOut"
                }}
                className="w-3 h-3 bg-secondary rounded-full"
              />
            ))}
          </div>
          
          {/* Circular Glow Effect */}
          <div className="absolute inset-0 -z-10 blur-2xl opacity-20">
            <div className="w-full h-full bg-gradient-to-r from-secondary via-blue-500 to-secondary rounded-full" />
          </div>
        </div>

        {/* Status Text */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-gray-400 text-sm"
        >
          {progress < 30 ? "Preparing assets..." :
           progress < 60 ? "Loading content..." :
           progress < 90 ? "Almost there..." :
           "Welcome!"}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default Loading;