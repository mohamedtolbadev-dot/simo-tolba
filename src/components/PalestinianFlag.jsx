"use client";

import { motion } from "framer-motion";

const PalestinianFlag = ({ size = "md", className = "", animated = true }) => {
  const sizes = {
    sm: {
      width: "w-8",
      height: "h-6",
      triangle: "border-t-[0.75rem] border-b-[0.75rem] border-l-[1rem]",
    },
    md: {
      width: "w-12",
      height: "h-9",
      triangle: "border-t-[1.125rem] border-b-[1.125rem] border-l-[1.5rem]",
    },
    lg: {
      width: "w-16",
      height: "h-12",
      triangle: "border-t-[1.5rem] border-b-[1.5rem] border-l-[2rem]",
    },
    xl: {
      width: "w-20",
      height: "h-15",
      triangle: "border-t-[1.875rem] border-b-[1.875rem] border-l-[2.5rem]",
    },
  };

  const flagSize = sizes[size] || sizes.md;

  const Flag = () => (
    <div
      className={`${flagSize.width} ${flagSize.height} ${className} relative overflow-hidden rounded-sm shadow-lg border border-white/20`}
    >
      {/* Black stripe */}
      <div className="absolute top-0 left-0 w-full h-1/3 bg-primary"></div>

      {/* White stripe */}
      <div className="absolute top-1/3 left-0 w-full h-1/3 bg-light"></div>

      {/* Green stripe */}
      <div className="absolute top-2/3 left-0 w-full h-1/3 bg-accent"></div>

      {/* Red triangle */}
      <div
        className={`absolute top-0 left-0 w-0 h-0 ${flagSize.triangle} border-t-transparent border-b-transparent border-l-secondary z-10`}
      ></div>
    </div>
  );

  if (!animated) {
    return <Flag />;
  }

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.1, y: -2 }}
      className="cursor-pointer"
      title="Palestine Flag 🇵🇸"
    >
      <Flag />
    </motion.div>
  );
};

export default PalestinianFlag;
