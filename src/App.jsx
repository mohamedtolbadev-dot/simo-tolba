import { useState, useEffect } from 'react';
import Loading from './components/Loading';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './view/About';
import Projects from './view/Projects';
import Skills from './view/Skills';
import Contact from './view/Contact';
import Footer from './components/Footer';
import { motion } from 'framer-motion';
const AnimatedBackground = () => {
 return (
   <div className="fixed inset-0 -z-10 bg-primary">
     {/* Animated Grid */}
     <motion.div 
       animate={{
         y: [0, -20, 0]
       }}
       transition={{
         duration: 20,
         repeat: Infinity,
         repeatType: "loop",
         ease: "linear"
       }}
       className="absolute inset-0 opacity-20"
     >
       <div className="h-full w-full bg-[linear-gradient(to_right,#64ffda_1px,transparent_1px),linear-gradient(to_bottom,#64ffda_1px,transparent_1px)] bg-[size:6rem_4rem]" />
     </motion.div>
      {/* Radial Gradient */}
     <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0a192f_100%)]" />
      {/* Animated Particles */}
     {[...Array(30)].map((_, i) => (
       <motion.div
         key={i}
         animate={{
           y: [0, -1000],
           x: [-20, 20],
           opacity: [0, 1, 0]
         }}
         transition={{
           duration: Math.random() * 10 + 10,
           repeat: Infinity,
           delay: Math.random() * 5,
           ease: "linear"
         }}
         className="absolute w-1 h-1 bg-secondary rounded-full"
         style={{
           left: `${Math.random() * 100}%`,
           top: '100%'
         }}
       />
     ))}
   </div>
 );
};
function App() {
 const [loading, setLoading] = useState(true);
  useEffect(() => {
   // Simulate loading time with minimum duration
   const minLoadingTime = 2500; // 2.5 seconds minimum loading time
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
   <main className="relative bg-primary min-h-screen">
     {loading ? (
       <Loading />
     ) : (
       <motion.div
         initial={{ opacity: 0 }}
         animate={{ opacity: 1 }}
         transition={{ duration: 0.5 }}
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
         </div>
       </motion.div>
     )}
   </main>
 );
};

export default App;