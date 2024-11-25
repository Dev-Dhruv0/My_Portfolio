import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

// Import your tech stack images
import reactIcon from '../assets/react-svgrepo-com.svg';
import jsIcon from '../assets/javascript-svgrepo-com.svg';
import nodeIcon from '../assets/node-svgrepo-com.svg';
import tailwindIcon from '../assets/tailwind-svgrepo-com.svg';

export const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top
    });
  };

  return (
    <section 
      id='about' 
      className='relative w-full min-h-screen bg-primary overflow-hidden'
      onMouseMove={handleMouseMove}
    >
      {/* Blur Effect */}
      <div 
        className="absolute pointer-events-none"
        style={{
          background: 'radial-gradient(600px circle at var(--mouse-x) var(--mouse-y), rgba(139, 92, 246, 0.15), transparent 80%)',
          left: 0,
          top: 0,
          width: '100%',
          height: '100%',
          '--mouse-x': `${mousePosition.x}px`,
          '--mouse-y': `${mousePosition.y}px`,
        }}
      />

      {/* Main Content Container */}
      <div className='max-w-7xl mx-auto px-6 sm:px-8 md:px-12 h-full py-20'>
        <div className='flex flex-col md:flex-row items-center justify-between gap-12'>
          {/* Left Side - Content */}
          <div className='w-full md:w-1/2'>
            <h2 className='text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6'>
              About Me
            </h2>
            <p className='text-gray-300 text-lg mb-6'>
              I'm a passionate Frontend Developer with expertise in building modern web applications. 
              My journey in web development started with a curiosity for creating beautiful user interfaces 
              and has evolved into a deep understanding of frontend technologies.
            </p>
            <p className='text-gray-300 text-lg mb-6'>
              I specialize in React.js and modern JavaScript, creating responsive and user-friendly 
              applications. My approach combines clean code practices with creative problem-solving 
              to deliver exceptional user experiences.
            </p>
            <div className='flex gap-4'>
              <button className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300'>
                Download CV
              </button>
              <button className='px-6 py-3 border border-purple-600 text-white rounded-lg hover:bg-purple-600/10 transition-colors duration-300'>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Floating Icons */}
          <div className='relative w-full md:w-1/2 h-[400px]'>
            {/* Floating Image 1 */}
            <motion.div
              className='absolute w-20 h-20 top-0 left-[20%]'
              animate={{
                y: [0, -20, 0],
                rotate: [0, 10, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            >
              <img src={reactIcon} alt="React" className='w-full h-full object-contain' />
            </motion.div>

            {/* Floating Image 2 */}
            <motion.div
              className='absolute w-16 h-16 top-[30%] right-[20%]'
              animate={{
                y: [0, 20, 0],
                rotate: [0, -10, 0]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 0.5
              }}
            >
              <img src={jsIcon} alt="JavaScript" className='w-full h-full object-contain' />
            </motion.div>

            {/* Floating Image 3 */}
            <motion.div
              className='absolute w-24 h-24 bottom-[30%] left-[10%]'
              animate={{
                y: [0, 15, 0],
                rotate: [0, 5, 0]
              }}
              transition={{
                duration: 3.5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1
              }}
            >
              <img src={nodeIcon} alt="Node.js" className='w-full h-full object-contain' />
            </motion.div>

            {/* Floating Image 4 */}
            <motion.div
              className='absolute w-20 h-20 bottom-[10%] right-[30%]'
              animate={{
                y: [0, -15, 0],
                rotate: [0, -5, 0]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }}
            >
              <img src={tailwindIcon} alt="Tailwind CSS" className='w-full h-full object-contain' />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
