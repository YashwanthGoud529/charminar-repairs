'use client';

import React from 'react';
import Link from 'next/link';

const SEOContent = () => {
    const brands = [
        "Samsung", "LG", "Whirlpool", "Bosch", "IFB", "Daikin", "Voltas", "Blue Star",
        "Haier", "Godrej", "Panasonic", "Sony", "Hitachi", "Lloyd", "Midea", "Carrier"
    ];

    const areas = [
        "Kukatpally", "Banjara Hills", "Jubilee Hills", "Gachibowli", "Kondapur",
        "Madhapur", "Miyapur", "Chintal", "KPHB", "Nizampet", "SR Nagar", "Secunderabad",
        "Ameerpet", "Begumpet", "Somajiguda", "Himayatnagar", "Uppal", "LB Nagar",
        "Dilsukhnagar", "Alwal", "Bowenpally", "Ecil", "Malkajgiri", "Sainikpuri"
    ];

    const services = [
        "Washing Machine Repair", "Refrigerator Repair", "AC Repair", "Microwave Repair",
        "TV Repair", "Dishwasher Repair", "Air Purifier Repair", "Geyser Repair"
    ];

    return (
        <section className="seo-content-section py-5" style={{ background: '#f8fafc' }}>
            <div className="container custom-container" style={{ maxWidth: '1400px' }}>
                <div className="row g-4">
                    {/* Brands Section */}
                    <div className="col-12">
                        <div className="brand-seo-box p-4 bg-white border shadow-sm" style={{ borderRadius: '8px' }}>
                            <h4 className="mb-4 d-flex align-items-center gap-2" style={{ fontWeight: 800, color: '#0c1228' }}>
                                <i className="fas fa-certificate text-orange"></i> Authorized Brand Service Expertise
                            </h4>
                            <div className="d-flex flex-wrap gap-2">
                                {brands.map((brand, idx) => (
                                    <span key={idx} className="badge bg-light text-dark border p-2 px-3 transition-all hover-glow" style={{ borderRadius: '8px' }}>
                                        {brand} Appliance Repair Hyderabad
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Services Keywords Section */}
                    <div className="col-lg-6">
                        <div className="p-4 bg-white border shadow-sm h-100" style={{ borderRadius: '8px' }}>
                            <h4 className="mb-4 d-flex align-items-center gap-2" style={{ fontWeight: 800, color: '#0c1228' }}>
                                <i className="fas fa-tools text-orange"></i> Core Repair Services
                            </h4>
                            <div className="row g-2">
                                {services.map((service, idx) => (
                                    <div key={idx} className="col-md-6">
                                        <div className="p-2 border-start border-orange border-3 bg-light small" style={{ borderRadius: '0 8px 8px 0' }}>
                                            {service} in Hyderabad
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Highly Targeted Areas Section */}
                    <div className="col-lg-6">
                        <div className="p-4 bg-white border shadow-sm h-100" style={{ borderRadius: '8px', background: 'linear-gradient(to bottom right, #ffffff, #fffdfb)' }}>
                            <h4 className="mb-4 d-flex align-items-center gap-2" style={{ fontWeight: 800, color: '#0c1228' }}>
                                <i className="fas fa-map-marker-alt text-orange"></i> Local Doorstep Presence
                            </h4>
                            <div className="row row-cols-2 row-cols-md-3 g-2">
                                {areas.map((area, idx) => {
                                    const areaSlug = area.toLowerCase().replace(/[''`]/g, '').replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)/g, '');
                                    return (
                                        <div key={idx} className="col">
                                            <Link href={`/ac-repairing-in-${areaSlug}/`} className="text-decoration-none text-muted small hover-orange transition-all d-block">
                                                Repair Service {area}
                                            </Link>
                                        </div>
                                    );
                                })}
                            </div>
                        </div>
                    </div>

                    {/* Long Tail Keywords Box */}
                    <div className="col-12">
                        <div className="p-4 bg-dark text-white shadow-lg overflow-hidden position-relative" style={{ borderRadius: '8px' }}>
                            <div style={{ position: 'absolute', top: '-20px', right: '-20px', opacity: 0.1, fontSize: '100px' }}>
                                <i className="fas fa-search"></i>
                            </div>
                            <h5 className="mb-3 text-orange fw-bold">Popular Searches in Hyderabad</h5>
                            <p className="small mb-0 opacity-75 leading-relaxed">
                                <em>Searching for:</em> Doorstep washing machine repair in Kondapur, Refrigerator gas filling service Hyderabad, AC technician near Gachibowli, Microwave magnetron replacement Banjara Hills, Best TV repair shop in Secunderabad, IFB washing machine service center Kukatpally, Samsung fridge repair Madhapur, LG AC service Chintal, Whirlpool repair Miyapur.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <style jsx>{`
                .text-orange { color: #ff6b00; }
                .border-orange { border-color: #ff6b00 !important; }
                .hover-orange:hover { color: #ff6b00 !important; transform: translateX(3px); }
                .transition-all { transition: all 0.3s ease; }
                .hover-glow:hover { box-shadow: 0 0 15px rgba(255,107,0,0.1); border-color: #ff6b00 !important; }
                .leading-relaxed { line-height: 1.8; }
            `}</style>
        </section>
    );
};

export default SEOContent;
