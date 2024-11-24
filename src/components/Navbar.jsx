import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

export const Navbar = () => {
  // Navlinks array
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  // Social Links
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/yourusername" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://linkedin.com/in/yourusername" },
    { icon: <FaTwitter className="w-5 h-5" />, href: "https://twitter.com/yourusername" },
  ];

  // States
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      try {
        // Check scroll position for navbar background
        const scrollPosition = window.scrollY;
        setScrolled(scrollPosition > 50);

        // Update active section
        const sections = navLinks.map(link => link.href.slice(1));
        let currentSection = 'home';

        for (const section of sections) {
          const element = document.getElementById(section);
          if (element) {
            const rect = element.getBoundingClientRect();
            if (rect.top <= 100 && rect.bottom >= 100) {
              currentSection = section;
              break;
            }
          }
        }
        
        setActiveSection(currentSection);
      } catch (error) {
        console.error('Error in scroll handler:', error);
      }
    };

    // Add scroll event listener
    window.addEventListener("scroll", handleScroll);
    
    // Initial check
    handleScroll();

    // Cleanup
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Handle Click Outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen]);

  return (
    <>
      {/* Navbar Container */}
      <nav className={`fixed top-0 left-0 right-0 z-30 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-gray-900/70 backdrop-blur-md border-gray-800/30" 
          : "bg-transparent border-transparent"
      }`}>
        {/* Inner Nav */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Content Wrapper */}
          <div className="flex items-center justify-between py-4 sm:py-5">
            {/* Logo Name */}
            <a href="#home" className="text-white text-lg sm:text-xl font-bold cursor-pointer relative z-30">DS</a>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  className={`${
                    activeSection === link.href.slice(1)
                      ? "text-purple-500 font-medium"
                      : "text-gray-300"
                  } text-sm lg:text-base hover:text-white transition-all duration-300`}
                >
                  {link.title}
                </a>
              ))}

              {/* Social Links - Desktop */}
              <div className="flex items-center gap-4 ml-4 border-l pl-4 border-gray-700">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-300 hover:text-white transition-colors duration-300"
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white p-1.5 sm:p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}></span>
                <span className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}></span>
                <span className={`block h-0.5 w-5 sm:w-6 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[3.25rem] sm:top-[3.75rem] right-0 w-[60%] bg-gray-900/95 backdrop-blur-sm py-6 px-6 sm:px-8 transition-all duration-300 ease-in-out z-50 border-l border-gray-800/50 h-[calc(100vh-3.25rem)] sm:h-[calc(100vh-3.75rem)] ${
          isOpen
            ? "opacity-100 translate-x-0"
            : "opacity-0 translate-x-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-start gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`${
                activeSection === link.href.slice(1)
                  ? "text-purple-500 font-medium"
                  : "text-gray-300"
              } text-lg hover:text-white transition-colors duration-300`}
            >
              {link.title}
            </a>
          ))}
          
          {/* Social Links - Mobile */}
          <div className="flex items-center gap-4 pt-6 border-t border-gray-800/50 w-full">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-300 hover:text-white transition-colors duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};