import React, { useMemo, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Sparkles, Eye, ArrowRight, Code2, Terminal, Wifi, Battery, Signal, ChevronRight } from 'lucide-react';

const projectsData = [
    {
        title: 'Abishek Studio Agency',
        tag: 'Next.js',
        desc: 'Modern digital agency platform with responsive layouts, smooth UI interactions, and structured service-focused pages.',
        tech: ['Next.js', 'Tailwind CSS', 'Vercel'],
        image: '/abishek_studio.png',
        github: 'https://github.com/Abishek-CSE/ABISHEK_STUDIO_AGENCY',
        demo: 'https://abishek-studio-agency-q436.vercel.app/',
        gradient: 'from-blue-500/20 to-cyan-500/20'
    },
    {
        title: 'Cricket E-Commerce',
        tag: 'Front End',
        desc: 'Responsive cricket e-commerce platform with dynamic UI rendering and state management using React hooks.',
        tech: ['React', 'Hooks', 'Tailwind CSS'],
        image: '/cricket_store.png',
        github: 'https://github.com/Abishek-CSE/CRICKET-E-COMMERCE-WEBSITE',
        demo: 'https://cricket-e-commerce-website-8ztt.vercel.app/',
        gradient: 'from-teal-500/20 to-cyan-500/20'
    },
    {
        title: 'Digital Time Capsule',
        tag: 'Full Stack',
        desc: 'Secure digital content storage and retrieval application with timestamp-based access control.',
        tech: ['React', 'Node.js', 'MongoDB'],
        image: '/time_capsule.png',
        github: 'https://github.com/Abishek-CSE/DIGITIAL-TIME-CAPSULE---TIMESNAP',
        demo: 'https://digitial-time-capsule-timesnap.vercel.app/',
        gradient: 'from-blue-500/20 to-teal-500/20'
    },
    {
        title: 'Skill Sharing Platform',
        tag: 'Full Stack',
        desc: 'Community-driven platform for skill exchange with user profiles and interactive listings.',
        tech: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
        image: '/skill_sharing.png',
        github: 'https://github.com/Abishek-CSE/SKILL-SHARING-PLATFORM---SKILLBAR',
        demo: 'https://skill-sharing-platform-skillbar.vercel.app/',
        gradient: 'from-cyan-500/20 to-blue-500/20'
    },
    {
        title: 'Inside Chennai',
        tag: 'Front End',
        desc: 'Interactive webpage exploring Chennai built using Bootstrap, HTML, CSS, and JavaScript DOM manipulation.',
        tech: ['Bootstrap', 'HTML', 'CSS', 'JavaScript'],
        image: '/inside_chennai.png',
        github: 'https://github.com/Abishek-CSE/INSIDE-CHENNAI-WEBPAGE-USING-BOOTSTRAP',
        demo: 'https://abishek-cse.github.io/INSIDE-CHENNAI-WEBPAGE-USING-BOOTSTRAP/',
        gradient: 'from-orange-500/20 to-yellow-500/20'
    },
    {
        title: 'Netflix Clone',
        tag: 'Front End',
        desc: 'A responsive Netflix clone featuring a modern, sleek UI with movie thumbnails and a hero banner.',
        tech: ['React', 'HTML', 'CSS', 'JavaScript'],
        image: '/netflix_clone.png',
        github: 'https://github.com/Abishek-CSE/NETFLIX-CLONE-',
        demo: 'https://vercel.com/abishek-cses-projects/netflix-clone',
        gradient: 'from-red-500/20 to-pink-500/20'
    },
    {
        title: 'Tamil Traditional Books',
        tag: 'Front End',
        desc: 'A beautiful and interactive webpage dedicated to showcasing and preserving traditional Tamil books and ancient literature.',
        tech: ['HTML', 'CSS', 'JavaScript'],
        image: '/tamil_books.png',
        github: 'https://github.com/Abishek-CSE/TAMIL-TRADITIONAL-BOOKS-WEBPAGE',
        demo: 'https://abishek-cse.github.io/TAMIL-TRADITIONAL-BOOKS-WEBPAGE/',
        gradient: 'from-amber-500/20 to-yellow-600/20'
    }
];

