import React, { useEffect, useState } from "react";
import { FaGithub, FaLinkedin, FaPinterest } from "react-icons/fa";

export const Navbar = () => {
  // Navlinks array for desktop
  const navLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  // Additional link for mobile
  const mobileNavLinks = [
    { title: "About", href: "#about" },
    { title: "Skills", href: "#skills" },
    { title: "Home", href: "#home" },
    { title: "Projects", href: "#projects" },
    { title: "Contact", href: "#contact" },
  ];

  // Social Links
  const socialLinks = [
    { icon: <FaGithub className="w-5 h-5" />, href: "https://github.com/Dev-Dhruv0" },
    { icon: <FaLinkedin className="w-5 h-5" />, href: "https://www.linkedin.com/in/dhruv-sharma-376572241" },
    { icon: <FaPinterest className="w-5 h-5" />, href: "https://in.pinterest.com/who0me0dhruv/" },
  ];

  // States
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Handle smooth scroll
  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      const navHeight = 60; // Height of your navbar
      const bottomNavHeight = 64; // Height of bottom navigation
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - navHeight;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

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
          const bottomNavHeight = 64; // Height of bottom navigation
          return rect.top <= (window.innerHeight - bottomNavHeight) / 2 && rect.bottom >= (window.innerHeight - bottomNavHeight) / 2;
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

            {/* Desktop Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <a
                  key={link.title}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
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
          </div>
        </div>
      </nav>

      {/* Mobile Bottom Navigation */}
      <div className="fixed bottom-0 left-0 right-0 md:hidden z-[9999]">
        {/* Curved Navigation Background */}
        <div className="relative bg-gray-900/95 backdrop-blur-md">
          {/* Curved Shape at Top */}
          <div className="absolute -top-3 left-0 w-full h-3 overflow-hidden">
            <div className="w-full h-6 bg-gray-900/95 backdrop-blur-md rounded-t-[32px]" />
          </div>

          {/* Active Indicator */}
          {mobileNavLinks.map((link, index) => (
            activeSection === link.href.slice(1) && (
              <div 
                key={`indicator-${link.title}`}
                className="absolute -top-1.5 transition-all duration-300 ease-in-out"
                style={{
                  left: `${index * 20}%`,
                  width: '20%'
                }}
              >
                <div className="w-full flex justify-center">
                  <div className="w-1 h-1 rounded-full bg-purple-500" />
                </div>
              </div>
            )
          ))}

          {/* Navigation Items */}
          <div className="relative flex items-center justify-around px-4 py-4">
            {mobileNavLinks.map((link) => (
              <a
                key={link.title}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="group relative flex flex-col items-center w-1/5"
              >
                {/* Icon Container */}
                <div className={`relative transition-all duration-300 ${
                  activeSection === link.href.slice(1) 
                    ? '-translate-y-2' 
                    : 'group-hover:-translate-y-1'
                }`}>
                  {/* Icons */}
                  {link.title === "Home" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition-colors duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-300'
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                    </svg>
                  )}
                  {link.title === "About" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition-colors duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-300'
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                  )}
                  {link.title === "Skills" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition-colors duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-300'
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  )}
                  {link.title === "Projects" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition-colors duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-300'
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" />
                    </svg>
                  )}
                  {link.title === "Contact" && (
                    <svg xmlns="http://www.w3.org/2000/svg" className={`w-6 h-6 transition-colors duration-300 ${
                      activeSection === link.href.slice(1) ? 'text-purple-500' : 'text-gray-400 group-hover:text-gray-300'
                    }`} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  )}
                </div>

                {/* Label */}
                <span className={`text-xs font-medium mt-1 transition-colors duration-300 ${
                  activeSection === link.href.slice(1)
                    ? 'text-purple-500'
                    : 'text-gray-400 group-hover:text-gray-300'
                }`}>
                  {link.title}
                </span>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Spacer */}
      <div className="h-16 md:hidden">
        {/* Spacer for bottom navigation */}
      </div>
    </>
  );
};