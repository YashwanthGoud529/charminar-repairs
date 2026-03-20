'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

import { SERVICE_CANONICAL_MAP } from '@/config/services';
import { SERVICE_DATA_MAP } from '@/config/serviceData';

const SAFETY_SERVICES = [
    'Plumbing Work',
    'Electrical work',
    'Carpenter work',
    'Bird Netting'
].map(title => ({
    id: title,
    title: title,
    image: SERVICE_DATA_MAP[title]?.photo || '/assets/Images/appliance/icons/ac.jpg',
    slug: `/${SERVICE_CANONICAL_MAP[title]}`
}));

const HomeSafety = () => {
    return (
        <section className="shared-carousel-section" style={{ paddingTop: '50px', paddingBottom: '70px', backgroundColor: '#f8f8f8' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px' }}>
                    <h2 className="shared-carousel-title" style={{ marginBottom: 0 }}>Home Repair Services</h2>
                    <span className="section-status-pill">Trained Team</span>
                </div>
                
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4.5, spaceBetween: 20 },
                    }}
                    style={{ padding: '10px 0' }}
                >
                    {SAFETY_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} style={{ textDecoration: 'none' }}>
                                <div className="shared-carousel-card most-booked-card" style={{ cursor: 'pointer' }}>
                                    <div className="img-wrapper" style={{ marginBottom: '16px', position: 'relative' }}>
                                        {/* Discount Badge */}
                                        <div className="discount-tag">
                                            <span className="get-instant">Get Instant</span>
                                            <span className="percentage">20%</span>
                                            <span className="off-text">OFF</span>
                                            <span className="booking-text">On First Booking</span>
                                        </div>

                                        <img 
                                            src={service.image} 
                                            alt={service.title} 
                                            loading="lazy" 
                                            style={{ 
                                                borderRadius: '8px', 
                                                width: '100%', 
                                                aspectRatio: '1 / 1', 
                                                objectFit: 'cover',
                                                boxShadow: '0 4px 15px rgba(0,0,0,0.06)'
                                            }} 
                                            onError={(e) => {
                                                e.target.style.backgroundColor = '#f3f4f6';
                                                e.target.style.padding = '20px';
                                                e.target.src = '/assets/Images/appliance/icons/ac.jpg'; 
                                            }}
                                        />
                                    </div>
                                    <h3 className="service-title" style={{ fontSize: '15px', color: '#333', textAlign: 'center', fontWeight: '500' }}>{service.title}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default HomeSafety;
