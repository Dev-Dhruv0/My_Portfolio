import React from 'react';
import { motion } from 'framer-motion';
import { skillsData } from '../data/skillsData';
import { CategorySection } from './CategorySection';

export const Skills = () => {
  return (
    <section id='skills' className='w-full min-h-screen bg-primary py-20 px-6'>
      <div className='max-w-7xl mx-auto'>
        {/* Header */}
        <div className='text-center mb-16'>
          <motion.h1
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className='text-4xl md:text-5xl font-bold text-white mb-4'
          >
            Skills & Expertise
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className='text-gray-400 text-lg'
          >
            My technical skills and proficiency levels
          </motion.p>
        </div>

        {/* Skills Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {skillsData.categories.map((category) => (
            <CategorySection key={category.id} category={category}/>
          ))}
        </div>
      </div>
    </section>
  )
}
