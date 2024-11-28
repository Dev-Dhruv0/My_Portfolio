import React from "react";
import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../assets/Hero_Banner.png";

const Hero = () => {
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
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 h-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left side - Text content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inner-container w-full md:w-1/2 flex flex-col items-start"
        >
          <div className="text-container flex flex-col gap-4">
            <div className="flex items-center gap-2 text-sm text-gray-400">
              <span className="inline-block w-2 h-2 rounded-full bg-green-500 animate-pulse" />
              Available to work
            </div>
            
            <motion.h1 
              className="text-4xl sm:text-5xl lg:text-6xl font-black text-white leading-tight"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 relative">
                Dhruv Sharma
                <motion.span
                  className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-purple-500 to-cyan-500"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>

            <TypeAnimation
              sequence={[
                "Full Stack Developer",
                1000,
                "Tailwind Enthusiast",
                1000,
                "React Developer",
                1000
              ]}
              wrapper="span"
              speed={50}
              className="text-gray-400 text-xl sm:text-2xl"
              repeat={Infinity}
            />

            <motion.div 
              className="flex flex-wrap gap-2 mt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind'].map((tag, index) => (
                <motion.span 
                  key={tag}
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.3, delay: 0.5 + index * 0.1 }}
                  className="px-4 py-2 bg-gray-800/50 backdrop-blur-sm text-gray-300 rounded-full text-sm border border-gray-700/50 hover:border-purple-500/50 transition-colors duration-300"
                >
                  {tag}
                </motion.span>
              ))}
            </motion.div>
          </div>

          <motion.div
            className="mt-8 flex gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              onClick={() => scrollToSection('contact')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 shadow-lg shadow-purple-500/25"
            >
              Contact Me
            </motion.button>
            <motion.button
              onClick={() => scrollToSection('projects')}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-gray-700 text-white font-semibold rounded-full hover:border-purple-500/50 transition-all duration-300"
            >
              View Projects
            </motion.button>
          </motion.div>
        </motion.div>

        {/* Right side - Image/Animation */}
        <motion.div 
          className="w-full md:w-1/2"
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="relative w-full h-[350px] sm:h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl flex items-center justify-center overflow-hidden group">
            {/* Background glow effect */}
            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            
            <motion.div
              animate={{
                y: [0, -10, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
              className="relative z-10"
            >
              <img
                src={heroImage}
                alt="Dhruv Sharma"
                className="w-full h-full object-cover rounded-2xl transition-transform duration-300 group-hover:scale-105"
              />
            </motion.div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
      >
        <span className="text-gray-400 text-sm">Scroll to explore</span>
        <motion.div
          animate={{
            y: [0, 5, 0],
          }}
          transition={{
            duration: 1.5,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="w-5 h-8 border-2 border-gray-400 rounded-full flex items-start justify-center p-1"
        >
          <motion.div
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="w-1 h-1 bg-gray-400 rounded-full"
          />
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
