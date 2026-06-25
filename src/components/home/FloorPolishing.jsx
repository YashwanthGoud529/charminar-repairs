'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

import { toCDN } from '@/config/services';

const FLOOR_POLISHING_SERVICES = [
    { id: 'mosaic-floor-polishing', title: 'Mosaic Floor Polishing', price: '15', image: '/images/mosaic-floor-polishing.png', slug: '/mosaic-floor-polishing/' },
    { id: 'indian-marble-floor-polishing', title: 'Indian Marble Floor Polishing', price: '18', image: '/images/indian-marble-floor-polishing.png', slug: '/indian-marble-floor-polishing/' },
    { id: 'italian-marble-floor-polishing', title: 'Italian Marble floor Polishing', price: '40', image: '/images/italian-marble-floor-polishing.png', slug: '/italian-marble-floor-polishing/' },
    { id: 'granite-floor-polishing', title: 'Granite Floor Polishing', price: '20', image: '/images/granite-floor-polishing.png', slug: '/granite-floor-polishing/' },
].map(service => ({ ...service, image: toCDN(service.image) }));

const FloorPolishing = ({ bgColor }) => {
    const bgClass = bgColor === 'gray' ? 'section-bg-gray' : 'section-bg-white';
    return (
        <section className={`floor-polishing-carousel py-5 ${bgClass}`} style={{ borderRadius: '4px' }}>
            <div className="container custom-container">
                <div className="d-flex align-items-center mb-4 gap-3">
                    <h2 className="shared-carousel-title mb-0">Floor Polishing</h2>
                    <span className="section-status-pill" style={{ background: '#ffc107', color: '#000' }}>Shine Like New</span>
                </div>
                
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 11000,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: true
                    }}
                    speed={1000}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    breakpoints={{
                        600: { slidesPerView: 2.5, spaceBetween: 20 },
                        1024: { slidesPerView: 4, spaceBetween: 20 },
                    }}
                    className="floor-polishing-swiper"
                >
                    {FLOOR_POLISHING_SERVICES.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} className="text-decoration-none">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '230px', marginBottom: '16px' }}>
                                        <div className="discount-tag" style={{ background: 'rgba(0, 0, 0, 0.75)', padding: '6px 12px', borderLeft: '4px solid #ffc107' }}>
                                            <span className="get-instant" style={{ fontSize: '11px', color: '#ccc', textTransform: 'uppercase' }}>Starts at</span>
                                            <span className="percentage" style={{ fontSize: '18px', color: '#fff' }}>₹{service.price}</span>
                                            <span className="off-text" style={{ fontSize: '11px', color: '#ffc107' }}>Per SQFT</span>
                                        </div>

                                        <Image 
                                            src={service.image} 
                                            alt={`${service.title} in Hyderabad`} 
                                            fill
                                            className="rounded-3 shadow-sm object-fit-cover"
                                            sizes="(max-width: 600px) 66vw, (max-width: 1024px) 40vw, 25vw"
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

export default FloorPolishing;
