'use client';

import React from 'react';
import Image from 'next/image';

const PageHero = ({ title, subtitle, breadcrumb, bgImage = '/images/About-Hero-BG.jpg', icon }) => {
    return (
        <section className="inner-hero">
            <div className="hero-overlay"></div>
            {/* Dynamic 3D Asset for Inner Pages */}
            <div className="floating-asset-container">
                <Image
                    src={icon || "/images/ac.png"}
                    alt={`Expert ${title} Illustration`}
                    width={300}
                    height={300}
                    className="floating-asset"
                    priority
                />
            </div>

            <div className="container custom-container d-flex flex-column justify-content-center h-100 pb-4">
                <div className="row text-start align-items-center">
                    <div className="col-lg-12">
                        {breadcrumb && (
                            <nav aria-label="breadcrumb">
                                <ul className="hero-breadcrumbs mb-3">
                                    <li className="hero-crumb"><a href="/" className="crumb-link">HOME</a></li>
                                    <li className="hero-separator">/</li>
                                    <li className="hero-crumb active-crumb">{breadcrumb}</li>
                                </ul>
                            </nav>
                        )}
                        <h1 className="page-title">{title}</h1>
                        {subtitle && <p className="page-subtitle mb-0">{subtitle}</p>}
                        <div className="hero-accent-line"></div>
                    </div>
                </div>
            </div>

            <style jsx>{`
                .inner-hero {
                    position: relative !important;
                    background: ${bgImage ? `url(${bgImage})` : '#0c1228'} !important;
                    background-size: cover !important;
                    background-position: center !important;
                    height: 45vh !important;
                    min-height: 380px !important;
                    overflow: hidden !important;
                    display: block !important;
                }

                .hero-overlay {
                    position: absolute !important;
                    inset: 0 !important;
                    background: linear-gradient(to bottom, rgba(12, 18, 40, 0.92) 0%, rgba(12, 18, 40, 0.8) 100%) !important;
                    pointer-events: none !important;
                    z-index: 1 !important;
                }

                .custom-container {
                    position: relative !important;
                    z-index: 10 !important;
                }

                .hero-breadcrumbs {
                    background: transparent !important;
                    padding: 0 !important;
                    margin: 0 !important;
                    display: flex !important;
                    align-items: center !important;
                    gap: 12px !important;
                    list-style: none !important;
                }

                .hero-separator {
                    color: rgba(255, 255, 255, 0.4) !important;
                    font-size: 1rem !important;
                }

                .crumb-link {
                    color: #673ab7 !important;
                    text-decoration: none !important;
                    font-weight: 800 !important;
                    font-size: 0.75rem !important;
                    letter-spacing: 0 !important;
                }

                .active-crumb {
                    color: rgba(255, 255, 255, 0.8) !important;
                    font-size: 0.75rem !important;
                    font-weight: 800 !important;
                    letter-spacing: 0 !important;
                    text-transform: uppercase !important;
                }

                .page-title {
                    font-family: var(--font-outfit), sans-serif !important;
                    font-size: 3rem !important;
                    font-weight: 950 !important;
                    color: #ffffff !important;
                    margin-bottom: 12px !important;
                    line-height: 1.1 !important;
                    letter-spacing: 0 !important;
                }

                .page-subtitle {
                    font-size: 1.25rem !important;
                    color: rgba(255, 255, 255, 0.85) !important;
                    max-width: 850px !important;
                    line-height: 1.6 !important;
                    font-family: var(--font-outfit), sans-serif !important;
                }

                .hero-accent-line {
                    width: 70px !important;
                    height: 5px !important;
                    background: #673ab7 !important;
                    margin-top: 28px !important;
                    border-radius: 10px !important;
                    position: relative !important;
                }

                .hero-accent-line::after {
                    content: '' !important;
                    position: absolute !important;
                    left: 85px !important;
                    top: 50% !important;
                    transform: translateY(-50%) !important;
                    width: 30px !important;
                    height: 5px !important;
                    background: rgba(255, 255, 255, 0.2) !important;
                    border-radius: 10px !important;
                }

                .floating-asset-container {
                    position: absolute !important;
                    right: 8% !important;
                    top: 50% !important;
                    transform: translateY(-50%) rotate(-5deg) !important;
                    width: 300px !important;
                    height: 300px !important;
                    opacity: 0.12 !important;
                    filter: drop-shadow(0 0 30px rgba(103, 58, 183, 0.3)) !important;
                    animation: float-inner 8s infinite ease-in-out !important;
                    pointer-events: none !important;
                    z-index: 5 !important;
                }

                .floating-asset {
                    width: 100% !important;
                    height: 100% !important;
                    object-fit: contain !important;
                }

                @keyframes float-inner {
                    0%, 100% { transform: translateY(-50%) rotate(-5deg) scale(1.1); }
                    50% { transform: translateY(-55%) rotate(5deg) scale(1.15); }
                }

                @media (max-width: 991px) {
                    .page-title { font-size: 2.5rem !important; }
                    .inner-hero { height: auto !important; padding: 140px 0 100px !important; }
                    .floating-asset { width: 220px !important; right: 2% !important; opacity: 0.08 !important; }
                }

                @media (max-width: 768px) {
                    .page-title { font-size: 2.2rem !important; }
                    .page-subtitle { font-size: 1.1rem !important; }
                    .floating-asset { display: none !important; }
                }

            `}</style>
        </section>
    );
};

export default PageHero;
