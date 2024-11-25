import React from "react";
import heroImage from "../assets/Hero_Banner.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 md:px-12 h-full flex flex-col md:flex-row items-center justify-center gap-8">
        {/* Left side - Text content */}
        <div className="inner-container w-full md:w-1/2 flex flex-col items-start">
          <div className="text-container flex flex-col gap-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-white">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Dhruv Sharma
              </span>
            </h1>
            <TypeAnimation
              sequence={["Frontend Developer", 1000, "UI/UX Designer", 1000, "React Developer", 1000]}
              wrapper="span"
              speed={50}
              className="text-gray-400 text-xl sm:text-2xl"
              repeat={Infinity}
            />// Add below your description
            <div className="flex flex-wrap gap-2 mt-4">
              {['React', 'JavaScript', 'TypeScript', 'Node.js', 'Tailwind'].map((tag) => (
                <span 
                  key={tag}
                  className="px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <button className="mt-8 px-12 py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300">
            Contact Me
          </button>
        </div>

        {/* Right side - Image/Animation */}
        <div className="w-full md:w-1/2">
          <div className="w-full h-[350px] sm:h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl flex items-center justify-center overflow-hidden">
            <div className="animate-float">
              <img
                src={heroImage}
                alt="Dhruv Sharma"
                className="w-full h-full object-cover rounded-2xl hover:scale-105 transition-transform duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
