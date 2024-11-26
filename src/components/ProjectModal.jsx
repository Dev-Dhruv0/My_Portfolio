import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ImageGallery } from "./ImageGallery";

// Base64 placeholder image
const placeholderImage = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB4PSIwIiB5PSIwIiB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iIzFmMjkzNyIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LWZhbWlseT0iQXJpYWwiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiIGR5PSIuM2VtIj5JbWFnZSBub3QgYXZhaWxhYmxlPC90ZXh0Pjwvc3ZnPg==";

export const ProjectModal = ({ project, isOpen, onClose }) => {
    const [imgSrc, setImgSrc] = useState(placeholderImage);

    useEffect(() => {
        if (project?.thumbnail) {
            setImgSrc(project.thumbnail);
        }
    }, [project]);
    
    const handleImageError = () => {
        setImgSrc(placeholderImage);
    };

    return (
        <AnimatePresence>
            {isOpen && project && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onClick={onClose}
                    className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4"
                >
                    <motion.div
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        exit={{ scale: 0.9, opacity: 0 }}
                        onClick={(e) => e.stopPropagation()}
                        className="bg-gray-800 rounded-xl p-6 max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
                    >
                        {/* Header */}
                        <div className="flex justify-between items-start mb-6">
                            <h2 className="text-2xl font-bold text-white">{project.title}</h2>
                            <button
                                onClick={onClose}
                                className="text-gray-400 hover:text-white transition-colors"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    className="h-6 w-6"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={2}
                                        d="M6 18L18 6M6 6l12 12"
                                    />
                                </svg>
                            </button>
                        </div>

                        {/* Project Image */}
                        <div className="rounded-lg overflow-hidden mb-6 bg-gray-900">
                            <ImageGallery images={project.images}/>
                        </div>

                        {/* Project Details */}
                        <div className="space-y-4">
                            <p className="text-gray-300">{project.longDescription}</p>

                            {/* Technologies */}
                            <div>
                                <h3 className="text-white font-semibold mb-2">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, index) => (
                                        <span
                                            key={index}
                                            className="px-3 py-1 bg-gray-700 rounded-full text-sm text-gray-300"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            {/* Links */}
                            <div className="flex gap-4 pt-4">
                                <a
                                    href={project.links.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-gray-700 hover:bg-gray-600 text-white rounded-lg transition-colors duration-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    View on GitHub
                                </a>
                                <a
                                    href={project.links.live}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="px-6 py-2 bg-purple-600 hover:bg-purple-500 text-white rounded-lg transition-colors duration-300"
                                    onClick={(e) => e.stopPropagation()}
                                >
                                    Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
};
