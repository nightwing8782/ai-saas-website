import React from 'react';
import { motion } from 'framer-motion';
import { Database, Zap, Shield, Sparkles, BarChart, Users } from 'lucide-react';
import './Features.css';

const Features = () => {
    const features = [
        {
            icon: <Database size={24} />,
            title: "Unified Data Layer",
            description: "Connect all your disparate tools instantly. Aura synthesizes your data into a single source of truth."
        },
        {
            icon: <Zap size={24} />,
            title: "Real-time Processing",
            description: "Sub-millisecond query execution means your dashboards and AI insights are always up to the second."
        },
        {
            icon: <Sparkles size={24} />,
            title: "Generative Workflows",
            description: "Describe what you want to achieve, and our AI builds the integration and workflow for you."
        },
        {
            icon: <Shield size={24} />,
            title: "Enterprise Security",
            description: "Bank-grade encryption, SOC2 Type II compliance, and granular role-based access controls."
        },
        {
            icon: <BarChart size={24} />,
            title: "Predictive Analytics",
            description: "Identify trends and anomalies before they become problems with proactive alerting."
        },
        {
            icon: <Users size={24} />,
            title: "Collaboration Built-in",
            description: "Work alongside your team and AI agents in multiplayer workspaces designed for velocity."
        }
    ];

    return (
        <section className="features" id="features">
            <div className="container">
                <div className="features-header">
                    <h2 className="section-title">Everything you need to scale</h2>
                    <p className="section-subtitle">Aura combines powerful infrastructure with an intuitive interface to accelerate your entire organization.</p>
                </div>

                <div className="features-grid">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            className="feature-card hover-lift"
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            <div className="feature-icon-wrapper">
                                {feature.icon}
                            </div>
                            <h3 className="feature-title">{feature.title}</h3>
                            <p className="feature-description">{feature.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Features;
