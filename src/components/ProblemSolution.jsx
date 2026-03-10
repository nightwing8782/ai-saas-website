import React from 'react';
import { motion } from 'framer-motion';
import { XCircle, CheckCircle } from 'lucide-react';
import './ProblemSolution.css';

const ProblemSolution = () => {
    return (
        <section className="problem-solution" id="how-it-works">
            <div className="container">
                <div className="ps-header">
                    <h2 className="section-title">Stop wrestling with fragmented tools</h2>
                    <p className="section-subtitle">
                        Most teams waste 40% of their week on context switching and manual data entry. Aura unites your workflow into a single intelligent surface.
                    </p>
                </div>

                <div className="ps-grid">
                    <motion.div
                        className="ps-card problem-card soft-shadow"
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <div className="card-badge bg-red-100 text-red-700">The Old Way</div>
                        <ul className="ps-list">
                            <li><XCircle className="text-red-500" size={20} /> Data scattered across 10+ apps</li>
                            <li><XCircle className="text-red-500" size={20} /> Manual reporting and analysis</li>
                            <li><XCircle className="text-red-500" size={20} /> Reactive decision making</li>
                            <li><XCircle className="text-red-500" size={20} /> High operational overhead</li>
                        </ul>
                    </motion.div>

                    <motion.div
                        className="ps-card solution-card soft-shadow"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="card-badge bg-primary-100 text-primary-700">With Aura AI</div>
                        <ul className="ps-list">
                            <li><CheckCircle className="text-primary-500" size={20} /> Unified, intelligent workspace</li>
                            <li><CheckCircle className="text-primary-500" size={20} /> Automated insights in real-time</li>
                            <li><CheckCircle className="text-primary-500" size={20} /> Predictive, proactive guidance</li>
                            <li><CheckCircle className="text-primary-500" size={20} /> Lean, high-velocity operations</li>
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default ProblemSolution;
