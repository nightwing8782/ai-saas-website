import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles } from 'lucide-react';
import './Hero.css';

const Hero = () => {
    return (
        <section className="hero">
            <div className="hero-bg-glow"></div>
            <div className="container hero-container">
                <motion.div
                    className="hero-badge"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.1 }}
                >
                    <Sparkles size={16} className="badge-icon" />
                    <span>Aura AI 2.0 is now available</span>
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    The intelligent OS <br className="desktop-only" />
                    for <span className="text-gradient">high-velocity</span> teams.
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.3 }}
                >
                    Automate workflows, synthesize data, and scale operations effortlessly with the most powerful AI infrastructure built for modern enterprises.
                </motion.p>

                <motion.div
                    className="hero-actions"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: 0.4 }}
                >
                    <button className="btn btn-primary btn-lg">
                        Start Free Trial <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                    </button>
                    <button className="btn btn-secondary btn-lg">
                        Book a Demo
                    </button>
                </motion.div>

                <motion.div
                    className="hero-image-wrapper"
                    initial={{ opacity: 0, y: 40 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.5 }}
                >
                    <div className="hero-product-mockup soft-shadow">
                        <div className="mockup-header">
                            <div className="mockup-dots">
                                <span></span><span></span><span></span>
                            </div>
                        </div>
                        <div className="mockup-body">
                            <div className="mockup-sidebar">
                                <div className="sidebar-skeleton-sm"></div>
                                <div className="sidebar-skeleton-sm"></div>
                                <div className="sidebar-skeleton-sm"></div>
                            </div>
                            <div className="mockup-content">
                                <div className="mockup-card line-top">
                                    <div className="content-skeleton-lg"></div>
                                    <div className="content-skeleton-md"></div>
                                </div>
                                <div className="mockup-grid">
                                    <div className="mockup-card p-4">
                                        <div className="content-skeleton-circle"></div>
                                        <div className="content-skeleton-sm mt-4"></div>
                                    </div>
                                    <div className="mockup-card p-4">
                                        <div className="content-skeleton-circle"></div>
                                        <div className="content-skeleton-sm mt-4"></div>
                                    </div>
                                    <div className="mockup-card p-4">
                                        <div className="content-skeleton-circle"></div>
                                        <div className="content-skeleton-sm mt-4"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