const Projects = () => {
    const [activeTag, setActiveTag] = useState('All');
    const [hoveredCard, setHoveredCard] = useState(null);

    const filterOptions = useMemo(() => {
        const tags = ['All', ...new Set(projectsData.map(p => p.tag))];
        return tags;
    }, []);

    const filteredProjects = useMemo(() => {
        if (activeTag === 'All') return projectsData;
        return projectsData.filter(p => p.tag === activeTag);
    }, [activeTag]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: { staggerChildren: 0.1 }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <section id="projects" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* iPhone-style blurred background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* iOS-style gradient orbs */}
                <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/8 rounded-full blur-[140px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[160px]"></div>
                
                {/* Safari-style grid pattern */}
                <div className={`absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width="40" height="40" xmlns="http://www.w3.org/2000/svg"%3E%3Cdefs%3E%3Cpattern id="dot" width="40" height="40" patternUnits="userSpaceOnUse"%3E%3Ccircle cx="2" cy="2" r="1" fill="rgba(56,189,248,0.03)"/%3E%3C/pattern%3E%3C/defs%3E%3Crect width="100%25" height="100%25" fill="url(%23dot)"/%3E%3C/svg%3E')] opacity-50`}></div>
                
                {/* Floating code elements */}
                <motion.div 
                    animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
                    transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[15%] left-[5%] text-blue-400/5"
                >
                    <Code2 size={60} />
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 20, 0], rotate: [0, -5, 0] }}
                    transition={{ duration: 9, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[20%] right-[8%] text-cyan-400/5"
                >
                    <Terminal size={50} />
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto px-4 relative z-10">
                {/* iOS Status Bar */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center mb-8 px-5 py-2 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 max-w-md mx-auto"
                >
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
                    <div className="text-[10px] font-mono text-slate-400">Projects.safari</div>
                    <div className="flex items-center gap-1">
                        <Signal size={10} className="text-slate-400" />
                        <Wifi size={10} className="text-slate-400" />
                        <Battery size={12} className="text-slate-400" />
                    </div>
                </motion.div>

                {/* Header Section - iOS Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-xl"
                    >
                        <Sparkles size={14} className="text-blue-300" />
                        <span className="text-xs font-medium text-blue-300 tracking-wide">Portfolio • iOS</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        Featured{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Creations
                        </span>
                    </h2>
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                        Explore my latest work where creativity meets functionality
                    </p>
                </motion.div>

                {/* Filter Buttons - iOS Style */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 }}
                    className="flex flex-wrap justify-center gap-2 mb-12"
                >
                    {filterOptions.map((option) => (
                        <button
                            key={option}
                            onClick={() => setActiveTag(option)}
                            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                                activeTag === option
                                    ? 'text-white'
                                    : 'text-slate-400 hover:text-slate-200'
                            }`}
                        >
                            {activeTag === option && (
                                <motion.span
                                    layoutId="activeTab"
                                    className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full"
                                    transition={{ type: "spring", duration: 0.5 }}
                                />
                            )}
                            <span className="relative z-10">{option}</span>
                        </button>
                    ))}
                </motion.div>

                {/* Projects Grid - iPhone Card Style */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-6"
                >
                    <AnimatePresence mode="wait">
                        {filteredProjects.map((project, index) => (
                            <motion.div
                                key={project.title}
                                variants={cardVariants}
                                layout
                                initial="hidden"
                                animate="visible"
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                onMouseEnter={() => setHoveredCard(index)}
                                onMouseLeave={() => setHoveredCard(null)}
                                className="group relative"
                            >
                                {/* Safari Browser Card */}
                                <div className="flex items-center gap-2 px-3 py-1.5 bg-slate-800/50 backdrop-blur-xl rounded-t-xl border border-slate-700 border-b-0">
                                    <div className="flex gap-1">
                                        <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                        <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                                    </div>
                                    <div className="flex-1 flex justify-center">
                                        <div className="bg-slate-700/50 rounded-md px-2 py-0.5 text-[8px] text-slate-400 font-mono">
                                            {project.title.toLowerCase().slice(0, 15)}...
                                        </div>
                                    </div>
                                    <div className="w-8"></div>
                                </div>

                                {/* Card Content */}
                                <div className="relative bg-slate-900/60 backdrop-blur-xl rounded-b-xl border border-slate-700 border-t-0 overflow-hidden">
                                    <div className={`h-1 w-full bg-gradient-to-r ${project.gradient.replace('/20', '')}`}></div>
                                    
                                    {/* Image Section */}
                                    <div className="relative h-48 overflow-hidden bg-gradient-to-br from-slate-800 to-slate-900">
                                        <img
                                            src={project.image}
                                            alt={project.title}
                                            className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-110"
                                        />
                                        {/* Overlay Gradient */}
                                        <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
                                        
                                        {/* Tag Badge - iOS Style */}
                                        <div className="absolute top-3 right-3">
                                            <span className="px-2.5 py-1 bg-black/50 backdrop-blur-md rounded-full text-[10px] font-medium text-cyan-300 border border-cyan-400/30">
                                                {project.tag}
                                            </span>
                                        </div>

                                        {/* Action Buttons Overlay - iOS Style */}
                                        <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center justify-center gap-4">
                                            <motion.a
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.github}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2.5 bg-slate-900 rounded-full hover:bg-slate-800 transition-all border border-slate-700"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <Github size={18} className="text-white" />
                                            </motion.a>
                                            <motion.a
                                                whileHover={{ scale: 1.1, y: -2 }}
                                                whileTap={{ scale: 0.95 }}
                                                href={project.demo}
                                                target="_blank"
                                                rel="noreferrer"
                                                className="p-2.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full hover:from-blue-600 hover:to-cyan-600 transition-all shadow-lg shadow-blue-500/25"
                                                onClick={(e) => e.stopPropagation()}
                                            >
                                                <ExternalLink size={18} className="text-white" />
                                            </motion.a>
                                        </div>
                                    </div>

                                    {/* Content Section */}
                                    <div className="p-5">
                                        <h3 className="text-lg font-bold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors">
                                            {project.title}
                                        </h3>
                                        <p className="text-slate-400 text-xs mb-4 leading-relaxed line-clamp-2">
                                            {project.desc}
                                        </p>
                                        
                                        {/* Tech Stack - iOS Tags */}
                                        <div className="flex flex-wrap gap-1.5 mb-4">
                                            {project.tech.map((tech, idx) => (
                                                <span
                                                    key={idx}
                                                    className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700"
                                                >
                                                    {tech}
                                                </span>
                                            ))}
                                        </div>

                                        {/* iOS Detail Indicator */}
                                        <motion.div
                                            initial={{ opacity: 0, x: -10 }}
                                            animate={{ opacity: hoveredCard === index ? 1 : 0, x: hoveredCard === index ? 0 : -10 }}
                                            className="flex items-center gap-1 text-xs font-medium text-cyan-400"
                                        >
                                            <span>View Project</span>
                                            <ChevronRight size={12} />
                                        </motion.div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-20"
                    >
                        <p className="text-slate-400">No projects found for this category.</p>
                    </motion.div>
                )}

                {/* iOS Home Indicator */}
                <motion.div 
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="flex justify-center mt-12"
                >
                    <div className="w-32 h-1 bg-slate-700 rounded-full"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;