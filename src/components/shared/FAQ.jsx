'use client';

import React, { useState } from 'react';

const FAQ = ({ 
    items = [], 
    title = "Frequently Asked Questions", 
    subtitle = "Got questions? We've got answers about our repair services in Hyderabad.",
    compact = false,
    onViewAllClick = null,
    bgColor = "gray"
}) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // JSON-LD for FAQPage Schema
    const faqSchema = {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": items.map(item => ({
            "@type": "Question",
            "name": item.question,
            "acceptedAnswer": {
                "@type": "Answer",
                "text": item.answer
              }
        }))
    };

    const toggleAccordion = (index) => {
        setActiveIndex(activeIndex === index ? -1 : index);
    };

    const backgroundVal = bgColor === 'white' ? '#ffffff' : '#f8fafc';

    return (
        <section className={`faq-section d-block w-100 ${compact ? 'faq-compact' : ''}`} style={{ backgroundColor: backgroundVal, padding: compact ? '40px 0' : '80px 0' }}>
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container px-lg-5">
                <div className="text-center mb-4">
                    <h2 className={`${compact ? 'fs-3' : 'display-5'} fw-bold mb-2 font-outfit`}>{title}</h2>
                    <p className="text-muted font-inter small">{subtitle}</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="faq-accordion">
                            {items.map((item, index) => (
                                <div key={index} className={`faq-item ${compact ? 'mb-2' : 'mb-4'} shadow-sm ${activeIndex === index ? 'active' : ''}`} style={{
                                    backgroundColor: '#fff',
                                    borderRadius: '4px',
                                    border: activeIndex === index ? (compact ? '1.5px solid #ff6b00' : '2px solid #ff6b00') : '1px solid #eef2f6',
                                    overflow: 'hidden',
                                    transition: 'all 0.3s ease'
                                }}>
                                    <button 
                                        className={`faq-question w-100 text-start d-flex justify-content-between align-items-center ${compact ? 'p-3' : 'p-4'}`}
                                        style={{ background: 'none', border: 'none', cursor: 'pointer', outline: 'none' }}
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className={`fw-bold font-outfit ${compact ? 'fs-6' : 'fs-5'} ${activeIndex === index ? 'text-dark' : 'text-secondary'}`}>{item.question}</span>
                                        <div className="faq-icon-wrapper" style={{ transition: 'transform 0.4s' }}>
                                            {activeIndex === index ? (
                                                <svg width={compact ? "18" : "24"} height={compact ? "18" : "24"} fill="none" viewBox="0 0 24 24" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="18" y1="12" x2="6" y2="12"></line>
                                                </svg>
                                            ) : (
                                                <svg width={compact ? "18" : "24"} height={compact ? "18" : "24"} fill="none" viewBox="0 0 24 24" stroke="#ff6b00" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                                                    <line x1="12" y1="5" x2="12" y2="19"></line>
                                                    <line x1="5" y1="12" x2="19" y2="12"></line>
                                                </svg>
                                            )}
                                        </div>
                                    </button>
                                    <div className={`faq-answer-collapse ${activeIndex === index ? 'show' : ''}`} style={{
                                        maxHeight: activeIndex === index ? '1000px' : '0',
                                        opacity: activeIndex === index ? '1' : '0',
                                        transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                                        overflow: 'hidden'
                                    }}>
                                        <div className={`${compact ? 'px-3 pb-3' : 'px-4 pb-4'} text-muted font-inter ${compact ? 'small lh-normal' : 'fs-6 lh-lg'}`}>
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                            
                            {onViewAllClick && (
                                <div className="text-center mt-4">
                                    <button 
                                        onClick={onViewAllClick} 
                                        className="btn btn-outline-danger px-4 py-2 fw-bold"
                                        style={{ borderRadius: compact ? '4px' : '8px', borderWidth: '2px' }}
                                    >
                                        View All FAQs
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
