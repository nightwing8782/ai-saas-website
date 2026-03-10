import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import './UseCases.css';

const UseCases = () => {
    const cases = [
        {
            title: "For Engineering Teams",
            subtitle: "Ship faster with AI copilots",
            description: "Automate code reviews, detect security vulnerabilities before they merge, and let Aura handle boilerplate while your developers focus on complex architecture.",
            benefits: ["Automated code review", "Vulnerability detection", "Architecture suggestions"],
            imageBg: "bg-purple-100",
            reversed: false
        },
        {
            title: "For Product Managers",
            subtitle: "Data-driven roadmaps",
            description: "Synthesize user feedback from 50+ channels instantly. Aura identifies core user needs and automatically prioritizes your backlog based on impact.",
            benefits: ["Feedback synthesis", "Impact scoring", "Automated release notes"],
            imageBg: "bg-blue-100",
            reversed: true
        },
        {
            title: "For Operations",
            subtitle: "Lean scaling without headcount",
            description: "Trigger physical and digital workflows automatically. Reduce manual triage and routing of support tickets by 80% with our intent-recognition engine.",
            benefits: ["Workflow automation", "Ticket routing", "Intent recognition"],
            imageBg: "bg-yellow-100",
            reversed: false
        }
    ];

    return (
        <section className="use-cases" id="use-cases">
            <div className="container">
                {cases.map((useCase, index) => (
                    <div key={index} className={`use-case-row ${useCase.reversed ? 'reversed' : ''}`}>
                        <motion.div
                            className="use-case-content"
                            initial={{ opacity: 0, x: useCase.reversed ? 30 : -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                        >
                            <h2 className="use-case-title">{useCase.title}</h2>
                            <h3 className="use-case-subtitle">{useCase.subtitle}</h3>
                            <p className="use-case-description">{useCase.description}</p>

                            <ul className="use-case-benefits">
                                {useCase.benefits.map((benefit, bIndex) => (
                                    <li key={bIndex}>
                                        <CheckCircle className="benefit-icon" size={20} />
                                        <span>{benefit}</span>
                                    </li>
                                ))}
                            </ul>
                        </motion.div>

                        <motion.div
                            className="use-case-visual"
                            initial={{ opacity: 0, x: useCase.reversed ? -30 : 30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                        >
                            <div className={`use-case-mockup ${useCase.imageBg} soft-shadow`}>
                                <div className="mockup-header-simple"></div>
                                <div className="mockup-body-simple">
                                    <div className="skeleton-line full"></div>
                                    <div className="skeleton-line full"></div>
                                    <div className="skeleton-line half"></div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default UseCases;
