'use client';

import React from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

const PEST_SERVICES = [
    { id: 1, image: '/assets/Images/pest-control/mosquitos-controls.png', title: 'Mosquitoes Control', slug: '/mosquito-control' },
    { id: 2, image: '/assets/Images/pest-control/termite-control.png', title: 'Termite Control', slug: '/termite-control' },
    { id: 3, image: '/assets/Images/pest-control/woodborder-control.png', title: 'Woodborer Control', slug: '/woodborer-control' },
    { id: 4, image: '/assets/Images/pest-control/commercial-pest-control.png', title: 'Commercial Pest Control', slug: '/commercial-pest-control' },
    { id: 5, image: '/assets/Images/pest-control/bed-bugs.png', title: 'Bed Bugs Control', slug: '/bed-bugs-control' },
    { id: 6, image: '/assets/Images/pest-control/cock-roch-control.png', title: 'Cockroach Control', slug: '/cockroach-control' }
];

const PestControl = () => {
    return (
        <section className="shared-carousel-section" style={{ paddingTop: '50px', paddingBottom: '70px', backgroundColor: '#fff' }}>
            <div className="container">
                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '32px', gap: '16px' }}>
                    <h2 className="shared-carousel-title" style={{ marginBottom: 0 }}>Pest Control</h2>
                    <span style={{
                        backgroundColor: '#98f5a6',
                        color: '#111',
                        padding: '4px 16px',
                        borderRadius: '20px',
                        fontSize: '14px',
                        fontWeight: '600'
                    }}>Licensed Company</span>
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
                    {PEST_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} style={{ textDecoration: 'none' }}>
                                <div className="shared-carousel-card most-booked-card" style={{ cursor: 'pointer' }}>
                                    <div className="img-wrapper" style={{ marginBottom: '16px' }}>
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

export default PestControl;
