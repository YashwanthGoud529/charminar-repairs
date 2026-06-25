'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import './Hero.css';

const HERO_SERVICES = [
    { title: 'AC Repair', icon: '/assets/Images/appliance/icons/ac.jpg', link: '/ac-repairing/' },
    { title: 'Washing Machine', icon: '/assets/Images/appliance/icons/washing-machine.jpg', link: '/washing-machine-repairing/' },
    { title: 'Refrigerator', icon: '/assets/Images/appliance/icons/fridge.jpg', link: '/refrigerator-repairing/' },
    { title: 'Television', icon: '/assets/Images/appliance/icons/tv.jpg', link: '/television-repairing/' },
    { title: 'Microwave', icon: '/assets/Images/appliance/icons/microwave.jpg', link: '/microwave-repairing/' },
    { title: 'RO Purifier', icon: '/assets/Images/appliance/icons/water-purifier.jpg', link: '/water-purifier-servicing/' },
    { title: 'Geyser Repair', icon: '/assets/Images/appliance/icons/geyser-repair.jpg', link: '/geyser-repairing/' },
    { title: 'Gas Stove', icon: '/assets/Images/appliance/icons/stove.jpg', link: '/gas-stove-repairing/' },
    { title: 'Chimney', icon: '/assets/Images/appliance/icons/chimney.jpg', link: '/kitchen-chimney-servicing/' }
];

const Hero = () => {
    return (
        <section className="hero-section-v3">
            <div className="container">
                <div className="row align-items-center">
                    {/* Left: Content */}
                    <div className="col-lg-6 pb-5 pb-lg-0 text-start mobile-center animate-fade-in-up">
                        <h1 className="hero-title-v3">
                            Expert Appliance <br />
                            <span className="text-orange">Repair in Hyderabad</span>
                        </h1>

                        {/* Trust Micro-copy Tag */}
                        <div className="hero-trust-tag mb-3 d-flex flex-wrap align-items-center gap-2 justify-content-start mobile-center">
                            <span className="trust-badge-mini py-1 px-2 bg-success-soft text-success rounded fw-bold" style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                ⭐ 4.85/5 Rated
                            </span>
                            <span className="trust-badge-mini py-1 px-2 bg-primary-soft text-primary rounded fw-bold" style={{ fontSize: '12px', display: 'inline-flex', alignItems: 'center', gap: '4px' }}>
                                👷 ISO 9001:2015
                            </span>
                            <span className="trust-text small text-muted font-inter fw-medium">
                                Trusted by 15k+ families
                            </span>
                        </div>

                        {/* CTA Buttons */}
                        {/* <div className="hero-cta-group mb-4 d-flex flex-wrap align-items-center gap-3 justify-content-start mobile-center">
                            <Link href="/contact-us" className="hero-btn-primary">
                                <i className="fas fa-calendar-check me-2"></i>Book a Technician
                            </Link>
                            <a href="tel:+918008615049" className="hero-btn-secondary">
                                <i className="fas fa-phone-alt me-2"></i>Call 8008615049
                            </a>
                        </div> */}

                        <div className="service-selector-card-v3 mt-4">
                            <h2 className="service-card-title-v3">What are you looking for?</h2>
                            <div className="service-grid-v3">
                                {HERO_SERVICES.map((service, index) => (
                                    <Link key={index} href={service.link} className="service-item-v3">
                                        <div className="service-icon-wrap-v3">
                                            <Image 
                                                src={service.icon} 
                                                alt={`Expert ${service.title} Service`} 
                                                width={48} 
                                                height={48}
                                                priority={index < 4}
                                            />
                                        </div>
                                        <span className="service-label-v3">{service.title}</span>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Right: Collage — hidden on mobile, lazy on desktop */}
                    <div className="col-lg-6 d-none d-lg-block">
                        <div className="hero-collage-v3">
                            <div className="collage-col collage-col-left">
                                <div className="collage-item collage-item-tall">
                                    <Image 
                                        src="/images/service_ac_repair.png" 
                                        alt="AC Repair Service Hyderabad" 
                                        width={280} 
                                        height={400} 
                                        className="img-fluid rounded-3"
                                        priority
                                        sizes="(max-width: 1024px) 0vw, 22vw"
                                    />
                                </div>
                                <div className="collage-item collage-item-short">
                                    <Image 
                                        src="/images/service_kitchen_repair.png" 
                                        alt="Kitchen Appliance Repair" 
                                        width={280} 
                                        height={180} 
                                        className="img-fluid rounded-3"
                                        loading="lazy"
                                        sizes="(max-width: 1024px) 0vw, 22vw"
                                    />
                                </div>
                            </div>
                            <div className="collage-col collage-col-right">
                                <div className="collage-item collage-item-short">
                                    <Image 
                                        src="/images/service_kitchen_repair.png"
                                        alt="Appliance Repair Technician Hyderabad"
                                        width={280}
                                        height={180}
                                        className="img-fluid rounded-3"
                                        loading="lazy"
                                        sizes="(max-width: 1024px) 0vw, 22vw"
                                    />
                                </div>
                                <div className="collage-item collage-item-tall">
                                    <Image 
                                        src="/images/service_ac_repair.png" 
                                        alt="AC Repair" 
                                        width={280} 
                                        height={400} 
                                        className="img-fluid rounded-3"
                                        loading="lazy"
                                        sizes="(max-width: 1024px) 0vw, 22vw"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Hero;

