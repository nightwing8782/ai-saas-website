import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import './CTA.css';

const CTA = () => {
    return (
        <section className="cta-section">
            <div className="container">
                <motion.div
                    className="cta-card shadow-lg"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                >
                    <div className="cta-glow"></div>
                    <h2 className="cta-title">Ready to build the future?</h2>
                    <p className="cta-subtitle">Join thousands of high-velocity teams already building next-generation workflows with Aura AI.</p>

                    <div className="cta-actions">
                        <button className="btn btn-primary cta-btn">
                            Start Free Trial <ArrowRight size={18} style={{ marginLeft: '8px' }} />
                        </button>
                        <p className="cta-note">14-day free trial. No credit card required.</p>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default CTA;
