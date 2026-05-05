import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award, Calendar, Star, Sparkles, MapPin, Code2, Terminal, BookOpen, Wifi, Battery, Signal } from 'lucide-react';

const educationData = [
    {
        school: 'Sona College of Technology',
        degree: 'BE - Computer Science',
        period: '2021-2025',
        result: 'CGPA: 7.8',
        location: 'Salem, India',
        achievements: ['Dean\'s List', 'Project Excellence'],
        color: 'from-blue-500 to-cyan-500'
    },
    {
        school: 'Rasi International School',
        degree: 'Higher Secondary (HSC)',
        period: '2019-2021',
        result: '80%',
        location: 'Salem, India',
        achievements: ['Science Olympiad', 'Best Student Award'],
        color: 'from-teal-500 to-cyan-500'
    },
    {
        school: 'SRV Higher Secondary School',
        degree: 'Secondary School (SSLC)',
        period: '2018-2019',
        result: '78%',
        location: 'Salem, India',
        achievements: ['Perfect Attendance', 'Mathematics Excellence'],
        color: 'from-blue-500 to-teal-500'
    }
];

const Education = () => {
    return (
        <section id="education" className="py-24 relative overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
            {/* iPhone-style blurred background */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                {/* iOS-style gradient orbs */}
                <div className="absolute top-20 left-10 w-72 h-72 bg-blue-500/15 rounded-full blur-[120px] animate-pulse"></div>
                <div className="absolute bottom-20 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[140px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-500/8 rounded-full blur-[160px]"></div>
            </div>

            {/* Safari-style grid overlay */}
            <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cdefs%3E%3Cpattern id=%22grid%22 width=%2260%22 height=%2260%22 patternUnits=%22userSpaceOnUse%22%3E%3Cpath d=%22M 60 0 L 0 0 0 60%22 fill=%22none%22 stroke=%22rgba(56,189,248,0.03)%22 stroke-width=%221%22/%3E%3C/pattern%3E%3C/defs%3E%3Crect width=%22100%25%22 height=%22100%25%22 fill=%22url(%23grid)%22/%3E%3C/svg%3E')] opacity-30"></div>

            <div className="max-w-5xl mx-auto px-4 relative z-10">
                {/* iOS Status Bar Style */}
                <motion.div 
                    initial={{ opacity: 0, y: -20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex justify-between items-center mb-8 px-4 py-2 bg-black/20 backdrop-blur-xl rounded-full border border-white/10 max-w-md mx-auto"
                >
                    <div className="flex items-center gap-1.5">
                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                    </div>
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
                        <span className="text-xs font-medium text-blue-300 tracking-wide">Academic Journey • iOS</span>
                    </motion.div>
                    <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight">
                        Education{' '}
                        <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                            Timeline
                        </span>
                    </h2>
                    <p className="text-slate-400 max-w-2xl mx-auto text-sm">
                        My academic foundation and continuous learning journey
                    </p>
                </motion.div>

                {/* Safari Browser Style Cards */}
                <div className="relative">
                    {/* Education Cards - iPhone Style */}
                    <div className="space-y-6">
                        {educationData.map((edu, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: index * 0.1 }}
                                whileHover={{ y: -4 }}
                                className="group"
                            >
                                {/* iPhone-style Card */}
                                <div className="relative">
                                    {/* Safari Tab Bar */}
                                    <div className="flex items-center gap-2 px-4 py-2 bg-slate-800/50 backdrop-blur-xl rounded-t-2xl border border-slate-700 border-b-0">
                                        <div className="flex gap-1.5">
                                            <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                            <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                        </div>
                                        <div className="flex-1 flex justify-center">
                                            <div className="bg-slate-700/50 rounded-lg px-3 py-0.5 text-[10px] text-slate-400 font-mono">
                                                {edu.school.split(' ').slice(0, 2).join(' ')}.edu
                                            </div>
                                        </div>
                                        <div className="w-8"></div>
                                    </div>

                                    {/* Card Content */}
                                    <div className="bg-slate-900/60 backdrop-blur-xl rounded-b-2xl border border-slate-700 border-t-0 overflow-hidden">
                                        <div className={`h-1 w-full bg-gradient-to-r ${edu.color}`}></div>
                                        
                                        <div className="p-6">
                                            {/* Header with Period and Result */}
                                            <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                                                <div className="flex items-center gap-2 px-3 py-1.5 bg-black/30 rounded-full">
                                                    <Calendar size={12} className="text-blue-300" />
                                                    <span className="text-xs font-medium text-blue-300">{edu.period}</span>
                                                </div>
                                                <div className={`px-3 py-1.5 rounded-full text-xs font-bold text-white bg-gradient-to-r ${edu.color} shadow-lg`}>
                                                    {edu.result}
                                                </div>
                                            </div>

                                            {/* Degree */}
                                            <h3 className="text-xl font-bold text-slate-100 mb-2 group-hover:text-blue-300 transition-colors">
                                                {edu.degree}
                                            </h3>

                                            {/* School Info */}
                                            <div className="flex items-center gap-2 text-slate-400 mb-3">
                                                <GraduationCap size={14} />
                                                <span className="text-sm">{edu.school}</span>
                                            </div>
                                            
                                            <div className="flex items-center gap-2 text-slate-500 text-xs mb-4">
                                                <MapPin size={12} />
                                                <span>{edu.location}</span>
                                            </div>

                                            {/* Description */}
                                            <p className="text-slate-400 text-sm mb-4 leading-relaxed">
                                                Completed with excellence in computer science fundamentals and practical application.
                                            </p>

                                            {/* Achievements - iOS Tags */}
                                            <div className="flex flex-wrap gap-2 mb-3">
                                                {edu.achievements.map((achievement, idx) => (
                                                    <span
                                                        key={idx}
                                                        className="inline-flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full bg-slate-800/80 text-cyan-300 border border-slate-700 backdrop-blur-sm"
                                                    >
                                                        <Award size={10} className="text-cyan-400" />
                                                        {achievement}
                                                    </span>
                                                ))}
                                            </div>

                                            {/* iOS-style Detail Button */}
                                            <motion.button
                                                whileHover={{ x: 5 }}
                                                className="flex items-center gap-2 text-xs font-medium text-blue-400 mt-3"
                                            >
                                                <span>View Details</span>
                                                <span>→</span>
                                            </motion.button>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* iOS-style Stats Cards */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 }}
                    className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-4"
                >
                    {[
                        { label: 'Years of Study', value: '7+', icon: GraduationCap, color: 'from-blue-500 to-cyan-500', detail: 'Continuous Learning' },
                        { label: 'Achievements', value: '12+', icon: Award, color: 'from-teal-500 to-cyan-500', detail: 'Academic Excellence' },
                        { label: 'Projects', value: '15+', icon: Star, color: 'from-blue-500 to-teal-500', detail: 'Portfolio Work' }
                    ].map((stat, idx) => (
                        <motion.div
                            key={idx}
                            whileHover={{ y: -4, scale: 1.02 }}
                            className="group relative"
                        >
                            <div className="bg-slate-900/40 backdrop-blur-xl rounded-2xl border border-slate-700 p-5 overflow-hidden">
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${stat.color}`}></div>
                                <div className="flex items-center justify-between mb-3">
                                    <div className={`inline-flex p-2.5 rounded-xl bg-gradient-to-r ${stat.color} bg-opacity-10`}>
                                        <stat.icon size={20} className="text-blue-300" />
                                    </div>
                                    <span className="text-2xl font-black text-slate-100">{stat.value}</span>
                                </div>
                                <div className="text-sm font-semibold text-slate-200 mb-1">{stat.label}</div>
                                <div className="text-xs text-slate-500">{stat.detail}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

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

export default Education;