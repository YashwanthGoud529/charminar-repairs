'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import './CarouselShared.css';

import { SERVICE_DATA_MAP } from '@/config/serviceData';
import { toCDN } from '@/config/services';

const SpecializedCleaningUtility = () => {
    const parentService = SERVICE_DATA_MAP['Specialized Cleaning & Utility Services'];
    if (!parentService) return null;

    const services = parentService.subServices.map(sub => ({
        ...sub,
        image: toCDN(sub.image),
        slug: `/${sub.id}/`
    }));

    return (
        <section className="specialized-cleaning-carousel py-5 bg-light-soft" style={{ borderRadius: '12px' }}>
            <div className="container custom-container">
                <div className="d-flex align-items-center mb-4 gap-3">
                    <h2 className="shared-carousel-title mb-0">Specialized Cleaning & Utility Services</h2>
                    <span className="section-status-pill" style={{ background: '#ea580c', color: '#fff' }}>Deep Sanitized</span>
                </div>
                
                <Swiper
                    modules={[Navigation, Autoplay]}
                    navigation
                    autoplay={{
                        delay: 15000,
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
                    className="specialized-cleaning-swiper"
                >
                    {services.map(service => (
                        <SwiperSlide key={service.id}>
                            <Link href={service.slug} className="text-decoration-none">
                                <div className="shared-carousel-card most-booked-card hover-lift">
                                    <div className="img-wrapper safety-img-wrap" style={{ position: 'relative', height: '230px', marginBottom: '16px' }}>
                                        <div className="discount-tag" style={{ background: 'rgba(0, 0, 0, 0.75)', padding: '6px 12px', borderLeft: '4px solid #ea580c' }}>
                                            <span className="get-instant" style={{ fontSize: '11px', color: '#ccc', textTransform: 'uppercase' }}>Starts at</span>
                                            <span className="percentage" style={{ fontSize: '18px', color: '#fff' }}>₹{service.price}</span>
                                            <span className="off-text" style={{ fontSize: '11px', color: '#ea580c' }}>{service.category || 'Cleaning'}</span>
                                        </div>

                                        <Image 
                                            src={service.image} 
                                            alt={`${service.name} in Hyderabad`} 
                                            fill
                                            className="rounded-3 shadow-sm object-fit-cover"
                                            sizes="(max-width: 600px) 66vw, (max-width: 1024px) 40vw, 25vw"
                                        />
                                    </div>
                                    <h3 className="service-title text-center mt-2" style={{ fontSize: '15px', color: '#333', fontWeight: '500' }}>{service.name}</h3>
                                </div>
                            </Link>
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default SpecializedCleaningUtility;
