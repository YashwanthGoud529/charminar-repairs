'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import './AboutContent.css';

const AboutContent = ({ aboutSchema }) => {
    // --- SVG Phone Icon ---
    const PhoneAltIcon = () => (
        <svg width="20" height="20" fill="currentColor" viewBox="0 0 24 24" className="text-purple">
            <path d="M6.62 10.79c1.44 2.83 3.76 5.15 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
    );

    return (
        <main className="about-page bg-light-soft">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(aboutSchema) }}
            />
            {/* Reusable Page Hero */}
            <PageHero
                title="Our Legacy of Excellence"
                subtitle="Charminar Repairs has been Hyderabad's most trusted name in home appliance restoration for over 13 years. We don't just fix appliances; we restore your household's peace of mind."
                breadcrumb="About Us"
            />

            {/* Main Intro Section */}
            <section className="about-intro py-5 position-relative overflow-hidden pt-5 mt-4">
                <div className="bg-decoration-blob top-0 start-0"></div>
                <div className="container custom-container py-5 position-relative z-1">
                    <div className="row align-items-center g-5">
                        <div className="col-lg-7">
                            <div className="section-tag mb-3">SINCE 2013</div>
                            <h2 className="display-5 fw-black text-dark-blue mb-4 tracking-tight">
                                Setting the <span className="text-purple">Elite Standard</span> for Engineering Care.
                            </h2>
                            <p className="mb-5 fs-5 text-muted lh-base">
                                For over a decade, we have pioneered the standard for doorstep technical care in Hyderabad. Our approach combines traditional engineering mastery with modern diagnostic precision to ensure your appliances perform at factory-spec efficiency.
                            </p>
                            
                            <div className="row g-4 mb-5">
                                {[
                                    { text: "Upfront pricing with 100% transparency", bold: "Fixed Quotes", icon: "/images/ok_icon.png" },
                                    { text: "Strategic units in every major Hyderabad zone", bold: "Rapid Dispatch", icon: "/images/truck_icon.png" },
                                    { text: "Manufacturer-certified master technicians", bold: "Certified Masters", icon: "/images/diploma_icon.png" },
                                    { text: "Comprehensive 1-Year platinum warranty", bold: "Secured Quality", icon: "/images/prize_icon.svg" }
                                ].map((item, i) => (
                                    <div key={i} className="col-md-6">
                                        <div className="premium-mini-card">
                                            <div className="mini-icon-box">
                                                <img src={item.icon} alt="icon" width="32" height="32" />
                                            </div>
                                            <div>
                                                <div className="fw-bold text-dark fs-6">{item.bold}</div>
                                                <div className="text-muted small">{item.text}</div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <div className="d-flex flex-wrap gap-4 align-items-center">
                                <Link href="/contact-us" className="btn-premium-purple shadow-lg">
                                    BOOK A TECHNICIAN
                                </Link>
                                <div className="contact-info-hub d-flex align-items-center gap-3">
                                    <div className="hub-icon bg-white shadow-sm d-flex align-items-center justify-content-center" style={{ width: '56px', height: '56px', borderRadius: '12px' }}>
                                        <PhoneAltIcon />
                                    </div>
                                    <div>
                                        <div className="small fw-bold text-muted text-uppercase tracking-widest" style={{ fontSize: '10px' }}>Support Hotline</div>
                                        <div className="h4 mb-0 fw-black text-dark">8008615049</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="image-stack-premium">
                                <img src="/images/unsplash_1581091226825.png" alt="Engineering" className="main-img shadow-2xl" />
                                <div className="floating-stat-card shadow-2xl">
                                    <div className="stat-num">13+</div>
                                    <div className="stat-label">YEARS OF<br/>TRUST</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Core Values / Vision */}
            <section className="vision-mission py-5 bg-white border-top border-bottom border-light">
                <div className="container custom-container py-4">
                    <div className="row g-4">
                        <div className="col-lg-6">
                            <div className="vision-card-premium h-100 p-5">
                                <div className="tag-premium mb-4">OUR VISION</div>
                                <h3 className="fw-black mb-4 fs-2">The Future of <span className="text-purple">Care</span>.</h3>
                                <p className="text-muted mb-0 fs-5 lh-base">
                                    To redefine home services as a seamless, high-tech experience where appliance maintenance is proactive rather than reactive, serving every household with world-class reliability.
                                </p>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <div className="vision-card-premium h-100 p-5 bg-dark text-white">
                                <div className="tag-premium mb-4 text-warning">OUR MISSION</div>
                                <h3 className="fw-black mb-4 fs-2">Engineering <span className="text-warning">Perfection</span>.</h3>
                                <p className="opacity-75 mb-0 fs-5 lh-base">
                                    Our mission is to eliminate household downtime by providing the fastest, most precise technical restoration service in Hyderabad using only factory-original components.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Professional Protocol Section */}
            <section className="professional-protocol py-5 my-5 bg-repair-purple text-white overflow-hidden position-relative" style={{ borderRadius: '16px' }}>
                <div className="bg-decoration-blob top-0 start-0 opacity-10"></div>
                <div className="container custom-container py-5 position-relative z-1">
                    <div className="text-center mb-5">
                        <span className="badge bg-white text-purple px-4 py-2 mb-3 fw-bold">OUR PROCESS</span>
                        <h2 className="fw-black fs-1 text-white">How Excellence is Engineered.</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { num: "01", t: "Smart Diagnosis", d: "Deep computerized scan to locate the micro-fault without guesswork." },
                            { num: "02", t: "Fixed Allocation", d: "We provide an upfront quote based on the official brand rate card." },
                            { num: "03", t: "Precision Restoration", d: "Technician uses OEM parts to restore original performance levels." },
                            { num: "04", t: "Quality Verification", d: "A master engineer verifies the repair before providing the warranty." }
                        ].map((step, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="protocol-card p-4 border border-white-10 h-100" style={{ borderRadius: '12px' }}>
                                    <div className="step-num text-white opacity-50 fw-black mb-3 fs-3">{step.num}</div>
                                    <h4 className="fw-bold text-white mb-2">{step.t}</h4>
                                    <p className="text-white opacity-75 small mb-0 lh-base">{step.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Pillar Section */}
            <section className="pillars py-5">
                <div className="container custom-container py-5">
                    <div className="text-center mb-5">
                        <span className="badge bg-soft-purple text-purple px-4 py-2 mb-3">WHY CHOOSE US</span>
                        <h2 className="fw-black text-dark-blue fs-1">Technical Integrity in Every Step.</h2>
                    </div>
                    <div className="row g-4">
                        {[
                            { t: "OEM Standard", d: "Exclusively using factory-original parts for 100% compatibility.", i: "/images/shield_icon.png" },
                            { t: "Digital Precision", d: "Smart diagnostic tools to pinpoint hidden component failures.", i: "/images/img_icons8_com_3d_fluency_94_line_chart_png.png" },
                            { t: "90-Min Response", d: "Dynamic routing to reach your doorstep in record time.", i: "/images/lightning_bolt_icon.png" },
                            { t: "Upfront Index", d: "Crystal clear pricing breakdowns with zero hidden fees.", i: "/images/scales_icon.png" }
                        ].map((p, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <div className="pillar-card p-4 text-center bg-white shadow-sm border border-light h-100" style={{ borderRadius: '16px' }}>
                                    <div className="pillar-icon mb-3 mx-auto">
                                        <img src={p.i} alt={p.t} width="50" />
                                    </div>
                                    <h5 className="fw-bold text-dark mb-2">{p.t}</h5>
                                    <p className="small text-muted mb-0">{p.d}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Bottom CTA */}
            <section className="cta-about py-5 bg-dark text-white position-relative overflow-hidden">
                <div className="bg-decoration-blob bottom-0 end-0 opacity-25"></div>
                <div className="container custom-container text-center py-5 position-relative z-1">
                    <h2 className="display-6 fw-black mb-4">Ready to Experience the Difference?</h2>
                    <p className="fs-5 opacity-75 mb-5 mx-auto font-inter" style={{ maxWidth: '700px' }}>
                        Join thousands of satisfied families in Hyderabad who trust Charminar Repairs for their household peace of mind.
                    </p>
                    <div className="d-flex justify-content-center gap-3 flex-wrap">
                        <Link href="/contact-us" className="btn btn-warning px-5 py-3 fw-black rounded-3 shadow-lg">
                            BOOK NOW
                        </Link>
                        <a href="tel:8008615049" className="btn btn-outline-light px-5 py-3 fw-black rounded-3 border-2">
                            CALL 8008615049
                        </a>
                    </div>
                </div>
            </section>

            <style id="about-refined-styles">{`
                .about-page { font-family: var(--font-outfit), sans-serif; }
                .fw-black { font-weight: 900; }
                .text-purple { color: #673ab7; }
                .text-dark-blue { color: #0c1228; }
                .bg-soft-purple { background: rgba(103, 58, 183, 0.08); }
                .bg-light-soft { background: #fbfcff; }
                .bg-repair-purple { background: #673ab7 !important; }
                .border-white-10 { border: 1px solid rgba(255,255,255,0.1); }
                
                .section-tag {
                    color: #673ab7;
                    font-weight: 800;
                    font-size: 13px;
                    letter-spacing: 2px;
                    border-left: 3px solid #673ab7;
                    padding-left: 12px;
                }

                .premium-mini-card {
                    display: flex;
                    gap: 15px;
                    align-items: center;
                    padding: 20px;
                    background: #fff;
                    border: 1px solid rgba(0,0,0,0.03);
                    border-radius: 12px;
                    transition: all 0.3s;
                    box-shadow: 0 4px 12px rgba(0,0,0,0.02);
                }

                .premium-mini-card:hover {
                    transform: translateY(-5px);
                    box-shadow: 0 15px 30px rgba(103, 58, 183, 0.08);
                    border-color: rgba(103, 58, 183, 0.2);
                }

                .mini-icon-box {
                    width: 48px;
                    height: 48px;
                    background: #f8faff;
                    border-radius: 8px;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .btn-premium-purple {
                    background: #673ab7;
                    color: #fff;
                    padding: 18px 40px;
                    border: none;
                    border-radius: 12px;
                    font-weight: 800;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                    transition: all 0.3s;
                    text-decoration: none;
                }

                .btn-premium-purple:hover {
                    background: #5e35b1;
                    transform: translateY(-3px);
                    box-shadow: 0 15px 30px rgba(103, 58, 183, 0.3);
                    color: #fff;
                }

                .image-stack-premium {
                    position: relative;
                    padding-bottom: 40px;
                    padding-right: 40px;
                }

                .main-img {
                    width: 100%;
                    border-radius: 12px;
                    border: 8px solid white;
                }

                .floating-stat-card {
                    position: absolute;
                    bottom: 0;
                    right: 0;
                    background: #673ab7;
                    color: white;
                    padding: 25px 35px;
                    border-radius: 12px;
                    text-align: center;
                }

                .stat-num {
                    font-size: 42px;
                    font-weight: 900;
                    line-height: 1;
                    margin-bottom: 5px;
                }

                .stat-label {
                    font-size: 11px;
                    font-weight: 800;
                    letter-spacing: 2px;
                    opacity: 0.8;
                }

                .vision-card-premium {
                    border-radius: 16px;
                    background: #f8faff;
                    border: 1px solid rgba(0,0,0,0.02);
                    transition: all 0.3s;
                }

                .tag-premium {
                    font-weight: 800;
                    font-size: 12px;
                    letter-spacing: 2px;
                    color: #673ab7;
                }

                .pillar-card {
                    border-radius: 16px;
                    transition: all 0.3s;
                }

                .pillar-card:hover {
                    border-color: #673ab7;
                    transform: translateY(-10px);
                    box-shadow: 0 20px 40px rgba(0,0,0,0.06);
                }

                .bg-decoration-blob {
                    position: absolute;
                    width: 600px;
                    height: 600px;
                    background: radial-gradient(circle, rgba(103, 58, 183, 0.08) 0%, rgba(103, 58, 183, 0) 70%);
                    z-index: 0;
                    filter: blur(50px);
                }
            `}</style>
        </main>
    );
};

export default AboutContent;
