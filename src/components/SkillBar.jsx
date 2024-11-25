// src/components/SkillBar.jsx
import React, { useState } from "react";
import { motion } from "framer-motion";

export const SkillBar = ({ skill }) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="mb-6 relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            <div className="flex justify-between items-center mb-2">
                <h3 className="text-white font-medium">{skill.name}</h3>
                <span className="text-gray-400">{skill.level}%</span>
            </div>
            <div className="h-3 bg-slate-700 rounded-full overflow-hidden">
                <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.level}%` }}
                    transition={{ duration: 1, ease: "easeOut" }}
                    className="h-full rounded-full"
                    style={{
                        background: `linear-gradient(90deg, ${skill.color}aa, ${skill.color})`,
                    }}
                />
            </div>
            {isHovered && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    className="absolute z-10 mt-2 p-3 bg-gray-800 rounded-lg shadow-xl border border-gray-700 text-sm text-gray-300 w-64"
                >
                    {skill.description}
                </motion.div>
            )}
        </div>
    );
};