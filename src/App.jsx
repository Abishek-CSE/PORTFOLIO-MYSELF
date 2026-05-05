import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Wifi, Battery, Signal, ChevronRight, Github, Linkedin, Sparkles, Home, User, Zap, Rocket, GraduationCap } from 'lucide-react';
import Hero from './components/Hero';
import CareerObjective from './components/CareerObjective';
import TechnicalSkills from './components/TechnicalSkills';
import Projects from './components/Projects';
import Education from './components/Education';
import ResumeModal from './components/ResumeModal';
import ContactModal from './components/ContactModal';
import ProjectModal from './components/ProjectModal';
import Background3D from './components/Background3D';

function App() {
    const [scrolled, setScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navItems = [
        { id: 'home', label: 'Home', icon: Home },
        { id: 'about', label: 'About', icon: User },
        { id: 'skills', label: 'Skills', icon: Zap },
        { id: 'projects', label: 'Projects', icon: Rocket },
        { id: 'education', label: 'Education', icon: GraduationCap }
    ];

    const socialLinks = [
        { label: 'GitHub', href: 'https://github.com/Abishek-CSE', icon: Github, color: 'hover:text-slate-200' },
        { label: 'LinkedIn', href: 'https://www.linkedin.com/in/abishek0786/', icon: Linkedin, color: 'hover:text-blue-400' }
    ];

    // Smooth scroll handler
    const handleNavClick = (e, id) => {
        e.preventDefault();
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
            setMobileMenuOpen(false);
        }
    };

    // Get current time for status bar
    const getCurrentTime = () => {
        const now = new Date();
        return now.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit', hour12: false });
    };

    const [currentTime, setCurrentTime] = useState(getCurrentTime());

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentTime(getCurrentTime());
        }, 60000);
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="relative min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-100 selection:bg-cyan-400/30 selection:text-cyan-100">
            
            {/* Global Background */}
            <Background3D />
            
            {/* iOS Status Bar - Global */}
            <div className="fixed top-0 left-0 right-0 z-50 px-6 py-2 bg-black/30 backdrop-blur-md border-b border-white/5">
                <div className="max-w-7xl mx-auto flex justify-between items-center">
                    <div className="flex items-center gap-2">
                        <div className="text-[12px] font-semibold text-slate-200 font-mono tracking-wide">{currentTime}</div>
                    </div>
                    <div className="flex items-center gap-1.5">
                        <Signal size={11} className="text-slate-300" />
                        <Wifi size={11} className="text-slate-300" />
                        <Battery size={13} className="text-slate-300" />
                    </div>
                </div>
            </div>

            {/* Safari-style Header */}
            <header className={`fixed top-6 left-0 right-0 z-50 transition-all duration-300 px-6`}>
                <div className={`max-w-6xl mx-auto transition-all duration-300 ${
                    scrolled ? 'bg-slate-900/90 backdrop-blur-xl border border-slate-700/50 shadow-2xl' : 'bg-slate-900/50 backdrop-blur-md border border-slate-800/50'
                } rounded-2xl`}>
                    <div className="flex items-center justify-between px-6 py-3.5">
                        {/* Safari Window Controls */}
                        <div className="flex items-center gap-2">
                            <div className="w-3 h-3 rounded-full bg-red-500 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-yellow-500 shadow-sm"></div>
                            <div className="w-3 h-3 rounded-full bg-green-500 shadow-sm"></div>
                        </div>

                        {/* Safari URL Bar */}
                        <div className="hidden lg:flex items-center gap-2 bg-slate-800/60 rounded-lg px-4 py-1.5 border border-slate-700 min-w-[280px]">
                            <Sparkles size={12} className="text-cyan-400" />
                            <span className="text-xs text-slate-300 font-mono">abishek.dev/portfolio</span>
                            <ChevronRight size={10} className="text-slate-500 ml-auto" />
                        </div>

                        {/* Desktop Navigation - Professional Style */}
                        <nav className="hidden md:flex gap-1">
                            {navItems.map(item => {
                                const Icon = item.icon;
                                return (
                                    <a
                                        key={item.id}
                                        href={`#${item.id}`}
                                        onClick={(e) => handleNavClick(e, item.id)}
                                        className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-400 hover:text-cyan-300 transition-all rounded-lg hover:bg-slate-800/50"
                                    >
                                        <Icon size={16} />
                                        <span>{item.label}</span>
                                    </a>
                                );
                            })}
                        </nav>

                        {/* Mobile Menu Button */}
                        <button
                            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                            className="md:hidden p-2 rounded-full bg-slate-800/50 border border-slate-700 hover:bg-slate-700/50 transition-colors"
                        >
                            {mobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
                        </button>
                    </div>
                </div>
            </header>

            {/* Mobile Menu - iOS Sheet Style */}
            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.2 }}
                        className="fixed top-28 left-6 right-6 z-50 md:hidden"
                    >
                        <div className="bg-slate-900/95 backdrop-blur-xl rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                            <div className="py-2">
                                {navItems.map((item, idx) => {
                                    const Icon = item.icon;
                                    return (
                                        <a
                                            key={item.id}
                                            href={`#${item.id}`}
                                            onClick={(e) => handleNavClick(e, item.id)}
                                            className="flex items-center gap-3 px-5 py-3.5 text-slate-300 hover:bg-slate-800/50 transition-colors"
                                        >
                                            <Icon size={18} className="text-cyan-400" />
                                            <span className="text-sm font-medium">{item.label}</span>
                                            <ChevronRight size={14} className="ml-auto text-slate-500" />
                                        </a>
                                    );
                                })}
                            </div>
                            {/* iOS Home Indicator */}
                            <div className="flex justify-center py-3">
                                <div className="w-24 h-1 bg-slate-600 rounded-full"></div>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Main Content */}
            <main className="pt-12">
                <Hero />
                <CareerObjective />
                <TechnicalSkills />
                <Projects />
                <Education />
                <ResumeModal />
                <ContactModal />
                <ProjectModal />
            </main>

            {/* Professional iOS-style Footer */}
            <footer className="relative mt-20 border-t border-slate-800 bg-slate-950/80 backdrop-blur-sm">
                <div className="max-w-6xl mx-auto px-6 py-12">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-8">
                        {/* Left Section */}
                        <div className="text-center md:text-left">
                            <div className="flex items-center gap-2 justify-center md:justify-start mb-3">
                                <div className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></div>
                                <span className="text-xs text-slate-500 font-mono tracking-wide">STATUS: ACTIVE</span>
                            </div>
                            <p className="text-slate-500 text-sm">
                                © {new Date().getFullYear()} Abishek N. All rights reserved.
                            </p>
                        </div>
                        
                        {/* Social Links */}
                        <div className="flex gap-3">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <motion.a
                                        key={social.label}
                                        whileHover={{ y: -2 }}
                                        whileTap={{ scale: 0.98 }}
                                        href={social.href}
                                        target="_blank"
                                        rel="noreferrer"
                                        className={`flex items-center gap-2 px-4 py-2 rounded-full bg-slate-800/50 border border-slate-700 text-slate-400 ${social.color} transition-all duration-300 hover:border-slate-600`}
                                    >
                                        <Icon size={15} />
                                        <span className="text-xs font-medium">{social.label}</span>
                                    </motion.a>
                                );
                            })}
                        </div>
                    </div>
                    
                    {/* iOS Home Indicator */}
                    <div className="flex justify-center mt-8 pt-2">
                        <div className="w-32 h-1 bg-slate-700 rounded-full"></div>
                    </div>
                </div>
            </footer>
        </div>
    );
}

export default App;