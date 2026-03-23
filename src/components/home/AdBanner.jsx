'use client';

import React from 'react';
import Image from 'next/image';

const AdBanner = () => {
    return (
        <section className="ad-banner-section position-relative container" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
            <div className="container" style={{ maxWidth: '100%' }}>
                <div className="position-relative" style={{ borderRadius: '8px', overflow: 'hidden', width: '100%', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    
                    {/* The Original Background Image */}
                    <Image 
                        src="/assets/Images/packers-mover-banner.png" 
                        alt="Shifting Anywhere Anytime" 
                        width={1200}
                        height={400}
                        style={{ width: '100%', height: 'auto', display: 'block' }} 
                    />

                    {/* Ultra-Modern Floating Pill Badge */}
                    <div className="position-absolute w-100 d-flex justify-content-center px-3" style={{ bottom: '25px', pointerEvents: 'none' }}>
                        <div 
                            className="d-flex align-items-center gap-3 px-4 py-2 rounded-pill shadow-lg effect-lift" 
                            style={{ 
                                background: 'rgba(15, 23, 42, 0.85)', 
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.2), inset 0 1px 2px rgba(255,255,255,0.2)',
                                transform: 'translateY(0)',
                                transition: 'transform 0.3s ease'
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-center rounded-circle shadow-sm" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #ff6b00 0%, #ffc000 100%)' }}>
                                <i className="fas fa-rocket text-white fs-6"></i>
                            </div>
                            <div className="d-flex flex-column text-start py-1 pe-2">
                                <span className="text-warning fw-bold text-uppercase lh-1 mb-1" style={{ fontSize: '0.65rem', letterSpacing: '2px' }}>
                                    New Service
                                </span>
                                <span className="text-white fw-black lh-1" style={{ fontSize: '1.25rem', letterSpacing: '0.5px' }}>
                                    COMING SOON
                                </span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default AdBanner;
