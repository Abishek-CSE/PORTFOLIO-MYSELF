import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Printer, Mail, Phone, Linkedin, Github, MapPin } from 'lucide-react';

const ResumeModal = () => {
    const [isOpen, setIsOpen] = useState(false);

    useEffect(() => {
        const handleOpen = () => setIsOpen(true);
        window.addEventListener('open-resume', handleOpen);
        return () => window.removeEventListener('open-resume', handleOpen);
    }, []);

    const handlePrint = () => {
        window.print();
    };

    return (
        <AnimatePresence>
            {isOpen && (
                <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setIsOpen(false)}
                        className="absolute inset-0 bg-slate-950/95 backdrop-blur-md"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.9, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9, y: 20 }}
                        className="relative w-full max-w-5xl h-[90vh] bg-white text-slate-900 rounded-3xl overflow-hidden shadow-2xl flex flex-col"
                    >
                        <div className="flex items-center justify-between px-6 py-4 bg-gradient-to-r from-slate-100 to-white border-b border-slate-200">
                            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-500">Resume Preview</h2>
                            <div className="flex items-center gap-3">
                                <button
                                    onClick={handlePrint}
                                    className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-600"
                                    title="Print Resume"
                                >
                                    <Printer size={20} />
                                </button>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-2 hover:bg-slate-200 rounded-xl transition-colors text-slate-600"
                                >
                                    <X size={20} />
                                </button>
                            </div>
                        </div>

                        <div className="flex-grow overflow-y-auto p-8 md:p-12 bg-white">
                            <div id="resume-content" className="max-w-4xl mx-auto flex flex-col gap-8">
                                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start text-center md:text-left border-b-2 border-slate-200 pb-8">
                                    <div className="w-28 h-28 md:w-32 md:h-32 rounded-2xl overflow-hidden bg-slate-100 border-2 border-slate-200 flex-shrink-0">
                                        <img 
                                            src="https://github.com/Abishek-CSE.png" 
                                            alt="Abishek N" 
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                    <div className="flex-grow">
                                        <h1 className="text-4xl md:text-5xl font-black uppercase tracking-tight text-slate-950 mb-2">ABISHEK N</h1>
                                        <p className="text-xl font-bold bg-gradient-to-r from-cyan-600 to-amber-600 bg-clip-text text-transparent mb-6 uppercase tracking-wider">MERN DEVELOPER</p>
                                        
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-y-2 gap-x-8 text-sm text-slate-600">
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <Mail size={16} className="text-slate-400" />
                                                abisheknavas500@gmail.com
                                            </div>
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <Phone size={16} className="text-slate-400" />
                                                +91 93605 18517
                                            </div>
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <Linkedin size={16} className="text-slate-400" />
                                                linkedin.com/in/abishek0786
                                            </div>
                                            <div className="flex items-center gap-2 justify-center md:justify-start">
                                                <Github size={16} className="text-slate-400" />
                                                github.com/Abishek-CSE
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Rest of your resume content remains the same */}
                                {/* ... (keep your existing resume sections) ... */}
                            </div>
                        </div>
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    );
};

export default ResumeModal;