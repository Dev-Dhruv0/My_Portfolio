import React from 'react'
import { motion } from 'framer-motion'
import { SkillBar } from './SkillBar'

export const CategorySection = ({ category }) => {
  return (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className='bg-gray-900/50 backdrop-blur-sm p-6 rounded-xl border border-gray-800'
    >
        <div className='flex items-center gap-3 mb-6'>
            <span className='text-2xl'>{category.icon}</span>
            <h2 className='text-xl font-bold text-white'>{category.name}</h2>
        </div>
        <div>
            {category.skills.map((skill, index) => (
                <SkillBar key={index} skill={skill}/>
            ))}
        </div>
    </motion.div>
  );
};
