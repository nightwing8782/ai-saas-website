import React from 'react';
import { motion } from 'framer-motion';
import './SocialProof.css';

const SocialProof = () => {
    const companies = [
        "Acme Corp", "GlobalTech", "Nexus", "Quantum", "Vertex", "Zephyr"
    ];

    return (
        <section className="social-proof">
            <div className="container">
                <p className="social-proof-label">Trusted by innovative teams worldwide</p>
                <div className="logo-flex">
                    {companies.map((company, index) => (
                        <motion.div
                            key={company}
                            className="company-logo"
                            initial={{ opacity: 0, y: 10 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="logo-placeholder">{company}</div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default SocialProof;
