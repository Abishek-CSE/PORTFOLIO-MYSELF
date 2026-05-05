import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Github, ExternalLink } from 'lucide-react';

const ProjectModal = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [project, setProject] = useState(null);

    useEffect(() => {
        const handleOpen = (e) => {
            setProject(e.detail);
            setIsOpen(true);
        };
        window.addEventListener('open-project-modal', handleOpen);
        return () => window.removeEventListener('open-project-modal', handleOpen);
    }, []);

    return (
        <AnimatePresence>
            {isOpen && project && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    {/* Backdrop */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-950/90 backdrop-blur-md"
                    />

                    {/* Modal Content */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-4xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        {/* Header Image */}
                        <div className="relative h-48 md:h-64 w-full flex-shrink-0 bg-slate-800">
                            <img
                                src={project.image}
                                alt={project.title}
                                className="w-full h-full object-cover object-top"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-black/30"></div>
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-black/80 backdrop-blur-md rounded-xl transition-colors text-white"
                            >
                                <X size={20} />
                            </button>
                        </div>

                        {/* Content Area */}
                        <div className="flex-grow overflow-y-auto p-6 md:p-10 hide-scrollbar">
                            <div className="flex flex-wrap items-center gap-3 mb-4">
                                <h2 className="text-3xl md:text-4xl font-black text-slate-100">{project.title}</h2>
                                <span className="px-3 py-1 bg-cyan-400/10 text-cyan-300 rounded-full border border-cyan-400/20 text-xs font-bold uppercase tracking-wider">
                                    {project.tag}
                                </span>
                            </div>

                            <p className="text-lg text-slate-400 leading-relaxed mb-8">
                                {project.desc}
                            </p>

                            <div className="mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-widest text-slate-500 mb-4">Technologies Used</h3>
                                <div className="flex flex-wrap gap-2">
                                    {project.tech.map((t, i) => (
                                        <span key={i} className="px-3 py-1.5 bg-slate-800 text-slate-300 rounded-lg text-sm font-medium border border-slate-700">
                                            {t}
                                        </span>
                                    ))}
                                </div>
                            </div>

                            <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-slate-800">
                                <a 
                                    href={project.github} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="px-6 py-3 bg-slate-800 hover:bg-slate-700 text-slate-100 font-bold rounded-xl transition-all flex items-center gap-2"
                                >
                                    <Github size={18} /> View Source Code
                                </a>
                                <a 
                                    href={project.demo} 
                                    target="_blank" 
                                    rel="noreferrer"
                                    className="px-6 py-3 bg-cyan-400 hover:bg-cyan-300 text-slate-950 font-bold rounded-xl transition-all flex items-center gap-2 shadow-[0_10px_20px_rgba(16,185,129,0.2)] hover:shadow-[0_15px_30px_rgba(16,185,129,0.3)]"
                                >
                                    <ExternalLink size={18} /> Live Demo
                                </a>
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ProjectModal;

