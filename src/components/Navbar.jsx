import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa";

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
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/Dev-Dhruv0" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dhruv-sharma-376572241" },
    { icon: <FaPinterest className="w-5 h-5" />, href: "https://pinterest.com/yourusername" },
  ];

  // States
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle Scroll
  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.getElementById('home');
      const heroBottom = heroSection?.getBoundingClientRect().bottom;
      
      if (heroBottom <= 0) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }

      // Update active section based on scroll position
      const sections = navLinks.map(link => link.href.slice(1));
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      
      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b ${
        scrolled 
          ? "bg-gray-900/70 backdrop-blur-md border-gray-800/30" 
          : "bg-transparent border-transparent"
      }`}>
        {/* Inner Nav */}
        <div className="max-w-7xl mx-auto px-6 sm:px-8 md:px-12">
          {/* Content Wrapper */}
          <div className="flex items-center justify-between py-5">
            {/* Logo Name */}
            <a href="#home" className="text-white text-xl font-bold cursor-pointer">DS</a>

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
                  } hover:text-white transition-all duration-300 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-0 after:h-[2px] after:bg-purple-500 after:transition-all after:duration-300 hover:after:w-full`}
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
              className="md:hidden text-white p-2"
              onClick={() => setIsOpen(!isOpen)}
            >
              <div className="flex flex-col gap-1.5">
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? "rotate-45 translate-y-2" : ""
                }`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? "opacity-0" : ""
                }`}></span>
                <span className={`block h-0.5 w-6 bg-white transition-all duration-300 ${
                  isOpen ? "-rotate-45 -translate-y-2" : ""
                }`}></span>
              </div>
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed top-[4rem] left-0 w-full bg-primary/95 backdrop-blur-sm py-6 px-8 transition-all duration-300 ease-in-out ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.title}
              href={link.href}
              className={`${
                activeSection === link.href.slice(1)
                  ? "text-purple-500 font-medium"
                  : "text-gray-300"
              } hover:text-white transition-colors duration-300`}
              onClick={() => setIsOpen(false)}
            >
              {link.title}
            </a>
          ))}

          {/* Social Links - Mobile */}
          <div className="flex items-center gap-6 mt-4 pt-6 border-t border-gray-700 w-full justify-center">
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