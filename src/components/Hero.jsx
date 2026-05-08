import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Linkedin, Github, ChevronDown, Sparkles, Code2, Terminal, Cpu, Layers, Zap, User, Send, ArrowRight } from 'lucide-react';

const profilePhoto = "https://github.com/Abishek-CSE.png";

const Hero = () => {
    return (
        <section id="home" className="min-h-screen flex items-center relative overflow-hidden px-6 pt-20 md:pt-0">
            {/* Unique Dark Tech Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
                {/* Animated grid pattern */}
                <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(56,189,248,0.03)_1px,transparent_1px),linear-gradient(0deg,rgba(56,189,248,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                
                {/* Animated gradient orbs */}
                <div className="absolute top-1/3 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-[100px] animate-pulse"></div>
                <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-purple-500/8 rounded-full blur-[120px] animate-pulse delay-1000"></div>
                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 w-96 h-96 bg-cyan-500/5 rounded-full blur-[140px]"></div>
            </div>

            {/* Floating Code Elements */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <motion.div 
                    animate={{ y: [0, -30, 0], x: [0, 10, 0] }}
                    transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[20%] left-[5%] text-blue-400/5 font-mono text-4xl font-bold"
                >
                    &lt;/&gt;
                </motion.div>
                <motion.div 
                    animate={{ y: [0, 30, 0], x: [0, -10, 0] }}
                    transition={{ duration: 14, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-[25%] right-[8%] text-purple-400/5 font-mono text-5xl font-bold"
                >
                    {'{ }'}
                </motion.div>
                <motion.div 
                    animate={{ opacity: [0.3, 0.8, 0.3] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute top-[40%] right-[15%] text-cyan-400/10"
                >
                    <Terminal size={80} />
                </motion.div>
            </div>

            <div className="max-w-6xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
                
                {/* Left Column - Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    {/* Animated Badge */}
                    <motion.div 
                        animate={{ scale: [1, 1.05, 1] }}
                        transition={{ duration: 2, repeat: Infinity }}
                        className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-300 text-xs font-semibold mb-6 backdrop-blur-sm"
                    >
                        <span className="relative flex h-2 w-2">
                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
                            <span className="relative inline-flex rounded-full h-2 w-2 bg-blue-400"></span>
                        </span>
                        Available for Work
                    </motion.div>

                    {/* Unique Name Styling */}
                    <div className="mb-4">
                        <div className="flex items-center gap-2 mb-2">
                            <Sparkles size={20} className="text-blue-400" />
                            <span className="text-sm text-blue-300 font-mono">greeting.exe</span>
                        </div>
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-black">
                            <span className="text-slate-200">Hello, I'm</span>
                            <div className="relative inline-block mt-2">
                                <span className="bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 bg-clip-text text-transparent">
                                    Abishek N
                                </span>
                                <motion.div 
                                    animate={{ width: ['0%', '100%'] }}
                                    transition={{ duration: 1.5, delay: 0.5 }}
                                    className="absolute -bottom-2 left-0 h-1 bg-gradient-to-r from-blue-400 to-teal-400 rounded-full"
                                ></motion.div>
                            </div>
                        </h1>
                    </div>

                    {/* Different Paragraph - More Engaging */}
                    <div className="mb-8 space-y-3">
                        <p className="text-lg md:text-xl text-slate-300 leading-relaxed">
                            I turn <span className="text-blue-300 font-semibold">ideas</span> into 
                            <span className="text-cyan-300 font-semibold"> interactive reality</span>.
                        </p>
                        <p className="text-slate-400 leading-relaxed">
                            With a passion for clean code and intuitive design, I build web applications 
                            that not only look great but also deliver exceptional performance.
                        </p>
                        <div className="flex items-center gap-2 text-sm text-slate-500 font-mono">
                            <span className="text-green-400">●</span> 5+ projects completed
                            <span className="text-slate-600 mx-1">|</span>
                            <span className="text-blue-400">always learning</span>
                        </div>
                    </div>

                    {/* Different Get In Touch Button */}
                    <div className="flex flex-wrap gap-4 mb-10">
                        <motion.button
                            whileHover={{ scale: 1.05, y: -2 }}
                            whileTap={{ scale: 0.98 }}
                            onClick={() => window.dispatchEvent(new CustomEvent('open-contact'))}
                            className="group relative px-8 py-3.5 bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold rounded-xl transition-all flex items-center gap-2 overflow-hidden shadow-lg shadow-blue-500/25"
                        >
                            <span className="relative z-10 flex items-center gap-2">
                                Let's Connect
                                <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                            </span>
                            <motion.div 
                                animate={{ x: ['0%', '100%'] }}
                                transition={{ duration: 2, repeat: Infinity }}
                                className="absolute top-0 left-0 w-20 h-full bg-white/20 skew-x-12"
                            ></motion.div>
                        </motion.button>
                        
                        {/* Optional secondary button */}
                        <motion.a
                            whileHover={{ scale: 1.05, y: -2 }}
                            href="#projects"
                            className="px-7 py-3.5 bg-slate-800/80 backdrop-blur-sm border border-slate-700 text-slate-300 font-semibold rounded-xl transition-all flex items-center gap-2 hover:border-blue-500/50 hover:text-blue-300"
                        >
                            View Work
                            <ArrowRight size={16} />
                        </motion.a>
                    </div>

                    {/* Social Links with labels */}
                    <div className="flex gap-8">
                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://github.com/Abishek-CSE"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-slate-500 hover:text-slate-200 transition-all duration-300 group"
                        >
                            <Github size={22} />
                            <span className="text-sm hidden sm:inline group-hover:translate-x-1 transition-transform">GitHub</span>
                        </motion.a>
                        <motion.a
                            whileHover={{ y: -4 }}
                            href="https://www.linkedin.com/in/abishek0786/"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 text-slate-500 hover:text-blue-400 transition-all duration-300 group"
                        >
                            <Linkedin size={22} />
                            <span className="text-sm hidden sm:inline group-hover:translate-x-1 transition-transform">LinkedIn</span>
                        </motion.a>
                    </div>
                </motion.div>

                {/* Right Column - Profile Image + Code Card Combined */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.7, delay: 0.2 }}
                    className="relative flex justify-center"
                >
                    <div className="relative w-full max-w-[400px]">
                        {/* Glowing background effect */}
                        <div className="absolute -inset-4 bg-gradient-to-r from-blue-500/20 via-cyan-500/20 to-teal-500/20 rounded-3xl blur-2xl"></div>
                        
                        {/* Main Container */}
                        <div className="relative bg-slate-900/90 backdrop-blur-sm rounded-2xl border border-slate-700 overflow-hidden shadow-2xl">
                            {/* Card Header */}
                            <div className="flex items-center justify-between px-4 py-3 bg-slate-800/50 border-b border-slate-700">
                                <div className="flex items-center gap-2">
                                    <div className="flex gap-1.5">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-xs text-slate-400 ml-2">portfolio.exe</span>
                                </div>
                                <div className="flex gap-2">
                                    <User size={12} className="text-slate-500" />
                                </div>
                            </div>
                            
                            {/* Card Content - Split Layout */}
                            <div className="p-5">
                                {/* Profile Image Section */}
                                <div className="flex justify-center mb-5">
                                    <div className="relative">
                                        <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full blur opacity-60"></div>
                                        <img
                                            src={profilePhoto}
                                            alt="Abishek N"
                                            className="relative w-24 h-24 md:w-28 md:h-28 rounded-full object-cover border-2 border-slate-700"
                                            onError={(e) => { 
                                                e.target.src = 'https://ui-avatars.com/api/?name=Abishek+N&background=1e1b4b&color=60a5fa&size=128';
                                            }}
                                        />
                                        <div className="absolute -bottom-1 -right-1 bg-green-500 rounded-full p-1 border-2 border-slate-900">
                                            <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse"></div>
                                        </div>
                                    </div>
                                </div>

                                {/* Code Display */}
                                <div className="font-mono text-xs md:text-sm">
                                    <div className="flex items-center gap-2 mb-2">
                                        <span className="text-blue-400">const</span>
                                        <span className="text-cyan-300">developer</span>
                                        <span className="text-slate-400">=</span>
                                        <span className="text-yellow-400">{'{'}</span>
                                    </div>
                                    
                                    <div className="ml-3 space-y-1.5">
                                        <div>
                                            <span className="text-purple-400">name</span>
                                            <span className="text-slate-400">: </span>
                                            <span className="text-green-400">'Abishek N'</span>
                                            <span className="text-slate-400">,</span>
                                        </div>
                                        <div>
                                            <span className="text-purple-400">role</span>
                                            <span className="text-slate-400">: </span>
                                            <span className="text-green-400">'Full-Stack Developer'</span>
                                            <span className="text-slate-400">,</span>
                                        </div>
                                        <div>
                                            <span className="text-purple-400">stack</span>
                                            <span className="text-slate-400">: [</span>
                                            <span className="text-orange-400">'React'</span>
                                            <span className="text-slate-400">, </span>
                                            <span className="text-orange-400">'React Native'</span>
                                            <span className="text-slate-400">, </span>
                                            <span className="text-orange-400">'Node.js'</span>
                                            <span className="text-slate-400">, </span>
                                            <span className="text-orange-400">'MongoDB'</span>
                                            <span className="text-slate-400">],</span>
                                        </div>
                                        <div>
                                            <span className="text-purple-400">location</span>
                                            <span className="text-slate-400">: </span>
                                            <span className="text-green-400">'India'</span>
                                        </div>
                                    </div>
                                    
                                    <div className="mt-2">
                                        <span className="text-yellow-400">{'};'}</span>
                                    </div>
                                    
                                    {/* Animated cursor */}
                                    <motion.div 
                                        animate={{ opacity: [1, 0, 1] }}
                                        transition={{ duration: 1, repeat: Infinity }}
                                        className="inline-block w-1.5 h-3 bg-blue-400 mt-2"
                                    ></motion.div>
                                </div>

                                {/* Tech Stack Tags */}
                                <div className="flex flex-wrap gap-1.5 mt-4 pt-3 border-t border-slate-800">
                                    {['React', 'React Native', 'Next.js', 'Node.js', 'Tailwind', 'Bootstrap', 'Vercel', 'Firebase', 'Figma'].map((tech, i) => (
                                        <span key={i} className="text-[10px] px-2 py-1 rounded-full bg-slate-800 text-cyan-300 border border-slate-700">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>

                        {/* Floating Tech Icons */}
                        <motion.div 
                            animate={{ y: [0, -15, 0], rotate: [0, 10, 0] }}
                            transition={{ duration: 5, repeat: Infinity }}
                            className="absolute -top-6 -right-4 bg-slate-800/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-700"
                        >
                            <Code2 size={20} className="text-blue-400" />
                        </motion.div>
                        
                        <motion.div 
                            animate={{ y: [0, 15, 0], rotate: [0, -10, 0] }}
                            transition={{ duration: 6, repeat: Infinity, delay: 1 }}
                            className="absolute -bottom-5 -left-4 bg-slate-800/80 backdrop-blur-sm p-2.5 rounded-xl border border-slate-700"
                        >
                            <Cpu size={20} className="text-cyan-400" />
                        </motion.div>
                        
                        <motion.div 
                            animate={{ y: [0, -10, 0], x: [0, 10, 0] }}
                            transition={{ duration: 7, repeat: Infinity, delay: 2 }}
                            className="absolute top-1/3 -right-8 bg-slate-800/80 backdrop-blur-sm p-2 rounded-lg border border-slate-700 hidden md:block"
                        >
                            <Layers size={18} className="text-teal-400" />
                        </motion.div>
                    </div>
                </motion.div>
            </div>

            {/* Scroll Indicator */}
            <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 opacity-40 hover:opacity-100 transition-opacity cursor-pointer"
                onClick={() => {
                    const aboutSection = document.getElementById('about');
                    aboutSection?.scrollIntoView({ behavior: 'smooth' });
                }}
            >
                <span className="text-[10px] tracking-widest text-slate-500 uppercase">Explore</span>
                <ChevronDown size={18} className="text-blue-400" />
            </motion.div>
        </section>
    );
};

export default Hero;