import React from 'react';
import { motion } from 'framer-motion';
import { User, Code2, Sparkles, Heart, Zap, Coffee, Rocket, Globe, Wifi, Battery, Signal, ChevronRight } from 'lucide-react';

const CareerObjective = () => {
    const stats = [
        { value: '15+', label: 'Projects', icon: Code2, color: 'from-blue-500 to-cyan-500', detail: 'Completed' },
        { value: '1+', label: 'Years Exp', icon: Zap, color: 'from-teal-500 to-cyan-500', detail: 'Full-Stack' },
        { value: '24/7', label: 'Learning', icon: Coffee, color: 'from-blue-500 to-teal-500', detail: 'Continuous' }
    ];

    const qualities = [
        { text: 'Problem Solver', icon: Rocket, color: 'blue' },
        { text: 'Team Player', icon: Users, color: 'cyan' },
        { text: 'Quick Learner', icon: Zap, color: 'teal' },
        { text: 'Detail Oriented', icon: Eye, color: 'blue' }
    ];

    const skills = [
        { name: 'React.js', level: 90, color: 'blue' },
        { name: 'Node.js', level: 85, color: 'cyan' },
        { name: 'MongoDB', level: 80, color: 'teal' },
        { name: 'Tailwind CSS', level: 88, color: 'blue' }
    ];

    return (
        <section id="about" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* iPhone-style blurred background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* iOS-style gradient orbs */}
                <div className="absolute top-20 right-20 w-72 h-72 bg-blue-500/15 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 left-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-teal-500/8 rounded-full blur-[160px]"></div>
            </div>

            {/* Safari-style grid pattern */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2240%22 height=%2240%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22dot%22 width=%2240%22 height=%2240%22 patternUnits=%22userSpaceOnUse%22%3E%3Ccircle cx=%222%22 cy=%222%22 r=%221%22 fill=%22rgba(56,189,248,0.03)%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23dot)%22/%3E%3C/svg%3E')] opacity-50"></div>

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
                    <div className="text-[10px] font-mono text-slate-400">About.safari</div>
                    <div className="flex items-center gap-1">
                        <Signal size={10} className="text-slate-400" />
                        <Wifi size={10} className="text-slate-400" />
                        <Battery size={12} className="text-slate-400" />
                    </div>
                </motion.div>

                {/* Header Section - iOS Style */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
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
                        <span className="text-xs font-medium text-blue-300 tracking-wide">Developer Profile • iOS</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        About{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Myself
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                        Passionate developer dedicated to crafting exceptional digital experiences
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {/* Left Column - Bio - iPhone Card Style */}
                    <motion.div
                        initial={{ opacity: 0, x: -30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5 }}
                    >
                        {/* Safari Browser Card */}
                        <div className="relative group">
                            {/* Safari Tab Bar */}
                            <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl rounded-t-2xl border border-slate-700 border-b-0">
                                <div className="flex gap-1.5">
                                    <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                    <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                </div>
                                <div className="flex-1 flex justify-center">
                                    <div className="bg-slate-700/50 rounded-lg px-3 py-0.5 text-[10px] text-slate-400 font-mono">
                                        profile.dev
                                    </div>
                                </div>
                                <div className="w-8"></div>
                            </div>

                            {/* Card Content */}
                            <div className="bg-slate-900/60 backdrop-blur-xl rounded-b-2xl border border-slate-700 border-t-0 overflow-hidden">
                                <div className="h-1 w-full bg-gradient-to-r from-blue-500 to-cyan-500"></div>
                                
                                <div className="p-6">
                                    {/* Profile Header */}
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="relative">
                                            <div className="absolute -inset-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-60"></div>
                                            <div className="relative p-3 bg-gradient-to-br from-blue-500 to-cyan-500 rounded-full">
                                                <User size={28} className="text-white" />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="text-xl font-bold text-slate-100">Abishek N</h3>
                                            <div className="flex items-center gap-2 mt-1">
                                                <p className="text-cyan-300 text-sm">Full-Stack Developer</p>
                                                <div className="w-1 h-1 rounded-full bg-cyan-400"></div>
                                                <span className="text-[10px] text-green-400">● Available</span>
                                            </div>
                                        </div>
                                    </div>
                                    
                                    <p className="text-slate-300 leading-relaxed mb-4 text-sm">
                                        I'm a passionate <span className="text-cyan-300 font-semibold">Full-Stack Developer</span> with expertise in the MERN stack. 
                                        I love transforming ideas into reality through clean, efficient, and user-friendly web applications.
                                    </p>
                                    
                                    <p className="text-slate-300 leading-relaxed text-sm">
                                        My journey in web development started with curiosity and has evolved into a commitment 
                                        to creating meaningful digital solutions that make a difference.
                                    </p>

                                    {/* Qualities Tags - iOS Style */}
                                    <div className="flex flex-wrap gap-2 mt-6">
                                        {qualities.map((quality, idx) => (
                                            <span
                                                key={idx}
                                                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-800/80 text-${quality.color}-300 text-xs border border-slate-700 backdrop-blur-sm`}
                                            >
                                                <quality.icon size={12} className={`text-${quality.color}-400`} />
                                                {quality.text}
                                            </span>
                                        ))}
                                    </div>

                                    {/* iOS Detail Button */}
                                    <motion.button
                                        whileHover={{ x: 5 }}
                                        className="flex items-center gap-2 text-xs font-medium text-cyan-400 mt-6 pt-3 border-t border-slate-800"
                                    >
                                        <span>More about me</span>
                                        <ChevronRight size={14} />
                                    </motion.button>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right Column - Stats & Skills */}
                    <motion.div
                        initial={{ opacity: 0, x: 30 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="space-y-6"
                    >
                        {/* Stats Grid - iPhone Style */}
                        <div className="grid grid-cols-3 gap-3">
                            {stats.map((stat, idx) => (
                                <motion.div
                                    key={idx}
                                    whileHover={{ y: -4 }}
                                    className="relative group"
                                >
                                    <div className="bg-slate-900/40 backdrop-blur-xl rounded-xl border border-slate-700 p-4 text-center overflow-hidden">
                                        <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}`}></div>
                                        <div className={`inline-flex p-2 rounded-lg bg-gradient-to-r ${stat.color} bg-opacity-10 mb-2`}>
                                            <stat.icon size={16} className="text-cyan-300" />
                                        </div>
                                        <div className="text-xl font-black text-slate-100">{stat.value}</div>
                                        <div className="text-[10px] text-slate-400 mt-0.5">{stat.label}</div>
                                        <div className="text-[8px] text-slate-500 mt-1">{stat.detail}</div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>

                        {/* Skills Section - iOS Style */}
                        <div className="relative group">
                            <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 border-b border-slate-700">
                                    <Code2 size={14} className="text-cyan-300" />
                                    <h3 className="text-sm font-semibold text-slate-200">Technical Skills</h3>
                                </div>
                                <div className="p-5 space-y-4">
                                    {skills.map((skill, idx) => (
                                        <div key={idx}>
                                            <div className="flex justify-between mb-1.5">
                                                <span className="text-xs font-medium text-slate-300">{skill.name}</span>
                                                <span className="text-xs text-cyan-300">{skill.level}%</span>
                                            </div>
                                            <div className="h-1.5 bg-slate-800 rounded-full overflow-hidden">
                                                <motion.div
                                                    initial={{ width: 0 }}
                                                    whileInView={{ width: `${skill.level}%` }}
                                                    viewport={{ once: true }}
                                                    transition={{ duration: 1, delay: idx * 0.1 }}
                                                    className={`h-full rounded-full bg-gradient-to-r from-${skill.color}-500 to-cyan-500`}
                                                ></motion.div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Focus Areas - iPhone Style */}
                        <div className="relative group">
                            <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden">
                                <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/30 border-b border-slate-700">
                                    <Globe size={14} className="text-cyan-300" />
                                    <h3 className="text-sm font-semibold text-slate-200">Core Focus</h3>
                                </div>
                                <div className="p-5 space-y-3">
                                    {[
                                        { text: 'Clean & Maintainable Code', desc: 'Writing code that is easy to understand and scale', icon: '✨' },
                                        { text: 'Responsive Design', desc: 'Creating seamless experiences across all devices', icon: '📱' },
                                        { text: 'Performance First', desc: 'Optimizing for speed and efficiency', icon: '⚡' }
                                    ].map((item, idx) => (
                                        <div key={idx} className="flex gap-3 p-3 rounded-xl bg-slate-800/30 border border-slate-700/50">
                                            <div className="text-lg">{item.icon}</div>
                                            <div>
                                                <p className="text-slate-200 font-medium text-sm">{item.text}</p>
                                                <p className="text-slate-500 text-xs mt-0.5">{item.desc}</p>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div>
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

// Helper components
const Users = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
        <circle cx="9" cy="7" r="4"/>
        <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
        <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
    </svg>
);

const Eye = ({ size, className }) => (
    <svg xmlns="http://www.w3.org/2000/svg" width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
        <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"/>
        <circle cx="12" cy="12" r="3"/>
    </svg>
);

export default CareerObjective;