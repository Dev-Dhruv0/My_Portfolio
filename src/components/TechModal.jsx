import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TechModal = ({ isOpen, onClose, tech }) => {
  if (!tech) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.75 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.75 }}
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
          >
            <div className="bg-gray-900 rounded-xl p-6 max-w-lg w-full border border-gray-700 shadow-xl">
              {/* Header */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 p-2 bg-gray-800 rounded-lg">
                  <img src={tech.icon} alt={tech.name} className="w-full h-full object-contain" />
                </div>
                <h2 className="text-2xl font-bold text-white">{tech.name}</h2>
              </div>

              {/* Description */}
              <p className="text-gray-300 mb-6">{tech.description}</p>

              {/* Projects */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Projects</h3>
                <div className="space-y-3">
                  {tech.projects.map((project, index) => (
                    <div key={index} className="bg-gray-800 p-3 rounded-lg">
                      <h4 className="text-white font-medium">{project.name}</h4>
                      <p className="text-gray-400 text-sm">{project.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Resources */}
              <div className="mb-6">
                <h3 className="text-lg font-semibold text-white mb-3">Resources</h3>
                <div className="space-y-2">
                  {tech.resources.map((resource, index) => (
                    <a
                      key={index}
                      href={resource.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      {resource.title}
                    </a>
                  ))}
                </div>
              </div>

              {/* Close Button */}
              <button
                onClick={onClose}
                className="w-full py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors"
              >
                Close
              </button>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default TechModal;