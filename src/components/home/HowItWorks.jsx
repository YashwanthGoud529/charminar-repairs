'use client';

import React from 'react';
import './TrustFeatures.css';

const STEPS = [
    {
        num: '01',
        title: 'Select Your Service',
        desc: 'Browse our standardized brand rate cards, choose your service, and book in a single click.'
    },
    {
        num: '02',
        title: 'Technician Arrives in 2 Hours',
        desc: 'A background-verified master technician arrives at your doorstep within 2 hours with advanced diagnostic tools.'
    },
    {
        num: '03',
        title: 'Enjoy Peace of Mind',
        desc: 'Restoration is done with genuine OEM parts and backed by a comprehensive 180-day warranty.'
    }
];

const HowItWorks = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`trust-section text-center py-5 border-top border-bottom border-light ${bgClass}`}>
            <div className="container">
                <div className="section-tag-glow animate-fade-in-up">SIMPLE WORKFLOW</div>
                <h2 className="trust-section-title animate-fade-in-up">How Excellence is Delivered</h2>
                <p className="trust-section-subtitle mb-5 animate-fade-in-up">
                    We've simplified appliance care and home maintenance into a fast, transparent doorstep experience.
                </p>

                <div className="how-it-works-timeline row g-4 justify-content-center">
                    <div className="timeline-line"></div>
                    {STEPS.map((step, index) => (
                        <div key={index} className="col-lg-4 col-md-6 col-12 animate-fade-in-up">
                            <div className="step-card-premium">
                                <div className="step-number-badge">{step.num}</div>
                                <h3 className="step-title">{step.title}</h3>
                                <p className="step-desc">{step.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
