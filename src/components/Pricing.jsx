import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import './Pricing.css';

const Pricing = () => {
    const plans = [
        {
            name: "Starter",
            description: "For small teams and startups.",
            price: "$49",
            period: "/month",
            features: ["5 Team Members", "10,000 API Calls/mo", "Basic Analytics", "Community Support"],
            isPopular: false,
            buttonClass: "btn-secondary"
        },
        {
            name: "Growth",
            description: "For scaling organizations.",
            price: "$199",
            period: "/month",
            features: ["Unlimited Members", "100,000 API Calls/mo", "Advanced Predictive Analytics", "Priority 24/7 Support", "Custom Workflows"],
            isPopular: true,
            buttonClass: "btn-primary"
        },
        {
            name: "Enterprise",
            description: "For security and control.",
            price: "Custom",
            period: "",
            features: ["Unlimited Everything", "Dedicated Success Manager", "SSO & SCIM", "On-premise Deployment", "Custom SLA"],
            isPopular: false,
            buttonClass: "btn-secondary"
        }
    ];

    return (
        <section className="pricing" id="pricing">
            <div className="container">
                <div className="pricing-header">
                    <h2 className="section-title">Simple, transparent pricing</h2>
                    <p className="section-subtitle">Scale your operations without unpredictable costs. Upgrade or downgrade at any time.</p>
                </div>

                <div className="pricing-grid">
                    {plans.map((plan, index) => (
                        <motion.div
                            key={plan.name}
                            className={`pricing-card ${plan.isPopular ? 'popular soft-shadow' : ''}`}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1, duration: 0.5 }}
                        >
                            {plan.isPopular && <div className="popular-badge">Most Popular</div>}

                            <div className="plan-header">
                                <h3 className="plan-name">{plan.name}</h3>
                                <p className="plan-description">{plan.description}</p>
                            </div>

                            <div className="plan-price-wrapper">
                                <span className="plan-price">{plan.price}</span>
                                <span className="plan-period">{plan.period}</span>
                            </div>

                            <ul className="plan-features">
                                {plan.features.map((feature, fIndex) => (
                                    <li key={fIndex}>
                                        <Check size={18} className={plan.isPopular ? "text-accent" : "text-primary-500"} />
                                        <span>{feature}</span>
                                    </li>
                                ))}
                            </ul>

                            <button className={`btn ${plan.buttonClass} w-full`}>
                                Get Started
                            </button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Pricing;
