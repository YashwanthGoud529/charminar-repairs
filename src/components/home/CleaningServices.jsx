'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CleaningServices.css';
import './CarouselShared.css';
import { toCDN } from '@/config/services';

const CATEGORIES = [
    { id: 'home', label: 'Home Cleaning' },
    { id: 'commercial', label: 'Commercial Cleaning' },
    { id: 'furniture', label: 'Furniture Cleaning' },
    { id: 'sanitization', label: 'Sanitization Services' }
];

const CLEANING_SERVICES_DATA = {
    home: [
        { id: 'deep-home-cleaning', title: 'Deep Home Cleaning', price: 3510, discount: '55% OFF', desc: 'ISO-certified complete top-to-bottom house scrubbing & sanitization.', image: '/images/deep-home-cleaning.png' },
        { id: 'empty-home-cleaning', title: 'Empty Home Cleaning', price: 1999, desc: 'Detailed floor wash, cupboard dust-out, and bathroom scrub for vacant flats.', image: '/images/empty-home-cleaning.png' },
        { id: 'kitchen-cleaning', title: 'Kitchen Cleaning', price: 999, desc: 'Heavy degreasing of tiles, slab, backsplash, and cabinet exteriors.', image: '/images/kitchen-cleaning.png' },
        { id: 'bathroom-cleaning', title: 'Bathroom Cleaning', price: 399, desc: 'Intense lime scale removal, tile washing, and tap polishing.', image: '/images/bathroom-cleaning.png' },
        { id: 'balcony-cleaning', title: 'Balcony Cleaning', price: 299, desc: 'Floor pressure scrubbing, railing dusting, and glass wiping.', image: '/images/balcony-cleaning.png' },
        { id: 'windows-and-door-cleaning', title: 'Windows & Door Cleaning', price: 499, desc: 'Detail track vacuuming, window pane wiping, and door polishing.', image: '/images/windows-cleaning.png' },
        { id: 'interior-home-cleaning', title: 'Interior Home Cleaning', price: 2499, desc: 'Cupboards, doors, panels, and switchboards dry vacuuming.', image: 'https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop' }
    ],
    commercial: [
        { id: 'office-cleaning', title: 'Office Cleaning', price: 2499, desc: 'Desk sanitization, carpet vacuuming, and workstation deep scrub.', image: '/images/commercial-cleaning.png' },
        { id: 'water-tank-cleaning', title: 'Water Tank Cleaning', price: 599, desc: 'High pressure tank mud sweep, scrubbing, and chlorine wash.', image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=600&auto=format&fit=crop' },
        { id: 'hotel-cleaning', title: 'Hotel Cleaning', price: 499, desc: 'Commercial room disinfection, bed dusting, and bathroom wash.', image: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=600&auto=format&fit=crop' },
        { id: 'villa-cleaning', title: 'Villa Cleaning', price: 5999, desc: 'Premium deep clean for large properties and villas.', image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop' },
        { id: 'after-party-cleaning', title: 'After Party Cleaning', price: 1499, desc: 'Quick trash bagging, dish wash, and party space floor scrub.', image: 'https://images.unsplash.com/photo-1532634922-8fe0b757fb13?q=80&w=600&auto=format&fit=crop' },
        { id: 'commercial-cleaning', title: 'Commercial Space Cleaning', price: 3, unit: '/ SQFT', desc: 'Slab, floor, and industrial facility scrubbing.', image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?q=80&w=600&auto=format&fit=crop' }
    ],
    furniture: [
        { id: 'sofa-cleaning', title: 'Sofa Cleaning', price: 599, desc: 'Dry vacuuming and shampoo extraction to remove spots and hair.', image: '/images/furniture-cleaning.png' },
        { id: 'carpet-cleaning', title: 'Carpet Cleaning', price: 399, desc: 'Soft bristle carpet brushing & high-suction foam extraction.', image: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&w=600&auto=format&fit=crop' },
        { id: 'mattress-cleaning', title: 'Mattress Cleaning', price: 499, desc: 'UV suction sanitization for dust mites and sweat stain extraction.', image: 'https://images.unsplash.com/photo-1540518614846-7eded433c457?q=80&w=600&auto=format&fit=crop' },
        { id: 'refrigerator-cleaning', title: 'Refrigerator Cleaning', price: 399, desc: 'Tray scrub, gasket mold extraction, and interior disinfection.', image: '/images/refrigerator-cleaning.png' },
        { id: 'cabinet-cleaning', title: 'Cabinet Cleaning', price: 499, desc: 'Wardrobes, kitchen shelves, and drawer internal polishing.', image: 'https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop' },
        { id: 'chair-cleaning', title: 'Chair Cleaning', price: 99, unit: '/ Seat', desc: 'Dining or office chair upholstery wash.', image: 'https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=600&auto=format&fit=crop' },
        { id: 'microwave-cleaning', title: 'Microwave Cleaning', price: 299, desc: 'Interior chamber carbon degreasing and steam wipe.', image: 'https://images.unsplash.com/photo-1574269909862-7e1d70bb8078?q=80&w=600&auto=format&fit=crop' }
    ],
    sanitization: [
        { id: 'home-sanitization', title: 'Home Sanitization', price: 599, desc: 'Hospital-grade cold fogging sanitization for all rooms.', image: '/images/sanitization-service.png' },
        { id: 'office-sanitization', title: 'Office Sanitization', price: 1.5, unit: '/ SQFT', desc: 'Full office ULV mist fogging sanitization.', image: '/images/office-sanitization.png' },
        { id: 'vehicle-sanitization', title: 'Vehicle Sanitization', price: 199, desc: 'Handlebar, dashboard, and AC vent disinfection.', image: 'https://images.unsplash.com/photo-1607860108855-64acf2078ed9?q=80&w=600&auto=format&fit=crop' },
        { id: 'commercial-sanitization', title: 'Commercial Sanitization', price: 2, unit: '/ SQFT', desc: 'Large area mist fogging for gyms, clinics, and shops.', image: '/images/commercial-sanitization.png' }
    ]
};

// Process image URLs with CDN prefix
Object.keys(CLEANING_SERVICES_DATA).forEach(cat => {
    CLEANING_SERVICES_DATA[cat] = CLEANING_SERVICES_DATA[cat].map(item => ({
        ...item,
        image: toCDN(item.image)
    }));
});

const CleaningServices = () => {
    const [activeCategory, setActiveCategory] = useState('home');

    return (
        <section className="shared-carousel-section cleaning-services-section py-5 bg-light-soft">
            <div className="container custom-container">
                <div className="d-flex flex-column flex-md-row align-items-md-center justify-content-between mb-4 gap-3">
                    <div className="d-flex align-items-center gap-3">
                        <h2 className="shared-carousel-title mb-0">Cleaning & Sanitization</h2>
                        <span className="section-status-pill" style={{ background: '#28a745', color: '#fff' }}>100% Hygienic</span>
                    </div>
                </div>

                {/* Tabs Row */}
                <div className="cleaning-tabs-row no-scrollbar">
                    {CATEGORIES.map(cat => (
                        <button
                            key={cat.id}
                            onClick={() => setActiveCategory(cat.id)}
                            className={`cleaning-tab-btn ${activeCategory === cat.id ? 'active' : ''}`}
                        >
                            {cat.label}
                        </button>
                    ))}
                </div>

                {/* Swiper Slider */}
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 8000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    spaceBetween={16}
                    slidesPerView={1.2}
                    breakpoints={{
                        600: { slidesPerView: 2.2, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    className="cleaning-services-swiper"
                    key={activeCategory} // Reset swiper position on tab change
                >
                    {CLEANING_SERVICES_DATA[activeCategory].map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={`/${service.id}/`} className="text-decoration-none">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '230px', marginBottom: '16px' }}>
                                        <div className="discount-tag" style={{ background: 'rgba(0, 0, 0, 0.75)', padding: '6px 12px', borderLeft: '4px solid #28a745', borderTopLeftRadius: '4px', borderBottomRightRadius: '4px' }}>
                                            <span className="get-instant" style={{ fontSize: '11px', color: '#ccc', textTransform: 'uppercase' }}>Starts at</span>
                                            <span className="percentage" style={{ fontSize: '18px', color: '#fff' }}>₹{service.price}</span>
                                            <span className="off-text" style={{ fontSize: '11px', color: '#28a745' }}>{service.discount || service.unit || 'Wash'}</span>
                                        </div>

                                        <Image
                                            src={service.image}
                                            alt={`${service.title} in Hyderabad`}
                                            fill
                                            className="shadow-sm object-fit-cover"
                                            style={{ borderRadius: '4px' }}
                                            sizes="(max-width: 600px) 75vw, (max-width: 1024px) 40vw, 25vw"
                                        />
                                    </div>
                                    <h3 className="service-title text-center mt-2" style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{service.title}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default CleaningServices;
