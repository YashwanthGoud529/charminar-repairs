'use client';

import React from 'react';
import Image from 'next/image';

const AdBanner = () => {
    // --- SVG Rocket Icon ---
    const RocketIcon = () => (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white">
            <path d="M12 2.5a.5.5 0 01.5.5v1.2a10.04 10.04 0 018.8 8.8h1.2a.5.5 0 010 1h-1.2a10.04 10.04 0 01-8.8 8.8V21a.5.5 0 01-1 0v-1.2a10.04 10.04 0 01-8.8-8.8H2.5a.5.5 0 010-1h1.2A10.04 10.04 0 0111.5 4.2V3a.5.5 0 01.5-.5zM12 7a5 5 0 100 10 5 5 0 000-10z"/>
        </svg>
    );

    return (
        <section className="ad-banner-section position-relative container" style={{ paddingBottom: '20px', paddingTop: '20px' }}>
            <div className="container" style={{ maxWidth: '100%' }}>
                <div className="position-relative" style={{ borderRadius: '8px', overflow: 'hidden', width: '100%', margin: '0 auto', boxShadow: '0 10px 30px rgba(0,0,0,0.1)' }}>
                    
                    {/* The Original Background Image */}
                    <div style={{ position: 'relative', width: '100%', aspectRatio: '1200 / 400' }}>
                        <Image 
                            src="/assets/Images/packers-mover-banner.png" 
                            alt="Shifting Anywhere Anytime" 
                            fill
                            className="object-fit-cover"
                            priority
                        />
                    </div>

                    {/* Ultra-Modern Floating Pill Badge */}
                    {/* <div className="position-absolute w-100 d-flex justify-content-center px-3" style={{ bottom: '25px', pointerEvents: 'none', zIndex: 10 }}>
                        <div 
                            className="d-flex align-items-center gap-3 px-4 py-2 rounded-pill shadow-lg" 
                            style={{ 
                                background: 'rgba(15, 23, 42, 0.9)', 
                                backdropFilter: 'blur(12px)',
                                WebkitBackdropFilter: 'blur(12px)',
                                border: '1px solid rgba(255, 255, 255, 0.15)',
                                boxShadow: '0 15px 35px rgba(0,0,0,0.3), inset 0 1px 2px rgba(255,255,255,0.2)',
                                transform: 'translateY(0)',
                                transition: 'all 0.3s ease'
                            }}
                        >
                            <div className="d-flex align-items-center justify-content-center rounded-circle shadow-sm flex-shrink-0" style={{ width: '40px', height: '40px', background: 'linear-gradient(135deg, #ff6b00 0%, #ffc000 100%)' }}>
                                <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-white"><path d="M13.13 22.19L11.5 18.36L9.87 22.19L12 21M5 16H3.45L5 9L12.06 2L19.11 9L20.66 16H19M12 9A2 2 0 1012 13 2 2 0 0012 9Z"/></svg>
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
                    </div> */}

                </div>
            </div>
        </section>
    );
};

export default AdBanner;
