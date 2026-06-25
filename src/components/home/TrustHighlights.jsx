'use client';

import React from 'react';
import './TrustFeatures.css';

const TRUST_ITEMS = [
    {
        title: '180-Day Warranty',
        desc: 'Exclusively using genuine OEM spare parts with up to a 6-month worry-free repair warranty.',
        icon: 'fas fa-shield-alt',
        glowClass: 'icon-purple-glow'
    },
    {
        title: 'Certified Master Engineers',
        desc: 'Background-verified, company-trained specialists undergoing routine security and technical audits.',
        icon: 'fas fa-user-shield',
        glowClass: 'icon-orange-glow'
    },
    {
        title: '2-Hour Doorstep Dispatch',
        desc: 'Intelligent zone routing connects you with the nearest expert for lightning-fast same-day repairs.',
        icon: 'fas fa-shipping-fast',
        glowClass: 'icon-teal-glow'
    },
    {
        title: 'Transparent Flat Pricing',
        desc: 'Upfront brand rate cards with zero hidden fee. Inspection visit is free when repair is completed.',
        icon: 'fas fa-receipt',
        glowClass: 'icon-green-glow'
    },
    {
        title: 'Multi-Brand Expertise',
        desc: 'Trained to service all major brands — Samsung, LG, Whirlpool, Bosch, Daikin, Voltas, and 30+ more brands.',
        icon: 'fas fa-star',
        glowClass: 'icon-purple-glow'
    },
    {
        title: 'Zero Hidden Charges',
        desc: 'Upfront quotation before work begins. No surprise additions to your bill. What we quote is what you pay.',
        icon: 'fas fa-check-circle',
        glowClass: 'icon-teal-glow'
    }
];

const TrustHighlights = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`trust-section text-center py-5 ${bgClass}`}>
            <div className="px-lg-5">
                <div className="section-tag-glow animate-fade-in-up">TECHNICAL INTEGRITY</div>
                <h2 className="trust-section-title animate-fade-in-up">Why Hyderabad Trusts {`MeeHelper`}</h2>
                <p className="trust-section-subtitle mb-5 animate-fade-in-up">
                    We combine traditional engineering mastery with modern diagnostic precision to deliver unparalleled home care service.
                </p>

                <div className="trust-cards-grid">
                    {TRUST_ITEMS.map((item, index) => (
                        <div key={index} className="trust-card-premium animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                            <div className={`trust-card-icon-box ${item.glowClass}`}>
                                <i className={`${item.icon} fs-4`}></i>
                            </div>
                            <div className="trust-card-content">
                                <h3 className="trust-card-title">{item.title}</h3>
                                <p className="trust-card-desc">{item.desc}</p>
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
};

export default TrustHighlights;
