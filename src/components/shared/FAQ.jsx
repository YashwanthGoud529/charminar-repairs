'use client';

import React, { useState } from 'react';

const FAQ = ({ items = [], title = "Frequently Asked Questions", subtitle = "Got questions? We've got answers about our repair services in Hyderabad." }) => {
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

    return (
        <section className="faq-section py-5">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
            />
            <div className="container px-lg-5">
                <div className="text-center mb-5">
                    <h2 className="display-5 fw-bold mb-2">{title}</h2>
                    <p className="text-muted">{subtitle}</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="faq-accordion">
                            {items.map((item, index) => (
                                <div key={index} className={`faq-item mb-3 ${activeIndex === index ? 'active' : ''}`}>
                                    <button 
                                        className="faq-question w-100 text-start d-flex justify-content-between align-items-center p-3 p-md-4"
                                        onClick={() => toggleAccordion(index)}
                                    >
                                        <span className="fw-bold">{item.question}</span>
                                        <i className={`fas ${activeIndex === index ? 'fa-minus' : 'fa-plus'} text-orange`}></i>
                                    </button>
                                    <div className={`faq-answer ${activeIndex === index ? 'show' : ''}`}>
                                        <div className="p-3 p-md-4 pt-0 text-muted">
                                            {item.answer}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .faq-section {
                    background: #f8fafc;
                    width: 100%;
                    padding: 80px 0;
                }
                .faq-accordion {
                    width: 100%;
                    max-width: 800px;
                    margin: 0 auto;
                    display: block;
                }
                .faq-item {
                    background: #fff;
                    border: 1px solid #eef2f6;
                    border-radius: 12px;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    margin-bottom: 20px;
                    overflow: hidden;
                    width: 100%;
                    display: block;
                }
                .faq-item.active {
                    border-color: #ff6b00;
                    box-shadow: 0 15px 40px rgba(255,107,0,0.08);
                }
                .faq-question {
                    background: none;
                    border: none;
                    font-size: 1.15rem;
                    color: #0c1228;
                    cursor: pointer;
                    outline: none !important;
                    transition: background 0.3s ease;
                    width: 100%;
                    display: flex;
                    justify-content: space-between;
                    align-items: center;
                    text-align: left;
                }
                .faq-question:hover {
                    background: rgba(255,107,0,0.02);
                }
                .faq-answer {
                    max-height: 0;
                    opacity: 0;
                    overflow: hidden;
                    transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
                    width: 100%;
                }
                .faq-answer.show {
                    max-height: 500px;
                    opacity: 1;
                }
                .text-orange { color: #ff6b00; }
                
                @media (max-width: 768px) {
                    .faq-section { padding: 40px 0; }
                    .faq-question { font-size: 1.05rem; }
                    .faq-item { margin-bottom: 12px; }
                }
            `}</style>
        </section>
    );
};

export default FAQ;
