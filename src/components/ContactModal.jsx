    import React, { useEffect, useState } from 'react';
    import { motion, AnimatePresence } from 'framer-motion';
    import { X, Mail, Phone, Copy, Check, ExternalLink } from 'lucide-react';

    const ContactModal = () => {
        const [isOpen, setIsOpen] = useState(false);
        const [copiedId, setCopiedId] = useState(null);

        const contactInfo = {
            email: 'abisheknavas500@gmail.com',
            phone: '+91 93605 18517'
        };

        useEffect(() => {
            const handleOpen = () => setIsOpen(true);
            window.addEventListener('open-contact', handleOpen);
            return () => window.removeEventListener('open-contact', handleOpen);
        }, []);

        const handleCopy = (text, id) => {
            navigator.clipboard.writeText(text);
            setCopiedId(id);
            setTimeout(() => setCopiedId(null), 2000);
        };

        return (
            <AnimatePresence>
                {isOpen && (
                    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
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
                            className="relative w-full max-w-lg bg-slate-900 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl p-8"
                        >
                            <button
                                onClick={() => setIsOpen(false)}
                                className="absolute top-6 right-6 p-2 hover:bg-slate-800 rounded-xl transition-colors text-slate-400"
                            >
                                <X size={20} />
                            </button>

                            <div className="mb-8">
                                <h2 className="text-2xl font-black text-slate-100 mb-2">Get In Touch</h2>
                                <p className="text-slate-400">Feel free to reach out via email or phone. I'm always open to discussing new projects or opportunities.</p>
                            </div>

                            <div className="space-y-4">
                                {/* Email Card */}
                                <div className="group  p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-cyan-400/30 transition-all">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-cyan-400/10 text-cyan-300">
                                                <Mail size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Email Address</p>
                                                <p className="text-slate-200 font-medium break-all">{contactInfo.email}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleCopy(contactInfo.email, 'email')}
                                                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
                                                title="Copy Email"
                                            >
                                                {copiedId === 'email' ? <Check size={18} className="text-cyan-300" /> : <Copy size={18} />}
                                            </button>
                                            <a
                                                href={`mailto:${contactInfo.email}`}
                                                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
                                                title="Send Email"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>

                                {/* Phone Card */}
                                <div className="group p-6 rounded-2xl bg-slate-950/50 border border-slate-800 hover:border-cyan-400/30 transition-all">
                                    <div className="flex items-start justify-between">
                                        <div className="flex items-center gap-4">
                                            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400">
                                                <Phone size={24} />
                                            </div>
                                            <div>
                                                <p className="text-xs font-bold uppercase tracking-widest text-slate-500 mb-1">Phone Number</p>
                                                <p className="text-slate-200 font-medium">{contactInfo.phone}</p>
                                            </div>
                                        </div>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={() => handleCopy(contactInfo.phone, 'phone')}
                                                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
                                                title="Copy Phone"
                                            >
                                                {copiedId === 'phone' ? <Check size={18} className="text-cyan-400" /> : <Copy size={18} />}
                                            </button>
                                            <a
                                                href={`tel:${contactInfo.phone.replace(/\s+/g, '')}`}
                                                className="p-2 hover:bg-slate-800 rounded-lg text-slate-400 transition-colors"
                                                title="Call Now"
                                            >
                                                <ExternalLink size={18} />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-8 text-center">
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="w-full py-4 bg-slate-800 hover:bg-slate-700 text-slate-200 font-bold rounded-2xl transition-all"
                                >
                                    Close
                                </button>
                            </div>
                        </motion.div>
                    </div>
                )}
            </AnimatePresence>
        );
    };

    export default ContactModal;

