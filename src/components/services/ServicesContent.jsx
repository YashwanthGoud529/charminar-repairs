'use client';

import React from 'react';
import Link from 'next/link';
import PageHero from '@/components/shared/PageHero';
import SEOContent from '@/components/seo/SEOContent';
import BookBanner from '@/components/home/BookBanner';
import './ServicesContent.css';

const ServicesContent = ({ serviceListSchema, services }) => {
    return (
        <main className="services-page-main">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceListSchema) }}
            />
            {/* Unified Page Hero */}
            <PageHero
                title="Professional Appliance Repair Services"
                subtitle="From high-end cooling systems to essential kitchen tools, Charminar Repairs provides expert fixes with genuine parts and a 1-year warranty across Hyderabad."
                breadcrumb="Our Services"
            />

            {/* Intro Stats Section with Local Icons */}
            <section className="services-intro py-5">
                <div className="container custom-container">
                    <div className="row g-4 justify-content-center">
                        {[
                            { t: "Fast Arrival", d: "Within 2 Hours", i: "/images/clock_icon.png" },
                            { t: "Verified Techs", d: "Certified Experts", i: "/images/worker_icon.png" },
                            { t: "Genuine Parts", d: "Factory Approved", i: "/images/guarantee_icon.png" },
                            { t: "Support 24/7", d: "Instant Booking", i: "/images/phone_icon.svg" }
                        ].map((stat, i) => (
                            <div key={i} className="col-lg-3 col-md-6">
                                <article className="stat-card text-center">
                                    <div className="stat-image-wrapper">
                                        <img src={stat.i} alt={stat.t} loading="lazy" width="80" height="80" />
                                    </div>
                                    <h5 className="mb-2 font-outfit">{stat.t}</h5>
                                    <p className="text-muted small mb-0 font-inter">{stat.d}</p>
                                </article>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* All Services Grid */}
            <section className="services-grid-all py-5 mt-5">
                <div className="container custom-container">
                    <div className="text-center mb-5 pb-lg-4">
                        <span className="text-orange fw-bold text-uppercase small letter-spacing-2 mb-2 d-block">Premium Repair Solutions</span>
                        <h2 className="font-outfit">
                            Our Professional <span className="highlight">Appliance Repair</span> Services
                        </h2>
                        <p className="text-muted mx-auto fs-5 section-desc pt-3">
                            Charminar Repairs offers <strong>comprehensive restoration</strong> for all major home appliances. Our <strong>Hyderabad-wide technical network</strong> ensures that an <strong>expert engineer</strong> is deployed to your doorstep within 90 minutes.
                        </p>
                    </div>
                    <div className="row g-4 justify-content-center">
                        {services.map((service, index) => (
                            <div key={index} className="col-lg-4 col-md-6">
                                <Link href={service.link} className="text-decoration-none">
                                    <article className="service-card d-flex align-items-start gap-4 h-100">
                                        <div className="service-icon-box">
                                            <img src={service.img} alt={service.title} loading="lazy" width="48" height="48" />
                                        </div>
                                        <div>
                                            <h5 className="font-outfit">{service.title}</h5>
                                            <p className="text-muted small mb-3 font-inter">{service.desc}</p>
                                            <span className="text-orange fw-bold small text-uppercase d-flex align-items-center learn-more">
                                                Repair Details <i className="fas fa-arrow-right ms-2" style={{ fontSize: '10px' }}></i>
                                            </span>
                                        </div>
                                    </article>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <BookBanner />

            {/* SEO Informational Section */}
            <section className="services-seo-info py-5">
                <div className="container custom-container px-lg-5">
                    <div className="row g-5">
                        <div className="col-lg-6">
                            <h3 className="font-outfit">Strategic Repair Infrastructure in Hyderabad</h3>
                            <p className="font-inter">
                                When a critical home appliance fails, it disrupts your entire daily workflow. You need more than a temporary patch; you need <strong>precision engineering solutions</strong> from a technical partner you can rely on. <strong>Charminar Repairs</strong> has scaled to become Hyderabad's premier appliance restoration hub by prioritizing <strong>diagnostic accuracy</strong> and <strong>logistical efficiency</strong>.
                            </p>
                            <p className="font-inter">
                                Our technical specialized wings handle complex <strong>inverter PCB diagnostics</strong>, <strong>refrigerant chemical balancing</strong>, and <strong>structural motor winding restoration</strong>. We bridge the gap between expensive brand service centers and unverified local repairmen, offering a <strong>factory-standard experience</strong> at competitive market rates.
                            </p>
                        </div>
                        <div className="col-lg-6">
                            <h3 className="font-outfit">Elite Deployment Strategy & 1-Year Protection</h3>
                            <p className="font-inter">
                                Our <strong>managed doorstep service</strong> is engineered for zero friction. From the moment you secure your booking, our system dispatches a <strong>certified repair engineer</strong> equipped with advanced sensor diagnostics and <strong>OEM-serialized components</strong>. We don't just solve the symptom; we identify the root cause of the failure to prevent future recurrence.
                            </p>
                            <p className="font-inter">
                                Covering every sector from <strong>Hi-Tech City to Charminar</strong>, our decentralized technical hubs ensure a rapid arrival window. Every intervention is backed by our <strong>Platinum 1-Year Performance Warranty</strong>, covering both internal technical components and high-precision labor—giving you permanent peace of mind.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Dynamic SEO Content for Brands & Locations */}
            <SEOContent />

            {/* Trust Quote Section */}
            <section className="trust-cta py-5 my-5">
                <div className="container custom-container">
                    <div className="trust-cta-box d-flex flex-column flex-lg-row align-items-center justify-content-between p-5 text-white shadow-2xl">
                        <div className="mb-4 mb-lg-0 col-lg-8">
                            <h2 className="font-outfit text-white">Can't find your specific appliance on the list?</h2>
                            <p className="mb-0 fs-5 text-white opacity-90 font-inter">Our technical scope is vast. We restore <strong>almost all residential and commercial electric systems</strong> including high-end Air Purifiers, Induction Hobs, and Industrial Blenders. Deploy an expert for a <strong>custom restoration quote</strong> today.</p>
                        </div>
                        <div className="text-center text-lg-end col-lg-4">
                            <a href="tel:8008615049" className="btn px-5 py-3 fw-bold text-white d-inline-flex align-items-center justify-content-center gap-3 btn-call-custom font-outfit text-uppercase tracking-wider">
                                <i className="fas fa-phone-alt"></i>
                                8008615049
                            </a>
                        </div>
                    </div>
                </div>
            </section>

        </main>
    );
};

export default ServicesContent;
