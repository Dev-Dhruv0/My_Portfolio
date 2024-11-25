import { motion } from "framer-motion";
import { useState } from "react";
import { techStackData } from "../data/techStack";

const HoverCard = ({ tech }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      className="absolute z-30 bottom-full left-1/2 transform -translate-x-1/2 mb-4 w-60"
    >
      <div className="bg-gray-900/90 backdrop-blur-sm p-4 rounded-xl shadow-xl border border-gray-700">
        <h3 className="text-white font-semibold mb-2">{tech.name}</h3>
        <p className="text-gray-300 text-sm mb-2">{tech.description}</p>
        <div className="flex items-center justify-between text-sm">
          <span className="text-purple-400">{tech.category}</span>
        </div>
        <div className="mt-2 w-full bg-gray-700 h-2 rounded-full">
          <div
            className="h-full bg-gradient-to-r from-purple-500 to-cyan-500 rounded-full"
            style={{ width: `${tech.proficiency}%` }}
          />
        </div>
      </div>
    </motion.div>
  );
};

const TechIcon = ({ tech, onOpenModal }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <motion.div
      className="relative cursor-pointer"
      animate={{
        y: tech.animation.y,
        rotate: tech.animation.rotate,
        transition: {
          duration: tech.animation.duration,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
          delay: tech.animation.delay,
        },
      }}
      whileHover={{ scale: 1.1 }}
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      onClick={() => onOpenModal(tech)}
      style={{
        position: 'absolute',
        ...tech.position,
      }}
    >
      <motion.div className="w-16 h-16 md:w-20 md:h-20 p-3 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 shadow-lg">
        <img 
          src={tech.icon} 
          alt={tech.name}
          className="w-full h-full object-contain filter drop-shadow-lg"
        />
      </motion.div>
      {isHovered && <HoverCard tech={tech} />}
    </motion.div>
  );
};

export default TechIcon;
