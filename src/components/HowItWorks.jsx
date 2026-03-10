import React from 'react';
import { motion } from 'framer-motion';
import { Link2, Cpu, LineChart } from 'lucide-react';
import './HowItWorks.css';

const HowItWorks = () => {
    const steps = [
        {
            number: "01",
            icon: <Link2 size={32} />,
            title: "Connect",
            description: "Securely link your existing databases, CRM, and SaaS tools in one click."
        },
        {
            number: "02",
            icon: <Cpu size={32} />,
            title: "Synthesize",
            description: "Our proprietary AI engine cleans, structures, and correlates data automatically."
        },
        {
            number: "03",
            icon: <LineChart size={32} />,
            title: "Accelerate",
            description: "Deploy workflows, view predictive insights, and execute actions 10x faster."
        }
    ];

    return (
        <section className="how-it-works" id="how-it-works">
            <div className="container">
                <div className="hiw-header">
                    <h2 className="section-title">From chaos to clarity in minutes</h2>
                    <p className="section-subtitle">Integration takes seconds. Value is realized immediately.</p>
                </div>

                <div className="steps-container">
                    <div className="connecting-line"></div>
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            className="step-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2, duration: 0.6 }}
                        >
                            <div className="step-number">{step.number}</div>
                            <div className="step-icon-wrapper soft-shadow">
                                {step.icon}
                            </div>
                            <h3 className="step-title">{step.title}</h3>
                            <p className="step-description">{step.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
