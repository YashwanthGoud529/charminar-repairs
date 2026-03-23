'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import './ServiceAreasContent.css';

const ServiceAreasContent = ({ locations }) => {
    return (
        <main className="service-areas-intl bg-light-soft pb-5">
            {/* Shared Page Hero */}
            <PageHero
                title="Service Areas Across Hyderabad"
                subtitle="Charminar Repairs operates an elite technical network across the city. We guarantee a 90-minute arrival at your doorstep, serving over 100+ major localities in Greater Hyderabad."
                breadcrumb="Service Areas"
            />

            {/* Quick Summary Grid */}
            <section className="areas-summary py-5 mt-4">
                <div className="container custom-container py-5">
                    <div className="row g-4 justify-content-center">
                        {[
                            { t: "Fast Dispatch", d: "90-Min Average Arrival", i: "/images/lightning_bolt_icon.png" },
                            { t: "100+ Localities", d: "Hyderabad & Secunderabad", i: "/images/map_marker_icon.png" },
                            { t: "Expert Engineers", d: "Verified Professional Staff", i: "/images/worker_icon.png" }
                        ].map((item, idx) => (
                            <div key={idx} className="col-lg-4 col-md-6">
                                <article className="premium-summary-card text-center p-5 bg-white shadow-sm border-0">
                                    <div className="summary-icon-wrapper mb-4">
                                        <img src={item.i} alt={item.t} width="64" />
                                    </div>
                                    <h4 className="fw-black fs-4 text-dark mb-2">{item.t}</h4>
                                    <p className="text-muted small mb-0">{item.d}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Map & Logistics Details */}
            <section className="radius-section py-5 section-pt">
                <div className="container custom-container py-4">
                    <div className="row g-5 align-items-center">
                        <div className="col-lg-6">
                            <div className="section-tag mb-3">ELITE LOGISTICS INFRASTRUCTURE</div>
                            <h2 className="display-6 fw-black text-dark-blue mb-4 tracking-tight">Rapid Response Network for Every Household.</h2>
                            <p className="text-muted mb-5 fs-5">Our city-wide technical hubs eliminate traffic delays, ensuring your appliances are restored to standard factory performance within hours.</p>

                            <div className="d-flex flex-column gap-4">
                                <div className="feature-item-logistics bg-white p-4 shadow-sm border border-light">
                                    <div className="log-icon-box bg-purple-soft">
                                        <i className="fas fa-truck-moving text-purple"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-1">Decentralized Transit Hubs</h5>
                                        <p className="text-muted small mb-0">OEM-equipped logistics vans stationed at 12 strategic city points.</p>
                                    </div>
                                </div>
                                <div className="feature-item-logistics bg-white p-4 shadow-sm border border-light">
                                    <div className="log-icon-box bg-blue-soft">
                                        <i className="fas fa-satellite text-primary"></i>
                                    </div>
                                    <div>
                                        <h5 className="fw-bold text-dark mb-1">Precision GPS Routing</h5>
                                        <p className="text-muted small mb-0">Dynamic real-time technician tracking for exact ETA coordination.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="map-frame-premium shadow-2xl p-2 bg-white rounded-3">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d243647.31004!2d78.267959!3d17.412299!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb99daeaeea295%3A0xd9a2b9ef50c4401!2sHyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1717224165610!5m2!1sen!2sin"
                                    width="100%" height="450" style={{ border: 0, borderRadius: '8px' }} allowFullScreen="" loading="lazy">
                                </iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Active Service Grid */}
            <section className="neighborhoods-section py-5 my-5">
                <div className="container custom-container py-4">
                    <div className="text-center mb-5 pb-4 border-bottom border-light">
                        <span className="badge bg-soft-purple text-purple px-4 py-2 mb-3">CITY COVERAGE</span>
                        <h2 className="fw-black text-dark-blue fs-1">Active Service Localities</h2>
                        <p className="text-muted fs-5">Serving all Residential and Commercial hubs in Greater Hyderabad.</p>
                    </div>

                    <div className="row g-4">
                        {locations.map((loc, idx) => {
                            const locationSlug = loc.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                            return (
                                <div key={idx} className="col-6 col-md-4 col-lg-3">
                                    <Link href={`/service-areas/${locationSlug}/`} className="text-decoration-none">
                                        <div className="loc-card-v premium shadow-sm bg-white border border-light p-4">
                                            <div className="d-flex justify-content-between align-items-center mb-3">
                                                <div className="status-dot"></div>
                                                <span className="zip-text">#{loc.zip}</span>
                                            </div>
                                            <h6 className="loc-title fw-bold text-dark mb-1">{loc.name}</h6>
                                            <div className="loc-tag text-muted small">{loc.type}</div>
                                            
                                            <div className="mt-4 pt-4 border-top d-flex align-items-center gap-2 text-purple small fw-bold">
                                                BOOK THIS AREA <i className="fas fa-arrow-right" style={{ fontSize: '10px' }}></i>
                                            </div>
                                        </div>
                                    </Link>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>

            {/* Bottom CTA Section */}
            <section className="area-footer-cta py-5 bg-dark text-white text-center rounded-3 mx-lg-5 overflow-hidden position-relative">
                <div className="container py-5 position-relative z-1">
                    <h2 className="display-6 fw-black mb-4">Don't Live With a Broken Appliance</h2>
                    <p className="opacity-75 mb-5 mx-auto fs-5" style={{ maxWidth: '650px' }}>
                        Our nearest technician is likely just minutes away from your home. Book now for a certified restoration service.
                    </p>
                    <div className="d-flex flex-wrap justify-content-center gap-4">
                        <Link href="/contact-us" className="btn btn-primary px-5 py-3 fw-bold rounded-3 text-uppercase" style={{ background: '#673ab7', borderColor: '#673ab7' }}>
                            CONFIRM BOOKING
                        </Link>
                        <a href="tel:8008615049" className="btn btn-outline-light px-5 py-3 fw-black rounded-3 text-uppercase border-2">
                            CALL SUPPORT
                        </a>
                    </div>
                </div>
            </section>

            <style id="areas-premium-styles">{`
                .service-areas-intl { font-family: var(--font-outfit), sans-serif; }
                .fw-black { font-weight: 900; }
                .text-purple { color: #673ab7; }
                .tracking-tight { letter-spacing: -0.01em; }
                .bg-light-soft { background: #fbfcff; }
                .text-dark-blue { color: #0c1228; }
                .bg-purple-soft { background: #f4effc; }
                .bg-blue-soft { background: #f0f7ff; }

                .section-tag {
                    color: #673ab7;
                    font-weight: 800;
                    font-size: 13px;
                    letter-spacing: 2px;
                    border-left: 3px solid #673ab7;
                    padding-left: 12px;
                }

                .premium-summary-card {
                    border-radius: 8px;
                    transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
                    height: 100%;
                }

                .premium-summary-card:hover {
                    transform: translateY(-8px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06) !important;
                    border-color: rgba(103, 58, 183, 0.1);
                }

                .summary-icon-wrapper {
                    height: 80px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .feature-item-logistics {
                    display: flex;
                    gap: 20px;
                    border-radius: 8px;
                    align-items: center;
                    transition: all 0.3s;
                }

                .log-icon-box {
                    width: 50px;
                    height: 50px;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    flex-shrink: 0;
                }

                .map-frame-premium {
                    border-radius: 8px;
                    border: 1px solid rgba(0,0,0,0.05);
                }

                .loc-card-v {
                    border-radius: 8px;
                    transition: all 0.2s;
                    cursor: pointer;
                }

                .loc-card-v:hover {
                    transform: scale(1.03);
                    border-color: #673ab7 !important;
                    box-shadow: 0 10px 30px rgba(103, 58, 183, 0.1) !important;
                }

                .status-dot {
                    width: 10px;
                    height: 10px;
                    background: #22c55e;
                    border-radius: 50%;
                    box-shadow: 0 0 10px rgba(34, 197, 94, 0.5);
                }

                .zip-text {
                    font-size: 11px;
                    font-weight: 800;
                    color: #94a3b8;
                    letter-spacing: 1px;
                }

                .loc-tag {
                    text-transform: uppercase;
                    letter-spacing: 0.5px;
                    font-weight: 700;
                    font-size: 10px;
                }

                .btn-warning {
                    background-color: #ff6b00;
                    border: none;
                }
                .btn-warning:hover {
                    background-color: #e66000;
                    color: white;
                }

                .bg-soft-purple { background: rgba(103, 58, 183, 0.08); }
            `}</style>
        </main>
    );
};

export default ServiceAreasContent;
