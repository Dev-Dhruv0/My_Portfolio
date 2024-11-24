import React from "react";
import heroImage from "../assets/Hero_Banner.png";
import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <section id="home" className="relative w-full min-h-screen mx-auto overflow-hidden">
      <div className="relative z-40 max-w-7xl mx-auto px-4 sm:px-6 md:px-8 h-full flex flex-col md:flex-row items-center justify-center gap-6 sm:gap-8 pt-20 sm:pt-24">
        {/* Left side - Text content */}
        <div className="inner-container w-full md:w-1/2 flex flex-col items-start">
          <div className="text-container flex flex-col gap-2">
            <h1 className="relative z-40 text-3xl xs:text-4xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight">
              Hi, I'm{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
                Dhruv Sharma
              </span>
            </h1>
            <TypeAnimation
              sequence={[
                "Frontend Developer",
                1000,
                "UI/UX Designer",
                1000,
                "React Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              className="text-lg xs:text-xl sm:text-2xl text-gray-400"
              repeat={Infinity}
            />
            <div className="flex flex-wrap gap-2 mt-4">
              {["React", "JavaScript", "TypeScript", "Node.js", "Tailwind"].map(
                (tag) => (
                  <span
                    key={tag}
                    className="px-2 xs:px-3 py-1 bg-gray-800 text-gray-300 rounded-full text-xs xs:text-sm"
                  >
                    {tag}
                  </span>
                )
              )}
            </div>
          </div>

          <button className="mt-6 sm:mt-8 px-8 sm:px-12 py-3 sm:py-4 bg-gradient-to-r from-purple-500 to-cyan-500 text-white font-semibold rounded-full hover:opacity-90 transition-all duration-300 text-sm sm:text-base">
            Contact Me
          </button>
        </div>

        {/* Right side - Image/Animation */}
        <div className="w-full md:w-1/2 mt-8 md:mt-0">
          <div className="w-full h-[280px] xs:h-[320px] sm:h-[400px] bg-gradient-to-b from-purple-500/10 to-transparent rounded-2xl flex items-center justify-center overflow-hidden">
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
