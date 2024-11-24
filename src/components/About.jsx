import React, { useState, useEffect, useRef } from "react";
import htmlIcon from "../assets/html-5-svgrepo-com.svg";
import cssIcon from "../assets/css-3-svgrepo-com.svg";
import jsIcon from "../assets/javascript-svgrepo-com.svg";
import nodeIcon from "../assets/node-svgrepo-com.svg";
import reactIcon from "../assets/react-svgrepo-com.svg";
import tailwindIcon from "../assets/tailwind-svgrepo-com.svg";

import { delay, motion } from "framer-motion";

export const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (contentRef.current) {
        const { left, top } = contentRef.current.getBoundingClientRect();
        const x = e.clientX - left;
        const y = e.clientY - top;
        setMousePosition({ x, y });
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const techIcons = [
    { src: htmlIcon, alt: "HTML5", id: "html" },
    { src: cssIcon, alt: "CSS3", id: "css" },
    { src: jsIcon, alt: "JavaScript", id: "javascript" },
    { src: nodeIcon, alt: "Node.js", id: "node" },
    { src: reactIcon, alt: "React", id: "react" },
    { src: tailwindIcon, alt: "Tailwind CSS", id: "tailwind" },
  ];

  const getRandomDuration = () => {
    return Math.random() * (3 - 1.5) + 1.5;
  };

  const getFloatingAnimation = (index) => ({
    opacity: 1,
    y: [0, -10, 0],
    transition: {
      opacity: { duration: 1 },
      y: {
        duration: getRandomDuration(),
        repeat: Infinity,
        ease: "easeInOut",
        delay: Math.random() * 0.5,
      },
    },
  });

  return (
    <>
      <section
        id="about"
        className="w-full min-h-screen"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        <div 
          className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12 py-20 relative"
          ref={contentRef}
        >
          {/* Blur effect div */}
          <motion.div
            className="absolute bg-cyan-500/30 blur-[80px] rounded-full w-32 h-32 pointer-events-none"
            animate={{
              x: mousePosition.x,
              y: mousePosition.y,
              scale: isHovering ? 1 : 0,
              opacity: isHovering ? 0.7 : 0,
            }}
            style={{
              left: '-16px',
              top: '-16px',
              transform: 'translate(-50%, -50%)'
            }}
            transition={{
              type: "spring",
              stiffness: 400,
              damping: 30,
              opacity: {
                duration: 0.2
              },
              scale: {
                duration: 0.2
              }
            }}
            initial={{
              opacity: 0,
              scale: 0,
              x: 0,
              y: 0
            }}
          />

          {/* Section Title */}
          <div className="text-white text-3xl font-bold mb-12">About Me</div>
          {/* Two Column Layout */}
          <div className="flex flex-col md:flex-row gap-8">
            {/* Left Column - About info */}
            <div className="w-full md:w-1/2">
              <p className="text-gray-300 text-lg">
                Hi, I'm{" "}
                <span className="text-white font-semibold">Dhruv Sharma</span>,
                a passionate
                <span className="text-cyan-400"> Full Stack Developer </span>
                with a keen interest in creating beautiful and functional web
                applications.
              </p>

              <p className="text-gray-300 text-lg mt-4">
                I specialize in <span className="text-cyan-400">React</span>,
                <span className="text-cyan-400"> Node.js</span>,
                <span className="text-cyan-400"> Express.js</span>,
                <span className="text-cyan-400"> My SQL</span>,
                <span className="text-cyan-400"> Javascript</span>, and
                <span className="text-cyan-400"> Modern Web Technologies</span>.
              </p>
            </div>

            {/* Right Column - Tech stack */}
            <div className="w-full md:w-1/2 relative">
              <div className="grid grid-cols-3 gap-16 place-items-center h-full">
                {techIcons.map((icon, index) => (
                  <motion.div
                    key={icon.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={getFloatingAnimation(index)}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <img src={icon.src} alt={icon.alt} className="w-20 h-20" />
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
