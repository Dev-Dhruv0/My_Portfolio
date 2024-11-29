import React, { useState } from 'react';
import { motion } from 'framer-motion';
import TechIcon from './TechIcons';
import TechModal from './TechModal';
import { techStackData } from '../data/techStack';

// Import your tech stack images
// import reactIcon from '../assets/react-svgrepo-com.svg';
// import jsIcon from '../assets/javascript-svgrepo-com.svg';
// import nodeIcon from '../assets/node-svgrepo-com.svg';
// import tailwindIcon from '../assets/tailwind-svgrepo-com.svg';

export const About = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [selectedTech, setSelectedTech] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const handleMouseMove = (e) => {
    const { clientX, clientY } = e;
    const { left, top } = e.currentTarget.getBoundingClientRect();
    setMousePosition({
      x: clientX - left,
      y: clientY - top
    });
  };

  // Modal handler
  const handleOpenModal = (tech) => {
    setSelectedTech(tech);
    setIsModalOpen(true);
  };

  // Close Modal handler
  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedTech(null);
  };

  const handleDownload = () => {
    const cvUrl = '/Dhruv - CV .pdf';
    const link = document.createElement('a');
    link.href = cvUrl;
    link.download = 'Dhruv - CV .pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
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
              to deliver exceptional user experiences. I enhance my development workflow using AI tools 
              and prompt engineering to build smarter, more efficient web solutions.
            </p>
            <div className='flex gap-4'>
              <button 
                onClick={handleDownload}
                className='px-6 py-3 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors duration-300'
              >
                Download CV
              </button>
              <button className='px-6 py-3 border border-purple-600 text-white rounded-lg hover:bg-purple-600/10 transition-colors duration-300'>
                Learn More
              </button>
            </div>
          </div>

          {/* Right Side - Tech Stack */}
          <div className='relative w-full md:w-1/2 h-[400px]'>
          {techStackData.map((tech) => (
            <TechIcon 
              key={tech.id}
              tech={tech}
              onOpenModal={handleOpenModal}
            />
          ))}
          </div>
        </div>
      </div>

      {/* Tech Modal */}
      <TechModal 
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        tech={selectedTech}
      />
    </section>
  );
};
