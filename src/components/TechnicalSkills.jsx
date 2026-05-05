import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Wifi, Battery, Signal, ChevronRight, Command, Terminal, Cpu, Zap } from 'lucide-react';

const skillsData = [
    {
        category: 'Frontend',
        icon: '🌐',
        color: 'from-blue-500 to-cyan-500',
        gradient: 'from-blue-400 to-cyan-400',
        skills: [
            { name: 'HTML5', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg' },
            { name: 'CSS3', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg' },
            { name: 'JavaScript ES6+', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg' },
            { name: 'React.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg' }
        ]
    },
    {
        category: 'Backend',
        icon: '⚙️',
        color: 'from-teal-500 to-cyan-500',
        gradient: 'from-teal-400 to-cyan-400',
        skills: [
            { name: 'Node.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg' },
            { name: 'Express.js', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg' }
        ]
    },
    {
        category: 'Database',
        icon: '🗄️',
        color: 'from-blue-500 to-teal-500',
        gradient: 'from-blue-400 to-teal-400',
        skills: [
            { name: 'MongoDB', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg' },
            { name: 'SQL', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' }
        ]
    },
    {
        category: 'Tools',
        icon: '🛠️',
        color: 'from-cyan-500 to-blue-500',
        gradient: 'from-cyan-400 to-blue-400',
        skills: [
            { name: 'VS Code', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg' },
            { name: 'Git', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg' },
            { name: 'GitHub', logo: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg' }
        ]
    }
];

const TechnicalSkills = () => {
    const [hoveredIndex, setHoveredIndex] = useState(null);

    return (
        <section id="skills" className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 overflow-hidden py-24">
            {/* iPhone-style blurred background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* iOS-style gradient orbs */}
                <div className="absolute top-20 left-20 w-80 h-80 bg-blue-500/10 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 right-20 w-96 h-96 bg-cyan-500/8 rounded-full blur-[140px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/5 rounded-full blur-[160px]"></div>
            </div>

            {/* Safari-style dot grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22dot%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(56,189,248,0.04)%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23dot)%22/%3E%3C/svg%3E')] opacity-50"></div>

            <div className="relative z-10 max-w-7xl mx-auto px-4">
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
                    <div className="text-[10px] font-mono text-slate-400">Skills.safari</div>
                    <div className="flex items-center gap-1">
                        <Signal size={10} className="text-slate-400" />
                        <Wifi size={10} className="text-slate-400" />
                        <Battery size={12} className="text-slate-400" />
                    </div>
                </motion.div>

                {/* Header Section - iOS Style */}
                <motion.div 
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <motion.div
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-blue-500/10 border border-blue-500/20 mb-6 backdrop-blur-xl"
                    >
                        <Terminal size={14} className="text-blue-300" />
                        <span className="text-xs font-medium text-blue-300 tracking-wide">Technical Stack • iOS</span>
                    </motion.div>
                    
                    <h1 className="text-5xl md:text-6xl font-black mb-4 tracking-tight">
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Tech Stack
                        </span>
                    </h1>
                    <p className="text-slate-400 text-sm max-w-2xl mx-auto">
                        Tools and technologies I work with to build amazing applications
                    </p>
                </motion.div>

                {/* Skills Grid - iPhone Card Style */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
                    {skillsData.map((skill, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ delay: idx * 0.1, type: "spring", stiffness: 200 }}
                            whileHover={{ y: -5 }}
                            onHoverStart={() => setHoveredIndex(idx)}
                            onHoverEnd={() => setHoveredIndex(null)}
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
                                        {skill.category.toLowerCase()}.dev
                                    </div>
                                </div>
                                <div className="w-8"></div>
                            </div>

                            {/* Card Content */}
                            <div className="bg-slate-900/60 backdrop-blur-xl rounded-b-xl border border-slate-700 border-t-0 overflow-hidden">
                                <div className={`h-1 w-full bg-gradient-to-r ${skill.color}`}></div>
                                
                                <div className="p-5">
                                    {/* Category Icon & Title */}
                                    <div className="flex items-center gap-3 mb-4">
                                        <div className="text-2xl">{skill.icon}</div>
                                        <h3 className={`text-lg font-bold bg-gradient-to-r ${skill.gradient} bg-clip-text text-transparent`}>
                                            {skill.category}
                                        </h3>
                                    </div>
                                    
                                    {/* Skills List with Logos - iOS Style */}
                                    <div className="space-y-3">
                                        {skill.skills.map((tech, techIdx) => (
                                            <motion.div
                                                key={techIdx}
                                                initial={{ opacity: 0, x: -10 }}
                                                whileInView={{ opacity: 1, x: 0 }}
                                                viewport={{ once: true }}
                                                transition={{ delay: idx * 0.1 + techIdx * 0.05 }}
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-3 text-slate-300 text-sm group/tech"
                                            >
                                                <motion.div 
                                                    className={`w-1.5 h-1.5 rounded-full bg-gradient-to-r ${skill.color}`}
                                                    animate={hoveredIndex === idx ? { scale: [1, 1.5, 1] } : {}}
                                                    transition={{ duration: 0.5, repeat: Infinity }}
                                                />
                                                <img 
                                                    src={tech.logo} 
                                                    alt={tech.name}
                                                    className="w-5 h-5 object-contain brightness-90 group-hover/tech:brightness-100 group-hover/tech:scale-110 transition-all duration-200"
                                                />
                                                <span className="group-hover/tech:text-white transition-colors duration-200 text-xs">
                                                    {tech.name}
                                                </span>
                                            </motion.div>
                                        ))}
                                    </div>
                                    
                                    {/* iOS Detail Indicator */}
                                    <motion.div
                                        className="flex items-center gap-1 text-[10px] text-cyan-400 mt-4 pt-3 border-t border-slate-800"
                                    >
                                        <span>{skill.skills.length} technologies</span>
                                        <ChevronRight size={10} />
                                    </motion.div>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* iOS-style Terminal Card */}
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-12 max-w-2xl mx-auto"
                >
                    <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden">
                        {/* Terminal Header - iOS Style */}
                        <div className="flex items-center gap-2 px-4 py-2.5 bg-slate-800/30 border-b border-slate-700">
                            <div className="flex gap-1.5">
                                <div className="w-2.5 h-2.5 rounded-full bg-red-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-yellow-500"></div>
                                <div className="w-2.5 h-2.5 rounded-full bg-green-500"></div>
                            </div>
                            <div className="flex-1 flex justify-center">
                                <div className="flex items-center gap-1.5">
                                    <Command size={10} className="text-slate-500" />
                                    <span className="text-[9px] font-mono text-slate-500">terminal</span>
                                </div>
                            </div>
                            <div className="w-8"></div>
                        </div>

                        {/* Terminal Content */}
                        <div className="p-5 font-mono text-xs">
                            <div className="flex items-center gap-2 mb-3">
                                <span className="text-green-400">➜</span>
                                <span className="text-cyan-400">~</span>
                                <span className="text-slate-500">developer</span>
                            </div>
                            
                            <motion.div
                                animate={{ opacity: [0.6, 1, 0.6] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="text-cyan-400 mb-2"
                            >
                                $ npm install developer-skills
                            </motion.div>
                            
                            <motion.div
                                initial={{ width: 0 }}
                                whileInView={{ width: "auto" }}
                                transition={{ delay: 0.5, duration: 0.8 }}
                                className="text-emerald-400 overflow-hidden whitespace-nowrap"
                            >
                                ✓ Successfully installed 24 packages
                            </motion.div>
                            
                            <motion.div
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                transition={{ delay: 0.8 }}
                                className="text-slate-400 mt-3 flex items-center gap-2"
                            >
                                <span className="text-blue-400">$</span>
                                <span>skills --list --expert</span>
                                <motion.span
                                    animate={{ opacity: [0, 1, 0] }}
                                    transition={{ duration: 1, repeat: Infinity }}
                                    className="inline-block w-1.5 h-3 bg-cyan-400"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>

                {/* iOS-style Stats Floating Cards */}
                <div className="absolute bottom-10 left-6 hidden lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                        className="bg-slate-900/60 backdrop-blur-xl rounded-xl px-4 py-2.5 border border-blue-500/30"
                    >
                        <div className="text-[10px] text-blue-400 font-mono">STATUS</div>
                        <div className="text-white font-bold text-sm">ACTIVE</div>
                        <div className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1 animate-pulse"></div>
                    </motion.div>
                </div>
                
                <div className="absolute bottom-10 right-6 hidden lg:block">
                    <motion.div
                        animate={{ y: [0, -8, 0] }}
                        transition={{ duration: 3, repeat: Infinity, delay: 0.5 }}
                        className="bg-slate-900/60 backdrop-blur-xl rounded-xl px-4 py-2.5 border border-cyan-500/30"
                    >
                        <div className="text-[10px] text-cyan-400 font-mono">PROJECTS</div>
                        <div className="text-white font-bold text-sm">15+</div>
                        <Cpu size={12} className="text-cyan-400 mt-1" />
                    </motion.div>
                </div>

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

export default TechnicalSkills;