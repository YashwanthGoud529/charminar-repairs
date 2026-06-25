'use client';

import React from 'react';
import Link from 'next/link';
import './TrustFeatures.css';

const BottomCTA = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`py-5 text-center ${bgClass}`}>
            <div className="container px-3 px-md-4">
                <div className="bottom-cta-container">
                    <div className="bottom-cta-decor-blob-1"></div>
                    <div className="bottom-cta-decor-blob-2"></div>
                    
                    <div className="bottom-cta-content">
                        <span className="bottom-cta-badge">SAME-DAY ASSISTANCE</span>
                        <h2 className="bottom-cta-title">Ready to Experience the Difference?</h2>
                        <p className="bottom-cta-desc">
                            Join thousands of families in Hyderabad who trust MeeHelper for their home services. Get ₹100 off your first service booking today!
                        </p>
                        
                        <div className="d-flex justify-content-center gap-3 flex-wrap">
                            <Link href="/contact-us" className="bottom-cta-btn-primary shadow">
                                <i className="fas fa-calendar-check me-2"></i> Book Online Now
                            </Link>
                            <a href="tel:8008615049" className="bottom-cta-btn-secondary">
                                <i className="fas fa-phone-alt me-2"></i> Call 8008615049
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BottomCTA;
