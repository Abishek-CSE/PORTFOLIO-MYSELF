import React from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';

const Section = ({ id, title, subtitle, children, className = '', gradient = 'from-indigo-400 to-purple-400' }) => {
    return (
        <section id={id} className={`relative overflow-hidden ${className}`}>
            {/* Subtle background decoration */}
            <div className="absolute inset-0 pointer-events-none">
                <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-indigo-500/5 to-purple-500/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-0 left-0 w-80 h-80 bg-gradient-to-tr from-cyan-500/5 to-pink-500/5 rounded-full blur-3xl"></div>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.5, ease: "easeOut" }}
                className="max-w-6xl mx-auto px-6 md:px-12 relative z-10"
            >
                {/* Header Section */}
                {(title || subtitle) && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-center md:text-left mb-12"
                    >
                        {/* Decorative Badge (Optional) */}
                        {subtitle && (
                            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-400/10 border border-indigo-400/20 mb-4 backdrop-blur-sm">
                                <Sparkles size={12} className="text-indigo-300" />
                                <span className="text-xs font-medium text-indigo-300 tracking-wide">{subtitle}</span>
                            </div>
                        )}

                        {/* Title with Modern Design */}
                        {title && (
                            <div className="relative">
                                <h2 className="text-3xl md:text-4xl lg:text-5xl font-black relative inline-block">
                                    <span className={`bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>
                                        {title}
                                    </span>
                                </h2>
                                {/* Animated underline */}
                                <motion.div
                                    initial={{ width: 0 }}
                                    whileInView={{ width: '100%' }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.6 }}
                                    className={`absolute -bottom-2 left-0 h-1 bg-gradient-to-r ${gradient} rounded-full`}
                                    style={{ width: '40%' }}
                                ></motion.div>
                            </div>
                        )}
                    </motion.div>
                )}

                {/* Content */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.2, duration: 0.5 }}
                >
                    {children}
                </motion.div>
            </motion.div>
        </section>
    );
};

export default Section;