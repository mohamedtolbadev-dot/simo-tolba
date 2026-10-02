
"use client";

import { motion } from "framer-motion";
import { MessageCircle } from "lucide-react";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./view/About";
import Projects from "./view/Projects";
import Skills from "./view/Skills";
import Contact from "./view/Contact";
import Footer from "./components/Footer";
import { ContextProvider } from "./components/ContextProvider";

const AnimatedBackground = () => {
  return (
    <div
      className="
        pointer-events-none
        fixed
        inset-0
        -z-10
        overflow-hidden
        bg-neutral-950
      "
      aria-hidden="true"
    >
      {/* Base background */}
      <div className="absolute inset-0 bg-neutral-950" />

      {/* Subtle grid */}
      <div
        className="
          absolute
          inset-0
          opacity-[0.025]
          bg-[linear-gradient(90deg,#ffffff_1px,transparent_1px),linear-gradient(#ffffff_1px,transparent_1px)]
          bg-[size:40px_40px]
        "
      />

      {/* Minimal red accents */}
      <div
        className="
          absolute
          left-0
          top-1/4
          h-40
          w-px
          bg-[#E4312B]/20
        "
      />

      <div
        className="
          absolute
          bottom-1/4
          right-0
          h-40
          w-px
          bg-[#E4312B]/20
        "
      />
    </div>
  );
};

function App() {
  return (
    <ContextProvider>
      <main
        className="
          relative
          min-h-screen
          cursor-default
        "
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

          {/* WhatsApp Button */}
          <motion.a
            href="https://wa.me/+212612455372"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="WhatsApp"
            initial={{
              opacity: 0,
              scale: 0.8,
            }}
            animate={{
              opacity: 1,
              scale: 1,
            }}
            transition={{
              delay: 0.3,
              duration: 0.25,
            }}
            whileHover={{
              scale: 1.05,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="
              group
              fixed
              bottom-4
              right-4
              z-40
              flex
              h-12
              w-12
              cursor-pointer
              items-center
              justify-center
              rounded-xl
              border
              border-neutral-800
              bg-neutral-900
              text-white
              transition-colors
              duration-200
              hover:border-[#E4312B]
              hover:bg-neutral-800
              sm:bottom-6
              sm:right-6
              sm:h-14
              sm:w-14
            "
          >
            <MessageCircle
              size={23}
              strokeWidth={1.8}
            />

            {/* Tooltip */}
            <span
              className="
                pointer-events-none
                absolute
                bottom-full
                right-0
                mb-2
                translate-y-1
                whitespace-nowrap
                rounded-lg
                border
                border-neutral-800
                bg-neutral-900
                px-3
                py-1.5
                text-xs
                font-medium
                text-white
                opacity-0
                transition-all
                duration-200
                group-hover:translate-y-0
                group-hover:opacity-100
              "
            >
              Chat with me
            </span>
          </motion.a>
        </div>
      </main>
    </ContextProvider>
  );
}

export default App;
