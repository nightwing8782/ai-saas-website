import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <motion.header
            className={`navbar ${isScrolled ? 'scrolled glass-panel' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
            <div className="container nav-container">
                <div className="logo">
                    <span className="logo-icon">▲</span>
                    <span className="logo-text">Aura</span>
                </div>

                <nav className="desktop-nav">
                    <a href="#features" className="nav-link hover-lift">Features</a>
                    <a href="#how-it-works" className="nav-link hover-lift">How it Works</a>
                    <a href="#use-cases" className="nav-link hover-lift">Use Cases</a>
                    <a href="#pricing" className="nav-link hover-lift">Pricing</a>
                </nav>

                <div className="nav-actions desktop-nav">
                    <button className="btn nav-login">Log In</button>
                    <button className="btn btn-primary">Get Started</button>
                </div>

                <button
                    className="mobile-menu-toggle"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {mobileMenuOpen && (
                <motion.div
                    className="mobile-nav glass-panel"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    <a href="#features" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Features</a>
                    <a href="#how-it-works" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>How it Works</a>
                    <a href="#use-cases" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Use Cases</a>
                    <a href="#pricing" className="mobile-nav-link" onClick={() => setMobileMenuOpen(false)}>Pricing</a>
                    <div className="mobile-nav-actions">
                        <button className="btn nav-login w-full">Log In</button>
                        <button className="btn btn-primary w-full">Get Started</button>
                    </div>
                </motion.div>
            )}
        </motion.header>
    );
};

export default Navbar;
